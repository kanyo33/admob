"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[296],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6637:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],c={id:"isTestDevice",title:"isTestDevice",sidebar_label:"isTestDevice"},s=void 0,u={unversionedId:"api/isTestDevice",id:"api/isTestDevice",isDocsHomePage:!1,title:"isTestDevice",description:"Use this function to check if the current device is registered as a test device to show test ads.",source:"@site/docs/api/isTestDevice.md",sourceDirName:"api",slug:"/api/isTestDevice",permalink:"/admob/docs/api/isTestDevice",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/api/isTestDevice.md",version:"current",frontMatter:{id:"isTestDevice",title:"isTestDevice",sidebar_label:"isTestDevice"},sidebar:"sideBar",previous:{title:"setRequestConfiguration",permalink:"/admob/docs/api/setRequestConfiguration"},next:{title:"BannerAd",permalink:"/admob/docs/components/BannerAd"}},l=[{value:"Usage Example",id:"usage-example",children:[]},{value:"Returns",id:"returns",children:[]}],p={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this function to check if the current device is registered as a test device to show test ads."),(0,o.kt)("h2",{id:"usage-example"},"Usage Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import AdMob from '@react-native-admob/admob';\n\nAdMob.isTestDevice().then((result) => console.log(result));\n")),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"The function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")," which is Promise of ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," weather current device is a test device."))}d.isMDXComponent=!0}}]);