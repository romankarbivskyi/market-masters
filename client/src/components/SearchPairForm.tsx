"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Button } from "./ui/button";
import { Search, CircleX } from "lucide-react";
import { useEffect, useMemo, useState, useCallback } from "react";
import { NetworkConfig } from "@/types";
import { fetchPair } from "@/services/api";
import { usePairStore } from "@/stores/usePairStore";
import { fetchNetworks } from "@/services/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

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

  const form = useForm<z.infer<typeof formSchema>>({
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
          toast("Error", {
            icon: <CircleX size={20} />,
            description: "Pair not found",
          });
        }
      } catch (e: unknown) {
        console.error("Error fetching data:", e);

        if (e instanceof AxiosError) {
          toast("Error", {
            icon: <CircleX size={20} />,
            description: e.response?.data?.error || "An unknown error occurred",
          });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [setPair],
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
    <div className="mx-auto flex max-w-5xl items-center gap-5 rounded-xl border border-zinc-800 bg-zinc-900 p-5 sm:py-7">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5 sm:flex-row sm:items-end"
        >
          <FormField
            control={form.control}
            name="network"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-zinc-400">Chain network</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-zinc-700 bg-zinc-800 p-3 ring-offset-zinc-900 focus:border-indigo-500 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 sm:w-[180px]">
                      <SelectValue placeholder="Chain" />
                    </SelectTrigger>
                    <SelectContent className="border-zinc-700 bg-zinc-800">
                      {options.map(({ label, value }) => (
                        <SelectItem
                          key={value}
                          value={value}
                          className="focus:bg-zinc-700"
                          aria-label={`Select ${label}`}
                        >
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="text-zinc-400">Pair address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="DPd8kXTbRHcLSbLKuHQe..."
                    className="w-full border border-zinc-700 bg-zinc-800 px-4 py-3 ring-offset-zinc-900 focus:border-indigo-500 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-1 gap-3">
            <Button
              type="submit"
              disabled={isLoading}
              className="mt-auto w-full bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700/80"
              alia-label="Search"
            >
              <Search className="mr-2" />
              Search
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
