import AvatarCanvas from "../AvatarCanvas";
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitRuleType, TraitType } from "../Avatar/types";

export const hatTraits = [
  '', 
  'admiral pink',
  'admiral',
  'afro black',
  'afro brown',
  'afro rainbow unicorn',
  'antlers',
  'apple',
  'arrowhead',
  'astro cheeks',
  'astro fishbowl',
  'astro',
  'autumn leaf cc',
  'autumn leaf ex',
  'autumn leaf sw',
  'backwards hat black',
  'backwards hat pink',
  'backwards hat white',
  'bamboo hat',
  'banana peel',
  'bat buddy cc',
  'bat buddy sw',
  'beanie black',
  'beanie blue',
  'beanie orange',
  'beanie red',
  'beanie sage cc',
  'beanie sage ex',
  'beanie sage sw',
  'beanie sienna cc',
  'beanie sienna ex',
  'beanie sienna sw',
  'beret black',
  'beret green',
  'beret pink',
  'beret red',
  'bone',
  'bonnett cc',
  'bonnett ex',
  'bonnett sw',
  'boogey hood cc',
  'boogey hood sw',
  'boss',
  'bow',
  'brain',
  'broken',
  'bucket hat blue',
  'bucket hat green',
  'bucket hat tan',
  'bucket hat white',
  'bug hat',
  'bunny hood',
  'candle',
  'candy hat cc',
  'candy hat sw',
  'cat costume',
  'celestial blue',
  'celestial pink',
  'chef hat cc',
  'chef hat ex',
  'chef hat sw',
  'christmas tree hat cc',
  'christmas tree hat ex',
  'christmas tree hat sw',
  'chugs milk cc',
  'chugs milk sw',
  'clown',
  'costume dragon',
  'costume frog',
  'costume gorilla',
  'cowboy black',
  'cowboy brown',
  'creature black',
  'creature blue',
  'creature red',
  'crooked',
  'crown black',
  'crown fire',
  'crown gold',
  'crown',
  'cupcake',
  'dad hat black cc',
  'dad hat black ex',
  'dad hat black sw',
  'dad hat blue cc',
  'dad hat blue ex',
  'dad hat blue sw',
  'decay',
  'deepsea bronze',
  'deepsea orange',
  'disguise fish',
  'disguise rat',
  'disguise sheep',
  'dog hood cc',
  'dog hood sw',
  'dutch',
  'elf hat cc',
  'elf hat ex',
  'elf hat sw',
  'falling leaves cc',
  'falling leaves ex',
  'falling leaves sw',
  'fire helmet cc',
  'fire helmet ex',
  'fire helmet sw',
  'fishbowl',
  'flame acolyte',
  'flame artificer',
  'flame head',
  'flames',
  'flies',
  'flower blue',
  'flower pink',
  'flower red',
  'football helmet black cc',
  'football helmet black ex',
  'football helmet black sw',
  'football helmet blue cc',
  'football helmet blue ex',
  'football helmet blue sw',
  'football helmet chugs cc',
  'football helmet chugs ex',
  'football helmet chugs sw',
  'ghost pirate hat cc',
  'ghost pirate hat sw',
  'ghost',
  'gift box top cc',
  'gift box top ex',
  'gift box top sw',
  'goddess',
  'goggles seaweed',
  'granny bonnet cc',
  'granny bonnet sw',
  'halo fire',
  'halo',
  'hat black',
  'hat skull',
  'hat visor blue',
  'hat visor yellow',
  'hat white',
  'headband black',
  'headband blue',
  'headband red',
  'headband white',
  'helm army',
  'helm biker',
  'helm bronze',
  'helm silver',
  'holly cc',
  'holly ex',
  'holly sw',
  'horns',
  'jester black',
  'jester pink',
  'jiangshi hat cc',
  'jiangshi hat sw',
  'kira hood cc',
  'kira hood sw',
  'knife cc',
  'knife sw',
  'knight black',
  'knight blue',
  'knight red',
  'lady liberty crown cc',
  'lady liberty crown ex',
  'lady liberty crown sw',
  'lemon slice cc',
  'lemon slice ex',
  'lemon slice sw',
  'lotus acolyte',
  'lotus bard',
  'lunar',
  'magic candle',
  'marksman',
  'mask village',
  'masquerade',
  'messy bun blonde cc',
  'messy bun blonde ex',
  'messy bun blonde sw',
  'messy bun brunette cc',
  'messy bun brunette ex',
  'messy bun brunette sw',
  'mohawk green',
  'mohawk purple',
  'mohawk red',
  'monster bolt cc',
  'monster bolt sw',
  'moon historian',
  'moon seer',
  'muffin',
  'mullet blonde',
  'mullet brown',
  'mushroom cartographer back',
  'mushroom cartographer front',
  'mushroom cc',
  'mushroom ex',
  'mushroom historian',
  'mushroom sw',
  'mushroom',
  'newsboy',
  'ninja black',
  'ninja blue',
  'ninja red',
  'nurse',
  'orange slice cc',
  'orange slice ex',
  'orange slice sw',
  'parade master hat cc',
  'parade master hat ex',
  'parade master hat sw',
  'party hat',
  'piercings',
  'pigtails',
  'pilgrim hat cc',
  'pilgrim hat ex',
  'pilgrim hat sw',
  'pilot',
  'pirate black',
  'pirate blackbeard',
  'pirate davy jones',
  'pirate red',
  'poison apple',
  'prince',
  'pumpkin stem cc',
  'pumpkin stem sw',
  'radiant',
  'raven',
  'red hat',
  'red riding hood cc',
  'red riding hood sw',
  'reindeer antlers cc',
  'reindeer antlers ex',
  'reindeer antlers snowy cc',
  'reindeer antlers snowy ex',
  'reindeer antlers snowy sw',
  'reindeer antlers sw',
  'roasted turkey cc',
  'roasted turkey ex',
  'roasted turkey sw',
  'santa hat cc',
  'santa hat ex',
  'santa hat sw',
  'scarecrow hat cc',
  'scarecrow hat sw',
  'screen',
  'sheet ghost cc',
  'sheet ghost sw',
  'ski goggles blue cc',
  'ski goggles blue ex',
  'ski goggles blue sw',
  'ski goggles pink cc',
  'ski goggles pink ex',
  'ski goggles pink sw',
  'skull',
  'snow goggles',
  'snowglobe cc',
  'snowglobe ex',
  'snowglobe sw',
  'snowman head cc',
  'snowman head sw',
  'sorcerer crystal',
  'sorcerer druid',
  'sorcerer novice',
  'star acolyte',
  'star cartographer back',
  'star cartographer front',
  'straw hat',
  'sunhat black',
  'sunhat tan',
  'sunhat white',
  'sushi',
  'sw ears',
  'tesla',
  'the real elf hat cc',
  'the real elf hat ex',
  'the real elf hat sw',
  'top hat',
  'trapper hat brown cc',
  'trapper hat brown ex',
  'trapper hat brown sw',
  'turkey head',
  'tvhead grey',
  'tvhead purple',
  'tvhead white',
  'unicorn horn',
  'vampire bats cc',
  'vampire bats sw',
  'visor green',
  'visor purple',
  'winter beanie blue cc',
  'winter beanie blue ex',
  'winter beanie blue sw',
  'winter beanie green cc',
  'winter beanie green ex',
  'winter beanie green sw',
  'witch hat cc',
  'witch hat sw',
  'wraith head cc',
  'wraith head sw',
  'wreath flowers',
  'wreath',

  'lion-dance-head-purple',
  'lion-dance-head-red',
  'lviii-helmet-gold-sw',
  'lviii-helmet-red-sw',
  'lviii-hat-black-sw',
  'lviii-hat-red-sw',
  'in-love',
  'cupid-hair',
  'fishing-bucket-hat-grey-sw',
  'fishing-bucket-hat-green-sw',
  
  'x'
];

