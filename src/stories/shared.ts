import { Meta } from "@storybook/react";
import AvatarCanvas from "../AvatarCanvas";
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitRuleType, TraitType } from "../Avatar/types";

export const hatTraits = [
  '', 
  'Banana Peel',
  'Beanie Orange',
  'Bone',
  'Broken',
  'Crooked',
  'Flower Blue',
  'Flower Red',
  'Headband Black',
  'Headband White',
  'Magic Candle',
  'Muffin',
  'Sushi',
  'Newsboy',
  'Marksman',
  'Poison Apple',
  'Flies',
  'Pigtails',
  'Beanie Black',
  'Backwards Hat Black',
  'Backwards Hat Pink',
  'Backwards Hat White',
  'Bow',
  'Brain',
  'Decay',
  'Ghost',
  'Raven',
  'Red Hat',
  'Snow Goggles',
  'Sorcerer Novice',
  'Straw Hat',
  'Party Hat',
  'Pirate Blackbeard',
  'Tesla',
  'Bamboo Hat',
  'Bug Hat',
  'Creature Blue',
  'Creature Red',
  'Disguise Fish',
  'Disguise Rat',
  'Disguise Sheep',
  'Flame Head',
  'Jester Black',
  'Jester Pink',
  'Mask Village',
  'Masquerade',
  'Skull',
  'Pirate Davy Jones',
  'Lunar',
  'Radiant',
  'Astro',
  'Boss',
  'Cat Costume',
  'Celestial Pink',
  'Celestial Blue',
  'Creature Black',
  'Crown',
  'Fishbowl',
  'Flames',
  'Goddess',
  'Mushroom',
  'Sorcerer Crystal',
  'Sorcerer Druid',
  'Pilot',
  'Clown',

  // Scholars
  'Lotus Bard'
];

export const shirtTraits = [
  '',
  'Buttondown Indigo',
  'Buttondown Brown',
  'Caveman',
  'Chain',
  'Necklace Flint',
  'Necklace Jaw',
  'Necklace Teeth',
  'Scarf Plaid',
  'Scarf Red',
  'Shirt Claw',
  'Shirt Metal',
  'Shirt Ripped',
  'Shirt WLTC',
  'Sweater Skull',
  'Sweater Spider',
  'Wreath Rainbow',
  'Wreath Red',
  'Box Cardboard',
  'Pinstripe Vest',
  'Caveman Leopard',
  'Chain Medallion',
  'Cloak Air',
  'Cloak Fire',
  'Cloak Grass',
  'Cloak Water',
  'Coat Military',
  'Cyberpunk Blue',
  'Cyberpunk Black',
  'Cyberpunk Pink',
  'Dapper',
  'Dress',
  'Hoodie VHS',
  'Insect',
  'Katana Black',
  'Kimono Emerald',
  'Kimono Flowers',
  'Kimono Indigo',
  'Leather',
  'Lord Blue',
  'Puffy Coat',
  'Trickster',
  'Astro',
  'Boss',
  'Cat Costume',
  'Celestial Pink',
  'Celestial Blue',
  'Dueler',
  'King Black',
  'Lord Red',
  'Puffy Coat Sparkle',
  'Samurai Black',
  'Shaman',
  'Skeleton',
  'Traveling Merchant',
  'Varsity Torn',
  'Wings',
  'Clown',
  'Box Chugs',
  'Bush',
  'Cloak Rouge',
  'Diver Orange',
  'Diver Blue',
  'Fire Princess',
  'Gem',
  'Jester Pink',
  'Jester Black',
  'Katana Pattern',
  'King Brown',
  'Masquerade',
  'Samurai Blue',
  'Samurai Red',
  'Varsity',
  'Hoodie Chugs',

  // Scholars
  'Lotus Bard-Shirt'
];

export const faceTraits = [
  '',
  'Blank',
  'Blep',
  'Cute',
  'Crazy',
  'Empty',
  'Evil',
  'Frustrated',
  'Ghoul',
  'Happy',
  'Joy',
  'Sad',
  'Shocked',
  'Wide Eye',
  'Sunglasses Round',
  'Sunglasses Sleek',
  'Three Eyes',
  'Ziggy',
  'Big Eyes',
  'Classic',
  'Dots',
  'Ender',
  'Face Face',
  'Glow',
  'Red Eyes',
  'Shadow Wolf',
  'Tired',
  'Stache',
  'XO'
];

