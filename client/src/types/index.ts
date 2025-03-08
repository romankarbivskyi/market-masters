export interface ApiResponse<T> {
  data: T;
  success: boolean;
}

export interface TradersData {
  byRealizedProfit: TraderInfo[];
  byTotalProfit: TraderInfo[];
}

export interface TraderInfo {
  operationsCount: number;
  lastTime: Date;
  buys: TraderActionInfo;
  sells: TraderActionInfo;
  realizedProfit: number;
  unrealizedProfit: number;
  externalProfit: number;
  profit: number;
  speedCategory: number;
  address: string;
}

export interface TraderActionInfo {
  count: number;
  amount: {
    token: number;
    eth: number;
    tokenRef: number;
    usd: number;
  };
  price: {
    usd: {
      max: number;
      min: number;
      avg: number;
    };
    eth: {
      max: number;
      min: number;
      avg: number;
    };
  };
}

export interface NetworkConfig {
  id: string;
  name: string;
  symbol: string;
  exploreUrl: string;
}

export interface Pair {
  id: {
    chain: string;
    pair: string;
    token: string;
    tokenRef: string;
  };
  name: string;
  nameRef: string;
  symbol: string;
  symbolRef: string;
  decimals: number;
  metrics: {
    holders: number;
    supply: number;
    marketCap: number;
  };
  price: number;
  tokenLogo: string;
}
