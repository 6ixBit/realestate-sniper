'use client';

import { AddClientModal } from './add-client-modal';
import { ClientTable } from './client-table/client-table';
import { ClientTableCols } from './client-table/client-table-columns';
import BreadCrumbs from '@/components/breadcrumbs';
import { Button } from '@/components/ui/buttoncn';
import { ScrollArea } from '@/components/ui/scroll-area';
import { prettifyPhoneNumber } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const breadcrumbItems = [{ title: 'Clients', link: '/dashboard/clients' }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const users = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      phone: '123-456-7890',
      gender: 'Male',
      city: 'Anytown',
      state: 'Anystate',
      country: 'Countryland',
      number: prettifyPhoneNumber(String(4050660043)),
      property_address: '123 Main St'
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      phone: '987-654-3210',
      gender: 'Female',
      city: 'Othertown',
      number: prettifyPhoneNumber(String(4050660043)),
      state: 'Otherstate',
      country: 'Otherland',
      property_address: '456 Other St'
    }
  ];

  const totalUsers = 1000;
  const pageLimit = Number(searchParams.limit) || 10;
  const page = Number(searchParams.page) || 1;
  const pageCount = Math.ceil(totalUsers / pageLimit);

  const [open, setOpen] = useState(false);
  const onConfirm = async () => {};

  return (
    <ScrollArea className="h-full">
      <AddClientModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={false}
      />

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumbs items={breadcrumbItems} />
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Clients
          </h2>
          <div className=" md:flex items-center space-x-2">
            <Button
              variant="secondary"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="gap-1 items-center flex flex-row">
                <Plus size="20" />
                <p>Add</p>
              </div>
            </Button>
          </div>
        </div>

        <ClientTable
          searchKey="first_name"
          pageNo={page}
          columns={ClientTableCols}
          totalUsers={totalUsers}
          data={users}
          pageCount={pageCount}
        />
      </div>
    </ScrollArea>
  );
}
