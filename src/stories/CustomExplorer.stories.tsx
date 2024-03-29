import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitRuleType, TraitType } from '../Avatar/types';

const hatTraits = [
  '',
  'knight-black'
];

const shirtTraits = [
  '',
  'university-sweatshirt-coffee-ex',
  'lady-liberty-dress'
];

const faceTraits = [
  '',
  'rudolph-cc'
];

const pantsTraits = [
  '',
  'astro',
  'astro-black',
  'astro-orange',
  'bandana-green',
  'bandana-purple',
  'bandana-red',
  'baseball-blue',
  'baseball-red',
  'buttondown-black-flannel',
  'buttondown-blue-flannel',
  'buttondown-red-flannel',
  'buttondown-green',
  'buttondown-tan',
  'chain',
  'combat-black',
  'combat-green',
  'costume-dragon',
  'costume-frog',
  'costume-gorilla',
  'costume-hotdog',
  'cowboy-black',
  'cowboy-brown',
  'deepsea-bronze',
  'deepsea-orange',
  'epaulette-black',
  'epaulette-red',
  'epaulette-white',
  'gown-black',
  'gown-purple',
  'gown-white',
  'hoodie-purple',
  'hoodie-red',
  'hoodie-black',
  'shirt-bowtie',
  'shirt-white',
  'shirt-yellow',
  'knight',
  'knight-black',
  'knight-leather',
  'labcoat',
  'lederhosen',
  'monk',
  'mononoke',
  'ninja-black',
  'ninja-blue',
  'ninja-red',
  'nurse',
  'overalls-blue',
  'overalls-flannel',
  'overalls-pink',
  'overalls-red',
  'overalls-yellow',
  'overalls-skull',
  'pirate-black',
  'pirate-red',
  'punk',
  'robe-blue',
  'robe-king',
  'robe-red',
  'robe-white',
  'sweater-black',
  'sweater-green-chain',
  'sweater-orange',
  'sweater-pink',
  'tshirt-red',
  'tshirt-blue',
  'tshirt-green',
  'tshirt-metal',
  'tshirt-pink',
  'tshirt-white',
  'tshirt-yellow',
  'tanktop-orange',
  'tanktop-pink',
  'tanktop-sailor-black',
  'tanktop-sailor-blue',
  'tanktop-sailor-red',
  'tanktop-tattoo',
  'tanktop-white',
  'tiger',
  'toga',
  'viking-brown',
  'viking-navy',
  'wetsuit',
  'winter-blue',
  'winter-red',
  'work-blue',
  'work-red'
];

const sidekicks = [
  '', 'bones', 'milo', 'swordsman-bones-red'
];

export default {
  title: 'Custom Avatar',
  component: AvatarCanvas,
  args: {
    face: '',
    hat: '',
    shirt: '',
    pants: '',
    shoes: '',
    accessory: '',
    sidekick: '',
    skin: '',
    tokenId: '1',
    baseUrl: 'https://cdn.avatar.coolcats.com/trait/explorer/$traitType/',
    view: 'FULL',
    type: 'EXPLORER',
    bordered: false
  },
  argTypes: {
    bordered: {
      control: 'boolean'
    },
    view: {
      control: 'select',
      options: ['FULL', 'FRONT', 'HEAD']
    },
    hat: {
      control: 'select',
      options: hatTraits
    },
    face: {
      control: 'select',
      options: faceTraits
    },
    shirt: {
      control: 'select',
      options: shirtTraits
    },
    pants: {
      control: 'select',
      options: pantsTraits
    },
    accessory: {
      control: 'select',
      options: [
        '',
        'blue-balloon'
      ]
    },
    shoes: {
      control: 'select',
      options: shirtTraits
    },
    sidekick: {
      control: 'select',
      options: sidekicks
    },
    baseUrl: {
      control: 'select',
      options: ['https://cdn.avatar.coolcats.com/trait/explorer/$traitType/', 'https://cdn.avatar.coolcats.com/trait/explorer2000x2000/$traitType/']
    },
    skin: {
      control: 'select',
      options: ['', 'mechanical-x-ray-suit-ex']
    },
    tokenId: {
      control: 'select',
      options: [
        '1'
      ]
    }
  }
  
} as Meta<typeof AvatarCanvas>;

const ExplorerTraits = [] as any

const Template: StoryFn<typeof AvatarCanvas> = (args) => {
  const { pants, shirt, skin, face, hat, sidekick, tokenId, shoes, accessory } = args as any;
  const traits = ExplorerTraits.concat(
    hat ? [
      {
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.HAT,
        name: hat,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${hat.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    skin ? [
      {
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.SKIN,
        name: skin,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${skin.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: [{
          fn: TraitRuleFunction.HIDE_FACE_FOR_MECHANICAL,
          type: TraitRuleType.MUTATE_ALL
        }] as any
      }
    ] : []
  ).concat(
    pants ? [
      {
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.PANTS,
        name: pants,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${pants.toLowerCase().replace(' ', '-')}-pants.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    shirt ? [
      {
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.SHIRT,
        name: shirt,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${shirt.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    face ? [
      {
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.FACE,
        name: face,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${face.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    shoes ? [
      {
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.SHOES,
        name: shoes,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${shoes.toLowerCase().replace(' ', '-')}-shoes.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    accessory ? [
      {
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.ACCESSORY,
        name: accessory,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${accessory}.png`
          }
        ],
        rules: []
      }
    ] : []
  ).concat(
    sidekick ? [
      {
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.SIDEKICK,
        name: sidekick,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${sidekick.toLowerCase().replace(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] : []
  );
  
  return (
    <AvatarCanvas 
      {...args}
      traits={traits}
      height={400}
      width={400}
    />
  )
}

export const Explorer = Template.bind({});