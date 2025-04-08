import { ApiResponse, NetworkConfig, Pair, TradersData } from "@/types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

interface TopTradersResponse {
  traders: TradersData;
  network: NetworkConfig;
}

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_API_URL || "http://server:5000/api";
};

const API = axios.create({
  baseURL: getBaseUrl(),
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  },
);

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

export const loginUser = (email: string, password: string) => {
  return API.post("/auth/login", { email, password });
};

export const signUpUser = (name: string, email: string, password: string) => {
  return API.post("/auth/register", { name, email, password });
};

export const fetchUser = (token: string) => {
  return API.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  } as AxiosRequestConfig);
};
