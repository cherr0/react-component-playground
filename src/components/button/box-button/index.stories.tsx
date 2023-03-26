import { BoxButton } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BoxButtonProps } from './type';
import { UnitLayout } from '../../../styles/layout';

export default {
  title: 'common/Buttons/Box Button',
  component: BoxButton,
  argTypes: {
    children: {
      defaultValue: 'Button',
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      control: {
        disable: true
      }
    },
    size: {
      control: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof BoxButton>;

const sizeList: BoxButtonProps['size'][] = ['sm', 'md', 'lg'];

const Template: ComponentStory<typeof BoxButton> = (args) => {
  return (
    <UnitLayout>
      {sizeList.map((v) => (
        <BoxButton {...args} size={v} />
      ))}
    </UnitLayout>
  );
};

export const Contained = Template.bind({});
Template.args = {
  variant: 'contained'
};

export const Outlined = Template.bind({});
Template.args = {
  variant: 'outlined'
};
