import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from './';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' },
  },
};

export default meta;

const Template: Story<TextFieldProps> = (args) => (
  <TextField {...args} placeholder="Digite um texto aqui" />
);

export const Default = Template.bind({});
