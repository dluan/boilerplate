import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Esqueleto de Next JS',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
