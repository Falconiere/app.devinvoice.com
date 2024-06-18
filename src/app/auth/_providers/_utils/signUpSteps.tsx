import { BusinessProfile } from "@/app/auth/_containers/BusinessProfile";
import { AccountProfile } from "@/app/auth/_containers/AccountProfile";

const signUpSteps = [
  {
    title: "Welcome to <DevInVoice  />",
    stepTitle: "Step 1: User Profile",
    component: <AccountProfile />,
  },
  {
    title: "Welcome to <DevInVoice  />",
    stepTitle: "Step 2: Business",
    component: <BusinessProfile />,
  },
];

export { signUpSteps };
