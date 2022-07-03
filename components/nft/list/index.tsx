import { FunctionComponent } from "react";
import { NftMetaData } from "../../../types/nft";
import NftItem from "../item";

type NftListProps = {
  nfts: NftMetaData[];
};
/* eslint-disable @next/next/no-img-element */
const NftList: FunctionComponent<NftListProps> = ({nfts}) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    { nfts.map(nft => 
      <div key={nft.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <NftItem 
        item={nft}
      />
    </div>
    )}
    </div>
  )
}
export default NftList;