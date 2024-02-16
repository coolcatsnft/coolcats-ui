import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { CatArgs, generateCatTraits } from './catShared';

export default {
  ...CatArgs,
  title: 'Cat Sandbox'
} as Meta<typeof AvatarCanvas>;

const CatTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = generateCatTraits(args);

  return (
    <AvatarCanvas {...args} traits={traits} height={args.height || 400} width={args.width || 400} />
  )
} 

export const Cat = CatTemplate.bind({});