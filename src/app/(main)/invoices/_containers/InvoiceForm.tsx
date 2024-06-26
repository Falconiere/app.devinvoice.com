"use client";
import { BillBasicInfo } from "@/app/(main)/invoices/_components/BillInfo";
import { useInvoiceFormController } from "@/app/(main)/invoices/_controllers/useInvoiceFormController";

import {
  ComboBoxController,
  CurrencyController,
  DatePickerController,
  InputController,
  NumericController,
  TextareaController,
} from "@/app/_components/forms";

import { toMoney } from "@/app/_utils/toMoney";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { currenciesInputOptions } from "@/data/currencies";
import { TrashIcon } from "lucide-react";
import { Fragment } from "react";

const InvoiceForm = () => {
  const { form, items, total, onAddItem, onRemoveItem, setAmount } =
    useInvoiceFormController();
  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((data) => {
    console.info({ data });
  });

  return (
    <form
      className="rounded-sm overflow-hidden shadow-md bg-white relative p-4 grid gap-4"
      onSubmit={onSubmit}
    >
      <div className="flex justify-between gap-4">
        <InputController
          control={control}
          name="invoiceNumber"
          label="Invoice (#)"
        />
        <div className="grid grid-cols-3 gap-4">
          <ComboBoxController
            control={control}
            name="currency"
            label="Currency"
            options={currenciesInputOptions}
          />
          <DatePickerController
            control={control}
            name="date"
            label="Invoice Date"
          />
          <DatePickerController
            control={control}
            name="dueDate"
            label="Due Date"
          />
        </div>
      </div>
      <hr />
      <div>
        <TextareaController
          control={control}
          name="description"
          label="Job Description"
        />
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4">
        <BillBasicInfo title="Bill From" />
        <BillBasicInfo title="Bill To" />
      </div>
      <hr />
      <div className="grid grid-cols-[auto,150px,150px,150px] gap-4">
        <span>Item/Task</span>
        <span>Quantity</span>
        <span>Rate</span>
        <span>Amount</span>
      </div>
      <div className="grid grid-cols-[auto,150px,150px,150px,max-content] gap-4 items-center">
        {items.map((_, idx) => (
          <Fragment key={`item-${String(idx)}`}>
            <InputController
              control={control}
              name={`items.${idx}.description`}
              placeholder="Item/Task Name/Description"
            />
            <NumericController
              control={control}
              name={`items.${idx}.quantity`}
              onKeyUp={() => setAmount(idx)}
            />
            <CurrencyController
              control={control}
              name={`items.${idx}.rate`}
              onKeyUp={() => setAmount(idx)}
            />
            <CurrencyController
              control={control}
              name={`items.${idx}.amount`}
              disabled
            />
            {items.length > 1 && (
              <Button
                variant="ghost"
                className="text-red-500 p-0 w-8 h-8"
                onClick={() => onRemoveItem(idx)}
                type="button"
              >
                <TrashIcon />
              </Button>
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="outline" onClick={onAddItem} type="button">
          Add Item
        </Button>
      </div>
      <div>
        <Textarea label="Client Notes" />
      </div>
      <hr />
      <div className="grid w-full max-w-2xl mr-0 ml-auto gap-2">
        <div className="flex justify-between items-center flex-1">
          <strong className="text-2xl">Invoice Total: </strong>
          <span className="text-2xl">{toMoney(total)}</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-end">
        <Button>Save Invoice</Button>
      </div>
    </form>
  );
};

export { InvoiceForm };
