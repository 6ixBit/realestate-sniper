import { Badge } from './ui/badge';
import { AudioLines, CalendarClock, Users } from 'lucide-react';

export function CampaignsOverview() {
  return (
    <div className="space-y-8 mt-2">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <div className="flex flex-row justify-between gap-2">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Call Campaign
            </h4>

            <Badge variant="success">Active</Badge>
          </div>

          <div className="pt-4 flex flex-col gap-1">
            <div className="flex flex-row gap-3">
              <CalendarClock />
              <p className="text-sm text-muted-foreground">10th Jan 2024</p>
            </div>

            <div className="flex flex-row gap-3">
              <Users />
              <p className="text-sm text-muted-foreground">22 targets</p>
            </div>

            <div className="flex flex-row gap-3">
              <AudioLines />
              <p className="text-sm text-muted-foreground">5 calls executed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <div className="flex flex-row justify-between gap-2">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Client Acq
            </h4>

            <Badge variant="standby">Inactive</Badge>
          </div>

          <div className="pt-4 flex flex-col gap-1">
            <div className="flex flex-row gap-3">
              <CalendarClock />
              <p className="text-sm text-muted-foreground">15th Feb 2024</p>
            </div>

            <div className="flex flex-row gap-3">
              <AudioLines />
              <p className="text-sm text-muted-foreground">150 emails sent</p>
            </div>

            <div className="flex flex-row gap-3">
              <Users />
              <p className="text-sm text-muted-foreground">47 responses</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <div className="flex flex-row justify-between gap-2">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Social Media Blast
            </h4>

            <Badge variant="destructive">Inactive</Badge>
          </div>

          <div className="pt-4 flex flex-col gap-1">
            <div className="flex flex-row gap-3">
              <CalendarClock />
              <p className="text-sm text-muted-foreground">20th Mar 2024</p>
            </div>

            <div className="flex flex-row gap-3">
              <AudioLines />
              <p className="text-sm text-muted-foreground">30 posts created</p>
            </div>

            <div className="flex flex-row gap-3">
              <Users />
              <p className="text-sm text-muted-foreground">200 engagements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
