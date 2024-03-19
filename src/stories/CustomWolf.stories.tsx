import { Meta, StoryFn } from '@storybook/react';

import AvatarCanvas from '../AvatarCanvas';
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitType } from '../Avatar/types';
import { WolfArgs, generateWolfTraits } from './shared';

export default {
  ...WolfArgs,
  title: 'Wolf Sandbox'
} as Meta<typeof AvatarCanvas>;

const Wolftraits = [
  {
    type: Avatar.SHADOWWOLF,
    view: AvatarView.FULL,
    traitType: TraitType.BACKGROUND,
    name: 'primal 1',
    rarity: TraitRarity.COMMON,
    images: [
      {
        uri: 'primal-1.png'
      }
    ],
    rules: []
  }
]

const WolfTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = generateWolfTraits(args);

  return (
    <AvatarCanvas {...args} traits={traits} height={args.height || 400} width={args.width || 400} />
  )
} 

export const Wolf = WolfTemplate.bind({});

const TestTemplate: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = Wolftraits.concat(
    [
      {
        "id":284,
        "name":"astro",
        "rarity":4,
        "type":"SHADOWWOLF",
        "weight":null,
        "traitType":"SHIRT",
        "additional":0,
        "displayName":"Astro",
        "tokenId":null,
        "contract":null,
        "boundTo":{"token_id":2390,"token_type":"SHADOWWOLF"},
        "images":[{"uri":"astro.png"}],
        "rules":[]
      },{
        "id":348,
        "name":"pirate blackbeard",
        "rarity":2,
        "type":"SHADOWWOLF",
        "weight":null,
        "traitType":"HAT",
        "additional":0,
        "displayName":"Pirate blackbeard",
        "tokenId":null,
        "contract":null,
        "boundTo":{"token_id":2390,"token_type":"SHADOWWOLF"},
        "images":[{"uri":"pirate-blackbeard.png"}],
        "rules":[]
      },{"id":386,"name":"frustrated","rarity":1,"type":"SHADOWWOLF","weight":null,"traitType":"FACE","additional":0,"displayName":"Frustrated","tokenId":null,"contract":null,"boundTo":{"token_id":2390,"token_type":"SHADOWWOLF"},"images":[{"uri":"frustrated.png"}],"rules":[]},{"id":429,"name":"no effect","rarity":1,"type":"SHADOWWOLF","weight":-2,"traitType":"EFFECT","additional":1,"displayName":"No Effect","tokenId":null,"contract":null,"displayImage":{"uri":"/images/avatar/none.svg"},"images":[{"uri":"transparent.png"}],"rules":[]},{"id":856,"name":"black cycling shorts","rarity":1,"type":"SHADOWWOLF","weight":null,"traitType":"PANTS","additional":1,"displayName":"Black Cycling Shorts","tokenId":null,"contract":null,"images":[{"uri":"cycling-shorts-black.png"}],"rules":[]},{"id":955,"name":"monster shoes","rarity":2,"type":"SHADOWWOLF","weight":null,"traitType":"SHOES","additional":0,"displayName":"Monster Shoes","tokenId":203,"contract":{"tokenId":203},"images":[{"uri":"monster-shoes.png"}],"rules":[]},{"id":1031,"name":"mausoleum","rarity":3,"type":"SHADOWWOLF","weight":null,"traitType":"BACKGROUND","additional":0,"displayName":"Mausoleum","tokenId":213,"contract":{"tokenId":213},"images":[{"uri":"mausoleum.png"}],"rules":[]},{"name":"cloud sage #13","type":"SHADOWWOLF","view":"FRONT","traitType":"SIDEKICK","rarity":3,"contract":{"tokenId":288,"contract":{"address":"0xda11e1d06e4e0d0ac26805bdb063ecdbac426aa0","network":"etheruem"}},"displayImage":{"uri":"https://s3.amazonaws.com/metadata.coolcatsnft.com/library/sidekick/thumbnail/288.png"},"images":[{"uri":"cloud-sage-blue.png"}],"rules":[]}] as any
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
export const WolfTest = TestTemplate.bind({});

const TestTemplate2: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = Wolftraits.concat(
    [
      {
        "id": 241,
        "name": "caveman",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "SHIRT",
        "additional": 0,
        "displayName": "Caveman",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 1,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "caveman.png"
          }
        ],
        "rules": []
      },
      {
        "id": 369,
        "name": "celestial pink",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "HAT",
        "additional": 0,
        "displayName": "Celestial pink",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 1,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "celestial-pink.png"
          }
        ],
        "rules": []
      },
      {
        "id": 383,
        "name": "crazy",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "FACE",
        "additional": 0,
        "displayName": "Crazy",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 1,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "crazy.png"
          }
        ],
        "rules": []
      },
      {
        "id": 419,
        "name": "primal 2",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "BACKGROUND",
        "additional": 0,
        "displayName": "Primal 2",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 1,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "primal-2.png"
          }
        ],
        "rules": []
      },
      {
        "id": 948,
        "name": "mechanical x ray",
        "rarity": 4,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "SKIN",
        "additional": 0,
        "displayName": "Mechanical X-Ray",
        "tokenId": 210,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 210
        },
        "images": [
          {
            "uri": "mechanical-x-ray-suit-sw.png"
          }
        ],
        "rules": [
          {
            "type": "MUTATE_ALL",
            "fn": "HIDE_FACE_FOR_MECHANICAL"
          }
        ]
      },
      {
        "id": 993,
        "name": "ghost tail",
        "rarity": 3,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "PANTS",
        "additional": 0,
        "displayName": "Ghost Tail",
        "tokenId": 165,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 165
        },
        "images": [
          {
            "uri": "ghost-tail-sw.png"
          }
        ],
        "rules": [
          {
            "type": "MUTATE_ALL",
            "fn": "HIDE_LEGS_AND_FEET"
          }
        ]
      }
    ] as any
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
export const WolfTest2 = TestTemplate2.bind({});

