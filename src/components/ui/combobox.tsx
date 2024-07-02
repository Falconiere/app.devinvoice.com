"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type ComboBoxOption = {
  label: string;
  value: string;
  icon?: string;
};
export type ComboboxBoxProps = {
  options: ComboBoxOption[];
  value: string;
  label?: string;
  error?: string;
  onChange: (value: string) => void;
};

const Option = (option: ComboBoxOption) => (
  <>
    {option?.icon && (
      <Image
        src={option.icon}
        className="h-4 w-4"
        alt={option.label}
        width={16}
        height={16}
      />
    )}
    {option.label}
  </>
);

export function ComboboxBox({
  options,
  value,
  onChange,
  label,
  error,
}: Readonly<ComboboxBoxProps>) {
  const [open, setOpen] = React.useState(false);
  const getSelectedOption = (value: string) => {
    const option = options?.find((option) => option.value === value);
    if (option) {
      return <Option {...option} />;
    }
    return "Select...";
  };
  return (
    <div className="w-full flex-1">
      {label && (
        <label className="text-text-foreground block text-sm font-medium pb-1">
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full flex items-center justify-between overflow-hidden",
              {
                "border-red-500": !!error,
              }
            )}
            type="button"
          >
            <span className="flex items-center gap-2 text-ellipsis flex-1 overflow-hidden">
              {getSelectedOption(value)}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandEmpty>No found.</CommandEmpty>
            <CommandList>
              {options
                .filter((e) => e.value && e.label)
                .map((option) => (
                  <CommandItem
                    key={option?.value}
                    value={option?.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className="flex items-center w-full gap-2 cursor-pointer"
                  >
                    <Option {...option} />
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option?.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && (
        <p className="text-sm font-medium text-red-500 pt-1">{error}</p>
      )}
    </div>
  );
}
