import AvatarCanvas from "../AvatarCanvas";
import { Avatar, AvatarView, TraitRarity, TraitRuleFunction, TraitRuleType, TraitType } from "../Avatar/types";

export const hatTraits = [''].concat('admiral,admiral pink,afro black,afro brown,afro rainbow unicorn,antlers,apple,arrowhead,astro,astro cheeks,astro fishbowl,beanie black,beanie blue,beanie orange,beanie red,beret black,beret green,beret pink,beret red,bow,bucket hat blue,bucket hat green,bucket hat tan,bucket hat white,candle,costume dragon,costume frog,costume gorilla,cowboy black,cowboy brown,crown black,crown fire,crown gold,cupcake,deepsea bronze,deepsea orange,dutch,flower blue,flower pink,flower red,goggles seaweed,halo,halo fire,hat black,hat skull,hat visor blue,hat visor yellow,hat white,headband blue,headband red,helm army,helm biker,helm bronze,helm silver,horns,knight black,knight blue,knight red,mohawk green,mohawk purple,mohawk red,mullet blonde,mullet brown,ninja black,ninja blue,ninja red,nurse,piercings,pirate black,pirate red,prince,sunhat black,sunhat tan,sunhat white,sushi,top hat,tvhead grey,tvhead purple,tvhead white,unicorn horn,visor green,visor purple,wreath,wreath flowers,screen,screen,screen,wraith head cc,witch hat cc,vampire bats cc,sheet ghost cc,scarecrow hat cc,red riding hood cc,pumpkin stem cc,monster bolt cc,knife cc,kira hood cc,jiangshi hat cc,granny bonnet cc,ghost pirate hat cc,dog hood cc,chugs milk cc,candy hat cc,bunny hood,boogey hood cc,bat buddy cc,tv head glitch,football helmet black cc,football helmet chugs cc,football helmet blue cc,messy bun brunette cc,lady liberty crown cc,roasted turkey cc,messy bun blonde cc,falling leaves cc,beanie sienna cc,dad hat black cc,orange slice cc,dad hat blue cc,lemon slice cc,fire helmet cc,pilgrim hat cc,beanie sage cc,autumn leaf cc,turkey head,chef hat cc,mushroom cc,bonnett cc,reindeer antlers snowy cc,winter beanie green cc,christmas tree hat cc,winter beanie blue cc,parade master hat cc,trapper hat brown cc,reindeer antlers cc,ski goggles pink cc,ski goggles blue cc,snowman head cc,gift box top cc,snowglobe cc,santa hat cc,elf hat cc,holly cc,the real elf hat cc,lion dance head purple,lion dance head red,lviii helmet gold cc,lviii helmet red cc,lviii hat black cc,lviii hat red cc,in love cc,cupid hair cc,ccoty 2023 helmet cc,fishing bucket hat grey cc,fishing bucket hat green cc'.split(','));
export const faceTraits = [''].concat('angry,angry cute,angry scar,beard brown,beard pirate,beard tan,derp,ditto,dizzy,double face,face face,glasses,glasses funny,glossy,grin,happy,happy cute,hearts,mononoke,mummy,ninja black,ninja blue,ninja red,owo,pixel,rich,shocked,smirk,stunned,sunglasses blue,sunglasses cool,sunglasses cowboy,sunglasses heart,sunglasses pixel,sunglasses squad,sunglasses yellow,three eyes,tired,tvface 404,tvface bobross,tvface nosignal,tvface xp,unamused,uwu,wink,zombie,vampire fangs cc,skeleton face paint cc,scarecrow face cc,jiangshi face cc,jack o lantern cc,clown face paint cc,eye black cc,snowman cc,rudolph cc'.split(','));
export const shirtTraits = [''].concat('astro,astro black,astro orange,bandana green,bandana purple,bandana red,baseball blue,baseball red,buttondown black flannel,buttondown blue flannel,buttondown green,buttondown red flannel,buttondown tan,chain,combat black,combat green,costume dragon,costume frog,costume gorilla,costume hotdog,cowboy black,cowboy brown,deepsea bronze,deepsea orange,epaulette black,epaulette red,epaulette white,gown black,gown purple,gown white,hoodie black,hoodie purple,hoodie red,knight,knight black,knight leather,labcoat,monk,mononoke,ninja black,ninja blue,ninja red,nurse,pirate black,pirate red,punk,robe blue,robe king,robe red,robe white,shirt bowtie,shirt white,shirt yellow,sweater black,sweater green chain,sweater orange,sweater pink,tanktop orange,tanktop pink,tanktop sailor black,tanktop sailor blue,tanktop sailor red,tanktop tattoo,tanktop white,tiger,toga,tshirt blue,tshirt green,tshirt metal,tshirt pink,tshirt red,tshirt white,tshirt yellow,viking brown,viking navy,wetsuit,winter blue,winter red,work blue,work red,cuffed shirt grey,cuffed shirt white,plain shirt white,shirt grey,wraith suit cc,witch shirt,vampire suit cc,torn tee,spooky tee,spectre tee,scarecrow shirt,red riding dress,pumpkin suit,monster shirt,kira shirt,jiangshi gown,jack o lantern tee,granny gown,ghostly gown,ghost pirate shirt,dog suit,clown gown,chugs suit,bunny suit,boogey suit,bloody tee,transparent,university sweatshirt coffee cc,patchwork overalls dress brown,patchwork overalls dress green,patchwork overalls dress red,streetwear hoodie primary,university sweatshirt cc,streetwear hoodie white,football jersey chugs,football jersey black,track jacket primary,leather jacket brown,scout bandana green,track jacket black,lady liberty dress,sweater vest green,scout bandana red,sweater vest red,fireman jacket,chugs tabard,turkey suit,tacky sweater green,tacky sweater blue,tacky sweater red,parade master top,bundled up green,bundled up cream,gift box bottom,ski jacket pink,ski jacket blue,bundled up blue,christmas tree,macys hoodie,snowman body,santa shirt,elf top,football jersey blue,milk chug tank,wltp,ccfc black,ccfc white,lion dance costume red front,lion dance costume purple front,lviii tshirt black,lviii tshirt red,lviii jersey home,lviii jersey away,scarf endless love,tshirt lovestruck,cupid wings,ccoty 2023 shirt,fishing shirt white,fishing shirt beige'.split(','));
export const pantsTraits = [''].concat('astro pants,astro black pants,astro orange pants,bandana green pants,baseball blue pants,buttondown black flannel pants,buttondown blue flannel pants,buttondown green pants,buttondown tan pants,chain pants,combat black pants,combat green pants,costume dragon pants,costume frog pants,costume gorilla pants,costume hotdog pants,cowboy black pants,deepsea bronze pants,deepsea orange pants,epaulette black pants,epaulette red pants,epaulette white pants,hoodie black pants,hoodie purple pants,hoodie red pants,knight pants,knight black pants,knight leather pants,labcoat pants,lederhosen pants,monk pants,mononoke pants,ninja black pants,ninja blue pants,ninja red pants,overalls blue pants,overalls flannel pants,overalls pink pants,overalls red pants,pirate black pants,pirate red pants,punk pants,robe blue pants,robe king pants,robe red pants,robe white pants,shirt white pants,shirt yellow pants,sweater black pants,sweater green chain pants,sweater orange pants,tanktop orange pants,tanktop pink pants,tanktop sailor black pants,tanktop sailor blue pants,tanktop sailor red pants,tanktop tattoo pants,tanktop white pants,tshirt blue pants,tshirt metal pants,tshirt pink pants,tshirt white pants,tshirt yellow pants,viking brown pants,viking navy pants,wetsuit pants,winter blue pants,work blue pants,gown black pants,gown purple pants,gown white pants,toga pants,transparent,overalls yellow pants,cuffed pants bright blue,cycling shorts black,pants bright blue,witch skirt,torn jeans,spooky shorts,spectre pants,skeleton suit,scarecrow pants,monster pants,kira pants,ghost tail cc,bloody jeans,padded leggings black,padded leggings white,fireman trousers,cargo shorts,holiday boxers green,holiday boxers blue,holiday boxers red,snowflake onesie,ski pants blue,ski pants pink,parade master pants,ccfc black shorts,ccfc white shorts,lion dance pants purple,lion dance pants red,lviii leggings white,lviii leggings gold,cupid pants,boxers much love,ccoty 2023 pants,fishing waders grey,fishing waders green'.split(','));
export const shoeTraits = [''].concat('astro shoes,astro black shoes,astro orange shoes,bandana green shoes,baseball blue shoes,baseball red shoes,buttondown black flannel shoes,buttondown blue flannel shoes,buttondown green shoes,buttondown red flannel shoes,buttondown tan shoes,chain shoes,combat black shoes,combat green shoes,cowboy black shoes,deepsea bronze shoes,deepsea orange shoes,epaulette black shoes,gown black shoes,gown purple shoes,gown white shoes,hoodie black shoes,hoodie purple shoes,hoodie red shoes,knight shoes,knight black shoes,labcoat shoes,lederhosen shoes,monk shoes,mononoke shoes,ninja black shoes,nurse shoes,overalls blue shoes,overalls pink shoes,overalls red shoes,overalls yellow shoes,pirate black shoes,pirate red shoes,punk shoes,robe blue shoes,robe king shoes,robe red shoes,robe white shoes,shirt white shoes,shirt yellow shoes,sweater black shoes,sweater green chain shoes,sweater orange shoes,sweater pink shoes,tanktop pink shoes,tanktop sailor black shoes,tanktop sailor red shoes,tanktop white shoes,toga shoes,tshirt green shoes,tshirt metal shoes,tshirt pink shoes,tshirt red shoes,tshirt white shoes,tshirt yellow shoes,viking brown shoes,viking navy shoes,winter blue shoes,work blue shoes,transparent,witch shoes,vampire shoes,torn shoes,spooky shoes,spectre shoes,scarecrow shoes,monster shoes,kira shoes,jiangshi shoes,jack o lantern shoes,granny shoes,clown shoes,bunny shoes,bloody shoes,robe king shoes1,rain boots yellow,autumn leaf pile,rain boots red,scout shoes,comfy boots,cleats,snowboarding boots pink,snowboarding boots blue,parade master sneakers,snowboard pink,snowboard blue,snowman bottom,open gift box,gift pile,ccfc black shoes,ccfc white shoes,lion dance paws purple,lion dance paws red,ccoty 2023 boots'.split(','));
export const accessoryTraits = [''].concat('transparent,red riding basket,pumpkin candy bucket,ghost pirate hook,chugs balloon,blue balloon,red balloon,buneth,cupid bow,fishing-vest-green,fishing-vest-teal'.split(','));
export const backgroundTraits = [''].concat('cool_1,cool_2,wild_1,wild_2,classy_1,classy_2,exotic_1,exotic_2,500,3330,2288,4695,5280,6972,8800,9580,1490,fracture,white,wandering moonlight,talking trees,spooky tree,mausoleum,haunted house,dark forest path,skyline night,skyline day,parade route balloon,parade route night,parade route day,pumpkin patch day,pumpkin patch night,autumn leaves,dark,bluecat,ardigrey,jored,pumpkin carriage,holiday decorations,gingerbread house,holiday beach,snow day,cozy fireplace,ski lodge,transparent,lunar new year 2024,lviii stadium,valentines day'.split(','));
export const sidekicks = ['', 'bones', 'milo', 'swordsman-bones-red'];
export const skinTraits = ['', 'mechanical-x-ray-suit-cc', 'tribal', 'bones'];
export const stickerTraits = ['', 'sticker'];

