import{c as U,K as S,L as T,a as m,h as c,b as f,g as N,aF as B,r as C,N as A,f as $,aj as R,ap as j,O as v,aJ as w,P as L,S as D,V as e,W as o,X as r,T as h,U as b,Y as _,aK as V,aB as u}from"./index-BLtsfadl.js";import{m as P}from"./github-markdown-BQ9O_dh8.js";import{u as Q}from"./vue-i18n-B4jUwGuJ.js";const z=U({name:"QBanner",props:{...S,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(s,{slots:n}){const{proxy:{$q:g}}=N(),l=T(s,g),p=m(()=>"q-banner row items-center"+(s.dense===!0?" q-banner--dense":"")+(l.value===!0?" q-banner--dark q-dark":"")+(s.rounded===!0?" rounded-borders":"")),d=m(()=>`q-banner__actions row items-center justify-end col-${s.inlineActions===!0?"auto":"all"}`);return()=>{const i=[c("div",{class:"q-banner__avatar col-auto row items-center self-start"},f(n.avatar)),c("div",{class:"q-banner__content col text-body2"},f(n.default))],a=f(n.action);return a!==void 0&&i.push(c("div",{class:d.value},a)),c("div",{class:p.value+(s.inlineActions===!1&&a!==void 0?" q-banner--top-padding":""),role:"alert"},i)}}}),F=B("network",()=>({network:C({connected:!0,connectedType:"wifi"})})),I=`### Server should have 2 endpoints

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
`,M={class:"q-px-md q-py-lg"},O={class:"q-mb-lg"},E={class:"px-2 text-grey-7"},K={class:"row items-center w-full"},Y={class:"flex-1 row justify-start items-center"},G={class:"text-ellipsis overflow-x-hidden"},J={class:"px-2 text-grey-7"},W={class:"flex justify-between px-1"},X={class:"flex justify-between px-1"},ne=A({__name:"SettingsView",setup(s){const{t:n}=Q(),g=$("pageTitle");g.value=n("layout.settings");const l=R(),{error:p}=j(),{storeUrl:d}=v(w()),{setStoreUrl:i}=w(),{network:a}=v(F()),k=t=>{try{return new URL(t),!0}catch{return!1}},x=async()=>{l.dialog({message:await P(I),class:"markdown-body h-[70%] w-fit",html:!0})},q=()=>{l.dialog({title:n("dialog.storeURL"),message:n("dialog.storeURLMessage"),cancel:!0,persistent:!0,prompt:{model:d.value,type:"text"}}).onOk(t=>{t?k(t)?i(t).catch(()=>{console.error("Failed to reset storeUrl")}):p(n("notify.invalidURL")):i("").catch(()=>{console.error("Failed to reset storeUrl")})})};return(t,y)=>(L(),D("div",M,[e("div",O,[e("div",E,o(r(n)("settings.advanced")),1),h(_,{class:"w-full rounded-lg",disable:!r(a).connected,color:t.$q.dark.isActive?"grey-9":"grey-1","text-color":t.$q.dark.isActive?"grey-1":"grey-9",padding:"sm","no-caps":"",onClick:q},{default:b(()=>[e("div",K,[e("div",Y,[e("div",null,o(r(n)("settings.storeURL")),1),h(_,{onClick:V(x,["stop"]),flat:"",icon:"help_outline",color:"grey-7",round:"",size:"sm"})]),h(z,{dense:"",rounded:"",class:u(["flex-1 text-left p-1",t.$q.dark.isActive?"bg-dark":"bg-grey-3"])},{default:b(()=>[e("div",G,o(r(d)),1)]),_:1},8,["class"])])]),_:1},8,["disable","color","text-color"])]),e("div",null,[e("div",J,o(r(n)("settings.about")),1),e("div",{class:u(["flex flex-col rounded-lg p-2 gap-2",t.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[e("div",W,[e("div",null,o(r(n)("settings.version")),1),y[0]||(y[0]=e("div",null,"2.1",-1))]),e("div",{class:u(["h-0.5",t.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),e("div",X,[e("div",null,o(r(n)("settings.license")),1),e("a",{class:u(["no-underline",t.$q.dark.isActive?"text-grey-3":"text-grey-7"]),href:"https://meizuno.github.io"}," © Yurii Myronov, 2025 ",2)])],2)])]))}});export{ne as _};
