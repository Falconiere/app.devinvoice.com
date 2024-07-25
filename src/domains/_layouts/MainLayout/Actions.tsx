import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { HeaderAction } from "@/domains/_stores/useHeaderActionsStore";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Fragment } from "react";

type ActionsProps = {
  actions: HeaderAction[];
};

const ActionGroup = ({ action }: { action: HeaderAction }) => {
  const isButton = action.component === "button";
  const isLink = action.component === "link";
  const className = action.className || "";
  const buttonVariant = action.buttonVariant || "secondary";
  return (
    <Fragment>
      {isButton && (
        <Button
          variant={buttonVariant}
          onClick={action.onClick}
          type="button"
          className={className}
        >
          {action.label}
          {action.icon && action.icon}
        </Button>
      )}
      {isLink && action.href ? (
        <Link href={action.href} onClick={action.onClick}>
          <Button variant={buttonVariant} className={className}>
            {action.label}
            {action.icon && action.icon}
          </Button>
        </Link>
      ) : null}
    </Fragment>
  );
};

const Actions = ({ actions }: ActionsProps) => {
  if (actions.length === 0) return null;
  return (
    <div className="flex gap-4 items-center mr-0 ml-auto">
      {actions.map((action, index) => {
        const key = `${action.label}-${index}`;
        const subActions = action.subActions || [];
        return (
          <DropdownMenu key={key}>
            <DropdownMenuTrigger asChild>
              <ActionGroup action={action} />
            </DropdownMenuTrigger>
            {subActions.length > 0 && (
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        );
      })}{" "}
    </div>
  );
};

export { Actions };
