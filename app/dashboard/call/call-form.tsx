import { CallComboBox } from './call-combo-box';
import { PromptComboBox } from './prompt-combo-box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CallForm() {
  return (
    <div className="dark min-h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-start space-x-4">
          <div className="h-6 w-6 text-gray-400" />
          <p className="text-gray-200">
            Set up scout for your next automated call, Provide the necessary
            target and fallback numbers, define the call's goal, and write the
            initial script for effective lead engagement.
          </p>
        </div>
        <div className="space-y-2">
          <Label className="text-gray-200" htmlFor="primary-phone">
            Target Phone Number
          </Label>

          <div className="flex flex-row gap-2">
            <CallComboBox />
            <Input
              className="w-full text-gray-900 bg-gray-200"
              id="primary-phone"
              placeholder="Enter number to call"
              type="tel"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-gray-200" htmlFor="fallback-phone">
            Fallback Phone Number
          </Label>
          <div className="flex flex-row gap-2">
            <CallComboBox />
            <Input
              className="w-full text-gray-900 bg-gray-200"
              id="fallback-phone"
              placeholder="Number to forward call to"
              type="tel"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-gray-200" htmlFor="call-goal">
            What you want to get out of this call
          </Label>
          <Input
            className="w-full text-gray-900 bg-gray-200"
            id="call-goal"
            placeholder="Enter the goal of the call"
            type="text"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <Label className="text-gray-200" htmlFor="call-prompt">
            Call Prompt
          </Label>

          <PromptComboBox />
        </div>
        <Button className="w-full bg-green-500 text-white flex justify-center items-center">
          <div className="h-5 w-5 mr-2" />
          Initiate Call
        </Button>
      </div>
    </div>
  );
}