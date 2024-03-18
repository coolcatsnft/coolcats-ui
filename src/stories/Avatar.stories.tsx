import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitRuleType, TraitType } from '../Avatar/types';

export default {
  title: 'Avatar',
  component: AvatarCanvas,
  args: {
    baseUrl: 'https://cdn.avatar.coolcats.com/trait/cat2000x2000/$traitType/',
    width: 400,
    height: 400,
    view: 'FULL',
    type: 'CAT'
  }
} as Meta<typeof AvatarCanvas>;

const BlueCatTraits = [
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.BACKGROUND,
    name: 'cool_2',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'cool_2.png'
      }
    ]
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.FACE,
    name: 'happy',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'happy.png'
      }
    ],
    rules: []
  }
]

const BlueCatTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={BlueCatTraits}
      onLoadLayers={console.log}
    />
  )
}

export const BlueCat = BlueCatTemplate.bind({});

const TigerTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={BlueCatTraits.concat([{
        type: Avatar.CAT,
        view: args.view,
        traitType: TraitType.SKIN,
        name: 'tiger',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'tiger.png'
          }
        ],
        rules: []
      }])}
    />
  )
}

export const TigerCat = TigerTemplate.bind({});

const WolfTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl={args.baseUrl?.replace('/cat', '/shadowwolf')}
      type={Avatar.SHADOWWOLF}
      traits={[
        {
          type: Avatar.SHADOWWOLF,
          view: args.view,
          traitType: TraitType.FACE,
          name: 'shadow wolf',
          rarity: TraitRarity.COMMON,
          images: [
            {
              uri: 'shadow-wolf.png'
            }
          ],
          rules: []
        }
      ]}
    />
  )
}

export const Wolf = WolfTemplate.bind({});

const Cat4710Traits = [
  ...BlueCatTraits,
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHIRT,
    name: 'buttondown tan',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'buttondown-tan.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.PANTS,
    name: 'buttondown tan pants',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'buttondown-tan-pants.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHOES,
    name: 'buttondown tan shoes',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'buttondown-tan-shoes.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.HAT,
    name: 'bucket hat green',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'bucket-hat-green.png'
      }
    ],
    rules: []
  }
]

const GownTraits = [
  ...BlueCatTraits,
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHIRT,
    name: 'gown white',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'gown-white.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.PANTS,
    name: 'gown white pants',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'gown-white-pants.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.SHOES,
    name: 'gown white shoes',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'gown-white-shoes.png'
      }
    ],
    rules: []
  },
  {
    type: Avatar.CAT,
    view: AvatarView.FULL,
    traitType: TraitType.HAT,
    name: 'bucket hat green',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'bucket-hat-green.png'
      }
    ],
    rules: []
  }
]

const Cat4710Template: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits}
    />
  )
}

export const Cat4710 = Cat4710Template.bind({});

const WithBonesTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.SIDEKICK,
        name: 'bones',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'bones.png'
          }
        ],
        rules: []
      }])}
    />
  )
}

export const WithBones = WithBonesTemplate.bind({});

const MiloTrait = {
  type: Avatar.CAT,
  view: AvatarView.FULL,
  traitType: TraitType.SIDEKICK,
  name: 'milo',
  rarity: TraitRarity.COMMON,
  images: [
    {
      uri: 'milo.png'
    }
  ],
  rules: []
};

const WithMiloTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([MiloTrait])}
    />
  )
}

export const WithMilo = WithMiloTemplate.bind({});

const BlackAndWhiteRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_BLACK_AND_WHITE"
  }
] as any;

const BlackAndWhiteTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'black and white',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: BlackAndWhiteRules
      }])}
    />
  )
}

export const BlackAndWhiteEffect = BlackAndWhiteTemplate.bind({});

const SepiaRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_SEPIA"
  }
] as any;

const SepiaTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'Sepia',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: SepiaRules
      }])}
    />
  )
}

export const SepiaEffect = SepiaTemplate.bind({});

const InverseRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_INVERSE"
  }
] as any;

const InverseTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'black and white',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: InverseRules
      }])}
    />
  )
}

export const InverseEffect = InverseTemplate.bind({});

const StickerRules = [
  {
    type: "EFFECT",
    fn: "EFFECT_STICKER"
  }
] as any;

const StickerTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'sticker',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: StickerRules
      }])}
    />
  )
}