export const shirtTraits = [
  '',
  'astro black',
  'astro orange',
  'astro',
  'bandana green',
  'bandana purple',
  'bandana red',
  'baseball blue',
  'baseball red',
  'bloody tee',
  'boogey suit',
  'boss',
  'box cardboard',
  'box chugs',
  'bundled up blue',
  'bundled up cream',
  'bundled up green',
  'bunny suit',
  'bush',
  'buttondown black flannel',
  'buttondown blue flannel',
  'buttondown brown',
  'buttondown green',
  'buttondown indigo',
  'buttondown red flannel',
  'buttondown tan',
  'cat costume',
  'caveman leopard',
  'caveman',
  'ccfc black',
  'ccfc white',
  'celestial blue',
  'celestial pink',
  'chain medallion',
  'chain',
  'christmas tree',
  'chugs suit',
  'chugs tabard',
  'cloak air',
  'cloak fire',
  'cloak grass',
  'cloak rouge',
  'cloak water',
  'clown gown',
  'clown',
  'coat military',
  'combat black',
  'combat green',
  'costume dragon',
  'costume frog',
  'costume gorilla',
  'costume hotdog',
  'cowboy black',
  'cowboy brown',
  'cuffed shirt grey',
  'cuffed shirt white',
  'cyberpunk black',
  'cyberpunk blue',
  'cyberpunk pink',
  'dapper',
  'deepsea bronze',
  'deepsea orange',
  'diver blue',
  'diver orange',
  'dog suit',
  'dress',
  'dueler',
  'elf top',
  'epaulette black',
  'epaulette red',
  'epaulette white',
  'fire princess',
  'fireman jacket',
  'flame acolyte',
  'flame artificer',
  'football jersey black',
  'football jersey blue',
  'football jersey chugs',
  'gem',
  'ghost pirate shirt',
  'ghostly gown',
  'gift box bottom',
  'gown black',
  'gown purple',
  'gown white',
  'granny gown',
  'hoodie black',
  'hoodie chugs',
  'hoodie purple',
  'hoodie red',
  'hoodie vhs',
  'insect',
  'jack o lantern tee',
  'jester black',
  'jester pink',
  'jiangshi gown',
  'katana black',
  'katana pattern',
  'kimono emerald',
  'kimono flowers',
  'kimono indigo',
  'king black',
  'king brown',
  'kira shirt',
  'knight black',
  'knight leather',
  'knight',
  'labcoat',
  'lady liberty dress',
  'leaf',
  'leather jacket brown',
  'leather',
  'lord blue',
  'lord red',
  'lotus acolyte',
  'lotus bard shirt',
  'macys hoodie',
  'masquerade',
  'milk chug tank',
  'monk',
  'mononoke',
  'monster shirt',
  'moon historian',
  'moon seer',
  'mushroom cartographer',
  'mushroom historian back',
  'mushroom historian front',
  'necklace flint',
  'necklace jaw',
  'necklace teeth',
  'ninja black',
  'ninja blue',
  'ninja red',
  'nurse',
  'parade master top',
  'patchwork overalls dress brown',
  'patchwork overalls dress green',
  'patchwork overalls dress red',
  'pinstripe vest',
  'pirate black',
  'pirate red',
  'plain shirt white',
  'puffy coat sparkle',
  'puffy coat',
  'pumpkin suit',
  'punk',
  'red riding dress',
  'robe blue',
  'robe king',
  'robe red',
  'robe white',
  'samurai black',
  'samurai blue',
  'samurai red',
  'santa shirt',
  'scarecrow shirt',
  'scarf plaid',
  'scarf red',
  'scout bandana green',
  'scout bandana red',
  'shaman',
  'shirt bowtie',
  'shirt claw',
  'shirt grey',
  'shirt metal',
  'shirt ripped',
  'shirt white',
  'shirt wltc',
  'shirt yellow',
  'ski jacket blue',
  'ski jacket pink',
  'sleeve flame',
  'sleeve mushroom',
  'sleeve star',
  'sleeve symbol',
  'snowman body',
  'spectre tee',
  'spooky tee',
  'star acolyte',
  'streetwear hoodie primary',
  'streetwear hoodie white',
  'sweater black',
  'sweater green chain',
  'sweater orange',
  'sweater pink',
  'sweater skull',
  'sweater spider',
  'sweater vest green',
  'sweater vest red',
  'tacky sweater blue',
  'tacky sweater green',
  'tacky sweater red',
  'tanktop orange',
  'tanktop pink',
  'tanktop sailor black',
  'tanktop sailor blue',
  'tanktop sailor red',
  'tanktop tattoo',
  'tanktop white',
  'tiger',
  'toga',
  'torn tee',
  'track jacket black',
  'track jacket primary',
  'traveling merchant',
  'trickster',
  'tshirt blue',
  'tshirt green',
  'tshirt metal',
  'tshirt pink',
  'tshirt red',
  'tshirt white',
  'tshirt yellow',
  'turkey suit',
  'university sweatshirt cc',
  'university sweatshirt coffee cc',
  'university sweatshirt coffee ex',
  'university sweatshirt coffee sw',
  'university sweatshirt sw',
  'vampire suit cc',
  'vampire suit ex',
  'vampire suit sw',
  'varsity torn',
  'varsity',
  'viking brown',
  'viking navy',
  'wetsuit',
  'wings',
  'winter blue',
  'winter red',
  'witch shirt',
  'wltp',
  'work blue',
  'work red',
  'wraith suit cc',
  'wraith suit ex',
  'wraith suit sw',
  'wreath rainbow',
  'wreath red',

  'cupid-wings',
  'lion-dance-costume-purple-front',
  'lion-dance-costume-red-front',
  'lviii-jersey-away',
  'lviii-jersey-home',
  'lviii-tshirt-black',
  'lviii-tshirt-red',
  'scarf-endless-love',
  'tshirt-lovestruck',
  'fishing-shirt-white',
  'fishing-shirt-beige'
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
  'astro black pants',
  'astro orange pants',
  'astro pants',
  'bandana green pants',
  'baseball blue pants',
  'bloody jeans',
  'buttondown black flannel pants',
  'buttondown blue flannel pants',
  'buttondown green pants',
  'buttondown tan pants',
  'cargo shorts',
  'ccfc black shorts',
  'ccfc white shorts',
  'chain pants',
  'combat black pants',
  'combat green pants',
  'costume dragon pants',
  'costume frog pants',
  'costume gorilla pants',
  'costume hotdog pants',
  'cowboy black pants',
  'cuffed pants bright blue',
  'cycling shorts black',
  'deepsea bronze pants',
  'deepsea orange pants',
  'epaulette black pants',
  'epaulette red pants',
  'epaulette white pants',
  'fireman trousers',
  'flame acolyte',
  'flame artificer',
  'ghost tail cc',
  'ghost tail sw',
  'gown black pants',
  'gown purple pants',
  'gown white pants',
  'holiday boxers blue',
  'holiday boxers green',
  'holiday boxers red',
  'hoodie black pants',
  'hoodie purple pants',
  'hoodie red pants',
  'kira pants',
  'knight black pants',
  'knight leather pants',
  'knight pants',
  'labcoat pants',
  'lederhosen pants',
  'lotus acolyte',
  'monk pants',
  'mononoke pants',
  'monster pants',
  'moon historian',
  'ninja black pants',
  'ninja blue pants',
  'ninja red pants',
  'overalls blue pants',
  'overalls flannel pants',
  'overalls pink pants',
  'overalls red pants',
  'overalls skull pants',
  'overalls yellow pants',
  'padded leggings black',
  'padded leggings white',
  'pants bright blue',
  'parade master pants',
  'pirate black pants',
  'pirate red pants',
  'punk pants',
  'robe blue pants',
  'robe king pants',
  'robe red pants',
  'robe white pants',
  'scarecrow pants',
  'shirt white pants',
  'shirt yellow pants',
  'skeleton pants',
  'skeleton suit',
  'ski pants blue',
  'ski pants pink',
  'snowflake onesie',
  'spectre pants',
  'spooky shorts',
  'star acolyte',
  'sweater black pants',
  'sweater green chain pants',
  'sweater orange pants',
  'tanktop orange pants',
  'tanktop pink pants',
  'tanktop sailor black pants',
  'tanktop sailor blue pants',
  'tanktop sailor red pants',
  'tanktop tattoo pants',
  'tanktop white pants',
  'toga pants',
  'torn jeans',
  'tshirt blue pants',
  'tshirt metal pants',
  'tshirt pink pants',
  'tshirt white pants',
  'tshirt yellow pants',
  'viking brown pants',
  'viking navy pants',
  'wetsuit pants',
  'winter blue pants',
  'witch skirt',
  'work blue pants',

  'lion-dance-pants-purple',
  'lion-dance-pants-red',
  'lviii-leggings-white',
  'lviii-leggings-gold',
  'boxers-much-love',
  'cupid-pants',
  'fishing-waders-grey',
  'fishing-waders-green'
];

