"use client";

import { TraderInfo } from "@/types";
import { useState } from "react";
import {
  currencyFormat,
  tokenAmountFormat,
  tokenFormat,
} from "@/utils/formatters";
import { NetworkConfig } from "@/types";
import { FilterIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TraderDetailsProps {
  traderInfo: TraderInfo;
  network: NetworkConfig;
}

export default function TraderDetails({
  traderInfo,
  network,
}: TraderDetailsProps) {
  const { address, buys, sells, unrealizedProfit } = traderInfo;
  const symbol = network?.symbol || "";
  const [coin, setCoin] = useState<"usd" | "eth">("usd");

  return (
    <Dialog>
      <DialogTrigger>
        <FilterIcon
          size={18}
          className="stroke-zinc-400 hover:stroke-zinc-500"
        />
      </DialogTrigger>
      <DialogContent className="!rounded-xl">
        <DialogHeader>
          <DialogTitle>Trader Details</DialogTitle>
        </DialogHeader>
        <div className="flex w-full max-w-[600px] flex-col gap-3">
          <div className="flex gap-1 rounded-lg bg-zinc-800/50 p-1">
            <Button
              variant="secondary"
              className={`flex-1 transition-all ${
                coin === "usd"
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:bg-zinc-700/50"
              }`}
              onClick={() => setCoin("usd")}
            >
              USD
            </Button>
            <Button
              variant="secondary"
              className={`flex-1 transition-all ${
                coin === "eth"
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:bg-zinc-700/50"
              }`}
              onClick={() => setCoin("eth")}
            >
              {symbol}
            </Button>
          </div>

          <div className="flex flex-col gap-1 rounded-xl border border-zinc-700/60 bg-zinc-800/30 p-4">
            <span className="text-sm font-medium text-zinc-400">Address</span>
            <span className="overflow-x-auto font-mono text-sm">{address}</span>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-zinc-700/60 bg-zinc-800/30 p-4">
            <span className="mb-1 text-sm font-medium text-zinc-300">
              Summary
            </span>
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-medium text-zinc-400">PNL</span>
              <span className="text-xs font-medium">
                {currencyFormat.format(sells.amount.usd - buys.amount.usd)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-medium text-zinc-400">
                UNREALIZED
              </span>
              <span className="text-xs font-medium">
                {currencyFormat.format(unrealizedProfit)}
              </span>
            </div>
            <div className="my-1.5 h-px w-full bg-zinc-700/70"></div>
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-medium text-zinc-300">
                TOTAL PNL
              </span>
              <span className="text-xs font-semibold">
                {currencyFormat.format(
                  sells.amount.usd - buys.amount.usd + unrealizedProfit,
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex w-full flex-col gap-2 rounded-xl border border-zinc-700/60 bg-zinc-800/30 p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-green-400">Buys</span>
                <span className="rounded-full bg-green-400/20 px-2 py-0.5 text-sm font-medium text-green-400">
                  {buys.count}
                </span>
              </div>
              <div className="mt-1 space-y-1.5">
                {["max", "avg", "min"].map((key) => (
                  <div
                    className="flex flex-row items-center justify-between"
                    key={key}
                  >
                    <span className="text-xs font-medium uppercase text-zinc-400">
                      {key}
                    </span>
                    <span className="text-xs font-medium">
                      {(() => {
                        const val =
                          buys.price[coin]?.[key as "max" | "avg" | "min"];
                        return coin === "usd"
                          ? currencyFormat.format(val)
                          : tokenFormat.format(val) + ` ${symbol}`;
                      })()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="my-1.5 h-px w-full bg-zinc-700/70"></div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-zinc-400">
                    TOKENS
                  </span>
                  <span className="text-xs font-medium">
                    {tokenAmountFormat.format(buys.amount.token)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-zinc-400">
                    AMOUNT
                  </span>
                  <span className="text-xs font-medium">
                    {coin === "usd"
                      ? currencyFormat.format(buys.amount[coin])
                      : tokenFormat.format(buys.amount[coin]) + ` ${symbol}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 rounded-xl border border-zinc-700/60 bg-zinc-800/30 p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-red-400">Sells</span>
                <span className="rounded-full bg-red-400/20 px-2 py-0.5 text-sm font-medium text-red-400">
                  {sells.count}
                </span>
              </div>
              <div className="mt-1 space-y-1.5">
                {["max", "avg", "min"].map((key) => (
                  <div
                    className="flex flex-row items-center justify-between"
                    key={key}
                  >
                    <span className="text-xs font-medium uppercase text-zinc-400">
                      {key}
                    </span>
                    <span className="text-xs font-medium">
                      {(() => {
                        const val =
                          sells.price[coin]?.[key as "max" | "avg" | "min"];
                        return coin === "usd"
                          ? currencyFormat.format(val)
                          : tokenFormat.format(val) + ` ${symbol}`;
                      })()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="my-1.5 h-px w-full bg-zinc-700/70"></div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-zinc-400">
                    TOKENS
                  </span>
                  <span className="text-xs font-medium">
                    {tokenAmountFormat.format(sells.amount.token)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-zinc-400">
                    AMOUNT
                  </span>
                  <span className="text-xs font-medium">
                    {coin === "usd"
                      ? currencyFormat.format(sells.amount[coin])
                      : tokenFormat.format(sells.amount[coin]) + ` ${symbol}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
