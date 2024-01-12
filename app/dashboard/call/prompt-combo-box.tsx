'use client';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import * as React from 'react';

const callPrompts = [
  {
    value: 'intro',
    label: 'Introduction'
  },
  {
    value: 'follow-up',
    label: 'Follow-Up'
  },
  {
    value: 'recon',
    label: 'Recon'
  }
];

const callPromptsMapping = {
  intro: {
    description: 'Introduce yourself to form a relationship.'
  },
  'follow-up': {
    description: 'Follow up about a past deal'
  },
  recon: {
    description: 'Find out info about a property'
  }
};

type CallPromptKey = keyof typeof callPromptsMapping;

export function PromptComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<CallPromptKey>(
    callPrompts[0].value as CallPromptKey
  );

  console.log('extra data: ', callPromptsMapping[value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {callPrompts.find((prompt) => prompt.value === value)?.label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search prompt..." className="h-9" />
          <CommandEmpty>No match.</CommandEmpty>
          <CommandGroup>
            {callPrompts.map((prompt) => (
              <CommandItem
                className="flex flex-col gap-1"
                key={prompt.value}
                value={prompt.value}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium flex-1 text-left px-2">
                    {prompt.label}
                  </span>
                  <CheckIcon
                    className={cn(
                      'h-4 w-4',
                      value === prompt.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </div>
                <span className="text-gray-500 text-sm text-center">
                  {callPromptsMapping[prompt.value].description}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
