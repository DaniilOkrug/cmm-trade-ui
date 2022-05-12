import { AxiosResponse } from "axios";
import $api from "../http";
import { IApi } from "../types/IApi";
import { IBot } from "../types/iBot";
import { IUserBot } from "../types/IUserBot";
import { ApiResponse } from "../types/response/ApiResponse";
import { BotSettingsResponse } from "../types/response/BotSettingsResponse";

export default class UserService {
  static async getApiList(userId: string): Promise<AxiosResponse<IApi[]>> {
    return await $api.post<IApi[]>("/apilist", { userId });
  }

  static async addAPI(
    name: string,
    exchange: string,
    key: string,
    secret: string
  ): Promise<AxiosResponse<IApi[]>> {
    return $api.post<IApi[]>("/addApi", { name, exchange, key, secret });
  }

  static async deleteApi(key: string): Promise<AxiosResponse<IApi[]>> {
    return $api.post<IApi[]>("/deleteApi", { key });
  }

  static async checkApi(key: string): Promise<AxiosResponse<ApiResponse>> {
    return $api.post<ApiResponse>("/checkApi", { key });
  }

  static async getBotSettings(): Promise<AxiosResponse<BotSettingsResponse>> {
    return $api.get<BotSettingsResponse>("/getSettings");
  }

  static async sendBotSettings(settings: IBot): Promise<AxiosResponse<IBot>> {
    return $api.put<IBot>("/setBotSettings", settings);
  }

  static async getBots(): Promise<AxiosResponse<IUserBot[]>> {
    return $api.get<IUserBot[]>("/getBots");
  }

  static async createBot(
    name: string,
    apiKey: string,
    deposit: number
  ): Promise<AxiosResponse<IUserBot[]>> {
    return $api.post<IUserBot[]>("/createBot", { name, apiKey, deposit });
  }

  static async deleteBot(name: string): Promise<AxiosResponse<IUserBot[]>> {
    return $api.post<IUserBot[]>("/deleteBot", { name });
  }

  static async startBot(name: string): Promise<AxiosResponse<IUserBot[]>> {
    return $api.post<IUserBot[]>("/startBot", { name });
  }

  static async stopBot(name: string): Promise<AxiosResponse<IUserBot[]>> {
    return $api.post<IUserBot[]>("/stopBot", { name });
  }

  static stopAllBots(): Promise<AxiosResponse<any>> {
    return $api.get<any>("/stopAllBots");
  }

  static async getBlackList(): Promise<
    AxiosResponse<{ blacklist: string[]; spotPairs: [string] }>
  > {
    return $api.get<{ blacklist: string[]; spotPairs: [string] }>(
      "/getBlackList"
    );
  }

  static async setBlackList(
    blacklist: string[]
  ): Promise<AxiosResponse<{ blacklist: string[] }>> {
    return $api.put<{ blacklist: string[] }>("/setBlackList", { blacklist });
  }
}
