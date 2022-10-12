import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {

}

export const Large: StoryObj<ButtonProps> = {

}

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <p>
        Button with P tag
      </p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
}