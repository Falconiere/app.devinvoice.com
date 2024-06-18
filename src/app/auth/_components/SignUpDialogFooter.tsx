import { Button } from "@/components/ui/button";

type SignUpDialogFooterProps = {
  isSubmitting?: boolean;
  onBack?: () => void;
  onNext?: () => void;
};
const SignUpDialogFooter = ({
  isSubmitting,
  onBack,
  onNext,
}: SignUpDialogFooterProps) => {
  return (
    <div className="flex flex-1 gap-2 justify-end pt-4">
      {onBack && (
        <Button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          variant="outline"
        >
          Back
        </Button>
      )}
      <Button
        type="submit"
        onClick={onNext}
        disabled={isSubmitting}
        className="btn btn-primary"
      >
        Continue
      </Button>
    </div>
  );
};

export { SignUpDialogFooter };
