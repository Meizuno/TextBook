import{a4 as He,a5 as $e,a6 as I,n as Ye,a7 as Xe,a8 as J,a9 as ne,aa as ue,ab as ie,ac as oe,ad as le,x as se,c as Y,d as Be,h as b,a1 as Ae,K as Pe,L as Fe,r as P,ae as Ge,a as C,w as de,g as ce,e as We,v as Je,af as ze,Q as L,ag as Ze,s as et,ah as tt,ai as ke,aj as nt,i as _e,M as Qe,b as fe,D as it,o as lt,F as rt,E as at,N as ut,ak as ot,O as st,al as pe,f as dt,P as N,$ as V,U,V as M,T as R,am as ct,X as H,W as qe,Y as xe,an as ft,S as Se,ao as ht,ap as vt}from"./index-3eUfLIpM.js";import{u as gt}from"./node-DrT1nSb9.js";import{a as yt}from"./useNavigation-DXLFP8Sp.js";const he={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},mt=Object.keys(he);he.all=!0;function we(e){const i={};for(const a of mt)e[a]===!0&&(i[a]=!0);return Object.keys(i).length===0?he:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const bt=["INPUT","TEXTAREA"];function Ce(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&bt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function kt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),He.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function re(e,i,a){const c=oe(e);let t,r=c.left-i.event.x,o=c.top-i.event.y,h=Math.abs(r),f=Math.abs(o);const d=i.direction;d.horizontal===!0&&d.vertical!==!0?t=r<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=o<0?"up":"down":d.up===!0&&o<0?(t="up",h>f&&(d.left===!0&&r<0?t="left":d.right===!0&&r>0&&(t="right"))):d.down===!0&&o>0?(t="down",h>f&&(d.left===!0&&r<0?t="left":d.right===!0&&r>0&&(t="right"))):d.left===!0&&r<0?(t="left",h<f&&(d.up===!0&&o<0?t="up":d.down===!0&&o>0&&(t="down"))):d.right===!0&&r>0&&(t="right",h<f&&(d.up===!0&&o<0?t="up":d.down===!0&&o>0&&(t="down")));let p=!1;if(t===void 0&&a===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,p=!0,t==="left"||t==="right"?(c.left-=r,h=0,r=0):(c.top-=o,f=0,o=0)}return{synthetic:p,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:c,direction:t,isFirst:i.event.isFirst,isFinal:a===!0,duration:Date.now()-i.event.time,distance:{x:h,y:f},offset:{x:r,y:o},delta:{x:c.left-i.event.lastX,y:c.top-i.event.lastY}}}}let _t=0;const pt=$e({name:"touch-pan",beforeMount(e,{value:i,modifiers:a}){if(a.mouse!==!0&&I.has.touch!==!0)return;function c(r,o){a.mouse===!0&&o===!0?se(r):(a.stop===!0&&ie(r),a.prevent===!0&&ue(r))}const t={uid:"qvtp_"+_t++,handler:i,modifiers:a,direction:we(a),noop:Ye,mouseStart(r){Ce(r,t)&&Xe(r)&&(J(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(r,!0))},touchStart(r){if(Ce(r,t)){const o=r.target;J(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),t.start(r)}},start(r,o){if(I.is.firefox===!0&&ne(e,!0),t.lastEvt=r,o===!0||a.stop===!0){if(t.direction.all!==!0&&(o!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&ue(d),r.cancelBubble===!0&&ie(d),Object.assign(d,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[t.uid]:r.qClonedBy.concat(t.uid)}),t.initialEvent={target:r.target,event:d}}ie(r)}const{left:h,top:f}=oe(r);t.event={x:h,y:f,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:f}},move(r){if(t.event===void 0)return;const o=oe(r),h=o.left-t.event.x,f=o.top-t.event.y;if(h===0&&f===0)return;t.lastEvt=r;const d=t.event.mouse===!0,p=()=>{c(r,d);let T;a.preserveCursor!==!0&&a.preservecursor!==!0&&(T=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),kt(),t.styleCleanup=K=>{if(t.styleCleanup=void 0,T!==void 0&&(document.documentElement.style.cursor=T),document.body.classList.remove("non-selectable"),d===!0){const g=()=>{document.body.classList.remove("no-pointer-events--children")};K!==void 0?setTimeout(()=>{g(),K()},50):g()}else K!==void 0&&K()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(r,t.event.mouse);const{payload:T,synthetic:K}=re(r,t,!1);T!==void 0&&(t.handler(T)===!1?t.end(r):(t.styleCleanup===void 0&&t.event.isFirst===!0&&p(),t.event.lastX=T.position.left,t.event.lastY=T.position.top,t.event.lastDir=K===!0?void 0:T.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){p(),t.event.detected=!0,t.move(r);return}const q=Math.abs(h),E=Math.abs(f);q!==E&&(t.direction.horizontal===!0&&q>E||t.direction.vertical===!0&&q<E||t.direction.up===!0&&q<E&&f<0||t.direction.down===!0&&q<E&&f>0||t.direction.left===!0&&q>E&&h<0||t.direction.right===!0&&q>E&&h>0?(t.event.detected=!0,t.move(r)):t.end(r,!0))},end(r,o){if(t.event!==void 0){if(le(t,"temp"),I.is.firefox===!0&&ne(e,!1),o===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(re(r===void 0?t.lastEvt:r,t).payload);const{payload:h}=re(r===void 0?t.lastEvt:r,t,!0),f=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,a.mouse===!0){const r=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";J(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}I.has.touch===!0&&J(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const a=e.__qtouchpan;a!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&a.end(),a.handler=i.value),a.direction=we(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),le(i,"main"),le(i,"temp"),I.is.firefox===!0&&ne(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}}),qt=Y({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:i,emit:a}){let c=!1,t,r,o=null,h=null,f,d;function p(){t&&t(),t=null,c=!1,o!==null&&(clearTimeout(o),o=null),h!==null&&(clearTimeout(h),h=null),r!==void 0&&r.removeEventListener("transitionend",f),f=null}function q(g,$,y){$!==void 0&&(g.style.height=`${$}px`),g.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,c=!0,t=y}function E(g,$){g.style.overflowY=null,g.style.height=null,g.style.transition=null,p(),$!==d&&a($)}function T(g,$){let y=0;r=g,c===!0?(p(),y=g.offsetHeight===g.scrollHeight?0:void 0):(d="hide",g.style.overflowY="hidden"),q(g,y,$),o=setTimeout(()=>{o=null,g.style.height=`${g.scrollHeight}px`,f=_=>{h=null,(Object(_)!==_||_.target===g)&&E(g,"show")},g.addEventListener("transitionend",f),h=setTimeout(f,e.duration*1.1)},100)}function K(g,$){let y;r=g,c===!0?p():(d="show",g.style.overflowY="hidden",y=g.scrollHeight),q(g,y,$),o=setTimeout(()=>{o=null,g.style.height=0,f=_=>{h=null,(Object(_)!==_||_.target===g)&&E(g,"hide")},g.addEventListener("transitionend",f),h=setTimeout(f,e.duration*1.1)},100)}return Be(()=>{c===!0&&p()}),()=>b(Ae,{css:!1,appear:e.appear,onEnter:T,onLeave:K},i.default)}}),xt=["none","strict","leaf","leaf-filtered"],St=Y({name:"QTree",props:{...Pe,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>xt.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:{},noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:i,emit:a}){const{proxy:c}=ce(),{$q:t}=c,r=Fe(e,t),o=P({}),h=P(e.ticked||[]),f=P(e.expanded||[]);let d={};Ge(()=>{d={}});const p=C(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(r.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),q=C(()=>e.selected!==void 0),E=C(()=>e.icon||t.iconSet.tree.icon),T=C(()=>e.controlColor||e.color),K=C(()=>e.textColor!==void 0?` text-${e.textColor}`:""),g=C(()=>{const l=e.selectedColor||e.color;return l?` text-${l}`:""}),$=C(()=>e.filterMethod!==void 0?e.filterMethod:(l,u)=>{const n=u.toLowerCase();return l[e.labelKey]&&l[e.labelKey].toLowerCase().indexOf(n)!==-1}),y=C(()=>{const l={},u=(n,v)=>{const s=n.tickStrategy||(v?v.tickStrategy:e.tickStrategy),k=n[e.nodeKey],S=n[e.childrenKey]&&Array.isArray(n[e.childrenKey])&&n[e.childrenKey].length!==0,O=n.disabled!==!0&&q.value===!0&&n.selectable!==!1,B=n.disabled!==!0&&n.expandable!==!1,Ve=s!=="none",W=s==="strict",me=s==="leaf-filtered",ee=s==="leaf"||s==="leaf-filtered";let te=n.disabled!==!0&&n.tickable!==!1;ee===!0&&te===!0&&v&&v.tickable!==!0&&(te=!1);let D=n.lazy;D===!0&&o.value[k]!==void 0&&Array.isArray(n[e.childrenKey])===!0&&(D=o.value[k]);const m={key:k,parent:v,isParent:S,lazy:D,disabled:n.disabled,link:n.disabled!==!0&&(O===!0||B===!0&&(S===!0||D===!0)),children:[],matchesFilter:e.filter?$.value(n,e.filter):!0,selected:k===e.selected&&O===!0,selectable:O,expanded:S===!0?f.value.includes(k):!1,expandable:B,noTick:n.noTick===!0||W!==!0&&D&&D!=="loaded",tickable:te,tickStrategy:s,hasTicking:Ve,strictTicking:W,leafFilteredTicking:me,leafTicking:ee,ticked:W===!0?h.value.includes(k):S===!0?!1:h.value.includes(k)};if(l[k]=m,S===!0&&(m.children=n[e.childrenKey].map(w=>u(w,m)),e.filter&&(m.matchesFilter!==!0?m.matchesFilter=m.children.some(w=>w.matchesFilter):m.noTick!==!0&&m.disabled!==!0&&m.tickable===!0&&me===!0&&m.children.every(w=>w.matchesFilter!==!0||w.noTick===!0||w.tickable!==!0)===!0&&(m.tickable=!1)),m.matchesFilter===!0&&(m.noTick!==!0&&W!==!0&&m.children.every(w=>w.noTick)===!0&&(m.noTick=!0),ee))){if(m.ticked=!1,m.indeterminate=m.children.some(w=>w.indeterminate===!0),m.tickable=m.tickable===!0&&m.children.some(w=>w.tickable),m.indeterminate!==!0){const w=m.children.reduce((be,Ue)=>Ue.ticked===!0?be+1:be,0);w===m.children.length?m.ticked=!0:w>0&&(m.indeterminate=!0)}m.indeterminate===!0&&(m.indeterminateNextState=m.children.every(w=>w.tickable!==!0||w.ticked!==!0))}return m};return e.nodes.forEach(n=>u(n,null)),l});de(()=>e.ticked,l=>{h.value=l}),de(()=>e.expanded,l=>{f.value=l});function _(l){const u=[].reduce,n=(v,s)=>{if(v||!s)return v;if(Array.isArray(s)===!0)return u.call(Object(s),n,v);if(s[e.nodeKey]===l)return s;if(s[e.childrenKey])return n(null,s[e.childrenKey])};return n(null,e.nodes)}function x(){return h.value.map(l=>_(l))}function F(){return f.value.map(l=>_(l))}function A(l){return l&&y.value[l]?y.value[l].expanded:!1}function Q(){e.expanded!==void 0?a("update:expanded",[]):f.value=[]}function z(){const l=[],u=n=>{n[e.childrenKey]&&n[e.childrenKey].length!==0&&n.expandable!==!1&&n.disabled!==!0&&(l.push(n[e.nodeKey]),n[e.childrenKey].forEach(u))};e.nodes.forEach(u),e.expanded!==void 0?a("update:expanded",l):f.value=l}function j(l,u,n=_(l),v=y.value[l]){if(v.lazy&&v.lazy!=="loaded"){if(v.lazy==="loading")return;o.value[l]="loading",Array.isArray(n[e.childrenKey])!==!0&&(n[e.childrenKey]=[]),a("lazyLoad",{node:n,key:l,done:s=>{o.value[l]="loaded",n[e.childrenKey]=Array.isArray(s)===!0?s:[],We(()=>{const k=y.value[l];k&&k.isParent===!0&&X(l,!0)})},fail:()=>{delete o.value[l],n[e.childrenKey].length===0&&delete n[e.childrenKey]}})}else v.isParent===!0&&v.expandable===!0&&X(l,u)}function X(l,u){let n=f.value;const v=e.expanded!==void 0;if(v===!0&&(n=n.slice()),u){if(e.accordion&&y.value[l]){const s=[];y.value[l].parent?y.value[l].parent.children.forEach(k=>{k.key!==l&&k.expandable===!0&&s.push(k.key)}):e.nodes.forEach(k=>{const S=k[e.nodeKey];S!==l&&s.push(S)}),s.length!==0&&(n=n.filter(k=>s.includes(k)===!1))}n=n.concat([l]).filter((s,k,S)=>S.indexOf(s)===k)}else n=n.filter(s=>s!==l);v===!0?a("update:expanded",n):f.value=n}function Me(l){return l&&y.value[l]?y.value[l].ticked:!1}function G(l,u){let n=h.value;const v=e.ticked!==void 0;v===!0&&(n=n.slice()),u?n=n.concat(l).filter((s,k,S)=>S.indexOf(s)===k):n=n.filter(s=>l.includes(s)===!1),v===!0&&a("update:ticked",n)}function Le(l,u,n){const v={tree:c,node:l,key:n,color:e.color,dark:r.value};return ke(v,"expanded",()=>u.expanded,s=>{s!==u.expanded&&j(n,s)}),ke(v,"ticked",()=>u.ticked,s=>{s!==u.ticked&&G([n],s)}),v}function ve(l){return(e.filter?l.filter(u=>y.value[u[e.nodeKey]].matchesFilter):l).map(u=>je(u))}function Oe(l){if(l.icon!==void 0)return b(L,{class:"q-tree__icon q-mr-sm",name:l.icon,color:l.iconColor});const u=l.img||l.avatar;if(u)return b("img",{class:`q-tree__${l.img?"img":"avatar"} q-mr-sm`,src:u})}function De(){a("afterShow")}function Re(){a("afterHide")}function je(l){const u=l[e.nodeKey],n=y.value[u],v=l.header&&i[`header-${l.header}`]||i["default-header"],s=n.isParent===!0?ve(l[e.childrenKey]):[],k=s.length!==0||n.lazy&&n.lazy!=="loaded";let S=l.body&&i[`body-${l.body}`]||i["default-body"];const O=v!==void 0||S!==void 0?Le(l,n,u):null;return S!==void 0&&(S=b("div",{class:"q-tree__node-body relative-position"},[b("div",{class:K.value},[S(O)])])),b("div",{key:u,class:`q-tree__node relative-position q-tree__node--${k===!0?"parent":"child"}`},[b("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(n.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(n.selected===!0?" q-tree__node--selected":"")+(n.disabled===!0?" q-tree__node--disabled":""),tabindex:n.link===!0?0:-1,ariaExpanded:s.length>0?n.expanded:null,role:"treeitem",onClick:B=>{ye(l,n,B)},onKeypress(B){Je(B)!==!0&&(B.keyCode===13?ye(l,n,B,!0):B.keyCode===32&&Z(l,n,B,!0))}},[b("div",{class:"q-focus-helper",tabindex:-1,ref:B=>{d[n.key]=B}}),n.lazy==="loading"?b(ze,{class:"q-tree__spinner",color:T.value}):k===!0?b(L,{class:"q-tree__arrow"+(n.expanded===!0?" q-tree__arrow--rotate":""),name:E.value,onClick(B){Z(l,n,B)}}):null,n.hasTicking===!0&&n.noTick!==!0?b(Ze,{class:"q-tree__tickbox",modelValue:n.indeterminate===!0?null:n.ticked,color:T.value,dark:r.value,dense:!0,keepColor:!0,disable:n.tickable!==!0,onKeydown:se,"onUpdate:modelValue":B=>{Ie(n,B)}}):null,b("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(n.selected===!0?g.value:K.value)},[v?v(O):[Oe(l),b("div",l[e.labelKey])]])]),k===!0?e.noTransition===!0?n.expanded===!0?b("div",{class:"q-tree__node-collapsible"+K.value,key:`${u}__q`},[S,b("div",{class:"q-tree__children"+(n.disabled===!0?" q-tree__node--disabled":""),role:"group"},s)]):null:b(qt,{duration:e.duration,onShow:De,onHide:Re},()=>et(b("div",{class:"q-tree__node-collapsible"+K.value,key:`${u}__q`},[S,b("div",{class:"q-tree__children"+(n.disabled===!0?" q-tree__node--disabled":""),role:"group"},s)]),[[tt,n.expanded]])):S])}function ge(l){const u=d[l];u&&u.focus()}function ye(l,u,n,v){v!==!0&&u.selectable!==!1&&ge(u.key),q.value&&u.selectable?e.noSelectionUnset===!1?a("update:selected",u.key!==e.selected?u.key:null):u.key!==e.selected&&a("update:selected",u.key===void 0?null:u.key):Z(l,u,n,v),typeof l.handler=="function"&&l.handler(l)}function Z(l,u,n,v){n!==void 0&&se(n),v!==!0&&u.selectable!==!1&&ge(u.key),j(u.key,!u.expanded,l,u)}function Ie(l,u){if(l.indeterminate===!0&&(u=l.indeterminateNextState),l.strictTicking)G([l.key],u);else if(l.leafTicking){const n=[],v=s=>{s.isParent?(u!==!0&&s.noTick!==!0&&s.tickable===!0&&n.push(s.key),s.leafTicking===!0&&s.children.forEach(v)):s.noTick!==!0&&s.tickable===!0&&(s.leafFilteredTicking!==!0||s.matchesFilter===!0)&&n.push(s.key)};v(l),G(n,u)}}return e.defaultExpandAll===!0&&z(),Object.assign(c,{getNodeByKey:_,getTickedNodes:x,getExpandedNodes:F,isExpanded:A,collapseAll:Q,expandAll:z,setExpanded:j,isTicked:Me,setTicked:G}),()=>{const l=ve(e.nodes);return b("div",{class:p.value,role:"tree"},l.length===0?e.filter?e.noResultsLabel||t.lang.tree.noResults:e.noNodesLabel||t.lang.tree.noNodes:l)}}}),Te={threshold:0,root:null,rootMargin:"0px"};function Ee(e,i,a){let c,t,r;typeof a=="function"?(c=a,t=Te,r=i.cfg===void 0):(c=a.handler,t=Object.assign({},Te,a.cfg),r=i.cfg===void 0||nt(i.cfg,t)===!1),i.handler!==c&&(i.handler=c),r===!0&&(i.cfg=t,i.observer!==void 0&&i.observer.unobserve(e),i.observer=new IntersectionObserver(([o])=>{if(typeof i.handler=="function"){if(o.rootBounds===null&&document.body.contains(e)===!0){i.observer.unobserve(e),i.observer.observe(e);return}(i.handler(o,i.observer)===!1||i.once===!0&&o.isIntersecting===!0)&&Ne(e)}},t),i.observer.observe(e))}function Ne(e){const i=e.__qvisible;i!==void 0&&(i.observer!==void 0&&i.observer.unobserve(e),delete e.__qvisible)}const wt=$e({name:"intersection",mounted(e,{modifiers:i,value:a}){const c={once:i.once===!0};Ee(e,c,a),e.__qvisible=c},updated(e,i){const a=e.__qvisible;a!==void 0&&Ee(e,a,i.value)},beforeUnmount:Ne}),Ct=Y({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:i,emit:a}){const c=P(_e.value===!0?e.ssrPrerender:!1),t=C(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:f,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:f),r=C(()=>e.disable!==!0&&(_e.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),o=C(()=>[[wt,t.value,void 0,{once:e.once}]]),h=C(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function f(p){c.value!==p.isIntersecting&&(c.value=p.isIntersecting,e.onVisibility!==void 0&&a("visibility",c.value))}function d(){if(c.value===!0)return[b("div",{key:"content",style:h.value},fe(i.default))];if(i.hidden!==void 0)return[b("div",{key:"hidden",style:h.value},i.hidden())]}return()=>{const p=e.transition?[b(Ae,{name:"q-transition--"+e.transition},d)]:d();return Qe(e.tag,{class:"q-intersection"},p,"main",r.value,()=>o.value)}}}),Tt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Et=["wave","pulse","pulse-x","pulse-y","fade","blink","none"],Kt=Y({name:"QSkeleton",props:{...Pe,tag:{type:String,default:"div"},type:{type:String,validator:e=>Tt.includes(e),default:"rect"},animation:{type:String,validator:e=>Et.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:i}){const a=ce(),c=Fe(e,a.proxy.$q),t=C(()=>{const o=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:o[0],height:o[1]}}),r=C(()=>`q-skeleton q-skeleton--${c.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>b(e.tag,{class:r.value,style:t.value},fe(i.default))}});function $t(e,i,a){return a<=i?i:Math.min(a,Math.max(i,e))}const Ke=40,ae=20,Bt=Y({name:"QPullToRefresh",props:{color:String,bgColor:String,icon:String,noMouse:Boolean,disable:Boolean,scrollTarget:it},emits:["refresh"],setup(e,{slots:i,emit:a}){const{proxy:c}=ce(),{$q:t}=c,r=P("pull"),o=P(0),h=P(!1),f=P(-40),d=P(!1),p=P({}),q=C(()=>({opacity:o.value,transform:`translateY(${f.value}px) rotate(${o.value*360}deg)`})),E=C(()=>"q-pull-to-refresh__puller row flex-center"+(d.value===!0?" q-pull-to-refresh__puller--animating":"")+(e.bgColor!==void 0?` bg-${e.bgColor}`:""));function T(A){if(A.isFinal===!0){h.value===!0&&(h.value=!1,r.value==="pulled"?(r.value="refreshing",x({pos:ae}),$()):r.value==="pull"&&x({pos:-40,ratio:0}));return}if(d.value===!0||r.value==="refreshing")return!1;if(A.isFirst===!0){if(rt(y)!==0||A.direction!=="down")return h.value===!0&&(h.value=!1,r.value="pull",x({pos:-40,ratio:0})),!1;h.value=!0;const{top:j,left:X}=c.$el.getBoundingClientRect();p.value={top:j+"px",left:X+"px",width:window.getComputedStyle(c.$el).getPropertyValue("width")}}ue(A.evt);const Q=Math.min(140,Math.max(0,A.distance.y));f.value=Q-Ke,o.value=$t(Q/(ae+Ke),0,1);const z=f.value>ae?"pulled":"pull";r.value!==z&&(r.value=z)}const K=C(()=>{const A={down:!0};return e.noMouse!==!0&&(A.mouse=!0),[[pt,T,void 0,A]]}),g=C(()=>`q-pull-to-refresh__content${h.value===!0?" no-pointer-events":""}`);function $(){a("refresh",()=>{x({pos:-40,ratio:0},()=>{r.value="pull"})})}let y,_=null;function x({pos:A,ratio:Q},z){d.value=!0,f.value=A,Q!==void 0&&(o.value=Q),_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,d.value=!1,z&&z()},300)}function F(){y=at(c.$el,e.scrollTarget)}return de(()=>e.scrollTarget,F),lt(F),Be(()=>{_!==null&&clearTimeout(_)}),Object.assign(c,{trigger:$,updateScrollTarget:F}),()=>{const A=[b("div",{class:g.value},fe(i.default)),b("div",{class:"q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top",style:p.value},[b("div",{class:E.value,style:q.value},[r.value!=="refreshing"?b(L,{name:e.icon||t.iconSet.pullToRefresh.icon,color:e.color,size:"32px"}):b(ze,{size:"24px",color:e.color})])])];return Qe("div",{class:"q-pull-to-refresh"},A,"main",e.disable===!1,()=>K.value)}}}),At={class:"q-pa-md"},Pt={class:"row no-wrap justify-between full-width"},Ft={class:"row no-wrap ellipsis line items-center full-width"},zt={class:"full-width"},Qt={class:"row no-wrap justify-between gap-2 full-width"},Nt=["onClick"],Mt={class:"flex-1"},Lt={key:1},jt=ut({__name:"MenuView",setup(e){const i=ot(),{setActiveNode:a,setSelectedNode:c}=gt(),{tree:t,loadingTree:r,expandedNodes:o}=st(pe()),{setTree:h,setExpanded:f}=pe(),{navigate:d}=yt(),p=dt("pageTitle");p.value="Text Book";const q=P(""),E=C({get:()=>o,set:y=>f(y)}),T=async y=>{y(),await h(1e3)},K=async y=>{a(y),await d("active")},g=async y=>{c(y),await d("folder")},$=async y=>{c(y),await d("file")};return(y,_)=>(N(),V(Bt,{onRefresh:T,"bg-color":H(i).dark.isActive?"dark":"white",class:"absolute-full md:relative"},{default:U(()=>[M("div",At,[R(ct,{dense:"",filled:"",modelValue:q.value,"onUpdate:modelValue":_[1]||(_[1]=x=>q.value=x),label:"Search",class:"q-my-md"},{append:U(()=>[q.value===""?(N(),V(L,{key:0,name:"search"})):(N(),V(L,{key:1,name:"clear",class:"cursor-pointer",onClick:_[0]||(_[0]=x=>q.value="")}))]),_:1},8,["modelValue"]),H(r)?(N(),Se("div",Lt,[(N(!0),Se(ht,null,vt(H(t).length,x=>(N(),V(Kt,{key:x,height:"30px",type:"rect",class:"q-my-md q-mx-sm"}))),128))])):(N(),V(Ct,{key:0,transition:"jump-down",class:"example-item","transition-duration":700},{default:U(()=>[R(St,ft({class:{"text-center":H(t).length===0}},{"no-nodes-label":"No files found",class:"text-body1",nodes:H(t),"node-key":"key",filter:q.value,expanded:E.value.value,"onUpdate:expanded":_[2]||(_[2]=x=>E.value.value=x)}),{"header-folder":U(x=>[M("div",Pt,[M("div",Ft,[R(L,{class:"q-mr-sm text-blue-8",name:"room_service"}),M("div",zt,qe(x.node.label),1)]),R(xe,{flat:"",dense:"",color:"primary",icon:"edit",onClick:F=>g(x.node)},null,8,["onClick"])])]),"header-file":U(x=>[M("div",Qt,[M("div",{class:"row no-wrap ellipsis items-center full-width",onClick:F=>K(x.node)},[R(L,{size:"20px",class:"q-mr-xs text-blue-8",name:"restaurant_menu"}),M("div",Mt,qe(x.node.label.split(".")[0]),1)],8,Nt),R(xe,{flat:"",dense:"",color:"primary",icon:"edit",onClick:F=>$(x.node)},null,8,["onClick"])])]),_:1},16,["nodes","filter","expanded"])]),_:1}))])]),_:1},8,["bg-color"]))}});export{pt as T,jt as _};