const TestTemplate3: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = Wolftraits.concat(
    [
      {
        "id": 248,
        "name": "scarf red",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "SHIRT",
        "additional": 0,
        "displayName": "Scarf red",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 1636,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "scarf-red.png"
          }
        ],
        "rules": []
      },
      {
        "id": 389,
        "name": "joy",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "FACE",
        "additional": 0,
        "displayName": "Joy",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 1636,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "joy.png"
          }
        ],
        "rules": []
      },
      {
        "id": 430,
        "name": "no border",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": -2,
        "traitType": "BORDER",
        "additional": 1,
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
        "id": 709,
        "name": "no accessory",
        "rarity": 0,
        "type": "SHADOWWOLF",
        "weight": -2,
        "traitType": "ACCESSORY",
        "additional": 1,
        "displayName": "No Accessory",
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
        "id": 711,
        "name": "no skin",
        "rarity": 0,
        "type": "SHADOWWOLF",
        "weight": -2,
        "traitType": "SKIN",
        "additional": 1,
        "displayName": "Hide Skin",
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
        "id": 754,
        "name": "labcoat",
        "rarity": 2,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "SHOES",
        "additional": 0,
        "displayName": "Black Sneakers",
        "tokenId": 95,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 95
        },
        "images": [
          {
            "uri": "labcoat-shoes.png"
          }
        ],
        "rules": []
      },
      {
        "id": 843,
        "name": "buttondown blue flannel",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "PANTS",
        "additional": 0,
        "displayName": "Dark Grey Cuffed Pants",
        "tokenId": 6,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 6
        },
        "images": [
          {
            "uri": "buttondown-blue-flannel-pants.png"
          }
        ],
        "rules": []
      },
      {
        "id": 868,
        "name": "fracture",
        "rarity": 1,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "BACKGROUND",
        "additional": 1,
        "displayName": "Fracture",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "images": [
          {
            "uri": "fracture.png"
          }
        ],
        "rules": []
      },
      {
        "id": 995,
        "name": "wraith",
        "rarity": 4,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "HAT",
        "additional": 0,
        "displayName": "Wraith Head",
        "tokenId": 163,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 163
        },
        "images": [
          {
            "uri": "wraith-head-sw.png"
          }
        ],
        "rules": []
      }
    ] as any
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
export const WolfTest3 = TestTemplate3.bind({});

