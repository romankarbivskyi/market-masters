import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <div className={`flex w-full items-center ${className}`}>
      <div className="mx-auto flex flex-wrap items-center gap-2 p-2 text-sm">
        <Button
          variant="secondary"
          className="rounded-xl"
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage === 1) return;
            onChange(currentPage - 1);
          }}
        >
          <ChevronLeft className="mr-2" />
          Prev
        </Button>

        <div className="rounded-xl border border-zinc-700 px-4 py-2">
          {currentPage}
        </div>

        <Button
          variant="secondary"
          className="rounded-xl"
          disabled={currentPage === totalPages}
          onClick={() => {
            if (currentPage === totalPages) return;
            onChange(currentPage + 1);
          }}
        >
          Next
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
