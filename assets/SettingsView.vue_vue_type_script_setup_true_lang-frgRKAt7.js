import{a as C,L as N,g as A,M as $,b,h as g,d as y,O as B,P as D,j as L,am as R,as as j,a0 as M,aF as w,an as O,T as P,U as V,X as n,Y as s,Z as o,aK as a,V as u,_ as f,aP as E,W as v,a3 as _}from"./index-D_fwAmL-.js";import{m as F}from"./github-markdown-BQ9O_dh8.js";const Q=C({name:"QBanner",props:{...N,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(r,{slots:e}){const{proxy:{$q:p}}=A(),i=$(r,p),h=b(()=>"q-banner row items-center"+(r.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(r.rounded===!0?" rounded-borders":"")),c=b(()=>`q-banner__actions row items-center justify-end col-${r.inlineActions===!0?"auto":"all"}`);return()=>{const l=[g("div",{class:"q-banner__avatar col-auto row items-center self-start"},y(e.avatar)),g("div",{class:"q-banner__content col text-body2"},y(e.default))],d=y(e.action);return d!==void 0&&l.push(g("div",{class:c.value},d)),g("div",{class:h.value+(r.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},l)}}}),z=`### Server should have 2 endpoints

- Read items

  \`\`\`
  GET /
  \`\`\`

  - with parameters **\`null\`**
  - with response data **\`TreeNode[]\`**

- Upload items

  \`\`\`
  POST /
  \`\`\`

  - with body

    \`\`\`ts
    {
      label: string;
      path: string;
      children: TreeNode[];
      content: string;
      type: string = 'file' | "directory";
    }
    \`\`\`

  - with response

    \`\`\`ts
    null
    \`\`\`

- Create item

  \`\`\`
  POST /item
  \`\`\`

  - with body

    \`\`\`ts
    {
      label: string;
      path: string;
      children: TreeNode[];
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
        children: TreeNode[];
        content: string;
        type: string = 'file' | "directory";
      },
      "new_item": {
        label: string;
        path: string;
        children: TreeNode[];
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
      children: TreeNode[];
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
    children: UploadNode[];
    content: string;
    type: string = 'file' | "directory";
}
\`\`\`
`,I={class:"q-px-md q-py-lg"},Y={class:"q-mb-lg"},G={class:"px-2 text-grey-7"},K={class:"row items-center w-full"},W={class:"flex-1 row justify-start items-center"},X={class:"text-ellipsis overflow-x-hidden"},Z={class:"flex gap-2"},H={class:"px-2 text-grey-7"},J={class:"flex justify-between px-1"},ee={class:"flex justify-between px-1"},se=B({__name:"SettingsView",setup(r){const{t:e}=D(),p=L("pageTitle");p.value=e("layout.settings");const i=R(),{error:h}=j(),{storeUrl:c}=M(w()),{setStoreUrl:l}=w(),{downloadTree:d,uploadTree:k}=O(),x=t=>{try{return new URL(t),!0}catch{return!1}},q=async()=>{i.dialog({message:await F(z),class:"markdown-body h-[70%] w-fit",html:!0})},T=()=>{i.dialog({title:e("dialog.storeURL"),message:e("dialog.storeURLMessage"),cancel:!0,persistent:!0,prompt:{model:c.value,type:"text"}}).onOk(t=>{t?x(t)?l(t):h(e("notify.invalidURL")):l("")})},U=()=>{i.dialog({title:e("dialog.download"),message:e("dialog.downloadMessage"),cancel:!0,persistent:!0}).onOk(()=>{d().catch(()=>{console.error("Failed to download tree")})})},S=()=>{i.dialog({title:e("dialog.upload"),message:e("dialog.uploadMessage"),cancel:!0,persistent:!0}).onOk(()=>{k().catch(()=>{console.error("Failed to upload tree")})})};return(t,m)=>(V(),P("div",I,[n("div",Y,[n("div",G,s(o(e)("settings.advanced")),1),n("div",{class:a(["flex flex-col rounded-lg p-2 gap-2",t.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[n("div",K,[n("div",W,[n("div",null,s(o(e)("settings.storeURL")),1),u(f,{onClick:E(q,["stop"]),flat:"",icon:"help_outline",color:"grey-7",round:"",size:"sm"})]),u(Q,{dense:"",rounded:"",class:a(["flex-1 text-left py-1 px-2",t.$q.dark.isActive?"bg-dark":"bg-grey-4"]),onClick:T},{default:v(()=>[n("div",X,s(o(c)),1)]),_:1},8,["class"])]),n("div",{class:a(["h-0.5",t.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),n("div",Z,[u(f,{padding:"none",outline:"",color:t.$q.dark.isActive?"grey-5":"grey-8",class:"flex-1",onClick:U},{default:v(()=>[_(s(o(e)("settings.download")),1)]),_:1},8,["color"]),u(f,{padding:"none",outline:"",color:t.$q.dark.isActive?"grey-5":"grey-8",class:"flex-1",onClick:S},{default:v(()=>[_(s(o(e)("settings.upload")),1)]),_:1},8,["color"])])],2)]),n("div",null,[n("div",H,s(o(e)("settings.about")),1),n("div",{class:a(["flex flex-col rounded-lg p-2 gap-2",t.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[n("div",J,[n("div",null,s(o(e)("settings.version")),1),m[0]||(m[0]=n("div",null,"2.2",-1))]),n("div",{class:a(["h-0.5",t.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),n("div",ee,[n("div",null,s(o(e)("settings.license")),1),n("a",{class:a(["no-underline",t.$q.dark.isActive?"text-grey-3":"text-grey-7"]),href:"https://meizuno.github.io"}," © Yurii Myronov, 2025 ",2)])],2)])]))}});export{se as _};
