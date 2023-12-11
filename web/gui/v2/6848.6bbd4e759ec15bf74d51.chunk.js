!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="511691f8-e353-4f04-b719-455699e4750b",e._sentryDebugIdIdentifier="sentry-dbid-511691f8-e353-4f04-b719-455699e4750b")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"8b7b01b6c705cf50f8050ce0fb8fc6b58fe68567"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[6848],{39766:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(29439),o=(n(21249),n(57640),n(9924),n(47941),n(67294)),a=n(65565),i=n(96104),l=n(97945),c=n(67622),d=n(46667),u=n(22648),s=n(27261),f=n(6973),g=n(91128),h=n(4514),m=n(89149),v=n(71893),p=n(93416),b=n(82902),y=n(50308),x=n.n(y),E=n(53030),w=function(e){var t=e.startAddingNodes,n=void 0===t?x():t,r=e.startShowingIntegrations,a=void 0===r?x():r,i=e.close,l=void 0===i?x():i,c=e.children,d=(0,o.useCallback)((function(){l(),n()}),[n]),u=(0,o.useCallback)((function(){l(),a()}),[a]);return o.createElement(p.Flex,{column:!0,gap:1,padding:[2,2,1],zIndex:1,border:{side:"top",color:"border"}},o.createElement(p.Flex,{gap:2,justifyContent:"end"},o.createElement(E.Z,{icon:"nodes_hollow",flavour:"hollow",onClick:d,small:!0,label:"Add Nodes"}),o.createElement(p.Button,{icon:"integrations",flavour:"hollow",onClick:u,small:!0,label:"Integrations"})),c)},k=n(38671),I=n(6015),C=n(32356),Z=n(71371),A=n(13477),_=n(34735),T=n(5710),F=n(37503),N=function(e){var t=e.onAnchorClick,n=(0,_.Z)(),r=n.loaded,a=n.hasLimitations,i=n.maxNodes;return r&&a?o.createElement(p.Flex,{gap:2,padding:[3]},o.createElement(p.Icon,{name:"warning_triangle",size:"small",color:"warning"}),o.createElement(p.Text,null,"Your plan is limited to ",i," nodes."," ",o.createElement(F.Z,{onClick:t},o.createElement(p.Text,{color:"primary"},"Upgrade for no limitations"))," ","or"," ",o.createElement(T.Z,{onClick:t},o.createElement(p.Text,{color:"primary"},"review your Space active Nodes")),".")):null},S=function(e){var t=e.onAnchorClick,n=void 0===t?x():t;return(0,A.Iy)("isAnonymous")?null:o.createElement(N,{onAnchorClick:n})},D=["filters"],B=(0,v.default)(p.Drop).attrs({backdrop:!0,align:{top:"bottom",right:"right"},animation:!0,background:"modalBackground",column:!0,margin:[2,0,0],padding:[2,0],round:4,width:200}).withConfig({displayName:"dropdown__Dropdown",componentId:"sc-1birv08-0"})([""]),M=(0,o.memo)((function(e){var t=e.target,n=e.onClose,r=e.onAddNodes,a=(0,i.fX)(),l=(0,g.Z)();(0,o.useEffect)((function(){l()}),[]);var c=(0,k.Z)().onIntegrationsClick;return o.createElement(B,{target:t,onEsc:n,onClickOutside:n},o.createElement(p.Flex,{column:!0,height:{max:"60vh"}},o.createElement(p.Flex,{flex:"1",overflow:"hidden"},o.createElement(p.Flex,{column:!0,flex:!0},o.createElement(p.Flex,{alignItems:"center",padding:[3],border:{side:"bottom",color:"border"},height:12,flex:!1},o.createElement(p.Text,{strong:!0},"Visualizing data in space from ",a.length||"all"," ",(0,b.V6)(a.length))),o.createElement(S,{onAnchorClick:n}),o.createElement(C.Z,{testIdPrefix:"node-ids",param:"selectedNodeIds",groupProps:{collapsible:!1,background:"modalBackground",padding:[3],flex:"1",overflow:"hidden"},height:"auto",width:"100%"})),o.createElement(I.ZP,{basis:60,baseWidth:60,flex:!1,title:"Dynamic filters",includedTabs:D,loaded:!0,onClose:n,groupProps:{background:"modalBackground"},background:"modalBackground"})),o.createElement(w,{startAddingNodes:r,startShowingIntegrations:c,close:n},o.createElement(Z.Z,null))))})),P=(0,o.memo)((function(){var e=(0,u.m)(),t=(0,d.Z)(!1),n=(0,r.Z)(t,4),v=n[0],p=n[1],b=n[3],y=(0,o.useRef)(),x=(0,i.fX)(),E=(0,l.HZ)().length,w=(0,l.e5)().length,k=(0,l.mf)().length,I=(0,l.Y0)().length,C=(0,l.HZ)(x.length?x:void 0).length,Z=(0,l.e5)(x.length?x:void 0).length,A=(0,l.mf)(x.length?x:void 0).length,_=(0,l.Y0)(x.length?x:void 0).length,T=(0,o.useMemo)((function(){return{live:{selected:C,total:E,statusText:"Live"},stale:{selected:Z,total:w,statusText:"Stale"},offline:{selected:A,total:k,statusText:"Offline"},unseen:{selected:_,total:I,statusText:"Unseen"}}}),[E,w,k,I,C,Z,A]),F=(0,g.Z)();(0,a.Z)((function(){F(v)}),[v]);var N=(0,d.Z)(),S=(0,r.Z)(N,4),D=S[0],B=S[2],P=S[3];return o.createElement(o.Fragment,null,o.createElement(c.Z,{ref:y,testid:"globalFilter-nodes",icon:"nodes",onClick:p,round:1,padding:e?[1]:[2],width:"auto",cursor:"pointer",selected:v},o.createElement(h.Z,{"data-testid":"nodesIndicator",alignItems:"center",justifyContent:"end",gap:2},Object.keys(T).map((function(t){return o.createElement(s.Z,{key:t,statusText:T[t].statusText,total:T[t].total,selected:T[t].selected,statusColor:f.B[t],isScreenSmall:e})})))),y.current&&v&&o.createElement(M,{target:y.current,onClose:b,onAddNodes:B}),D&&o.createElement(m.Z,{onClose:P}))}))},28091:function(e,t,n){var r=n(46916),o=n(19670),a=n(70030),i=n(58173),l=n(89190),c=n(29909),d=n(35005),u=n(66462),s=n(76178),f=d("Promise"),g="AsyncFromSyncIterator",h=c.set,m=c.getterFor(g),v=function(e,t,n){var r=e.done;f.resolve(e.value).then((function(e){t(s(e,r))}),n)},p=function(e){e.type=g,h(this,e)};p.prototype=l(a(u),{next:function(){var e=m(this);return new f((function(t,n){var a=o(r(e.next,e.iterator));v(a,t,n)}))},return:function(){var e=m(this).iterator;return new f((function(t,n){var a=i(e,"return");if(void 0===a)return t(s(void 0,!0));var l=o(r(a,e));v(l,t,n)}))}}),e.exports=p},6790:function(e,t,n){var r=n(43157),o=n(26244),a=n(7207),i=n(49974),l=function(e,t,n,c,d,u,s,f){for(var g,h,m=d,v=0,p=!!s&&i(s,f);v<c;)v in n&&(g=p?p(n[v],v,t):n[v],u>0&&r(g)?(h=o(g),m=l(e,t,g,h,m,u-1)-1):(a(m+1),e[m]=g),m++),v++;return m};e.exports=l},62617:function(e,t,n){var r=n(46916),o=n(60614),a=n(19670),i=n(24942),l=n(71246),c=n(58173),d=n(5112),u=n(28091),s=d("asyncIterator");e.exports=function(e){var t,n=a(e),d=!0,f=c(n,s);return o(f)||(f=l(n),d=!1),void 0!==f?t=r(f,n):(t=n,d=!0),a(t),i(d?t:new u(i(t)))}},72897:function(e,t,n){var r=n(46916),o=n(19670),a=n(24942),i=n(71246);e.exports=function(e,t){t&&"string"===typeof e||o(e);var n=i(e);return a(o(void 0!==n?r(n,e):e))}},34553:function(e,t,n){var r=n(82109),o=n(42092).findIndex,a=n(51223),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(i)},86535:function(e,t,n){var r=n(82109),o=n(6790),a=n(19662),i=n(47908),l=n(26244),c=n(65417);r({target:"Array",proto:!0},{flatMap:function(e){var t,n=i(this),r=l(n);return a(e),(t=c(n,0)).length=o(t,n,n,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},99244:function(e,t,n){n(51223)("flatMap")},74326:function(e,t,n){var r=n(82109),o=n(46916),a=n(19662),i=n(19670),l=n(70111),c=n(24942),d=n(45348),u=n(76178),s=n(62617),f=n(21753),g=n(31913),h=d((function(e){var t=this,n=t.iterator,r=t.mapper;return new e((function(a,c){var d=function(e){t.done=!0,c(e)},g=function(e){f(n,d,e,d)},h=function(){try{e.resolve(i(o(t.next,n))).then((function(n){try{if(i(n).done)t.done=!0,a(u(void 0,!0));else{var o=n.value;try{var c=r(o,t.counter++),f=function(e){try{t.inner=s(e),m()}catch(n){g(n)}};l(c)?e.resolve(c).then(f,g):f(c)}catch(h){g(h)}}}catch(v){d(v)}}),d)}catch(c){d(c)}},m=function(){var n=t.inner;if(n)try{e.resolve(i(o(n.next,n.iterator))).then((function(e){try{i(e).done?(t.inner=null,h()):a(u(e.value,!1))}catch(n){g(n)}}),g)}catch(r){g(r)}else h()};m()}))}));r({target:"AsyncIterator",proto:!0,real:!0,forced:g},{flatMap:function(e){return i(this),a(e),new h(c(this),{mapper:e,inner:null})}})},82499:function(e,t,n){var r=n(82109),o=n(46916),a=n(19662),i=n(19670),l=n(24942),c=n(72897),d=n(54956),u=n(99212),s=n(31913),f=d((function(){for(var e,t,n=this.iterator,r=this.mapper;;){if(t=this.inner)try{if(!(e=i(o(t.next,t.iterator))).done)return e.value;this.inner=null}catch(a){u(n,"throw",a)}if(e=i(o(this.next,n)),this.done=!!e.done)return;try{this.inner=c(r(e.value,this.counter++),!1)}catch(a){u(n,"throw",a)}}}));r({target:"Iterator",proto:!0,real:!0,forced:s},{flatMap:function(e){return i(this),a(e),new f(l(this),{mapper:e,inner:null})}})}}]);