import { BusinessAdditionalInfoForm } from "@/app/(main)/settings/business/_containers/BusinessAdditionalInfoForm";
import { BusinessAddressForm } from "@/app/(main)/settings/business/_containers/BusinessAddressForm";
import BusinessBasicInfoForm from "@/app/(main)/settings/business/_containers/BusinessBasicInfoForm";

const BusinessPage = () => {
  return (
    <>
      <BusinessBasicInfoForm />
      <BusinessAddressForm />
      <BusinessAdditionalInfoForm />
    </>
  );
};

export default BusinessPage;
