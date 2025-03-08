"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState, useCallback } from "react";
import { NetworkConfig } from "@/types";
import { fetchPair } from "@/services/api";
import { usePairStore } from "@/stores/usePairStore";
import { fetchNetworks } from "@/services/api";
import { AxiosError } from "axios";

const formSchema = z.object({
  network: z.string({
    required_error: "Network selection is required",
  }),
  address: z.string().min(1, "Pair address string is required").trim(),
});

export default function TokenForm() {
  const { setPair } = usePairStore();
  const [networkList, setNetworkList] = useState<NetworkConfig[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      network: "solana",
      address: "",
    },
  });

  const onSubmit = useCallback(
    async ({ network, address }: z.infer<typeof formSchema>) => {
      setIsLoading(true);
      try {
        const { data } = await fetchPair(network, address);

        if (data.success) {
          setPair(data.data);
        } else {
          setError("address", {
            type: "server",
            message: "Pair not found",
          });
        }
      } catch (e: unknown) {
        console.error("Error fetching data:", e);

        if (e instanceof AxiosError) {
          setError("address", {
            type: "server",
            message: e.response?.data?.error || "An unknown error occurred",
          });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [setError],
  );

  useEffect(() => {
    const fetchSupportedNetworks = async () => {
      const { data } = await fetchNetworks();

      setNetworkList(data?.data);
    };

    fetchSupportedNetworks();
  }, []);

  const options = useMemo(
    () =>
      networkList.map(({ id, name }) => ({
        label: name,
        value: id,
      })),
    [networkList],
  );

  return (
    <div className="mx-auto flex max-w-[1000px] items-center gap-5 py-5 sm:py-7">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5 sm:flex-row"
      >
        <div>
          <Select
            placeholder="Select network"
            options={options}
            defaultIndex={0}
            className="min-w-36"
            onChange={(value) => setValue("network", value)}
          />
          {errors.network && (
            <p className="mt-1 text-sm text-red-500">
              {errors.network.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <div className="relative">
            <Input
              placeholder="Pair address..."
              {...register("address")}
              className="w-full pe-12 text-sm"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              <Search
                className={`absolute right-5 top-1/2 -translate-y-1/2 ${
                  isLoading
                    ? "animate-pulse stroke-zinc-400"
                    : "stroke-zinc-600"
                }`}
              />
            </button>
          </div>
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
