"use client";
import { StepperBar } from "@/app/auth/_components/StepperBar";
import {
  SignUpDialogProvider,
  useSignUpDialogCtx,
} from "@/app/auth/_providers/SignUpDialogProvider";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const SignUpDialog = () => {
  const { component, open } = useSignUpDialogCtx();
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Welcome to {"<DevInVoice  />"}</AlertDialogTitle>
          <StepperBar />
        </AlertDialogHeader>
        {component}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { SignUpDialog };
