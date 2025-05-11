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
        "andr1ex2rqjjtt83hmesqlhk77l0v9829dnjyvzrappslygegfxfasr8qrs969z",
      cw721: "andr1y39qjagpvd6a8wzw4ra846n0qxwm82ljpwyq5j2qw52mmhj6s3es9yfusr",
      name: "WorldPeace",
      type: ICollectionType.AUCTION,
      id: "embeddables-auction-1",
      featured: "ANDR1",
    },
     {
            crowdfund:
                "andr1yxntwudrkt95yl0lq7dxrc3s0mcddal3u04gtwm42eavm20d50zqw90xh4",
            cw721: "andr1kzpq4vlv5hvxpkx68wltxnagjmga9lvf02zazf3wey75fxxfxs8swltl7j",
            name: "Crowdfund Example",
            type: ICollectionType.CROWDFUND,
            id: "crowdfund",
        },
  ],
};

export default CONFIG;
