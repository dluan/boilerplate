import { Story, Meta } from '@storybook/react'
import Title from '.'

export default {
  title: 'Main',
  component: Title
} as Meta

export const Basic: Story = () => <Title>teste</Title>
