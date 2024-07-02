import { Input, type InputProps } from "@/components/ui/input";
import { forwardRef } from "react";

import { NumericFormat } from "react-number-format";
import type { NumericFormatProps } from "react-number-format/types/types";

export type CurrencyInputProps = NumericFormatProps<InputProps>;
const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (props) => {
    return (
      <NumericFormat
        {...props}
        customInput={Input}
        allowLeadingZeros
        thousandSeparator
        fixedDecimalScale
        decimalScale={2}
      />
    );
  }
);
CurrencyInput.displayName = "CurrencyInput";
export { CurrencyInput };
