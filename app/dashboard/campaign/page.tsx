import { Button } from '@/components/ui/buttoncn';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Campaigns
          </h2>
          <div className=" md:flex items-center space-x-2">
            <Button variant="secondary">
              <div className="gap-1 items-center flex flex-row">
                <Plus size="20" />
                <p>Create</p>
              </div>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Current</TabsTrigger>
            <TabsTrigger value="add">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              Your shit
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              Old campaigns
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
