!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="efcc7859-d165-4f9b-8c26-b09700c78f65",e._sentryDebugIdIdentifier="sentry-dbid-efcc7859-d165-4f9b-8c26-b09700c78f65")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30b1ba65cc8722be7e184f4a401fb43e6b21634d"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[6944],{6944:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});a(62953);var n=a(96540),l=a(83199),o=a(47731),r=a(8711);const s=(0,r.default)(l.ModalContent).attrs((e=>{let{isMobile:t}=e;return{width:t?{base:"95vw"}:{min:120,max:160}}})).withConfig({displayName:"styled__AwsModalContent",componentId:"sc-cgxyx4-0"})([""]),c=(0,r.default)(l.Flex).attrs((e=>({border:{side:"all",color:"primary"},color:"primary",padding:[2],justifyContent:"center",round:!0,cursor:"pointer",opacity:e.disabled?"0.4":"1",...e}))).withConfig({displayName:"styled__StyledSpaceSelector",componentId:"sc-cgxyx4-1"})(["pointer-events:",";&:hover{background-color:",";color:#00cd51;text-decoration:none;}"],(e=>{let{disabled:t}=e;return t?"none":"auto"}),(0,l.getColor)("secondaryHighlight"));var i=a(58168);a(17333),a(98992),a(54520);const d=e=>{let{state:t,setState:a}=e;const{firstName:o,lastName:r,company:s}=t||{},[c,i]=(0,l.useTouchedState)({}),[d,u]=(0,l.useTouchedState)({}),[m,p]=(0,l.useTouchedState)({}),b=(0,n.useCallback)((e=>t=>{a((a=>({...a,[e]:t.target.value})))}),[a]);return n.createElement(l.Flex,{column:!0,gap:2},n.createElement(l.TextInput,{label:"First name",value:o||"",placeholder:"Enter your first name",onChange:b("firstName"),size:"small",touched:c,onBlur:i,error:c&&!o?"Provide your first name":""}),n.createElement(l.TextInput,{label:"Last name",value:r||"",placeholder:"Enter your last name",onChange:b("lastName"),size:"small",touched:d,onBlur:u,error:d&&!r?"Provide your last name":""}),n.createElement(l.TextInput,{label:"Company",value:s||"",placeholder:"Enter your company name",onChange:b("company"),size:"small",touched:m,onBlur:p,error:m&&!s?"Provide your company name":""}))};a(41393),a(81454);var u=a(63950),m=a.n(u),p=a(92155),b=a(80158),f=a(47130);const g=(0,p.A)((0,f.A)(c)),y=e=>{let{id:t,slug:a,name:l,isEligible:o,reason:r,isDisabled:s,onSpaceSelection:c=m()}=e;const i=(0,n.useCallback)((()=>{o&&c({spaceId:t,spaceSlug:a})}),[t,a,o,c]),d=s?"Please fill in the required fields":!o&&r?(0,b.Zr)(r):null;return n.createElement(g,{feature:"LabraSpaceSelect",payload:{spaceId:t},disabled:!o||s,tooltip:d,tooltipProps:{align:"bottom"},onClick:i},l)},E=function(){let{state:e,setState:t,eligible:a=[],nonEligible:o=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{firstName:r,lastName:s,company:c}=e||{},d=!r||!s||!c,u=(0,n.useCallback)((e=>{let{spaceId:a}=e;t((e=>({...e,spaceId:a})))}),[t]);return n.createElement(l.Flex,{column:!0,gap:4},n.createElement(l.Text,null,"Select a space to connect to your AWS subscription."),n.createElement(l.Flex,{column:!0,gap:2,justifyContent:"center"},a.map((e=>n.createElement(y,(0,i.A)({key:e.id,onSpaceSelection:u,isDisabled:d},e)))),o.map((e=>n.createElement(y,(0,i.A)({key:e.id},e))))))};var h=a(4659);const v={ErrSubscriptionAlreadyAttached:()=>n.createElement(l.Text,{lineHeight:1.5},"This subscription is already attached to a Netdata space / account."),FETimeout:()=>n.createElement(l.Text,{lineHeight:1.5},"The subscription could not be validated. Please try again in sometime by refreshing the page. If it does not work, please reach out to"," ",n.createElement(h.A,{href:"mailto:support@netdata.cloud",as:"a",cursor:"pointer",textDecoration:"underline",color:"main"},"support@netdata.cloud")," ","and retry setting up the account from the AWS Marketplace"),default:()=>n.createElement(l.Text,null,"Something went wrong.")},S=e=>{let{errorKey:t,error:a}=e;const o=a?()=>n.createElement(l.Text,null,a):v[t]||v.default;return n.createElement(l.Flex,{alignItems:"center",justifyContent:"center",height:30,padding:[0,8]},n.createElement(o,null))};var C=a(28738);const I=function(){let{state:e,setState:t,isLoading:a,timeLeft:o,spaces:r=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const s=r.filter((e=>{let{isEligible:t}=e;return t})),c=r.filter((e=>{let{isEligible:t}=e;return!t}));return s.length?a?n.createElement(C.A,{height:50,padding:[4],title:"Validating your Subscription. Please Wait.",body:"This may take upto 5 minutes."}):n.createElement(l.Flex,{column:!0,gap:8},n.createElement(d,{state:e,setState:t}),n.createElement(E,{state:e,setState:t,eligible:s,nonEligible:c})):n.createElement(S,{error:"No eligible spaces found."})},x=e=>{let{state:t,setState:a,isLoading:l,timeLeft:o,spacesLoadable:r={},error:s}=e;const{loaded:c,value:d={},hasError:u,error:m}=r;return c?u?n.createElement(S,{errorKey:m}):s?n.createElement(S,{errorKey:s.errorKey}):n.createElement(I,(0,i.A)({state:t,setState:a,isLoading:l,timeLeft:o},d)):n.createElement(C.A,{height:50,padding:[4],title:"Loading spaces..."})};var k=a(3914);const w=e=>{let{state:t,forceHiddenConfirmation:a,onConfirm:o,onDecline:r}=e;const{spaceId:s}=t||{},c=(0,k.ns)(s,"name");return s&&!a?n.createElement(l.ConfirmationDialog,{confirmLabel:"Yes, select space",declineLabel:"No","data-testid":"subscribeSpaceToAWSDialog",handleConfirm:o,handleDecline:r,hideIcon:!0,isConfirmPositive:!0,message:n.createElement(l.Flex,{gap:2,column:!0},n.createElement(l.TextBig,null,"You are about to tie your AWS subscription to ",n.createElement(l.TextBig,{strong:!0},c)," space."),n.createElement(l.TextBig,null,"Are you sure you want to select this space?")),title:"Select space"}):null};a(9391);var A=a(47767),L=a(84976),T=a(47444),_=a(26655),N=a(49286);var P=a(71835);const F=(0,T.K0)({key:"labraSpacesSelector",get:e=>{let{url:t}=e;return()=>(e=>e?_.A.get(e,{transform:e=>(0,N.bn)(e)}):Promise.resolve({}))(t)}}),D=["labra_subscription_id","aws_customer_id","aws_product_id"],M=()=>{const e=(0,A.Zp)(),t=(0,k.ap)("slug"),[a,l]=(0,L.ok)();return(0,n.useCallback)((n=>{a&&(D.forEach((e=>a.delete(e))),l(a)),n?window.location.href="/spaces/".concat(t):e("/spaces/".concat(t))}),[a,l,e,t])},B=e=>{let{subscriptionId:t}=e;const[a,l]=(0,P.A)(),o=M();return(0,n.useCallback)((e=>{let{firstName:n,lastName:r,company:s,spaceId:c}=e;return(e=>{let{firstName:t,lastName:a,company:n,spaceId:l,subscriptionId:o}=e;return _.A.patch("/api/v2/spaces/".concat(l,"/billing/labra/subscription"),{first_name:t,last_name:a,company:n,subscription_id:o})})({firstName:n,lastName:r,company:s,spaceId:c,subscriptionId:t}).then((()=>{a({header:"Success",text:"Successfully subscribed space"}),o(!0)})).catch(l).finally((()=>Promise.resolve()))}),[t,o])},H=(0,p.A)(l.Button),K=e=>{let{isLoading:t}=e;const a=M();return n.createElement(l.ModalFooter,null,n.createElement(H,{feature:"LabraSpacesSelectorClose",label:"Close",flavour:"hollow",onClick:a,disabled:t}))};var R=a(19673),W=a(99090),j=a(36712);const z=function(){let{enabled:e,onReceive:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=(0,k.vt)();(0,W.A)((()=>({enabled:e,polling:!0,fetch:()=>(0,j.PE)(a),onReceive:t,force:!0,pollingOptions:{pollingInterval:1e3}})),[a,t])},Y=function(){let{state:e,hasConfirmed:t,onReceive:a,onProgress:l,onStopPolling:o,waitFor:r=6e4}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{spaceId:s}=e||{};z({enabled:t,onReceive:a}),(0,n.useEffect)((()=>{let e=!0,a=null,n=r;return s&&t&&(a=setInterval((()=>{n-=1e3,null===l||void 0===l||l({timeLeft:n}),0==n&&(null===o||void 0===o||o(),clearInterval(a),a=null)}),1e3)),()=>{e=!1,a&&(clearInterval(a),a=null)}}),[s,t])};var J=a(87659),Z=a(63314);const q=3e5,O=e=>{let{subCallback:t}=e;const a=(0,o.J)(),[r,c]=(0,n.useState)(),[i,d]=(0,n.useState)({}),[u,m]=(0,n.useState)(),[p,,b]=(0,J.A)(),[f,,g]=(0,J.A)(),[y,E]=(0,n.useState)(q),h=(e=>{var t,a;let{url:n}=e;const l=(0,T.xf)(F({url:n}));return{loaded:"loading"!==l.state,value:null===(t=l.contents)||void 0===t?void 0:t.data,hasError:"hasError"===l.state,error:null===(a=l.contents)||void 0===a||null===(a=a.response)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.errorMsgKey}})({url:t}),{value:v={}}=h||{},{subscriptionId:S}=v,C=B({subscriptionId:S}),I=M(),{refresh:k}=(0,R.JN)(),A=(0,n.useCallback)((function(){let{data:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{trialEndsAt:t}=e||{};e&&!t&&(k(),setTimeout((()=>{I()}),1e3))}),[I,k]),L=(0,n.useCallback)((e=>{let{timeLeft:t}=e;E(t)}),[E]),_=(0,n.useCallback)((()=>{m({errorKey:"FETimeout"}),c(!1)}),[m,c]);Y({state:i,hasConfirmed:f,onReceive:A,onProgress:L,onStopPolling:_,waitFor:q});const N=(0,n.useCallback)((()=>{c(!0),g(),C(i),b()}),[c,C,b,i]),P=(0,n.useCallback)((()=>{d((e=>({...e,spaceId:void 0})))}),[d]);return n.createElement(n.Fragment,null,n.createElement(l.Modal,{"data-testid":"aws-modal",backdropProps:{backdropBlur:!0}},n.createElement(Z.Ay,{feature:"LabraSpacesSelector"},n.createElement(s,{isMobile:a},n.createElement(l.ModalHeader,null,n.createElement(l.Flex,{gap:2,alignItems:"center"},n.createElement(l.Icon,{name:"netdataPress",color:"text"}),n.createElement(l.H4,null,"Welcome to Netdata!"))),n.createElement(l.ModalBody,{padding:[4,4,8,4]},n.createElement(x,{state:i,setState:d,spacesLoadable:h,isLoading:r,timeLeft:y,error:u})),n.createElement(K,{isLoading:r})))),n.createElement(w,{state:i,forceHiddenConfirmation:p,onConfirm:N,onDecline:P}))}}}]);