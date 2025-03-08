import { NetworkConfig } from "../types";

export default <NetworkConfig[]>[
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    exploreUrl: "https://solscan.io/account/",
  },
  {
    id: "bsc",
    name: "BNB Chain",
    symbol: "BNB",
    exploreUrl: "https://bscscan.com/address/",
  },
  {
    id: "ether",
    name: "Ethereum",
    symbol: "ETH",
    exploreUrl: "https://etherscan.io/address/",
  },
  {
    id: "ton",
    name: "Ton",
    symbol: "TON",
    exploreUrl: "https://tonscan.org/address/",
  },
];
