export interface ValidatorModel {
    id: string,
    name: string,
    description: string,
    website: string,
}

// Minimal property requirements for asset info file
export interface AssetInfo {
    explorer: string;
    name: string;
    short_description: string;
    website: string;
}

export interface CoinInfoList {
    name: string;
    website: string;
    source_code: string;
    whitepaper: string;
    short_description: string;
    explorer: string;
    socials: Social[];
    details: Detail[];
  }
  
  interface Detail {
    language: string;
    description: string;
  }

  interface Social {
    name: string;
    url: string;
    handle: string;
  }
  
// CoinmarketCap
export interface mapTiker {
    coin: number
    type: mapType
    token_id?: string
    id: number
}

export type mapType = TickerType.Coin | TickerType.Token 

export enum TickerType {
    Token = "token",
    Coin = "coin"
}

export enum PlatformType {
    Ethereum = "Ethereum",
    Binance = "Binance Coin",
    TRON = "TRON",
    OMNI = "Omni",
    VeChain = "VeChain"
}