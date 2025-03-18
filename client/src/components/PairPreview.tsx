"use client";

import { usePairStore } from "@/stores/usePairStore";
import { currencyFormat, numberFormat } from "@/utils/formatters";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function PairPreview() {
  const { pair } = usePairStore();
  const [imageError, setImageError] = useState<boolean>(false);

  if (!pair) return null;

  const tokenImage =
    pair.tokenLogo == "" || imageError
      ? "/images/no-image.png"
      : "https://www.dextools.io/resources/tokens/logos/" + pair.tokenLogo;

  return (
    <div className="mx-auto mt-6 max-w-5xl">
      <Link
        href={`/traders/${pair.id.chain}/${pair.id.pair}`}
        className="flex flex-wrap items-center gap-x-3 gap-y-2 overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900 p-3 transition-all hover:border-zinc-600 hover:shadow-md hover:shadow-zinc-900/20 sm:flex-nowrap"
      >
        <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-black sm:h-[50px] sm:w-[50px]">
          <Image
            src={tokenImage}
            alt={pair.name}
            width={40}
            height={40}
            className="rounded-full object-contain"
            onError={() => setImageError(true)}
          />
        </div>

        <div className="min-w-[100px] flex-shrink-0">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold">{pair.symbol}</span>
            <span className="text-xs text-zinc-400">/{pair.symbolRef}</span>
          </div>
          <div className="max-w-[120px] truncate text-sm text-zinc-400">
            {pair.name}
          </div>
        </div>

        <div className="order-1 flex-shrink-0 border-l border-zinc-700/60 px-3 sm:order-none">
          <div className="flex items-center gap-1">
            <span className="text-base font-medium sm:text-lg">
              {currencyFormat.format(Number(pair.price))}
            </span>
          </div>
        </div>

        <div className="hidden flex-shrink-0 border-l border-zinc-700/60 px-3 lg:block">
          <div className="text-xs font-medium text-zinc-400">Market Cap</div>
          <div className="text-sm">
            {currencyFormat.format(Number(pair.metrics.marketCap))}
          </div>
        </div>

        <div className="hidden flex-shrink-0 border-l border-zinc-700/60 px-3 sm:block">
          <div className="text-xs font-medium text-zinc-400">Holders</div>
          <div className="text-sm">
            {numberFormat.format(pair.metrics.holders)}
          </div>
        </div>

        <div className="hidden flex-shrink-0 border-l border-zinc-700/60 px-3 lg:block">
          <div className="text-xs font-medium text-zinc-400">Supply</div>
          <div className="text-sm">
            {numberFormat.format(Number(pair.metrics.supply))}
          </div>
        </div>

        <div className="order-2 ml-auto flex-shrink-0 rounded-lg bg-zinc-800 px-2 py-2 transition-colors hover:bg-zinc-700 sm:order-none">
          <ExternalLink size={16} className="sm:size-18 text-zinc-400" />
        </div>
      </Link>
    </div>
  );
}
