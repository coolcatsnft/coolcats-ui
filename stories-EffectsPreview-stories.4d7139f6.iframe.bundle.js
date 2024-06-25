"use strict";(self.webpackChunkcool_cats_ui=self.webpackChunkcool_cats_ui||[]).push([[506],{"./src/stories/EffectsPreview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlueCat:()=>BlueCat,SepiaEffect:()=>SepiaEffect,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AvatarCanvas__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/AvatarCanvas/index.tsx"),_Avatar_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Avatar/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"EffectsPreview",component:_AvatarCanvas__WEBPACK_IMPORTED_MODULE_0__.Z,args:{baseUrl:"/",width:400,height:400,view:"FULL",type:"NONE"}},BlueCatTraits=[{type:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.qE.NONE,view:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.IM.FULL,traitType:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.K3.BACKGROUND,name:"background",rarity:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.un.COMMON,images:[{uri:"preview.png"}],rules:[]}],BlackAndWhiteRules=[{type:"EFFECT",fn:"EFFECT_BLACK_AND_WHITE"}],BlueCatTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AvatarCanvas__WEBPACK_IMPORTED_MODULE_0__.Z,{...args,type:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.qE.NONE,traits:BlueCatTraits.concat([{type:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.qE.NONE,view:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.IM.FULL,traitType:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.K3.EFFECT,name:"black and white",rarity:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.un.COMMON,images:[{uri:"transparent.png"}],rules:BlackAndWhiteRules}])});BlueCatTemplate.displayName="BlueCatTemplate";const BlueCat=BlueCatTemplate.bind({}),SepiaRules=[{type:"EFFECT",fn:"EFFECT_SEPIA"}],SepiaTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AvatarCanvas__WEBPACK_IMPORTED_MODULE_0__.Z,{...args,type:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.qE.NONE,traits:BlueCatTraits.concat([{type:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.qE.NONE,view:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.IM.FULL,traitType:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.K3.EFFECT,name:"Sepia",rarity:_Avatar_types__WEBPACK_IMPORTED_MODULE_1__.un.COMMON,images:[{uri:"transparent.png"}],rules:SepiaRules}])});SepiaTemplate.displayName="SepiaTemplate";const SepiaEffect=SepiaTemplate.bind({});BlueCat.parameters={...BlueCat.parameters,docs:{...BlueCat.parameters?.docs,source:{originalSource:"args => {\n  return <AvatarCanvas {...args} type={Avatar.NONE} traits={BlueCatTraits.concat([{\n    type: Avatar.NONE,\n    view: AvatarView.FULL,\n    traitType: TraitType.EFFECT,\n    name: 'black and white',\n    rarity: TraitRarity.COMMON,\n    images: [{\n      uri: 'transparent.png'\n    }],\n    rules: BlackAndWhiteRules\n  }])} />;\n}",...BlueCat.parameters?.docs?.source}}},SepiaEffect.parameters={...SepiaEffect.parameters,docs:{...SepiaEffect.parameters?.docs,source:{originalSource:"args => {\n  return <AvatarCanvas {...args} type={Avatar.NONE} traits={BlueCatTraits.concat([{\n    type: Avatar.NONE,\n    view: AvatarView.FULL,\n    traitType: TraitType.EFFECT,\n    name: 'Sepia',\n    rarity: TraitRarity.COMMON,\n    images: [{\n      uri: 'transparent.png'\n    }],\n    rules: SepiaRules\n  }])} />;\n}",...SepiaEffect.parameters?.docs?.source}}};const __namedExportsOrder=["BlueCat","SepiaEffect"]}}]);