export const StickerEffect = StickerTemplate.bind({});

const GownWhiteTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={GownTraits}
    />
  )
}

export const GownWhite = GownWhiteTemplate.bind({});

const GownShoesTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.filter(t => t.traitType !== TraitType.SHOES).concat(GownTraits.filter(t => t.traitType === TraitType.SHOES))}
    />
  )
}

export const GownShoes = GownShoesTemplate.bind({});

const CustomBackgroundAndEffectTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={
        Cat4710Traits.concat([MiloTrait]).concat([{
          type: Avatar.CAT,
          view: AvatarView.FULL,
          traitType: TraitType.BORDER,
          name: 'comic con',
          rarity: TraitRarity.COMMON,
          weight: 200,
          images: [
            {
              uri: 'comic-con.png'
            }
          ],
          rules: [
            {
              type: TraitRuleType.MUTATE_ALL,
              fn: TraitRuleFunction.COMIC_CON_PLACEMENT
            }
          ] as any
        }] as any)
      }
    />
  )
}

export const CustomBackgroundAndEffect = CustomBackgroundAndEffectTemplate.bind({});

const CustomBackgroundAndEffectTemplate2: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={
        Cat4710Traits.concat([MiloTrait]).concat([{
          type: Avatar.CAT,
          view: AvatarView.FULL,
          traitType: TraitType.BORDER,
          name: 'homer nft',
          rarity: TraitRarity.COMMON,
          weight: 200,
          images: [
            {
              uri: 'homer-nft.png'
            }
          ],
          rules: [
            {
              type: TraitRuleType.MUTATE_ALL,
              fn: TraitRuleFunction.HOMER_NFT_PLACEMENT
            }
          ] as any
        }] as any)
      }
    />
  )
}

export const HomerBorder = CustomBackgroundAndEffectTemplate2.bind({});

const ExplorerTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      tokenId='1'
      baseUrl='https://cdn.avatar.coolcats.com/trait/explorer2000x2000/$traitType/'
      type={Avatar.EXPLORER}
      traits={[]}
    />
  )
}

export const Explorer = ExplorerTemplate.bind({});

const ChristmasCardTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'christmas card',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'card-border.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: 'CHRISTMAS_CARD_PLACEMENT'
        }] as any
      }]).concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'sticker',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: StickerRules
      }])}
    />
  )
}

export const ChristmasCard = ChristmasCardTemplate.bind({});

const WootTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'woot',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'woot.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: TraitRuleFunction.WOOT_PLACEMENT
        }] as any
      }])}
    />
  )
}

export const Woot = WootTemplate.bind({});

const MulkChugTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'milk chug',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'milk-chug-logo.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: TraitRuleFunction.MILK_CHUG
        }] as any
      }])}
    />
  )
}

export const MilkChug = MulkChugTemplate.bind({});

const WolfChugTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl={args.baseUrl?.replace('/cat', '/shadowwolf')}
      type={Avatar.SHADOWWOLF}
      traits={[
        {
          type: Avatar.SHADOWWOLF,
          view: args.view,
          traitType: TraitType.FACE,
          name: 'shadow wolf',
          rarity: TraitRarity.COMMON,
          images: [
            {
              uri: 'shadow-wolf.png'
            }
          ],
          rules: []
        }, {
          type: Avatar.SHADOWWOLF,
          view: AvatarView.FULL,
          traitType: TraitType.BORDER,
          name: 'milk chug',
          rarity: TraitRarity.COMMON,
          images: [
            {
              uri: 'milk-chug-logo.png'
            }
          ],
          rules: [{
            type: 'MUTATE_ALL',
            fn: TraitRuleFunction.MILK_CHUG
          }] as any
        }
      ]}
    />
  )
}

export const WolfMilkChug = WolfChugTemplate.bind({});

const CabalCatTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      height={1000}
      width={1000}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'cat cabal',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'cat-cabal-cc.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: TraitRuleFunction.CABAL_PLACEMENT
        }] as any
      }])}
    />
  )
}

export const CabalCat = CabalCatTemplate.bind({});

const OfflineAvatarTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl=''
      height={4000}
      width={4000}
      type={Avatar.CAT}
      traits={Cat4710Traits.concat([{
        type: Avatar.CAT,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: 'Sepia',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'transparent.png'
          }
        ],
        rules: SepiaRules
      }])}
    />
  )
}

