import { ContentBox } from "@/app/_components/ContentBox";

const AccountDetailsLoader = () => (
  <ContentBox title="Account details" isLoading>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
    </div>
  </ContentBox>
);

export { AccountDetailsLoader };
