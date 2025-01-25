import{c as W,d as Se,h as p,_ as Oe,a1 as Te,a2 as Ee,r as z,a3 as Re,a as A,w as ue,g as ce,e as De,v as je,a4 as Ke,Q as L,a5 as Ye,x as oe,s as He,a6 as Ue,a7 as be,b as $e,a8 as Ve,a9 as Xe,aa as j,n as Ie,ab as Ge,ac as G,ad as ne,ae as se,af as le,ag as de,ah as ie,D as Je,o as We,ai as Ze,F as et,E as tt,K as nt,aj as lt,L as it,ak as ke,f as rt,M as P,X as Y,Y as J,O as Q,P as H,al as at,T as U,am as ut,S as pe,U as _e,N as xe,an as ot,ao as st}from"./index-DmUV7x7I.js";import{u as dt}from"./node-EjodRlas.js";import{a as ct}from"./useNavigation-BQ1VTALf.js";const ft=W({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:r,emit:s}){let y=!1,t,i,o=null,c=null,f,d;function S(){t&&t(),t=null,y=!1,o!==null&&(clearTimeout(o),o=null),c!==null&&(clearTimeout(c),c=null),i!==void 0&&i.removeEventListener("transitionend",f),f=null}function T(h,b,k){b!==void 0&&(h.style.height=`${b}px`),h.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,y=!0,t=k}function E(h,b){h.style.overflowY=null,h.style.height=null,h.style.transition=null,S(),b!==d&&s(b)}function q(h,b){let k=0;i=h,y===!0?(S(),k=h.offsetHeight===h.scrollHeight?0:void 0):(d="hide",h.style.overflowY="hidden"),T(h,k,b),o=setTimeout(()=>{o=null,h.style.height=`${h.scrollHeight}px`,f=C=>{c=null,(Object(C)!==C||C.target===h)&&E(h,"show")},h.addEventListener("transitionend",f),c=setTimeout(f,e.duration*1.1)},100)}function _(h,b){let k;i=h,y===!0?S():(d="show",h.style.overflowY="hidden",k=h.scrollHeight),T(h,k,b),o=setTimeout(()=>{o=null,h.style.height=0,f=C=>{c=null,(Object(C)!==C||C.target===h)&&E(h,"hide")},h.addEventListener("transitionend",f),c=setTimeout(f,e.duration*1.1)},100)}return Se(()=>{y===!0&&S()}),()=>p(Oe,{css:!1,appear:e.appear,onEnter:q,onLeave:_},r.default)}}),ht=["none","strict","leaf","leaf-filtered"],vt=W({name:"QTree",props:{...Te,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>ht.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:{},noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:r,emit:s}){const{proxy:y}=ce(),{$q:t}=y,i=Ee(e,t),o=z({}),c=z(e.ticked||[]),f=z(e.expanded||[]);let d={};Re(()=>{d={}});const S=A(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(i.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),T=A(()=>e.selected!==void 0),E=A(()=>e.icon||t.iconSet.tree.icon),q=A(()=>e.controlColor||e.color),_=A(()=>e.textColor!==void 0?` text-${e.textColor}`:""),h=A(()=>{const l=e.selectedColor||e.color;return l?` text-${l}`:""}),b=A(()=>e.filterMethod!==void 0?e.filterMethod:(l,a)=>{const n=a.toLowerCase();return l[e.labelKey]&&l[e.labelKey].toLowerCase().indexOf(n)!==-1}),k=A(()=>{const l={},a=(n,v)=>{const u=n.tickStrategy||(v?v.tickStrategy:e.tickStrategy),m=n[e.nodeKey],x=n[e.childrenKey]&&Array.isArray(n[e.childrenKey])&&n[e.childrenKey].length!==0,M=n.disabled!==!0&&T.value===!0&&n.selectable!==!1,K=n.disabled!==!0&&n.expandable!==!1,Ne=u!=="none",I=u==="strict",ge=u==="leaf-filtered",ee=u==="leaf"||u==="leaf-filtered";let te=n.disabled!==!0&&n.tickable!==!1;ee===!0&&te===!0&&v&&v.tickable!==!0&&(te=!1);let O=n.lazy;O===!0&&o.value[m]!==void 0&&Array.isArray(n[e.childrenKey])===!0&&(O=o.value[m]);const g={key:m,parent:v,isParent:x,lazy:O,disabled:n.disabled,link:n.disabled!==!0&&(M===!0||K===!0&&(x===!0||O===!0)),children:[],matchesFilter:e.filter?b.value(n,e.filter):!0,selected:m===e.selected&&M===!0,selectable:M,expanded:x===!0?f.value.includes(m):!1,expandable:K,noTick:n.noTick===!0||I!==!0&&O&&O!=="loaded",tickable:te,tickStrategy:u,hasTicking:Ne,strictTicking:I,leafFilteredTicking:ge,leafTicking:ee,ticked:I===!0?c.value.includes(m):x===!0?!1:c.value.includes(m)};if(l[m]=g,x===!0&&(g.children=n[e.childrenKey].map(w=>a(w,g)),e.filter&&(g.matchesFilter!==!0?g.matchesFilter=g.children.some(w=>w.matchesFilter):g.noTick!==!0&&g.disabled!==!0&&g.tickable===!0&&ge===!0&&g.children.every(w=>w.matchesFilter!==!0||w.noTick===!0||w.tickable!==!0)===!0&&(g.tickable=!1)),g.matchesFilter===!0&&(g.noTick!==!0&&I!==!0&&g.children.every(w=>w.noTick)===!0&&(g.noTick=!0),ee))){if(g.ticked=!1,g.indeterminate=g.children.some(w=>w.indeterminate===!0),g.tickable=g.tickable===!0&&g.children.some(w=>w.tickable),g.indeterminate!==!0){const w=g.children.reduce((me,Me)=>Me.ticked===!0?me+1:me,0);w===g.children.length?g.ticked=!0:w>0&&(g.indeterminate=!0)}g.indeterminate===!0&&(g.indeterminateNextState=g.children.every(w=>w.tickable!==!0||w.ticked!==!0))}return g};return e.nodes.forEach(n=>a(n,null)),l});ue(()=>e.ticked,l=>{c.value=l}),ue(()=>e.expanded,l=>{f.value=l});function C(l){const a=[].reduce,n=(v,u)=>{if(v||!u)return v;if(Array.isArray(u)===!0)return a.call(Object(u),n,v);if(u[e.nodeKey]===l)return u;if(u[e.childrenKey])return n(null,u[e.childrenKey])};return n(null,e.nodes)}function N(){return c.value.map(l=>C(l))}function R(){return f.value.map(l=>C(l))}function $(l){return l&&k.value[l]?k.value[l].expanded:!1}function F(){e.expanded!==void 0?s("update:expanded",[]):f.value=[]}function B(){const l=[],a=n=>{n[e.childrenKey]&&n[e.childrenKey].length!==0&&n.expandable!==!1&&n.disabled!==!0&&(l.push(n[e.nodeKey]),n[e.childrenKey].forEach(a))};e.nodes.forEach(a),e.expanded!==void 0?s("update:expanded",l):f.value=l}function D(l,a,n=C(l),v=k.value[l]){if(v.lazy&&v.lazy!=="loaded"){if(v.lazy==="loading")return;o.value[l]="loading",Array.isArray(n[e.childrenKey])!==!0&&(n[e.childrenKey]=[]),s("lazyLoad",{node:n,key:l,done:u=>{o.value[l]="loaded",n[e.childrenKey]=Array.isArray(u)===!0?u:[],De(()=>{const m=k.value[l];m&&m.isParent===!0&&V(l,!0)})},fail:()=>{delete o.value[l],n[e.childrenKey].length===0&&delete n[e.childrenKey]}})}else v.isParent===!0&&v.expandable===!0&&V(l,a)}function V(l,a){let n=f.value;const v=e.expanded!==void 0;if(v===!0&&(n=n.slice()),a){if(e.accordion&&k.value[l]){const u=[];k.value[l].parent?k.value[l].parent.children.forEach(m=>{m.key!==l&&m.expandable===!0&&u.push(m.key)}):e.nodes.forEach(m=>{const x=m[e.nodeKey];x!==l&&u.push(x)}),u.length!==0&&(n=n.filter(m=>u.includes(m)===!1))}n=n.concat([l]).filter((u,m,x)=>x.indexOf(u)===m)}else n=n.filter(u=>u!==l);v===!0?s("update:expanded",n):f.value=n}function Ae(l){return l&&k.value[l]?k.value[l].ticked:!1}function X(l,a){let n=c.value;const v=e.ticked!==void 0;v===!0&&(n=n.slice()),a?n=n.concat(l).filter((u,m,x)=>x.indexOf(u)===m):n=n.filter(u=>l.includes(u)===!1),v===!0&&s("update:ticked",n)}function ze(l,a,n){const v={tree:y,node:l,key:n,color:e.color,dark:i.value};return be(v,"expanded",()=>a.expanded,u=>{u!==a.expanded&&D(n,u)}),be(v,"ticked",()=>a.ticked,u=>{u!==a.ticked&&X([n],u)}),v}function he(l){return(e.filter?l.filter(a=>k.value[a[e.nodeKey]].matchesFilter):l).map(a=>Qe(a))}function Be(l){if(l.icon!==void 0)return p(L,{class:"q-tree__icon q-mr-sm",name:l.icon,color:l.iconColor});const a=l.img||l.avatar;if(a)return p("img",{class:`q-tree__${l.img?"img":"avatar"} q-mr-sm`,src:a})}function Fe(){s("afterShow")}function Pe(){s("afterHide")}function Qe(l){const a=l[e.nodeKey],n=k.value[a],v=l.header&&r[`header-${l.header}`]||r["default-header"],u=n.isParent===!0?he(l[e.childrenKey]):[],m=u.length!==0||n.lazy&&n.lazy!=="loaded";let x=l.body&&r[`body-${l.body}`]||r["default-body"];const M=v!==void 0||x!==void 0?ze(l,n,a):null;return x!==void 0&&(x=p("div",{class:"q-tree__node-body relative-position"},[p("div",{class:_.value},[x(M)])])),p("div",{key:a,class:`q-tree__node relative-position q-tree__node--${m===!0?"parent":"child"}`},[p("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(n.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(n.selected===!0?" q-tree__node--selected":"")+(n.disabled===!0?" q-tree__node--disabled":""),tabindex:n.link===!0?0:-1,ariaExpanded:u.length>0?n.expanded:null,role:"treeitem",onClick:K=>{ye(l,n,K)},onKeypress(K){je(K)!==!0&&(K.keyCode===13?ye(l,n,K,!0):K.keyCode===32&&Z(l,n,K,!0))}},[p("div",{class:"q-focus-helper",tabindex:-1,ref:K=>{d[n.key]=K}}),n.lazy==="loading"?p(Ke,{class:"q-tree__spinner",color:q.value}):m===!0?p(L,{class:"q-tree__arrow"+(n.expanded===!0?" q-tree__arrow--rotate":""),name:E.value,onClick(K){Z(l,n,K)}}):null,n.hasTicking===!0&&n.noTick!==!0?p(Ye,{class:"q-tree__tickbox",modelValue:n.indeterminate===!0?null:n.ticked,color:q.value,dark:i.value,dense:!0,keepColor:!0,disable:n.tickable!==!0,onKeydown:oe,"onUpdate:modelValue":K=>{Le(n,K)}}):null,p("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(n.selected===!0?h.value:_.value)},[v?v(M):[Be(l),p("div",l[e.labelKey])]])]),m===!0?e.noTransition===!0?n.expanded===!0?p("div",{class:"q-tree__node-collapsible"+_.value,key:`${a}__q`},[x,p("div",{class:"q-tree__children"+(n.disabled===!0?" q-tree__node--disabled":""),role:"group"},u)]):null:p(ft,{duration:e.duration,onShow:Fe,onHide:Pe},()=>He(p("div",{class:"q-tree__node-collapsible"+_.value,key:`${a}__q`},[x,p("div",{class:"q-tree__children"+(n.disabled===!0?" q-tree__node--disabled":""),role:"group"},u)]),[[Ue,n.expanded]])):x])}function ve(l){const a=d[l];a&&a.focus()}function ye(l,a,n,v){v!==!0&&a.selectable!==!1&&ve(a.key),T.value&&a.selectable?e.noSelectionUnset===!1?s("update:selected",a.key!==e.selected?a.key:null):a.key!==e.selected&&s("update:selected",a.key===void 0?null:a.key):Z(l,a,n,v),typeof l.handler=="function"&&l.handler(l)}function Z(l,a,n,v){n!==void 0&&oe(n),v!==!0&&a.selectable!==!1&&ve(a.key),D(a.key,!a.expanded,l,a)}function Le(l,a){if(l.indeterminate===!0&&(a=l.indeterminateNextState),l.strictTicking)X([l.key],a);else if(l.leafTicking){const n=[],v=u=>{u.isParent?(a!==!0&&u.noTick!==!0&&u.tickable===!0&&n.push(u.key),u.leafTicking===!0&&u.children.forEach(v)):u.noTick!==!0&&u.tickable===!0&&(u.leafFilteredTicking!==!0||u.matchesFilter===!0)&&n.push(u.key)};v(l),X(n,a)}}return e.defaultExpandAll===!0&&B(),Object.assign(y,{getNodeByKey:C,getTickedNodes:N,getExpandedNodes:R,isExpanded:$,collapseAll:F,expandAll:B,setExpanded:D,isTicked:Ae,setTicked:X}),()=>{const l=he(e.nodes);return p("div",{class:S.value,role:"tree"},l.length===0?e.filter?e.noResultsLabel||t.lang.tree.noResults:e.noNodesLabel||t.lang.tree.noNodes:l)}}}),yt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],gt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"],mt=W({name:"QSkeleton",props:{...Te,tag:{type:String,default:"div"},type:{type:String,validator:e=>yt.includes(e),default:"rect"},animation:{type:String,validator:e=>gt.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:r}){const s=ce(),y=Ee(e,s.proxy.$q),t=A(()=>{const o=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:o[0],height:o[1]}}),i=A(()=>`q-skeleton q-skeleton--${y.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>p(e.tag,{class:i.value,style:t.value},$e(r.default))}}),fe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},bt=Object.keys(fe);fe.all=!0;function Ce(e){const r={};for(const s of bt)e[s]===!0&&(r[s]=!0);return Object.keys(r).length===0?fe:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const kt=["INPUT","TEXTAREA"];function we(e,r){return r.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof r.handler=="function"&&kt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(r.uid)===-1)}function pt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ve.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function re(e,r,s){const y=de(e);let t,i=y.left-r.event.x,o=y.top-r.event.y,c=Math.abs(i),f=Math.abs(o);const d=r.direction;d.horizontal===!0&&d.vertical!==!0?t=i<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=o<0?"up":"down":d.up===!0&&o<0?(t="up",c>f&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.down===!0&&o>0?(t="down",c>f&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.left===!0&&i<0?(t="left",c<f&&(d.up===!0&&o<0?t="up":d.down===!0&&o>0&&(t="down"))):d.right===!0&&i>0&&(t="right",c<f&&(d.up===!0&&o<0?t="up":d.down===!0&&o>0&&(t="down")));let S=!1;if(t===void 0&&s===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,S=!0,t==="left"||t==="right"?(y.left-=i,c=0,i=0):(y.top-=o,f=0,o=0)}return{synthetic:S,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:y,direction:t,isFirst:r.event.isFirst,isFinal:s===!0,duration:Date.now()-r.event.time,distance:{x:c,y:f},offset:{x:i,y:o},delta:{x:y.left-r.event.lastX,y:y.top-r.event.lastY}}}}let _t=0;const xt=Xe({name:"touch-pan",beforeMount(e,{value:r,modifiers:s}){if(s.mouse!==!0&&j.has.touch!==!0)return;function y(i,o){s.mouse===!0&&o===!0?oe(i):(s.stop===!0&&le(i),s.prevent===!0&&se(i))}const t={uid:"qvtp_"+_t++,handler:r,modifiers:s,direction:Ce(s),noop:Ie,mouseStart(i){we(i,t)&&Ge(i)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(we(i,t)){const o=i.target;G(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,o){if(j.is.firefox===!0&&ne(e,!0),t.lastEvt=i,o===!0||s.stop===!0){if(t.direction.all!==!0&&(o!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&se(d),i.cancelBubble===!0&&le(d),Object.assign(d,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:d}}le(i)}const{left:c,top:f}=de(i);t.event={x:c,y:f,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:f}},move(i){if(t.event===void 0)return;const o=de(i),c=o.left-t.event.x,f=o.top-t.event.y;if(c===0&&f===0)return;t.lastEvt=i;const d=t.event.mouse===!0,S=()=>{y(i,d);let q;s.preserveCursor!==!0&&s.preservecursor!==!0&&(q=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pt(),t.styleCleanup=_=>{if(t.styleCleanup=void 0,q!==void 0&&(document.documentElement.style.cursor=q),document.body.classList.remove("non-selectable"),d===!0){const h=()=>{document.body.classList.remove("no-pointer-events--children")};_!==void 0?setTimeout(()=>{h(),_()},50):h()}else _!==void 0&&_()}};if(t.event.detected===!0){t.event.isFirst!==!0&&y(i,t.event.mouse);const{payload:q,synthetic:_}=re(i,t,!1);q!==void 0&&(t.handler(q)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&S(),t.event.lastX=q.position.left,t.event.lastY=q.position.top,t.event.lastDir=_===!0?void 0:q.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){S(),t.event.detected=!0,t.move(i);return}const T=Math.abs(c),E=Math.abs(f);T!==E&&(t.direction.horizontal===!0&&T>E||t.direction.vertical===!0&&T<E||t.direction.up===!0&&T<E&&f<0||t.direction.down===!0&&T<E&&f>0||t.direction.left===!0&&T>E&&c<0||t.direction.right===!0&&T>E&&c>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,o){if(t.event!==void 0){if(ie(t,"temp"),j.is.firefox===!0&&ne(e,!1),o===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(re(i===void 0?t.lastEvt:i,t).payload);const{payload:c}=re(i===void 0?t.lastEvt:i,t,!0),f=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,s.mouse===!0){const i=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}j.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const s=e.__qtouchpan;s!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&s.end(),s.handler=r.value),s.direction=Ce(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),ie(r,"main"),ie(r,"temp"),j.is.firefox===!0&&ne(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});function Ct(e,r,s){return s<=r?r:Math.min(s,Math.max(r,e))}const qe=40,ae=20,wt=W({name:"QPullToRefresh",props:{color:String,bgColor:String,icon:String,noMouse:Boolean,disable:Boolean,scrollTarget:Je},emits:["refresh"],setup(e,{slots:r,emit:s}){const{proxy:y}=ce(),{$q:t}=y,i=z("pull"),o=z(0),c=z(!1),f=z(-40),d=z(!1),S=z({}),T=A(()=>({opacity:o.value,transform:`translateY(${f.value}px) rotate(${o.value*360}deg)`})),E=A(()=>"q-pull-to-refresh__puller row flex-center"+(d.value===!0?" q-pull-to-refresh__puller--animating":"")+(e.bgColor!==void 0?` bg-${e.bgColor}`:""));function q($){if($.isFinal===!0){c.value===!0&&(c.value=!1,i.value==="pulled"?(i.value="refreshing",N({pos:ae}),b()):i.value==="pull"&&N({pos:-40,ratio:0}));return}if(d.value===!0||i.value==="refreshing")return!1;if($.isFirst===!0){if(et(k)!==0||$.direction!=="down")return c.value===!0&&(c.value=!1,i.value="pull",N({pos:-40,ratio:0})),!1;c.value=!0;const{top:D,left:V}=y.$el.getBoundingClientRect();S.value={top:D+"px",left:V+"px",width:window.getComputedStyle(y.$el).getPropertyValue("width")}}se($.evt);const F=Math.min(140,Math.max(0,$.distance.y));f.value=F-qe,o.value=Ct(F/(ae+qe),0,1);const B=f.value>ae?"pulled":"pull";i.value!==B&&(i.value=B)}const _=A(()=>{const $={down:!0};return e.noMouse!==!0&&($.mouse=!0),[[xt,q,void 0,$]]}),h=A(()=>`q-pull-to-refresh__content${c.value===!0?" no-pointer-events":""}`);function b(){s("refresh",()=>{N({pos:-40,ratio:0},()=>{i.value="pull"})})}let k,C=null;function N({pos:$,ratio:F},B){d.value=!0,f.value=$,F!==void 0&&(o.value=F),C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,d.value=!1,B&&B()},300)}function R(){k=tt(y.$el,e.scrollTarget)}return ue(()=>e.scrollTarget,R),We(R),Se(()=>{C!==null&&clearTimeout(C)}),Object.assign(y,{trigger:b,updateScrollTarget:R}),()=>{const $=[p("div",{class:h.value},$e(r.default)),p("div",{class:"q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top",style:S.value},[p("div",{class:E.value,style:T.value},[i.value!=="refreshing"?p(L,{name:e.icon||t.iconSet.pullToRefresh.icon,color:e.color,size:"32px"}):p(Ke,{size:"24px",color:e.color})])])];return Ze("div",{class:"q-pull-to-refresh"},$,"main",e.disable===!1,()=>_.value)}}}),qt={class:"q-pa-md"},St={class:"row no-wrap justify-between full-width"},Tt={class:"row no-wrap ellipsis line items-center full-width"},Et={class:"full-width"},Kt={class:"row no-wrap justify-between gap-2 full-width"},$t=["onClick"],At={class:"flex-1"},zt={key:1},Qt=nt({__name:"MenuView",setup(e){const r=lt(),{setActiveNode:s,setSelectedNode:y}=dt(),{tree:t,loadingTree:i}=it(ke()),{setTree:o}=ke(),{navigate:c}=ct(),f=rt("pageTitle");f.value="Text Book";const d=z(""),S=async _=>{_(),await o(1e3)},T=async _=>{s(_),await c("active")},E=async _=>{y(_),await c("folder")},q=async _=>{y(_),await c("file")};return(_,h)=>(P(),Y(wt,{onRefresh:S,"bg-color":U(r).dark.isActive?"dark":"white"},{default:J(()=>[Q("div",qt,[H(at,{dense:"",filled:"",modelValue:d.value,"onUpdate:modelValue":h[1]||(h[1]=b=>d.value=b),label:"Search",class:"q-my-md"},{append:J(()=>[d.value===""?(P(),Y(L,{key:0,name:"search"})):(P(),Y(L,{key:1,name:"clear",class:"cursor-pointer",onClick:h[0]||(h[0]=b=>d.value="")}))]),_:1},8,["modelValue"]),U(i)?(P(),xe("div",zt,[(P(!0),xe(ot,null,st(U(t).length,b=>(P(),Y(mt,{key:b,height:"30px",type:"rect",class:"q-my-md q-mx-sm"}))),128))])):(P(),Y(vt,ut({key:0},{class:{"text-center":U(t).length===0}},{"no-nodes-label":"No files found",class:"text-body1",nodes:U(t),"node-key":"key",filter:d.value}),{"header-folder":J(b=>[Q("div",St,[Q("div",Tt,[H(L,{class:"q-mr-sm text-blue-8",name:"room_service"}),Q("div",Et,pe(b.node.label),1)]),H(_e,{flat:"",dense:"",color:"primary",icon:"edit",onClick:k=>E(b.node)},null,8,["onClick"])])]),"header-file":J(b=>[Q("div",Kt,[Q("div",{class:"row no-wrap ellipsis items-center full-width",onClick:k=>T(b.node)},[H(L,{size:"20px",class:"q-mr-xs text-blue-8",name:"restaurant_menu"}),Q("div",At,pe(b.node.label),1)],8,$t),H(_e,{flat:"",dense:"",color:"primary",icon:"edit",onClick:k=>q(b.node)},null,8,["onClick"])])]),_:1},16,["nodes","filter"]))])]),_:1},8,["bg-color"]))}});export{Qt as _};
