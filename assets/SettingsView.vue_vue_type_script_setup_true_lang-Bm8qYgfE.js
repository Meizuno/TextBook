import{c as q,a1 as S,a2 as U,a as y,h as d,b as p,g as _,aF as T,r as N,K as A,f as B,aj as C,ap as L,L as m,aI as v,M as $,N as D,O as e,P as f,Y as h,U as w,aJ as R,aB as c,S as j,T as b}from"./index-DmUV7x7I.js";import{m as E}from"./github-markdown-BQ9O_dh8.js";const P=q({name:"QBanner",props:{...S,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(s,{slots:r}){const{proxy:{$q:i}}=_(),u=U(s,i),g=y(()=>"q-banner row items-center"+(s.dense===!0?" q-banner--dense":"")+(u.value===!0?" q-banner--dark q-dark":"")+(s.rounded===!0?" rounded-borders":"")),a=y(()=>`q-banner__actions row items-center justify-end col-${s.inlineActions===!0?"auto":"all"}`);return()=>{const l=[d("div",{class:"q-banner__avatar col-auto row items-center self-start"},p(r.avatar)),d("div",{class:"q-banner__content col text-body2"},p(r.default))],o=p(r.action);return o!==void 0&&l.push(d("div",{class:a.value},o)),d("div",{class:g.value+(s.inlineActions===!1&&o!==void 0?" q-banner--top-padding":""),role:"alert"},l)}}}),V=T("network",()=>({network:N({connected:!0,connectedType:"wifi"})})),I=`### Server should have 2 endpoints

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
`,Q={class:"q-px-md q-py-lg"},z={class:"q-mb-lg"},F={class:"row items-center w-full"},M={class:"flex-1 row justify-start items-center"},O={class:"text-ellipsis overflow-x-hidden"},Y={class:"flex justify-between px-1"},K=A({__name:"SettingsView",setup(s){const r=B("pageTitle");r.value="Settings";const i=C(),{error:u}=L(),{storeUrl:g}=m(v()),{setStoreUrl:a}=v(),{network:l}=m(V()),o=n=>{try{return new URL(n),!0}catch{return!1}},k=async()=>{i.dialog({message:await E(I),class:"markdown-body",html:!0})},x=()=>{i.dialog({title:"Store URL",message:"Please enter the store URL to your server with files.",cancel:!0,persistent:!0,prompt:{model:"",type:"text"}}).onOk(n=>{n?o(n)?a(n).catch(()=>{console.error("Failed to reset storeUrl")}):u("Invalid URL!"):a("").catch(()=>{console.error("Failed to reset storeUrl")})})};return(n,t)=>($(),D("div",Q,[e("div",z,[t[1]||(t[1]=e("div",{class:"px-2 text-grey-7"},"Advanced",-1)),f(w,{class:"w-full rounded-lg",disable:!b(l).connected,color:n.$q.dark.isActive?"grey-9":"grey-1","text-color":n.$q.dark.isActive?"grey-1":"grey-9",padding:"sm","no-caps":"",onClick:x},{default:h(()=>[e("div",F,[e("div",M,[t[0]||(t[0]=e("div",null,"Store URL",-1)),f(w,{onClick:R(k,["stop"]),flat:"",icon:"help_outline",color:"grey-7",round:"",size:"sm"})]),f(P,{dense:"",rounded:"",class:c(["flex-1 text-left p-1",n.$q.dark.isActive?"bg-dark":"bg-grey-3"])},{default:h(()=>[e("div",O,j(b(g)),1)]),_:1},8,["class"])])]),_:1},8,["disable","color","text-color"])]),e("div",null,[t[4]||(t[4]=e("div",{class:"px-2 text-grey-7"},"About",-1)),e("div",{class:c(["flex flex-col rounded-lg p-2 gap-2",n.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[t[3]||(t[3]=e("div",{class:"flex justify-between px-1"},[e("div",null,"Version"),e("div",null,"2.0")],-1)),e("div",{class:c(["h-0.5",n.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),e("div",Y,[t[2]||(t[2]=e("div",null,"License",-1)),e("a",{class:c(["no-underline",n.$q.dark.isActive?"text-grey-3":"text-grey-7"]),href:"https://meizuno.github.io"}," © Yurii Myronov, 2025 ",2)])],2)])]))}});export{K as _};
