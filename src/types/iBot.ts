export interface IBot {
  pairs: Array<string>;
  exchange: string;
  leverage: number;
  algorithm: string;
  analyzer: {
    enabled: boolean;
    period: string;
    interval: string;
    priceChange: number;
    minPriceChangeNumber: number;
    minVolume: number;
  };
  grid: {
    size: number;
    ordersNumber: number;
    martingeil: number;
    indentFirstOrder: number;
    profit: number;
    priceFollow: number;
    priceFollowDelay: number;
    newGridDelay: number;
    endCycleDelay: number;
  };
}
