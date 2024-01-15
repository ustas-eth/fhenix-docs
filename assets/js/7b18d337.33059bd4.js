"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[5259],{6703:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=i(5893),t=i(1151);const s={},d="Permissioned.Sol",o={id:"devdocs/Solidity API/Permissioned",title:"Permissioned.Sol",description:"Abstract contract that provides EIP-712 based signature verification for access control",source:"@site/docs/devdocs/Solidity API/Permissioned.md",sourceDirName:"devdocs/Solidity API",slug:"/devdocs/Solidity API/Permissioned",permalink:"/fhenix-docs/docs/devdocs/Solidity API/Permissioned",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Solidity API/Permissioned.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FHE.Sol",permalink:"/fhenix-docs/docs/devdocs/Solidity API/FHE"},next:{title:"Signature",permalink:"/fhenix-docs/docs/devdocs/Solidity API/Signature"}},c={},l=[{value:"SignerNotMessageSender",id:"signernotmessagesender",level:3},{value:"SignerNotOwner",id:"signernotowner",level:3},{value:"constructor",id:"constructor",level:3},{value:"onlySignedPublicKey",id:"onlysignedpublickey",level:3},{value:"Parameters",id:"parameters",level:4},{value:"onlySignedPublicKeyOwner",id:"onlysignedpublickeyowner",level:3},{value:"Parameters",id:"parameters-1",level:4}];function a(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"permissionedsol",children:"Permissioned.Sol"}),"\n",(0,r.jsx)(n.p,{children:"Abstract contract that provides EIP-712 based signature verification for access control"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This contract should be inherited by other contracts to provide EIP-712 signature validated access control"})}),"\n",(0,r.jsx)(n.h3,{id:"signernotmessagesender",children:"SignerNotMessageSender"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"error SignerNotMessageSender()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Emitted when the signer is not the message sender"}),"\n",(0,r.jsx)(n.h3,{id:"signernotowner",children:"SignerNotOwner"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"error SignerNotOwner()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Emitted when the signer is not the specified owner"}),"\n",(0,r.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"constructor() internal\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Constructor that initializes EIP712 domain separator with a name and version\nsolhint-disable-next-line func-visibility, no-empty-blocks"})}),"\n",(0,r.jsx)(n.h3,{id:"onlysignedpublickey",children:"onlySignedPublicKey"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"modifier onlySignedPublicKey(struct Signature signature)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Modifier that requires the provided signature to be signed by the message sender"}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"signature"}),(0,r.jsx)(n.td,{children:"struct Signature"}),(0,r.jsx)(n.td,{children:"Data structure containing the public key and the signature to be verified"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"onlysignedpublickeyowner",children:"onlySignedPublicKeyOwner"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"modifier onlySignedPublicKeyOwner(struct Signature signature, address owner)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Modifier that requires the provided signature to be signed by a specific owner address"}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"signature"}),(0,r.jsx)(n.td,{children:"struct Signature"}),(0,r.jsx)(n.td,{children:"Data structure containing the public key and the signature to be verified"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"owner"}),(0,r.jsx)(n.td,{children:"address"}),(0,r.jsx)(n.td,{children:"The expected owner of the public key to match against the recovered signer"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var r=i(7294);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);