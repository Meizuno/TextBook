import{c as M,a as c,h as x,b as U,r as C,i as xe,o as ne,d as K,n as He,e as qe,g as O,l as Ce,f as fe,j as H,k as ve,w as A,m as it,p as he,q as ut,t as Me,s as st,R as ct,u as dt,v as ft,x as vt,Q as de,y as me,z as _e,A as Be,B as ht,C as mt,D as bt,E as gt,F as yt,G as wt,H as Te,I as se,J as _t,K as Tt,L as qt,M as Ct,N as Ee,O as Oe,P as J,S as xt,T as L,U as Q,V as W,W as Y,X as B,Y as Ae,Z as St,_ as pt,$ as ee,a0 as $t,a1 as zt,a2 as kt,a3 as Lt}from"./index-DX8uY9mq.js";import{u as Vt,a as Pt}from"./useNavigation-C3UzanF8.js";import{T as Rt,_ as Bt}from"./MenuView.vue_vue_type_script_setup_true_lang-CU772JsI.js";import{_ as At}from"./SelectedView.vue_vue_type_script_setup_true_lang-BXoyl8g2.js";import{_ as It}from"./FolderView.vue_vue_type_script_setup_true_lang-KBWt8HZk.js";import{_ as Qt}from"./SettingsView.vue_vue_type_script_setup_true_lang-CYqmJY47.js";import{_ as Dt}from"./FileView.vue_vue_type_script_setup_true_lang-CK_qWNMP.js";import{u as Ie}from"./node-Dj2dA3pr.js";import{u as Ft}from"./vue-i18n-DJzI2gw9.js";import"./github-markdown-BQ9O_dh8.js";import"./NameInput.vue_vue_type_script_setup_true_lang-CYewvI4w.js";const Ht=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const o=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>x("div",{class:o.value},U(d.default))}}),Mt=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const o=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>x("div",{class:o.value,role:"toolbar"},U(d.default))}});function Et(){const e=C(!xe.value);return e.value===!1&&ne(()=>{e.value=!0}),{isHydrated:e}}const Ne=typeof ResizeObserver<"u",Qe=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},le=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let o=null,a,t={width:-1,height:-1};function f(h){h===!0||e.debounce===0||e.debounce==="0"?v():o===null&&(o=setTimeout(v,e.debounce))}function v(){if(o!==null&&(clearTimeout(o),o=null),a){const{offsetWidth:h,offsetHeight:i}=a;(h!==t.width||i!==t.height)&&(t={width:h,height:i},d("resize",t))}}const{proxy:p}=O();if(p.trigger=f,Ne===!0){let h;const i=g=>{a=p.$el.parentNode,a?(h=new ResizeObserver(f),h.observe(a),v()):g!==!0&&qe(()=>{i(!0)})};return ne(()=>{i()}),K(()=>{o!==null&&clearTimeout(o),h!==void 0&&(h.disconnect!==void 0?h.disconnect():a&&h.unobserve(a))}),He}else{let h=function(){o!==null&&(clearTimeout(o),o=null),q!==void 0&&(q.removeEventListener!==void 0&&q.removeEventListener("resize",f,Ce.passive),q=void 0)},i=function(){h(),a&&a.contentDocument&&(q=a.contentDocument.defaultView,q.addEventListener("resize",f,Ce.passive),v())};const{isHydrated:g}=Et();let q;return ne(()=>{qe(()=>{a=p.$el,a&&i()})}),K(h),()=>{if(g.value===!0)return x("object",{class:"q--avoid-card-border",style:Qe.style,tabindex:-1,type:"text/html",data:Qe.url,"aria-hidden":"true",onLoad:i})}}}}),Ot=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:o}){const{proxy:{$q:a}}=O(),t=fe(ve,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const f=C(parseInt(e.heightHint,10)),v=C(!0),p=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||a.platform.is.ios&&t.isContainer.value===!0),h=c(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return v.value===!0?f.value:0;const u=f.value-t.scroll.value.position;return u>0?u:0}),i=c(()=>e.modelValue!==!0||p.value===!0&&v.value!==!0),g=c(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),q=c(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=c(()=>{const u=t.rows.value.top,b={};return u[0]==="l"&&t.left.space===!0&&(b[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(b[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function m(u,b){t.update("header",u,b)}function T(u,b){u.value!==b&&(u.value=b)}function z({height:u}){T(f,u),m("size",u)}function I(u){g.value===!0&&T(v,!0),o("focusin",u)}A(()=>e.modelValue,u=>{m("space",u),T(v,!0),t.animate()}),A(h,u=>{m("offset",u)}),A(()=>e.reveal,u=>{u===!1&&T(v,e.modelValue)}),A(v,u=>{t.animate(),o("reveal",u)}),A(t.scroll,u=>{e.reveal===!0&&T(v,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const V={};return t.instances.header=V,e.modelValue===!0&&m("size",f.value),m("space",e.modelValue),m("offset",h.value),K(()=>{t.instances.header===V&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=it(d.default,[]);return e.elevated===!0&&u.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(x(le,{debounce:0,onResize:z})),x("header",{class:q.value,style:y.value,onFocusin:I},u)}}}),De=M({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:o}}=O(),a=fe(ve,H);if(a===H)return console.error("QPageContainer needs to be child of QLayout"),H;he(ut,!0);const t=c(()=>{const f={};return a.header.space===!0&&(f.paddingTop=`${a.header.size}px`),a.right.space===!0&&(f[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(f.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(f[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),f});return()=>x("div",{class:"q-page-container",style:t.value},U(d.default))}});let Nt=0;const jt=["click","keydown"],Wt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Nt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ut(e,d,o,a){const t=fe(Me,H);if(t===H)return console.error("QTab/QRouteTab component needs to be child of QTabs"),H;const{proxy:f}=O(),v=C(null),p=C(null),h=C(null),i=c(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),g=c(()=>t.currentModel.value===e.name),q=c(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(g.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),y=c(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=c(()=>e.disable===!0||t.hasFocus.value===!0||g.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function T(b,s){if(s!==!0&&v.value!==null&&v.value.focus(),e.disable!==!0){t.updateModel({name:e.name}),o("click",b);return}}function z(b){dt(b,[13,32])?T(b,!0):ft(b)!==!0&&b.keyCode>=35&&b.keyCode<=40&&b.altKey!==!0&&b.metaKey!==!0&&t.onKbdNavigate(b.keyCode,f.$el)===!0&&vt(b),o("keydown",b)}function I(){const b=t.tabProps.value.narrowIndicator,s=[],l=x("div",{ref:h,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&s.push(x(de,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&s.push(x("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&s.push(e.alertIcon!==void 0?x(de,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):x("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),b===!0&&s.push(l);const w=[x("div",{class:"q-focus-helper",tabindex:-1,ref:v}),x("div",{class:y.value},me(d.default,s))];return b===!1&&w.push(l),w}const V={name:c(()=>e.name),rootRef:p,tabIndicatorRef:h,routeData:a};K(()=>{t.unregisterTab(V)}),ne(()=>{t.registerTab(V)});function u(b,s){const l={ref:p,class:q.value,tabindex:m.value,role:"tab","aria-selected":g.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:T,onKeydown:z,...s};return st(x(b,l,I()),[[ct,i.value]])}return{renderTab:u,$tabs:t}}const te=M({name:"QTab",props:Wt,emits:jt,setup(e,{slots:d,emit:o}){const{renderTab:a}=Ut(e,d,o);return()=>a("div")}});let je=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const d=document.createElement("div");Object.assign(d.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(d),e.scrollLeft=-1e3,je=e.scrollLeft>=0,e.remove()}function Kt(e,d,o){const a=o===!0?["left","right"]:["top","bottom"];return`absolute-${d===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const Xt=["left","center","right","justify"],Gt=M({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Xt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:d,emit:o}){const{proxy:a}=O(),{$q:t}=a,{registerTick:f}=_e(),{registerTick:v}=_e(),{registerTick:p}=_e(),{registerTimeout:h,removeTimeout:i}=Be(),{registerTimeout:g,removeTimeout:q}=Be(),y=C(null),m=C(null),T=C(e.modelValue),z=C(!1),I=C(!0),V=C(!1),u=C(!1),b=[],s=C(0),l=C(!1);let w=null,k=null,F;const ae=c(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Kt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),We=c(()=>{const n=s.value,r=T.value;for(let _=0;_<n;_++)if(b[_].name.value===r)return!0;return!1}),Ue=c(()=>`q-tabs__content--align-${z.value===!0?"left":u.value===!0?"justify":e.align}`),Ke=c(()=>`q-tabs row no-wrap items-center q-tabs--${z.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Xe=c(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ue.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),oe=c(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),re=c(()=>e.vertical!==!0&&t.lang.rtl===!0),be=c(()=>je===!1&&re.value===!0);A(re,G),A(()=>e.modelValue,n=>{ge({name:n,setCurrent:!0,skipEmit:!0})}),A(()=>e.outsideArrows,ie);function ge({name:n,setCurrent:r,skipEmit:_}){T.value!==n&&(_!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",n),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Ge(T.value,n),T.value=n))}function ie(){f(()=>{y.value&&Se({width:y.value.offsetWidth,height:y.value.offsetHeight})})}function Se(n){if(oe.value===void 0||m.value===null)return;const r=n[oe.value.container],_=Math.min(m.value[oe.value.scroll],Array.prototype.reduce.call(m.value.children,(R,$)=>R+($[oe.value.content]||0),0)),P=r>0&&_>r;z.value=P,P===!0&&v(G),u.value=r<parseInt(e.breakpoint,10)}function Ge(n,r){const _=n!=null&&n!==""?b.find(R=>R.name.value===n):null,P=r!=null&&r!==""?b.find(R=>R.name.value===r):null;if(ue===!0)ue=!1;else if(_&&P){const R=_.tabIndicatorRef.value,$=P.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),R.style.transition="none",R.style.transform="none",$.style.transition="none",$.style.transform="none";const S=R.getBoundingClientRect(),D=$.getBoundingClientRect();$.style.transform=e.vertical===!0?`translate3d(0,${S.top-D.top}px,0) scale3d(1,${D.height?S.height/D.height:1},1)`:`translate3d(${S.left-D.left}px,0,0) scale3d(${D.width?S.width/D.width:1},1,1)`,p(()=>{w=setTimeout(()=>{w=null,$.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",$.style.transform="none"},70)})}P&&z.value===!0&&X(P.rootRef.value)}function X(n){const{left:r,width:_,top:P,height:R}=m.value.getBoundingClientRect(),$=n.getBoundingClientRect();let S=e.vertical===!0?$.top-P:$.left-r;if(S<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(S),G();return}S+=e.vertical===!0?$.height-R:$.width-_,S>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(S),G())}function G(){const n=m.value;if(n===null)return;const r=n.getBoundingClientRect(),_=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);re.value===!0?(I.value=Math.ceil(_+r.width)<n.scrollWidth-1,V.value=_>0):(I.value=_>0,V.value=e.vertical===!0?Math.ceil(_+r.height)<n.scrollHeight:Math.ceil(_+r.width)<n.scrollWidth)}function pe(n){k!==null&&clearInterval(k),k=setInterval(()=>{Ze(n)===!0&&N()},5)}function $e(){pe(be.value===!0?Number.MAX_SAFE_INTEGER:0)}function ze(){pe(be.value===!0?0:Number.MAX_SAFE_INTEGER)}function N(){k!==null&&(clearInterval(k),k=null)}function Je(n,r){const _=Array.prototype.filter.call(m.value.children,D=>D===r||D.matches&&D.matches(".q-tab.q-focusable")===!0),P=_.length;if(P===0)return;if(n===36)return X(_[0]),_[0].focus(),!0;if(n===35)return X(_[P-1]),_[P-1].focus(),!0;const R=n===(e.vertical===!0?38:37),$=n===(e.vertical===!0?40:39),S=R===!0?-1:$===!0?1:void 0;if(S!==void 0){const D=re.value===!0?-1:1,E=_.indexOf(r)+S*D;return E>=0&&E<P&&(X(_[E]),_[E].focus({preventScroll:!0})),!0}}const Ye=c(()=>be.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,r)=>{n.scrollLeft=-r}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,r)=>{n.scrollTop=r}}:{get:n=>n.scrollLeft,set:(n,r)=>{n.scrollLeft=r}});function Ze(n){const r=m.value,{get:_,set:P}=Ye.value;let R=!1,$=_(r);const S=n<$?-1:1;return $+=S*5,$<0?(R=!0,$=0):(S===-1&&$<=n||S===1&&$>=n)&&(R=!0,$=n),P(r,$),G(),R}function ke(n,r){for(const _ in n)if(n[_]!==r[_])return!1;return!0}function et(){let n=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const _=b.filter(S=>S.routeData!==void 0&&S.routeData.hasRouterLink.value===!0),{hash:P,query:R}=a.$route,$=Object.keys(R).length;for(const S of _){const D=S.routeData.exact.value===!0;if(S.routeData[D===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:E,query:ye,matched:ot,href:rt}=S.routeData.resolvedLink.value,we=Object.keys(ye).length;if(D===!0){if(E!==P||we!==$||ke(R,ye)===!1)continue;n=S.name.value;break}if(E!==""&&E!==P||we!==0&&ke(ye,R)===!1)continue;const j={matchedLen:ot.length,queryDiff:$-we,hrefLen:rt.length-E.length};if(j.matchedLen>r.matchedLen){n=S.name.value,r=j;continue}else if(j.matchedLen!==r.matchedLen)continue;if(j.queryDiff<r.queryDiff)n=S.name.value,r=j;else if(j.queryDiff!==r.queryDiff)continue;j.hrefLen>r.hrefLen&&(n=S.name.value,r=j)}if(n===null&&b.some(S=>S.routeData===void 0&&S.name.value===T.value)===!0){ue=!1;return}ge({name:n,setCurrent:!0})}function tt(n){if(i(),l.value!==!0&&y.value!==null&&n.target&&typeof n.target.closest=="function"){const r=n.target.closest(".q-tab");r&&y.value.contains(r)===!0&&(l.value=!0,z.value===!0&&X(r))}}function nt(){h(()=>{l.value=!1},30)}function Z(){Ve.avoidRouteWatcher===!1?g(et):q()}function Le(){if(F===void 0){const n=A(()=>a.$route.fullPath,Z);F=()=>{n(),F=void 0}}}function lt(n){b.push(n),s.value++,ie(),n.routeData===void 0||a.$route===void 0?g(()=>{if(z.value===!0){const r=T.value,_=r!=null&&r!==""?b.find(P=>P.name.value===r):null;_&&X(_.rootRef.value)}}):(Le(),n.routeData.hasRouterLink.value===!0&&Z())}function at(n){b.splice(b.indexOf(n),1),s.value--,ie(),F!==void 0&&n.routeData!==void 0&&(b.every(r=>r.routeData===void 0)===!0&&F(),Z())}const Ve={currentModel:T,tabProps:ae,hasFocus:l,hasActiveTab:We,registerTab:lt,unregisterTab:at,verifyRouteModel:Z,updateModel:ge,onKbdNavigate:Je,avoidRouteWatcher:!1};he(Me,Ve);function Pe(){w!==null&&clearTimeout(w),N(),F!==void 0&&F()}let Re,ue;return K(Pe),ht(()=>{Re=F!==void 0,Pe()}),mt(()=>{Re===!0&&(Le(),ue=!0,Z()),ie()}),()=>x("div",{ref:y,class:Ke.value,role:"tablist",onFocusin:tt,onFocusout:nt},[x(le,{onResize:Se}),x("div",{ref:m,class:Xe.value,onScroll:G},U(d.default)),x(de,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:$e,onTouchstartPassive:$e,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N}),x(de,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ze,onTouchstartPassive:ze,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N})])}}),Jt=M({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:o}){const{proxy:{$q:a}}=O(),t=fe(ve,H);if(t===H)return console.error("QFooter needs to be child of QLayout"),H;const f=C(parseInt(e.heightHint,10)),v=C(!0),p=C(xe.value===!0||t.isContainer.value===!0?0:window.innerHeight),h=c(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||a.platform.is.ios&&t.isContainer.value===!0),i=c(()=>t.isContainer.value===!0?t.containerHeight.value:p.value),g=c(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return v.value===!0?f.value:0;const l=t.scroll.value.position+i.value+f.value-t.height.value;return l>0?l:0}),q=c(()=>e.modelValue!==!0||h.value===!0&&v.value!==!0),y=c(()=>e.modelValue===!0&&q.value===!0&&e.reveal===!0),m=c(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(q.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),T=c(()=>{const l=t.rows.value.bottom,w={};return l[0]==="l"&&t.left.space===!0&&(w[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(w[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),w});function z(l,w){t.update("footer",l,w)}function I(l,w){l.value!==w&&(l.value=w)}function V({height:l}){I(f,l),z("size",l)}function u(){if(e.reveal!==!0)return;const{direction:l,position:w,inflectionPoint:k}=t.scroll.value;I(v,l==="up"||w-k<100||t.height.value-i.value-w-f.value<300)}function b(l){y.value===!0&&I(v,!0),o("focusin",l)}A(()=>e.modelValue,l=>{z("space",l),I(v,!0),t.animate()}),A(g,l=>{z("offset",l)}),A(()=>e.reveal,l=>{l===!1&&I(v,e.modelValue)}),A(v,l=>{t.animate(),o("reveal",l)}),A([f,t.scroll,t.height],u),A(()=>a.screen.height,l=>{t.isContainer.value!==!0&&I(p,l)});const s={};return t.instances.footer=s,e.modelValue===!0&&z("size",f.value),z("space",e.modelValue),z("offset",g.value),K(()=>{t.instances.footer===s&&(t.instances.footer=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const l=me(d.default,[x(le,{debounce:0,onResize:V})]);return e.elevated===!0&&l.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),x("footer",{class:m.value,style:T.value,onFocusin:b},l)}}}),{passive:Fe}=Ce,Yt=["both","horizontal","vertical"],Zt=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Yt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:bt},emits:["scroll"],setup(e,{emit:d}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,f;A(()=>e.scrollTarget,()=>{h(),p()});function v(){a!==null&&a();const q=Math.max(0,yt(t)),y=wt(t),m={top:q-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const T=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:q,left:y},o.directionChanged=o.direction!==T,o.delta=m,o.directionChanged===!0&&(o.direction=T,o.inflectionPoint=o.position),d("scroll",{...o})}function p(){t=gt(f,e.scrollTarget),t.addEventListener("scroll",i,Fe),i(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",i,Fe),t=void 0)}function i(q){if(q===!0||e.debounce===0||e.debounce==="0")v();else if(a===null){const[y,m]=e.debounce?[setTimeout(v,e.debounce),clearTimeout]:[requestAnimationFrame(v),cancelAnimationFrame];a=()=>{m(y),a=null}}}const{proxy:g}=O();return A(()=>g.$q.lang.rtl,v),ne(()=>{f=g.$el.parentNode,p()}),K(()=>{a!==null&&a(),h()}),Object.assign(g,{trigger:i,getPosition:()=>o}),He}}),en=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:o}){const{proxy:{$q:a}}=O(),t=C(null),f=C(a.screen.height),v=C(e.container===!0?0:a.screen.width),p=C({position:0,direction:"down",inflectionPoint:0}),h=C(0),i=C(xe.value===!0?0:Te()),g=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=c(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),y=c(()=>i.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),m=c(()=>i.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function T(s){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};p.value=l,e.onScroll!==void 0&&o("scroll",l)}}function z(s){const{height:l,width:w}=s;let k=!1;f.value!==l&&(k=!0,f.value=l,e.onScrollHeight!==void 0&&o("scrollHeight",l),V()),v.value!==w&&(k=!0,v.value=w),k===!0&&e.onResize!==void 0&&o("resize",s)}function I({height:s}){h.value!==s&&(h.value=s,V())}function V(){if(e.container===!0){const s=f.value>h.value?Te():0;i.value!==s&&(i.value=s)}}let u=null;const b={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:f,containerHeight:h,scrollbarWidth:i,totalWidth:c(()=>v.value+i.value),rows:c(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:se({size:0,offset:0,space:!1}),right:se({size:300,offset:0,space:!1}),footer:se({size:0,offset:0,space:!1}),left:se({size:300,offset:0,space:!1}),scroll:p,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,l,w){b[s][l]=w}};if(he(ve,b),Te()>0){let s=function(){k=null,F.classList.remove("hide-scrollbar")},l=function(){if(k===null){if(F.scrollHeight>a.screen.height)return;F.classList.add("hide-scrollbar")}else clearTimeout(k);k=setTimeout(s,300)},w=function(ae){k!==null&&ae==="remove"&&(clearTimeout(k),s()),window[`${ae}EventListener`]("resize",l)},k=null;const F=document.body;A(()=>e.container!==!0?"add":"remove",w),e.container!==!0&&w("add"),_t(()=>{w("remove")})}return()=>{const s=me(d.default,[x(Zt,{onScroll:T}),x(le,{onResize:z})]),l=x("div",{class:g.value,style:q.value,ref:e.container===!0?void 0:t,tabindex:-1},s);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(le,{onResize:I}),x("div",{class:"absolute-full",style:y.value},[x("div",{class:"scroll",style:m.value},[l])])]):l}}}),ce=M({name:"QSplitter",props:{...Tt,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:d,emit:o}){const{proxy:{$q:a}}=O(),t=qt(e,a),f=C(null),v={before:C(null),after:C(null)},p=c(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(t.value===!0?" q-splitter--dark":"")),h=c(()=>e.horizontal===!0?"height":"width"),i=c(()=>e.reverse!==!0?"before":"after"),g=c(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function q(l){return(e.unit==="%"?l:Math.round(l))+e.unit}const y=c(()=>({[i.value]:{[h.value]:q(e.modelValue)}}));let m,T,z,I,V;function u(l){if(l.isFirst===!0){const k=f.value.getBoundingClientRect()[h.value];m=e.horizontal===!0?"up":"left",T=e.unit==="%"?100:k,z=Math.min(T,g.value[1],Math.max(g.value[0],e.modelValue)),I=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:a.lang.rtl===!0?-1:1)*(e.unit==="%"?k===0?0:100/k:1),f.value.classList.add("q-splitter--active");return}if(l.isFinal===!0){V!==e.modelValue&&o("update:modelValue",V),f.value.classList.remove("q-splitter--active");return}const w=z+I*(l.direction===m?-1:1)*l.distance[e.horizontal===!0?"y":"x"];V=Math.min(T,g.value[1],Math.max(g.value[0],w)),v[i.value].value.style[h.value]=q(V),e.emitImmediately===!0&&e.modelValue!==V&&o("update:modelValue",V)}const b=c(()=>[[Rt,u,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function s(l,w){l<w[0]?o("update:modelValue",w[0]):l>w[1]&&o("update:modelValue",w[1])}return A(()=>e.modelValue,l=>{s(l,g.value)}),A(()=>e.limits,()=>{qe(()=>{s(e.modelValue,g.value)})}),()=>{const l=[x("div",{ref:v.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:y.value.before},U(d.before)),x("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[Ct("div",{class:"q-splitter__separator-area absolute-full"},U(d.separator),"sep",e.disable!==!0,()=>b.value)]),x("div",{ref:v.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:y.value.after},U(d.after))];return x("div",{class:p.value,ref:f},me(d.default,l))}}}),tn={class:"h-full p-4"},nn={class:"layout text-lg text-center py-2 shadow-3 m-2"},ln={class:"layout text-lg text-center py-2 shadow-3 mb-2 m-2"},an={class:"layout text-lg flex justify-between items-center p-2 shadow-3 m-2"},on={class:"layout text-lg flex justify-between items-center p-2 shadow-3 m-2"},rn={class:"layout text-lg text-center py-2 m-2 shadow-3 m-2"},un=Ee({__name:"DesktopPage",setup(e){const{t:d}=Ft(),{selectedNode:o}=Oe(Ie()),{unselectNode:a}=Ie(),t=C(30),f=C(60),v=C(33),p=C(55);return(h,i)=>(J(),xt("div",tn,[L(ce,{modelValue:t.value,"onUpdate:modelValue":i[5]||(i[5]=g=>t.value=g),class:"h-full shadow-3"},{before:Q(()=>[W("div",nn,Y(B(d)("desktop.navigation")),1),L(Bt)]),after:Q(()=>[L(ce,{modelValue:f.value,"onUpdate:modelValue":i[4]||(i[4]=g=>f.value=g),class:"h-full"},{before:Q(()=>[W("div",ln,Y(B(d)("desktop.selectedFile")),1),L(At,{class:"h-96"})]),after:Q(()=>[L(ce,{modelValue:v.value,"onUpdate:modelValue":i[3]||(i[3]=g=>v.value=g),horizontal:"",class:"h-full"},{before:Q(()=>[W("div",an,[W("div",null,Y(B(o).type==="directory"?B(d)("desktop.editFolder"):B(d)("desktop.createFolder")),1),L(Ae,{disable:B(o)===null,flat:"",color:"primary",onClick:i[0]||(i[0]=g=>B(a)()),label:B(d)("desktop.unselect")},null,8,["disable","label"])]),L(It)]),after:Q(()=>[L(ce,{modelValue:p.value,"onUpdate:modelValue":i[2]||(i[2]=g=>p.value=g),horizontal:""},{before:Q(()=>[W("div",null,[W("div",on,[W("div",null,Y(B(o).type==="file"?B(d)("desktop.editFile"):B(d)("desktop.createFile")),1),L(Ae,{disable:B(o)===null,flat:"",color:"primary",onClick:i[1]||(i[1]=g=>B(a)()),label:B(d)("desktop.unselect")},null,8,["disable","label"])]),L(Dt)])]),after:Q(()=>[W("div",rn,Y(B(d)("desktop.settings")),1),L(Qt)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}}),_n=Ee({__name:"MainLayout",setup(e){const d=St(),o=C(d.name);A(()=>d.name,q=>{o.value=q});const{transitionName:a}=Oe(Vt()),{navigate:t,swipeRight:f,swipeLeft:v}=Pt(),p=C("Text Book");he("pageTitle",p);const h=C(0),i=q=>{h.value=q.changedTouches[0]?.screenX||0},g=async q=>{const y=q.changedTouches[0]?.screenX||0,m=100;h.value-y>m?await v():y-h.value>m&&await f()};return(q,y)=>{const m=pt("router-view");return J(),ee(en,{view:"hHh Lpr lFf"},{default:Q(()=>[L(Ot,{elevated:"",class:"layout"},{default:Q(()=>[L(Mt,null,{default:Q(()=>[L(Ht,{class:"text-center"},{default:Q(()=>[$t(Y(p.value),1)]),_:1})]),_:1})]),_:1}),q.$q.screen.lt.lg?(J(),ee(De,{key:0},{default:Q(()=>[L(m,null,{default:Q(({Component:T})=>[L(zt,{name:B(a),mode:"out-in"},{default:Q(()=>[(J(),ee(kt(T),{onTouchstart:i,onTouchend:g},null,32))]),_:2},1032,["name"])]),_:1})]),_:1})):(J(),ee(De,{key:1,class:"absolute-full"},{default:Q(()=>[L(un)]),_:1})),q.$q.screen.lt.lg?(J(),ee(Jt,{key:2,elevated:"",class:"layout"},{default:Q(()=>[L(Gt,{"no-caps":"",modelValue:o.value,"onUpdate:modelValue":y[5]||(y[5]=T=>o.value=T),"active-color":"primary","indicator-color":"transparent"},{default:Q(()=>[L(te,{name:"home",icon:"home",onClick:y[0]||(y[0]=T=>B(t)("home"))}),L(te,{name:"active",icon:"visibility",onClick:y[1]||(y[1]=T=>B(t)("active"))}),L(te,{name:"folder",icon:"create_new_folder",onClick:y[2]||(y[2]=T=>B(t)("folder"))}),L(te,{name:"file",icon:"note_add",onClick:y[3]||(y[3]=T=>B(t)("file"))}),L(te,{name:"settings",icon:"tune",onClick:y[4]||(y[4]=T=>B(t)("settings"))})]),_:1},8,["modelValue"])]),_:1})):Lt("",!0)]),_:1})}}});export{_n as default};