const TestTemplate4: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = Wolftraits.filter(t => t.traitType !== TraitType.BACKGROUND).concat(
    [
      {
        "id": 300,
        "name": "box chugs",
        "rarity": 3,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "SHIRT",
        "additional": false,
        "displayName": "Box chugs",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 4627,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "box-chugs.png"
          }
        ],
        "rules": []
      },
      {
        "id": 403,
        "name": "red eyes",
        "rarity": 4,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "FACE",
        "additional": false,
        "displayName": "Red eyes",
        "tokenId": null,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": null,
        "boundTo": {
          "token_id": 4627,
          "token_type": "SHADOWWOLF"
        },
        "images": [
          {
            "uri": "red-eyes.png"
          }
        ],
        "rules": []
      },
      {
        "id": 697,
        "name": "no pants",
        "rarity": 0,
        "type": "SHADOWWOLF",
        "weight": -2,
        "traitType": "PANTS",
        "additional": true,
        "displayName": "No Pants",
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
        "id": 961,
        "name": "bunny shoes",
        "rarity": 4,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "SHOES",
        "additional": false,
        "displayName": "Bunny Shoes",
        "tokenId": 197,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 197
        },
        "images": [
          {
            "uri": "bunny-shoes.png"
          }
        ],
        "rules": []
      },
      {
        "id": 1641,
        "name": "sticker",
        "rarity": 0,
        "type": "SHADOWWOLF",
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
        ],
        "generated": {}
      },
      {
        "id": 1781,
        "name": "valentines day",
        "rarity": 3,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "BACKGROUND",
        "additional": false,
        "displayName": "Valentines Day",
        "tokenId": 359,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 359
        },
        "images": [
          {
            "uri": "valentines-day.png"
          }
        ],
        "rules": []
      },
      {
        "id": 1787,
        "name": "in love emote",
        "rarity": 3,
        "type": "SHADOWWOLF",
        "weight": null,
        "traitType": "HAT",
        "additional": false,
        "displayName": "In Love Emote",
        "tokenId": 355,
        "fromTokenId": null,
        "toTokenId": null,
        "contract": {
          "tokenId": 355
        },
        "images": [
          {
            "uri": "in-love-sw.png"
          }
        ],
        "rules": []
      },
      {
        "name": "Reindeer",
        "type": "SHADOWWOLF",
        "view": "FULL",
        "traitType": "SIDEKICK",
        "rarity": 0,
        "contract": {
          "tokenId": 1629,
          "contract": {
            "address": "0xda11e1d06e4e0d0ac26805bdb063ecdbac426aa0",
            "network": "etheruem"
          }
        },
        "displayImage": {
          "uri": "https://s3.amazonaws.com/metadata.coolcatsnft.com/library/sidekick/thumbnail/1629.png"
        },
        "images": [
          {
            "uri": "reindeer-sage-red.png"
          }
        ],
        "rules": []
      }
    ] as any
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
export const WolfTest4 = TestTemplate4.bind({});

const TestTemplate5: StoryFn<typeof AvatarCanvas> = (args) => {
  const traits = Wolftraits.concat([
    {
      "id": 292,
      "name": "puffy coat sparkle",
      "rarity": 1,
      "type": "SHADOWWOLF",
      "weight": null,
      "traitType": "SHIRT",
      "additional": false,
      "displayName": "Puffy coat sparkle",
      "tokenId": null,
      "fromTokenId": null,
      "toTokenId": null,
      "contract": null,
      "boundTo": {
        "token_id": 5,
        "token_type": "SHADOWWOLF"
      },
      "images": [
        {
          "uri": "puffy-coat-sparkle.png"
        }
      ],
      "rules": [],
      "sets": []
    },
    {
      "id": 368,
      "name": "cat costume",
      "rarity": 1,
      "type": "SHADOWWOLF",
      "weight": null,
      "traitType": "HAT",
      "additional": false,
      "displayName": "Cat costume",
      "tokenId": null,
      "fromTokenId": null,
      "toTokenId": null,
      "contract": null,
      "boundTo": {
        "token_id": 5,
        "token_type": "SHADOWWOLF"
      },
      "images": [
        {
          "uri": "cat-costume.png"
        }
      ],
      "rules": [],
      "sets": []
    },
    {
      "id": 405,
      "name": "tired",
      "rarity": 1,
      "type": "SHADOWWOLF",
      "weight": null,
      "traitType": "FACE",
      "additional": false,
      "displayName": "Tired",
      "tokenId": null,
      "fromTokenId": null,
      "toTokenId": null,
      "contract": null,
      "boundTo": {
        "token_id": 5,
        "token_type": "SHADOWWOLF"
      },
      "images": [
        {
          "uri": "tired.png"
        }
      ],
      "rules": [],
      "sets": []
    },
    {
      "id": 1710,
      "name": "ardi grey",
      "rarity": 0,
      "type": "SHADOWWOLF",
      "weight": null,
      "traitType": "BACKGROUND",
      "additional": true,
      "displayName": "Ardi Grey",
      "tokenId": null,
      "fromTokenId": null,
      "toTokenId": null,
      "contract": null,
      "images": [
        {
          "uri": "ardigrey.png"
        }
      ],
      "rules": [],
      "sets": []
    },
    {
      "id": 1929,
      "name": "cat cabal",
      "rarity": 0,
      "type": "SHADOWWOLF",
      "weight": null,
      "traitType": "BORDER",
      "additional": true,
      "displayName": "Cat Cabal",
      "tokenId": null,
      "fromTokenId": null,
      "toTokenId": null,
      "contract": null,
      "images": [
        {
          "uri": "cat-cabal-sw.png"
        }
      ],
      "rules": [
        {
          "type": "MUTATE_ALL",
          "fn": "CABAL_PLACEMENT"
        }
      ],
      "sets": []
    }
  ] as any);
  
  return (
    <AvatarCanvas 
      {...args}
      traits={traits}
      height={400}
      width={400}
    />
  )
}
export const WolfCabal = TestTemplate5.bind({});