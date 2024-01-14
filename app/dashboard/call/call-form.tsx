'use client';

import { CallComboBox } from './call-combo-box';
import { PromptComboBox } from './prompt-combo-box';
import { Button } from '@/components/ui/buttoncn';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import * as Form from '@radix-ui/react-form';
import { useState } from 'react';

export default function CallForm() {
  const [targetCountryCode, setTargetCountryCode] = useState('+1');
  const [fallBackCountryCode, setFallBackCountryCode] = useState('+1');
  const [callPrompt, setCallPrompt] = useState('');

  const handleTargetCountryCodeValueChange = (newValue: string) => {
    setTargetCountryCode(newValue);
  };

  const handleFallBackCountryCodeValueChange = (newValue: string) => {
    setFallBackCountryCode(newValue);
  };

  const handleCallPromptValueChange = (newValue: string) => {
    setCallPrompt(newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formVals = event.target as any;

    const targetPhoneNo = formVals[1].value;
    const fallBackPhoneNo = formVals[3].value;
    const goalOfCall = formVals[4].value;

    console.log(targetPhoneNo);
    console.log(fallBackPhoneNo);
    console.log(goalOfCall);
    console.log(targetCountryCode);
    console.log(fallBackCountryCode);
    console.log(callPrompt);

    //TODO: Send to Supabase Then To Bland.ai
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
      <div className="bg-zinc-950 flex flex-col space-y-8 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-start space-x-4">
          <div className="h-6 w-6 text-gray-400" />
          <p className="text-gray-200">
            Set up scout for your next automated call, Provide the necessary
            target and fallback numbers, define the call's goal, and write the
            initial script for effective lead engagement.
          </p>
        </div>
        <Form.Field name="content">
          <div className="space-y-2">
            <Label className="text-gray-200" htmlFor="primary-phone">
              Target Phone Number
            </Label>
            <div className="flex flex-row gap-2 items-center">
              <CallComboBox
                onValueChange={handleTargetCountryCodeValueChange}
              />
              <Form.Control asChild>
                <Input
                  className="w-full text-gray-900 bg-gray-200"
                  id="primary-phone"
                  placeholder="Enter number to call"
                  type="tel"
                  required
                  pattern="^\+?[1-9]\d{1,14}$"
                />
              </Form.Control>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-gray-200" htmlFor="fallback-phone">
              Fallback Phone Number
            </Label>
            <div className="flex flex-row gap-2 items-center">
              <CallComboBox
                onValueChange={handleFallBackCountryCodeValueChange}
              />

              <Input
                className="w-full text-gray-900 bg-gray-200"
                id="fallback-phone"
                placeholder="Number to forward call to"
                type="tel"
                required
                pattern="^\+?[1-9]\d{1,14}$"
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
              required
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <Label className="text-gray-200" htmlFor="call-prompt">
              Call Prompt
            </Label>

            <PromptComboBox onValueChange={handleCallPromptValueChange} />
          </div>

          <div className="text-center">
            <Form.Message
              className="text-[13px] text-red-500 opacity-[0.8]"
              match="valueMissing"
            >
              Please fill out each input.
            </Form.Message>
          </div>

          <div className="text-center">
            <Form.Message
              className="text-[13px] text-red-500 opacity-[0.8]"
              match="patternMismatch"
            >
              Please enter a valid phone number.
            </Form.Message>
          </div>
        </Form.Field>

        <Form.Submit>
          <Button className="w-full bg-green-500 text-white flex justify-center items-center">
            <div className="h-5 w-5 mr-2" />
            Initiate Call
          </Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
}
