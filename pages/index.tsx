import type { NextPage } from "next"
import { useMoralis, useMoralisQuery } from "react-moralis"
import { useEffect, useState } from "react"
import NFTBox from "../components/NftBox"
import { useQuery } from "@apollo/client"
import { GET_ACTIVE_ITEMS } from "../constants/subgraphQueries"
import { privateEncrypt } from "crypto"

const Home: NextPage = () => {
    // TODO: Implement paging in UI
    const { isWeb3Enabled } = useMoralis()

    const marketplaceAddress = process.env.NFT_CONTRACT_ADDRESS || ""

    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    interface NFTAttributes {
        price?: number
        nftAddress: string
        tokenId: string
        seller?: string
    }

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    loading || !listedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.activeItems.map((nft: NFTAttributes /*, index*/) => {
                            console.log(nft)
                            const { price, nftAddress, tokenId, seller } = nft

                            return (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled </div>
                )}
            </div>
        </div>
    )
}
export default Home