export const pantsTraits = [
  '',
  'overalls skull',
  'skeleton',
  'gown white',
  'gown purple',
  'gown black',
  'work blue',
  'winter blue',
  'wetsuit',
  'viking navy',
  'viking brown',
  'tanktop white',
  'tanktop tattoo',
  'tanktop sailor red',
  'tanktop sailor blue',
  'tanktop sailor black',
  'tanktop pink',
  'tanktop orange',
  'tshirt yellow',
  'tshirt white',
  'tshirt pink',
  'tshirt metal',
  'tshirt blue',
  'sweater orange',
  'sweater green chain',
  'sweater black',
  'black shorts',
  'robe red',
  'robe king',
  'robe blue',
  'punk',
  'pirate red',
  'pirate black',
  'overalls red',
  'overalls pink',
  'overalls flannel',
  'overalls blue',
  'toga',
  'ninja red',
  'ninja blue',
  'ninja black',
  'mononoke',
  'monk',
  'lederhosen',
  'labcoat',
  'knight leather',
  'knight black',
  'knight',
  'shirt yellow',
  'shirt white',
  'hoodie black',
  'hoodie red',
  'hoodie purple',
  'epaulette white',
  'epaulette red',
  'epaulette black',
  'deepsea orange',
  'deepsea bronze',
  'cowboy black',
  'costume hotdog',
  'costume gorilla',
  'costume frog',
  'costume dragon',
  'combat green',
  'combat black',
  'chain',
  'buttondown tan',
  'buttondown green',
  'buttondown blue flannel',
  'buttondown black flannel',
  'baseball blue',
  'bandana green',
  'astro orange',
  'astro black',
  'astro',
  'cuffed bright blue',
  'black cycling shorts',
  'bright blue',
  'witch skirt',
  'torn jeans',
  'spooky shorts',
  'spectre pants',
  'skeleton suit',
  'scarecrow pants',
  'monster pants',
  'kira pants',
  'ghost tail',
  'bloody jeans',
  'black padded leggings',
  'white padded leggings',
  'fireman pants',
  'cargo shorts',
  'green holiday boxers',
  'blue holiday boxers',
  'red holiday boxers',
  'snowflake onesie',
  'blue ski pants',
  'pink ski pants',
  'parade master pants',
  'ccfc black shorts',
  'ccfc white shorts'
];

export const shoeTraits = [
  '',
  'work blue',
  'winter blue',
  'viking navy',
  'viking brown',
  'tshirt yellow',
  'tshirt white',
  'tshirt pink',
  'tshirt metal',
  'tshirt green',
  'tshirt red',
  'toga',
  'sweater pink',
  'sweater orange',
  'sweater green chain',
  'sweater black',
  'robe white',
  'robe red',
  'robe king',
  'robe blue',
  'punk',
  'pirate red',
  'pirate black',
  'overalls yellow',
  'overalls red',
  'overalls pink',
  'overalls blue',
  'nurse',
  'ninja black',
  'mononoke',
  'monk',
  'lederhosen',
  'tanktop white',
  'tanktop sailor red',
  'tanktop sailor black',
  'tanktop pink',
  'shirt yellow',
  'shirt white',
  'labcoat',
  'knight',
  'knight black',
  'hoodie red',
  'hoodie purple',
  'hoodie black',
  'gown white',
  'gown purple',
  'gown black',
  'epaulette black',
  'deepsea orange',
  'deepsea bronze',
  'cowboy black',
  'combat green',
  'combat black',
  'chain',
  'buttondown tan',
  'buttondown red flannel',
  'buttondown green',
  'buttondown blue flannel',
  'buttondown black flannel',
  'baseball red',
  'baseball blue',
  'bandana green',
  'astro orange',
  'astro black',
  'astro',
  'witch shoes',
  'vampire shoes',
  'torn shoes',
  'spooky shoes',
  'spectre shoes',
  'scarecrow shoes',
  'monster shoes',
  'kira shoes',
  'jiangshi shoes',
  'jack o lantern shoes',
  'granny shoes',
  'clown shoes',
  'bunny shoes',
  'bloody shoes',
  'new shoes',
  'rain boots yellow',
  'autumn leaf pile',
  'red rain boots',
  'scout shoes',
  'comfy boots',
  'cleats',
  'pink snowboarding boots',
  'blue snowboarding boots',
  'parade master sneakers',
  'pink snowboard',
  'blue snowboard',
  'snowman shoes',
  'gift box',
  'gift pile',
  'ccfc black shoes',
  'ccfc white shoes'
]

