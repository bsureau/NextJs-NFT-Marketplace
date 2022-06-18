import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { useMoralisQuery } from "react-moralis"
import NFTBox, { NFTBoxProps } from "../components/NftBox"

const Home: NextPage = () => {
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )

    console.log(listedNfts)

    return (
        <div className={styles.container}>
            {fetchingListedNfts ? (
                <div>Loading...</div>
            ) : (
                listedNfts.map((nft /*, index*/) => {
                    console.log(nft.attributes)
                    const nftAttributes: NFTBoxProps = nft.attributes
                    return (
                        <NFTBox
                            {...nftAttributes}
                            key={`${nftAttributes.nftAddress}${nftAttributes.tokenId}`}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Home
