import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function RecentCalls() {
  return (
    <div className="space-y-8 mt-2">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">🇺🇸 (123) 456-7890</p>

            <p className="text-sm text-muted-foreground">⌛️ 1 min 36 sec</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">🇺🇸 (234) 567-8901</p>
            <p className="text-sm text-muted-foreground">⌛️ 2 min 45 sec</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">🇺🇸 (345) 678-9012</p>
            <p className="text-sm text-muted-foreground">⌛️ 3 min 12 sec</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">🇺🇸 (456) 789-0123</p>
            <p className="text-sm text-muted-foreground">⌛️ 1 min 59 sec</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">🇺🇸 (567) 890-1234</p>
            <p className="text-sm text-muted-foreground">⌛️ 2 min 23 sec</p>
          </div>
        </div>
      </div>
    </div>
  );
}
