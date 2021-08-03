"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[2842],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",excerpt:"Maintaining well-sized files can improve query performance significantly",author:"shivnarayan",category:"blog"},c=void 0,u={permalink:"/blog/2021/03/01/hudi-file-sizing",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-03-01-hudi-file-sizing.md",source:"@site/blog/2021-03-01-hudi-file-sizing.md",title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",description:"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.",date:"2021-03-01T00:00:00.000Z",formattedDate:"March 1, 2021",tags:[],readingTime:4.33,truncated:!0,prevItem:{title:"Employing correct configurations for Hudi's cleaner table service",permalink:"/blog/2021/06/10/employing-right-configurations-for-hudi-cleaner"},nextItem:{title:"Apache Hudi Key Generators",permalink:"/blog/2021/02/13/hudi-key-generators"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.\nOne such key feature that hudi provides is self-managing file sizing so that users don\u2019t need to worry about\nmanual table maintenance. Having a lot of small files will make it harder to achieve good query performance, due to query engines\nhaving to open/read/close files way too many times, to plan and execute queries. But for streaming data lake use-cases,\ninherently ingests are going to end up having smaller volume of writes, which might result in lot of small files if no special handling is done."))}f.isMDXComponent=!0}}]);