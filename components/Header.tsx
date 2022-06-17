import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <Link href="/">
                <a>
                    NFT MARKETPLACE  
                </a>
            </Link>
            <Link href="/sell-nft">
                <a>
                    Sell NFT  
                </a>
            </Link>
            <ConnectButton />
        </nav>
    )
}
