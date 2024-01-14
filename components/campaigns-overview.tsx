export function CampaignsOverview() {
  return (
    <div className="space-y-8 mt-2">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Cold Call Campaign</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Created - 10th Jan 2024
            </p>

            <p className="text-sm text-muted-foreground">Call Targets - 22</p>

            <p className="text-sm text-muted-foreground">Calls so far: 5</p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Email Campaign</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Created - 15th Feb 2024
            </p>

            <p className="text-sm text-muted-foreground">Emails Sent - 150</p>

            <p className="text-sm text-muted-foreground">Responses: 47</p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Social Media Blast</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Initiated - 20th Mar 2024
            </p>

            <p className="text-sm text-muted-foreground">Posts Created - 30</p>

            <p className="text-sm text-muted-foreground">Engagements: 200</p>
          </div>
        </div>
      </div>
    </div>
  );
}
