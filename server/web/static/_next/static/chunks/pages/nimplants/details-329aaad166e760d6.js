(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{7669:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nimplants/details",function(){return s(7023)}])},7023:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return details}});var i=s(5893),l=s(2046),t=s(5154),r=s(741),c=s(7294),d=s(4065),x=s(1163),o=s(5216),a=s(2918),j=s.n(a),h=s(7564),u=s(3485),m=s(8818),p=s(3997),f=s(9236),y=s(50),v=s(8623),w=s(5117),C=s(7645),I=s(6586),components_InfoCardListNimplant=function(e){let{guid:n}=e,[s,r]=(0,c.useState)(!1),{nimplantInfo:d,nimplantInfoLoading:x,nimplantInfoError:o}=(0,l.TW)(n);return(0,i.jsxs)(h.K,{ml:"xl",mr:40,mt:"xl",spacing:"xs",children:[(0,i.jsxs)(u.u,{opened:s,onClose:()=>r(!1),title:(0,i.jsx)("b",{children:"Danger zone!"}),centered:!0,children:["Are you sure you want to kill this Nimplant?",(0,i.jsx)(m.T,{h:"xl"}),(0,i.jsx)(p.z,{onClick:()=>{r(!1),(0,l.a6)(n)},leftIcon:(0,i.jsx)(t.Z1A,{}),sx:{width:"100%"},children:"Yes, kill kill kill!"})]}),(0,i.jsx)(p.z,{mb:"sm",onClick:()=>r(!0),leftIcon:(0,i.jsx)(t.Z1A,{}),sx:{maxWidth:"200px"},children:"Kill Nimplant"}),(0,i.jsx)(f.D,{order:2,children:"Nimplant Information"}),(0,i.jsxs)(y.r,{columns:2,gutter:"lg",children:[(0,i.jsx)(y.r.Col,{xs:2,md:2,children:(0,i.jsx)(I.Z,{icon:(0,i.jsx)(t.bHw,{size:"1.5em"}),content:(0,i.jsx)(v.O,{visible:!d,children:(0,i.jsxs)(w.x,{children:["Nimplant ",(0,i.jsxs)(C.y,{children:["#",d&&d.id]})," ","(GUID ",(0,i.jsx)(C.y,{children:d&&d.guid}),")"]})})})}),(0,i.jsx)(y.r.Col,{xs:2,md:1,children:(0,i.jsx)(I.Z,{icon:(0,i.jsx)(t.qyc,{size:"1.5em"}),content:(0,i.jsx)(v.O,{visible:!d,children:(0,i.jsxs)(w.x,{sx:{whiteSpace:"pre-line"},children:["Last seen: ",(0,i.jsx)(C.y,{children:d&&(0,l.VG)(d.lastCheckin)})," ","(sleep ",(0,i.jsxs)(C.y,{children:[d&&d.sleepTime," seconds"]}),","," ","jitter ",(0,i.jsxs)(C.y,{children:[d&&d.sleepJitter,"%"]}),")","\n","First seen: ",(0,i.jsx)(C.y,{children:d&&(0,l.VG)(d.firstCheckin)})," ","(kill date ",(0,i.jsx)(C.y,{children:d&&d.killDate}),")"]})})})}),(0,i.jsx)(y.r.Col,{xs:2,md:1,children:(0,i.jsx)(I.Z,{icon:(0,i.jsx)(t.WIW,{size:"1.5em"}),content:(0,i.jsx)(v.O,{visible:!d,children:(0,i.jsxs)(w.x,{sx:{whiteSpace:"pre-line"},children:["Username: ",(0,i.jsx)(C.y,{children:d&&d.username}),"\n","Hostname: ",(0,i.jsx)(C.y,{children:d&&d.hostname})]})})})}),(0,i.jsx)(y.r.Col,{xs:2,md:1,children:(0,i.jsx)(I.Z,{icon:(0,i.jsx)(t.AEx,{size:"1.5em"}),content:(0,i.jsx)(v.O,{visible:!d,children:(0,i.jsxs)(w.x,{sx:{whiteSpace:"pre-line"},children:["Internal IP address: ",(0,i.jsx)(C.y,{children:d&&d.ipAddrInt}),"\n","External IP address: ",(0,i.jsx)(C.y,{children:d&&d.ipAddrExt})]})})})}),(0,i.jsx)(y.r.Col,{xs:2,md:1,children:(0,i.jsx)(I.Z,{icon:(0,i.jsx)(t.zTP,{size:"1.5em"}),content:(0,i.jsx)(v.O,{visible:!d,children:(0,i.jsxs)(w.x,{sx:{whiteSpace:"pre-line"},children:[(0,i.jsx)(C.y,{children:d&&d.osBuild}),"\n","Process ",(0,i.jsx)(C.y,{children:d&&d.pname})," (ID ",(0,i.jsx)(C.y,{children:d&&d.pid}),")"]})})})})]})]})},b=s(730),details=()=>{var e,n;let s=(0,d.a)("(min-width: 800px)"),a=(0,x.useRouter)(),[h,u]=(0,c.useState)(1),m=a.query.guid,{nimplantInfo:p,nimplantInfoLoading:f,nimplantInfoError:y}=(0,l.TW)(m),{nimplantConsole:v,nimplantConsoleLoading:w,nimplantConsoleError:C}=(0,l.uV)(m);return((0,c.useEffect)(()=>{y&&C?(0,l.or)():(0,l.Xe)()}),m&&(f||"Invalid Nimplant GUID"!=p))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.Z,{title:s?"Nimplant #".concat(null===(e=a.query.guid)||void 0===e?void 0:e.toString()):"Nimplant",icon:(0,i.jsx)(t.bHw,{size:"2em"}),noBorder:!0}),(0,i.jsxs)(r.m,{defaultValue:"npconsole",children:[(0,i.jsxs)(r.m.List,{mx:-25,grow:!0,children:[(0,i.jsx)(r.m.Tab,{value:"npinfo",icon:(0,i.jsx)(t.DAO,{}),children:"Information"}),(0,i.jsx)(r.m.Tab,{value:"npconsole",icon:(0,i.jsx)(t.fF,{}),children:"Console"})]}),(0,i.jsx)(r.m.Panel,{value:"npinfo",children:(0,i.jsx)(components_InfoCardListNimplant,{guid:m})}),(0,i.jsx)(r.m.Panel,{value:"npconsole",children:(0,i.jsx)(o.Z,{allowInput:!0,consoleData:v,disabled:!!p&&!p.active,guid:null===(n=a.query.guid)||void 0===n?void 0:n.toString(),inputFunction:l.QL})})]})]}):(0,i.jsx)(j(),{statusCode:404})}},2918:function(e,n,s){e.exports=s(6908)}},function(e){e.O(0,[968,379,287,359,774,888,179],function(){return e(e.s=7669)}),_N_E=e.O()}]);