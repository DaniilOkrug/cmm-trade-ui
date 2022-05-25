import { IPumpDumpFilter } from "./IPumpDumpFilter";

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
    rsi: {
      enabled: boolean;
      period: number;
      timeframes: string[];
      value: number;
    };
    pampAndDump: {
      enabled: boolean;
      filters: IPumpDumpFilter[];
    };
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
    distribution: string;
    logFactor: number;
  };
}
