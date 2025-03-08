import { useEffect, useState } from "react";

interface SwitchProps {
  onChange?: (isChecked: boolean) => void;
  checked?: boolean;
  className?: string;
}

export default function Switch({
  onChange,
  checked,
  className = "",
  ...props
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <label
      className={`block w-11 cursor-pointer rounded-xl p-[2px] transition-colors duration-100 ${
        isChecked ? "bg-white/60" : "bg-zinc-900"
      } ${className}`}
      {...props}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        className={`z-10 block h-5 w-5 rounded-full bg-black transition-transform ${
          isChecked ? "translate-x-full" : ""
        }`}
      ></span>
    </label>
  );
}
