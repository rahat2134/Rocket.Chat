import{r as e,j as o}from"./index-441aae9d.js";import{k as a}from"./katex-3c610da1.js";const m=({code:r})=>{const t=e.useMemo(()=>a.renderToString(r,{displayMode:!0,macros:{"\\href":"\\@secondoftwo"},maxSize:100}),[r]);return o.jsx("div",{role:"math",style:{overflowX:"auto"},"aria-label":r,dangerouslySetInnerHTML:{__html:t}})};export{m as default};
