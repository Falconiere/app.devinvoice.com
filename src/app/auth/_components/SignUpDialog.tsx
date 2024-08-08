"use client";
import { StepperBar } from "@/app/auth/_components/StepperBar";
import { useSignUpDialogCtx } from "@/app/auth/_providers/SignUpDialogProvider";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const SignUpDialog = () => {
  const { component, open, activeStep } = useSignUpDialogCtx();
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Welcome to {"<DevInVoice  />"}</AlertDialogTitle>
          <StepperBar activeStep={activeStep} />
        </AlertDialogHeader>
        {component}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { SignUpDialog };
