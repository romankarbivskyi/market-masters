"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Switch from "@/components/ui/Switch";
import { TraderInfo, TradersData } from "@/types";
import { CopyIcon, FilterIcon, Timer } from "lucide-react";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import { useModalStore } from "@/stores/useModalStore";
import TraderDetails from "@/components/TraderDetails";
import { currencyFormat, tokenAmountFormat } from "@/utils/formatters";
import { NetworkConfig } from "@/types";

enum SortType {
  REALIZED_PROFIT = "byRealizedProfit",
  TOTAL_PROFIT = "byTotalProfit",
}

const ITEMS_PER_PAGE = 10;

interface TopTradersTableProps {
  tradersData: TradersData;
  network: NetworkConfig;
}

export default function TopTradersTable({
  tradersData,
  network,
}: TopTradersTableProps) {
  const [sortType, setSortType] = useState<SortType>(SortType.TOTAL_PROFIT);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData, setCurrentData] = useState<TraderInfo[]>([]);

  useEffect(() => {
    if (tradersData?.[sortType]) {
      setCurrentData(
        [...tradersData[sortType]].slice(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE,
        ),
      );
    } else {
      setCurrentData([]);
    }
  }, [tradersData, sortType, currentPage]);

  const handleSortChange = (isChecked: boolean) => {
    setSortType(isChecked ? SortType.TOTAL_PROFIT : SortType.REALIZED_PROFIT);
    setCurrentPage(1);
  };

  const totalPages = useMemo(() => {
    if (tradersData && tradersData[sortType]) {
      return Math.ceil(tradersData[sortType].length / ITEMS_PER_PAGE);
    }
    return 0;
  }, [tradersData, sortType]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const labels = [
    "Maker",
    "Total",
    "PNL",
    "Speed",
    "Unrealized",
    "External PNL",
    "Bought",
    "Sold",
    "Details",
  ];

  if (!currentData.length) {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-10 text-center">
        <p className="text-zinc-400">No trading data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2">
          <span
            className={`text-sm ${sortType === SortType.REALIZED_PROFIT ? "font-medium text-white" : "text-zinc-400"}`}
          >
            Realized PNL
          </span>
          <Switch
            checked={sortType === SortType.TOTAL_PROFIT}
            onChange={handleSortChange}
            className="data-[state=checked]:bg-indigo-600"
          />
          <span
            className={`text-sm ${sortType === SortType.TOTAL_PROFIT ? "font-medium text-white" : "text-zinc-400"}`}
          >
            Total PNL
          </span>
        </div>

        <div className="text-sm text-zinc-400">
          {tradersData?.[sortType]?.length || 0} traders found
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="w-full min-w-[1000px] text-end">
          <thead>
            <tr className="border-b border-zinc-800">
              {labels.map((label, i) => (
                <td
                  key={label}
                  className={`bg-[#131316] p-3 text-sm font-medium text-zinc-300 ${i === 0 ? "sticky left-0 text-start" : ""}`}
                >
                  {label}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((traderInfo, index) => (
              <TraderListItem
                trader={traderInfo}
                network={network}
                key={traderInfo.address}
                isEven={index % 2 === 0}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
        className="justify-center"
      />
    </div>
  );
}

interface TraderListItemProps {
  trader: TraderInfo;
  network: NetworkConfig;
  isEven?: boolean;
}

export const TraderListItem = memo(
  function TraderListItem({
    trader,
    network,
    isEven = false,
  }: TraderListItemProps) {
    const {
      address,
      buys,
      sells,
      unrealizedProfit,
      speedCategory,
      externalProfit,
    } = trader;

    const handleCopyAddress = useCallback(async () => {
      await navigator.clipboard?.writeText(address);
    }, [address]);

    const modalActions = useModalStore((state) => state.actions);

    const modalContent = useMemo(
      () => <TraderDetails traderInfo={trader} network={network} />,
      [trader, network],
    );

    const handleShowDetails = useCallback(() => {
      modalActions.setContent(modalContent);
      modalActions.toggle(true);
    }, [modalActions, modalContent]);

    const pnl = useMemo(
      () => sells.amount.usd - buys.amount.usd,
      [sells.amount.usd, buys.amount.usd],
    );

    const truncatedAddress = useMemo(
      () => `${address.substring(0, 10)}...`,
      [address],
    );

    const speedColor = useMemo(() => {
      if (speedCategory === 1) return "#f87171";
      if (speedCategory === 0 || speedCategory === 2) return "#4ade80";
      return "#03739c";
    }, [speedCategory]);

    const rowClassName = isEven ? "bg-[#1F1F23]" : "bg-[#131316]";
    const isPnlPositive = pnl > 0;

    return (
      <tr className={`${rowClassName} transition-colors hover:bg-zinc-800/50`}>
        <td
          className={`sticky left-0 p-3 ${rowClassName} hover:bg-zinc-800/50`}
        >
          <div className="flex items-center gap-2">
            <Link
              href={network.exploreUrl + address}
              target="_blank"
              className="text-xs transition-colors hover:text-indigo-400 hover:underline"
            >
              {truncatedAddress}
            </Link>
            <div onClick={handleCopyAddress}>
              <CopyIcon
                size={15}
                className="cursor-pointer text-zinc-400 transition-colors hover:text-zinc-100 active:text-indigo-400"
              />
            </div>
          </div>
        </td>
        <td className="p-3 text-sm">
          <div className="flex items-center justify-end gap-1">
            <span
              className={
                pnl + unrealizedProfit > 0 ? "text-green-400" : "text-red-400"
              }
            >
              {currencyFormat.format(pnl + unrealizedProfit)}
            </span>
          </div>
        </td>
        <td className="p-3">
          <span className={isPnlPositive ? "text-green-400" : "text-red-400"}>
            {currencyFormat.format(pnl)}
          </span>
        </td>
        <td className="p-3">
          <div className="flex justify-end">
            <Timer color={speedColor} className="inline-block" />
          </div>
        </td>
        <td className="p-3 text-sm">
          {unrealizedProfit ? (
            <span
              className={
                unrealizedProfit > 0 ? "text-green-400" : "text-red-400"
              }
            >
              {currencyFormat.format(unrealizedProfit)}
            </span>
          ) : (
            "-"
          )}
        </td>
        <td className="p-3 text-sm text-yellow-400">
          {externalProfit ? currencyFormat.format(externalProfit) : "-"}
        </td>
        <td className="p-3 text-sm">
          {buys.count !== 0 ? (
            <div className="flex flex-col items-end">
              <span className="text-green-400">
                {currencyFormat.format(buys.amount.usd)}
              </span>
              <div>
                <span className="text-xs text-zinc-400">
                  {tokenAmountFormat.format(buys.amount.token)} / {buys.count}{" "}
                  txns
                </span>
              </div>
            </div>
          ) : (
            "-"
          )}
        </td>
        <td className="p-3 text-sm">
          {sells.count !== 0 ? (
            <div className="flex flex-col items-end">
              <span className="text-red-400">
                {currencyFormat.format(sells.amount.usd)}
              </span>
              <div>
                <span className="text-xs text-zinc-400">
                  {tokenAmountFormat.format(sells.amount.token)} / {sells.count}{" "}
                  txns
                </span>
              </div>
            </div>
          ) : (
            "-"
          )}
        </td>
        <td className="p-3">
          <button
            className="rounded-md px-3 py-1.5 text-zinc-400 transition-colors hover:bg-indigo-900/30 hover:text-zinc-100"
            onClick={handleShowDetails}
          >
            <FilterIcon size={18} />
          </button>
        </td>
      </tr>
    );
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  },
);
