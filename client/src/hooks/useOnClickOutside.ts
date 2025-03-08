import { RefObject, useEffect } from "react";

export const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  handleClick: () => void,
) => {
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        handleClick();
      }
    };

    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [ref, handleClick]);
};
