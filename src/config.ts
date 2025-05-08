import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
  coinDenom: "ustars",
  name: "Embeddable House",
  chainId: "elgafar-1",
  createdDate: "2024-03-31T19:01:01.148Z",
  modifiedDate: "2024-03-31T19:01:01.148Z",
  id: "andromeda",
  collections: [
    {
      auction:
        "andr16gaxpgwa8qk3j5nnkd20cmpxjsk8d0vvwfrlzzqu7xu7qhah508srgtkc5",
      cw721: "andr1s4c6ntnewrdur4703h5pkgav824zj0x4hpnhszgcy3v23vu49z8qywv6xc",
      name: "WorldPeace",
      type: ICollectionType.AUCTION,
      id: "embeddables-auction-1",
      featured: "ANDR1",
    },
  ],
};

export default CONFIG;
