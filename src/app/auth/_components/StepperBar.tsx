import { signUpSteps } from "@/app/auth/_providers/_utils/signUpSteps";
import { cn } from "@/lib/utils";

const StepperBar = ({ activeStep = 1 }) => {
  return (
    <div className="stepper-bar flex justify-between gap-4">
      {signUpSteps.map(({ stepTitle }, index) => (
        <div
          key={stepTitle}
          className={cn("border-b-gray-200 border-b-4 flex-1", {
            "border-green-500": index < activeStep - 1,
          })}
        >
          <span>{stepTitle}</span>
        </div>
      ))}
    </div>
  );
};

export { StepperBar };
