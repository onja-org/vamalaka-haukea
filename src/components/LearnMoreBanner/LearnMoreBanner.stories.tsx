import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LearnMoreBanner, BannerProps } from './LearnMoreBanner';
import ImageBanner from '../../stories/assets/banner.png';
export default {
  title: 'Component/Learn more banner',
  component: LearnMoreBanner,
} as Meta

const Template: Story<BannerProps> = (args) => <LearnMoreBanner {...args} />

export const Banner = Template.bind({})
Banner.args = {
  bannerHeading: "Madagascars peer-to-peer e-commerce platform",
  bannerDescription: "Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from and how it was made.",
  bannerImage: ImageBanner
}
