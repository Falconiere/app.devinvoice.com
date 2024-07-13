"use client";
import { ClientFormModal } from "@/app/(main)/clients/_containers/ClientFormModal";
import { ClientListModal } from "@/app/(main)/clients/_containers/ClientListModal";
import { BillBasicInfo } from "@/app/(main)/invoices/_components/BillInfo";

import { useInvoiceFormController } from "@/app/(main)/invoices/_controllers/useInvoiceFormController";
import { formatAddress } from "@/app/(main)/invoices/_utils/formatAddress";
import { BusinessFormModal } from "@/app/(main)/settings/business/_containers/BusinessFormModal";

import { CurrencyInput } from "@/app/_components/CurrencyInput";

import {
  ComboBoxController,
  CurrencyController,
  DatePickerController,
  InputController,
  NumericController,
  TextareaController,
} from "@/app/_components/forms";
import { useHeaderActions } from "@/app/_hooks/useHeaderActions";

import { toMoney } from "@/app/_utils/toMoney";
import { Button } from "@/components/ui/button";
import { currenciesInputOptions } from "@/data/currencies";
import type { Invoice } from "@/database/services/invoice/types";

import { TrashIcon } from "lucide-react";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

type InvoiceFormProps = {
  invoice?: Invoice;
};
const InvoiceForm = ({ invoice }: InvoiceFormProps) => {
  const {
    control,
    items,
    total,
    currentClient,
    currentBusiness,
    isSelectClientOpen,
    isBusinessFormOpen,
    isClientFormOpen,
    isSaving,
    onSubmit,
    onAddItem,
    onRemoveItem,
    setIsSelectClientOpen,
    onSelectClient,
    getAmount,
    onToggleEditBusiness,
    onToggleEditClient,
  } = useInvoiceFormController({ invoice });
  useHeaderActions(
    !invoice
      ? [
          {
            label: "Save as Draft",
            component: "button",
            buttonVariant: "default",
            onClick: () => {
              const btn = document.getElementById(
                "submit-invoice"
              ) as HTMLButtonElement;
              btn?.click();
            },
          },
        ]
      : []
  );

  return (
    <>
      <form
        className="rounded-sm overflow-hidden shadow-md bg-white relative p-4 grid gap-4"
        onSubmit={onSubmit}
        id="invoice-form"
      >
        <div className="flex justify-between gap-4">
          <InputController
            control={control}
            name="invoiceNumber"
            label="Invoice (#)"
          />
          <div className="grid grid-cols-[150px,150px,150px] gap-4">
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
          <BillBasicInfo
            title="Bill From"
            name={currentBusiness?.name}
            address={formatAddress(currentBusiness)}
            country={currentBusiness?.country}
            email={currentBusiness?.email}
            phone={currentBusiness?.phone}
            onEdit={onToggleEditBusiness}
          />
          <Controller
            control={control}
            name="clientId"
            render={({ formState: { errors } }) => (
              <BillBasicInfo
                title="Bill To"
                name={currentClient?.name}
                address={formatAddress(currentClient)}
                country={currentClient?.country}
                email={currentClient?.email}
                phone={currentClient?.phone}
                onSelect={() => setIsSelectClientOpen(true)}
                error={errors.clientId?.message}
                onEdit={currentClient && onToggleEditClient}
              />
            )}
          />
        </div>
        <hr />
        <div className="grid grid-cols-[auto,150px,150px,150px,max-content] gap-4">
          <span>Item/Task</span>
          <span>Quantity</span>
          <span>price</span>
          <span>Amount</span>
          <span className="p-0 w-8 h-8" />
        </div>
        <div className="grid grid-cols-[auto,150px,150px,150px,max-content] gap-4 items-start">
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
              />
              <CurrencyController
                control={control}
                name={`items.${idx}.price`}
              />
              <CurrencyInput prefix="$" value={getAmount(idx)} readOnly />

              <Button
                variant="ghost"
                className="hover:text-red-500 p-0 w-8 h-8"
                onClick={() => onRemoveItem(idx)}
                type="button"
                disabled={items.length === 1}
              >
                <TrashIcon />
              </Button>
            </Fragment>
          ))}
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={onAddItem} type="button">
            Add Item
          </Button>
        </div>
        <div>
          <TextareaController
            control={control}
            name="notes"
            label="Client Notes"
          />
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
          <Button disabled={isSaving} id="submit-invoice">
            {isSaving ? "Saving..." : "Save Invoice"}
          </Button>
        </div>
      </form>
      {isSelectClientOpen && (
        <ClientListModal
          open={isSelectClientOpen}
          onClose={() => setIsSelectClientOpen(false)}
          onSelect={onSelectClient}
        />
      )}
      {currentClient && (
        <ClientFormModal
          open={isClientFormOpen}
          onClose={onToggleEditClient}
          client={currentClient}
        />
      )}
      <BusinessFormModal
        open={isBusinessFormOpen}
        onClose={onToggleEditBusiness}
      />
    </>
  );
};

export { InvoiceForm };
