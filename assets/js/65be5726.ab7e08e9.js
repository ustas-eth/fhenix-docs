"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3738],{2978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=r(5893),s=r(1151);const i={sidebar_position:100,title:"Types and Operations",description:"List of supported types and different operations"},d="\ud83e\uddd1\u200d\u2695\ufe0f Supported Types and Operations",o={id:"devdocs/Writing Smart Contracts/Types-and-Operators",title:"Types and Operations",description:"List of supported types and different operations",source:"@site/docs/devdocs/Writing Smart Contracts/Types-and-Operators.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Types-and-Operators",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Types-and-Operators",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Writing Smart Contracts/Types-and-Operators.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"Types and Operations",description:"List of supported types and different operations"},sidebar:"docsSidebar",previous:{title:"Comparisons and Booleans",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/booleans"},next:{title:"Overview",permalink:"/fhenix-docs/docs/devdocs/Setting Up Your Environment/intro"}},l={},a=[{value:"Types",id:"types",level:2},{value:"Operations",id:"operations",level:2},{value:"Using Direct Function Calls",id:"using-direct-function-calls",level:3},{value:"Using Library Bindings",id:"using-library-bindings",level:3},{value:"Utilizing Operator Overloading",id:"utilizing-operator-overloading",level:3},{value:"Supported Operations",id:"supported-operations",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\ufe0f-supported-types-and-operations",children:"\ud83e\uddd1\u200d\u2695\ufe0f Supported Types and Operations"}),"\n",(0,n.jsx)(t.p,{children:"The library exposes utility functions for FHE operations. The goal of the library is to provide a seamless developer experience for writing smart contracts that can operate on confidential data."}),"\n",(0,n.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,n.jsx)(t.p,{children:"The library provides a type system that is checked both at compile time and at run time. The structure and operations related to these types are described in this sections."}),"\n",(0,n.jsx)(t.p,{children:"We currently support encrypted integers of bit length up to 32 bits."}),"\n",(0,n.jsxs)(t.p,{children:['These encrypted integers behave as much as possible as Solidity\'s integer types. However, behaviour such as "revert on overflow" is not supported as this would leak some information of the encrypted integers. Therefore, arithmetic on ',(0,n.jsx)(t.code,{children:"euint"})," types is ",(0,n.jsx)(t.a,{href:"https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic",children:"unchecked"}),", i.e. there is wrap-around on overlow."]}),"\n",(0,n.jsxs)(t.p,{children:["In the back-end, encrypted integers are FHE ciphertexts. The library abstracts away the ciphertexts and presents pointers to ciphertexts, or ciphertext handles, to the smart contract developer. The ",(0,n.jsx)(t.code,{children:"euint"})," types are ",(0,n.jsx)(t.em,{children:"wrappers"})," over these handles."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"name"}),(0,n.jsx)(t.th,{children:"Bit Size"}),(0,n.jsx)(t.th,{children:"Usage"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"euint8"}),(0,n.jsx)(t.td,{children:"8"}),(0,n.jsx)(t.td,{children:"Compute"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"euint16"}),(0,n.jsx)(t.td,{children:"16"}),(0,n.jsx)(t.td,{children:"Compute"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"euint32"}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsx)(t.td,{children:"Compute"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inEuint8"}),(0,n.jsx)(t.td,{children:"8"}),(0,n.jsx)(t.td,{children:"Input"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inEuint16"}),(0,n.jsx)(t.td,{children:"16"}),(0,n.jsx)(t.td,{children:"Input"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inEuint32"}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsx)(t.td,{children:"Input"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"operations",children:"Operations"}),"\n",(0,n.jsx)(t.p,{children:"There are three ways to perform operations with FHE.sol:"}),"\n",(0,n.jsx)(t.h3,{id:"using-direct-function-calls",children:"Using Direct Function Calls"}),"\n",(0,n.jsx)(t.p,{children:"Direct function calls are the most straightforward way to perform operations with FHE.sol. For example, if you want to add two encrypted 8-bit integers (euint8), you can do so as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"euint8 result = FHE.add(lhs, rhs);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Here, lhs and rhs are your euint8 variables, and result will store the outcome of the addition."}),"\n",(0,n.jsx)(t.h3,{id:"using-library-bindings",children:"Using Library Bindings"}),"\n",(0,n.jsx)(t.p,{children:"FHE.sol also provides library bindings, allowing for a more natural syntax. To use this, you first need to include the library for your specific data type. For euint8, the usage would look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"euint8 result = lhs.add(rhs);\n"})}),"\n",(0,n.jsx)(t.p,{children:"In this example, lhs.add(rhs) performs the addition, using the library function implicitly."}),"\n",(0,n.jsx)(t.h3,{id:"utilizing-operator-overloading",children:"Utilizing Operator Overloading"}),"\n",(0,n.jsx)(t.p,{children:"For an even more intuitive approach, FHE.sol supports operator overloading. This means you can use standard arithmetic operators like +, -, *, etc., directly on encrypted types. Here's how you can use it for adding two euint8 values:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"euint8 result = lhs + rhs;\n"})}),"\n",(0,n.jsx)(t.p,{children:"With operator overloading, lhs + rhs performs the addition seamlessly."}),"\n",(0,n.jsx)(t.h2,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,n.jsx)(t.p,{children:"All operations supported by FHE.sol are listed in the table below:"}),"\n",(0,n.jsx)(t.p,{children:"Note that all functions are supported in both direct function calls and library bindings. However, operator overloading is only supported for the operations listed in the table (solidity please support operator overloading for boolean return types!)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"name"}),(0,n.jsx)(t.th,{children:"FHE.sol function"}),(0,n.jsx)(t.th,{children:"Operator"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Addition"}),(0,n.jsx)(t.td,{children:"add"}),(0,n.jsx)(t.td,{children:"+"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Subtraction"}),(0,n.jsx)(t.td,{children:"sub"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Multiplication"}),(0,n.jsx)(t.td,{children:"mul"}),(0,n.jsx)(t.td,{children:"*"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise And"}),(0,n.jsx)(t.td,{children:"and"}),(0,n.jsx)(t.td,{children:"&"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise Or"}),(0,n.jsx)(t.td,{children:"or"}),(0,n.jsx)(t.td,{children:"|"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise Xor"}),(0,n.jsx)(t.td,{children:"xor"}),(0,n.jsx)(t.td,{children:"^"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Shift Right"}),(0,n.jsx)(t.td,{children:"shr"}),(0,n.jsx)(t.td,{children:">>"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Shift Left"}),(0,n.jsx)(t.td,{children:"shl"}),(0,n.jsx)(t.td,{children:"<<"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Equal"}),(0,n.jsx)(t.td,{children:"eq"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Not equal"}),(0,n.jsx)(t.td,{children:"ne"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Greater than or equal"}),(0,n.jsx)(t.td,{children:"gte"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Greater than"}),(0,n.jsx)(t.td,{children:"gt"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Less than or equal"}),(0,n.jsx)(t.td,{children:"lte"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Less than"}),(0,n.jsx)(t.td,{children:"lt"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Min"}),(0,n.jsx)(t.td,{children:"min"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Max"}),(0,n.jsx)(t.td,{children:"max"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Negative"}),(0,n.jsx)(t.td,{children:"neg"}),(0,n.jsx)(t.td,{children:"n/a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Not"}),(0,n.jsx)(t.td,{children:"not"}),(0,n.jsx)(t.td,{children:"n/a"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>d});var n=r(7294);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);