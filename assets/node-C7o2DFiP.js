import{av as s,at as a,r as n,aw as r}from"./index-EkAxMetF.js";const N=s("node",()=>{const e=a.getItem("activeNode"),t=n(e!==null&&!isNaN(parseInt(e))?parseInt(e,10):0);return{activeNode:t,setActiveNode:o=>{a.setItem("activeNode",o),t.value=o},getActiveNode:async()=>await r.treeNode.get(t.value)||null}});export{N as u};
