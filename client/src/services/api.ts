import { API } from "@/lib/axios";
import { ApiResponse, NetworkConfig, TradersData } from "@/types";
import { AxiosResponse } from "axios";

interface TopTradersResponse {
  traders: TradersData;
  network: NetworkConfig;}

export const fetchTopTraders = (network: string, address: string): Promise<AxiosResponse<ApiResponse<TopTradersResponse>>> => {
  return API.get<ApiResponse<TopTradersResponse>>(`/traders/${network}/${address}`);
}

export const fetchPair = (network: string, address: string) => {
  return API.get(`/pairs/${network}/${address}`);
}