export const OfflineAvatar = OfflineAvatarTemplate.bind({});

const ExplorerChugTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      tokenId='1'
      baseUrl='https://cdn.avatar.coolcats.com/trait/explorer2000x2000/$traitType/'
      type={Avatar.EXPLORER}
      traits={[{
        type: Avatar.EXPLORER,
        view: AvatarView.FULL,
        traitType: TraitType.BORDER,
        name: 'milk chug',
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: 'milk-chug-logo.png'
          }
        ],
        rules: [{
          type: 'MUTATE_ALL',
          fn: TraitRuleFunction.MILK_CHUG
        }] as any
      }]}
    />
  )
}

export const ExplorerMilkChug = ExplorerChugTemplate.bind({});



const WolfChugTemplate2: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl={args.baseUrl?.replace('/cat', '/shadowwolf')}
      type={Avatar.SHADOWWOLF}
      traits={
        [
          {
            "name": "backyard bones #18",
            "type": "SHADOWWOLF",
            "view": "FULL",
            "traitType": "SIDEKICK",
            "rarity": 3,
            "contract": {
              "tokenId": 125,
              "contract": {
                "address": "0x8d2d8ba0775e64e419d2bb2de31336a0e7eeba39",
                "network": "goerli"
              }
            },
            "displayImage": {
              "uri": "https://s3.amazonaws.com/metadata.coolcatsnft.com/library/sidekick/thumbnail/125.png"
            },
            "images": [
              {
                "uri": "backyard-bones-orange.png"
              }
            ],
            "rules": []
          },
          {
            "id": 318,
            "name": "beanie orange",
            "rarity": 1,
            "type": "SHADOWWOLF",
            "weight": null,
            "traitType": "HAT",
            "additional": 0,
            "displayName": "Beanie orange",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 7,
              "token_type": "SHADOWWOLF"
            },
            "images": [
              {
                "uri": "beanie-orange.png"
              }
            ],
            "rules": []
          },
          {
            "id": 385,
            "name": "evil",
            "rarity": 1,
            "type": "SHADOWWOLF",
            "weight": null,
            "traitType": "FACE",
            "additional": 0,
            "displayName": "Evil",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 7,
              "token_type": "SHADOWWOLF"
            },
            "images": [
              {
                "uri": "evil.png"
              }
            ],
            "rules": []
          },
          {
            "id": 416,
            "name": "shadow 1",
            "rarity": 1,
            "type": "SHADOWWOLF",
            "weight": null,
            "traitType": "BACKGROUND",
            "additional": 0,
            "displayName": "Shadow 1",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 7,
              "token_type": "SHADOWWOLF"
            },
            "images": [
              {
                "uri": "shadow-1.png"
              }
            ],
            "rules": []
          },
          {
            "id": 840,
            "name": "chain",
            "rarity": 2,
            "type": "SHADOWWOLF",
            "weight": null,
            "traitType": "PANTS",
            "additional": 0,
            "displayName": "Orange Swim Shorts",
            "tokenId": 9,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 9
            },
            "images": [
              {
                "uri": "chain-pants.png"
              }
            ],
            "rules": []
          },
          {
            "id": 1063,
            "name": "blue balloon",
            "rarity": 4,
            "type": "SHADOWWOLF",
            "weight": null,
            "traitType": "ACCESSORY",
            "additional": 1,
            "displayName": "Blue Balloon",
            "tokenId": 217,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 217
            },
            "images": [
              {
                "uri": "blue-balloon.png"
              }
            ],
            "rules": []
          },
          {
            "id": 1122,
            "name": "black track jacket",
            "rarity": 3,
            "type": "SHADOWWOLF",
            "weight": null,
            "traitType": "SHIRT",
            "additional": 1,
            "displayName": "Black Track Jacket",
            "tokenId": 262,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 262
            },
            "images": [
              {
                "uri": "track-jacket-black.png"
              }
            ],
            "rules": []
          },
          {
            "id": 1770,
            "name": "the milk chug",
            "rarity": 0,
            "type": "SHADOWWOLF",
            "weight": null,
            "traitType": "BORDER",
            "additional": 1,
            "displayName": "The Milk Chug",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "displayImage": {
              "uri": "/images/avatar/tiles/the-milk-chug.png"
            },
            "images": [
              {
                "uri": "milk-chug-logo.png"
              }
            ],
            "rules": [{
              type: 'MUTATE_ALL',
              fn: TraitRuleFunction.MILK_CHUG
            }] as any
          }
        ] as any}
    />
  )
}

