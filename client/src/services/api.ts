import { ApiResponse, NetworkConfig, Pair, TradersData } from "@/types";
import { AxiosResponse } from "axios";
import axios from "axios";

interface TopTradersResponse {
  traders: TradersData;
  network: NetworkConfig;
}

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_BASE_API_URL;
  }

  return process.env.BASE_API_URL || "http://server:5000/api";
};

const API = axios.create({
  baseURL: getBaseUrl(),
});

export const fetchTopTraders = (
  network: string,
  address: string,
): Promise<AxiosResponse<ApiResponse<TopTradersResponse>>> => {
  return API.get<ApiResponse<TopTradersResponse>>(
    `/traders/${network}/${address}`,
  );
};

export const fetchPair = (
  network: string,
  address: string,
): Promise<AxiosResponse<ApiResponse<Pair>>> => {
  return API.get<ApiResponse<Pair>, AxiosResponse<ApiResponse<Pair>>>(
    `/pairs/${network}/${address}`,
  );
};

export const fetchNetworks = (): Promise<
  AxiosResponse<ApiResponse<NetworkConfig[]>>
> => {
  return API.get<
    ApiResponse<NetworkConfig[]>,
    AxiosResponse<ApiResponse<NetworkConfig[]>>
  >("/networks");
};