export const sidekicks = [
  '', 'bones', 'milo', 'swordsman-bones-red'
];

export const backgrounds = [
  '',
  'shadow 1',
  'shadow 2',
  'primal 1',
  'primal 2',
  'chaos 1',
  'chaos 2',
  'elder',
  'scholar',
  'sinister 1',
  'sinister 2',
  'fracture',
  'blank',
  'dark forest path',
  'haunted house',
  'mausoleum',
  'spooky tree',
  'talking trees',
  'wandering moonlight',
  'lotus flower',
  'star',
  'moon',
  'flame',
  'flower',
  'mushroom',
  'skyline night',
  'skyline day',
  'parade route balloon',
  'parade route night',
  'parade route day',
  'pumpkin patch day',
  'pumpkin patch night',
  'autumn leaves',
  'blood moon',
  'lotus flower elder',
  'blue flame elder',
  'mushroom elder',
  'dark star elder',
  'dark',
  'blue cat',
  'ardi grey',
  'jo red',
  'pumpkin carriage',
  'holiday decorations',
  'gingerbread house',
  'holiday beach',
  'snow day',
  'cozy fireplace',
  'ski lodge'
]

export const WolfArgs = {
  title: 'Custom Avatar',
  component: AvatarCanvas,
  args: {
    face: 'big-eyes',
    hat: '',
    shirt: '',
    pants: '',
    shoes: '',
    skin: '',
    sidekick: '',
    tokenId: '',
    baseUrl: 'https://content.coolcatsnft.com/avatar/shadowwolf/$traitType/',
    view: 'FULL',
    type: 'SHADOWWOLF',
    background: '',
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
    shoes: {
      control: 'select',
      options: shoeTraits
    },
    sidekick: {
      control: 'select',
      options: sidekicks
    },
    background: {
      control: 'select',
      options: backgrounds
    },
    skin: {
      control: 'select',
      options: ['', 'mechanical-x-ray-suit-sw']
    },
    baseUrl: {
      control: 'select',
      options: ['https://content.coolcatsnft.com/avatar/shadowwolf/$traitType/', 'https://content.coolcatsnft.com/avatar/shadowwolf2000x2000/$traitType/']
    }
  }
};

export function generateWolfTraits(args: any) {
  const { pants, background, shirt, face, hat, skin, sidekick, shoes } = args as any;
  return [].concat(
    background ? [{
      type: Avatar.SHADOWWOLF,
      view: AvatarView.FULL,
      traitType: TraitType.BACKGROUND,
      name: 'primal 1',
      rarity: TraitRarity.COMMON,
      images: [
        {
          uri: `${background.toLowerCase().replaceAll(' ', '-')}.png`
        }
      ],
      rules: []
    }] as any : []
  ).concat(
    hat ? [
      {
        type: Avatar.SHADOWWOLF,
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
    ] as any : []
  ).concat(
    skin ? [
      {
        type: Avatar.SHADOWWOLF,
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
    ] as any : []
  ).concat(
    pants ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.PANTS,
        name: pants,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${pants.toLowerCase().replace(' ', '-')}-pants.png`.replace('ghost-tail-sw-pants', 'ghost-tail-sw')
          }
        ],
        rules: pants?.includes('ghost') ? [{
          fn: TraitRuleFunction.HIDE_LEGS_AND_FEET,
          type: TraitRuleType.MUTATE_ALL
        }] as any : []
      }
    ] as any : []
  ).concat(
    shirt ? [
      {
        type: Avatar.SHADOWWOLF,
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
    ] as any : []
  ).concat(
    face ? [
      {
        type: Avatar.SHADOWWOLF,
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
    ] as any : []
  ).concat(
    shoes ? [
      {
        type: Avatar.SHADOWWOLF,
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
    ] as any : []
  ).concat(
    sidekick ? [
      {
        type: Avatar.SHADOWWOLF,
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
    ] as any : []
  );
}

export default {}