export const WolfMilkChug2 = WolfChugTemplate2.bind({});



const StickerTesttemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl={args.baseUrl}
      type={Avatar.CAT}
      traits={
        [
          {
            "id": 16,
            "name": "happy",
            "rarity": 1,
            "type": "CAT",
            "weight": null,
            "traitType": "FACE",
            "additional": false,
            "displayName": "Happy",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 4710,
              "token_type": "CAT"
            },
            "images": [
              {
                "uri": "happy.png"
              }
            ],
            "rules": []
          },
          {
            "id": 154,
            "name": "bucket hat green",
            "rarity": 1,
            "type": "CAT",
            "weight": null,
            "traitType": "HAT",
            "additional": false,
            "displayName": "Bucket hat green",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 4710,
              "token_type": "CAT"
            },
            "images": [
              {
                "uri": "bucket-hat-green.png"
              }
            ],
            "rules": []
          },
          {
            "id": 217,
            "name": "no border",
            "rarity": 1,
            "type": "CAT",
            "weight": -2,
            "traitType": "BORDER",
            "additional": true,
            "displayName": "No Border",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "displayImage": {
              "uri": "/images/avatar/none.svg"
            },
            "images": [
              {
                "uri": "transparent.png"
              }
            ],
            "rules": []
          },
          {
            "id": 231,
            "name": "cool_1",
            "rarity": 1,
            "type": "CAT",
            "weight": null,
            "traitType": "BACKGROUND",
            "additional": false,
            "displayName": "Cool 1",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 4710,
              "token_type": "CAT"
            },
            "images": [
              {
                "uri": "cool_1.png"
              }
            ],
            "rules": []
          },
          {
            "id": 438,
            "name": "astro black",
            "rarity": 4,
            "type": "CAT",
            "weight": null,
            "traitType": "PANTS",
            "additional": false,
            "displayName": "Black Astro",
            "tokenId": 1,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 1
            },
            "images": [
              {
                "uri": "astro-black-pants.png"
              }
            ],
            "rules": []
          },
          {
            "id": 578,
            "name": "combat black",
            "rarity": 4,
            "type": "CAT",
            "weight": null,
            "traitType": "SHOES",
            "additional": false,
            "displayName": "Black Combat Boots",
            "tokenId": 81,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 81
            },
            "images": [
              {
                "uri": "combat-black-shoes.png"
              }
            ],
            "rules": []
          },
          {
            "id": 864,
            "name": "plain grey shirt",
            "rarity": 1,
            "type": "CAT",
            "weight": null,
            "traitType": "SHIRT",
            "additional": true,
            "displayName": "Plain Grey Shirt",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "images": [
              {
                "uri": "shirt-grey.png"
              }
            ],
            "rules": []
          },
          {
            "id": 1640,
            "name": "sticker",
            "rarity": 0,
            "type": "CAT",
            "weight": null,
            "traitType": "EFFECT",
            "additional": true,
            "displayName": "Outline",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "images": [
              {
                "uri": "transparent.png"
              }
            ],
            "rules": [
              {
                "type": "EFFECT",
                "fn": "EFFECT_STICKER"
              }
            ]
          },
          {
            "name": "Magical Girl",
            "type": "CAT",
            "view": "FULL",
            "traitType": "SIDEKICK",
            "rarity": 0,
            "contract": {
              "tokenId": 373,
              "contract": {
                "address": "0xda11e1d06e4e0d0ac26805bdb063ecdbac426aa0",
                "network": "etheruem"
              }
            },
            "displayImage": {
              "uri": "https://s3.amazonaws.com/metadata.coolcatsnft.com/library/sidekick/thumbnail/373.png"
            },
            "images": [
              {
                "uri": "magical girl-sage-flame.png"
              }
            ],
            "rules": []
          }
        ] as any}
    />
  )
}

export const StickerTest = StickerTesttemplate.bind({});

const CupidWingsTestTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  return (
    <AvatarCanvas 
      {...args}
      baseUrl={args.baseUrl}
      type={Avatar.CAT}
      traits={
        [
          {
            "id": 16,
            "name": "happy",
            "rarity": 1,
            "type": "CAT",
            "weight": null,
            "traitType": "FACE",
            "additional": false,
            "displayName": "Happy",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 4710,
              "token_type": "CAT"
            },
            "images": [
              {
                "uri": "happy.png"
              }
            ],
            "rules": []
          },
          {
            "id": 154,
            "name": "bucket hat green",
            "rarity": 1,
            "type": "CAT",
            "weight": null,
            "traitType": "HAT",
            "additional": false,
            "displayName": "Bucket hat green",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 4710,
              "token_type": "CAT"
            },
            "images": [
              {
                "uri": "bucket-hat-green.png"
              }
            ],
            "rules": []
          },
          {
            "id": 217,
            "name": "no border",
            "rarity": 1,
            "type": "CAT",
            "weight": -2,
            "traitType": "BORDER",
            "additional": true,
            "displayName": "No Border",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "displayImage": {
              "uri": "/images/avatar/none.svg"
            },
            "images": [
              {
                "uri": "transparent.png"
              }
            ],
            "rules": []
          },
          {
            "id": 231,
            "name": "cool_1",
            "rarity": 1,
            "type": "CAT",
            "weight": null,
            "traitType": "BACKGROUND",
            "additional": false,
            "displayName": "Cool 1",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "boundTo": {
              "token_id": 4710,
              "token_type": "CAT"
            },
            "images": [
              {
                "uri": "cool_1.png"
              }
            ],
            "rules": []
          },
          {
            "id": 578,
            "name": "combat black",
            "rarity": 4,
            "type": "CAT",
            "weight": null,
            "traitType": "SHOES",
            "additional": false,
            "displayName": "Black Combat Boots",
            "tokenId": 81,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 81
            },
            "images": [
              {
                "uri": "combat-black-shoes.png"
              }
            ],
            "rules": []
          },
          {
            "id": 1640,
            "name": "sticker",
            "rarity": 0,
            "type": "CAT",
            "weight": null,
            "traitType": "EFFECT",
            "additional": true,
            "displayName": "Outline",
            "tokenId": null,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": null,
            "images": [
              {
                "uri": "transparent.png"
              }
            ],
            "rules": [
              {
                "type": "EFFECT",
                "fn": "EFFECT_STICKER"
              }
            ]
          },
          {
            "id": 1783,
            "name": "cupids bow",
            "rarity": 3,
            "type": "CAT",
            "weight": null,
            "traitType": "ACCESSORY",
            "additional": false,
            "displayName": "Cupid's Bow",
            "tokenId": 354,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 354
            },
            "images": [
              {
                "uri": "cupid-bow.png"
              }
            ],
            "rules": []
          },
          {
            "id": 1792,
            "name": "cupids skirt",
            "rarity": 3,
            "type": "CAT",
            "weight": null,
            "traitType": "PANTS",
            "additional": false,
            "displayName": "Cupid's Skirt",
            "tokenId": 353,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 353
            },
            "images": [
              {
                "uri": "cupid-pants.png"
              }
            ],
            "rules": []
          },
          {
            "id": 1804,
            "name": "cupids wings",
            "rarity": 3,
            "type": "CAT",
            "weight": null,
            "traitType": "SHIRT",
            "additional": false,
            "displayName": "Cupid's Wings",
            "tokenId": 352,
            "fromTokenId": null,
            "toTokenId": null,
            "contract": {
              "tokenId": 352
            },
            "images": [
              {
                "uri": "cupid-wings.png"
              }
            ],
            "rules": []
          },
          {
            "name": "Magical Girl",
            "type": "CAT",
            "view": "FULL",
            "traitType": "SIDEKICK",
            "rarity": 0,
            "contract": {
              "tokenId": 373,
              "contract": {
                "address": "0xda11e1d06e4e0d0ac26805bdb063ecdbac426aa0",
                "network": "etheruem"
              }
            },
            "displayImage": {
              "uri": "https://s3.amazonaws.com/metadata.coolcatsnft.com/library/sidekick/thumbnail/373.png"
            },
            "images": [
              {
                "uri": "magical girl-sage-flame.png"
              }
            ],
            "rules": []
          }
        ] as any}
    />
  )
}

export const CupidWingsTest = CupidWingsTestTemplate.bind({});