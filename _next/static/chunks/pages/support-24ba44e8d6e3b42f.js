(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{4080:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/support",function(){return r(1101)}])},1101:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return support}});var n=r(5893),o=r(9952),s=r(3492),i=r(1761),a=r(3546),c=r(7294),l=r(6663),d=r(4632),u=r(6054),p=r(4633),m=r(7321),h=r(9583),b=r(8193),y=r(1664),x=r.n(y),components_SupportCard=t=>{let{icon:e,title:r,link:s,mobileLayout:a}=t,c=(0,l.Z)();return(0,n.jsx)(i.Z,{xs:a?15:8,style:{width:"60%"},children:(0,n.jsxs)(d.Z,{style:{background:c.palette.background},hoverable:!0,paddingTop:"40px",paddingBottom:"9px",width:"95%",children:[(()=>{switch(e){case"Twitter":return(0,n.jsx)(h.fWC,{display:"block",size:150,style:{margin:"auto"}});case"GitHub":return(0,n.jsx)(b.RrF,{display:"block",size:150,style:{margin:"auto"}});case"YouTube":return(0,n.jsx)(b.b1v,{display:"block",size:150,style:{margin:"auto"}});case"Discord":return(0,n.jsx)(h.j2d,{display:"block",size:150,style:{margin:"auto"}});case"Reddit":return(0,n.jsx)(h.hrS,{display:"block",size:150,style:{margin:"auto"}});case"Instagram":return(0,n.jsx)(h.Zf_,{display:"block",size:150,style:{margin:"auto"}})}})(),(0,n.jsx)(o.Z,{}),(0,n.jsx)(u.Z,{children:(0,n.jsx)(m.t,{children:r})}),(0,n.jsx)(o.Z,{}),(0,n.jsx)(x(),{href:s,target:"_blank",rel:"noreferrer",children:(0,n.jsxs)(p.Z,{type:"success",width:.7,shadow:!0,margin:"9px",children:[(0,n.jsx)(m.t,{children:"Visit"}),a]})}),(0,n.jsx)(o.Z,{h:3})]})})},g=r(5379),f=r.n(g),j=r(7462),_=r(91),w=r(7089),v=r(2189),Z=r(1236),k=r(314),C=r(5073),N=["disabled","type","ghost","vertical","children","className"],getGroupBorderColors=function(t,e){var r=e.ghost,n=e.type;if(!r&&"default"!==n)return t.background;var o={default:t.border,success:t.success,secondary:t.secondary,error:t.error,warning:t.warning};return o[n.replace("-light","")]||o.default},ButtonGroupComponent=function(t){var e=(0,l.Z)(),r=(0,Z.ZP)().SCALES,n=t.disabled,o=t.type,s=t.ghost,i=t.vertical,a=t.children,d=t.className,u=(0,_.Z)(t,N),p=(0,c.useMemo)(function(){return{disabled:n,type:o,ghost:s,isButtonGroup:!0}},[n,o]),m=(0,c.useMemo)(function(){return getGroupBorderColors(e.palette,t)},[e,o,n,s]),h=(0,C.Z)("btn-group",{vertical:i,horizontal:!i},d);return c.createElement(v.u.Provider,{value:p},c.createElement("div",(0,j.Z)({},u,{className:w.Z.dynamic([["3616385743",[e.layout.radius,m,r.width(1,"auto"),r.height(1,"min-content"),r.mt(.313),r.mr(.313),r.mb(.313),r.ml(.313),r.pt(0),r.pr(0),r.pb(0),r.pl(0),m,m]]])+" "+(u&&null!=u.className&&u.className||h||"")}),a,c.createElement(w.Z,{id:"3616385743",dynamic:[e.layout.radius,m,r.width(1,"auto"),r.height(1,"min-content"),r.mt(.313),r.mr(.313),r.mb(.313),r.ml(.313),r.pt(0),r.pr(0),r.pb(0),r.pl(0),m,m]},".btn-group.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;border-radius:".concat(e.layout.radius,";border:1px solid ").concat(m,";background-color:transparent;overflow:hidden;width:").concat(r.width(1,"auto"),";height:").concat(r.height(1,"min-content"),";margin:").concat(r.mt(.313)," ").concat(r.mr(.313)," ").concat(r.mb(.313)," ").concat(r.ml(.313),";padding:").concat(r.pt(0)," ").concat(r.pr(0)," ").concat(r.pb(0)," ").concat(r.pl(0),";}.vertical.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn-group.__jsx-style-dynamic-selector .btn{border:none;}.btn-group.__jsx-style-dynamic-selector .btn .text{top:0;}.horizontal.__jsx-style-dynamic-selector .btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;border-left:1px solid ").concat(m,";}.horizontal.__jsx-style-dynamic-selector .btn:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}.vertical.__jsx-style-dynamic-selector .btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-top:1px solid ").concat(m,";}.vertical.__jsx-style-dynamic-selector .btn:not(:last-child){border-bottom-left-radius:0;border-bottom-right-radius:0;}"))))};ButtonGroupComponent.defaultProps={disabled:!1,vertical:!1,ghost:!1,type:"default",className:""},ButtonGroupComponent.displayName="GeistButtonGroup";var O=(0,k.Z)(ButtonGroupComponent),BetaPopup=t=>{let{href:e}=t,r=(0,c.useRef)(null),o=(0,l.Z)();return(0,a.Z)(t=>{t<500&&r.current&&(r.current.style.display="none")}),(0,n.jsxs)("div",{id:"beta-container",ref:r,className:f().dynamic([["328d4d33d10c9dd3",[o.palette.accents_3]]]),children:[(0,n.jsxs)(d.Z,{className:"beta-popup",children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(m.t,{children:"Hey look! A new testing version of this page is available!"})}),(0,n.jsxs)(O,{style:{width:"100%"},children:[(0,n.jsx)(p.Z,{shadow:!0,onClick:()=>{r.current&&(r.current.style.display="none")},children:(0,n.jsx)(m.t,{children:"Close"})}),(0,n.jsx)(x(),{href:e,legacyBehavior:!0,children:(0,n.jsx)(p.Z,{shadow:!0,children:(0,n.jsx)(m.t,{children:"Check it out"})})})]})]}),(0,n.jsx)(f(),{id:"328d4d33d10c9dd3",dynamic:[o.palette.accents_3],children:"#beta-container.__jsx-style-dynamic-selector{position:fixed;left:20px;bottom:10px;width:270px;z-index:6}.beta-popup.__jsx-style-dynamic-selector{padding:10px;background:".concat(o.palette.accents_3,"}")})]})},support=()=>{let[t,e]=(0,c.useState)(!1);return(0,a.Z)(t=>{t<950?e(!0):e(!1)}),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"text-center",id:"overview",children:[(0,n.jsx)(o.Z,{h:3}),(0,n.jsx)(s.Z,{className:"header",h1:!0,children:(0,n.jsx)(m.t,{children:"AvdanOS Support"})}),(0,n.jsx)(s.Z,{h4:!0,children:(0,n.jsx)(m.t,{children:"Contact Us On Social Media"})}),(0,n.jsx)(o.Z,{h:2}),(0,n.jsxs)(i.Z.Container,{gap:3,marginLeft:"calc(0.5% - 10px)",direction:t?"column":"row",alignItems:"center",justify:"center",children:[(0,n.jsx)(components_SupportCard,{icon:"Twitter",title:"Twitter",link:"https://twitter.com/avdan_os",mobileLayout:t}),(0,n.jsx)(components_SupportCard,{icon:"GitHub",title:"GitHub",link:"https://github.com/Avdan-OS",mobileLayout:t}),(0,n.jsx)(components_SupportCard,{icon:"YouTube",title:"YouTube",link:"https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA",mobileLayout:t}),(0,n.jsx)(components_SupportCard,{icon:"Discord",title:"Discord",link:"https://avdanos.org/discord",mobileLayout:t}),(0,n.jsx)(components_SupportCard,{icon:"Reddit",title:"Reddit",link:"https://www.reddit.com/r/AvdanOS/",mobileLayout:t}),(0,n.jsx)(components_SupportCard,{icon:"Instagram",title:"Instagram",link:"https://instagram.com/avdanos_",mobileLayout:t})]}),(0,n.jsx)(o.Z,{h:5}),(0,n.jsx)(s.Z,{h4:!0,children:(0,n.jsxs)(m.t,{children:["Want to suggest anything to us? We always want to listen to the community. Present your ideas"," ",(0,n.jsx)(x(),{href:"https://github.com/Avdan-OS/suggestions",children:"here"}),"."]})}),(0,n.jsx)(o.Z,{h:5}),(0,n.jsx)(BetaPopup,{href:"/support-beta"})]})})}},8357:function(t,e,r){"use strict";r.d(e,{w_:function(){return GenIcon}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(o),__assign=function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__rest=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)0>e.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r};function GenIcon(t){return function(e){return n.createElement(IconBase,__assign({attr:__assign({},t.attr)},e),function Tree2Element(t){return t&&t.map(function(t,e){return n.createElement(t.tag,__assign({key:e},t.attr),Tree2Element(t.child))})}(t.child))}}function IconBase(t){var elem=function(e){var r,o=t.attr,s=t.size,i=t.title,a=__rest(t,["attr","size","title"]),c=s||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,a,{className:r,style:__assign(__assign({color:t.color||e.color},e.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),t.children)};return void 0!==s?n.createElement(s.Consumer,null,function(t){return elem(t)}):elem(o)}}},function(t){t.O(0,[445,617,774,888,179],function(){return t(t.s=4080)}),_N_E=t.O()}]);