'use client';

import { Button } from '@/components/ui/buttoncn';
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

const phoneCodes = [
  { value: '+1', label: '🇺🇸 US (+1)' },
  { value: '+44', label: '🇬🇧 UK (+44)' },
  { value: '+49', label: '🇩🇪 DE (+49)' },
  { value: '+33', label: '🇫🇷 FR (+33)' },
  { value: '+34', label: '🇪🇸 ES (+34)' },
  { value: '+39', label: '🇮🇹 IT (+39)' },
  { value: '+55', label: '🇧🇷 BR (+55)' },
  { value: '+91', label: '🇮🇳 IN (+91)' },
  { value: '+86', label: '🇨🇳 CN (+86)' },
  { value: '+81', label: '🇯🇵 JP (+81)' }
];

interface CallComboBoxProps {
  onValueChange: (value: string) => void;
}

export function CallComboBox({ onValueChange }: CallComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(phoneCodes[0].value);

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);
    onValueChange(currentValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[130px] justify-between bg-gray-200"
        >
          {/* Display the label corresponding to the current value */}
          {phoneCodes.find((code) => code.value === value)?.label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput placeholder="Search code..." className="h-9" />
          <CommandEmpty>No match.</CommandEmpty>
          <CommandGroup>
            {phoneCodes.map((code) => (
              <CommandItem
                key={code.value}
                value={code.value}
                onSelect={handleSelect}
              >
                {code.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === code.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
