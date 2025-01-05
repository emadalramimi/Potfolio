"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[130],{8279:(e,t,r)=>{r.d(t,{sW:()=>a,Sv:()=>c,AA:()=>d,Ce:()=>h});var n=r(5043),i=r(579);var o=r(2127);const a=()=>{const[e,t]=(0,n.useState)(!1),r=()=>{window.scrollY>300?t(!0):t(!1)};return(0,n.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),(0,i.jsx)("div",{id:"back-to-top",children:(0,i.jsx)("div",{className:e?"back-to-top":"hide-back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,i.jsx)(o.UN8,{className:"back-to-top__icon"})})})};var s=r(4282);const c=e=>(0,i.jsx)(s.A,{type:e.type,variant:e.variant,className:e.className,disabled:e.disabled,onClick:e.onClick,children:e.children});r(5751),r(6201);var l=r(9566);const d=e=>{const[t,r]=n.useState(e.show);return(0,i.jsxs)(l.A,{show:t,onHide:()=>r(!1),children:[(0,i.jsx)(l.A.Header,{closeButton:!0,children:(0,i.jsx)(l.A.Title,{children:"Error"})}),(0,i.jsx)(l.A.Body,{children:(0,i.jsx)("p",{children:e.error})}),(0,i.jsx)(l.A.Footer,{children:(0,i.jsx)(c,{onClick:()=>r(!1),children:"Close"})})]})};var u=r(7417),p=r(8553);const h=e=>{const{isLoading:t,error:r,sendRequest:o}=(0,p.A)(),[a,s]=(0,n.useState)("");return(0,n.useEffect)((()=>{if(!r){function s(e){var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+a+"?autoplay=1&rel=0"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","1"),t.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),e.parentNode.replaceChild(t,e)}for(var e=document.getElementsByClassName("youtube-player"),t=0;t<e.length;t++){var n=document.createElement("div");n.setAttribute("data-id",a);var i=document.createElement("img");i.src=a?"//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",a):"//ik.imagekit.io/itsrakesh/Portfolio/Misc/no_video_qewh2eY8Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644752640643",n.appendChild(i);var o=document.createElement("div");o.setAttribute("class","play"),n.appendChild(o),a&&(n.onclick=function(){s(this)}),e[t].appendChild(n)}}}),[a,r]),(0,n.useEffect)((()=>{(async()=>{try{const t=await o(`${{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL}/project/projects/video/${e.repoName}`);s(t)}catch(t){}})()}),[o,e.repoName]),(0,i.jsxs)("div",{className:"youtube-player","data-id":a,children:[t&&(0,i.jsx)(u.A,{animation:"border"}),r&&(0,i.jsx)("p",{children:r})]})}},8553:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(5043),i=r(6213);const o=()=>{const[e,t]=(0,n.useState)(!1),[r,o]=(0,n.useState)(null),[a,s]=(0,n.useState)(!1),c=(0,n.useRef)([]),l=(0,n.useCallback)((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t(!0);const a=new AbortController;c.current.push(a);try{const o=await(0,i.A)({method:r,url:e,data:n,signal:a.signal});return t(!1),o.data}catch(u){var l,d;const e=(null===(l=u.response)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.message)||u.message||"An unexpected error occurred";throw o(e),s(!0),new Error(e)}finally{t(!1)}}),[]),d=(0,n.useCallback)((()=>{o(null),s(!1)}),[]);return(0,n.useEffect)((()=>{const e=c.current;return()=>{e.forEach((e=>e.abort()))}}),[]),{isLoading:e,error:r,sendRequest:l,show:a,clearError:d}}},1130:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Dt});var n=r(5043),i=r(6213);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const a=["children","options"],s="0",c="1",l="2",d="3",u="4",p="5",h="6",m="7",f="8",g="9",y="10",k="11",x="12",v="13",j="14",b="15",w="16",E="17",A="18",C="19",S="20",$="21",_="22",N="23",R="24",T="25",O="26",z="27",L="28",P="29",M="30",D="31",H="32",I="33";var U,W;(W=U||(U={}))[W.MAX=0]="MAX",W[W.HIGH=1]="HIGH",W[W.MED=2]="MED",W[W.LOW=3]="LOW",W[W.MIN=4]="MIN";const B=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{class:"className",for:"htmlFor"}),F={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},q=["style","script"],G=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,Z=/mailto:/i,K=/\n{2,}$/,Q=/^(\s*>[\s\S]*?)(?=\n\n|$)/,V=/^ *> ?/gm,X=/^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,Y=/^ {2,}\n/,J=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,ee=/^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,te=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,re=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,ne=/^(?:\n *)*\n/,ie=/\r\n?/g,oe=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,ae=/^\[\^([^\]]+)]/,se=/\f/g,ce=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,le=/^\s*?\[(x|\s)\]/,de=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,ue=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,pe=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,he=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,me=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,fe=/^<!--[\s\S]*?(?:-->)/,ge=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,ye=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,ke=/^\{.*\}$/,xe=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,ve=/^<([^ >]+@[^ >]+)>/,je=/^<([^ >]+:\/[^ >]+)>/,be=/-([a-z])?/gi,we=/^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,Ee=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Ae=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Ce=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Se=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,$e=/\t/g,_e=/(^ *\||\| *$)/g,Ne=/^ *:-+: *$/,Re=/^ *:-+ *$/,Te=/^ *-+: *$/,Oe="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",ze=new RegExp(`^([*_])\\1${Oe}\\1\\1(?!\\1)`),Le=new RegExp(`^([*_])${Oe}\\1(?!\\1|\\w)`),Pe=new RegExp(`^==${Oe}==`),Me=new RegExp(`^~~${Oe}~~`),De=/^\\([^0-9A-Za-z\s])/,He=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Ie=/^\n+/,Ue=/^([ \t]*)/,We=/\\([^\\])/g,Be=/ *\n+$/,Fe=/(?:^|\n)( *)$/,qe="(?:\\d+\\.)",Ge="(?:[*+-])";function Ze(e){return"( *)("+(1===e?qe:Ge)+") +"}const Ke=Ze(1),Qe=Ze(2);function Ve(e){return new RegExp("^"+(1===e?Ke:Qe))}const Xe=Ve(1),Ye=Ve(2);function Je(e){return new RegExp("^"+(1===e?Ke:Qe)+"[^\\n]*(?:\\n(?!\\1"+(1===e?qe:Ge)+" )[^\\n]*)*(\\n|$)","gm")}const et=Je(1),tt=Je(2);function rt(e){const t=1===e?qe:Ge;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const nt=rt(1),it=rt(2);function ot(e,t){const r=1===t,n=r?nt:it,i=r?et:tt,o=r?Xe:Ye;return{match(e,t){const r=Fe.exec(t.prevCapture);return r&&(t.list||!t.inline&&!t.simple)?n.exec(e=r[1]+e):null},order:1,parse(e,t,n){const a=r?+e[2]:void 0,s=e[0].replace(K,"\n").match(i);let c=!1;return{items:s.map((function(e,r){const i=o.exec(e)[0].length,a=new RegExp("^ {1,"+i+"}","gm"),l=e.replace(a,"").replace(o,""),d=r===s.length-1,u=-1!==l.indexOf("\n\n")||d&&c;c=u;const p=n.inline,h=n.list;let m;n.list=!0,u?(n.inline=!1,m=l.replace(Be,"\n\n")):(n.inline=!0,m=l.replace(Be,""));const f=t(m,n);return n.inline=p,n.list=h,f})),ordered:r,start:a}},render:(t,r,n)=>e(t.ordered?"ol":"ul",{key:n.key,start:t.type===S?t.start:void 0},t.items.map((function(t,i){return e("li",{key:i},r(t,n))})))}}const at=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),st=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ct=[Q,ee,te,de,pe,ue,fe,we,et,nt,tt,it],lt=[...ct,/^[^\n]+(?:  \n|\n{2,})/,he,ye];function dt(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ut(e){return Te.test(e)?"right":Ne.test(e)?"center":Re.test(e)?"left":null}function pt(e,t,r,n){const i=r.inTable;r.inTable=!0;let o=e.trim().split(/( *(?:`[^`]*`|\\\||\|) *)/).reduce(((e,i)=>("|"===i.trim()?e.push(n?{type:O}:{type:z,text:i}):""!==i&&e.push.apply(e,t(i,r)),e)),[]);r.inTable=i;let a=[[]];return o.forEach((function(e,t){e.type===O?0!==t&&t!==o.length-1&&a.push([]):(e.type!==z||null!=o[t+1]&&o[t+1].type!==O||(e.text=e.text.trimEnd()),a[a.length-1].push(e))})),a}function ht(e,t,r){r.inline=!0;const n=e[2]?e[2].replace(_e,"").split("|").map(ut):[],i=e[3]?function(e,t,r){return e.trim().split("\n").map((function(e){return pt(e,t,r,!0)}))}(e[3],t,r):[],o=pt(e[1],t,r,!!i.length);return r.inline=!1,i.length?{align:n,cells:i,header:o,type:T}:{children:o,type:$}}function mt(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ft(e){return function(t,r){return r.inline?e.exec(t):null}}function gt(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function yt(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function kt(e){return function(t){return e.exec(t)}}function xt(e,t){if(t.inline||t.simple)return null;let r="";e.split("\n").every((e=>!ct.some((t=>t.test(e)))&&(r+=e+"\n",e.trim())));const n=r.trimEnd();return""==n?null:[r,n]}function vt(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function jt(e){return e.replace(We,"$1")}function bt(e,t,r){const n=r.inline||!1,i=r.simple||!1;r.inline=!0,r.simple=!0;const o=e(t,r);return r.inline=n,r.simple=i,o}function wt(e,t,r){const n=r.inline||!1,i=r.simple||!1;r.inline=!1,r.simple=!0;const o=e(t,r);return r.inline=n,r.simple=i,o}function Et(e,t,r){const n=r.inline||!1;r.inline=!1;const i=e(t,r);return r.inline=n,i}const At=(e,t,r)=>({children:bt(t,e[1],r)});function Ct(){return{}}function St(){return null}function $t(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function _t(e,t,r){let n=e;const i=t.split(".");for(;i.length&&(n=n[i[0]],void 0!==n);)i.shift();return n||r}function Nt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function r(e,r){const n=_t(t.overrides,`${e}.props`,{});for(var i=arguments.length,a=new Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];return t.createElement(function(e,t){const r=_t(t,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:_t(t,`${e}.component`,e):e}(e,t.overrides),o({},r,n,{className:$t(null==r?void 0:r.className,n.className)||void 0}),...a)}function i(e){e=e.replace(ce,"");let n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===Se.test(e));const i=_e(K(n?e:`${e.trimEnd().replace(Ie,"")}\n\n`,{inline:n}));for(;"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;const o=t.wrapper||(n?"span":"div");let a;if(i.length>1||t.forceWrapper)a=i;else{if(1===i.length)return a=i[0],"string"==typeof a?r("span",{key:"outer"},a):a;a=null}return t.createElement(o,{key:"outer"},a)}function a(e,r){const n=r.match(G);return n?n.reduce((function(r,n,o){const a=n.indexOf("=");if(-1!==a){const o=function(e){return-1!==e.indexOf("-")&&null===e.match(ge)&&(e=e.replace(be,(function(e,t){return t.toUpperCase()}))),e}(n.slice(0,a)).trim(),s=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(n.slice(a+1).trim()),c=B[o]||o;if("ref"===c)return r;const l=r[c]=function(e,t,r,n){return"style"===t?r.split(/;\s?/).reduce((function(e,t){const r=t.slice(0,t.indexOf(":"));return e[r.trim().replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(r.length+1).trim(),e}),{}):"href"===t||"src"===t?n(r,e,t):(r.match(ke)&&(r=r.slice(1,r.length-1)),"true"===r||"false"!==r&&r)}(e,o,s,t.sanitizer);"string"==typeof l&&(he.test(l)||ye.test(l))&&(r[c]=i(l.trim()))}else"style"!==n&&(r[B[n]||n]=!0);return r}),{}):null}t.overrides=t.overrides||{},t.sanitizer=t.sanitizer||vt,t.slugify=t.slugify||dt,t.namedCodesToUnicode=t.namedCodesToUnicode?o({},F,t.namedCodesToUnicode):F,t.createElement=t.createElement||n.createElement;const O=[],U={},W={[s]:{match:yt(Q),order:1,parse(e,t,r){const[,n,i]=e[0].replace(V,"").match(X);return{alert:n,children:t(i,r)}},render(e,n,i){const o={key:i.key};return e.alert&&(o.className="markdown-alert-"+t.slugify(e.alert.toLowerCase(),dt),e.children.unshift({attrs:{},children:[{type:z,text:e.alert}],noInnerParse:!0,type:k,tag:"header"})),r("blockquote",o,n(e.children,i))}},[c]:{match:kt(Y),order:1,parse:Ct,render:(e,t,n)=>r("br",{key:n.key})},[l]:{match:yt(J),order:1,parse:Ct,render:(e,t,n)=>r("hr",{key:n.key})},[d]:{match:yt(te),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,t,n)=>r("pre",{key:n.key},r("code",o({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[u]:{match:yt(ee),order:0,parse:e=>({attrs:a("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:d})},[p]:{match:gt(re),order:3,parse:e=>({text:e[2]}),render:(e,t,n)=>r("code",{key:n.key},e.text)},[h]:{match:yt(oe),order:0,parse:e=>(O.push({footnote:e[2],identifier:e[1]}),{}),render:St},[m]:{match:ft(ae),order:1,parse:e=>({target:`#${t.slugify(e[1],dt)}`,text:e[1]}),render:(e,n,i)=>r("a",{key:i.key,href:t.sanitizer(e.target,"a","href")},r("sup",{key:i.key},e.text))},[f]:{match:ft(le),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,n)=>r("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})},[g]:{match:yt(t.enforceAtxHeadings?ue:de),order:1,parse:(e,r,n)=>({children:bt(r,e[2],n),id:t.slugify(e[2],dt),level:e[1].length}),render:(e,t,n)=>r(`h${e.level}`,{id:e.id,key:n.key},t(e.children,n))},[y]:{match:yt(pe),order:0,parse:(e,t,r)=>({children:bt(t,e[1],r),level:"="===e[2]?1:2,type:g})},[k]:{match:kt(he),order:1,parse(e,t,r){const[,n]=e[3].match(Ue),i=new RegExp(`^${n}`,"gm"),o=e[3].replace(i,""),s=(c=o,lt.some((e=>e.test(c)))?Et:bt);var c;const l=e[1].toLowerCase(),d=-1!==q.indexOf(l),u=(d?l:e[1]).trim(),p={attrs:a(u,e[2]),noInnerParse:d,tag:u};return r.inAnchor=r.inAnchor||"a"===l,d?p.text=e[3]:p.children=s(t,o,r),r.inAnchor=!1,p},render:(e,t,n)=>r(e.tag,o({key:n.key},e.attrs),e.text||(e.children?t(e.children,n):""))},[v]:{match:kt(ye),order:1,parse(e){const t=e[1].trim();return{attrs:a(t,e[2]||""),tag:t}},render:(e,t,n)=>r(e.tag,o({},e.attrs,{key:n.key}))},[x]:{match:kt(fe),order:1,parse:()=>({}),render:St},[j]:{match:gt(st),order:1,parse:e=>({alt:e[1],target:jt(e[2]),title:e[3]}),render:(e,n,i)=>r("img",{key:i.key,alt:e.alt||void 0,title:e.title||void 0,src:t.sanitizer(e.target,"img","src")})},[b]:{match:ft(at),order:3,parse:(e,t,r)=>({children:wt(t,e[1],r),target:jt(e[2]),title:e[3]}),render:(e,n,i)=>r("a",{key:i.key,href:t.sanitizer(e.target,"a","href"),title:e.title},n(e.children,i))},[w]:{match:ft(je),order:0,parse:e=>({children:[{text:e[1],type:z}],target:e[1],type:b})},[E]:{match:(e,r)=>r.inAnchor||t.disableAutoLink?null:ft(xe)(e,r),order:0,parse:e=>({children:[{text:e[1],type:z}],target:e[1],title:void 0,type:b})},[A]:{match:ft(ve),order:0,parse(e){let t=e[1],r=e[1];return Z.test(r)||(r="mailto:"+r),{children:[{text:t.replace("mailto:",""),type:z}],target:r,type:b}}},[S]:ot(r,1),[I]:ot(r,2),[C]:{match:yt(ne),order:3,parse:Ct,render:()=>"\n"},[$]:{match:xt,order:3,parse:At,render:(e,t,n)=>r("p",{key:n.key},t(e.children,n))},[_]:{match:ft(Ee),order:0,parse:e=>(U[e[1]]={target:e[2],title:e[4]},{}),render:St},[N]:{match:gt(Ae),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,n,i)=>U[e.ref]?r("img",{key:i.key,alt:e.alt,src:t.sanitizer(U[e.ref].target,"img","src"),title:U[e.ref].title}):null},[R]:{match:ft(Ce),order:0,parse:(e,t,r)=>({children:t(e[1],r),fallbackChildren:e[0],ref:e[2]}),render:(e,n,i)=>U[e.ref]?r("a",{key:i.key,href:t.sanitizer(U[e.ref].target,"a","href"),title:U[e.ref].title},n(e.children,i)):r("span",{key:i.key},e.fallbackChildren)},[T]:{match:yt(we),order:1,parse:ht,render(e,t,n){const i=e;return r("table",{key:n.key},r("thead",null,r("tr",null,i.header.map((function(e,o){return r("th",{key:o,style:mt(i,o)},t(e,n))})))),r("tbody",null,i.cells.map((function(e,o){return r("tr",{key:o},e.map((function(e,o){return r("td",{key:o,style:mt(i,o)},t(e,n))})))}))))}},[z]:{match:kt(He),order:4,parse:e=>({text:e[0].replace(me,((e,r)=>t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e))}),render:e=>e.text},[L]:{match:gt(ze),order:2,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,n)=>r("strong",{key:n.key},t(e.children,n))},[P]:{match:gt(Le),order:3,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,n)=>r("em",{key:n.key},t(e.children,n))},[M]:{match:gt(De),order:1,parse:e=>({text:e[1],type:z})},[D]:{match:gt(Pe),order:3,parse:At,render:(e,t,n)=>r("mark",{key:n.key},t(e.children,n))},[H]:{match:gt(Me),order:3,parse:At,render:(e,t,n)=>r("del",{key:n.key},t(e.children,n))}};!0===t.disableParsingRawHTML&&(delete W[k],delete W[v]);const K=function(e){let t=Object.keys(e);function r(n,i){let o=[];for(i.prevCapture=i.prevCapture||"";n;){let a=0;for(;a<t.length;){const s=t[a],c=e[s],l=c.match(n,i);if(l){const e=l[0];i.prevCapture+=e,n=n.substring(e.length);const t=c.parse(l,r,i);null==t.type&&(t.type=s),o.push(t);break}a++}}return i.prevCapture="",o}return t.sort((function(t,r){let n=e[t].order,i=e[r].order;return n!==i?n-i:t<r?-1:1})),function(e,t){return r(function(e){return e.replace(ie,"\n").replace(se,"").replace($e,"    ")}(e),t)}}(W),_e=(Ne=function(e,t){return function(r,n,i){const o=e[r.type].render;return t?t((()=>o(r,n,i)),r,n,i):o(r,n,i)}}(W,t.renderRule),function e(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(t)){const n=r.key,i=[];let o=!1;for(let a=0;a<t.length;a++){r.key=a;const n=e(t[a],r),s="string"==typeof n;s&&o?i[i.length-1]+=n:null!==n&&i.push(n),o=s}return r.key=n,i}return Ne(t,e,r)});var Ne;const Re=i(e);return O.length?r("div",null,Re,r("footer",{key:"footer"},O.map((function(e){return r("div",{id:t.slugify(e.identifier,dt),key:e.identifier},e.identifier,_e(K(e.footnote,{inline:!0})))})))):Re}const Rt=e=>{let{children:t="",options:r}=e,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(e,a);return n.cloneElement(Nt(t,r),i)};var Tt=r(3519),Ot=r(3216),zt=r(1591),Lt=r(8279),Pt=r(3793),Mt=r(579);const Dt=()=>{const[e,t]=(0,n.useState)(""),[r,o]=(0,n.useState)(!1),[a,s]=(0,n.useState)(""),[c,l]=(0,n.useState)(!1),{repoName:d}=(0,Ot.g)(),u=(0,n.useCallback)((async()=>{o(!0);try{const e=await i.A.get(`https://raw.githubusercontent.com/RakeshPotnuru/${d}/master/README.md`);o(!1),t(e.data)}catch(a){s(a),o(!1)}}),[t,d]);return(0,n.useEffect)((()=>{u()}),[u]),(0,Mt.jsxs)(n.Fragment,{children:[(0,Mt.jsxs)(zt.m,{children:[(0,Mt.jsxs)("title",{children:[d," | itsrakesh"]}),(0,Mt.jsx)("meta",{name:"description",content:`See my ${d} project`}),(0,Mt.jsx)("meta",{property:"og:title",content:d}),(0,Mt.jsx)("meta",{property:"og:description",content:`See my ${d} project`}),(0,Mt.jsx)("meta",{property:"og:image",content:"https://ik.imagekit.io/itsrakesh/Portfolio/projects__og_r2hbQSeQy0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644157173960"}),(0,Mt.jsx)("meta",{property:"twitter:title",content:d}),(0,Mt.jsx)("meta",{property:"twitter:description",content:`See my ${d} project`}),(0,Mt.jsx)("meta",{property:"twitter:image",content:"https://ik.imagekit.io/itsrakesh/Portfolio/projects__og_r2hbQSeQy0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644157173960"})]}),(0,Mt.jsx)(Lt.AA,{show:c,onHide:()=>l(!1),onClick:()=>l(!1),error:a}),(0,Mt.jsxs)(Tt.A,{children:[(0,Mt.jsxs)("div",{className:"project-item",children:[(0,Mt.jsx)("h2",{children:"Project Details"}),(0,Mt.jsx)("div",{className:"project-item__video",children:(0,Mt.jsx)(Lt.Ce,{repoName:d})}),(0,Mt.jsxs)("em",{children:[(0,Mt.jsx)("span",{style:{color:"red"},children:"*"})," This page is the README file of"," ",(0,Mt.jsx)("a",{href:`https://github.com/RakeshPotnuru/${d}`,target:"_blank",rel:"noopener noreferrer",children:d})," ","Github repository."]}),r&&(0,Mt.jsx)(Pt.kt,{}),!r&&(0,Mt.jsx)("div",{className:"project-item__details",children:(0,Mt.jsx)(Rt,{children:e})})]}),(0,Mt.jsx)(Lt.sW,{})]})]})}}}]);
//# sourceMappingURL=130.240a6a23.chunk.js.map