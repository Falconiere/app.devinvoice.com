"use client";
import { signUpSteps } from "@/app/auth/_providers/_utils/signUpSteps";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type SignUpDialogProviderData = {
  activeStep: number;
  component: ReactNode;
  open: boolean;
};

type SignUpDialogProviderActions = {
  onNext: () => void;
  onBack: () => void;
};

type SignUpDialogProviderContext = SignUpDialogProviderData &
  SignUpDialogProviderActions;

const SignUpDialogContext = createContext<SignUpDialogProviderContext>(
  {} as SignUpDialogProviderContext
);

const useSignUpDialogCtx = () => useContext(SignUpDialogContext);

const SignUpDialogProvider = ({ children }: { children: ReactNode }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }, []);

  const value = useMemo(
    () => ({
      activeStep,
      onNext: () => setActiveStep((prev) => prev + 1),
      onBack: () => setActiveStep((prev) => prev - 1),
      component: signUpSteps[activeStep]?.component,
      open: isOpen,
    }),
    [activeStep, isOpen]
  );

  return (
    <SignUpDialogContext.Provider value={value}>
      {children}
    </SignUpDialogContext.Provider>
  );
};
export { SignUpDialogProvider, useSignUpDialogCtx };