export const shoeTraits = [
  '',
  'astro black shoes',
  'astro orange shoes',
  'astro shoes',
  'autumn leaf pile',
  'bandana green shoes',
  'baseball blue shoes',
  'baseball red shoes',
  'bloody shoes',
  'bunny shoes',
  'buttondown black flannel shoes',
  'buttondown blue flannel shoes',
  'buttondown green shoes',
  'buttondown red flannel shoes',
  'buttondown tan shoes',
  'ccfc black shoes',
  'ccfc white shoes',
  'chain shoes',
  'cleats',
  'clown shoes',
  'combat black shoes',
  'combat green shoes',
  'comfy boots',
  'cowboy black shoes',
  'deepsea bronze shoes',
  'deepsea orange shoes',
  'epaulette black shoes',
  'gift pile',
  'gown black shoes',
  'gown purple shoes',
  'gown white shoes',
  'granny shoes',
  'hoodie black shoes',
  'hoodie purple shoes',
  'hoodie red shoes',
  'jack o lantern shoes',
  'jiangshi shoes',
  'kira shoes',
  'knight black shoes',
  'knight shoes',
  'labcoat shoes',
  'lederhosen shoes',
  'monk shoes',
  'mononoke shoes',
  'monster shoes',
  'ninja black shoes',
  'nurse shoes',
  'open gift box',
  'overalls blue shoes',
  'overalls pink shoes',
  'overalls red shoes',
  'overalls yellow shoes',
  'parade master sneakers',
  'pirate black shoes',
  'pirate red shoes',
  'punk shoes',
  'rain boots red',
  'rain boots yellow',
  'robe blue shoes',
  'robe king shoes',
  'robe red shoes',
  'robe white shoes',
  'scarecrow shoes',
  'scout shoes',
  'shirt white shoes',
  'shirt yellow shoes',
  'snowboard blue',
  'snowboard pink',
  'snowboarding boots blue',
  'snowboarding boots pink',
  'snowman bottom',
  'spectre shoes',
  'spooky shoes',
  'sweater black shoes',
  'sweater green chain shoes',
  'sweater orange shoes',
  'sweater pink shoes',
  'tanktop pink shoes',
  'tanktop sailor black shoes',
  'tanktop sailor red shoes',
  'tanktop white shoes',
  'toga shoes',
  'torn shoes',
  'tshirt green shoes',
  'tshirt metal shoes',
  'tshirt pink shoes',
  'tshirt red shoes',
  'tshirt white shoes',
  'tshirt yellow shoes',
  'vampire shoes',
  'viking brown shoes',
  'viking navy shoes',
  'winter blue shoes',
  'witch shoes',
  'work blue shoes',

  'lion-dance-paws-purple',
  'lion-dance-paws-red'
]

