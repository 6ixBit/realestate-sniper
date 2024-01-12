export const callPromptsMapping = {
  intro: {
    description:
      'Introduce yourself to a lead, inform them about your services and gather sentiment.'
  },
  'follow-up': {
    description: 'Follow up on a lead that has gone cold'
  },
  recon: {
    description: 'Find out more info about a property'
  }
};

export const callPrompts: Prompt[] = [
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

type PromptKey = keyof typeof callPromptsMapping;

interface Prompt {
  value: PromptKey;
  label: string;
}
