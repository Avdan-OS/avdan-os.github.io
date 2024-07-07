"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{3367:function(e,t,n){n.d(t,{Z:function(){return Z}});var o=n(7462),r=n(6854),a=n(91),c=n(7089),i=n(7294),l=i.createContext({disabledAll:!1,inGroup:!1,values:[]}),s=n(3937),d=function(e){var t=e.fill,n=e.bg,o=e.disabled,r=e.checked,a=(0,s.Z)(),l=(0,i.useMemo)(function(){return{propsFill:t,propsBg:n}},[a.palette]),d=l.propsFill,u=l.propsBg;return i.createElement(i.Fragment,null,r?i.createElement("svg",{viewBox:"0 0 17 16",fill:"none",className:c.Z.dynamic([["996181129",[o?.4:1,o?"not-allowed":"pointer"]]])},i.createElement("path",{d:"M12.1429 0H3.85714C1.7269 0 0 1.79086 0 4V12C0 14.2091 1.7269 16 3.85714 16H12.1429C14.2731 16 16 14.2091 16 12V4C16 1.79086 14.2731 0 12.1429 0Z",fill:d,className:c.Z.dynamic([["996181129",[o?.4:1,o?"not-allowed":"pointer"]]])}),i.createElement("path",{d:"M16 3L7.72491 11L5 8",stroke:u,strokeWidth:"1.5",className:c.Z.dynamic([["996181129",[o?.4:1,o?"not-allowed":"pointer"]]])})):i.createElement("svg",{viewBox:"0 0 12 12",fill:"none",className:c.Z.dynamic([["996181129",[o?.4:1,o?"not-allowed":"pointer"]]])},i.createElement("path",{d:"M8.5 0.5H3.5C1.84315 0.5 0.5 1.84315 0.5 3.5V8.5C0.5 10.1569 1.84315 11.5 3.5 11.5H8.5C10.1569 11.5 11.5 10.1569 11.5 8.5V3.5C11.5 1.84315 10.1569 0.5 8.5 0.5Z",stroke:a.palette.accents_5,className:c.Z.dynamic([["996181129",[o?.4:1,o?"not-allowed":"pointer"]]])})),i.createElement(c.Z,{id:"996181129",dynamic:[o?.4:1,o?"not-allowed":"pointer"]},"svg.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(0.86 * var(--checkbox-size));height:calc(0.86 * var(--checkbox-size));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:".concat(o?.4:1,";cursor:").concat(o?"not-allowed":"pointer",";}")))};d.displayName="GeistCheckboxIcon";var u=i.memo(d),p=n(2466),m=function(e,t){var n={default:{fill:e.foreground,bg:e.background},secondary:{fill:e.foreground,bg:e.background},success:{fill:e.success,bg:e.background},warning:{fill:e.warning,bg:e.background},error:{fill:e.error,bg:e.background}};return t?n[t]:n.default},b=n(1236),f=n(314),g=n(5073),h=["checked","initialChecked","disabled","onChange","className","children","type","value"],y=function(e){var t=e.checked,n=e.initialChecked,d=e.disabled,f=e.onChange,y=e.className,v=e.children,x=e.type,k=e.value,w=(0,a.Z)(e,h),C=(0,s.Z)(),Z=(0,b.ZP)().SCALES,E=(0,i.useState)(n),N=(0,r.Z)(E,2),_=N[0],z=N[1],j=i.useContext(l),T=j.updateState,S=j.inGroup,P=j.disabledAll,A=j.values,G=S&&P||d,M=(0,g.Z)("checkbox",y);S&&t&&(0,p.Z)('Remove props "checked" when [Checkbox] component is in the group.',"Checkbox"),S&&(0,i.useEffect)(function(){var e=A.includes(k);e!==_&&z(e)},[A.join(",")]);var L=(0,i.useMemo)(function(){return m(C.palette,x)},[C.palette,x]),B=L.fill,I=L.bg,R=(0,i.useCallback)(function(e){if(!G){var t={target:{checked:!_},stopPropagation:e.stopPropagation,preventDefault:e.preventDefault,nativeEvent:e};S&&T&&T&&T(k,!_),z(!_),f&&f(t)}},[T,f,G,_]);return(0,i.useEffect)(function(){void 0!==t&&z(t)},[t]),i.createElement("label",{className:c.Z.dynamic([["4126727675",[Z.font(.875),G?"not-allowed":"pointer",G?.75:1,Z.width(1,"auto"),Z.height(1,"var(--checkbox-size)"),Z.pt(0),Z.pr(0),Z.pb(0),Z.pl(0),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),G?"not-allowed":"pointer"]]])+" "+(M||"")},i.createElement(u,{fill:B,bg:I,disabled:G,checked:_}),i.createElement("input",(0,o.Z)({type:"checkbox",disabled:G,checked:_,onChange:R},w,{className:c.Z.dynamic([["4126727675",[Z.font(.875),G?"not-allowed":"pointer",G?.75:1,Z.width(1,"auto"),Z.height(1,"var(--checkbox-size)"),Z.pt(0),Z.pr(0),Z.pb(0),Z.pl(0),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),G?"not-allowed":"pointer"]]])+" "+(w&&null!=w.className&&w.className||"")})),i.createElement("span",{className:c.Z.dynamic([["4126727675",[Z.font(.875),G?"not-allowed":"pointer",G?.75:1,Z.width(1,"auto"),Z.height(1,"var(--checkbox-size)"),Z.pt(0),Z.pr(0),Z.pb(0),Z.pl(0),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),G?"not-allowed":"pointer"]]])+" text"},v),i.createElement(c.Z,{id:"4126727675",dynamic:[Z.font(.875),G?"not-allowed":"pointer",G?.75:1,Z.width(1,"auto"),Z.height(1,"var(--checkbox-size)"),Z.pt(0),Z.pr(0),Z.pb(0),Z.pl(0),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),G?"not-allowed":"pointer"]},".checkbox.__jsx-style-dynamic-selector{--checkbox-size:".concat(Z.font(.875),";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:").concat(G?"not-allowed":"pointer",";opacity:").concat(G?.75:1,";line-height:var(--checkbox-size);width:").concat(Z.width(1,"auto"),";height:").concat(Z.height(1,"var(--checkbox-size)"),";padding:").concat(Z.pt(0)," ").concat(Z.pr(0)," ").concat(Z.pb(0)," ").concat(Z.pl(0),";margin:").concat(Z.mt(0)," ").concat(Z.mr(0)," ").concat(Z.mb(0)," ").concat(Z.ml(0),";}.text.__jsx-style-dynamic-selector{font-size:var(--checkbox-size);line-height:var(--checkbox-size);padding-left:calc(var(--checkbox-size) * 0.5);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:").concat(G?"not-allowed":"pointer",";}input.__jsx-style-dynamic-selector{opacity:0;outline:none;position:absolute;width:0;height:0;margin:0;padding:0;z-index:-1;font-size:0;background-color:transparent;}")))};y.defaultProps={disabled:!1,type:"default",initialChecked:!1,className:"",value:""},y.displayName="GeistCheckbox";var v=(0,f.Z)(y),x=n(1451),k=["disabled","onChange","value","children","className"],w=function(e){var t=e.disabled,n=e.onChange,s=e.value,d=e.children,u=e.className,m=(0,a.Z)(e,k),f=(0,b.ZP)().SCALES,h=(0,i.useState)([]),y=(0,r.Z)(h,2),v=y[0],w=y[1],C=(0,g.Z)("group",u);s||(s=[],(0,p.Z)('Props "value" is required.',"Checkbox Group"));var Z=function(e,t){var o=v.filter(function(t){return t!==e}),r=t?[].concat((0,x.Z)(o),[e]):o;w(r),n&&n(r)},E=(0,i.useMemo)(function(){return{updateState:Z,disabledAll:t,inGroup:!0,values:v}},[t,v]);return(0,i.useEffect)(function(){w(s)},[s.join(",")]),i.createElement(l.Provider,{value:E},i.createElement("div",(0,o.Z)({},m,{className:c.Z.dynamic([["1727163828",[f.width(1,"auto"),f.height(1,"auto"),f.pt(0),f.pr(0),f.pb(0),f.pl(0),f.mt(0),f.mr(0),f.mb(0),f.ml(0),f.font(1),f.font(1)]]])+" "+(m&&null!=m.className&&m.className||C||"")}),d,i.createElement(c.Z,{id:"1727163828",dynamic:[f.width(1,"auto"),f.height(1,"auto"),f.pt(0),f.pr(0),f.pb(0),f.pl(0),f.mt(0),f.mr(0),f.mb(0),f.ml(0),f.font(1),f.font(1)]},".group.__jsx-style-dynamic-selector{width:".concat(f.width(1,"auto"),";height:").concat(f.height(1,"auto"),";padding:").concat(f.pt(0)," ").concat(f.pr(0)," ").concat(f.pb(0)," ").concat(f.pl(0),";margin:").concat(f.mt(0)," ").concat(f.mr(0)," ").concat(f.mb(0)," ").concat(f.ml(0),";}.group.__jsx-style-dynamic-selector label{margin-right:calc(").concat(f.font(1)," * 2);--checkbox-size:").concat(f.font(1),";}.group.__jsx-style-dynamic-selector label:last-of-type{margin-right:0;}"))))};w.defaultProps={disabled:!1,className:""},w.displayName="GeistCheckboxGroup";var C=(0,f.Z)(w);v.Group=C;var Z=v},8323:function(e,t,n){n.d(t,{Z:function(){return k}});var o=n(7462),r=n(91),a=n(7089),c=n(7294),i=n(3937),l=function(e,t,n){var r={default:{color:t.foreground,border:t.border,bgColor:t.background},success:{color:t.success,border:t.success,bgColor:t.background},warning:{color:t.warning,border:t.warning,bgColor:t.background},error:{color:t.error,border:t.error,bgColor:t.background},secondary:{color:t.secondary,border:t.secondary,bgColor:t.background},lite:{color:t.foreground,border:t.border,bgColor:t.accents_1},dark:{color:t.background,border:t.foreground,bgColor:t.foreground}}[e],a=["success","warning","error","secondary"].includes(e);return n&&a?(0,o.Z)({},r,{color:r.bgColor,bgColor:r.color}):r},s=function(){return c.createElement("svg",{viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",style:{color:"currentcolor"},className:"jsx-418323402"},c.createElement("path",{d:"M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z",className:"jsx-418323402"}),c.createElement(a.Z,{id:"418323402"},"svg.jsx-418323402{width:calc(var(--snippet-font-size) * 1.69);height:calc(var(--snippet-font-size) * 1.69);}"))};s.displayName="GeistSnippetIcon";var d=c.memo(s),u=n(9950),p=n(2466),m={onError:function(){return(0,p.Z)("Failed to copy.","use-clipboard")}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=(0,u.Z)("clipboard"),n=function(t,n){if(t&&n){var o=window.getSelection();if(o){t.style.whiteSpace="pre",t.textContent=n;var r=window.document.createRange();o.removeAllRanges(),r.selectNode(t),o.addRange(r);try{window.document.execCommand("copy")}catch(t){e.onError&&e.onError()}o.removeAllRanges(),t&&(t.textContent="")}}};return{copy:(0,c.useCallback)(function(e){n(t,e)},[t])}},f=n(7822),g=n(1236),h=n(314),y=n(5073),v=["type","filled","children","symbol","toastText","toastType","text","copy","className"],x=function(e){var t=e.type,n=e.filled,s=e.children,u=e.symbol,p=e.toastText,m=e.toastType,h=e.text,x=e.copy,k=e.className,w=(0,r.Z)(e,v),C=(0,i.Z)(),Z=(0,g.ZP)().SCALES,E=b().copy,N=(0,f.Z)().setToast,_=(0,c.useRef)(null),z=h&&Array.isArray(h),j=(0,c.useMemo)(function(){return l(t,C.palette,n)},[t,C.palette,n]),T=(0,c.useMemo)(function(){return"prevent"!==x},[x]),S=(0,c.useMemo)(function(){return z?h.reduce(function(e,t){return t?e?"".concat(e,"\n").concat(t):t:e},""):s?_.current?_.current.textContent:"":h},[_.current,s,h]),P=(0,c.useMemo)(function(){var e=u.trim();return e?"".concat(e," "):""},[u]);return c.createElement("div",(0,o.Z)({},w,{className:a.Z.dynamic([["2394272060",[j.color,j.bgColor,j.border,C.layout.radius,Z.font(.8125),Z.pt(.667),Z.width(1,"initial"),Z.height(1,"auto"),Z.pt(.667),Z.pr(2.667),Z.pb(.667),Z.pl(.667),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),j.color,P,j.bgColor,z?"flex-start":"center",C.layout.radius,z?"var(--snippet-padding-top)":0]]])+" "+(w&&null!=w.className&&w.className||(0,y.Z)("snippet",k)||"")}),z?h.map(function(e,t){return c.createElement("pre",{key:"snippet-".concat(t,"-").concat(e),className:a.Z.dynamic([["2394272060",[j.color,j.bgColor,j.border,C.layout.radius,Z.font(.8125),Z.pt(.667),Z.width(1,"initial"),Z.height(1,"auto"),Z.pt(.667),Z.pr(2.667),Z.pb(.667),Z.pl(.667),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),j.color,P,j.bgColor,z?"flex-start":"center",C.layout.radius,z?"var(--snippet-padding-top)":0]]])},e)}):c.createElement("pre",{ref:_,className:a.Z.dynamic([["2394272060",[j.color,j.bgColor,j.border,C.layout.radius,Z.font(.8125),Z.pt(.667),Z.width(1,"initial"),Z.height(1,"auto"),Z.pt(.667),Z.pr(2.667),Z.pb(.667),Z.pl(.667),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),j.color,P,j.bgColor,z?"flex-start":"center",C.layout.radius,z?"var(--snippet-padding-top)":0]]])},s||h),T&&c.createElement("div",{onClick:function(){S&&T&&(E(S),"silent"!==x&&N({text:p,type:m}))},className:a.Z.dynamic([["2394272060",[j.color,j.bgColor,j.border,C.layout.radius,Z.font(.8125),Z.pt(.667),Z.width(1,"initial"),Z.height(1,"auto"),Z.pt(.667),Z.pr(2.667),Z.pb(.667),Z.pl(.667),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),j.color,P,j.bgColor,z?"flex-start":"center",C.layout.radius,z?"var(--snippet-padding-top)":0]]])+" copy"},c.createElement(d,null)),c.createElement(a.Z,{id:"2394272060",dynamic:[j.color,j.bgColor,j.border,C.layout.radius,Z.font(.8125),Z.pt(.667),Z.width(1,"initial"),Z.height(1,"auto"),Z.pt(.667),Z.pr(2.667),Z.pb(.667),Z.pl(.667),Z.mt(0),Z.mr(0),Z.mb(0),Z.ml(0),j.color,P,j.bgColor,z?"flex-start":"center",C.layout.radius,z?"var(--snippet-padding-top)":0]},".snippet.__jsx-style-dynamic-selector{position:relative;max-width:100%;color:".concat(j.color,";background-color:").concat(j.bgColor,";border:1px solid ").concat(j.border,";border-radius:").concat(C.layout.radius,";--snippet-font-size:").concat(Z.font(.8125),";--snippet-padding-top:").concat(Z.pt(.667),";font-size:var(--snippet-font-size);width:").concat(Z.width(1,"initial"),";height:").concat(Z.height(1,"auto"),";padding:").concat(Z.pt(.667)," ").concat(Z.pr(2.667)," ").concat(Z.pb(.667)," ").concat(Z.pl(.667),";margin:").concat(Z.mt(0)," ").concat(Z.mr(0)," ").concat(Z.mb(0)," ").concat(Z.ml(0),";}pre.__jsx-style-dynamic-selector{margin:0;padding:0;border:none;background-color:transparent;color:").concat(j.color,";font-size:inherit;}pre.__jsx-style-dynamic-selector::before{content:'").concat(P,"';-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}pre.__jsx-style-dynamic-selector *{margin:0;padding:0;font-size:inherit;color:inherit;}.copy.__jsx-style-dynamic-selector{position:absolute;right:0;top:0;bottom:0;height:calc(100% - 2px);background-color:").concat(j.bgColor,";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:").concat(z?"flex-start":"center",";-webkit-box-align:").concat(z?"flex-start":"center",";-ms-flex-align:").concat(z?"flex-start":"center",";align-items:").concat(z?"flex-start":"center",";width:calc(3.281 * var(--snippet-font-size));color:inherit;-webkit-transition:opacity 150ms ease 0s;transition:opacity 150ms ease 0s;border-radius:").concat(C.layout.radius,";cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:").concat(z?"var(--snippet-padding-top)":0,";opacity:0.65;}.copy.__jsx-style-dynamic-selector:hover{opacity:1;}")))};x.defaultProps={filled:!1,symbol:"$",toastText:"Copied to clipboard!",toastType:"success",copy:"default",type:"default",className:""},x.displayName="GeistSnippet";var k=(0,h.Z)(x)},7822:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(1451),r=n(7462),a=n(7294),c=n(2047),i=n(6761),l={delay:2e3,type:"default"},s=function(e){var t=(0,c.kW)(),n=t.updateToasts,s=t.toasts,d=t.updateToastLayout,u=t.updateLastToastId;(0,a.useEffect)(function(){e&&d(function(){return e?(0,r.Z)({},c.TP,e):c.TP})},[]);var p=function(e){n(function(t){return t.map(function(t){return t._internalIdent!==e?t:(0,r.Z)({},t,{visible:!1})})}),u(function(){return e})};return{toasts:s,setToast:function(e){var t="toast-".concat((0,i.zv)()),r=e.delay||l.delay;if(e.id&&s.find(function(t){return t.id===e.id}))throw Error('Toast: Already have the same key: "ident"');n(function(n){var a={delay:r,text:e.text,visible:!0,type:e.type||l.type,id:e.id||t,actions:e.actions||[],_internalIdent:t,_timeout:window.setTimeout(function(){p(t),a._timeout&&(window.clearTimeout(a._timeout),a._timeout=null)},r),cancel:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return p(t)})};return[].concat((0,o.Z)(n),[a])})},removeAll:function(){n(function(e){return e.map(function(e){return(0,r.Z)({},e,{visible:!1})})})},findToastOneByID:function(e){return s.find(function(t){return t.id===e})},removeToastOneByID:function(e){n(function(t){return t.map(function(t){return t.id!==e?t:(0,r.Z)({},t,{visible:!1})})})}}}}}]);