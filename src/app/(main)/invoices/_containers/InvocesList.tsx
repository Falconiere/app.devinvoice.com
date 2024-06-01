import { ContentBox } from "@/app/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InvoicesList = () => (
  <ContentBox>
    <Tabs defaultValue="all" className="w-full">
      <div className="flex items-center gap-2 justify-between">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="pending">Due</TabsTrigger>
        </TabsList>
        <Button>Create Invoice</Button>
      </div>
      <TabsContent value="all">Paid</TabsContent>
      <TabsContent value="paid">Paid</TabsContent>
      <TabsContent value="pending">Pending</TabsContent>
    </Tabs>
  </ContentBox>
);
export { InvoicesList };
