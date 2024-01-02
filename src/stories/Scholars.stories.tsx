import { Meta, StoryFn } from '@storybook/react';
import AvatarCanvas from '../AvatarCanvas';
import { WolfArgs, generateWolfTraits } from './shared';

export default {
  ...WolfArgs,
  title: 'Scholars'
} as Meta<typeof AvatarCanvas>

const ScholarTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = generateWolfTraits(args);
  return (
    <AvatarCanvas 
      {...args}
      traits={traits}
      height={400}
      width={400}
    />
  )
}

export const Scholar = ScholarTemplate.bind({});