export const CatArgs = {
  title: 'Custom Avatar',
  component: AvatarCanvas,
  args: {
    background: backgroundTraits[1],
    face: faceTraits.find(f => f === 'happy'),
    hat: '',
    shirt: '',
    pants: '',
    shoes: '',
    skin: '',
    effect: '',
    sidekick: '',
    accessory: '',
    tokenId: '',
    baseUrl: 'https://cdn.avatar.coolcats.com/trait/cat/$traitType/',
    view: 'FULL',
    type: 'CAT',
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
      options: accessoryTraits
    },
    sidekick: {
      control: 'select',
      options: sidekicks
    },
    effect: {
      control: 'select',
      options: stickerTraits
    },
    background: {
      control: 'select',
      options: backgroundTraits
    },
    skin: {
      control: 'select',
      options: skinTraits
    },
    baseUrl: {
      control: 'select',
      options: ['https://cdn.avatar.coolcats.com/trait/cat/$traitType/', 'https://cdn.avatar.coolcats.com/trait/cat2000x2000/$traitType/']
    }
  }
};

export function generateCatTraits(args: any) {
  const { pants, background, shirt, face, hat, skin, sidekick, shoes, effect, accessory } = args as any;
  return [].concat(
    background ? [{
      type: Avatar.CAT,
      view: AvatarView.FULL,
      traitType: TraitType.BACKGROUND,
      name: background,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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
        type: Avatar.CAT,
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