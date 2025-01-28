import{c as U,K as T,L as S,a as m,h as d,b as h,g as N,aG as C,r as A,N as B,f as $,ak as D,aq as L,O as v,aJ as b,P as R,S as j,V as e,W as o,X as r,T as f,U as w,Y as _,aK as E,aC as c}from"./index-DX8uY9mq.js";import{m as V}from"./github-markdown-BQ9O_dh8.js";import{u as P}from"./vue-i18n-DJzI2gw9.js";const Q=U({name:"QBanner",props:{...T,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(s,{slots:n}){const{proxy:{$q:u}}=N(),l=S(s,u),g=m(()=>"q-banner row items-center"+(s.dense===!0?" q-banner--dense":"")+(l.value===!0?" q-banner--dark q-dark":"")+(s.rounded===!0?" rounded-borders":"")),p=m(()=>`q-banner__actions row items-center justify-end col-${s.inlineActions===!0?"auto":"all"}`);return()=>{const i=[d("div",{class:"q-banner__avatar col-auto row items-center self-start"},h(n.avatar)),d("div",{class:"q-banner__content col text-body2"},h(n.default))],a=h(n.action);return a!==void 0&&i.push(d("div",{class:p.value},a)),d("div",{class:g.value+(s.inlineActions===!1&&a!==void 0?" q-banner--top-padding":""),role:"alert"},i)}}}),z=C("network",()=>({network:A({connected:!0,connectedType:"wifi"})})),I=`### Server should have 2 endpoints

- Read items

  \`\`\`
  GET /
  \`\`\`

  - with parameters **\`null\`**
  - with response data **\`TreeNode[]\`**

- Create item

  \`\`\`
  POST /item
  \`\`\`

  - with body

    \`\`\`ts
    {
      label: string;
      path: string;
      children?: TreeNode[] | null;
      content: string;
      type: string = 'file' | "directory";
    }
    \`\`\`

  - with response data

    \`\`\`ts
    null
    \`\`\`

- Update item

  \`\`\`
  PUT /item
  \`\`\`

  - with body

    \`\`\`ts
    {
      "old_item": {
        label: string;
        path: string;
        children?: TreeNode[] | null;
        content: string;
        type: string = 'file' | "directory";
      },
      "new_item": {
        label: string;
        path: string;
        children?: TreeNode[] | null;
        content: string;
        type: string = 'file' | "directory";
      }
    }
    \`\`\`

  - with response data

    \`\`\`ts
    null
    \`\`\`

- Delete item

  \`\`\`
  DELETE /item
  \`\`\`

  - with body

    \`\`\`ts
    {
      label: string;
      path: string;
      children?: TreeNode[] | null;
      content: string;
      type: string = 'file' | "directory";
    }
    \`\`\`

  - with response data

    \`\`\`ts
    null
    \`\`\`

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
`,M={class:"q-px-md q-py-lg"},O={class:"q-mb-lg"},F={class:"px-2 text-grey-7"},G={class:"row items-center w-full"},K={class:"flex-1 row justify-start items-center"},Y={class:"text-ellipsis overflow-x-hidden"},J={class:"px-2 text-grey-7"},W={class:"flex justify-between px-1"},X={class:"flex justify-between px-1"},ne=B({__name:"SettingsView",setup(s){const{t:n}=P(),u=$("pageTitle");u.value=n("layout.settings");const l=D(),{error:g}=L(),{storeUrl:p}=v(b()),{setStoreUrl:i}=b(),{network:a}=v(z()),k=t=>{try{return new URL(t),!0}catch{return!1}},q=async()=>{l.dialog({message:await V(I),class:"markdown-body",html:!0})},x=()=>{l.dialog({title:n("dialog.storeURL"),message:n("dialog.storeURLMessage"),cancel:!0,persistent:!0,prompt:{model:"",type:"text"}}).onOk(t=>{t?k(t)?i(t).catch(()=>{console.error("Failed to reset storeUrl")}):g(n("notify.invalidURL")):i("").catch(()=>{console.error("Failed to reset storeUrl")})})};return(t,y)=>(R(),j("div",M,[e("div",O,[e("div",F,o(r(n)("settings.advanced")),1),f(_,{class:"w-full rounded-lg",disable:!r(a).connected,color:t.$q.dark.isActive?"grey-9":"grey-1","text-color":t.$q.dark.isActive?"grey-1":"grey-9",padding:"sm","no-caps":"",onClick:x},{default:w(()=>[e("div",G,[e("div",K,[e("div",null,o(r(n)("settings.storeURL")),1),f(_,{onClick:E(q,["stop"]),flat:"",icon:"help_outline",color:"grey-7",round:"",size:"sm"})]),f(Q,{dense:"",rounded:"",class:c(["flex-1 text-left p-1",t.$q.dark.isActive?"bg-dark":"bg-grey-3"])},{default:w(()=>[e("div",Y,o(r(p)),1)]),_:1},8,["class"])])]),_:1},8,["disable","color","text-color"])]),e("div",null,[e("div",J,o(r(n)("settings.about")),1),e("div",{class:c(["flex flex-col rounded-lg p-2 gap-2",t.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[e("div",W,[e("div",null,o(r(n)("settings.version")),1),y[0]||(y[0]=e("div",null,"2.1",-1))]),e("div",{class:c(["h-0.5",t.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),e("div",X,[e("div",null,o(r(n)("settings.license")),1),e("a",{class:c(["no-underline",t.$q.dark.isActive?"text-grey-3":"text-grey-7"]),href:"https://meizuno.github.io"}," © Yurii Myronov, 2025 ",2)])],2)])]))}});export{ne as _};
