"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[644],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5718:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],d={id:"RewardedInterstitialAd",title:"RewardedInterstitialAd",sidebar_label:"RewardedInterstitialAd"},o=void 0,s={unversionedId:"api/RewardedInterstitialAd",id:"api/RewardedInterstitialAd",isDocsHomePage:!1,title:"RewardedInterstitialAd",description:"Creates Rewarded Interstitial Ad and register event listeners to various events.",source:"@site/docs/api/RewardedInterstitialAd.md",sourceDirName:"api",slug:"/api/RewardedInterstitialAd",permalink:"/admob/docs/api/RewardedInterstitialAd",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/api/RewardedInterstitialAd.md",version:"current",frontMatter:{id:"RewardedInterstitialAd",title:"RewardedInterstitialAd",sidebar_label:"RewardedInterstitialAd"},sidebar:"sideBar",previous:{title:"RewardedAd",permalink:"/admob/docs/api/RewardedAd"},next:{title:"RequestOptions",permalink:"/admob/docs/api/RequestOptions"}},p=[{value:"Useage Example",id:"useage-example",children:[]},{value:"Methods",id:"methods",children:[{value:"createAd()",id:"createad",children:[]},{value:"load()",id:"load",children:[]},{value:"show()",id:"show",children:[]},{value:"addEventListener()",id:"addeventlistener",children:[]},{value:"removeAllListeners()",id:"removealllisteners",children:[]},{value:"setRequestOptions()",id:"setrequestoptions",children:[]}]}],m={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creates ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/android/rewarded-interstitial"},"Rewarded Interstitial Ad")," and register event listeners to various events."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are going to use Rewarded Interstitial Ad inside ",(0,i.kt)("em",{parentName:"p"},"functional component"),", consider using ",(0,i.kt)("a",{parentName:"p",href:"useRewardedInterstitialAd"},(0,i.kt)("inlineCode",{parentName:"a"},"useRewardedInterstitialAd")),"."))),(0,i.kt)("h2",{id:"useage-example"},"Useage Example"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Methods listed below except ",(0,i.kt)("a",{parentName:"p",href:"#createad"},(0,i.kt)("inlineCode",{parentName:"a"},"createAd()"))," must be called from instance created by ",(0,i.kt)("a",{parentName:"p",href:"#createad"},(0,i.kt)("inlineCode",{parentName:"a"},"createAd()"))," static method."))),(0,i.kt)("h3",{id:"createad"},"createAd()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"static createAd(unitId: string, options?: FullScreenAdOptions): RewardedInterstitialAd\n")),(0,i.kt)("p",null,"Creates an ad instance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"unitId")," : Rewarded Interstitial Ad ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/7356431"},"unitId"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"options")," (Optional) : Options for this ad. "),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loadOnMounted"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to load automatically on mounted.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"showOnLoaded"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to show automatically on loaded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loadOnDismissed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to load new ad automatically on dismissed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"requestOptions"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"RequestOptions"},"RequestOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional RequestOptions used to load the ad.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RewardedInterstitialAd")," instance"),(0,i.kt)("h3",{id:"load"},"load()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"load(requestOptions?: RequestOptions): Promise<void>\n")),(0,i.kt)("p",null,"Loads new Rewarded Interstitial Ad."),(0,i.kt)("p",null,"Can not call this function if the ad is already loaded but not presented and dismissed. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"requestOptions")," (Optional) : ",(0,i.kt)("a",{parentName:"p",href:"RequestOptions"},"RequestOptions")," used to load the ad. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that waits for ad load. When error is occurred while loading ad, the Promise will reject with ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," object."),(0,i.kt)("h3",{id:"show"},"show()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"show(): Promise<void>\n")),(0,i.kt)("p",null,"Shows loaded Interstitial Ad. "),(0,i.kt)("p",null,"Ad must be loaded before calling this function. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that waits for ad present. When error is occurred while presenting ad, the Promise will reject with ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," object."),(0,i.kt)("h3",{id:"addeventlistener"},"addEventListener()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"addEventListener(event: string, handler: (event?: any) => any): void\n")),(0,i.kt)("p",null,"Adds an event handler for an ad event."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"event")," : Event name. Supported events:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adLoaded"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad has finished loading.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adFailedToLoad"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad has failed to load. The argument to the event handler is ",(0,i.kt)("inlineCode",{parentName:"td"},"Error")," object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adPresented"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad is presented to user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adFailedToPresent"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when an error occurred while presenting ad. The argument to the event handler is ",(0,i.kt)("inlineCode",{parentName:"td"},"Error")," object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adDismissed"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad is dismissed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rewarded"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when user earned reward. The argument to the event handler is Reward object.")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"handler")," : An event handler."),(0,i.kt)("h3",{id:"removealllisteners"},"removeAllListeners()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"removeAllListeners(): void\n")),(0,i.kt)("p",null,"Removes all registered event handlers for this ad."),(0,i.kt)("h3",{id:"setrequestoptions"},"setRequestOptions()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"setRequestOptions(requestOptions?: RequestOptions): void\n")),(0,i.kt)("p",null,"Sets RequestOptions for this Ad instance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"requestOptions")," : ",(0,i.kt)("a",{parentName:"p",href:"RequestOptions"},"RequestOptions")," used to load the ad."))}u.isMDXComponent=!0}}]);