export const sidekicks = [
  '', 'bones', 'milo', 'swordsman-bones-red'
];

export const backgrounds = [
  '',
  '1490',
  '2288',
  '3330',
  '4695',
  '500',
  '5280',
  '6972',
  '8800',
  '9580',
  'ardigrey',
  'autumn leaves',
  'bluecat',
  'chaos 1',
  'chaos 2',
  'classy_1',
  'classy_2',
  'cool_1',
  'cool_2',
  'cozy fireplace',
  'dark forest path',
  'dark',
  'elder',
  'exotic_1',
  'exotic_2',
  'fracture',
  'gingerbread house',
  'haunted house',
  'holiday beach',
  'holiday decorations',
  'jored',
  'mausoleum',
  'parade route balloon',
  'parade route day',
  'parade route night',
  'primal 1',
  'primal 2',
  'pumpkin carriage',
  'pumpkin patch day',
  'pumpkin patch night',
  'scholar',
  'shadow 1',
  'shadow 2',
  'sinister 1',
  'sinister 2',
  'sipping with the bestie',
  'ski lodge',
  'skyline day',
  'skyline night',
  'snow day',
  'spooky tree',
  'talking trees',
  'wandering moonlight',
  'white',
  'wild_1',
  'wild_2',

  'lunar-new-year-2024',
  'lviii-stadium',
  'valentines-day'
]

