import fakeUa from "fake-useragent";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Pair, TradersData } from "../types";
import { ApiError } from "../helpers/api-error";
import { parse } from "path";

export class DextoolsService {
  async getTopTraders(network: string, address: string): Promise<TradersData> {
    try {
      const headers = this.getHeaders();

      const response = await axios.get<
        { statusCode: number; data: TradersData },
        AxiosResponse<{ statusCode: number; data: TradersData }>
      >(`https://core-api.dextools.io/maker/top/${network}/${address}`, {
        headers,
      } as AxiosRequestConfig);

      return response.data["data"];
    } catch (err) {
      throw ApiError.BadRequest("Data not found, check the input data");
    }
  }

  async getPair(network: string, address: string) {
    try {
      const headers = this.getHeaders();

      const response = await axios.get(
        `https://www.dextools.io/shared/data/pair?address=${address}&chain=${network}&audit=true&locks=true`,
        {
          headers,
        } as AxiosRequestConfig
      );

      return this.parsePairData(response.data["data"][0]);
    } catch (err) {
      throw ApiError.BadRequest("Data not found, check the input data");
    }
  }

  private parsePairData(data: any): Pair {
    if (!data) {
      throw ApiError.BadRequest("Invalid pair data received");
    }

    try {
      return {
        id: {
          chain: data.id?.chain ?? "",
          pair: data.id?.pair ?? "",
          token: data.id?.token ?? "",
          tokenRef: data.id?.tokenRef ?? "",
        },
        name: data.name ?? "",
        nameRef: data.nameRef ?? "",
        symbol: data.symbol ?? "",
        symbolRef: data.symbolRef ?? "",
        decimals: data.token?.decimals ?? 18,
        metrics: {
          holders: data.token?.metrics?.holders ?? 0,
          supply: data.token?.metrics?.totalSupply ?? 0,
          marketCap:
            data.token?.metrics?.mcap ||
            data.token?.metrics?.totalSupply * data.price,
        },
        price: data.price ?? "0",
        tokenLogo: data.token?.logo || "",
      };
    } catch (error) {
      throw ApiError.BadRequest("Failed to parse pair data");
    }
  }

  private getHeaders() {
    return {
      "sec-ch-ua-platform": '"Windows"',
      Referer: "https://www.dextools.io/",
      "sec-ch-ua":
        '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
      "X-API-Version": "1",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": fakeUa(),
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
}
