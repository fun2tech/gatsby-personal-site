(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1GPU":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n("q1tI"),o=n.n(r),i=n("soUV"),a=n("9u5D"),u=n("Cqiw"),c=n("T+OK"),l=n("s1X6"),d="1650380636";t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return o.a.createElement(i.a,{title:n},o.a.createElement(a.a,{title:"Blog",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),o.a.createElement(c.a,{normalVelocity:1e-4,containerOpacity:.3,addEventListeners:!1}),o.a.createElement(u.a,null,o.a.createElement("h1",null,"Blog"),o.a.createElement("h4",null,"Things I do and write about to be useful to others"),o.a.createElement("p",null,"Tags"),o.a.createElement(l.a,{posts:r})))}},"84bF":function(e,t,n){"use strict";n("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},Cqiw:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);function i(){var e=c(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return i=function(){return e},e}function a(){var e=c(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return a=function(){return e},e}function u(){var e=c(["\n    width: 1.45rem;\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return u=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var l=n("vOnD").e.div.withConfig({displayName:"Content__ContentContainer",componentId:"sc-1q50de9-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;position:absolute;height:100%;top:0;left:0;right:0;bottom:0;"," "," ",""],(function(e){return e.theme.media.lg(u())}),(function(e){return e.theme.media.md(a())}),(function(e){return e.theme.media.sm(i())}));t.a=function(e){var t=e.children;return o.a.createElement(l,null,t)}},"T+OK":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=(n("a1Th"),n("Btvt"),function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),Math.floor(Math.random()*e)+t}),u=function(){for(var e=[],t=0;t<a();t++)e.push("\n      radial-gradient(\n        circle at "+a(100)+"% "+a(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+a(100,60)+"%\n      )\n  ");return e.join(",")};t.a=function(e){var t,n,a=e.containerOpacity,c=void 0===a?1:a,l="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,d=1,s=[],m=!1,f={x:null,y:null},h=!0,v=[],g=-1,p=e.normalVelocity,w=void 0===p?5e-4:p,y={x:0,y:0,tx:0,ty:0,z:w},x=e.addEventListeners,b=void 0===x||x,E=function(e,t){if(h){if("number"==typeof f.x&&"number"==typeof f.y){var n=e-f.x,r=t-f.y;y.tx=y.tx-n/8*d*(m?1:-1),y.ty=y.ty-r/8*d*(m?1:-1)}f={x:e,y:t}}},L=function(e){d=window.devicePixelRatio||1,t=window.innerWidth*d,n=window.innerHeight*d,e.width=t,e.height=n,s.forEach((function(e){e.x=Math.random()*t,e.y=Math.random()*n}))},I=function(e){console.log("accelerates"),f={x:null,y:null},h=!e,y.z=e?.1:w},z=o.a.useRef(null),M=o.a.useState(null),k=M[0],C=M[1];o.a.useEffect((function(){var e=function(e){m=!0,E(e.clientX,e.clientY)},r=function(e){m=!0,E(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},o=function(){m=!1,f={x:null,y:null}},i=function(){m=!1,f={x:null,y:null}},a=function(){L(z.current)},u=function(e){I(e.deltaY<0)},c=function(e){!function(e){v=v.filter((function(t){return t.pointerId!==e.pointerId}))}(e),v.length<2&&(g=-1)};if(z.current){var h=z.current.getContext("2d");if(h){var p=z.current;b&&(p.addEventListener("pointerdown",(function(e){v.push(e)})),p.addEventListener("pointermove",(function(e){for(var t=0;t<v.length;t++)if(e.pointerId===v[t].pointerId){v[t]=e;break}if(2==v.length){var n=Math.abs(v[0].clientX-v[1].clientX);I(g>0&&n>g),g=n}})),p.addEventListener("pointerup",c),p.addEventListener("pointercancel",c),p.addEventListener("pointerout",c),p.addEventListener("pointerleave",c),window.addEventListener("wheel",u),window.addEventListener("resize",a),p.addEventListener("mousemove",e),p.addEventListener("touchmove",r),p.addEventListener("touchend",i),document.addEventListener("mouseleave",o)),C(h)}}if(k){var w=function(){y.tx*=.96,y.ty*=.96,y.x+=.8*(y.tx-y.x),y.y+=.8*(y.ty-y.y),s.forEach((function(e){e.x+=y.x*e.z+(e.x-t/2)*y.z*e.z,e.y+=y.y*e.z+(e.y-n/2)*y.z*e.z,e.z+=y.z,(e.x<-50||e.x>t+50||e.y<-50||e.y>n+50)&&function(e){var r="z",o=Math.abs(y.x),i=Math.abs(y.y);(o>1||i>1)&&(r="h"===(o>i?Math.random()<o/(o+i)?"h":"v":Math.random()<i/(o+i)?"v":"h")?y.x>0?"l":"r":y.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*t,e.y=Math.random()*n,e.z=.1):"l"===r?(e.x=-50,e.y=n*Math.random()):"r"===r?(e.x=t+50,e.y=n*Math.random()):"t"===r?(e.x=t*Math.random(),e.y=-50):"b"===r&&(e.x=t*Math.random(),e.y=n+50)}(e)}))};!function(){for(var e=0;e<l;e++)s.push({x:0,y:0,z:.2+.8*Math.random()})}(),L(z.current),function e(){k.clearRect(0,0,t,n),w(),s.forEach((function(e){k.beginPath(),k.lineCap="round",k.lineWidth=3*e.z*d,k.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",k.beginPath(),k.moveTo(e.x,e.y);var t=2*y.x,n=2*y.y;Math.abs(t)<.1&&(t=.5),Math.abs(n)<.1&&(n=.5),k.lineTo(e.x+t,e.y+n),k.stroke()})),requestAnimationFrame(e)}()}return function(){if(s.length=0,z.current){var t=z.current;t.removeEventListener("mousemove",e),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",i),window.removeEventListener("wheel",u),window.removeEventListener("resize",a),document.removeEventListener("mouseleave",o)}}}),[k]);var _=Object(r.useContext)(i.a);return o.a.createElement("canvas",{id:"canvas",ref:z,style:{backgroundColor:_.colors.black,backgroundImage:u(),opacity:c,position:"fixed",width:"100%",height:"100%"}})}},s1X6:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=(n("Vd3H"),n("84bF"),n("SMB2"),n("Wbzz"));function u(){var e=d(["\n    max-width: 100%;\n  "]);return u=function(){return e},e}function c(){var e=d(["\n    max-width: 100%;\n  "]);return c=function(){return e},e}function l(){var e=d(["\n     flex-direction:  column-reverse;\n  "]);return l=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),e.raw=t,e}var s=i.e.article.withConfig({displayName:"PostsListItem__ItemContainer",componentId:"hqhtfb-0"})(["transition:0.2s ease;padding:1rem;border-radius:5px;display:flex;flex-wrap:wrap;justify-content:space-between;position:relative;"," &:hover{background-color:",";}"],(function(e){return e.theme.media.md(l())}),(function(e){return e.theme.colors.light+"40"})),m=i.e.div.withConfig({displayName:"PostsListItem__ItemHeader",componentId:"hqhtfb-1"})(["max-width:70%;",""],(function(e){return e.theme.media.md(c())})),f=i.e.h3.withConfig({displayName:"PostsListItem__ItemTitle",componentId:"hqhtfb-2"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.lightest}),(function(e){return e.theme.fontSizes.medium}),(function(e){return e.theme.fontWeights.bold})),h=i.e.div.withConfig({displayName:"PostsListItem__ItemTags",componentId:"hqhtfb-3"})(["padding:0.4rem 0;display:flex;flex-wrap:wrap;margin-left:-0.3rem;"]),v=Object(i.e)(a.Link).withConfig({displayName:"PostsListItem__Tag",componentId:"hqhtfb-4"})(["padding:0.4rem 0.6rem;color:",";background-color:",";font-weight:",";font-size:",";border-radius:3rem;margin:0.2rem;text-decoration:none;border-bottom:0;white-space:nowrap;line-height:1;transition:0.2s ease;&:hover{color:",";background-color:",";}"],(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.light+"40"}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.colors.darkest}),(function(e){return e.theme.colors.light})),g=i.e.div.withConfig({displayName:"PostsListItem__ItemDate",componentId:"hqhtfb-5"})(["max-width:30%;padding-bottom:0.4rem;color:",";font-size:",";font-weight:",";",""],(function(e){return e.theme.colors.mediumLight}),(function(e){return e.theme.fontSizes.normal}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.media.md(u())})),p=function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,r=t.frontmatter.tags;return o.a.createElement(a.Link,{to:t.fields.slug},o.a.createElement(s,{hasLink:null!==t.fields.slug},o.a.createElement(m,null,o.a.createElement(f,null,n),o.a.createElement(h,null,r&&r.sort().map((function(e){return o.a.createElement(v,{to:"/tags/"+e+"/",key:e},e)})))),o.a.createElement(g,null,t.frontmatter.date)))},w=i.e.section.withConfig({displayName:"PostsList__PostsListContainer",componentId:"sc-1fsbild-0"})(["margin:1.5rem auto 0;"]),y=function(e){var t=e.posts;return o.a.createElement(w,null,t.map((function(e){var t=e.node;return o.a.createElement(p,{key:t.fields.slug,node:t})})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-d2bdccbcc6a7b6162b7f.js.map