export const accessories = [
  '',
  'cupid bow',
  'red balloon',
  'fishing-vest-green',
  'fishing-vest-teal'
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
    effect: '',
    sidekick: '',
    accessory: '',
    tokenId: '',
    baseUrl: 'https://cdn.avatar.coolcats.com/trait/shadowwolf/$traitType/',
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
    accessory: {
      control: 'select',
      options: accessories
    },
    sidekick: {
      control: 'select',
      options: sidekicks
    },
    effect: {
      control: 'select',
      options: [
        '',
        'sticker'
      ]
    },
    background: {
      control: 'select',
      options: backgrounds
    },
    skin: {
      control: 'select',
      options: ['', 'mechanical-x-ray-suit-sw', 'tribal', 'bones']
    },
    baseUrl: {
      control: 'select',
      options: ['https://cdn.avatar.coolcats.com/trait/shadowwolf/$traitType/', 'https://cdn.avatar.coolcats.com/trait/shadowwolf2000x2000/$traitType/']
    }
  }
};

export function generateWolfTraits(args: any) {
  const { pants, background, shirt, face, hat, skin, sidekick, shoes, effect, accessory } = args as any;
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
            uri: `${hat.toLowerCase().replaceAll(' ', '-')}.png`
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
            uri: `${pants.toLowerCase().replaceAll(' ', '-')}.png`.replace('ghost-tail-sw-pants', 'ghost-tail-sw')
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
            uri: `${shirt.toLowerCase().replaceAll(' ', '-')}.png`
          }
        ],
        rules: [].concat((shirt === 'dog suit' ? [{
          type: "MUTATE_ALL",
          fn: "HIDE_LEGS_AND_FEET"
        }] : []) as any)
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
            uri: `${face.toLowerCase().replaceAll(' ', '-')}.png`
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
            uri: `${shoes.toLowerCase().replaceAll(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] as any : []
  ).concat(
    accessory ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.ACCESSORY,
        name: accessory,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `${accessory.toLowerCase().replaceAll(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] as any : []
  ).concat(
    effect ? [
      {
        type: Avatar.SHADOWWOLF,
        view: AvatarView.FULL,
        traitType: TraitType.EFFECT,
        name: effect,
        rarity: TraitRarity.COMMON,
        images: [
          {
            uri: `transparent.png`
          }
        ],
        rules: [{
          type: 'EFFECT',
          fn: TraitRuleFunction.EFFECT_STICKER
        }] as any
      }
    ] : [] as any
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
            uri: `${sidekick.toLowerCase().replaceAll(' ', '-')}.png`
          }
        ],
        rules: []
      }
    ] as any : []
  );
}

export default {}