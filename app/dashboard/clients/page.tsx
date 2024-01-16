import BreadCrumbs from '@/components/breadcrumbs';
import { Button } from '@/components/ui/buttoncn';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus } from 'lucide-react';

const breadcrumbItems = [{ title: 'Clients', link: '/dashboard/clients' }];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumbs items={breadcrumbItems} />
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Clients
          </h2>
          <div className=" md:flex items-center space-x-2">
            <Button variant="secondary">
              <div className="gap-1 items-center flex flex-row">
                <Plus size="20" />
                <p>Add</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
