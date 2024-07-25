import NoData from "@/domains/_assets/illustrations/no-data.svg";
import Image from "next/image";
const EmptyDataState = () => (
  <div className="flex flex-col items-center">
    <Image src={NoData} alt="No Data" />
    <h2 className="text-black text-2xl font-bold">
      Oh no! you haven't to save anything yet 😢
    </h2>
  </div>
);

export { EmptyDataState };
