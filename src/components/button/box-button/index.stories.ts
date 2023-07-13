import { BoxButton } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BoxButton> = {
  title: 'common/Buttons/Box Button',
  component: BoxButton,
  tags: ['autodocs'],
  args: {
    children: 'Button'
  }
};

export default meta;

type Story = StoryObj<typeof BoxButton>;

export const Contained: Story = {
  args: {
    variant: 'contained'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
};
