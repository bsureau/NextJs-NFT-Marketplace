import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
    ItemBought as ItemBoughtEvent,
    ItemCanceled as ItemCanceledEvent,
    ItemListed as ItemListedEvent
} from "../generated/NftMarketplace/NftMarketplace"

import { ItemListed, ActiveItem, ItemBought, ItemCanceled } from "../generated/schema"

export function handleItemBought(event: ItemBoughtEvent): void {
    const id: string = getIdFromEventParams(event.params.tokenId, event.params.nftAddressv)

    let itemBought: ItemBought | null = ItemBought.load(id)
    let activeItem: ActiveItem | null = ActiveItem.load(id)

    if (!itemBought) {
        itemBought = new ItemBought(id)
    }

    itemBought.buyer = event.params.sender
    itemBought.nftAddress = event.params.nftAddress
    itemBought.tokenId = event.params.tokenId

    activeItem!.buyer = event.params.sender

    itemBought.save()
    activeItem!.save()
}

export function handleItemCanceled(event: ItemCanceledEvent): void {
    const id: string = getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    let itemCanceled: ItemCanceled | null = ItemCanceled.load(id)
    let activeItem: ActiveItem | null = ActiveItem.load(id)

    if (!itemCanceled) {
        itemCanceled = new ItemCanceled(id)
    }

    itemCanceled.seller = event.params.sender
    itemCanceled.nftAddress = event.params.nftAddress
    itemCanceled.tokenId = event.params.tokenId
    activeItem!.buyer = Address.fromString("0x000000000000000000dEaD")

    itemCanceled.save()
    activeItem.save()
}

export function handleItemListed(event: ItemListedEvent): void {
    const id: string = getIdFromEventParams(event.params.tokenId, event.params.nftAddress)

    let itemListed = ItemListed.load(id)
    let activeItem: ActiveItem | null = ActiveItem.load(id)

    if (!itemListed) {
        itemListed = new ItemListed(id)
    }

    if (!activeItem) {
        activeItem = new ActiveItem(id)
    }

    itemListed.seller = event.params.sender
    activeItem.seller = event.params.sender

    itemListed.nftAddress = event.params.nftAddress
    activeItem.nftAddress = event.params.nftAddress

    itemListed.tokenId = event.params.tokenId
    activeItem.tokenId = event.params.tokenId

    itemListed.price = event.params.price
    activeItem.price = event.params.price

    itemListed.save()
    activeItem.save()
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
    return tokenId.toHexString() + nftAddress.toHexString()
}
