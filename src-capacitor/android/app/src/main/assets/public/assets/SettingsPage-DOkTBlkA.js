import{c as x,Z as q,_ as U,a as y,h as i,b as p,g as S,at as _,r as A,K as B,a4 as C,a6 as N,M as m,aw as w,O as $,P as D,S as g,aa as e,T as v,ac as b,ax as L,af as d,ab as P,X as h}from"./index-B2sqISku.js";import{Q}from"./QPage-DP0ickp0.js";import{m as R}from"./github-markdown-BQ9O_dh8.js";const T=x({name:"QBanner",props:{...q,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(s,{slots:r}){const{proxy:{$q:c}}=S(),u=U(s,c),a=y(()=>"q-banner row items-center"+(s.dense===!0?" q-banner--dense":"")+(u.value===!0?" q-banner--dark q-dark":"")+(s.rounded===!0?" rounded-borders":"")),f=y(()=>`q-banner__actions row items-center justify-end col-${s.inlineActions===!0?"auto":"all"}`);return()=>{const l=[i("div",{class:"q-banner__avatar col-auto row items-center self-start"},p(r.avatar)),i("div",{class:"q-banner__content col text-body2"},p(r.default))],o=p(r.action);return o!==void 0&&l.push(i("div",{class:f.value},o)),i("div",{class:a.value+(s.inlineActions===!1&&o!==void 0?" q-banner--top-padding":""),role:"alert"},l)}}}),j=_("network",()=>({network:A({connected:!0,connectedType:"wifi"})})),V=`### Server should have 2 endpoints

- Download data

  \`\`\`
  GET /
  \`\`\`

  - with parameters **\`null\`**
  - with response data **\`UploadNode[]\`**

- Upload data

  \`\`\`
  POST /files
  \`\`\`

  - with body **\`UploadNode[]\`**
  - with response data **\`null\`**

### Schema

\`\`\`typescript
interface UploadNode {
    label: string;
    path: string;
    children?: UploadNode[] | null;
    content: string;
    type: string = 'file' | "directory";
}
\`\`\`
`,z={class:"q-mb-lg"},I={class:"row items-center w-full"},M={class:"flex-1 row justify-start items-center"},O={class:"text-ellipsis overflow-x-hidden"},F={class:"flex justify-between px-1"},X=B({__name:"SettingsPage",setup(s){const r=C(),{error:c}=N(),{storeUrl:u}=m(w()),{setStoreUrl:a}=w(),{network:f}=m(j()),l=t=>{try{return new URL(t),!0}catch{return!1}},o=async()=>{r.dialog({message:await R(V),class:"markdown-body",html:!0})},k=()=>{r.dialog({title:"Store URL",message:"Please enter the store URL to your server with files.",cancel:!0,persistent:!0,prompt:{model:"",type:"text"}}).onOk(t=>{t?l(t)?a(t).catch(()=>{console.error("Failed to reset storeUrl")}):c("Invalid URL!"):a("").catch(()=>{console.error("Failed to reset storeUrl")})})};return(t,n)=>($(),D(Q,{class:"q-px-md q-py-lg"},{default:g(()=>[e("div",z,[n[1]||(n[1]=e("div",{class:"px-2 text-grey-7"},"Advanced",-1)),v(b,{class:"w-full rounded-lg",disable:!h(f).connected,color:t.$q.dark.isActive?"grey-9":"grey-1","text-color":t.$q.dark.isActive?"grey-1":"grey-9",padding:"sm","no-caps":"",onClick:k},{default:g(()=>[e("div",I,[e("div",M,[n[0]||(n[0]=e("div",null,"Store URL",-1)),v(b,{onClick:L(o,["stop"]),flat:"",icon:"help_outline",color:"grey-7",round:"",size:"sm"})]),v(T,{dense:"",rounded:"",class:d(["flex-1 text-left p-1",t.$q.dark.isActive?"bg-dark":"bg-grey-3"])},{default:g(()=>[e("div",O,P(h(u)),1)]),_:1},8,["class"])])]),_:1},8,["disable","color","text-color"])]),e("div",null,[n[4]||(n[4]=e("div",{class:"px-2 text-grey-7"},"About",-1)),e("div",{class:d(["flex flex-col rounded-lg p-2 gap-2",t.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[n[3]||(n[3]=e("div",{class:"flex justify-between px-1"},[e("div",null,"Version"),e("div",null,"2.0")],-1)),e("div",{class:d(["h-0.5",t.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),e("div",F,[n[2]||(n[2]=e("div",null,"License",-1)),e("a",{class:d(["no-underline",t.$q.dark.isActive?"text-grey-3":"text-grey-7"]),href:"https://meizuno.github.io"}," © Yurii Myronov, 2025 ",2)])],2)])]),_:1}))}});export{X as default};
