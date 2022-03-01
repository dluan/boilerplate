import { Story, Meta } from '@storybook/react'
import Description from '.'

export default {
  title: 'Main',
  component: Description
} as Meta

export const Basic: Story = () => <Description>teste</Description>
