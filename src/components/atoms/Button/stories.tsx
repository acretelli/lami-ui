import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

import { Button, Props } from './';

const meta: Meta = {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    onClick: { action: 'cliked' },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/GKS28OjXFb4FBfT4Imdsdm/Lami?node-id=80%3A2',
  },
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('scondary click'),
};
