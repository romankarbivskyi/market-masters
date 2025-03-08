import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
  className = "",
}: PaginationProps) {
  const pages = useMemo(() => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    if (currentPage > 2) {
      pages.push(currentPage - 1);
    }

    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage);
    }

    if (currentPage < totalPages - 1) {
      pages.push(currentPage + 1);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex w-full items-center ${className}`}>
      <div className="mx-auto flex flex-wrap items-center gap-2 p-2 text-sm">
        <button
          className={`rounded-xl border border-zinc-700 p-2 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-zinc-800"
          }`}
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage === 1) return;
            onChange(currentPage - 1);
          }}
        >
          Prev
        </button>

        {pages.map((e, i) => (
          <button
            key={i}
            className={`h-10 w-10 rounded-xl ${
              currentPage === e
                ? "border border-zinc-700 bg-zinc-800"
                : typeof e === "number"
                  ? "hover:bg-zinc-800/50"
                  : ""
            }`}
            onClick={() => {
              if (typeof e === "string") return;
              onChange(e);
            }}
            disabled={typeof e === "string"}
          >
            {e}
          </button>
        ))}

        <button
          className={`rounded-xl border border-zinc-700 p-2 ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-zinc-800"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => {
            if (currentPage === totalPages) return;
            onChange(currentPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
