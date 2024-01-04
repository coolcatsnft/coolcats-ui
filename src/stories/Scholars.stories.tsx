import { Meta, StoryFn } from '@storybook/react';
import AvatarCanvas from '../AvatarCanvas';
import { WolfArgs, generateWolfTraits } from './shared';

export default {
  ...WolfArgs,
  title: 'Scholars'
} as Meta<typeof AvatarCanvas>

function filterArgs(args: any) {
  return Object.entries(
    args || {}
  ).filter(
    ([e, v]) => v
  ).reduce((obj, curr) => {
    return {
      ...obj,
      [curr[0]]: curr[1]
    }
  }, {})
}

function ScolarTemplate(scholarArgs: any, args: any) {
  const traits = generateWolfTraits({
    ...scholarArgs,
    ...(
      filterArgs(args)
    )
  });

  return (
    <AvatarCanvas {...args} traits={traits} height={4000} width={4000} />
  )
}

const FATemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'flame artificer',
      shirt: 'flame artificer'
    },
    args
  )
}

export const FlameArtificer = FATemplate.bind({});

const MHTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'moon historian',
      shirt: 'moon historian',
      pants: 'moon historian',
    },
    args
  )
}

export const MoonHistorian = MHTemplate.bind({});

const FACTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'flame acolyte',
      pants: 'flame acolyte',
      shirt: 'flame acolyte',
    },
    args
  )
}

export const FlameAcolyte = FACTemplate.bind({});

const LoTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'lotus acolyte',
      pants: 'lotus acolyte',
      shirt: 'lotus acolyte',
    },
    args
  )
}

export const LotusAcolyte = LoTemplate.bind({});

const StTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'star acolyte',
      pants: 'star acolyte',
      shirt: 'star acolyte',
    },
    args
  )
}

export const StarAcolyte = StTemplate.bind({});

const MushTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'mushroom cartographer front',
      shirt: 'mushroom cartographer',
    },
    args
  )
}

export const MushroomCartographer = MushTemplate.bind({});

const StarCarTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'star cartographer front'
    },
    args
  )
}

export const StarCartographer = StarCarTemplate.bind({});

const MSTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'moon seer',
      shirt: 'moon seer',
    },
    args
  )
}

export const MoonSeer = MSTemplate.bind({});

const MushHistTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return ScolarTemplate(
    {
      hat: 'mushroom historian',
      shirt: 'mushroom historian front',
    },
    args
  )
}

export const MushroomHistorian = MushHistTemplate.bind({});