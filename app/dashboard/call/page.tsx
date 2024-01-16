import CallForm from './call-form';
import BreadCrumbs from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const breadcrumbItems = [{ title: 'Call', link: '/dashboard/call' }];
export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumbs items={breadcrumbItems} />

        <Tabs defaultValue="single" className="space-y-4">
          <TabsList>
            <TabsTrigger value="single">Single Call</TabsTrigger>
            <TabsTrigger value="multi">Multi Call</TabsTrigger>
          </TabsList>
          <TabsContent value="single" className="space-y-4">
            <CallForm />
          </TabsContent>

          <TabsContent value="multi" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              Old campaigns
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
