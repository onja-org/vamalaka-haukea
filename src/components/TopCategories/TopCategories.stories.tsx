import { Story, Meta } from '@storybook/react'
import { TopCategories, TopCategoriesProperties } from './TopCategories'

export default {
  title: 'Components/Top Categories',
  component: TopCategories,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TopCategoriesProperties> = (args) => (
  <TopCategories {...args} />
)

const categories = [
  { id: '1', title: 'Food' },
  { id: '2', title: 'Handmade' },
  { id: '3', title: 'Spices' },
  { id: '4', title: 'Collectibles' },
]

export const TopCategoriesComponent = Template.bind({})
TopCategoriesComponent.args = {
  heading: 'Top Categories',
  status: 'idle',
  categories: categories,
}
