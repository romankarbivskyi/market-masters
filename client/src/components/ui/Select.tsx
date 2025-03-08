"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  defaultIndex?: number;
  options: SelectOption[];
}

export function Select({
  className,
  onChange,
  placeholder = "Select...",
  defaultIndex,
  options,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    defaultIndex,
  );

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    setSelectedIndex(defaultIndex);
  }, [defaultIndex]);

  const handleOptionSelect = (value: string) => {
    const newIndex = options.findIndex((option) => option.value === value);
    setSelectedIndex(newIndex);
    setIsOpen(false);
    onChange?.(value);
  };

  return (
    <div ref={ref} className={cn("relative text-nowrap", className)}>
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-zinc-700 bg-black px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm">
          {selectedIndex !== undefined && options[selectedIndex]
            ? options[selectedIndex].label
            : placeholder}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={cn(
          "absolute left-0 z-50 mt-1 w-full origin-top overflow-hidden rounded-md border border-zinc-700 bg-black shadow-md transition-all duration-200",
          isOpen
            ? "visible scale-y-100 opacity-100"
            : "invisible scale-y-0 opacity-0",
        )}
        role="listbox"
      >
        {options.map((option, index) => (
          <SelectItem
            key={option.value}
            value={option.value}
            label={option.label}
            isSelected={index === selectedIndex}
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
    </div>
  );
}

interface SelectItemProps {
  value: string;
  label: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

function SelectItem({ value, label, isSelected, onSelect }: SelectItemProps) {
  return (
    <div
      role="option"
      aria-selected={isSelected}
      className={cn(
        "cursor-pointer px-4 py-2 text-sm hover:bg-white/20",
        isSelected && "bg-white/40",
      )}
      onClick={() => onSelect(value)}
    >
      {label}
    </div>
  );
}
