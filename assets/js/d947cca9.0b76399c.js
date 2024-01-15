"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[8535],{2797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(5893),i=t(1151);const r={sidebar_position:2.5,title:"Receiving FHE data",description:"How to handle encrypted data coming from the user"},c="Handling Encrypted Inputs",d={id:"devdocs/Writing Smart Contracts/User-Inputs",title:"Receiving FHE data",description:"How to handle encrypted data coming from the user",source:"@site/docs/devdocs/Writing Smart Contracts/User-Inputs.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/User-Inputs",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/User-Inputs",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Writing Smart Contracts/User-Inputs.md",tags:[],version:"current",sidebarPosition:2.5,frontMatter:{sidebar_position:2.5,title:"Receiving FHE data",description:"How to handle encrypted data coming from the user"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/FHE-sol"},next:{title:"Returning FHE Data",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Returning-Data"}},a={},o=[{value:"Encrypted Data Structures",id:"encrypted-data-structures",level:2},{value:"Advantages of <code>inEuint</code> Over Raw Bytes",id:"advantages-of-ineuint-over-raw-bytes",level:2},{value:"Examples",id:"examples",level:3},{value:"<code>inEuint</code> vs. <code>euint</code> Types",id:"ineuint-vs-euint-types",level:3},{value:"Conversion Necessity",id:"conversion-necessity",level:3},{value:"Gas Cost Implications",id:"gas-cost-implications",level:3},{value:"Best Practices",id:"best-practices",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"handling-encrypted-inputs",children:"Handling Encrypted Inputs"}),"\n",(0,s.jsx)(n.p,{children:"Fully Homomorphic Encryption (FHE) contracts handle encrypted data differently from standard Solidity contracts. Developers can receive encrypted inputs primarily in two ways:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Using ",(0,s.jsx)(n.code,{children:"inEuintXX"})," Structs:"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"function transferEncryptedToAccount(address to, inEuint32 calldata encryptedBalance) public {\n    _updateAccountBalance(to, FHE.asEuint32(encryptedBalance));\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using Raw Bytes:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"function transferEncryptedData(address to, bytes calldata encryptedData) public {\n    _storeEncryptedData(to, FHE.asEuint32(encryptedData));\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"encrypted-data-structures",children:"Encrypted Data Structures"}),"\n",(0,s.jsx)(n.p,{children:"Different types of encrypted data can be defined:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inEbool"}),": Encrypted boolean."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inEuint8"}),": Encrypted unsigned 8-bit integer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inEuint16"}),": Encrypted unsigned 16-bit integer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inEuint32"}),": Encrypted unsigned 32-bit integer."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"advantages-of-ineuint-over-raw-bytes",children:["Advantages of ",(0,s.jsx)(n.code,{children:"inEuint"})," Over Raw Bytes"]}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"inEuint"})," over raw bytes ensures type safety and readability.\nIt also provides a structured approach that integrates well with the FHE.sol library's functions."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voting in a Poll:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"function castEncryptedVote(address poll, inEbool calldata encryptedVote) public {\n    _submitVote(poll, FHE.asEbool(encryptedVote));\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Setting Encrypted User Preferences:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Javascript",children:"function updateUserSetting(address user, inEuint8 calldata encryptedSetting) public {\n    _applyUserSetting(user, FHE.asEuint8(encryptedSetting));\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"ineuint-vs-euint-types",children:[(0,s.jsx)(n.code,{children:"inEuint"})," vs. ",(0,s.jsx)(n.code,{children:"euint"})," Types"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inEuint"})," types are used for handling incoming encrypted data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"euint"})," types are used for data already processed and in use within the contract."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conversion-necessity",children:"Conversion Necessity"}),"\n",(0,s.jsxs)(n.p,{children:["Conversion from ",(0,s.jsx)(n.code,{children:"inEuint"})," to ",(0,s.jsx)(n.code,{children:"euint"})," is necessary for the data to be compatible with FHE operations. This ensures that only correctly formatted and expected encrypted data is processed."]}),"\n",(0,s.jsxs)(n.p,{children:["This is done using the ",(0,s.jsx)(n.code,{children:"FHE.asEuintXX"})," function, where ",(0,s.jsx)(n.code,{children:"XX"})," is the bit size of the encrypted data."]}),"\n",(0,s.jsx)(n.h3,{id:"gas-cost-implications",children:"Gas Cost Implications"}),"\n",(0,s.jsxs)(n.p,{children:["Attempting to store ",(0,s.jsx)(n.code,{children:"inEuint"})," types directly in storage can lead to prohibitively high gas costs due to the large size of encrypted data. It's generally recommended to avoid storing these directly and instead process them as needed."]}),"\n",(0,s.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.p,{children:["When handling encrypted inputs, always ensure the data integrity and security of your contract's operations. Use the structured ",(0,s.jsx)(n.code,{children:"inEuint"})," types for clearer and safer code, and be mindful of gas costs when designing your contract's data handling strategies. Thorough testing and consideration of security implications are essential in maintaining the robustness and reliability of your FHE-based smart contracts."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var s=t(7294);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);