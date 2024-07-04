"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type DatePickerProps = {
  label?: string;
  id?: string;
  value?: Date;
  error?: string;
  onChange?: (date?: Date) => void;
};
export function DatePicker({
  label,
  id,
  value,
  error,
  onChange,
}: Readonly<DatePickerProps>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          {label && (
            <label
              htmlFor={id}
              className="text-text-foreground block text-sm font-medium pb-1"
            >
              {label}
            </label>
          )}
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground",
              error && "border-red-500"
            )}
            type="button"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : <span>Pick a date</span>}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(d) => {
            onChange?.(d);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
