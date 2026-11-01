(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function qM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sd={exports:{}},de={};var l0;function YM(){if(l0)return de;l0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function z(I,ht,$){this.props=I,this.context=ht,this.refs=x,this.updater=$||R}z.prototype.isReactComponent={},z.prototype.setState=function(I,ht){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ht,"setState")},z.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function U(){}U.prototype=z.prototype;function w(I,ht,$){this.props=I,this.context=ht,this.refs=x,this.updater=$||R}var H=w.prototype=new U;H.constructor=w,M(H,z.prototype),H.isPureReactComponent=!0;var F=Array.isArray;function O(){}var G={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(I,ht,$){var at=$.ref;return{$$typeof:o,type:I,key:ht,ref:at!==void 0?at:null,props:$}}function B(I,ht){return C(I.type,ht,I.props)}function W(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function st(I){var ht={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function($){return ht[$]})}var mt=/\/+/g;function ot(I,ht){return typeof I=="object"&&I!==null&&I.key!=null?st(""+I.key):ht.toString(36)}function k(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(ht){I.status==="pending"&&(I.status="fulfilled",I.value=ht)},function(ht){I.status==="pending"&&(I.status="rejected",I.reason=ht)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function it(I,ht,$,at,Rt){var Ot=typeof I;(Ot==="undefined"||Ot==="boolean")&&(I=null);var Ut=!1;if(I===null)Ut=!0;else switch(Ot){case"bigint":case"string":case"number":Ut=!0;break;case"object":switch(I.$$typeof){case o:case e:Ut=!0;break;case _:return Ut=I._init,it(Ut(I._payload),ht,$,at,Rt)}}if(Ut)return Rt=Rt(I),Ut=at===""?"."+ot(I,0):at,F(Rt)?($="",Ut!=null&&($=Ut.replace(mt,"$&/")+"/"),it(Rt,ht,$,"",function(P){return P})):Rt!=null&&(W(Rt)&&(Rt=B(Rt,$+(Rt.key==null||I&&I.key===Rt.key?"":(""+Rt.key).replace(mt,"$&/")+"/")+Ut)),ht.push(Rt)),1;Ut=0;var Ct=at===""?".":at+":";if(F(I))for(var Yt=0;Yt<I.length;Yt++)at=I[Yt],Ot=Ct+ot(at,Yt),Ut+=it(at,ht,$,Ot,Rt);else if(Yt=E(I),typeof Yt=="function")for(I=Yt.call(I),Yt=0;!(at=I.next()).done;)at=at.value,Ot=Ct+ot(at,Yt++),Ut+=it(at,ht,$,Ot,Rt);else if(Ot==="object"){if(typeof I.then=="function")return it(k(I),ht,$,at,Rt);throw ht=String(I),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return Ut}function j(I,ht,$){if(I==null)return I;var at=[],Rt=0;return it(I,at,"","",function(Ot){return ht.call($,Ot,Rt++)}),at}function St(I){if(I._status===-1){var ht=I._result,$=ht();$.then(function(at){(I._status===0||I._status===-1)&&(I._status=1,I._result=at,$.status===void 0&&($.status="fulfilled",$.value=at))},function(at){(I._status===0||I._status===-1)&&(I._status=2,I._result=at,$.status===void 0&&($.status="rejected",$.reason=at))}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var At=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Ht(I){var ht=G.T,$={};$.types=ht!==null?ht.types:null,G.T=$;try{var at=I(),Rt=G.S;Rt!==null&&Rt($,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(O,At)}catch(Ot){At(Ot)}finally{ht!==null&&$.types!==null&&(ht.types=$.types),G.T=ht}}function oe(I){var ht=G.T;if(ht!==null){var $=ht.types;$===null?ht.types=[I]:$.indexOf(I)===-1&&$.push(I)}else Ht(oe.bind(null,I))}var ge={map:j,forEach:function(I,ht,$){j(I,function(){ht.apply(this,arguments)},$)},count:function(I){var ht=0;return j(I,function(){ht++}),ht},toArray:function(I){return j(I,function(ht){return ht})||[]},only:function(I){if(!W(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return de.Activity=g,de.Children=ge,de.Component=z,de.Fragment=i,de.Profiler=l,de.PureComponent=w,de.StrictMode=r,de.Suspense=p,de.ViewTransition=y,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,de.__COMPILER_RUNTIME={__proto__:null,c:function(I){return G.H.useMemoCache(I)}},de.addTransitionType=oe,de.cache=function(I){return function(){return I.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(I,ht,$){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var at=M({},I.props),Rt=I.key;if(ht!=null)for(Ot in ht.key!==void 0&&(Rt=""+ht.key),ht)!D.call(ht,Ot)||Ot==="key"||Ot==="__self"||Ot==="__source"||Ot==="ref"&&ht.ref===void 0||(at[Ot]=ht[Ot]);var Ot=arguments.length-2;if(Ot===1)at.children=$;else if(1<Ot){for(var Ut=Array(Ot),Ct=0;Ct<Ot;Ct++)Ut[Ct]=arguments[Ct+2];at.children=Ut}return C(I.type,Rt,at)},de.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},de.createElement=function(I,ht,$){var at,Rt={},Ot=null;if(ht!=null)for(at in ht.key!==void 0&&(Ot=""+ht.key),ht)D.call(ht,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(Rt[at]=ht[at]);var Ut=arguments.length-2;if(Ut===1)Rt.children=$;else if(1<Ut){for(var Ct=Array(Ut),Yt=0;Yt<Ut;Yt++)Ct[Yt]=arguments[Yt+2];Rt.children=Ct}if(I&&I.defaultProps)for(at in Ut=I.defaultProps,Ut)Rt[at]===void 0&&(Rt[at]=Ut[at]);return C(I,Ot,Rt)},de.createRef=function(){return{current:null}},de.forwardRef=function(I){return{$$typeof:d,render:I}},de.isValidElement=W,de.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:St}},de.memo=function(I,ht){return{$$typeof:m,type:I,compare:ht===void 0?null:ht}},de.startTransition=Ht,de.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},de.use=function(I){return G.H.use(I)},de.useActionState=function(I,ht,$){return G.H.useActionState(I,ht,$)},de.useCallback=function(I,ht){return G.H.useCallback(I,ht)},de.useContext=function(I){return G.H.useContext(I)},de.useDebugValue=function(){},de.useDeferredValue=function(I,ht){return G.H.useDeferredValue(I,ht)},de.useEffect=function(I,ht){return G.H.useEffect(I,ht)},de.useEffectEvent=function(I){return G.H.useEffectEvent(I)},de.useId=function(){return G.H.useId()},de.useImperativeHandle=function(I,ht,$){return G.H.useImperativeHandle(I,ht,$)},de.useInsertionEffect=function(I,ht){return G.H.useInsertionEffect(I,ht)},de.useLayoutEffect=function(I,ht){return G.H.useLayoutEffect(I,ht)},de.useMemo=function(I,ht){return G.H.useMemo(I,ht)},de.useOptimistic=function(I,ht){return G.H.useOptimistic(I,ht)},de.useReducer=function(I,ht,$){return G.H.useReducer(I,ht,$)},de.useRef=function(I){return G.H.useRef(I)},de.useState=function(I){return G.H.useState(I)},de.useSyncExternalStore=function(I,ht,$){return G.H.useSyncExternalStore(I,ht,$)},de.useTransition=function(){return G.H.useTransition()},de.version="19.3.1",de}var u0;function Hp(){return u0||(u0=1,sd.exports=YM()),sd.exports}var Js=Hp();const ct=qM(Js);var od={exports:{}},al={},ld={exports:{}},ud={};var c0;function WM(){return c0||(c0=1,(function(o){function e(k,it){var j=k.length;k.push(it);t:for(;0<j;){var St=j-1>>>1,At=k[St];if(0<l(At,it))k[St]=it,k[j]=At,j=St;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var it=k[0],j=k.pop();if(j!==it){k[0]=j;t:for(var St=0,At=k.length,Ht=At>>>1;St<Ht;){var oe=2*(St+1)-1,ge=k[oe],I=oe+1,ht=k[I];if(0>l(ge,j))I<At&&0>l(ht,ge)?(k[St]=ht,k[I]=j,St=I):(k[St]=ge,k[oe]=j,St=oe);else if(I<At&&0>l(ht,j))k[St]=ht,k[I]=j,St=I;else break t}}return it}function l(k,it){var j=k.sortIndex-it.sortIndex;return j!==0?j:k.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,g=null,y=3,S=!1,E=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(k){for(var it=i(m);it!==null;){if(it.callback===null)r(m);else if(it.startTime<=k)r(m),it.sortIndex=it.expirationTime,e(p,it);else break;it=i(m)}}function H(k){if(R=!1,w(k),!E)if(i(p)!==null)E=!0,F||(F=!0,W());else{var it=i(m);it!==null&&ot(H,it.startTime-k)}}var F=!1,O=-1,G=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<G)}function B(){if(M=!1,F){var k=o.unstable_now();D=k;var it=!0;try{t:{E=!1,R&&(R=!1,z(O),O=-1),S=!0;var j=y;try{e:{for(w(k),g=i(p);g!==null&&!(g.expirationTime>k&&C());){var St=g.callback;if(typeof St=="function"){g.callback=null,y=g.priorityLevel;var At=St(g.expirationTime<=k);if(k=o.unstable_now(),typeof At=="function"){g.callback=At,w(k),it=!0;break e}g===i(p)&&r(p),w(k)}else r(p);g=i(p)}if(g!==null)it=!0;else{var Ht=i(m);Ht!==null&&ot(H,Ht.startTime-k),it=!1}}break t}finally{g=null,y=j,S=!1}it=void 0}}finally{it?W():F=!1}}}var W;if(typeof U=="function")W=function(){U(B)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,mt=st.port2;st.port1.onmessage=B,W=function(){mt.postMessage(null)}}else W=function(){x(B,0)};function ot(k,it){O=x(function(){k(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(k){switch(y){case 1:case 2:case 3:var it=3;break;default:it=y}var j=y;y=it;try{return k()}finally{y=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,it){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=y;y=k;try{return it()}finally{y=j}},o.unstable_scheduleCallback=function(k,it,j){var St=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,k){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=j+At,k={id:_++,callback:it,priorityLevel:k,startTime:j,expirationTime:At,sortIndex:-1},j>St?(k.sortIndex=j,e(m,k),i(p)===null&&k===i(m)&&(R?(z(O),O=-1):R=!0,ot(H,j-St))):(k.sortIndex=At,e(p,k),E||S||(E=!0,F||(F=!0,W()))),k},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(k){var it=y;return function(){var j=y;y=it;try{return k.apply(this,arguments)}finally{y=j}}}})(ud)),ud}var f0;function ZM(){return f0||(f0=1,ld.exports=WM()),ld.exports}var cd={exports:{}},wn={};var h0;function KM(){if(h0)return wn;h0=1;var o=Hp();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:_,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.browser=function(_){return{$$typeof:c,_reason:_}},wn.createPortal=function(_,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(_,g,null,y)},wn.flushSync=function(_){var g=p.T,y=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=y,r.d.f()}},wn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},wn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},wn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var y=g.as,S=m(y,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:R}):y==="script"&&r.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},wn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(_)},wn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,S=m(y,g.crossOrigin);r.d.L(_,y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},wn.preloadModule=function(_,g){if(typeof _=="string")if(g){var y=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(_)},wn.requestFormReset=function(_){r.d.r(_)},wn.unstable_batchedUpdates=function(_,g){return _(g)},wn.useFormState=function(_,g,y){return p.H.useFormState(_,g,y)},wn.useFormStatus=function(){return p.H.useHostTransitionStatus()},wn.version="19.3.1",wn}var d0;function jM(){if(d0)return cd.exports;d0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=KM(),cd.exports}var p0;function QM(){if(p0)return al;p0=1;var o=ZM(),e=Hp(),i=jM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,u,f))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=y(t);return a===null||R(n,t,a.child,{foundSelf:!1}),n}function R(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&R(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,z=null;function U(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function w(t,n,a){return t===a?(z=t,!1):t===n?(z!==null&&(x=t),!0):!1}function H(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function F(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var f=n;f;f=a(f))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,G=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),mt=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),oe=Symbol.for("react.legacy_hidden"),ge=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),$=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Symbol.for("react.client.reference");function Ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case st:return"Profiler";case W:return"StrictMode";case it:return"Suspense";case j:return"SuspenseList";case Ht:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ot:return t.displayName||"Context";case mt:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case St:return n=t.displayName||null,n!==null?n:Ot(t.type)||"Memo";case At:n=t._payload,t=t._init;try{return Ot(t(n))}catch{}}return null}var Ut=Array.isArray,Ct=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},Tt=[],yt=-1;function _t(t){return{current:t}}function dt(t){0>yt||(t.current=Tt[yt],Tt[yt]=null,yt--)}function Mt(t,n){yt++,Tt[yt]=t.current,t.current=n}var bt=_t(null),zt=_t(null),le=_t(null),ce=_t(null);function N(t,n){switch(Mt(le,n),Mt(zt,t),Mt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?_v(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=_v(n),t=vv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}dt(bt),Mt(bt,t)}function b(){dt(bt),dt(zt),dt(le)}function et(t){var n=t.memoizedState;n!==null&&(Us._currentValue=n.memoizedState,Mt(ce,t)),n=bt.current;var a=vv(n,t.type);n!==a&&(Mt(zt,t),Mt(bt,a))}function ft(t){zt.current===t&&(dt(bt),dt(zt)),ce.current===t&&(dt(ce),Us._currentValue=P)}var Et,pt;function Zt(t){if(Et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+pt}var Pt=!1;function Qt(t,n){if(!t||Pt)return"";Pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(Ft){var q=Ft}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(Ft){q=Ft}vt=!1;try{var nt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),vt=!0,new t}finally{vt&&(nt!==void 0?Object.defineProperty(t.prototype,"props",nt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ft){q=Ft}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(Ft){if(Ft&&q&&typeof Ft.stack=="string")return[Ft.stack,q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var L=v.split(`
`),K=T.split(`
`);for(u=s=0;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(s===L.length||u===K.length)for(s=L.length-1,u=K.length-1;1<=s&&0<=u&&L[s]!==K[u];)u--;for(;1<=s&&0<=u;s--,u--)if(L[s]!==K[u]){if(s!==1||u!==1)do if(s--,u--,0>u||L[s]!==K[u]){var rt=`
`+L[s].replace(" at new "," at ");return t.displayName&&rt.includes("<anonymous>")&&(rt=rt.replace("<anonymous>",t.displayName)),rt}while(1<=s&&0<=u);break}}}finally{Pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zt(a):""}function ee(t,n){switch(t.tag){case 26:case 27:case 5:return Zt(t.type);case 16:return Zt("Lazy");case 13:return t.child!==n&&n!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Qt(t.type,!1);case 11:return Qt(t.type.render,!1);case 1:return Qt(t.type,!0);case 31:return Zt("Activity");case 30:return Zt("ViewTransition");default:return""}}function Dt(t){try{var n="",a=null;do n+=ee(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Gt=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,ne=o.unstable_cancelCallback,Vt=o.unstable_shouldYield,me=o.unstable_requestPaint,X=o.unstable_now,Lt=o.unstable_getCurrentPriorityLevel,Bt=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,xt=o.unstable_LowPriority,te=o.unstable_IdlePriority,pe=o.log,Xe=o.unstable_setDisableYieldValue,Re=null,$e=null;function pn(t){if(typeof pe=="function"&&Xe(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Re,t)}catch{}}var Nn=Math.clz32?Math.clz32:wl,ea=Math.log,po=Math.LN2;function wl(t){return t>>>=0,t===0?32:31-(ea(t)/po|0)|0}var cr=256,na=262144,fr=4194304;function ci(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=ci(s):(v&=T,v!==0?u=ci(v):a||(a=T&~t,a!==0&&(u=ci(a))))):(T=s&~f,T!==0?u=ci(T):v!==0?u=ci(v):a||(a=s&~t,a!==0&&(u=ci(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Dl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Nn(a),u=1<<s;n|=t[s],a&=~u}return n}function Lc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nl(){var t=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),t}function mo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function dr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Oc(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,L=t.expirationTimes,K=t.hiddenUpdates;for(a=v&~a;0<a;){var rt=31-Nn(a),vt=1<<rt;T[rt]=0,L[rt]=-1;var q=K[rt];if(q!==null)for(K[rt]=null,rt=0;rt<q.length;rt++){var nt=q[rt];nt!==null&&(nt.lane&=-536870913)}a&=~vt}s!==0&&A(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function A(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Nn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Q(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Nn(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function lt(t,n){var a=n&-n;return a=(a&42)!==0?1:ut(a),(a&(t.suspendedLanes|n))!==0?0:a}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function J(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nt(){var t=Yt.p;return t!==0?t:(t=window.event,t===void 0?32:e0(t.type))}function Xt(t,n){var a=Yt.p;try{return Yt.p=t,n()}finally{Yt.p=a}}var Wt=Math.random().toString(36).slice(2),It="__reactFiber$"+Wt,Jt="__reactProps$"+Wt,se="__reactContainer$"+Wt,ae="__reactEvents$"+Wt,Ee="__reactListeners$"+Wt,Be="__reactHandles$"+Wt,Qe="__reactResources$"+Wt,Pe="__reactMarker$"+Wt,Ne="__reactLoad$"+Wt;function re(t){delete t[It],delete t[Jt],delete t[Ee],delete t[Be]}function ze(t){var n;if(n=t[It])return n;for(var a=t.parentNode;a;){if(n=a[se]||a[It]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Pv(t);t!==null;){if(a=t[It])return a;t=Pv(t)}return n}t=a,a=t.parentNode}return null}function Se(t){if(t=t[It]||t[se]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Jn(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ue(t){t[Pe]=!0}function Aa(t){t[Ne]=void 0}var Ze=new Set,zn={};function ln(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(zn[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var Un=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kr={},Oi={};function cx(t){return Gt.call(Oi,t)?!0:Gt.call(Kr,t)?!1:Un.test(t)?Oi[t]=!0:(Kr[t]=!0,!1)}var Le=!1;function im(){var t=Le;return Le=!1,t}function Ul(t,n,a){if(cx(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Ll(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function $n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function am(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fx(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pc(t){if(!t._valueTracker){var n=am(t)?"checked":"value";t._valueTracker=fx(t,n,""+t[n])}}function rm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=am(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var hx=/[\n"\\]/g;function fi(t){return t.replace(hx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zc(t,n,a,s,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$n(n)):t.value!==""+$n(n)&&(t.value=""+$n(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?Ic(t,$n(t.value)):Ic(t,$n(n)):a!=null?Ic(t,$n(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+$n(T):t.removeAttribute("name")}function sm(t,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Pc(t);return}a=a!=null?""+$n(a):"",n=n!=null?""+$n(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Pc(t)}function Ic(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function jr(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+$n(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function om(t,n,a){if(n!=null&&(n=""+$n(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$n(a):""}function lm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$n(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Pc(t)}function Qr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var dx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function um(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||dx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function cm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Le=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(um(t,u,s),Le=!0)}else for(var f in n)n.hasOwnProperty(f)&&um(t,f,n[f])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(t){return mx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var Fc=null;function Hc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function fm(t){var n=Se(t);if(n&&(t=n.stateNode)){var a=t[Jt]||null;t:switch(t=n.stateNode,n.type){case"input":if(zc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Jt]||null;if(!u)throw Error(r(90));zc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&rm(s)}break t;case"textarea":om(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&jr(t,!!a.multiple,n,!1)}}}var Gc=!1;function hm(t,n,a){if(Gc)return t(n,a);Gc=!0;try{var s=t(n);return s}finally{if(Gc=!1,(Jr!==null||$r!==null)&&(Ou(),Jr&&(n=Jr,t=$r,$r=Jr=null,fm(n),t)))for(n=0;n<t.length;n++)fm(t[n])}}function go(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Jt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(aa)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Vc=!1}var Ra=null,Xc=null,Pl=null;function dm(){if(Pl)return Pl;var t,n=Xc,a=n.length,s,u="value"in Ra?Ra.value:Ra.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return Pl=u.slice(t,1<s?1-s:void 0)}function zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function pm(){return!1}function In(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Il:pm,this.isPropagationStopped=pm,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),n}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=In(Ca),vo=O({},Ca,{view:0,detail:0}),gx=In(vo),kc,qc,yo,Fl=O({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(kc=t.screenX-yo.screenX,qc=t.screenY-yo.screenY):qc=kc=0,yo=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),mm=In(Fl),_x=O({},Fl,{dataTransfer:0}),vx=In(_x),yx=O({},vo,{relatedTarget:0}),Yc=In(yx),xx=O({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=In(xx),Mx=O({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ex=In(Mx),Tx=O({},Ca,{data:0}),gm=In(Tx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Rx[t])?!!n[t]:!1}function Wc(){return Cx}var wx=O({},vo,{key:function(t){if(t.key){var n=bx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dx=In(wx),Nx=O({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=In(Nx),Ux=O({},Ca,{submitter:0}),Lx=In(Ux),Ox=O({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),Px=In(Ox),zx=O({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=In(zx),Bx=O({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=In(Bx),Hx=O({},Ca,{newState:0,oldState:0,source:0}),Gx=In(Hx),Vx=[9,13,27,32],Zc=aa&&"CompositionEvent"in window,xo=null;aa&&"documentMode"in document&&(xo=document.documentMode);var Xx=aa&&"TextEvent"in window&&!xo,vm=aa&&(!Zc||xo&&8<xo&&11>=xo),ym=" ",xm=!1;function Sm(t,n){switch(t){case"keyup":return Vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function kx(t,n){switch(t){case"compositionend":return Mm(n);case"keypress":return n.which!==32?null:(xm=!0,ym);case"textInput":return t=n.data,t===ym&&xm?null:t;default:return null}}function qx(t,n){if(ts)return t==="compositionend"||!Zc&&Sm(t,n)?(t=dm(),Pl=Xc=Ra=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vm&&n.locale!=="ko"?null:n.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Yx[t.type]:n==="textarea"}function Tm(t,n,a,s){Jr?$r?$r.push(s):$r=[s]:Jr=s,n=Hu(n,"onChange"),0<n.length&&(a=new Bl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var So=null,Mo=null;function Wx(t){fv(t,0)}function Hl(t){var n=mn(t);if(rm(n))return t}function bm(t,n){if(t==="change")return n}var Am=!1;if(aa){var Kc;if(aa){var jc="oninput"in document;if(!jc){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),jc=typeof Rm.oninput=="function"}Kc=jc}else Kc=!1;Am=Kc&&(!document.documentMode||9<document.documentMode)}function Cm(){So&&(So.detachEvent("onpropertychange",wm),Mo=So=null)}function wm(t){if(t.propertyName==="value"&&Hl(Mo)){var n=[];Tm(n,Mo,t,Hc(t)),hm(Wx,n)}}function Zx(t,n,a){t==="focusin"?(Cm(),So=n,Mo=a,So.attachEvent("onpropertychange",wm)):t==="focusout"&&Cm()}function Kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Mo)}function jx(t,n){if(t==="click")return Hl(n)}function Qx(t,n){if(t==="input"||t==="change")return Hl(n)}function Jx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Jx;function Eo(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Gt.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function Qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,n){var a=Dm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dm(a)}}function Um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qc(t.document)}return n}function Jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $x=aa&&"documentMode"in document&&11>=document.documentMode,es=null,$c=null,To=null,tf=!1;function Om(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tf||es==null||es!==Qc(s)||(s=es,"selectionStart"in s&&Jc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),To&&Eo(To,s)||(To=s,s=Hu($c,"onSelect"),0<s.length&&(n=new Bl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=es)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ns={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},ef={},Pm={};aa&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function mr(t){if(ef[t])return ef[t];if(!ns[t])return t;var n=ns[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pm)return ef[t]=n[a];return t}var zm=mr("animationend"),Im=mr("animationiteration"),Bm=mr("animationstart"),tS=mr("transitionrun"),eS=mr("transitionstart"),nS=mr("transitioncancel"),Fm=mr("transitionend"),Hm=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Si(t,n){Hm.set(t,n),ln(n,[t])}var iS=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=bi.identifierPrefix;var a=iS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Gm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ms;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function sa(t,n){return t=Gm(t),n=Gm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],is=0,af=0;function Vl(){for(var t=is,n=af=is=0;n<t;){var a=hi[n];hi[n++]=null;var s=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Vm(a,u,f)}}function Xl(t,n,a,s){hi[is++]=t,hi[is++]=n,hi[is++]=a,hi[is++]=s,af|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function rf(t,n,a,s){return Xl(t,n,a,s),kl(t)}function gr(t,n){return Xl(t,null,null,n),kl(t)}function Vm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Nn(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function kl(t){if(50<Yo)throw Yo=0,Lu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var as={};function aS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new aS(t,n,a,s)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ql(t,n,a,s,u,f){var v=0;if(s=t,typeof s=="function")sf(s)&&(v=1);else if(typeof s=="string")v=UM(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ht:return t=kn(31,a,n,u),t.elementType=Ht,t.lanes=f,t;case B:return _r(a.children,u,f,n);case W:v=8,u|=24;break;case st:return t=kn(12,a,n,u|2),t.elementType=st,t.lanes=f,t;case it:return t=kn(13,a,n,u),t.elementType=it,t.lanes=f,t;case j:return t=kn(19,a,n,u),t.elementType=j,t.lanes=f,t;case oe:case I:return t=u|32,t=kn(30,a,n,t),t.elementType=I,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ot:v=10;break t;case mt:v=9;break t;case k:v=11;break t;case St:v=14;break t;case At:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function _r(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function of(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function km(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function lf(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qm=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=qm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Dt(n)},qm.set(t,n),n)}return{value:t,source:n,stack:Dt(n)}}var rs=[],ss=0,Yl=null,bo=0,pi=[],mi=0,wa=null,zi=1,Ii="";function la(t,n){rs[ss++]=bo,rs[ss++]=Yl,Yl=t,bo=n}function Ym(t,n,a){pi[mi++]=zi,pi[mi++]=Ii,pi[mi++]=wa,wa=t;var s=zi;t=Ii;var u=32-Nn(s)-1;s&=~(1<<u),a+=1;var f=32-Nn(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,zi=1<<32-Nn(n)+u|a<<u|s,Ii=f+t}else zi=1<<f|a<<u|s,Ii=t}function Wl(t){t.return!==null&&(la(t,1),Ym(t,1,0))}function uf(t){for(;t===Yl;)Yl=rs[--ss],rs[ss]=null,bo=rs[--ss],rs[ss]=null;for(;t===wa;)wa=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null}function Wm(t,n){pi[mi++]=zi,pi[mi++]=Ii,pi[mi++]=wa,zi=n.id,Ii=n.overflow,wa=t}var yn=null,Ke=null,Me=!1,Da=null,gi=!1,cf=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(di(n,t)),cf}function Zm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[It]=t,n[Jt]=s,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Zo.length;a++)Ae(Zo[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),sm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),lm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||mv(n.textContent,a)?(s.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),s.onScroll!=null&&Ae("scroll",n),s.onScrollEnd!=null&&Ae("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||Na(t,!0)}function Zl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:yn=yn.return}}function os(t){if(t!==yn)return!1;if(!Me)return Zl(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hh(t.type,t.memoizedProps)),a=!a),a&&Ke&&Na(t),Zl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Ov(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Ov(t)}else n===27?(n=Ke,Wa(t.type)?(t=Kh,Kh=null,Ke=t):Ke=n):Ke=yn?vi(t.stateNode.nextSibling):null;return!0}function vr(){Ke=yn=null,Me=!1}function ff(){var t=Da;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Da=null),t}function Ao(t){Da===null?Da=[t]:Da.push(t)}var hf=_t(null),yr=null,ua=null;function Ua(t,n,a){Mt(hf,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=hf.current,dt(hf)}function Kl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function df(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var L=0;L<n.length;L++)if(T.context===n[L]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Kl(f.return,a,t),s||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Kl(v,a,t),v=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Kl(u.return,a,t),v=u.child,v=v!==null?v.sibling:null):v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function xr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;ti(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===ce.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Us):t=[Us])}u=u.return}return t!==null&&df(n,t,a,s),n.flags|=262144,t!==null}function jl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){yr=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Km(yr,t)}function Ql(t,n){return yr===null&&Sr(t),Km(t,n)}function Km(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(r(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var rS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sS=o.unstable_scheduleCallback,oS=o.unstable_NormalPriority,un={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new rS,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&sS(oS,function(){t.controller.abort()})}function jm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Co=null;function lS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var wo=null,mf=0,Mr=0,ls=null;function uS(t,n){if(wo===null){var a=wo=[];mf=0,Mr=Nh(),ls={status:"pending",value:void 0,then:function(s){a.push(s)}}}return mf++,n.then(Qm,Qm),n}function Qm(){if(--mf===0&&(Co=null,wo!==null)){ls!==null&&(ls.status="fulfilled");var t=wo;wo=null,Mr=0,ls=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Jm=Ct.S;Ct.S=function(t,n){if(k_=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uS(t,n),Co!==null)for(var a=As;a!==null;)jm(a,Co),a=a.next;if(a=t.types,a!==null){for(var s=As;s!==null;)jm(s,a),s=s.next;if(Mr!==0){s=Co,s===null&&(s=Co=[]);for(var u=0;u<a.length;u++){var f=a[u];s.indexOf(f)===-1&&s.push(f)}}}Jm!==null&&Jm(t,n)};var Er=_t(null);function gf(){var t=Er.current;return t!==null?t:We.pooledCache}function Jl(t,n){n===null?Mt(Er,Er.current):Mt(Er,n.pool)}function $m(){var t=gf();return t===null?null:{parent:un._currentValue,pool:t}}var us=Error(r(460)),_f=Error(r(474)),$l=Error(r(542)),tu={then:function(){}};function tg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function eg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ig(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ig(t),t}throw br=n,us}}function Tr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(br=a,us):a}}var br=null;function ng(){if(br===null)throw Error(r(459));var t=br;return br=null,t}function ig(t){if(t===us||t===$l)throw Error(r(483))}var cs=null,Do=0;function eu(t){var n=Do;return Do+=1,cs===null&&(cs=[]),eg(cs,t,n)}function La(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nu(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ag(t){function n(Z,V){if(t){var tt=Z.deletions;tt===null?(Z.deletions=[V],Z.flags|=16):tt.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function s(Z){for(var V=new Map;Z!==null;)Z.key===null?V.set(Z.index,Z):V.set(Z.key,Z),Z=Z.sibling;return V}function u(Z,V){return Z=oa(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,tt){return Z.index=tt,t?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<V?(Z.flags|=2,V):tt):(Z.flags|=134217730,V)):(Z.flags|=1048576,V)}function v(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function T(Z,V,tt,gt){return V===null||V.tag!==6?(V=of(tt,Z.mode,gt),V.return=Z,V):(V=u(V,tt),V.return=Z,V)}function L(Z,V,tt,gt){var Kt=tt.type;return Kt===B?(Z=rt(Z,V,tt.props.children,gt,tt.key),La(Z,tt),Z):V!==null&&(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===At&&Tr(Kt)===V.type)?(V=u(V,tt.props),La(V,tt),V.return=Z,V):(V=ql(tt.type,tt.key,tt.props,null,Z.mode,gt),La(V,tt),V.return=Z,V)}function K(Z,V,tt,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=lf(tt,Z.mode,gt),V.return=Z,V):(V=u(V,tt.children||[]),V.return=Z,V)}function rt(Z,V,tt,gt,Kt){return V===null||V.tag!==7?(V=_r(tt,Z.mode,gt,Kt),V.return=Z,V):(V=u(V,tt),V.return=Z,V)}function vt(Z,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=of(""+V,Z.mode,tt),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case D:return tt=ql(V.type,V.key,V.props,null,Z.mode,tt),La(tt,V),tt.return=Z,tt;case C:return V=lf(V,Z.mode,tt),V.return=Z,V;case At:return V=Tr(V),vt(Z,V,tt)}if(Ut(V)||at(V))return V=_r(V,Z.mode,tt,null),V.return=Z,V;if(typeof V.then=="function")return vt(Z,eu(V),tt);if(V.$$typeof===ot)return vt(Z,Ql(Z,V),tt);nu(Z,V)}return null}function q(Z,V,tt,gt){var Kt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Kt!==null?null:T(Z,V,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case D:return tt.key===Kt?L(Z,V,tt,gt):null;case C:return tt.key===Kt?K(Z,V,tt,gt):null;case At:return tt=Tr(tt),q(Z,V,tt,gt)}if(Ut(tt)||at(tt))return Kt!==null?null:rt(Z,V,tt,gt,null);if(typeof tt.then=="function")return q(Z,V,eu(tt),gt);if(tt.$$typeof===ot)return q(Z,V,Ql(Z,tt),gt);nu(Z,tt)}return null}function nt(Z,V,tt,gt,Kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(tt)||null,T(V,Z,""+gt,Kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case D:return Z=Z.get(gt.key===null?tt:gt.key)||null,L(V,Z,gt,Kt);case C:return Z=Z.get(gt.key===null?tt:gt.key)||null,K(V,Z,gt,Kt);case At:return gt=Tr(gt),nt(Z,V,tt,gt,Kt)}if(Ut(gt)||at(gt))return Z=Z.get(tt)||null,rt(V,Z,gt,Kt,null);if(typeof gt.then=="function")return nt(Z,V,tt,eu(gt),Kt);if(gt.$$typeof===ot)return nt(Z,V,tt,Ql(V,gt),Kt);nu(V,gt)}return null}function Ft(Z,V,tt,gt){for(var Kt=null,we=null,ie=V,fe=V=0,hn=null;ie!==null&&fe<tt.length;fe++){ie.index>fe?(hn=ie,ie=null):hn=ie.sibling;var De=q(Z,ie,tt[fe],gt);if(De===null){ie===null&&(ie=hn);break}t&&ie&&De.alternate===null&&n(Z,ie),V=f(De,V,fe),we===null?Kt=De:we.sibling=De,we=De,ie=hn}if(fe===tt.length)return a(Z,ie),Me&&la(Z,fe),Kt;if(ie===null){for(;fe<tt.length;fe++)ie=vt(Z,tt[fe],gt),ie!==null&&(V=f(ie,V,fe),we===null?Kt=ie:we.sibling=ie,we=ie);return Me&&la(Z,fe),Kt}for(ie=s(ie);fe<tt.length;fe++)hn=nt(ie,Z,fe,tt[fe],gt),hn!==null&&(t&&(De=hn.alternate,De!==null&&ie.delete(De.key===null?fe:De.key)),V=f(hn,V,fe),we===null?Kt=hn:we.sibling=hn,we=hn);return t&&ie.forEach(function(Ja){return n(Z,Ja)}),Me&&la(Z,fe),Kt}function $t(Z,V,tt,gt){if(tt==null)throw Error(r(151));for(var Kt=null,we=null,ie=V,fe=V=0,hn=null,De=tt.next();ie!==null&&!De.done;fe++,De=tt.next()){ie.index>fe?(hn=ie,ie=null):hn=ie.sibling;var Ja=q(Z,ie,De.value,gt);if(Ja===null){ie===null&&(ie=hn);break}t&&ie&&Ja.alternate===null&&n(Z,ie),V=f(Ja,V,fe),we===null?Kt=Ja:we.sibling=Ja,we=Ja,ie=hn}if(De.done)return a(Z,ie),Me&&la(Z,fe),Kt;if(ie===null){for(;!De.done;fe++,De=tt.next())De=vt(Z,De.value,gt),De!==null&&(V=f(De,V,fe),we===null?Kt=De:we.sibling=De,we=De);return Me&&la(Z,fe),Kt}for(ie=s(ie);!De.done;fe++,De=tt.next())De=nt(ie,Z,fe,De.value,gt),De!==null&&(t&&(hn=De.alternate,hn!==null&&ie.delete(hn.key===null?fe:hn.key)),V=f(De,V,fe),we===null?Kt=De:we.sibling=De,we=De);return t&&ie.forEach(function(kM){return n(Z,kM)}),Me&&la(Z,fe),Kt}function ve(Z,V,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===B&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case D:t:{for(var Kt=tt.key;V!==null;){if(V.key===Kt){if(Kt=tt.type,Kt===B){if(V.tag===7){a(Z,V.sibling),gt=u(V,tt.props.children),La(gt,tt),gt.return=Z,Z=gt;break t}}else if(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===At&&Tr(Kt)===V.type){a(Z,V.sibling),gt=u(V,tt.props),La(gt,tt),gt.return=Z,Z=gt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}tt.type===B?(gt=_r(tt.props.children,Z.mode,gt,tt.key),La(gt,tt),gt.return=Z,Z=gt):(gt=ql(tt.type,tt.key,tt.props,null,Z.mode,gt),La(gt,tt),gt.return=Z,Z=gt)}return v(Z);case C:t:{for(Kt=tt.key;V!==null;){if(V.key===Kt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(Z,V.sibling),gt=u(V,tt.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}gt=lf(tt,Z.mode,gt),gt.return=Z,Z=gt}return v(Z);case At:return tt=Tr(tt),ve(Z,V,tt,gt)}if(Ut(tt))return Ft(Z,V,tt,gt);if(at(tt)){if(Kt=at(tt),typeof Kt!="function")throw Error(r(150));return tt=Kt.call(tt),$t(Z,V,tt,gt)}if(typeof tt.then=="function")return ve(Z,V,eu(tt),gt);if(tt.$$typeof===ot)return ve(Z,V,Ql(Z,tt),gt);nu(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(Z,V.sibling),gt=u(V,tt),gt.return=Z,Z=gt):(a(Z,V),gt=of(tt,Z.mode,gt),gt.return=Z,Z=gt),v(Z)):a(Z,V)}return function(Z,V,tt,gt){try{Do=0;var Kt=ve(Z,V,tt,gt);return cs=null,Kt}catch(ie){if(ie===us||ie===$l)throw ie;var we=kn(29,ie,null,Z.mode);return we.lanes=gt,we.return=Z,we}}}var Ar=ag(!0),rg=ag(!1),Oa=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ie&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=kl(t),Vm(t,null,a),n}return Xl(t,s,n,a),kl(t)}function No(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Q(t,a)}}function xf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Sf=!1;function Uo(){if(Sf){var t=ls;if(t!==null)throw t}}function Lo(t,n,a,s){Sf=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var L=T,K=L.next;L.next=null,v===null?f=K:v.next=K,v=L;var rt=t.alternate;rt!==null&&(rt=rt.updateQueue,T=rt.lastBaseUpdate,T!==v&&(T===null?rt.firstBaseUpdate=K:T.next=K,rt.lastBaseUpdate=L))}if(f!==null){var vt=u.baseState;v=0,rt=K=L=null,T=f;do{var q=T.lane&-536870913,nt=q!==T.lane;if(nt?(Ce&q)===q:(s&q)===q){q!==0&&q===Mr&&(Sf=!0),rt!==null&&(rt=rt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ft=t,$t=T;q=n;var ve=a;switch($t.tag){case 1:if(Ft=$t.payload,typeof Ft=="function"){vt=Ft.call(ve,vt,q);break t}vt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=$t.payload,q=typeof Ft=="function"?Ft.call(ve,vt,q):Ft,q==null)break t;vt=O({},vt,q);break t;case 2:Oa=!0}}q=T.callback,q!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=u.callbacks,nt===null?u.callbacks=[q]:nt.push(q))}else nt={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},rt===null?(K=rt=nt,L=vt):rt=rt.next=nt,v|=q;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,u.lastBaseUpdate=nt,u.shared.pending=null}}while(!0);rt===null&&(L=vt),u.baseState=L,u.firstBaseUpdate=K,u.lastBaseUpdate=rt,f===null&&(u.shared.lanes=0),Xa|=v,t.lanes=v,t.memoizedState=vt}}function sg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function og(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)sg(a[t],n)}var Ia=_t(null),iu=_t(0);function lg(t,n){t=ma,Mt(iu,t),Mt(Ia,n),ma=t|n.baseLanes}function Mf(){Mt(iu,ma),Mt(Ia,Ia.current)}function Ef(){ma=iu.current,dt(Ia),dt(iu)}var bn=_t(null),Ln=null;function Ba(t){var n=t.alternate;Mt(An,An.current&1),Mt(bn,t),Ln===null&&(n===null||Ia.current!==null||n.memoizedState!==null)&&(Ln=t)}function Tf(t){Mt(An,An.current),Mt(bn,t),Ln===null&&(Ln=t)}function ug(t){t.tag===22?(Mt(An,An.current),Mt(bn,t),Ln===null&&(Ln=t)):Fa()}function Fa(){Mt(An,An.current),Mt(bn,bn.current)}function ei(t){dt(bn),Ln===t&&(Ln=null),dt(An)}var An=_t(0);function Oo(t,n){Mt(bn,bn.current),Mt(An,n)}function bf(t){dt(An),dt(bn),Ln===t&&(Ln=null)}function au(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wh(a)||Zh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,_e=null,ke=null,cn=null,ru=!1,fs=!1,Rr=!1,su=0,Po=0,hs=null,fS=0;function rn(){throw Error(r(321))}function Af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function Rf(t,n,a,s,u,f){return fa=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ct.H=t===null||t.memoizedState===null?Yg:Wg,Rr=!1,f=a(s,u),Rr=!1,fs&&(f=fg(n,a,s,u)),cg(t),f}function cg(t){Ct.H=du;var n=ke!==null&&ke.next!==null;if(fa=0,cn=ke=_e=null,ru=!1,Po=0,hs=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&jl(t)&&(fn=!0))}function fg(t,n,a,s){_e=t;var u=0;do{if(fs&&(hs=null),Po=0,fs=!1,25<=u)throw Error(r(301));if(u+=1,cn=ke=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Ct.H=yS,f=n(a,s)}while(fs);return f}function hS(){var t=Ct.H,n=t.useState()[0];return n=typeof n.then=="function"?zo(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(_e.flags|=1024),n}function Cf(){var t=su!==0;return su=0,t}function wf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Df(t){if(ru){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ru=!1}fa=0,cn=ke=_e=null,fs=!1,Po=su=0,hs=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?_e.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(ke===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=cn===null?_e.memoizedState:cn.next;if(n!==null)cn=n,ke=t;else{if(t===null)throw _e.alternate===null?Error(r(467)):Error(r(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},cn===null?_e.memoizedState=cn=t:cn=cn.next=t}return cn}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var n=Po;return Po+=1,hs===null&&(hs=[]),t=eg(hs,t,n),n=_e,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Ct.H=n===null||n.memoizedState===null?Yg:Wg),t}function lu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===ht)return;if(t.$$typeof===ot)return Tn(t)}throw Error(r(438,String(t)))}function Nf(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ou(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=ge;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function uu(t){var n=on();return Uf(n,ke,t)}function Uf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,L=null,K=n,rt=!1;do{var vt=K.lane&-536870913;if(vt!==K.lane?(Ce&vt)===vt:(fa&vt)===vt){var q=K.revertLane;if(q===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),vt===Mr&&(rt=!0);else if((fa&q)===q){K=K.next,q===Mr&&(rt=!0);continue}else vt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(T=L=vt,v=f):L=L.next=vt,_e.lanes|=q,Xa|=q;vt=K.action,Rr&&a(f,vt),f=K.hasEagerState?K.eagerState:a(f,vt)}else q={lane:vt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(T=L=q,v=f):L=L.next=q,_e.lanes|=vt,Xa|=vt;K=K.next}while(K!==null&&K!==n);if(L===null?v=f:L.next=T,!ti(f,t.memoizedState)&&(fn=!0,rt&&(a=ls,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=L,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Lf(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ti(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function hg(t,n,a){var s=_e,u=on(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ti((ke||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,zf(mg.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||v||cn!==null&&(cn.memoizedState.tag&1)!==0,ds(t?9:8,{destroy:void 0},pg.bind(null,s,u,a,n),null),t){if(s.flags|=2048,We===null)throw Error(r(349));f||(fa&127)!==0||dg(s,n,a)}return a}function dg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=ou(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function pg(t,n,a,s){n.value=a,n.getSnapshot=s,gg(n)&&_g(t)}function mg(t,n,a){return a(function(){gg(n)&&_g(t)})}function gg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function _g(t){var n=gr(t,2);n!==null&&Zn(n,t,2)}function Of(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Rr){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function vg(t,n,a,s){return t.baseState=a,Uf(t,ke,typeof s=="function"?s:ha)}function dS(t,n,a,s,u){if(hu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};Ct.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,yg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function yg(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=Ct.T,v={};v.types=f!==null?f.types:null,Ct.T=v;try{var T=a(u,s),L=Ct.S;L!==null&&L(v,T),xg(t,n,T)}catch(K){Pf(t,n,K)}finally{f!==null&&v.types!==null&&(f.types=v.types),Ct.T=f}}else try{f=a(u,s),xg(t,n,f)}catch(K){Pf(t,n,K)}}function xg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Sg(t,n,s)},function(s){return Pf(t,n,s)}):Sg(t,n,a)}function Sg(t,n,a){n.status="fulfilled",n.value=a,Mg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,yg(t,a)))}function Pf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Mg(n),n=n.next;while(n!==s)}t.action=null}function Mg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Eg(t,n){return n}function Tg(t,n){if(Me){var a=We.formState;if(a!==null){t:{var s=_e;if(Me){if(Ke){e:{for(var u=Ke,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=vi(u.nextSibling),s=u.data==="F!";break t}}Na(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eg,lastRenderedState:n},a.queue=s,a=Xg.bind(null,_e,s),s.dispatch=a,s=Of(!1),f=Gf.bind(null,_e,!1,s.queue),s=Bn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=dS.bind(null,_e,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function bg(t){var n=on();return Ag(n,ke,t)}function Ag(t,n,a){if(n=Uf(t,n,Eg)[0],t=uu(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=zo(n)}catch(v){throw v===us?$l:v}else s=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,ds(9,{destroy:void 0},pS.bind(null,u,a),null)),[s,f,t]}function pS(t,n){t.action=n}function Rg(t){var n=on(),a=ke;if(a!==null)return Ag(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ds(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=ou(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Cg(){return on().memoizedState}function cu(t,n,a,s){var u=Bn();_e.flags|=t,u.memoizedState=ds(1|n,{destroy:void 0},a,s===void 0?null:s)}function fu(t,n,a,s){var u=on();s=s===void 0?null:s;var f=u.memoizedState.inst;ke!==null&&s!==null&&Af(s,ke.memoizedState.deps)?u.memoizedState=ds(n,f,a,s):(_e.flags|=t,u.memoizedState=ds(1|n,f,a,s))}function wg(t,n){cu(8390656,8,t,n)}function zf(t,n){fu(2048,8,t,n)}function mS(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=ou(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Dg(t){var n=on().memoizedState;return mS({ref:n,nextImpl:t}),function(){if((Ie&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Ng(t,n){return fu(4,2,t,n)}function Ug(t,n){return fu(4,4,t,n)}function Lg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Og(t,n,a){a=a!=null?a.concat([t]):null,fu(4,4,Lg.bind(null,n,t),a)}function If(){}function Pg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Af(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function zg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Af(n,s[1]))return s[0];if(s=t(),Rr){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s}function Bf(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Y_(),_e.lanes|=t,Xa|=t,a)}function Ig(t,n,a,s){return ti(a,n)?a:Ia.current!==null?(t=Bf(t,a,s),ti(t,n)||(fn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Ce&261930)===0?(fn=!0,t.memoizedState=a):(t=Y_(),_e.lanes|=t,Xa|=t,n)}function Bg(t,n,a,s,u){var f=Yt.p;Yt.p=f!==0&&8>f?f:8;var v=Ct.T,T={};T.types=v!==null?v.types:null,Ct.T=T,Gf(t,!1,n,a);try{var L=u(),K=Ct.S;if(K!==null&&K(T,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var rt=cS(L,s);Io(t,n,rt,ri(t))}else Io(t,n,s,ri(t))}catch(vt){Io(t,n,{then:function(){},status:"rejected",reason:vt},ri())}finally{Yt.p=f,v!==null&&T.types!==null&&(v.types=T.types),Ct.T=v}}function gS(){}function Ff(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Fg(t).queue;Bg(t,u,n,P,a===null?gS:function(){return Hg(t),a(s)})}function Fg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:P},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hg(t){var n=Fg(t);n.next===null&&(n=t.alternate.memoizedState),Io(t,n.next.queue,{},ri())}function Hf(){return Tn(Us)}function Gg(){return on().memoizedState}function Vg(){return on().memoizedState}function _S(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Pa(a);var s=za(n,t,a);s!==null&&(Zn(s,n,a),No(s,n,a)),n={cache:pf()},t.payload=n;return}n=n.return}}function vS(t,n,a){var s=ri();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hu(t)?kg(n,a):(a=rf(t,n,a,s),a!==null&&(Zn(a,t,s),qg(a,n,s)))}function Xg(t,n,a){var s=ri();Io(t,n,a,s)}function Io(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hu(t))kg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,ti(T,v))return Xl(t,n,u,0),We===null&&Vl(),!1}catch{}if(a=rf(t,n,u,s),a!==null)return Zn(a,t,s),qg(a,n,s),!0}return!1}function Gf(t,n,a,s){if(s={lane:2,revertLane:Nh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(n)throw Error(r(479))}else n=rf(t,a,s,2),n!==null&&Zn(n,t,2)}function hu(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function kg(t,n){fs=ru=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Q(t,a)}}var du={readContext:Tn,use:lu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},Yg={readContext:Tn,use:lu,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:wg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cu(4194308,4,Lg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cu(4194308,4,t,n)},useInsertionEffect:function(t,n){cu(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var s=t();if(Rr){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Bn();if(a!==void 0){var u=a(n);if(Rr){pn(!0);try{a(n)}finally{pn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=vS.bind(null,_e,t),[s.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Of(t);var n=t.queue,a=Xg.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:If,useDeferredValue:function(t,n){var a=Bn();return Bf(a,t,n)},useTransition:function(){var t=Of(!1);return t=Bg.bind(null,_e,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=_e,u=Bn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Ce&127)!==0||dg(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,wg(mg.bind(null,s,f,t),[t]),s.flags|=2048,ds(9,{destroy:void 0},pg.bind(null,s,f,a,n),null),a},useId:function(){var t=Bn(),n=We.identifierPrefix;if(Me){var a=Ii,s=zi;a=(s&~(1<<32-Nn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=su++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Hf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gf.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nf,useCacheRefresh:function(){return Bn().memoizedState=_S.bind(null,_e)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Wg={readContext:Tn,use:lu,useCallback:Pg,useContext:Tn,useEffect:zf,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Ug,useMemo:zg,useReducer:uu,useRef:Cg,useState:function(){return uu(ha)},useDebugValue:If,useDeferredValue:function(t,n){var a=on();return Ig(a,ke.memoizedState,t,n)},useTransition:function(){var t=uu(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Hf,useFormState:bg,useActionState:bg,useOptimistic:function(t,n){var a=on();return vg(a,ke,t,n)},useMemoCache:Nf,useCacheRefresh:Vg,useEffectEvent:Dg},yS={readContext:Tn,use:lu,useCallback:Pg,useContext:Tn,useEffect:zf,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Ug,useMemo:zg,useReducer:Lf,useRef:Cg,useState:function(){return Lf(ha)},useDebugValue:If,useDeferredValue:function(t,n){var a=on();return ke===null?Bf(a,t,n):Ig(a,ke.memoizedState,t,n)},useTransition:function(){var t=Lf(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Hf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t,n){var a=on();return ke!==null?vg(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:Vg,useEffectEvent:Dg};function Vf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ri(),u=Pa(s);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,s),n!==null&&(Zn(n,t,s),No(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ri(),u=Pa(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,s),n!==null&&(Zn(n,t,s),No(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),s=Pa(a);s.tag=2,n!=null&&(s.callback=n),n=za(t,s,a),n!==null&&(Zn(n,t,a),No(n,t,a))}};function Zg(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,s)||!Eo(u,f):!0}function Kg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Xf.enqueueReplaceState(n,n.state,null)}function Cr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function jg(t){Gl(t)}function Qg(t){console.error(t)}function Jg(t){Gl(t)}function pu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function $g(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function kf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){pu(t,n)},a}function t_(t){return t=Pa(t),t.tag=3,t}function e_(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){$g(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){$g(n,a,s),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function xS(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&xr(n,a,u,!0),a=bn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Pu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ch(t,s,u)),!1;case 22:return a.flags|=65536,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ch(t,s,u)),!1}throw Error(r(435,a.tag))}return Ch(t,s,u),Pu(),!1}if(Me)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==cf&&(t=Error(r(422),{cause:s}),Ao(di(t,a)))):(s!==cf&&(n=Error(r(423),{cause:s}),Ao(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=di(s,a),u=kf(t.stateNode,s,u),xf(t,u),sn!==4&&(sn=2)),!1;var f=Error(r(520),{cause:s});if(f=di(f,a),qo===null?qo=[f]:qo.push(f),sn!==4&&(sn=2),n===null)return!0;s=di(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=kf(a.stateNode,s,t),xf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=t_(u),e_(u,t,a,s),xf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var qf=Error(r(461)),fn=!1;function gn(t,n,a,s){n.child=t===null?rg(n,null,a,s):Ar(n,t.child,a,s)}function n_(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return Sr(n),s=Rf(t,n,a,v,f,u),T=Cf(),t!==null&&!fn?(wf(t,n,u),da(t,n,u)):(Me&&T&&Wl(n),n.flags|=1,gn(t,n,s,u),n.child)}function i_(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!sf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,a_(t,n,f,s,u)):(t=ql(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!$f(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(v,s)&&t.ref===n.ref)return da(t,n,u)}return n.flags|=1,t=oa(f,s),t.ref=n.ref,t.return=n,n.child=t}function a_(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Eo(f,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=f,$f(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,da(t,n,u)}return Yf(t,n,a,s,u)}function r_(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return s_(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(n,f!==null?f.cachePool:null),f!==null?lg(n,f):Mf(),ug(n);else return s=n.lanes=536870912,s_(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Jl(n,f.cachePool),lg(n,f),Fa(),n.memoizedState=null):(t!==null&&Jl(n,null),Mf(),Fa());return gn(t,n,u,a),n.child}function Bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function s_(t,n,a,s,u){var f=gf();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Jl(n,null),Mf(),ug(n),t!==null&&xr(t,n,s,!0),n.childLanes=u,null}function mu(t,n){return n=gu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function o_(t,n,a){return Ar(n,t.child,null,a),t=mu(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function SS(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=mu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Bo(null,t);if(Tf(n),(t=Ke)?(t=Lv(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=km(t),a.return=n,n.child=a,yn=n,Ke=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return mu(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Tf(n),u)if(n.flags&256)n.flags&=-257,n=o_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||xr(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(Ia.current===null){if(s=We,s!==null&&(v=lt(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,gr(t,v),Zn(s,t,v),qf;Pu()}n=o_(t,n,a)}else t=f.treeContext,Ke=vi(v.nextSibling),yn=n,Me=!0,Da=null,gi=!1,t!==null&&Wm(n,t),n=mu(n,s),n.flags|=134221824;return n}return t=oa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ps(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yf(t,n,a,s,u){return Sr(n),a=Rf(t,n,a,s,void 0,u),s=Cf(),t!==null&&!fn?(wf(t,n,u),da(t,n,u)):(Me&&s&&Wl(n),n.flags|=1,gn(t,n,a,u),n.child)}function l_(t,n,a,s,u,f){return Sr(n),n.updateQueue=null,a=fg(n,s,a,u),cg(t),s=Cf(),t!==null&&!fn?(wf(t,n,f),da(t,n,f)):(Me&&s&&Wl(n),n.flags|=1,gn(t,n,a,f),n.child)}function u_(t,n,a,s,u){if(Sr(n),n.stateNode===null){var f=as,v=a.contextType;typeof v=="object"&&v!==null&&(f=Tn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},vf(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Tn(v):as,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Vf(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Xf.enqueueReplaceState(f,f.state,null),Lo(n,s,f,u),Uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,L=Cr(a,T);f.props=L;var K=f.context,rt=a.contextType;v=as,typeof rt=="object"&&rt!==null&&(v=Tn(rt));var vt=a.getDerivedStateFromProps;rt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,rt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||K!==v)&&Kg(n,f,s,v),Oa=!1;var q=n.memoizedState;f.state=q,Lo(n,s,f,u),Uo(),K=n.memoizedState,T||q!==K||Oa?(typeof vt=="function"&&(Vf(n,a,vt,s),K=n.memoizedState),(L=Oa||Zg(n,a,L,s,q,K,v))?(rt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),f.props=s,f.state=K,f.context=v,s=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,yf(t,n),v=n.memoizedProps,rt=Cr(a,v),f.props=rt,vt=n.pendingProps,q=f.context,K=a.contextType,L=as,typeof K=="object"&&K!==null&&(L=Tn(K)),T=a.getDerivedStateFromProps,(K=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==vt||q!==L)&&Kg(n,f,s,L),Oa=!1,q=n.memoizedState,f.state=q,Lo(n,s,f,u),Uo();var nt=n.memoizedState;v!==vt||q!==nt||Oa||t!==null&&t.dependencies!==null&&jl(t.dependencies)?(typeof T=="function"&&(Vf(n,a,T,s),nt=n.memoizedState),(rt=Oa||Zg(n,a,rt,s,q,nt,L)||t!==null&&t.dependencies!==null&&jl(t.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,nt,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,nt,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=L,s=rt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ps(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ar(n,t.child,null,u),n.child=Ar(n,null,a,u)):gn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=da(t,n,u),t}function c_(t,n,a,s){return vr(),n.flags|=256,gn(t,n,a,s),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:$m()}}function Kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function f_(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Ba(n):Fa(),(t=Ke)?(t=Lv(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=km(t),a.return=n,n.child=a,yn=n,Ke=null)):t=null,t===null)throw Na(n);return Zh(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,u?(Fa(),u=n.mode,f=gu({mode:"hidden",children:f},u),s=_r(s,u,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=Zf(a),s.childLanes=Kf(t,v,a),n.memoizedState=Wf,Bo(null,s)):(Ba(n),jf(n,f))}var T=t.memoizedState;if(T!==null){var L=T.dehydrated;if(L!==null)return MS(t,n,f,v,s,L,T,a)}return u?(Fa(),u=s.fallback,f=n.mode,T=t.child,L=T.sibling,s=oa(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,L!==null?u=oa(L,u):(u=_r(u,f,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Bo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Zf(a):(f=u.cachePool,f!==null?(T=un._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=$m(),u={baseLanes:u.baseLanes|a,cachePool:f}),s.memoizedState=u,s.childLanes=Kf(t,v,a),n.memoizedState=Wf,Bo(t.child,s)):(Ba(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function jf(t,n){return n=gu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gu(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function _u(t,n,a){return Ar(n,t.child,null,a),t=jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function MS(t,n,a,s,u,f,v,T){if(a)return n.flags&256?(Ba(n),n.flags&=-257,_u(t,n,T)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,null):(Fa(),f=u.fallback,v=n.mode,u=gu({mode:"visible",children:u.children},v),f=_r(f,v,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Ar(n,t.child,null,T),u=n.child,u.memoizedState=Zf(T),u.childLanes=Kf(t,s,T),n.memoizedState=Wf,Bo(null,u));if(Ba(n),Zh(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var L=s.dgst;return s=L,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Ao({value:u,source:null,stack:null})),_u(t,n,T)}if(fn||xr(t,n,T,!1),s=(T&t.childLanes)!==0,fn||s){if(Ia.current!==null)return _u(t,n,T);if(s=We,s!==null&&(u=lt(s,T),u!==0&&u!==v.retryLane))throw v.retryLane=u,gr(t,u),Zn(s,t,u),qf;return Wh(f)||Pu(),_u(t,n,T)}return Wh(f)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,Ke=vi(f.nextSibling),yn=n,Me=!0,Da=null,gi=!1,t!==null&&Wm(n,t),n=jf(n,u.children),n.flags|=134221824,n)}function h_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Kl(t.return,n,a)}function d_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&au(a)===null&&(n=t),t=t.sibling}return n}function vu(t,n,a,s,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Qf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Jf(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=An.current;if(n.flags&128)return Oo(n,v),null;var T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Oo(n,v),u==="backwards"&&t!==null?(Qf(t),gn(t,n,s,a),Qf(t)):gn(t,n,s,a),s=Me?bo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h_(t,a,n);else if(t.tag===19)h_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=d_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Qf(n)),vu(n,!0,u,null,f,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&au(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vu(n,!0,a,null,f,s);break;case"together":vu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=d_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vu(n,!1,u,a,f,s)}return n.child}function p_(t,n,a){var s=n.pendingProps;return Ua(n,n.type,s.value),gn(t,n,s.children,a),n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(xr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jl(t)))}function ES(t,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),Ua(n,un,t.memoizedState.cache),vr();break;case 27:case 5:et(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ba(n),n.flags|=128,null;s=xr(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?f_(t,n,a):(Ba(n),t=da(t,n,a),t!==null?t.sibling:null)}Ba(n);break;case 19:if(n.flags&128)return Jf(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(xr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Jf(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Oo(n,An.current),s)break;return null;case 22:return n.lanes=0,r_(t,n,a,n.pendingProps);case 24:Ua(n,un,t.memoizedState.cache)}return da(t,n,a)}function m_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!$f(t,a)&&(n.flags&128)===0)return fn=!1,ES(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Me&&(n.flags&1048576)!==0&&Ym(n,bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Tr(n.elementType),n.type=t,typeof t=="function")sf(t)?(s=Cr(t,s),n.tag=1,n=u_(null,n,t,s,a)):(n.tag=0,n=Yf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===k){n.tag=11,n=n_(null,n,t,s,a);break t}else if(u===St){n.tag=14,n=i_(null,n,t,s,a);break t}else if(u===ot){n.tag=10,n.type=t,n=p_(null,n,a);break t}}throw n=Ot(t)||t,Error(r(306,n,""))}}return n;case 0:return Yf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Cr(s,n.pendingProps),u_(t,n,s,u,a);case 3:t:{if(N(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,yf(t,n),Lo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ua(n,un,s),s!==f.cache&&df(n,[un],a,!0),Uo(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=c_(t,n,s,a);break t}else if(s!==u){u=di(Error(r(424)),n),Ao(u),n=c_(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=vi(t.firstChild),yn=n,Me=!0,Da=null,gi=!0,a=rg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(vr(),s===u){n=da(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return ps(t,n),t===null?(a=Hv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=yv(n.type,n.pendingProps,le.current,n)):n.memoizedState=Hv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&Me&&(s=n.stateNode=zv(n.type,n.pendingProps,le.current),yn=n,gi=!0,u=Ke,Wa(n.type)?(Kh=u,Ke=vi(s.firstChild)):Ke=u),gn(t,n,n.pendingProps.children,a),ps(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=s=Ke)&&(s=_M(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,yn=n,Ke=vi(s.firstChild),gi=!1,u=!0):u=!1),u||Na(n)),et(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,Hh(u,f)?s=null:v!==null&&Hh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Rf(t,n,hS,null,null,a),Us._currentValue=u),ps(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Ke)&&(a=vM(a,n.pendingProps,gi),a!==null?(n.stateNode=a,yn=n,Ke=null,t=!0):t=!1),t||Na(n)),null;case 13:return f_(t,n,a);case 4:return N(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ar(n,null,s,a):gn(t,n,s,a),n.child;case 11:return n_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,ps(t,n),gn(t,n,s,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return p_(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Sr(n),u=Tn(u),s=s(u),n.flags|=1,gn(t,n,s,a),n.child;case 14:return i_(t,n,n.type,n.pendingProps,a);case 15:return a_(t,n,n.type,n.pendingProps,a);case 19:return Jf(t,n,a);case 31:return SS(t,n,a);case 22:return r_(t,n,a,n.pendingProps);case 24:return Sr(n),s=Tn(un),t===null?(u=gf(),u===null&&(u=We,f=pf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},vf(n),Ua(n,un,u)):((t.lanes&a)!==0&&(yf(t,n),Lo(n,null,null,a),Uo()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,un,s)):(s=f.cache,Ua(n,un,s),s!==u.cache&&df(n,[un],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&Wl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:ps(t,n),gn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function pa(t){t.flags|=4}function th(t,n,a,s,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?kv(n,s):kv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(j_())t.flags|=8192;else throw br=tu,_f}else t.flags&=-16777217}function g_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qv(n))if(j_())t.flags|=8192;else throw br=tu,_f}function yu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nl():536870912,t.lanes|=n,ys|=n)}function Fo(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function TS(t,n,a){var s=n.pendingProps;switch(uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ca(un),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(os(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ff())),je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(pa(n),f!==null?(je(n),g_(n,f)):(je(n),th(n,u,null,s,a))):f?f!==t.memoizedState?(pa(n),je(n),g_(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&pa(n),je(n),th(n,u,t,s,a)),null;case 27:if(ft(n),a=le.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),n.subtreeFlags&=-33554433,null}t=bt.current,os(n)?Zm(n):(t=zv(u,s,a),n.stateNode=t,pa(n))}return je(n),n.subtreeFlags&=-33554433,null;case 5:if(ft(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),n.subtreeFlags&=-33554433,null}if(f=bt.current,os(n))Zm(n);else{var v=jo(le.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[It]=n,f[Jt]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Cn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&pa(n)}}return je(n),n.subtreeFlags&=-33554433,th(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=le.current,os(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=yn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[It]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||mv(t.nodeValue,a)),t||Na(n,!0)}else t=jo(t).createTextNode(s),t[It]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=os(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[It]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=os(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[It]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),yu(n,n.updateQueue),je(n),null);case 4:return b(),t===null&&Ph(n.stateNode.containerInfo),n.flags|=67108864,je(n),null;case 10:return ca(n.type),je(n),null;case 19:if(bf(n),s=n.memoizedState,s===null)return je(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Fo(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=au(t),f!==null){for(n.flags|=128,Fo(s,!1),t=f.updateQueue,n.updateQueue=t,yu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xm(a,t),a=a.sibling;return Oo(n,An.current&1|2),Me&&la(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&X()>Nu&&(n.flags|=128,u=!0,Fo(s,!1),n.lanes=4194304)}else{if(!u)if(t=au(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,yu(n,t),Fo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Me)return je(n),null}else 2*X()-s.renderingStartTime>Nu&&a!==536870912&&(n.flags|=128,u=!0,Fo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,f=An.current,f=u?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Me?Oo(n,f):(a=f,Mt(bn,n),Mt(An,a),Ln===null&&(Ln=n)),Me&&la(n,s.treeForkCount),t}return je(n),null;case 22:case 23:return ei(n),Ef(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&yu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&dt(Er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(un),je(n),null;case 25:return null;case 30:return n.flags|=33554432,je(n),null}throw Error(r(156,n.tag))}function bS(t,n){switch(uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(un),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return bf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return ca(n.type),null;case 22:case 23:return ei(n),Ef(),t!==null&&dt(Er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function __(t,n){switch(uf(n),n.tag){case 3:ca(un),b();break;case 26:case 27:case 5:ft(n);break;case 4:b();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:bf(n);break;case 10:ca(n.type);break;case 22:case 23:ei(n),Ef(),t!==null&&dt(Er);break;case 24:ca(un)}}function Ho(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){Ge(n,n.return,T)}}function Ha(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var L=a,K=T;try{K()}catch(rt){Ge(u,L,rt)}}}s=s.next}while(s!==f)}}catch(rt){Ge(n,n.return,rt)}}function v_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{og(n,a)}catch(s){Ge(t,t.return,s)}}}function y_(t,n,a){a.props=Cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function Bi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,f=ra(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=Av(f)),s=u.ref;break;case 7:if(t.stateNode===null){var v=new si(t);g(t.child,!1,mM,v,void 0,void 0),t.stateNode=v}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){Ge(t,n,T)}}function Rn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ge(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(t,n,u)}else a.current=null}function xu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Uv(t.stateNode,n[a])}function x_(t){for(var n=t.return;n!==null&&(nh(n)&&Uv(t.stateNode,n.stateNode),!eh(n));)n=n.return}function Go(t){for(var n=t.return;n!==null&&(nh(n)&&gM(t.stateNode,n.stateNode),!eh(n));)n=n.return}function eh(t){return t.tag===5||t.tag===3||t.tag===27}function nh(t){return t&&t.tag===7&&t.stateNode!==null}function ih(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ge(t,t.return,u)}}function ah(t,n,a){try{var s=t.stateNode;QS(s,t.type,a,n),s[Jt]=n}catch(u){Ge(t,t.return,u)}}function S_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function rh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||S_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi)),xu(t,s),Le=!0;else if(u!==4&&(u===27&&(xu(t,s),s=null,Wa(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(sh(t,n,a,s),t=t.sibling;t!==null;)sh(t,n,a,s),t=t.sibling}function Su(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),xu(t,s),Le=!0;else if(u!==4&&(u===27&&(xu(t,s),s=null,Wa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Su(t,n,a,s),t=t.sibling;t!==null;)Su(t,n,a,s),t=t.sibling}function M_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,s,a),n[It]=t,n[Jt]=a}catch(f){Ge(t,t.return,f)}}var Mu=!1,ni=null;function E_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Mu=!0)}var Fi=null;function T_(){var t=Fi;return Fi=null,t}var qn=0;function ms(t,n,a,s,u){return qn=0,b_(t.child,n,a,s,u)}function b_(t,n,a,s,u){for(var f=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(s!==null){var T=Xh(v);s.push(T),T.view&&(f=!0)}else f||Xh(v).view&&(f=!0);Mu=!0,Tv(v,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||b_(t.child,n,a,s,u)&&(f=!0));t=t.sibling}return f}function Hi(t,n){for(;t!==null;)t.tag===5?bv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Hi(t.child,n)),t=t.sibling}function Eu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Eu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=sa(n.default,n.share),n!=="none"&&(ms(t,a,n,null,!1)||Hi(t.child,!1))}t=t.sibling}}function oh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=ra(s,a),f=sa(s.default,a.paired?s.share:s.enter);f!=="none"?ms(t,u,f,null,!1)?(Eu(t),a.paired||n||Es(t,s.onEnter)):Hi(t.child,!1):Eu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)oh(t,n),t=t.sibling;else Eu(t)}function lh(t){if(ni!==null&&ni.size!==0){var n=ni;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var f=sa(a.default,a.share);if(f!=="none"&&(ms(t,s,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Es(t,a.onShare)):Hi(t.child,!1)),n.delete(s),n.size===0)break}}}lh(t)}t=t.sibling}}}function uh(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),s=ni!==null?ni.get(a):void 0,u=sa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(ms(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,ni.delete(a),Es(t,n.onShare)):Es(t,n.onExit):Hi(t.child,!1)),ni!==null&&lh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)uh(t),t=t.sibling;else ni!==null&&lh(t)}function A_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=sa(n.default,n.update),t.flags&=-5,n!=="none"&&ms(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&A_(t);t=t.sibling}}function ch(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Hi(t.child,!1))}ch(t)}t=t.sibling}}function Tu(t){if(t.tag===30)t.stateNode.paired=null,Hi(t.child,!1),ch(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Tu(t),t=t.sibling;else ch(t)}function R_(t){for(t=t.child;t!==null;)t.tag===30?Hi(t.child,!1):(t.subtreeFlags&33554432)!==0&&R_(t),t=t.sibling}function fh(t,n,a,s,u,f,v){for(var T=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(f!==null&&qn<f.length){var K=f[qn],rt=Xh(L);(K.view||rt.view)&&(T=!0);var vt;if(vt=(t.flags&4)===0)if(rt.clip)vt=!0;else{vt=K.rect;var q=rt.rect;vt=vt.y!==q.y||vt.x!==q.x||vt.height!==q.height||vt.width!==q.width}vt&&(t.flags|=4),rt.abs?rt=!K.abs:(K=K.rect,rt=rt.rect,rt=K.height!==rt.height||K.width!==rt.width),rt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Tv(L,qn===0?a:a+"_"+qn,u),T&&(t.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(L,qn===0?s:s+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:fh(t,n.child,a,s,u,f,v)&&(T=!0));n=n.sibling}return T}function C_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=ra(a,s),f=sa(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;qn=0,u=fh(s,T,u,u,f,v,!1),(t.flags&4)!==0&&u&&Es(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&C_(t);t=t.sibling}}var xn=!1,Fe=!1,Gi=!1,hh=!1,w_=typeof WeakSet=="function"?WeakSet:Set,Sn=null,Vi=!1,Vo=!1,bu=!1,dh=!1;function AS(t,n,a){if(t=t.containerInfo,Bh=Ls,t=Lm(t),Jc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{s.nodeType,v.nodeType}catch{s=null;break t}var T=0,L=-1,K=-1,rt=0,vt=0,q=t,nt=null;e:for(;;){for(var Ft;q!==s||f!==0&&q.nodeType!==3||(L=T+f),q!==v||u!==0&&q.nodeType!==3||(K=T+u),q.nodeType===3&&(T+=q.nodeValue.length),(Ft=q.firstChild)!==null;)nt=q,q=Ft;for(;;){if(q===t)break e;if(nt===s&&++rt===f&&(L=T),nt===v&&++vt===u&&(K=T),(Ft=q.nextSibling)!==null)break;q=nt,nt=q.parentNode}q=Ft}s=L===-1||K===-1?null:{start:L,end:K}}else s=null}s=s||{start:0,end:0}}else s=null;for(Fh={focusedElem:t,selectionRange:s},Ls=!1,a=(a&335544064)===a,Sn=n,n=a?9270:1024;Sn!==null;){if(t=Sn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&uh(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&E_(t),Au(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&uh(s),Au(a);continue}else if(s!==null&&s.memoizedState!==null){a&&E_(t),Au(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Sn=s):(a&&A_(t),Au(a))}}ni=null}function Au(t){for(;Sn!==null;){var n=Sn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var v=Cr(n.type,u);a=f.getSnapshotBeforeUpdate(v,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ge(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Yh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Yh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ra(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=sa(u.default,u.update),u!=="none"&&ms(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Sn=s;break}Sn=n.return}}function D_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(t,a),s&4&&Ho(5,a);break;case 1:if(Xi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ge(a,a.return,v)}else{var u=Cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ge(a,a.return,v)}}s&64&&v_(a),s&512&&Bi(a,a.return);break;case 3:if(Xi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{og(t,n)}catch(v){Ge(a,a.return,v)}}break;case 27:n===null&&s&4&&M_(a);case 26:case 5:Xi(t,a),n===null&&s&4&&ih(a),s&512&&Bi(a,a.return);break;case 12:Xi(t,a);break;case 31:Xi(t,a),s&4&&O_(t,a);break;case 13:Xi(t,a),s&4&&P_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=BS.bind(null,a),yM(t,a))));break;case 22:if(s=a.memoizedState!==null||xn,!s){var f=n!==null&&n.memoizedState!==null||Fe;n=xn,u=Fe,xn=s,(Fe=f)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ti(t,a,s)):Xi(t,a),xn=n,Fe=u}break;case 30:Xi(t,a),s&512&&Bi(a,a.return);break;case 7:s&512&&Bi(a,a.return);default:Xi(t,a)}}function ph(t,n){for(t=t.child;t!==null;)N_(t,n),t=t.sibling}function N_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,v=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(L){Ge(t,t.return,L)}mh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Le=!0}catch(L){Ge(t,t.return,L)}break;case 18:try{var T=t.stateNode;n?Ev(T,!0):Ev(t.stateNode,!1)}catch(L){Ge(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&ph(t,n);break;default:ph(t,n)}}function mh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:N_(a,s);break t;case 22:a.memoizedState===null&&mh(a,s);break t;default:mh(a,s)}}t=t.sibling}}function U_(t){var n=t.alternate;n!==null&&(t.alternate=null,U_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&re(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Yn=!1;function Mi(t,n,a){for(a=a.child;a!==null;)L_(t,n,a),a=a.sibling}function L_(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:Fe||Rn(a,n),Mi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Fe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||Rn(a,n),Go(a);var s=Je,u=Yn;Wa(a.type)&&(Je=a.stateNode,Yn=!1),Mi(t,n,a),Iv(a.stateNode,a.type,a.memoizedProps),Je=s,Yn=u;break;case 5:Fe||Rn(a,n),Go(a);case 6:if(a.tag===6&&Go(a),s=Je,u=Yn,Je=null,Mi(t,n,a),Je=s,Yn=u,Je!==null)if(Yn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),Le=!0}catch(f){Ge(a,n,f)}else try{Je.removeChild(a.stateNode),Le=!0}catch(f){Ge(a,n,f)}break;case 18:Je!==null&&(Yn?(t=Je,Mv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Os(t)):Mv(Je,a.stateNode));break;case 4:s=Je,u=Yn,Je=a.stateNode.containerInfo,Yn=!0,Mi(t,n,a),Je=s,Yn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),Fe||Ha(4,a,n),Mi(t,n,a);break;case 1:Fe||(Rn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&y_(a,n,s)),Mi(t,n,a);break;case 21:Mi(t,n,a);break;case 22:Fe=(s=Fe)||a.memoizedState!==null,Mi(t,n,a),Fe=s;break;case 30:Rn(a,n),Mi(t,n,a);break;case 7:Fe||Rn(a,n),Mi(t,n,a);break;default:Mi(t,n,a)}}function O_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Os(t)}catch(a){Ge(n,n.return,a)}}}function P_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Os(t)}catch(a){Ge(n,n.return,a)}}function RS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new w_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new w_),n;default:throw Error(r(435,t.tag))}}function Ru(t,n){var a=RS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=FS.bind(null,t,s);s.then(u,u)}})}function Fn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u],v=t,T=n,L=T;t:for(;L!==null;){switch(L.tag){case 27:if(Wa(L.type)){Je=L.stateNode,Yn=!1;break t}break;case 5:Je=L.stateNode,Yn=!1;break t;case 3:case 4:Je=L.stateNode.containerInfo,Yn=!0;break t}L=L.return}if(Je===null)throw Error(r(160));L_(v,T,f),Je=null,Yn=!1,v=f.alternate,v!==null&&(v.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)z_(n,t,a),n=n.sibling}var Ei=null;function z_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var v=s[f];v.ref.impl=v.nextImpl}Fn(n,t,a),Hn(t),u&4&&(Ha(3,t,t.return),Ho(3,t),Ha(5,t,t.return));break;case 1:Fn(n,t,a),Hn(t),u&512&&(Fe||s===null||Rn(s,s.return)),u&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ei,Fn(n,t,a),Hn(t),u&512&&(Fe||s===null||Rn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(xn)t.stateNode=yv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Pe]||s[It]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Cn(s,n,a),s[It]=t,Ue(s),n=s;break t;case"link":if(f=Xv("link","href",u).get(n+(a.href||""))){for(v=0;v<f.length;v++)if(s=f[v],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(v,1);break e}}s=u.createElement(n),Cn(s,n,a),u.head.appendChild(s);break;case"meta":if(f=Xv("meta","content",u).get(n+(a.content||""))){for(v=0;v<f.length;v++)if(s=f[v],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(v,1);break e}}s=u.createElement(n),Cn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[It]=t,Ue(s),n=s}t.stateNode=n}else xn||$h(f,t.type,t.stateNode);else t.stateNode=Vv(f,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Fe||n.parentNode.removeChild(n)):u.count--,a===null?xn||$h(f,t.type,t.stateNode):Vv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ah(t,t.memoizedProps,s.memoizedProps);break;case 27:Fn(n,t,a),Hn(t),u&512&&(Fe||s===null||Rn(s,s.return)),s!==null&&u&4&&ah(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=Gi,Gi=!1,Fn(n,t,a),Gi=f,Hn(t),u&512&&(Fe||s===null||Rn(s,s.return)),t.flags&32){n=t.stateNode;try{Qr(n,""),Le=!0}catch(rt){Ge(t,t.return,rt)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,ah(t,n,s!==null?s.memoizedProps:n)),u&1024&&(hh=!0);break;case 6:if(Fn(n,t,a),Hn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Le=!0}catch(rt){Ge(t,t.return,rt)}}break;case 3:if(Le=!1,Vu=null,f=Ei,Ei=Qo(n.containerInfo),Fn(n,t,a),Ei=f,Hn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Os(n.containerInfo)}catch(rt){Ge(t,t.return,rt)}hh&&(hh=!1,I_(t)),Le=!1;break;case 4:u=Gi,Gi=xn,s=im(),f=Ei,Ei=Qo(t.stateNode.containerInfo),Fn(n,t,a),Hn(t),Ei=f,Le&&Vo&&(bu=!0),Le=s,Gi=u;break;case 12:Fn(n,t,a),Hn(t);break;case 31:Fn(n,t,a),Hn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 13:Fn(n,t,a),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Du=X()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 22:f=t.memoizedState!==null,v=s!==null&&s.memoizedState!==null;var T=xn,L=Fe,K=Gi;xn=T||f,Gi=K||f,Fe=L||v,Fn(n,t,a),Fe=L,Gi=K,xn=T,Hn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||v||xn||Fe||(n=v||Fe,a=xn,s=Fe,xn=f||xn,Fe=n,Ga(t,2),xn=a,Fe=s),!f&&Gi||ph(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ru(t,a))));break;case 19:Fn(n,t,a),Hn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 30:u&512&&(Fe||s===null||Rn(s,s.return)),u=im(),f=Vo,v=(a&335544064)===a,T=t.memoizedProps,Vo=v&&sa(T.default,T.update)!=="none",Fn(n,t,a),Hn(t),v&&s!==null&&Le&&(t.flags|=4),Vo=f,Le=u;break;case 21:break;case 7:u&512&&(Fe||s===null||Rn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Fn(n,t,a),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(S_(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(nh(u)){var f=u.stateNode;s===null?s=[f]:s.push(f)}if(eh(u))break;u=u.return}var v=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,L=rh(t);Su(t,L,T,v);break;case 5:var K=a.stateNode;a.flags&32&&(Qr(K,""),a.flags&=-33);var rt=rh(t);Su(t,rt,K,v);break;case 3:case 4:var vt=a.stateNode.containerInfo,q=rh(t);sh(t,q,vt,v);break;default:throw Error(r(161))}}catch(nt){Ge(t,t.return,nt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function I_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;I_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ls=!0,n.reset(),Ls=!1),t=t.sibling}}function gs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)B_(n,t),n=n.sibling;else C_(n)}function B_(t,n){var a=t.alternate;if(a===null)oh(t,!1);else switch(t.tag){case 3:if(dh=Vi=!1,T_(),gs(n,t),!Vi&&!bu){if(t=Fi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];bv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),dh=!0}Fi=null;break;case 5:gs(n,t);break;case 4:s=Vi,Vi=!1,gs(n,t),Vi&&(bu=!0),Vi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?oh(t,!1):gs(n,t));break;case 30:s=Vi,u=T_(),Vi=!1,gs(n,t),Vi&&(t.flags|=4);var f=t.memoizedProps,v=t.stateNode;n=ra(f,v),v=ra(a.memoizedProps,v);var T=sa(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=fh(t,a,n,v,T,f,!0),qn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Es(t,t.memoizedProps.onUpdate),Fi=u):u!==null&&(u.push.apply(u,Fi),Fi=u),Vi=(t.flags&32)!==0?!0:s;break;default:gs(n,t)}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)D_(t,n.alternate,n),n=n.sibling}function Ga(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ha(4,a,a.return),Ga(a,s);break;case 1:Rn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&y_(a,a.return,u),Ga(a,s);break;case 27:(s&2)!==0&&Iv(a.stateNode,a.type,a.memoizedProps);case 5:Rn(a,a.return),a.tag!==5&&a.tag!==27||Go(a),Ga(a,s);break;case 6:Go(a);break;case 26:Rn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Fe||u.parentNode.removeChild(u),Ga(a,s);break;case 22:a.memoizedState===null&&Ga(a,s);break;case 30:Rn(a,a.return),Ga(a,s);break;case 7:Rn(a,a.return);default:Ga(a,s)}t=t.sibling}}function Ti(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ti(u,f,a),Ho(4,f);break;case 1:if(Ti(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){Ge(s,s.return,rt)}if(s=f,u=s.updateQueue,u!==null){var L=s.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)sg(K[u],L)}catch(rt){Ge(s,s.return,rt)}}T&&v&64&&v_(f),Bi(f,f.return);break;case 27:(a&2)!==0&&M_(f);case 5:f.tag!==5&&f.tag!==27||x_(f),Ti(u,f,a),T&&s===null&&v&4&&ih(f),Bi(f,f.return);break;case 6:x_(f);break;case 26:L=f.stateNode,f.memoizedState!==null||L===null||xn||$h(Qo(L.ownerDocument),f.type,L),Ti(u,f,a),T&&s===null&&v&4&&ih(f),Bi(f,f.return);break;case 12:Ti(u,f,a);break;case 31:Ti(u,f,a),T&&v&4&&O_(u,f);break;case 13:Ti(u,f,a),T&&v&4&&P_(u,f);break;case 22:f.memoizedState===null&&Ti(u,f,a),Bi(f,f.return);break;case 30:Ti(u,f,a),Bi(f,f.return);break;case 7:Bi(f,f.return);default:Ti(u,f,a)}n=n.sibling}}function gh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ro(a))}function _h(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t))}function _i(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)F_(t,n,a,s),n=n.sibling;else u&&R_(n)}function F_(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Tu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,s),f&2048&&Ho(9,n);break;case 1:_i(t,n,a,s);break;case 3:_i(t,n,a,s),u&&dh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Ro(f)));break;case 12:if(f&2048){_i(t,n,a,s),f=n.stateNode;try{var v=n.memoizedProps,T=v.id,L=v.onPostCommit;typeof L=="function"&&L(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(K){Ge(n,n.return,K)}}else _i(t,n,a,s);break;case 31:_i(t,n,a,s);break;case 13:_i(t,n,a,s);break;case 23:break;case 22:v=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Tu(T),v._visibility&2?_i(t,n,a,s):Xo(t,n)):(u&&T!==null&&T.memoizedState!==null&&Tu(n),v._visibility&2?_i(t,n,a,s):(v._visibility|=2,_s(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&gh(T,n);break;case 24:_i(t,n,a,s),f&2048&&_h(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Hi(f.child,!0),Hi(n.child,!0))),_i(t,n,a,s);break;default:_i(t,n,a,s)}}function _s(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,L=s,K=v.flags;switch(v.tag){case 0:case 11:case 15:_s(f,v,T,L,u),Ho(8,v);break;case 23:break;case 22:var rt=v.stateNode;v.memoizedState!==null?rt._visibility&2?_s(f,v,T,L,u):Xo(f,v):(rt._visibility|=2,_s(f,v,T,L,u)),u&&K&2048&&gh(v.alternate,v);break;case 24:_s(f,v,T,L,u),u&&K&2048&&_h(v.alternate,v);break;default:_s(f,v,T,L,u)}n=n.sibling}}function Xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Xo(a,s),u&2048&&gh(s.alternate,s);break;case 24:Xo(a,s),u&2048&&_h(s.alternate,s);break;default:Xo(a,s)}n=n.sibling}}var wr=8192;function Dr(t,n,a){if(t.subtreeFlags&wr)for(t=t.child;t!==null;)H_(t,n,a),t=t.sibling}function H_(t,n,a){switch(t.tag){case 26:Dr(t,n,a),t.flags&wr&&(t.memoizedState!==null?LM(a,Ei,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Wv(a,t)));break;case 5:Dr(t,n,a),t.flags&wr&&(t=t.stateNode,(n&335544128)===n&&Wv(a,t));break;case 3:case 4:var s=Ei;Ei=Qo(t.stateNode.containerInfo),Dr(t,n,a),Ei=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=wr,wr=16777216,Dr(t,n,a),wr=s):Dr(t,n,a));break;case 30:if((t.flags&wr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,ni===null&&(ni=new Map),ni.set(s,u)}Dr(t,n,a);break;default:Dr(t,n,a)}}function G_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,X_(s,t)}G_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V_(t),t=t.sibling}function V_(t){switch(t.tag){case 0:case 11:case 15:ko(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:ko(t);break;case 12:ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cu(t)):ko(t);break;default:ko(t)}}function Cu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,X_(s,t)}G_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Cu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cu(n));break;default:Cu(n)}t=t.sibling}}function X_(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ro(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Sn=s;else t:for(a=t;Sn!==null;){s=Sn;var u=s.sibling,f=s.return;if(U_(s),s===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var CS={getCacheForType:function(t){var n=Tn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(un).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,We=null,be=null,Ce=0,He=0,ii=null,Va=!1,vs=!1,vh=!1,ma=0,sn=0,Xa=0,Nr=0,wu=0,ai=0,ys=0,qo=null,Wn=null,yh=!1,Du=0,k_=0,Nu=1/0,Uu=null,ka=null,tn=0,bi=null,Ur=null,ki=0,xh=0,Sh=null,q_=null,xs=null,Ss=null,Ms=null,Yo=0,Lu=null;function ri(){return(Ie&2)!==0&&Ce!==0?Ce&-Ce:Ct.T!==null?Nh():Nt()}function Y_(){if(ai===0)if((Ce&536870912)===0||Me){var t=na;na<<=1,(na&3932160)===0&&(na=262144),ai=t}else ai=536870912;return t=bn.current,t!==null&&(t.flags|=32),ai}function Es(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Av(ra(t.memoizedProps,a))),Ss===null&&(Ss=[]),Ss.push(n.bind(null,s))}}function Zn(t,n,a){(t===We&&(He===2||He===9)||t.cancelPendingCommit!==null)&&(Ts(t,0),qa(t,Ce,ai,!1)),dr(t,a),((Ie&2)===0||t!==We)&&(t===We&&((Ie&2)===0&&(Nr|=a),sn===4&&qa(t,Ce,ai,!1)),qi(t))}function W_(t,n,a){if((Ie&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ba(t,n),u=s?US(t,n):Eh(t,n,!0),f=s;do{if(u===0){vs&&!s&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!DS(a)){u=Eh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;u=qo;var L=T.current.memoizedState.isDehydrated;if(L&&(Ts(T,v).flags|=256),v=Eh(T,v,!1),v!==2&&v!==6){if(vh&&!L){T.errorRecoveryDisabledLanes|=f,Nr|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Ts(t,0),qa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qa(s,n,ai,!Va);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Du+300-X(),10<u)){if(qa(s,n,ai,!Va),hr(s,0,!0)!==0)break t;ki=n,s.timeoutHandle=Vh(Z_.bind(null,s,a,Wn,Uu,yh,n,ai,Nr,ys,Va,f,"Throttled",-0,0),u);break t}Z_(s,a,Wn,Uu,yh,n,ai,Nr,ys,Va,f,null,-0,0)}}break}while(!0);qi(t)}function Z_(t,n,a,s,u,f,v,T,L,K,rt,vt,q,nt){t.timeoutHandle=-1;var Ft=n.subtreeFlags,$t=(f&335544064)===f;if(vt=null,($t||Ft&8192||(Ft&16785408)===16785408)&&(vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},ni=null,H_(n,f,vt),$t&&(Ft=vt,$t=t.containerInfo,$t=($t.nodeType===9?$t:$t.ownerDocument).__reactViewTransition,$t!=null&&(Ft.count++,Ft.waitingForViewTransition=!0,Ft=tl.bind(Ft),$t.finished.then(Ft,Ft))),Ft=(f&62914560)===f?Du-X():(f&4194048)===f?k_-X():0,Ft=OM(vt,Ft),Ft!==null)){ki=f,t.cancelPendingCommit=Ft(nv.bind(null,t,n,f,a,s,u,v,T,L,K,rt,vt,null,q,nt)),qa(t,f,v,!K);return}nv(t,n,f,a,s,u,v,T,L,K,rt,vt)}function DS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,s){n=Dl(t,n),n&=~wu,n&=~Nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Nn(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&A(t,a,n)}function Ou(){return(Ie&6)===0?(Wo(0),!1):!0}function Mh(){if(be!==null){if(He===0)var t=be.return;else t=be,ua=yr=null,Df(t),cs=null,Do=0,t=be;for(;t!==null;)__(t.alternate,t),t=t.return;be=null}}function Ts(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,tM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ki=0,Mh(),We=t,be=a=oa(t.current,null),Ce=n,He=0,ii=null,Va=!1,vs=ba(t,n),vh=!1,ys=ai=wu=Nr=Xa=sn=0,Wn=qo=null,yh=!1,ma=Dl(t,n),Vl(),a}function K_(t,n){_e=null,Ct.H=du,n===us||n===$l?(n=ng(),He=3):n===_f?(n=ng(),He=4):He=n===qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,be===null&&(sn=1,pu(t,di(n,t.current)))}function j_(){var t=bn.current;return t===null?!0:(Ce&4194048)===Ce?Ln===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===Ln:!1}function Q_(){var t=Ct.H;return Ct.H=du,t===null?du:t}function J_(){var t=Ct.A;return Ct.A=CS,t}function Pu(){sn=4,Va||(Ce&4194048)!==Ce&&bn.current!==null||(vs=!0),(Xa&134217727)===0&&(Nr&134217727)===0||We===null||qa(We,Ce,ai,!1)}function Eh(t,n,a){var s=Ie;Ie|=2;var u=Q_(),f=J_();(We!==t||Ce!==n)&&(Uu=null,Ts(t,n)),n=!1;var v=sn;t:do try{if(He!==0&&be!==null){var T=be,L=ii;switch(He){case 8:Mh(),v=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(n=!0);var K=He;if(He=0,ii=null,bs(t,T,L,K),a&&vs){v=0;break t}break;default:K=He,He=0,ii=null,bs(t,T,L,K)}}NS(),v=sn;break}catch(rt){K_(t,rt)}while(!0);return n&&t.shellSuspendCounter++,ua=yr=null,Ie=s,Ct.H=u,Ct.A=f,be===null&&(We=null,Ce=0,Vl()),v}function NS(){for(;be!==null;)$_(be)}function US(t,n){var a=Ie;Ie|=2;var s=Q_(),u=J_();We!==t||Ce!==n?(Uu=null,Nu=X()+500,Ts(t,n)):vs=ba(t,n);t:do try{if(He!==0&&be!==null){n=be;var f=ii;e:switch(He){case 1:He=0,ii=null,bs(t,n,f,1);break;case 2:case 9:if(tg(f)){He=0,ii=null,tv(n);break}n=function(){He!==2&&He!==9||We!==t||(He=7),qi(t)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:tg(f)?(He=0,ii=null,tv(n)):(He=0,ii=null,bs(t,n,f,7));break;case 5:var v=null;switch(be.tag){case 26:v=be.memoizedState;case 5:case 27:var T=be;if(v?qv(v):T.stateNode.complete){He=0,ii=null;var L=T.sibling;if(L!==null)be=L;else{var K=T.return;K!==null?(be=K,zu(K)):be=null}break e}}He=0,ii=null,bs(t,n,f,5);break;case 6:He=0,ii=null,bs(t,n,f,6);break;case 8:Mh(),sn=6;break t;default:throw Error(r(462))}}LS();break}catch(rt){K_(t,rt)}while(!0);return ua=yr=null,Ct.H=s,Ct.A=u,Ie=a,be!==null?0:(We=null,Ce=0,Vl(),sn)}function LS(){for(;be!==null&&!Vt();)$_(be)}function $_(t){var n=m_(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?zu(t):be=n}function tv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=l_(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=l_(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:Df(n);var s=n;s===yn&&(Me?(Zl(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(Zl(s),Me=!0));default:__(a,n),n=be=Xm(n,ma),n=m_(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?zu(t):be=n}function bs(t,n,a,s){ua=yr=null,Df(n),cs=null,Do=0;var u=n.return;try{if(xS(t,u,n,a,Ce)){sn=1,pu(t,di(a,t.current)),be=null;return}}catch(f){if(u!==null)throw be=u,f;sn=1,pu(t,di(a,t.current)),be=null;return}n.flags&32768?(Me||s===1?t=!0:vs||(Ce&536870912)!==0?t=!1:(Va=t=!0,(s===2||s===9||s===3||s===6)&&(s=bn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ev(n,t)):zu(n)}function zu(t){var n=t;do{if((n.flags&32768)!==0){ev(n,Va);return}t=n.return;var a=TS(n.alternate,n,ma);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);sn===0&&(sn=5)}function ev(t,n){do{var a=bS(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);sn=6,be=null}function nv(t,n,a,s,u,f,v,T,L,K,rt,vt){t.cancelPendingCommit=null;do Iu();while(tn!==0);if((Ie&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===We&&(be=We=null,Ce=0),Ur=n,bi=t,ki=a,Sh=u,q_=s,OS(t,n,a,v,T,L,vt)}}function OS(t,n,a,s,u,f,v){var T=n.lanes|n.childLanes;if(xh=T,T|=af,Oc(t,a,T,s,u,f),Ss=null,(a&335544064)===a?(Ms=lS(t),s=10262):(Ms=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,HS(wt,function(){return Rh(),null})):(t.callbackNode=null,t.callbackPriority=0),Mu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Ct.T,Ct.T=null,u=Yt.p,Yt.p=2,f=Ie,Ie|=4;try{AS(t,n,a)}finally{Ie=f,Yt.p=u,Ct.T=s}}tn=1,Mu?xs=sM(v,t.containerInfo,Ms,Th,bh,zS,Ah,Rh,PS):(Th(),bh(),Ah())}function PS(t){if(tn!==0){var n=bi.onRecoverableError;n(t,{componentStack:null})}}function zS(){tn===3&&(tn=0,B_(Ur,bi),tn=4)}function Th(){if(tn===1){tn=0;var t=bi,n=Ur,a=ki,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Ct.T,Ct.T=null;var u=Yt.p;Yt.p=2;var f=Ie;Ie|=4;try{Vo=bu=!1,z_(n,t,a),a=Fh;var v=Lm(t.containerInfo),T=a.focusedElem,L=a.selectionRange;if(v!==T&&T&&T.ownerDocument&&Um(T.ownerDocument.documentElement,T)){if(L!==null&&Jc(T)){var K=L.start,rt=L.end;if(rt===void 0&&(rt=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(rt,T.value.length);else{var vt=T.ownerDocument||document,q=vt&&vt.defaultView||window;if(q.getSelection){var nt=q.getSelection(),Ft=T.textContent.length,$t=Math.min(L.start,Ft),ve=L.end===void 0?$t:Math.min(L.end,Ft);!nt.extend&&$t>ve&&(v=ve,ve=$t,$t=v);var Z=Nm(T,$t),V=Nm(T,ve);if(Z&&V&&(nt.rangeCount!==1||nt.anchorNode!==Z.node||nt.anchorOffset!==Z.offset||nt.focusNode!==V.node||nt.focusOffset!==V.offset)){var tt=vt.createRange();tt.setStart(Z.node,Z.offset),nt.removeAllRanges(),$t>ve?(nt.addRange(tt),nt.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),nt.addRange(tt))}}}}for(vt=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&vt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var gt=vt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Ls=!!Bh,Fh=Bh=null}finally{Ie=f,Yt.p=u,Ct.T=s}}t.current=n,tn=2}}function bh(){if(tn===2){tn=0;var t=bi,n=Ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Ct.T,Ct.T=null;var s=Yt.p;Yt.p=2;var u=Ie;Ie|=4;try{D_(t,n.alternate,n)}finally{Ie=u,Yt.p=s,Ct.T=a}}tn=3}}function Ah(){if(tn===4||tn===3){tn=0;var t=xs;xs=null,me();var n=bi,a=Ur,s=ki,u=q_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?tn=5:(tn=0,Ur=bi=null,iv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ka=null),J(s),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Ct.T,f=Yt.p,Yt.p=2,Ct.T=null;try{for(var v=n.onRecoverableError,T=0;T<u.length;T++){var L=u[T];v(L.value,{componentStack:L.stack})}}finally{Ct.T=a,Yt.p=f}}if(u=Ss,v=Ms,Ms=null,u!==null&&(Ss=null,v===null&&(v=[]),t!==null))for(L=0;L<u.length;L++)a=(0,u[L])(v),a!==void 0&&t.finished.finally(a);(ki&3)!==0&&Iu(),qi(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Lu?Yo++:(Yo=0,Lu=n):(Yo=0,Lu=null),Wo(0)}}function iv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ro(n)))}function Iu(){return xs!==null&&(xs.skipTransition(),xs=null),Th(),bh(),Ah(),Rh()}function Rh(){if(tn!==5)return!1;var t=bi,n=xh;xh=0;var a=J(ki),s=Ct.T,u=Yt.p;try{Yt.p=32>a?32:a,Ct.T=null,a=Sh,Sh=null;var f=bi,v=ki;if(tn=0,Ur=bi=null,ki=0,(Ie&6)!==0)throw Error(r(331));var T=Ie;if(Ie|=4,V_(f.current),F_(f,f.current,v,a),Ie=T,Wo(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{Yt.p=u,Ct.T=s,iv(t,n)}}function av(t,n,a){n=di(a,n),n=kf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(dr(t,2),qi(t))}function Ge(t,n,a){if(t.tag===3)av(t,t,a);else for(;n!==null;){if(n.tag===3){av(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ka===null||!ka.has(s))){t=di(a,t),a=t_(2),s=za(n,a,2),s!==null&&(e_(a,s,n,t),dr(s,2),qi(s));break}}n=n.return}}function Ch(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(vh=!0,u.add(a),t=IS.bind(null,t,n,a),n.then(t,t))}function IS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Ce&a)===a&&((sn===4||sn===3&&(Ce&62914560)===Ce&&300>X()-Du)&&(Ie&2)===0?Ts(t,0):wu|=a,ys===Ce&&(ys=0)),qi(t)}function rv(t,n){n===0&&(n=Nl()),t=gr(t,n),t!==null&&(dr(t,n),qi(t))}function BS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),rv(t,a)}function FS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),rv(t,a)}function HS(t,n){return ue(t,n)}var As=null,Rs=null,wh=!1,Bu=!1,Dh=!1,Ya=0;function qi(t){t!==Rs&&t.next===null&&(Rs===null?As=Rs=t:Rs=Rs.next=t),Bu=!0,wh||(wh=!0,VS())}function Wo(t,n){if(!Dh&&Bu){Dh=!0;do for(var a=!1,s=As;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Nn(42|t)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,uv(s,f))}else f=Ce,f=hr(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ba(s,f)||(a=!0,uv(s,f));s=s.next}while(a);Dh=!1}}function GS(){sv()}function sv(){Bu=wh=!1;var t=0;Ya!==0&&$S()&&(t=Ya);for(var n=X(),a=null,s=As;s!==null;){var u=s.next,f=ov(s,n);f===0?(s.next=null,a===null?As=u:a.next=u,u===null&&(Rs=a)):(a=s,(t!==0||(f&3)!==0)&&(Bu=!0)),s=u}tn!==0&&tn!==5||Wo(t),Ya!==0&&(Ya=0)}function ov(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Nn(f),T=1<<v,L=u[v];L===-1?((T&a)===0||(T&s)!==0)&&(u[v]=Lc(T,n)):L<=n&&(t.expiredLanes|=T),f&=~T}if(n=We,a=Ce,a=hr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(He===2||He===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ne(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ba(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ne(s),J(a)){case 2:case 8:a=jt;break;case 32:a=wt;break;case 268435456:a=te;break;default:a=wt}return s=lv.bind(null,t),a=ue(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ne(s),t.callbackPriority=2,t.callbackNode=null,2}function lv(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Iu()&&t.callbackNode!==a)return null;var s=Ce;return s=hr(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(W_(t,s,n),ov(t,X()),t.callbackNode!=null&&t.callbackNode===a?lv.bind(null,t):null)}function uv(t,n){if(Iu())return null;W_(t,n,!0)}function VS(){eM(function(){(Ie&6)!==0?ue(Bt,GS):sv()})}function Nh(){if(Ya===0){var t=Mr;t===0&&(t=cr,cr<<=1,(cr&261888)===0&&(cr=256)),Ya=t}return Ya}function cv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ol(t)}function XS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=cv((u[Jt]||null).action),v=s.submitter;v&&(n=(n=v[Jt]||null)?cv(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Bl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ya!==0){var L=new FormData(u,v);Ff(a,{pending:!0,data:L,method:u.method,action:f},null,L)}}else typeof f=="function"&&(T.preventDefault(),L=new FormData(u,v),Ff(a,{pending:!0,data:L,method:u.method,action:f},f,L))},currentTarget:u}]})}}for(var Uh=0;Uh<nf.length;Uh++){var Lh=nf[Uh],kS=Lh.toLowerCase(),qS=Lh[0].toUpperCase()+Lh.slice(1);Si(kS,"on"+qS)}Si(zm,"onAnimationEnd"),Si(Im,"onAnimationIteration"),Si(Bm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(tS,"onTransitionRun"),Si(eS,"onTransitionStart"),Si(nS,"onTransitionCancel"),Si(Fm,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function fv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],L=T.instance,K=T.currentTarget;if(T=T.listener,L!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=K;try{f(u)}catch(rt){Gl(rt)}u.currentTarget=null,f=L}else for(v=0;v<s.length;v++){if(T=s[v],L=T.instance,K=T.currentTarget,T=T.listener,L!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=K;try{f(u)}catch(rt){Gl(rt)}u.currentTarget=null,f=L}}}}function Ae(t,n){var a=n[ae];a===void 0&&(a=n[ae]=new Set);var s=t+"__bubble";a.has(s)||(hv(n,t,2,!1),a.add(s))}function Oh(t,n,a){var s=0;n&&(s|=4),hv(a,t,s,n)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function Ph(t){if(!t[Fu]){t[Fu]=!0,Ze.forEach(function(a){a!=="selectionchange"&&(YS.has(a)||Oh(a,!1,t),Oh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Fu]||(n[Fu]=!0,Oh("selectionchange",!1,n))}}function hv(t,n,a,s){switch(e0(n)){case 2:var u=BM;break;case 8:u=FM;break;default:u=ed}a=u.bind(null,n,a,t),u=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function zh(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var L=v.tag;if((L===3||L===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=ze(T),v===null)return;if(L=v.tag,L===5||L===6||L===26||L===27){s=f=v;continue t}T=T.parentNode}}s=s.return}hm(function(){var K=f,rt=Hc(a),vt=[];t:{var q=Hm.get(t);if(q!==void 0){var nt=Bl,Ft=t;switch(t){case"keypress":if(zl(a)===0)break t;case"keydown":case"keyup":nt=Dx;break;case"focusin":Ft="focus",nt=Yc;break;case"focusout":Ft="blur",nt=Yc;break;case"beforeblur":case"afterblur":nt=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=Px;break;case zm:case Im:case Bm:nt=Sx;break;case Fm:nt=Ix;break;case"scroll":case"scrollend":nt=gx;break;case"wheel":nt=Fx;break;case"copy":case"cut":case"paste":nt=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=_m;break;case"submit":nt=Lx;break;case"toggle":case"beforetoggle":nt=Gx}var $t=(n&4)!==0,ve=!$t&&(t==="scroll"||t==="scrollend"),Z=$t?q!==null?q+"Capture":null:q;$t=[];for(var V=K,tt;V!==null;){var gt=V;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||Z===null||(gt=go(V,Z),gt!=null&&$t.push(Ko(V,gt,tt))),ve)break;V=V.return}0<$t.length&&(q=new nt(q,Ft,null,a,rt),vt.push({event:q,listeners:$t}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",nt&&a!==Fc&&(Ft=a.relatedTarget||a.fromElement)&&(ze(Ft)||Ft[se]))break t;(q||nt)&&(Ft=rt.window===rt?rt:(nt=rt.ownerDocument)?nt.defaultView||nt.parentWindow:window,q?(nt=a.relatedTarget||a.toElement,q=K,nt=nt?ze(nt):null,nt!==null&&(ve=c(nt),$t=nt.tag,nt!==ve||$t!==5&&$t!==27&&$t!==6)&&(nt=null)):(q=null,nt=K),q!==nt&&($t=mm,gt="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=_m,gt="onPointerLeave",Z="onPointerEnter",V="pointer"),ve=q==null?Ft:mn(q),tt=nt==null?Ft:mn(nt),Ft=new $t(gt,V+"leave",q,a,rt),Ft.target=ve,Ft.relatedTarget=tt,gt=null,ze(rt)===K&&($t=new $t(Z,V+"enter",nt,a,rt),$t.target=tt,$t.relatedTarget=ve,gt=$t),ve=gt,$t=q&&nt?F(q,nt,WS):null,q!==null&&dv(vt,Ft,q,$t,!1),nt!==null&&ve!==null&&dv(vt,ve,nt,$t,!0)))}t:{if(q=K?mn(K):window,nt=q.nodeName&&q.nodeName.toLowerCase(),nt==="select"||nt==="input"&&q.type==="file")var Kt=bm;else if(Em(q))if(Am)Kt=Qx;else{Kt=Kx;var we=Zx}else nt=q.nodeName,!nt||nt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?K&&Bc(K.elementType)&&(Kt=bm):Kt=jx;if(Kt&&(Kt=Kt(t,K))){Tm(vt,Kt,a,rt);break t}we&&we(t,q,K)}switch(we=K?mn(K):window,t){case"focusin":(Em(we)||we.contentEditable==="true")&&(es=we,$c=K,To=null);break;case"focusout":To=$c=es=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,Om(vt,a,rt);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Om(vt,a,rt)}var ie;if(Zc)t:{switch(t){case"compositionstart":var fe="onCompositionStart";break t;case"compositionend":fe="onCompositionEnd";break t;case"compositionupdate":fe="onCompositionUpdate";break t}fe=void 0}else ts?Sm(t,a)&&(fe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(vm&&a.locale!=="ko"&&(ts||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&ts&&(ie=dm()):(Ra=rt,Xc="value"in Ra?Ra.value:Ra.textContent,ts=!0)),we=Hu(K,fe),0<we.length&&(fe=new gm(fe,t,null,a,rt),vt.push({event:fe,listeners:we}),ie?fe.data=ie:(ie=Mm(a),ie!==null&&(fe.data=ie)))),(ie=Xx?kx(t,a):qx(t,a))&&(fe=Hu(K,"onBeforeInput"),0<fe.length&&(we=new gm("onBeforeInput","beforeinput",null,a,rt),vt.push({event:we,listeners:fe}),we.data=ie)),XS(vt,t,K,a,rt)}fv(vt,n)})}function Ko(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Hu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=go(t,a),u!=null&&s.unshift(Ko(t,u,f)),u=go(t,n),u!=null&&s.push(Ko(t,u,f))),t.tag===3)return s;t=t.return}return[]}function WS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dv(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,L=T.alternate,K=T.stateNode;if(T=T.tag,L!==null&&L===s)break;T!==5&&T!==26&&T!==27||K===null||(L=K,u?(K=go(a,f),K!=null&&v.unshift(Ko(a,K,L))):u||(K=go(a,f),K!=null&&v.push(Ko(a,K,L)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var ZS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function pv(t){return(typeof t=="string"?t:""+t).replace(ZS,`
`).replace(KS,"")}function mv(t,n){return n=pv(n),pv(t)===n}function Ve(t,n,a,s,u,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||Qr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&Qr(t,""+s);else return;break;case"className":Ll(t,"class",s);break;case"tabIndex":Ll(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ll(t,a,s);break;case"style":cm(t,s,f);return;case"data":if(n!=="object"){Ll(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ol(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ol(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pi);return;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ol(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),Ul(t,"popover",s);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ul(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=px.get(a)||a,Ul(t,a,s);else return}Le=!0}function Ih(t,n,a,s,u,f){switch(a){case"style":cm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")Qr(t,s);else if(typeof s=="number"||typeof s=="bigint")Qr(t,""+s);else return;break;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Pi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[Jt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,u);break t}Le=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ul(t,a,s)}return}Le=!0}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,f,v,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),s&&Ve(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var T=f=v=u=null,L=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var rt=a[s];if(rt!=null)switch(s){case"name":u=rt;break;case"type":v=rt;break;case"checked":L=rt;break;case"defaultChecked":K=rt;break;case"value":f=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Ve(t,n,s,rt,a,null)}}sm(t,f,T,L,K,v,u,!1);return;case"select":Ae("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Ve(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?jr(t,!!s,n,!1):a!=null&&jr(t,!!s,a,!0);return;case"textarea":Ae("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(t,n,v,T,a,null)}lm(t,s,u,f);return;case"option":for(L in a)a.hasOwnProperty(L)&&(s=a[L],s!=null)&&(L==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ve(t,n,L,s,a,null));return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(s=0;s<Zo.length;s++)Ae(Zo[s],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,K,s,a,null)}return;default:if(Bc(n)){for(rt in a)a.hasOwnProperty(rt)&&(s=a[rt],s!==void 0&&Ih(t,n,rt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ve(t,n,T,s,a,null))}var jS={};function QS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,L=null,K=null,rt=null;for(nt in a){var vt=a[nt];if(a.hasOwnProperty(nt)&&vt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":L=vt;default:s.hasOwnProperty(nt)||Ve(t,n,nt,null,s,vt)}}for(var q in s){var nt=s[q];if(vt=a[q],s.hasOwnProperty(q)&&(nt!=null||vt!=null))switch(q){case"type":nt!==vt&&(Le=!0),f=nt;break;case"name":nt!==vt&&(Le=!0),u=nt;break;case"checked":nt!==vt&&(Le=!0),K=nt;break;case"defaultChecked":nt!==vt&&(Le=!0),rt=nt;break;case"value":nt!==vt&&(Le=!0),v=nt;break;case"defaultValue":nt!==vt&&(Le=!0),T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==vt&&Ve(t,n,q,nt,s,vt)}}zc(t,v,T,L,K,rt,f,u);return;case"select":nt=v=T=q=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":nt=L;default:s.hasOwnProperty(f)||Ve(t,n,f,null,s,L)}for(u in s)if(f=s[u],L=a[u],s.hasOwnProperty(u)&&(f!=null||L!=null))switch(u){case"value":f!==L&&(Le=!0),q=f;break;case"defaultValue":f!==L&&(Le=!0),T=f;break;case"multiple":f!==L&&(Le=!0),v=f;default:f!==L&&Ve(t,n,u,f,s,L)}n=T,a=v,s=nt,q!=null?jr(t,!!a,q,!1):!!s!=!!a&&(n!=null?jr(t,!!a,n,!0):jr(t,!!a,a?[]:"",!1));return;case"textarea":nt=q=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(t,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":u!==f&&(Le=!0),q=u;break;case"defaultValue":u!==f&&(Le=!0),nt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ve(t,n,v,u,s,f)}om(t,q,nt);return;case"option":for(var Ft in a)q=a[Ft],a.hasOwnProperty(Ft)&&q!=null&&!s.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:Ve(t,n,Ft,null,s,q));for(L in s)q=s[L],nt=a[L],s.hasOwnProperty(L)&&q!==nt&&(q!=null||nt!=null)&&(L==="selected"?(q!==nt&&(Le=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol"):Ve(t,n,L,q,s,nt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)q=a[$t],a.hasOwnProperty($t)&&q!=null&&!s.hasOwnProperty($t)&&Ve(t,n,$t,null,s,q);for(K in s)if(q=s[K],nt=a[K],s.hasOwnProperty(K)&&q!==nt&&(q!=null||nt!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:Ve(t,n,K,q,s,nt)}return;default:if(Bc(n)){for(var ve in a)q=a[ve],a.hasOwnProperty(ve)&&q!==void 0&&!s.hasOwnProperty(ve)&&Ih(t,n,ve,void 0,s,q);for(rt in s)q=s[rt],nt=a[rt],!s.hasOwnProperty(rt)||q===nt||q===void 0&&nt===void 0||Ih(t,n,rt,q,s,nt);return}}for(var Z in a)q=a[Z],a.hasOwnProperty(Z)&&q!=null&&!s.hasOwnProperty(Z)&&Ve(t,n,Z,null,s,q);for(vt in s)q=s[vt],nt=a[vt],!s.hasOwnProperty(vt)||q===nt||q==null&&nt==null||Ve(t,n,vt,q,s,nt)}function gv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&gv(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var L=a[s],K=L.startTime;if(K>T)break;var rt=L.transferSize,vt=L.initiatorType;rt&&gv(vt)&&(L=L.responseEnd,v+=rt*(L<T?1:(T-K)/(L-K)))}if(--s,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bh=null,Fh=null;function jo(t){return t.nodeType===9?t:t.ownerDocument}function _v(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function yv(t,n,a,s){return a=jo(a).createElement(t),a[It]=s,a[Jt]=n,Cn(a,t,n),Ue(a),a}function Hh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gh=null;function $S(){var t=window.event;return t&&t.type==="popstate"?t===Gh?!1:(Gh=t,!0):(Gh=null,!1)}var Vh=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,xv=typeof Promise=="function"?Promise:void 0,Sv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Vh,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof xv<"u"?function(t){return xv.resolve(null).then(t).catch(nM)}:Vh;function nM(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function Mv(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Os(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")jh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,jh(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[Pe]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&jh(t.ownerDocument.body);a=u}while(a);Os(n)}function Ev(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Tv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function bv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function iM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Xh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return iM(n,a,t)}function aM(t){return t.documentElement.clientHeight}function rM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function sM(t,n,a,s,u,f,v,T,L){var K=n.nodeType===9?n:n.ownerDocument;try{var rt=K.startViewTransition({update:function(){var q=K.defaultView,nt=q.navigation&&q.navigation.transition,Ft=K.fonts.status;s();var $t=[];if(Ft==="loaded"&&(aM(K),K.fonts.status==="loading"&&$t.push(K.fonts.ready)),Ft=$t.length,t!==null)for(var ve=t.suspenseyImages,Z=0,V=0;V<ve.length;V++){var tt=ve[V];if(!tt.complete){var gt=tt.getBoundingClientRect();if(0<gt.bottom&&0<gt.right&&gt.top<q.innerHeight&&gt.left<q.innerWidth){if(Z+=Yv(tt),Z>Xu){$t.length=Ft;break}tt=new Promise(rM.bind(tt)),$t.push(tt)}}}if(0<$t.length)return q=Promise.race([Promise.all($t),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(u,u),(nt?Promise.allSettled([nt.finished,q]):q).then(f,f);if(u(),nt)return nt.finished.then(f,f);f()},types:a});K.__reactViewTransition=rt;var vt=[];return rt.ready.then(function(){for(var q=K.documentElement.getAnimations({subtree:!0}),nt=0;nt<q.length;nt++){var Ft=q[nt],$t=Ft.effect,ve=$t.pseudoElement;if(ve!=null&&ve.startsWith("::view-transition")){vt.push(Ft),Ft=$t.getKeyframes();for(var Z=ve=void 0,V=!0,tt=0;tt<Ft.length;tt++){var gt=Ft[tt],Kt=gt.width;if(ve===void 0)ve=Kt;else if(ve!==Kt){V=!1;break}if(Kt=gt.height,Z===void 0)Z=Kt;else if(Z!==Kt){V=!1;break}delete gt.width,delete gt.height,gt.transform==="none"&&delete gt.transform}V&&ve!==void 0&&Z!==void 0&&($t.setKeyframes(Ft),V=getComputedStyle($t.target,$t.pseudoElement),V.width!==ve||V.height!==Z)&&(V=Ft[0],V.width=ve,V.height=Z,V=Ft[Ft.length-1],V.width=ve,V.height=Z,$t.setKeyframes(Ft))}}v()},function(q){K.__reactViewTransition===rt&&(K.__reactViewTransition=null);try{typeof q=="object"&&q!==null&&q.name==="InvalidStateError"&&(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null),q!==null&&L(q)}finally{s(),u(),v()}}),rt.finished.finally(function(){for(var q=0;q<vt.length;q++)vt[q].cancel();K.__reactViewTransition===rt&&(K.__reactViewTransition=null),T()}),rt}catch{return s(),u(),v(),null}}function Lr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Lr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Lr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[u])}return s},Lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Av(t){return{name:t,group:new Lr("group",t),imagePair:new Lr("image-pair",t),old:new Lr("old",t),new:new Lr("new",t)}}function si(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Cv(f,t,n,a)===-1){var v=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(L){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),s!==null&&(u=v.removeEventListener.bind(v,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Cs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),g(this._fragmentFiber.child,!1,oM,t,T,s)}this._eventListeners=f}};function oM(t,n,a,s){return M(t).addEventListener(n,a,s),!1}si.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Cv(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var f=u.cleanup;u=Cs(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,lM,t,a,u),s.splice(n,1),f!==null&&f()}};function lM(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Cs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Rv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Cv(t,n,a,s){if(t.length===0)return-1;s=Rv(s);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&Rv(f.optionsOrUseCapture)===s)return u}return-1}si.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];s.addEventListener(f.type,f.attachedListener,Cs(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],s.removeEventListener(f.type,f.attachedListener,Cs(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},si.prototype.focus=function(t){g(this._fragmentFiber.child,!0,wv,t,void 0,void 0)};function wv(t,n){return t.tag===6?!1:(t=M(t),xM(t,n))}si.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,kh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!wv(n[a],t);a--);};function kh(t,n){return n.push(t),!1}si.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=M(t),t=jo(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,uM,t,void 0,void 0))};function uM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,cM,t,void 0,void 0)};function cM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}si.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,fM,t,void 0,void 0);for(var a=n=0;a<Ai.length;a++){var s=Ai[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ai[n++]=s}Ai.length=n}};function fM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ai=[],qh=!1;function hM(t,n,a){Ai.push({fragmentInstance:t,observer:n,instance:a}),qh||(qh=!0,SM(function(){qh=!1;var s=Ai;Ai=[];for(var u=0;u<s.length;u++){var f=s[u];f.observer.unobserve(f.instance)}}))}si.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,dM,t,void 0,void 0),t};function dM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}si.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},si.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,kh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),L=v&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&f&&v&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&u===t||L||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pM(t,n,a,s,u){var f=ze(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=y(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=F(a,f,H),n===null?n=!1:(g(n,!0,U,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=F(s,f,H),n===null?n=!1:(g(n,!0,w,f,s),f=x,z=x=null,n=f!==null)),n):!1}function Dv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,kh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=E(this._fragmentFiber);if(s=a?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),Dv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),Dv(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function mM(t,n){return t=M(t),Nv(t,n),!1}function Nv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Uv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var v=0,T=0;T<Ai.length;T++){var L=Ai[T];(L.fragmentInstance!==n||L.observer!==f||L.instance!==t)&&(Ai[v++]=L)}Ai.length=v,f.observe(t)}),Nv(t,n))}function gM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?hM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Yh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yh(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _M(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Pe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function vM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function Lv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Wh(t){return t.data==="$?"||t.data==="$~"}function Zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function yM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kh=null;function Ov(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Pv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function SM(t){Sv(function(){Sv(function(n){return t(n)})})}function zv(t,n,a){switch(n=jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Iv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Ve(t,n,s,null,jS,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Pi&&(t.onclick=null),re(t)}function jh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);re(t)}var yi=new Map,Bv=new Set;function Qo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=Yt.d;Yt.d={f:MM,r:EM,D:TM,C:bM,L:AM,m:RM,X:wM,S:CM,M:DM};function MM(){var t=ga.f(),n=Ou();return t||n}function EM(t){var n=Se(t);n!==null&&n.tag===5&&n.type==="form"?Hg(n):ga.r(t)}var ws=typeof document>"u"?null:document;function Fv(t,n,a){var s=ws;if(s&&typeof n=="string"&&n){var u=fi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Bv.has(u)||(Bv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Cn(n,"link",t),Ue(n),s.head.appendChild(n)))}}function TM(t){ga.D(t),Fv("dns-prefetch",t,null)}function bM(t,n){ga.C(t,n),Fv("preconnect",t,n)}function AM(t,n,a){ga.L(t,n,a);var s=ws;if(s&&t&&n){var u='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fi(a.imageSizes)+'"]')):u+='[href="'+fi(t)+'"]';var f=u;switch(n){case"style":f=Ds(t);break;case"script":f=Ns(t)}if(!(yi.has(f)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Jo(f))||n==="script"&&s.querySelector($o(f))))){var v=s.createElement("link");Cn(v,"link",t),n==="style"&&(v[Ne]=!0,v.onload=v.onerror=function(){Aa(v)}),Ue(v),s.head.appendChild(v)}}}function RM(t,n){ga.m(t,n);var a=ws;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fi(s)+'"][href="'+fi(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ns(t)}if(!yi.has(f)&&(t=O({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(f)))return}s=a.createElement("link"),Cn(s,"link",t),Ue(s),a.head.appendChild(s)}}}function CM(t,n,a){ga.S(t,n,a);var s=ws;if(s&&t){var u=Jn(s).hoistableStyles,f=Ds(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(Jo(f)))T.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&Qh(t,a);var L=v=s.createElement("link");Ue(L),Cn(L,"link",t),L._p=new Promise(function(K,rt){L.onload=K,L.onerror=rt}),L.addEventListener("load",function(){T.loading|=1}),L.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Gu(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function wM(t,n){ga.X(t,n);var a=ws;if(a&&t){var s=Jn(a).hoistableScripts,u=Ns(t),f=s.get(u);f||(f=a.querySelector($o(u)),f||(t=O({src:t,async:!0},n),(n=yi.get(u))&&Jh(t,n),f=a.createElement("script"),Ue(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function DM(t,n){ga.M(t,n);var a=ws;if(a&&t){var s=Jn(a).hoistableScripts,u=Ns(t),f=s.get(u);f||(f=a.querySelector($o(u)),f||(t=O({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&Jh(t,n),f=a.createElement("script"),Ue(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Hv(t,n,a,s){var u=(u=le.current)?Qo(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ds(a.href),n=Jn(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ds(a.href);var f=Jn(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Jo(t)))?f._p||(v.instance=f,v.state.loading=5):(f=yi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,f)),NM(u,t,f,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ns(a),n=Jn(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ds(t){return'href="'+fi(t)+'"'}function Jo(t){return'link[rel="stylesheet"]['+t+"]"}function Gv(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function NM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ne]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ne]=!0,n.onload=n.onerror=Aa.bind(null,n),Cn(n,"link",a),Ue(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ns(t){return'[src="'+fi(t)+'"]'}function $o(t){return"script[async]"+t}function Vv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+fi(a.href)+'"]');if(s)return n.instance=s,Ue(s),s;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ue(s),Cn(s,"style",u),Gu(s,a.precedence,t),n.instance=s;case"stylesheet":u=Ds(a.href);var f=t.querySelector(Jo(u));if(f)return n.state.loading|=4,n.instance=f,Ue(f),f;s=Gv(a),(u=yi.get(u))&&Qh(s,u),f=(t.ownerDocument||t).createElement("link"),Ue(f);var v=f;return v._p=new Promise(function(T,L){v.onload=T,v.onerror=L}),Cn(f,"link",s),n.state.loading|=4,Gu(f,a.precedence,t),n.instance=f;case"script":return f=Ns(a.src),(u=t.querySelector($o(f)))?(n.instance=u,Ue(u),u):(s=a,(u=yi.get(f))&&(s=O({},a),Jh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ue(u),Cn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Gu(s,a.precedence,t));return n.instance}function Gu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Qh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Jh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vu=null;function Xv(t,n,a){if(Vu===null){var s=new Map,u=Vu=new Map;u.set(a,s)}else u=Vu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Pe]||f[It]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function $h(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function UM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function qv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Wv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Yv(n),t.suspenseyImages.push(n)),t=PM.bind(t),n.decode().then(t,t))}function LM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ds(s.href),f=n.querySelector(Jo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ue(f);return}f=n.ownerDocument||n,s=Gv(s),(u=yi.get(u))&&Qh(s,u),f=f.createElement("link"),Ue(f);var v=f;v._p=new Promise(function(T,L){v.onload=T,v.onerror=L}),Cn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xu=0;function OM(t,n){return t.stylesheets&&t.count===0&&qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xu===0&&(Xu=62500*JS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Zv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)qu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function tl(){this.count--,Zv(this)}function PM(){this.imgCount--,Zv(this)}var ku=null;function qu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ku=new Map,n.forEach(zM,t),ku=null,tl.call(t))}function zM(t,n){if(!(n.state.loading&4)){var a=ku.get(t);if(a)var s=a.get(null);else{a=new Map,ku.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=tl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Us={$$typeof:ot,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function IM(t,n,a,s,u,f,v,T,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.hiddenUpdates=mo(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function Kv(t,n,a,s,u,f,v,T,L,K,rt,vt){return t=new IM(t,n,a,v,L,K,rt,vt,T),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=pf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},vf(f),t}function jv(t){return t?(t=as,t):as}function Qv(t,n,a,s,u,f){u=jv(u),s.context===null?s.context=u:s.pendingContext=u,s=Pa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=za(t,s,n),a!==null&&(Zn(a,t,n),No(a,t,n))}function Jv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function td(t,n){Jv(t,n),(t=t.alternate)&&Jv(t,n)}function $v(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&Zn(n,t,67108864),td(t,67108864)}}function t0(t){if(t.tag===13||t.tag===31){var n=ri();n=ut(n);var a=gr(t,n);a!==null&&Zn(a,t,n),td(t,n)}}var Ls=!0;function BM(t,n,a,s){var u=Ct.T;Ct.T=null;var f=Yt.p;try{Yt.p=2,ed(t,n,a,s)}finally{Yt.p=f,Ct.T=u}}function FM(t,n,a,s){var u=Ct.T;Ct.T=null;var f=Yt.p;try{Yt.p=8,ed(t,n,a,s)}finally{Yt.p=f,Ct.T=u}}function ed(t,n,a,s){if(Ls){var u=nd(s);if(u===null)zh(t,n,s,Yu,a),n0(t,s);else if(GM(u,t,n,a,s))s.stopPropagation();else if(n0(t,s),n&4&&-1<HM.indexOf(t)){for(;u!==null;){var f=Se(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=ci(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var L=1<<31-Nn(v);T.entanglements[1]|=L,v&=~L}qi(f),(Ie&6)===0&&(Nu=X()+500,Wo(0))}}break;case 31:case 13:T=gr(f,2),T!==null&&Zn(T,f,2),Ou(),td(f,2)}if(f=nd(s),f===null&&zh(t,n,s,Yu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else zh(t,n,s,null,a)}}function nd(t){return t=Hc(t),id(t)}var Yu=null;function id(t){if(Yu=null,t=ze(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yu=t,null}function e0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case Bt:return 2;case jt:return 8;case wt:case xt:return 32;case te:return 268435456;default:return 32}default:return 32}}var ad=!1,Za=null,Ka=null,ja=null,el=new Map,nl=new Map,Qa=[],HM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n0(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Se(n),n!==null&&$v(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function GM(t,n,a,s,u){switch(n){case"focusin":return Za=il(Za,t,n,a,s,u),!0;case"dragenter":return Ka=il(Ka,t,n,a,s,u),!0;case"mouseover":return ja=il(ja,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return el.set(f,il(el.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,nl.set(f,il(nl.get(f)||null,t,n,a,s,u)),!0}return!1}function i0(t){var n=ze(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Xt(t.priority,function(){t0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Xt(t.priority,function(){t0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=nd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Fc=s,a.target.dispatchEvent(s),Fc=null}else return n=Se(a),n!==null&&$v(n),t.blockedOn=a,!1;n.shift()}return!0}function a0(t,n,a){Wu(t)&&a.delete(n)}function VM(){ad=!1,Za!==null&&Wu(Za)&&(Za=null),Ka!==null&&Wu(Ka)&&(Ka=null),ja!==null&&Wu(ja)&&(ja=null),el.forEach(a0),nl.forEach(a0)}function Zu(t,n){t.blockedOn===n&&(t.blockedOn=null,ad||(ad=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VM)))}var Ku=null;function r0(t){Ku!==t&&(Ku=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ku===t&&(Ku=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(id(s||a)===null)continue;break}var f=Se(a);f!==null&&(t.splice(n,3),n-=3,Ff(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Os(t){function n(L){return Zu(L,t)}Za!==null&&Zu(Za,t),Ka!==null&&Zu(Ka,t),ja!==null&&Zu(ja,t),el.forEach(n),nl.forEach(n);for(var a=0;a<Qa.length;a++){var s=Qa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)i0(a),a.blockedOn===null&&Qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[Jt]||null;if(typeof f=="function")v||r0(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Jt]||null)T=v.formAction;else if(id(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),r0(a)}}}function s0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rd(t){this._internalRoot=t}ju.prototype.render=rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ri();Qv(a,s,t,n,null,null)},ju.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Qv(t.current,2,null,t,null,null),Ou(),n[se]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,t),a===0&&i0(t)}};var o0=e.version;if(o0!=="19.3.1")throw Error(r(527,o0,"19.3.1"));Yt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var XM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Re=Qu.inject(XM),$e=Qu}catch{}}return al.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=jg,f=Qg,v=Jg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Kv(t,1,!1,null,null,a,s,null,u,f,v,s0),t[se]=n.current,Ph(t),new rd(n)},al.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=jg,v=Qg,T=Jg,L=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(L=a.formState)),n=Kv(t,1,!0,n,a??null,s,u,L,f,v,T,s0),n.context=jv(null),a=n.current,s=ri(),s=ut(s),u=Pa(s),u.callback=null,za(a,u,s),a=s,n.current.lanes=a,dr(n,a),qi(n),t[se]=n.current,Ph(t),new ju(n)},al.version="19.3.1",al}var m0;function JM(){if(m0)return od.exports;m0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),od.exports=QM(),od.exports}var $M=JM();const Gp="180",tE=0,g0=1,eE=2,Ey=1,nE=2,Ma=3,lr=0,Qn=1,Di=2,sr=0,$s=1,_0=2,v0=3,y0=4,iE=5,Vr=100,aE=101,rE=102,sE=103,oE=104,lE=200,uE=201,cE=202,fE=203,Zd=204,Kd=205,hE=206,dE=207,pE=208,mE=209,gE=210,_E=211,vE=212,yE=213,xE=214,jd=0,Qd=1,Jd=2,io=3,$d=4,tp=5,ep=6,np=7,Ty=0,SE=1,ME=2,or=0,EE=1,TE=2,bE=3,by=4,AE=5,RE=6,CE=7,Ay=300,ao=301,ro=302,ip=303,ap=304,Nc=306,rp=1e3,kr=1001,sp=1002,Li=1003,wE=1004,Ju=1005,Zi=1006,fd=1007,qr=1008,Qi=1009,Ry=1010,Cy=1011,gl=1012,Vp=1013,Yr=1014,Ea=1015,Tl=1016,Xp=1017,kp=1018,_l=1020,wy=35902,Dy=35899,Ny=1021,Uy=1022,Ui=1023,vl=1026,yl=1027,Ly=1028,qp=1029,Oy=1030,Yp=1031,Wp=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,op=35840,lp=35841,up=35842,cp=35843,fp=36196,hp=37492,dp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,yp=37813,xp=37814,Sp=37815,Mp=37816,Ep=37817,Tp=37818,bp=37819,Ap=37820,Rp=37821,Cp=36492,wp=36494,Dp=36495,Np=36283,Up=36284,Lp=36285,Op=36286,DE=3200,NE=3201,Py=0,UE=1,rr="",jn="srgb",so="srgb-linear",Rc="linear",qe="srgb",Ps=7680,x0=519,LE=512,OE=513,PE=514,zy=515,zE=516,IE=517,BE=518,FE=519,S0=35044,M0="300 es",Ki=2e3,Cc=2001;class uo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,Pp=180/Math.PI;function co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function HE(o,e){return(o%e+e)%e}function dd(o,e,i){return(1-i)*o+i*e}function rl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class qt{constructor(e=0,i=0){qt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],_=r[l+2],g=r[l+3];const y=c[h+0],S=c[h+1],E=c[h+2],R=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=g;return}if(d===1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=R;return}if(g!==R||p!==y||m!==S||_!==E){let M=1-d;const x=p*y+m*S+_*E+g*R,z=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const H=Math.sqrt(U),F=Math.atan2(H,x*z);M=Math.sin(M*F)/H,d=Math.sin(d*F)/H}const w=d*z;if(p=p*M+y*w,m=m*M+S*w,_=_*M+E*w,g=g*M+R*w,M===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=H,m*=H,_*=H,g*=H}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],g=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*g+p*S-m*y,e[i+1]=p*E+_*y+m*g-d*S,e[i+2]=m*E+_*S+d*y-p*g,e[i+3]=_*E-d*g-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),g=d(c/2),y=p(r/2),S=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=y*_*g+m*S*E,this._y=m*S*g-y*_*E,this._z=m*_*E+y*S*g,this._w=m*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+m*S*E,this._y=m*S*g-y*_*E,this._z=m*_*E-y*S*g,this._w=m*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-m*S*E,this._y=m*S*g+y*_*E,this._z=m*_*E+y*S*g,this._w=m*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-m*S*E,this._y=m*S*g+y*_*E,this._z=m*_*E-y*S*g,this._w=m*_*g+y*S*E;break;case"YZX":this._x=y*_*g+m*S*E,this._y=m*S*g+y*_*E,this._z=m*_*E-y*S*g,this._w=m*_*g-y*S*E;break;case"XZY":this._x=y*_*g-m*S*E,this._y=m*S*g-y*_*E,this._z=m*_*E+y*S*g,this._w=m*_*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-r*m,this._z=c*_+h*m+r*p-l*d,this._w=h*_-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),g=Math.sin((1-i)*_)/m,y=Math.sin(i*_)/m;return this._w=h*g+this._w*y,this._x=r*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(E0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(E0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+p*m+h*g-d*_,this.y=r+p*_+d*m-c*g,this.z=l+p*g+c*_-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new Y,E0=new bl;class ye{constructor(e,i,r,l,c,h,d,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=r,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],R=l[0],M=l[3],x=l[6],z=l[1],U=l[4],w=l[7],H=l[2],F=l[5],O=l[8];return c[0]=h*R+d*z+p*H,c[3]=h*M+d*U+p*F,c[6]=h*x+d*w+p*O,c[1]=m*R+_*z+g*H,c[4]=m*M+_*U+g*F,c[7]=m*x+_*w+g*O,c[2]=y*R+S*z+E*H,c[5]=y*M+S*U+E*F,c[8]=y*x+S*w+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return i*h*_-i*d*m-r*c*_+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],g=_*h-d*m,y=d*p-_*c,S=m*c-h*p,E=i*g+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(l*m-_*r)*R,e[2]=(d*r-l*h)*R,e[3]=y*R,e[4]=(_*i-l*p)*R,e[5]=(l*c-d*i)*R,e[6]=S*R,e[7]=(r*p-m*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(md.makeScale(e,i)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,i){return this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const md=new ye;function Iy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function GE(){const o=wc("canvas");return o.style.display="block",o}const T0={};function xl(o){o in T0||(T0[o]=!0,console.warn(o))}function VE(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const b0=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XE(){const o={enabled:!0,workingColorSpace:so,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===qe&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qe&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?Rc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return xl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return xl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[so]:{primaries:e,whitePoint:r,transfer:Rc,toXYZ:b0,fromXYZ:A0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:qe,toXYZ:b0,fromXYZ:A0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),o}const Oe=XE();function Ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function to(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let zs;class kE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=wc("canvas")),zs.width=e.width,zs.height=e.height;const l=zs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ta(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ta(i[r]/255)*255):i[r]=Ta(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qE=0;class Zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(gd(l[h].image)):c.push(gd(l[h]))}else c=gd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function gd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YE=0;const _d=new Y;class Vn extends uo{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=kr,l=kr,c=Zi,h=qr,d=Ui,p=Qi,m=Vn.DEFAULT_ANISOTROPY,_=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=co(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ay)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rp:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rp:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Ay;Vn.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,i=0,r=0,l=1){Ye.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],_=p[4],g=p[8],y=p[1],S=p[5],E=p[9],R=p[2],M=p[6],x=p[10];if(Math.abs(_-y)<.01&&Math.abs(g-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,w=(S+1)/2,H=(x+1)/2,F=(_+y)/4,O=(g+R)/4,G=(E+M)/4;return U>w&&U>H?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=F/r,c=O/r):w>H?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=F/l,c=G/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=O/c,l=G/c),this.set(r,l,c,i),this}let z=Math.sqrt((M-E)*(M-E)+(g-R)*(g-R)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(g-R)/z,this.z=(y-_)/z,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WE extends uo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Ye(0,0,e,i),this.scissorTest=!1,this.viewport=new Ye(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Zi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends WE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class By extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZE extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(c,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$u.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$u.copy(r.boundingBox)),$u.applyMatrix4(e.matrixWorld),this.union($u)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),tc.subVectors(this.max,sl),Is.subVectors(e.a,sl),Bs.subVectors(e.b,sl),Fs.subVectors(e.c,sl),$a.subVectors(Bs,Is),tr.subVectors(Fs,Bs),Or.subVectors(Is,Fs);let i=[0,-$a.z,$a.y,0,-tr.z,tr.y,0,-Or.z,Or.y,$a.z,0,-$a.x,tr.z,0,-tr.x,Or.z,0,-Or.x,-$a.y,$a.x,0,-tr.y,tr.x,0,-Or.y,Or.x,0];return!vd(i,Is,Bs,Fs,tc)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,Is,Bs,Fs,tc))?!1:(ec.crossVectors($a,tr),i=[ec.x,ec.y,ec.z],vd(i,Is,Bs,Fs,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ri=new Y,$u=new Al,Is=new Y,Bs=new Y,Fs=new Y,$a=new Y,tr=new Y,Or=new Y,sl=new Y,tc=new Y,ec=new Y,Pr=new Y;function vd(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Pr.fromArray(o,c);const d=l.x*Math.abs(Pr.x)+l.y*Math.abs(Pr.y)+l.z*Math.abs(Pr.z),p=e.dot(Pr),m=i.dot(Pr),_=r.dot(Pr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const KE=new Al,ol=new Y,yd=new Y;class Kp{constructor(e=new Y,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):KE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ol,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(yd)),this.expandByPoint(ol.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new Y,xd=new Y,nc=new Y,er=new Y,Sd=new Y,ic=new Y,Md=new Y;class jE{constructor(e=new Y,i=new Y(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){xd.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),er.copy(this.origin).sub(xd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=er.dot(this.direction),p=-er.dot(nc),m=er.lengthSq(),_=Math.abs(1-h*h);let g,y,S,E;if(_>0)if(g=h*p-d,y=h*d-p,E=c*_,g>=0)if(y>=-E)if(y<=E){const R=1/_;g*=R,y*=R,S=g*(g+h*y+2*d)+y*(h*g+y+2*p)+m}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*p)+m;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*p)+m;else y<=-E?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+y*(y+2*p)+m):y<=E?(g=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+y*(y+2*p)+m);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(xd).addScaledVector(nc,y),S}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-y.z)*g,p=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,p=(e.min.z-y.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,l,c){Sd.subVectors(i,e),ic.subVectors(r,e),Md.crossVectors(Sd,ic);let h=this.direction.dot(Md),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;er.subVectors(this.origin,e);const p=d*this.direction.dot(ic.crossVectors(er,ic));if(p<0)return null;const m=d*this.direction.dot(Sd.cross(er));if(m<0||p+m>h)return null;const _=-d*er.dot(Md);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,c,h,d,p,m,_,g,y,S,E,R,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,_,g,y,S,E,R,M)}set(e,i,r,l,c,h,d,p,m,_,g,y,S,E,R,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=p,x[2]=m,x[6]=_,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Hs.setFromMatrixColumn(e,0).length(),c=1/Hs.setFromMatrixColumn(e,1).length(),h=1/Hs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*g,E=d*_,R=d*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=S+E*m,i[5]=y-R*m,i[9]=-d*p,i[2]=R-y*m,i[6]=E+S*m,i[10]=h*p}else if(e.order==="YXZ"){const y=p*_,S=p*g,E=m*_,R=m*g;i[0]=y+R*d,i[4]=E*d-S,i[8]=h*m,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=R+y*d,i[10]=h*p}else if(e.order==="ZXY"){const y=p*_,S=p*g,E=m*_,R=m*g;i[0]=y-R*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const y=h*_,S=h*g,E=d*_,R=d*g;i[0]=p*_,i[4]=E*m-S,i[8]=y*m+R,i[1]=p*g,i[5]=R*m+y,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const y=h*p,S=h*m,E=d*p,R=d*m;i[0]=p*_,i[4]=R-y*g,i[8]=E*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*g+E,i[10]=y-R*g}else if(e.order==="XZY"){const y=h*p,S=h*m,E=d*p,R=d*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=y*g+R,i[5]=h*_,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*_,i[10]=R*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QE,e,JE)}lookAt(e,i,r){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),nr.crossVectors(r,oi),nr.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),nr.crossVectors(r,oi)),nr.normalize(),ac.crossVectors(oi,nr),l[0]=nr.x,l[4]=ac.x,l[8]=oi.x,l[1]=nr.y,l[5]=ac.y,l[9]=oi.y,l[2]=nr.z,l[6]=ac.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],R=r[6],M=r[10],x=r[14],z=r[3],U=r[7],w=r[11],H=r[15],F=l[0],O=l[4],G=l[8],D=l[12],C=l[1],B=l[5],W=l[9],st=l[13],mt=l[2],ot=l[6],k=l[10],it=l[14],j=l[3],St=l[7],At=l[11],Ht=l[15];return c[0]=h*F+d*C+p*mt+m*j,c[4]=h*O+d*B+p*ot+m*St,c[8]=h*G+d*W+p*k+m*At,c[12]=h*D+d*st+p*it+m*Ht,c[1]=_*F+g*C+y*mt+S*j,c[5]=_*O+g*B+y*ot+S*St,c[9]=_*G+g*W+y*k+S*At,c[13]=_*D+g*st+y*it+S*Ht,c[2]=E*F+R*C+M*mt+x*j,c[6]=E*O+R*B+M*ot+x*St,c[10]=E*G+R*W+M*k+x*At,c[14]=E*D+R*st+M*it+x*Ht,c[3]=z*F+U*C+w*mt+H*j,c[7]=z*O+U*B+w*ot+H*St,c[11]=z*G+U*W+w*k+H*At,c[15]=z*D+U*st+w*it+H*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],R=e[7],M=e[11],x=e[15];return E*(+c*p*g-l*m*g-c*d*y+r*m*y+l*d*S-r*p*S)+R*(+i*p*S-i*m*y+c*h*y-l*h*S+l*m*_-c*p*_)+M*(+i*m*g-i*d*S-c*h*g+r*h*S+c*d*_-r*m*_)+x*(-l*d*_-i*p*g+i*d*y+l*h*g-r*h*y+r*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],R=e[13],M=e[14],x=e[15],z=g*M*m-R*y*m+R*p*S-d*M*S-g*p*x+d*y*x,U=E*y*m-_*M*m-E*p*S+h*M*S+_*p*x-h*y*x,w=_*R*m-E*g*m+E*d*S-h*R*S-_*d*x+h*g*x,H=E*g*p-_*R*p-E*d*y+h*R*y+_*d*M-h*g*M,F=i*z+r*U+l*w+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=z*O,e[1]=(R*y*c-g*M*c-R*l*S+r*M*S+g*l*x-r*y*x)*O,e[2]=(d*M*c-R*p*c+R*l*m-r*M*m-d*l*x+r*p*x)*O,e[3]=(g*p*c-d*y*c-g*l*m+r*y*m+d*l*S-r*p*S)*O,e[4]=U*O,e[5]=(_*M*c-E*y*c+E*l*S-i*M*S-_*l*x+i*y*x)*O,e[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*x-i*p*x)*O,e[7]=(h*y*c-_*p*c+_*l*m-i*y*m-h*l*S+i*p*S)*O,e[8]=w*O,e[9]=(E*g*c-_*R*c-E*r*S+i*R*S+_*r*x-i*g*x)*O,e[10]=(h*R*c-E*d*c+E*r*m-i*R*m-h*r*x+i*d*x)*O,e[11]=(_*d*c-h*g*c-_*r*m+i*g*m+h*r*S-i*d*S)*O,e[12]=H*O,e[13]=(_*R*l-E*g*l+E*r*y-i*R*y-_*r*M+i*g*M)*O,e[14]=(E*d*l-h*R*l-E*r*p+i*R*p+h*r*M-i*d*M)*O,e[15]=(h*g*l-_*d*l+_*r*p-i*g*p-h*r*y+i*d*y)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,_=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,g=d+d,y=c*m,S=c*_,E=c*g,R=h*_,M=h*g,x=d*g,z=p*m,U=p*_,w=p*g,H=r.x,F=r.y,O=r.z;return l[0]=(1-(R+x))*H,l[1]=(S+w)*H,l[2]=(E-U)*H,l[3]=0,l[4]=(S-w)*F,l[5]=(1-(y+x))*F,l[6]=(M+z)*F,l[7]=0,l[8]=(E+U)*O,l[9]=(M-z)*O,l[10]=(1-(y+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Hs.set(l[0],l[1],l[2]).length();const h=Hs.set(l[4],l[5],l[6]).length(),d=Hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ci.copy(this);const m=1/c,_=1/h,g=1/d;return Ci.elements[0]*=m,Ci.elements[1]*=m,Ci.elements[2]*=m,Ci.elements[4]*=_,Ci.elements[5]*=_,Ci.elements[6]*=_,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,i.setFromRotationMatrix(Ci),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ki,p=!1){const m=this.elements,_=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let E,R;if(p)E=c/(h-c),R=h*c/(h-c);else if(d===Ki)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Cc)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ki,p=!1){const m=this.elements,_=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,R;if(p)E=1/(h-c),R=h/(h-c);else if(d===Ki)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===Cc)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Hs=new Y,Ci=new nn,QE=new Y(0,0,0),JE=new Y(1,1,1),nr=new Y,ac=new Y,oi=new Y,R0=new nn,C0=new bl;class Ji{constructor(e=0,i=0,r=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return C0.setFromEuler(this),this.setFromQuaternion(C0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $E=0;const w0=new Y,Gs=new bl,ya=new nn,rc=new Y,ll=new Y,tT=new Y,eT=new bl,D0=new Y(1,0,0),N0=new Y(0,1,0),U0=new Y(0,0,1),L0={type:"added"},nT={type:"removed"},Vs={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Dn extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new Y,i=new Ji,r=new bl,l=new Y(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ye}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(D0,e)}rotateY(e){return this.rotateOnAxis(N0,e)}rotateZ(e){return this.rotateOnAxis(U0,e)}translateOnAxis(e,i){return w0.copy(e).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(D0,e)}translateY(e){return this.translateOnAxis(N0,e)}translateZ(e){return this.translateOnAxis(U0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(ll,rc,this.up):ya.lookAt(rc,ll,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Gs.setFromRotationMatrix(ya),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(nT),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,tT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,eT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),_=h(e.images),g=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new Y(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new Y,xa=new Y,Td=new Y,Sa=new Y,Xs=new Y,ks=new Y,O0=new Y,bd=new Y,Ad=new Y,Rd=new Y,Cd=new Ye,wd=new Ye,Dd=new Ye;class Ni{constructor(e=new Y,i=new Y,r=new Y){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){wi.subVectors(l,i),xa.subVectors(r,i),Td.subVectors(e,i);const h=wi.dot(wi),d=wi.dot(xa),p=wi.dot(Td),m=xa.dot(xa),_=xa.dot(Td),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(m*p-d*_)*y,E=(h*_-d*p)*y;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,Sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Sa.x),p.addScaledVector(h,Sa.y),p.addScaledVector(d,Sa.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return Cd.setScalar(0),wd.setScalar(0),Dd.setScalar(0),Cd.fromBufferAttribute(e,i),wd.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Cd,c.x),h.addScaledVector(wd,c.y),h.addScaledVector(Dd,c.z),h}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),xa.subVectors(e,i),wi.cross(xa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),wi.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Xs.subVectors(l,r),ks.subVectors(c,r),bd.subVectors(e,r);const p=Xs.dot(bd),m=ks.dot(bd);if(p<=0&&m<=0)return i.copy(r);Ad.subVectors(e,l);const _=Xs.dot(Ad),g=ks.dot(Ad);if(_>=0&&g<=_)return i.copy(l);const y=p*g-_*m;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(Xs,h);Rd.subVectors(e,c);const S=Xs.dot(Rd),E=ks.dot(Rd);if(E>=0&&S<=E)return i.copy(c);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ks,d);const M=_*E-S*g;if(M<=0&&g-_>=0&&S-E>=0)return O0.subVectors(c,l),d=(g-_)/(g-_+(S-E)),i.copy(l).addScaledVector(O0,d);const x=1/(M+R+y);return h=R*x,d=y*x,i.copy(r).addScaledVector(Xs,h).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class he{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Oe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Oe.workingColorSpace){if(e=HE(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Nd(h,c,e+1/3),this.g=Nd(h,c,e),this.b=Nd(h,c,e-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(e,i=jn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=jn){const r=Hy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Oe.workingToColorSpace(Pn.copy(this),e),Math.round(Te(Pn.r*255,0,255))*65536+Math.round(Te(Pn.g*255,0,255))*256+Math.round(Te(Pn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Oe.workingColorSpace){Oe.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=_<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-r)/g+2;break;case c:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=jn){Oe.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==jn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+i,ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ir),e.getHSL(sc);const r=dd(ir.h,sc.h,i),l=dd(ir.s,sc.s,i),c=dd(ir.l,sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new he;he.NAMES=Hy;let iT=0;class Rl extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=co(),this.name="",this.type="Material",this.blending=$s,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Kd&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jp extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Ty,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new Y,oc=new qt;let aT=0;class ji{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=S0,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=rl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S0&&(e.usage=this.usage),e}}class Gy extends ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Vy extends ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Xn extends ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}let rT=0;const xi=new nn,Ud=new Dn,qs=new Y,li=new Al,ul=new Al,Mn=new Y;class $i extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iy(e)?Vy:Gy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ye().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];ul.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(li.min,ul.min),li.expandByPoint(Mn),Mn.addVectors(li.max,ul.max),li.expandByPoint(Mn)):(li.expandByPoint(ul.min),li.expandByPoint(ul.max))}li.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Mn.fromBufferAttribute(d,m),p&&(qs.fromBufferAttribute(e,m),Mn.add(qs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<r.count;G++)d[G]=new Y,p[G]=new Y;const m=new Y,_=new Y,g=new Y,y=new qt,S=new qt,E=new qt,R=new Y,M=new Y;function x(G,D,C){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,G),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),_.sub(m),g.sub(m),S.sub(y),E.sub(y);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(B),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(B),d[G].add(R),d[D].add(R),d[C].add(R),p[G].add(M),p[D].add(M),p[C].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let G=0,D=z.length;G<D;++G){const C=z[G],B=C.start,W=C.count;for(let st=B,mt=B+W;st<mt;st+=3)x(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const U=new Y,w=new Y,H=new Y,F=new Y;function O(G){H.fromBufferAttribute(l,G),F.copy(H);const D=d[G];U.copy(D),U.sub(H.multiplyScalar(H.dot(D))).normalize(),w.crossVectors(F,D);const B=w.dot(p[G])<0?-1:1;h.setXYZW(G,U.x,U.y,U.z,B)}for(let G=0,D=z.length;G<D;++G){const C=z[G],B=C.start,W=C.count;for(let st=B,mt=B+W;st<mt;st+=3)O(e.getX(st+0)),O(e.getX(st+1)),O(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new Y,c=new Y,h=new Y,d=new Y,p=new Y,m=new Y,_=new Y,g=new Y;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),R=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,g=d.normalized,y=new m.constructor(p.length*_);let S=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let x=0;x<_;x++)y[E++]=m[S++]}return new ji(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,g=m.length;_<g;_++){const y=m[_],S=e(y,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,y=m.length;g<y;g++){const S=m[g];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],g=c[m];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,_=h.length;m<_;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P0=new nn,zr=new jE,lc=new Kp,z0=new Y,uc=new Y,cc=new Y,fc=new Y,Ld=new Y,hc=new Y,I0=new Y,dc=new Y;class En extends Dn{constructor(e=new $i,i=new jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){hc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],g=c[p];_!==0&&(Ld.fromBufferAttribute(g,e),h?hc.addScaledVector(Ld,_):hc.addScaledVector(Ld.sub(i),_))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(c),zr.copy(e.ray).recast(e.near),!(lc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(lc,z0)===null||zr.origin.distanceToSquared(z0)>(e.far-e.near)**2))&&(P0.copy(c).invert(),zr.copy(e.ray).applyMatrix4(P0),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,zr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=h[M.materialIndex],z=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let w=z,H=U;w<H;w+=3){const F=d.getX(w),O=d.getX(w+1),G=d.getX(w+2);l=pc(this,x,e,r,m,_,g,F,O,G),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const z=d.getX(M),U=d.getX(M+1),w=d.getX(M+2);l=pc(this,h,e,r,m,_,g,z,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=h[M.materialIndex],z=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=z,H=U;w<H;w+=3){const F=w,O=w+1,G=w+2;l=pc(this,x,e,r,m,_,g,F,O,G),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const z=M,U=M+1,w=M+2;l=pc(this,h,e,r,m,_,g,z,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function sT(o,e,i,r,l,c,h,d){let p;if(e.side===Qn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===lr,d),p===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(dc);return m<i.near||m>i.far?null:{distance:m,point:dc.clone(),object:o}}function pc(o,e,i,r,l,c,h,d,p,m){o.getVertexPosition(d,uc),o.getVertexPosition(p,cc),o.getVertexPosition(m,fc);const _=sT(o,e,i,r,uc,cc,fc,I0);if(_){const g=new Y;Ni.getBarycoord(I0,uc,cc,fc,g),l&&(_.uv=Ni.getInterpolatedAttribute(l,d,p,m,g,new qt)),c&&(_.uv1=Ni.getInterpolatedAttribute(c,d,p,m,g,new qt)),h&&(_.normal=Ni.getInterpolatedAttribute(h,d,p,m,g,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Y,materialIndex:0};Ni.getNormal(uc,cc,fc,y.normal),_.face=y,_.barycoord=g}return _}class fo extends $i{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Xn(m,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(g,2));function E(R,M,x,z,U,w,H,F,O,G,D){const C=w/O,B=H/G,W=w/2,st=H/2,mt=F/2,ot=O+1,k=G+1;let it=0,j=0;const St=new Y;for(let At=0;At<k;At++){const Ht=At*B-st;for(let oe=0;oe<ot;oe++){const ge=oe*C-W;St[R]=ge*z,St[M]=Ht*U,St[x]=mt,m.push(St.x,St.y,St.z),St[R]=0,St[M]=0,St[x]=F>0?1:-1,_.push(St.x,St.y,St.z),g.push(oe/O),g.push(1-At/G),it+=1}}for(let At=0;At<G;At++)for(let Ht=0;Ht<O;Ht++){const oe=y+Ht+ot*At,ge=y+Ht+ot*(At+1),I=y+(Ht+1)+ot*(At+1),ht=y+(Ht+1)+ot*At;p.push(oe,ge,ht),p.push(ge,I,ht),j+=6}d.addGroup(S,j,D),S+=j,y+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Gn(o){const e={};for(let i=0;i<o.length;i++){const r=oo(o[i]);for(const l in r)e[l]=r[l]}return e}function oT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Xy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const lT={clone:oo,merge:Gn};var uT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uT,this.fragmentShader=cT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=oT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ky extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new Y,B0=new qt,F0=new qt;class ui extends ky{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,i){return this.getViewBounds(e,B0,F0),i.subVectors(F0,B0)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(hd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ys=-90,Ws=1;class fT extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Ys,Ws,e,i);l.layers=this.layers,this.add(l);const c=new ui(Ys,Ws,e,i);c.layers=this.layers,this.add(c);const h=new ui(Ys,Ws,e,i);h.layers=this.layers,this.add(h);const d=new ui(Ys,Ws,e,i);d.layers=this.layers,this.add(d);const p=new ui(Ys,Ws,e,i);p.layers=this.layers,this.add(p);const m=new ui(Ys,Ws,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class qy extends Vn{constructor(e=[],i=ao,r,l,c,h,d,p,m,_){super(e,i,r,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hT extends Wr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new qy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fo(5,5,5),c=new ur({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:sr});c.uniforms.tEquirect.value=i;const h=new En(l,c),d=i.minFilter;return i.minFilter===qr&&(i.minFilter=Zi),new fT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Ks extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dT={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),x=this._getHandJoint(m,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&y>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class pT extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pd=new Y,mT=new Y,gT=new ye;class Hr{constructor(e=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Pd.subVectors(r,i).cross(mT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Pd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||gT.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Kp,_T=new qt(.5,.5),mc=new Y;class Qp{constructor(e=new Hr,i=new Hr,r=new Hr,l=new Hr,c=new Hr,h=new Hr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ki,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],m=c[3],_=c[4],g=c[5],y=c[6],S=c[7],E=c[8],R=c[9],M=c[10],x=c[11],z=c[12],U=c[13],w=c[14],H=c[15];if(l[0].setComponents(m-h,S-_,x-E,H-z).normalize(),l[1].setComponents(m+h,S+_,x+E,H+z).normalize(),l[2].setComponents(m+d,S+g,x+R,H+U).normalize(),l[3].setComponents(m-d,S-g,x-R,H-U).normalize(),r)l[4].setComponents(p,y,M,w).normalize(),l[5].setComponents(m-p,S-y,x-M,H-w).normalize();else if(l[4].setComponents(m-p,S-y,x-M,H-w).normalize(),i===Ki)l[5].setComponents(m+p,S+y,x+M,H+w).normalize();else if(i===Cc)l[5].setComponents(p,y,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const i=_T.distanceTo(e.center);return Ir.radius=.7071067811865476+i,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mc.x=l.normal.x>0?e.max.x:e.min.x,mc.y=l.normal.y>0?e.max.y:e.min.y,mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vT extends Vn{constructor(e,i,r,l,c,h,d,p,m){super(e,i,r,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yy extends Vn{constructor(e,i,r=Yr,l,c,h,d=Li,p=Li,m,_=vl,g=1){if(_!==vl&&_!==yl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,h,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Wy extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends $i{constructor(e=1,i=1,r=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],y=[],S=[];let E=0;const R=[],M=r/2;let x=0;z(),h===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(y,3)),this.setAttribute("uv",new Xn(S,2));function z(){const w=new Y,H=new Y;let F=0;const O=(i-e)/r;for(let G=0;G<=c;G++){const D=[],C=G/c,B=C*(i-e)+e;for(let W=0;W<=l;W++){const st=W/l,mt=st*p+d,ot=Math.sin(mt),k=Math.cos(mt);H.x=B*ot,H.y=-C*r+M,H.z=B*k,g.push(H.x,H.y,H.z),w.set(ot,O,k).normalize(),y.push(w.x,w.y,w.z),S.push(st,1-C),D.push(E++)}R.push(D)}for(let G=0;G<l;G++)for(let D=0;D<c;D++){const C=R[D][G],B=R[D+1][G],W=R[D+1][G+1],st=R[D][G+1];(e>0||D!==0)&&(_.push(C,B,st),F+=3),(i>0||D!==c-1)&&(_.push(B,W,st),F+=3)}m.addGroup(x,F,0),x+=F}function U(w){const H=E,F=new qt,O=new Y;let G=0;const D=w===!0?e:i,C=w===!0?1:-1;for(let W=1;W<=l;W++)g.push(0,M*C,0),y.push(0,C,0),S.push(.5,.5),E++;const B=E;for(let W=0;W<=l;W++){const mt=W/l*p+d,ot=Math.cos(mt),k=Math.sin(mt);O.x=D*k,O.y=M*C,O.z=D*ot,g.push(O.x,O.y,O.z),y.push(0,C,0),F.x=ot*.5+.5,F.y=k*.5*C+.5,S.push(F.x,F.y),E++}for(let W=0;W<l;W++){const st=H+W,mt=B+W;w===!0?_.push(mt,mt+1,st):_.push(mt+1,mt,st),G+=3}m.addGroup(x,G,w===!0?1:2),x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ta{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=e*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(c-1);const _=r[l],y=r[l+1]-_,S=(h-_)/y;return(l+S)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new qt:new Y);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new Y,l=[],c=[],h=[],d=new Y,p=new nn;for(let S=0;S<=e;S++){const E=S/e;l[S]=this.getTangentAt(E,new Y)}c[0]=new Y,h[0]=new Y;let m=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),y=Math.abs(l[0].z);_<=m&&(m=_,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),y<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Te(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Te(c[0].dot(c[e]),-1,1));S/=e,l[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jp extends ta{constructor(e=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new qt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,S=m-this.aY;p=y*_-S*g+this.aX,m=y*g+S*_+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yT extends Jp{constructor(e,i,r,l,c,h){super(e,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function $p(){let o=0,e=0,i=0,r=0;function l(c,h,d,p){o=c,e=d,i=-3*c+3*h-2*d-p,r=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,_,g){let y=(h-c)/m-(d-c)/(m+_)+(d-h)/_,S=(d-h)/_-(p-h)/(_+g)+(p-d)/g;y*=_,S*=_,l(h,d,y,S)},calc:function(c){const h=c*c,d=h*c;return o+e*c+i*h+r*d}}}const gc=new Y,zd=new $p,Id=new $p,Bd=new $p;class xT extends ta{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new Y){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,_;this.closed||d>0?m=l[(d-1)%c]:(gc.subVectors(l[0],l[1]).add(l[0]),m=gc);const g=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(gc.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=gc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),S),R=Math.pow(g.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(_),S);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),zd.initNonuniformCatmullRom(m.x,g.x,y.x,_.x,E,R,M),Id.initNonuniformCatmullRom(m.y,g.y,y.y,_.y,E,R,M),Bd.initNonuniformCatmullRom(m.z,g.z,y.z,_.z,E,R,M)}else this.curveType==="catmullrom"&&(zd.initCatmullRom(m.x,g.x,y.x,_.x,this.tension),Id.initCatmullRom(m.y,g.y,y.y,_.y,this.tension),Bd.initCatmullRom(m.z,g.z,y.z,_.z,this.tension));return r.set(zd.calc(p),Id.calc(p),Bd.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new Y().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function H0(o,e,i,r,l){const c=(r-e)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+c+h)*p+(-3*i+3*r-2*c-h)*d+c*o+i}function ST(o,e){const i=1-o;return i*i*e}function MT(o,e){return 2*(1-o)*o*e}function ET(o,e){return o*o*e}function pl(o,e,i,r){return ST(o,e)+MT(o,i)+ET(o,r)}function TT(o,e){const i=1-o;return i*i*i*e}function bT(o,e){const i=1-o;return 3*i*i*o*e}function AT(o,e){return 3*(1-o)*o*o*e}function RT(o,e){return o*o*o*e}function ml(o,e,i,r,l){return TT(o,e)+bT(o,i)+AT(o,r)+RT(o,l)}class Zy extends ta{constructor(e=new qt,i=new qt,r=new qt,l=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new qt){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(ml(e,l.x,c.x,h.x,d.x),ml(e,l.y,c.y,h.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CT extends ta{constructor(e=new Y,i=new Y,r=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new Y){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(ml(e,l.x,c.x,h.x,d.x),ml(e,l.y,c.y,h.y,d.y),ml(e,l.z,c.z,h.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ky extends ta{constructor(e=new qt,i=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new qt){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new qt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wT extends ta{constructor(e=new Y,i=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new Y){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Y){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jy extends ta{constructor(e=new qt,i=new qt,r=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new qt){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(pl(e,l.x,c.x,h.x),pl(e,l.y,c.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DT extends ta{constructor(e=new Y,i=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new Y){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(pl(e,l.x,c.x,h.x),pl(e,l.y,c.y,h.y),pl(e,l.z,c.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qy extends ta{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new qt){const r=i,l=this.points,c=(l.length-1)*e,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],m=l[h],_=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return r.set(H0(d,p.x,m.x,_.x,g.x),H0(d,p.y,m.y,_.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new qt().fromArray(l))}return this}}var zp=Object.freeze({__proto__:null,ArcCurve:yT,CatmullRomCurve3:xT,CubicBezierCurve:Zy,CubicBezierCurve3:CT,EllipseCurve:Jp,LineCurve:Ky,LineCurve3:wT,QuadraticBezierCurve:jy,QuadraticBezierCurve3:DT,SplineCurve:Qy});class NT extends ta{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(i)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zp[r](i,e))}return this}getPoint(e,i){const r=e*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const h=l[c]-r,d=this.curves[c],p=d.getLength(),m=p===0?0:1-h/p;return d.getPointAt(m,i)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),e.push(i);return this.cacheLengths=e,e}getSpacedPoints(e=40){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return this.autoClose&&i.push(i[0]),i}getPoints(e=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?e*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?e*h.points.length:e,p=h.getPoints(d);for(let m=0;m<p.length;m++){const _=p[m];r&&r.equals(_)||(i.push(_),r=_)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let i=0,r=e.curves.length;i<r;i++){const l=e.curves[i];this.curves.push(l.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];e.curves.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let i=0,r=e.curves.length;i<r;i++){const l=e.curves[i];this.curves.push(new zp[l.type]().fromJSON(l))}return this}}class G0 extends NT{constructor(e){super(),this.type="Path",this.currentPoint=new qt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let i=1,r=e.length;i<r;i++)this.lineTo(e[i].x,e[i].y);return this}moveTo(e,i){return this.currentPoint.set(e,i),this}lineTo(e,i){const r=new Ky(this.currentPoint.clone(),new qt(e,i));return this.curves.push(r),this.currentPoint.set(e,i),this}quadraticCurveTo(e,i,r,l){const c=new jy(this.currentPoint.clone(),new qt(e,i),new qt(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(e,i,r,l,c,h){const d=new Zy(this.currentPoint.clone(),new qt(e,i),new qt(r,l),new qt(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(e){const i=[this.currentPoint.clone()].concat(e),r=new Qy(i);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,i,r,l,c,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+d,i+p,r,l,c,h),this}absarc(e,i,r,l,c,h){return this.absellipse(e,i,r,r,l,c,h),this}ellipse(e,i,r,l,c,h,d,p){const m=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(e+m,i+_,r,l,c,h,d,p),this}absellipse(e,i,r,l,c,h,d,p){const m=new Jp(e,i,r,l,c,h,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const _=m.getPoint(1);return this.currentPoint.copy(_),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jy extends G0{constructor(e){super(e),this.uuid=co(),this.type="Shape",this.holes=[]}getPointsHoles(e){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(e);return i}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let i=0,r=e.holes.length;i<r;i++){const l=e.holes[i];this.holes.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];e.holes.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let i=0,r=e.holes.length;i<r;i++){const l=e.holes[i];this.holes.push(new G0().fromJSON(l))}return this}}function UT(o,e,i=2){const r=e&&e.length,l=r?e[0]*i:o.length;let c=$y(o,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,p,m;if(r&&(c=IT(o,e,c,i)),o.length>80*i){d=1/0,p=1/0;let _=-1/0,g=-1/0;for(let y=i;y<l;y+=i){const S=o[y],E=o[y+1];S<d&&(d=S),E<p&&(p=E),S>_&&(_=S),E>g&&(g=E)}m=Math.max(_-d,g-p),m=m!==0?32767/m:0}return Sl(c,h,i,d,p,m,0),h}function $y(o,e,i,r,l){let c;if(l===ZT(o,e,i,r)>0)for(let h=e;h<i;h+=r)c=V0(h/r|0,o[h],o[h+1],c);else for(let h=i-r;h>=e;h-=r)c=V0(h/r|0,o[h],o[h+1],c);return c&&lo(c,c.next)&&(El(c),c=c.next),c}function Zr(o,e){if(!o)return o;e||(e=o);let i=o,r;do if(r=!1,!i.steiner&&(lo(i,i.next)||en(i.prev,i,i.next)===0)){if(El(i),i=e=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==e);return e}function Sl(o,e,i,r,l,c,h){if(!o)return;!h&&c&&VT(o,r,l,c);let d=o;for(;o.prev!==o.next;){const p=o.prev,m=o.next;if(c?OT(o,r,l,c):LT(o)){e.push(p.i,o.i,m.i),El(o),o=m.next,d=m.next;continue}if(o=m,o===d){h?h===1?(o=PT(Zr(o),e),Sl(o,e,i,r,l,c,2)):h===2&&zT(o,e,i,r,l,c):Sl(Zr(o),e,i,r,l,c,1);break}}}function LT(o){const e=o.prev,i=o,r=o.next;if(en(e,i,r)>=0)return!1;const l=e.x,c=i.x,h=r.x,d=e.y,p=i.y,m=r.y,_=Math.min(l,c,h),g=Math.min(d,p,m),y=Math.max(l,c,h),S=Math.max(d,p,m);let E=r.next;for(;E!==e;){if(E.x>=_&&E.x<=y&&E.y>=g&&E.y<=S&&hl(l,d,c,p,h,m,E.x,E.y)&&en(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function OT(o,e,i,r){const l=o.prev,c=o,h=o.next;if(en(l,c,h)>=0)return!1;const d=l.x,p=c.x,m=h.x,_=l.y,g=c.y,y=h.y,S=Math.min(d,p,m),E=Math.min(_,g,y),R=Math.max(d,p,m),M=Math.max(_,g,y),x=Ip(S,E,e,i,r),z=Ip(R,M,e,i,r);let U=o.prevZ,w=o.nextZ;for(;U&&U.z>=x&&w&&w.z<=z;){if(U.x>=S&&U.x<=R&&U.y>=E&&U.y<=M&&U!==l&&U!==h&&hl(d,_,p,g,m,y,U.x,U.y)&&en(U.prev,U,U.next)>=0||(U=U.prevZ,w.x>=S&&w.x<=R&&w.y>=E&&w.y<=M&&w!==l&&w!==h&&hl(d,_,p,g,m,y,w.x,w.y)&&en(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;U&&U.z>=x;){if(U.x>=S&&U.x<=R&&U.y>=E&&U.y<=M&&U!==l&&U!==h&&hl(d,_,p,g,m,y,U.x,U.y)&&en(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;w&&w.z<=z;){if(w.x>=S&&w.x<=R&&w.y>=E&&w.y<=M&&w!==l&&w!==h&&hl(d,_,p,g,m,y,w.x,w.y)&&en(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function PT(o,e){let i=o;do{const r=i.prev,l=i.next.next;!lo(r,l)&&ex(r,i,i.next,l)&&Ml(r,l)&&Ml(l,r)&&(e.push(r.i,i.i,l.i),El(i),El(i.next),i=o=l),i=i.next}while(i!==o);return Zr(i)}function zT(o,e,i,r,l,c){let h=o;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&qT(h,d)){let p=nx(h,d);h=Zr(h,h.next),p=Zr(p,p.next),Sl(h,e,i,r,l,c,0),Sl(p,e,i,r,l,c,0);return}d=d.next}h=h.next}while(h!==o)}function IT(o,e,i,r){const l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c]*r,p=c<h-1?e[c+1]*r:o.length,m=$y(o,d,p,r,!1);m===m.next&&(m.steiner=!0),l.push(kT(m))}l.sort(BT);for(let c=0;c<l.length;c++)i=FT(l[c],i);return i}function BT(o,e){let i=o.x-e.x;if(i===0&&(i=o.y-e.y,i===0)){const r=(o.next.y-o.y)/(o.next.x-o.x),l=(e.next.y-e.y)/(e.next.x-e.x);i=r-l}return i}function FT(o,e){const i=HT(o,e);if(!i)return e;const r=nx(i,o);return Zr(r,r.next),Zr(i,i.next)}function HT(o,e){let i=e;const r=o.x,l=o.y;let c=-1/0,h;if(lo(o,i))return i;do{if(lo(o,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=r&&g>c&&(c=g,h=i.x<i.next.x?i:i.next,g===r))return h}i=i.next}while(i!==e);if(!h)return null;const d=h,p=h.x,m=h.y;let _=1/0;i=h;do{if(r>=i.x&&i.x>=p&&r!==i.x&&tx(l<m?r:c,l,p,m,l<m?c:r,l,i.x,i.y)){const g=Math.abs(l-i.y)/(r-i.x);Ml(i,o)&&(g<_||g===_&&(i.x>h.x||i.x===h.x&&GT(h,i)))&&(h=i,_=g)}i=i.next}while(i!==d);return h}function GT(o,e){return en(o.prev,o,e.prev)<0&&en(e.next,o,o.next)<0}function VT(o,e,i,r){let l=o;do l.z===0&&(l.z=Ip(l.x,l.y,e,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,XT(l)}function XT(o){let e,i=1;do{let r=o,l;o=null;let c=null;for(e=0;r;){e++;let h=r,d=0;for(let m=0;m<i&&(d++,h=h.nextZ,!!h);m++);let p=i;for(;d>0||p>0&&h;)d!==0&&(p===0||!h||r.z<=h.z)?(l=r,r=r.nextZ,d--):(l=h,h=h.nextZ,p--),c?c.nextZ=l:o=l,l.prevZ=c,c=l;r=h}c.nextZ=null,i*=2}while(e>1);return o}function Ip(o,e,i,r,l){return o=(o-i)*l|0,e=(e-r)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function kT(o){let e=o,i=o;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==o);return i}function tx(o,e,i,r,l,c,h,d){return(l-h)*(e-d)>=(o-h)*(c-d)&&(o-h)*(r-d)>=(i-h)*(e-d)&&(i-h)*(c-d)>=(l-h)*(r-d)}function hl(o,e,i,r,l,c,h,d){return!(o===h&&e===d)&&tx(o,e,i,r,l,c,h,d)}function qT(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!YT(o,e)&&(Ml(o,e)&&Ml(e,o)&&WT(o,e)&&(en(o.prev,o,e.prev)||en(o,e.prev,e))||lo(o,e)&&en(o.prev,o,o.next)>0&&en(e.prev,e,e.next)>0)}function en(o,e,i){return(e.y-o.y)*(i.x-e.x)-(e.x-o.x)*(i.y-e.y)}function lo(o,e){return o.x===e.x&&o.y===e.y}function ex(o,e,i,r){const l=vc(en(o,e,i)),c=vc(en(o,e,r)),h=vc(en(i,r,o)),d=vc(en(i,r,e));return!!(l!==c&&h!==d||l===0&&_c(o,i,e)||c===0&&_c(o,r,e)||h===0&&_c(i,o,r)||d===0&&_c(i,e,r))}function _c(o,e,i){return e.x<=Math.max(o.x,i.x)&&e.x>=Math.min(o.x,i.x)&&e.y<=Math.max(o.y,i.y)&&e.y>=Math.min(o.y,i.y)}function vc(o){return o>0?1:o<0?-1:0}function YT(o,e){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==e.i&&i.next.i!==e.i&&ex(i,i.next,o,e))return!0;i=i.next}while(i!==o);return!1}function Ml(o,e){return en(o.prev,o,o.next)<0?en(o,e,o.next)>=0&&en(o,o.prev,e)>=0:en(o,e,o.prev)<0||en(o,o.next,e)<0}function WT(o,e){let i=o,r=!1;const l=(o.x+e.x)/2,c=(o.y+e.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==o);return r}function nx(o,e){const i=Bp(o.i,o.x,o.y),r=Bp(e.i,e.x,e.y),l=o.next,c=e.prev;return o.next=e,e.prev=o,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function V0(o,e,i,r){const l=Bp(o,e,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function El(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Bp(o,e,i){return{i:o,x:e,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ZT(o,e,i,r){let l=0;for(let c=e,h=i-r;c<i;c+=r)l+=(o[h]-o[c])*(o[c+1]+o[h+1]),h=c;return l}class KT{static triangulate(e,i,r=2){return UT(e,i,r)}}class js{static area(e){const i=e.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=e[l].x*e[c].y-e[c].x*e[l].y;return r*.5}static isClockWise(e){return js.area(e)<0}static triangulateShape(e,i){const r=[],l=[],c=[];X0(e),k0(r,e);let h=e.length;i.forEach(X0);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,k0(r,i[p]);const d=KT.triangulate(r,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function X0(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function k0(o,e){for(let i=0;i<e.length;i++)o.push(e[i].x),o.push(e[i].y)}class Dc extends $i{constructor(e=new Jy([new qt(.5,.5),new qt(-.5,.5),new qt(-.5,-.5),new qt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];const r=this,l=[],c=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];h(m)}this.setAttribute("position",new Xn(l,3)),this.setAttribute("uv",new Xn(c,2)),this.computeVertexNormals();function h(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,_=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:S-.1,R=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const x=i.extrudePath,z=i.UVGenerator!==void 0?i.UVGenerator:jT;let U,w=!1,H,F,O,G;x&&(U=x.getSpacedPoints(_),w=!0,y=!1,H=x.computeFrenetFrames(_,!1),F=new Y,O=new Y,G=new Y),y||(M=0,S=0,E=0,R=0);const D=d.extractPoints(m);let C=D.shape;const B=D.holes;if(!js.isClockWise(C)){C=C.reverse();for(let Tt=0,yt=B.length;Tt<yt;Tt++){const _t=B[Tt];js.isClockWise(_t)&&(B[Tt]=_t.reverse())}}function st(Tt){const _t=10000000000000001e-36;let dt=Tt[0];for(let Mt=1;Mt<=Tt.length;Mt++){const bt=Mt%Tt.length,zt=Tt[bt],le=zt.x-dt.x,ce=zt.y-dt.y,N=le*le+ce*ce,b=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(dt.x),Math.abs(dt.y)),et=_t*b*b;if(N<=et){Tt.splice(bt,1),Mt--;continue}dt=zt}}st(C),B.forEach(st);const mt=B.length,ot=C;for(let Tt=0;Tt<mt;Tt++){const yt=B[Tt];C=C.concat(yt)}function k(Tt,yt,_t){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Tt.clone().addScaledVector(yt,_t)}const it=C.length;function j(Tt,yt,_t){let dt,Mt,bt;const zt=Tt.x-yt.x,le=Tt.y-yt.y,ce=_t.x-Tt.x,N=_t.y-Tt.y,b=zt*zt+le*le,et=zt*N-le*ce;if(Math.abs(et)>Number.EPSILON){const ft=Math.sqrt(b),Et=Math.sqrt(ce*ce+N*N),pt=yt.x-le/ft,Zt=yt.y+zt/ft,Pt=_t.x-N/Et,Qt=_t.y+ce/Et,ee=((Pt-pt)*N-(Qt-Zt)*ce)/(zt*N-le*ce);dt=pt+zt*ee-Tt.x,Mt=Zt+le*ee-Tt.y;const Dt=dt*dt+Mt*Mt;if(Dt<=2)return new qt(dt,Mt);bt=Math.sqrt(Dt/2)}else{let ft=!1;zt>Number.EPSILON?ce>Number.EPSILON&&(ft=!0):zt<-Number.EPSILON?ce<-Number.EPSILON&&(ft=!0):Math.sign(le)===Math.sign(N)&&(ft=!0),ft?(dt=-le,Mt=zt,bt=Math.sqrt(b)):(dt=zt,Mt=le,bt=Math.sqrt(b/2))}return new qt(dt/bt,Mt/bt)}const St=[];for(let Tt=0,yt=ot.length,_t=yt-1,dt=Tt+1;Tt<yt;Tt++,_t++,dt++)_t===yt&&(_t=0),dt===yt&&(dt=0),St[Tt]=j(ot[Tt],ot[_t],ot[dt]);const At=[];let Ht,oe=St.concat();for(let Tt=0,yt=mt;Tt<yt;Tt++){const _t=B[Tt];Ht=[];for(let dt=0,Mt=_t.length,bt=Mt-1,zt=dt+1;dt<Mt;dt++,bt++,zt++)bt===Mt&&(bt=0),zt===Mt&&(zt=0),Ht[dt]=j(_t[dt],_t[bt],_t[zt]);At.push(Ht),oe=oe.concat(Ht)}let ge;if(M===0)ge=js.triangulateShape(ot,B);else{const Tt=[],yt=[];for(let _t=0;_t<M;_t++){const dt=_t/M,Mt=S*Math.cos(dt*Math.PI/2),bt=E*Math.sin(dt*Math.PI/2)+R;for(let zt=0,le=ot.length;zt<le;zt++){const ce=k(ot[zt],St[zt],bt);Ot(ce.x,ce.y,-Mt),dt===0&&Tt.push(ce)}for(let zt=0,le=mt;zt<le;zt++){const ce=B[zt];Ht=At[zt];const N=[];for(let b=0,et=ce.length;b<et;b++){const ft=k(ce[b],Ht[b],bt);Ot(ft.x,ft.y,-Mt),dt===0&&N.push(ft)}dt===0&&yt.push(N)}}ge=js.triangulateShape(Tt,yt)}const I=ge.length,ht=E+R;for(let Tt=0;Tt<it;Tt++){const yt=y?k(C[Tt],oe[Tt],ht):C[Tt];w?(O.copy(H.normals[0]).multiplyScalar(yt.x),F.copy(H.binormals[0]).multiplyScalar(yt.y),G.copy(U[0]).add(O).add(F),Ot(G.x,G.y,G.z)):Ot(yt.x,yt.y,0)}for(let Tt=1;Tt<=_;Tt++)for(let yt=0;yt<it;yt++){const _t=y?k(C[yt],oe[yt],ht):C[yt];w?(O.copy(H.normals[Tt]).multiplyScalar(_t.x),F.copy(H.binormals[Tt]).multiplyScalar(_t.y),G.copy(U[Tt]).add(O).add(F),Ot(G.x,G.y,G.z)):Ot(_t.x,_t.y,g/_*Tt)}for(let Tt=M-1;Tt>=0;Tt--){const yt=Tt/M,_t=S*Math.cos(yt*Math.PI/2),dt=E*Math.sin(yt*Math.PI/2)+R;for(let Mt=0,bt=ot.length;Mt<bt;Mt++){const zt=k(ot[Mt],St[Mt],dt);Ot(zt.x,zt.y,g+_t)}for(let Mt=0,bt=B.length;Mt<bt;Mt++){const zt=B[Mt];Ht=At[Mt];for(let le=0,ce=zt.length;le<ce;le++){const N=k(zt[le],Ht[le],dt);w?Ot(N.x,N.y+U[_-1].y,U[_-1].x+_t):Ot(N.x,N.y,g+_t)}}}$(),at();function $(){const Tt=l.length/3;if(y){let yt=0,_t=it*yt;for(let dt=0;dt<I;dt++){const Mt=ge[dt];Ut(Mt[2]+_t,Mt[1]+_t,Mt[0]+_t)}yt=_+M*2,_t=it*yt;for(let dt=0;dt<I;dt++){const Mt=ge[dt];Ut(Mt[0]+_t,Mt[1]+_t,Mt[2]+_t)}}else{for(let yt=0;yt<I;yt++){const _t=ge[yt];Ut(_t[2],_t[1],_t[0])}for(let yt=0;yt<I;yt++){const _t=ge[yt];Ut(_t[0]+it*_,_t[1]+it*_,_t[2]+it*_)}}r.addGroup(Tt,l.length/3-Tt,0)}function at(){const Tt=l.length/3;let yt=0;Rt(ot,yt),yt+=ot.length;for(let _t=0,dt=B.length;_t<dt;_t++){const Mt=B[_t];Rt(Mt,yt),yt+=Mt.length}r.addGroup(Tt,l.length/3-Tt,1)}function Rt(Tt,yt){let _t=Tt.length;for(;--_t>=0;){const dt=_t;let Mt=_t-1;Mt<0&&(Mt=Tt.length-1);for(let bt=0,zt=_+M*2;bt<zt;bt++){const le=it*bt,ce=it*(bt+1),N=yt+dt+le,b=yt+Mt+le,et=yt+Mt+ce,ft=yt+dt+ce;Ct(N,b,et,ft)}}}function Ot(Tt,yt,_t){p.push(Tt),p.push(yt),p.push(_t)}function Ut(Tt,yt,_t){Yt(Tt),Yt(yt),Yt(_t);const dt=l.length/3,Mt=z.generateTopUV(r,l,dt-3,dt-2,dt-1);P(Mt[0]),P(Mt[1]),P(Mt[2])}function Ct(Tt,yt,_t,dt){Yt(Tt),Yt(yt),Yt(dt),Yt(yt),Yt(_t),Yt(dt);const Mt=l.length/3,bt=z.generateSideWallUV(r,l,Mt-6,Mt-3,Mt-2,Mt-1);P(bt[0]),P(bt[1]),P(bt[3]),P(bt[1]),P(bt[2]),P(bt[3])}function Yt(Tt){l.push(p[Tt*3+0]),l.push(p[Tt*3+1]),l.push(p[Tt*3+2])}function P(Tt){c.push(Tt.x),c.push(Tt.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return QT(i,r,e)}static fromJSON(e,i){const r=[];for(let c=0,h=e.shapes.length;c<h;c++){const d=i[e.shapes[c]];r.push(d)}const l=e.options.extrudePath;return l!==void 0&&(e.options.extrudePath=new zp[l.type]().fromJSON(l)),new Dc(r,e.options)}}const jT={generateTopUV:function(o,e,i,r,l){const c=e[i*3],h=e[i*3+1],d=e[r*3],p=e[r*3+1],m=e[l*3],_=e[l*3+1];return[new qt(c,h),new qt(d,p),new qt(m,_)]},generateSideWallUV:function(o,e,i,r,l,c){const h=e[i*3],d=e[i*3+1],p=e[i*3+2],m=e[r*3],_=e[r*3+1],g=e[r*3+2],y=e[l*3],S=e[l*3+1],E=e[l*3+2],R=e[c*3],M=e[c*3+1],x=e[c*3+2];return Math.abs(d-_)<Math.abs(h-m)?[new qt(h,1-p),new qt(m,1-g),new qt(y,1-E),new qt(R,1-x)]:[new qt(d,1-p),new qt(_,1-g),new qt(S,1-E),new qt(M,1-x)]}};function QT(o,e,i){if(i.shapes=[],Array.isArray(o))for(let r=0,l=o.length;r<l;r++){const c=o[r];i.shapes.push(c.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}class Cl extends $i{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,g=e/d,y=i/p,S=[],E=[],R=[],M=[];for(let x=0;x<_;x++){const z=x*y-h;for(let U=0;U<m;U++){const w=U*g-c;E.push(w,-z,0),R.push(0,0,1),M.push(U/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let z=0;z<d;z++){const U=z+m*x,w=z+m*(x+1),H=z+1+m*(x+1),F=z+1+m*x;S.push(U,w,F),S.push(w,H,F)}this.setIndex(S),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(R,3)),this.setAttribute("uv",new Xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class tm extends $i{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],p=[],m=[],_=new Y,g=new Y,y=new Y;for(let S=0;S<=r;S++)for(let E=0;E<=l;E++){const R=E/l*c,M=S/r*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(R),g.y=(e+i*Math.cos(M))*Math.sin(R),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),y.subVectors(g,_).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=l;E++){const R=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,z=(l+1)*S+E;h.push(R,M,z),h.push(M,x,z)}this.setIndex(h),this.setAttribute("position",new Xn(d,3)),this.setAttribute("normal",new Xn(p,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class no extends Rl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Py,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fd extends no{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class JT extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $T extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class em extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class t1 extends em{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Hd=new nn,q0=new Y,Y0=new Y;class ix{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qp,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;q0.setFromMatrixPosition(e.matrixWorld),i.position.copy(q0),Y0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Y0),i.updateMatrixWorld(),Hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const W0=new nn,cl=new Y,Gd=new Y;class e1 extends ix{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),cl.setFromMatrixPosition(e.matrixWorld),r.position.copy(cl),Gd.copy(r.position),Gd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Gd),r.updateMatrixWorld(),l.makeTranslation(-cl.x,-cl.y,-cl.z),W0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(W0,r.coordinateSystem,r.reversedDepth)}}class n1 extends em{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new e1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ax extends ky{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class i1 extends ix{constructor(){super(new ax(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z0 extends em{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new i1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a1 extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function K0(o,e,i,r){const l=r1(r);switch(i){case Ny:return o*e;case Ly:return o*e/l.components*l.byteLength;case qp:return o*e/l.components*l.byteLength;case Oy:return o*e*2/l.components*l.byteLength;case Yp:return o*e*2/l.components*l.byteLength;case Uy:return o*e*3/l.components*l.byteLength;case Ui:return o*e*4/l.components*l.byteLength;case Wp:return o*e*4/l.components*l.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lp:case cp:return Math.max(o,16)*Math.max(e,8)/4;case op:case up:return Math.max(o,8)*Math.max(e,8)/2;case fp:case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case yp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Cp:case wp:case Dp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Np:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Lp:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function r1(o){switch(o){case Qi:case Ry:return{byteLength:1,components:1};case gl:case Cy:case Tl:return{byteLength:2,components:1};case Xp:case kp:return{byteLength:2,components:4};case Yr:case Vp:case Ea:return{byteLength:4,components:1};case wy:case Dy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);function rx(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function s1(o){const e=new WeakMap;function i(d,p){const m=d.array,_=d.usage,g=m.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const _=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,_);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],R=g[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,g[y]=R)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const R=g[S];o.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var o1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,D1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I1="gl_FragColor = linearToOutputTexel( gl_FragColor );",B1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$b=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:o1,alphahash_pars_fragment:l1,alphamap_fragment:u1,alphamap_pars_fragment:c1,alphatest_fragment:f1,alphatest_pars_fragment:h1,aomap_fragment:d1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:_1,beginnormal_vertex:v1,bsdfs:y1,iridescence_fragment:x1,bumpmap_pars_fragment:S1,clipping_planes_fragment:M1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:T1,clipping_planes_vertex:b1,color_fragment:A1,color_pars_fragment:R1,color_pars_vertex:C1,color_vertex:w1,common:D1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:U1,displacementmap_pars_vertex:L1,displacementmap_vertex:O1,emissivemap_fragment:P1,emissivemap_pars_fragment:z1,colorspace_fragment:I1,colorspace_pars_fragment:B1,envmap_fragment:F1,envmap_common_pars_fragment:H1,envmap_pars_fragment:G1,envmap_pars_vertex:V1,envmap_physical_pars_fragment:$1,envmap_vertex:X1,fog_vertex:k1,fog_pars_vertex:q1,fog_fragment:Y1,fog_pars_fragment:W1,gradientmap_pars_fragment:Z1,lightmap_pars_fragment:K1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:Q1,lights_pars_begin:J1,lights_toon_fragment:tb,lights_toon_pars_fragment:eb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:ab,lights_physical_pars_fragment:rb,lights_fragment_begin:sb,lights_fragment_maps:ob,lights_fragment_end:lb,logdepthbuf_fragment:ub,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:hb,map_fragment:db,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:vb,morphinstance_vertex:yb,morphcolor_vertex:xb,morphnormal_vertex:Sb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Eb,normal_fragment_begin:Tb,normal_fragment_maps:bb,normal_pars_fragment:Ab,normal_pars_vertex:Rb,normal_vertex:Cb,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Db,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Ub,iridescence_pars_fragment:Lb,opaque_fragment:Ob,packing:Pb,premultiplied_alpha_fragment:zb,project_vertex:Ib,dithering_fragment:Bb,dithering_pars_fragment:Fb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Xb,shadowmap_vertex:kb,shadowmask_pars_fragment:qb,skinbase_vertex:Yb,skinning_pars_vertex:Wb,skinning_vertex:Zb,skinnormal_vertex:Kb,specularmap_fragment:jb,specularmap_pars_fragment:Qb,tonemapping_fragment:Jb,tonemapping_pars_fragment:$b,transmission_fragment:tA,transmission_pars_fragment:eA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:aA,worldpos_vertex:rA,background_vert:sA,background_frag:oA,backgroundCube_vert:lA,backgroundCube_frag:uA,cube_vert:cA,cube_frag:fA,depth_vert:hA,depth_frag:dA,distanceRGBA_vert:pA,distanceRGBA_frag:mA,equirect_vert:gA,equirect_frag:_A,linedashed_vert:vA,linedashed_frag:yA,meshbasic_vert:xA,meshbasic_frag:SA,meshlambert_vert:MA,meshlambert_frag:EA,meshmatcap_vert:TA,meshmatcap_frag:bA,meshnormal_vert:AA,meshnormal_frag:RA,meshphong_vert:CA,meshphong_frag:wA,meshphysical_vert:DA,meshphysical_frag:NA,meshtoon_vert:UA,meshtoon_frag:LA,points_vert:OA,points_frag:PA,shadow_vert:zA,shadow_frag:IA,sprite_vert:BA,sprite_frag:FA},kt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},Wi={basic:{uniforms:Gn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Gn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new he(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Gn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Gn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Gn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new he(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Gn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Gn([kt.points,kt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Gn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Gn([kt.common,kt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Gn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Gn([kt.sprite,kt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Gn([kt.common,kt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Gn([kt.lights,kt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Wi.physical={uniforms:Gn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const yc={r:0,b:0,g:0},Br=new Ji,HA=new nn;function GA(o,e,i,r,l,c,h){const d=new he(0);let p=c===!0?0:1,m,_,g=null,y=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:e).get(w)),w}function R(U){let w=!1;const H=E(U);H===null?x(d,p):H&&H.isColor&&(x(H,1),w=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,w){const H=E(w);H&&(H.isCubeTexture||H.mapping===Nc)?(_===void 0&&(_=new En(new fo(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:oo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Br.copy(w.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Br)),_.material.toneMapped=Oe.getTransfer(H.colorSpace)!==qe,(g!==H||y!==H.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=H,y=H.version,S=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new En(new Cl(2,2),new ur({name:"BackgroundMaterial",uniforms:oo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(H.colorSpace)!==qe,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||y!==H.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=H,y=H.version,S=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,w){U.getRGB(yc,Xy(o)),r.buffers.color.setClear(yc.r,yc.g,yc.b,w,h)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),p=w,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(d,p)},render:R,addToRenderList:M,dispose:z}}function VA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,B,W,st,mt){let ot=!1;const k=g(st,W,B);c!==k&&(c=k,m(c.object)),ot=S(C,st,W,mt),ot&&E(C,st,W,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,w(C,B,W,st),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function p(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,B,W){const st=W.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let ot=mt[B.id];ot===void 0&&(ot={},mt[B.id]=ot);let k=ot[st];return k===void 0&&(k=y(p()),ot[st]=k),k}function y(C){const B=[],W=[],st=[];for(let mt=0;mt<i;mt++)B[mt]=0,W[mt]=0,st[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:st,object:C,attributes:{},index:null}}function S(C,B,W,st){const mt=c.attributes,ot=B.attributes;let k=0;const it=W.getAttributes();for(const j in it)if(it[j].location>=0){const At=mt[j];let Ht=ot[j];if(Ht===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Ht=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Ht=C.instanceColor)),At===void 0||At.attribute!==Ht||Ht&&At.data!==Ht.data)return!0;k++}return c.attributesNum!==k||c.index!==st}function E(C,B,W,st){const mt={},ot=B.attributes;let k=0;const it=W.getAttributes();for(const j in it)if(it[j].location>=0){let At=ot[j];At===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(At=C.instanceColor));const Ht={};Ht.attribute=At,At&&At.data&&(Ht.data=At.data),mt[j]=Ht,k++}c.attributes=mt,c.attributesNum=k,c.index=st}function R(){const C=c.newAttributes;for(let B=0,W=C.length;B<W;B++)C[B]=0}function M(C){x(C,0)}function x(C,B){const W=c.newAttributes,st=c.enabledAttributes,mt=c.attributeDivisors;W[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),mt[C]!==B&&(o.vertexAttribDivisor(C,B),mt[C]=B)}function z(){const C=c.newAttributes,B=c.enabledAttributes;for(let W=0,st=B.length;W<st;W++)B[W]!==C[W]&&(o.disableVertexAttribArray(W),B[W]=0)}function U(C,B,W,st,mt,ot,k){k===!0?o.vertexAttribIPointer(C,B,W,mt,ot):o.vertexAttribPointer(C,B,W,st,mt,ot)}function w(C,B,W,st){R();const mt=st.attributes,ot=W.getAttributes(),k=B.defaultAttributeValues;for(const it in ot){const j=ot[it];if(j.location>=0){let St=mt[it];if(St===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const At=St.normalized,Ht=St.itemSize,oe=e.get(St);if(oe===void 0)continue;const ge=oe.buffer,I=oe.type,ht=oe.bytesPerElement,$=I===o.INT||I===o.UNSIGNED_INT||St.gpuType===Vp;if(St.isInterleavedBufferAttribute){const at=St.data,Rt=at.stride,Ot=St.offset;if(at.isInstancedInterleavedBuffer){for(let Ut=0;Ut<j.locationSize;Ut++)x(j.location+Ut,at.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<j.locationSize;Ut++)M(j.location+Ut);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Ut=0;Ut<j.locationSize;Ut++)U(j.location+Ut,Ht/j.locationSize,I,At,Rt*ht,(Ot+Ht/j.locationSize*Ut)*ht,$)}else{if(St.isInstancedBufferAttribute){for(let at=0;at<j.locationSize;at++)x(j.location+at,St.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let at=0;at<j.locationSize;at++)M(j.location+at);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let at=0;at<j.locationSize;at++)U(j.location+at,Ht/j.locationSize,I,At,Ht*ht,Ht/j.locationSize*at*ht,$)}}else if(k!==void 0){const At=k[it];if(At!==void 0)switch(At.length){case 2:o.vertexAttrib2fv(j.location,At);break;case 3:o.vertexAttrib3fv(j.location,At);break;case 4:o.vertexAttrib4fv(j.location,At);break;default:o.vertexAttrib1fv(j.location,At)}}}}z()}function H(){G();for(const C in r){const B=r[C];for(const W in B){const st=B[W];for(const mt in st)_(st[mt].object),delete st[mt];delete B[W]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const W in B){const st=B[W];for(const mt in st)_(st[mt].object),delete st[mt];delete B[W]}delete r[C.id]}function O(C){for(const B in r){const W=r[B];if(W[C.id]===void 0)continue;const st=W[C.id];for(const mt in st)_(st[mt].object),delete st[mt];delete W[C.id]}}function G(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:z}}function XA(o,e,i){let r;function l(m){r=m}function c(m,_){o.drawArrays(r,m,_),i.update(_,r,1)}function h(m,_,g){g!==0&&(o.drawArraysInstanced(r,m,_,g),i.update(_,r,g))}function d(m,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];i.update(S,r,1)}function p(m,_,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)h(m[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,g);let E=0;for(let R=0;R<g;R++)E+=_[R]*y[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function kA(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ui&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const G=O===Tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Qi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ea&&!G)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:H,maxSamples:F}}function qA(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Hr,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):m();else{const z=c?0:r,U=z*4;let w=x.clippingState||null;p.value=w,w=_(E,y,U,S);for(let H=0;H!==U;++H)w[H]=i[H];x.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const x=S+R*4,z=y.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,w=S;U!==R;++U,w+=4)h.copy(g[U]).applyMatrix4(z,d),h.normal.toArray(M,w),M[w+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function YA(o){let e=new WeakMap;function i(h,d){return d===ip?h.mapping=ao:d===ap&&(h.mapping=ro),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ip||d===ap)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new hT(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Qs=4,j0=[.125,.215,.35,.446,.526,.582],Xr=20,Vd=new ax,Q0=new he;let Xd=null,kd=0,qd=0,Yd=!1;const Gr=(1+Math.sqrt(5))/2,Zs=1/Gr,J0=[new Y(-Gr,Zs,0),new Y(Gr,Zs,0),new Y(-Zs,0,Gr),new Y(Zs,0,Gr),new Y(0,Gr,-Zs),new Y(0,Gr,Zs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],WA=new Y;class $0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=WA}=c;Xd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ny(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ey(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,kd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ao||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:Tl,format:Ui,colorSpace:so,depthBuffer:!1},l=ty(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ty(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZA(c)),this._blurMaterial=KA(c,e,i)}return l}_compileMaterial(e){const i=new En(this._lodPlanes[0],e);this._renderer.compile(i,Vd)}_sceneToCubeUV(e,i,r,l,c){const p=new ui(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(Q0),g.toneMapping=or,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new jp({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),M=new En(new fo,R);let x=!1;const z=e.background;z?z.isColor&&(R.color.copy(z),e.background=null,x=!0):(R.color.copy(Q0),x=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[U],c.y,c.z)):w===1?(p.up.set(0,0,m[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[U],c.z)):(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[U]));const H=this._cubeSize;xc(l,w*H,U>2?H:0,H,H),g.setRenderTarget(l),x&&g.render(M,p),g.render(e,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=z}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ao||e.mapping===ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ny()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ey());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new En(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;xc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Vd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=J0[(l-c-1)%J0.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new En(this._lodPlanes[l],m),y=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),R=c/E,M=isFinite(c)?1+Math.floor(_*R):Xr;M>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Xr}`);const x=[];let z=0;for(let O=0;O<Xr;++O){const G=O/R,D=Math.exp(-G*G/2);x.push(D),O===0?z+=D:O<M&&(z+=2*D)}for(let O=0;O<x.length;O++)x[O]=x[O]/z;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-r;const w=this._sizeLods[l],H=3*w*(l>U-Qs?l-U+Qs:0),F=4*(this._cubeSize-w);xc(i,H,F,3*w,2*w),p.setRenderTarget(i),p.render(g,Vd)}}function ZA(o){const e=[],i=[],r=[];let l=o;const c=o-Qs+1+j0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-Qs?p=j0[h-o+Qs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,g=1+m,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,R=3,M=2,x=1,z=new Float32Array(R*E*S),U=new Float32Array(M*E*S),w=new Float32Array(x*E*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,G=F>2?0:-1,D=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];z.set(D,R*E*F),U.set(y,M*E*F);const C=[F,F,F,F,F,F];w.set(C,x*E*F)}const H=new $i;H.setAttribute("position",new ji(z,R)),H.setAttribute("uv",new ji(U,M)),H.setAttribute("faceIndex",new ji(w,x)),e.push(H),l>Qs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function ty(o,e,i){const r=new Wr(o,e,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function KA(o,e,i){const r=new Float32Array(Xr),l=new Y(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function ey(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function ny(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function nm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ip||p===ap,_=p===ao||p===ro;if(m||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new $0(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new $0(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function QA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function JA(o,e,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(g){const y=g.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function m(g){const y=[],S=g.index,E=g.attributes.position;let R=0;if(S!==null){const z=S.array;R=S.version;for(let U=0,w=z.length;U<w;U+=3){const H=z[U+0],F=z[U+1],O=z[U+2];y.push(H,F,F,O,O,H)}}else if(E!==void 0){const z=E.array;R=E.version;for(let U=0,w=z.length/3-1;U<w;U+=3){const H=U+0,F=U+1,O=U+2;y.push(H,F,F,O,O,H)}}else return;const M=new(Iy(y)?Vy:Gy)(y,1);M.version=R;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function $A(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function p(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function m(y,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,y*h,E),i.update(S,r,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function g(y,S,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)m(y[x]/h,S[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,R,0,E);let x=0;for(let z=0;z<E;z++)x+=S[z]*R[z];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function tR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function eR(o,e,i){const r=new WeakMap,l=new Ye;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let C=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),R===!0&&(w=2),M===!0&&(w=3);let H=d.attributes.position.count*w,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*F*4*g),G=new By(O,H,F,g);G.type=Ea,G.needsUpdate=!0;const D=w*4;for(let B=0;B<g;B++){const W=x[B],st=z[B],mt=U[B],ot=H*F*4*B;for(let k=0;k<W.count;k++){const it=k*D;E===!0&&(l.fromBufferAttribute(W,k),O[ot+it+0]=l.x,O[ot+it+1]=l.y,O[ot+it+2]=l.z,O[ot+it+3]=0),R===!0&&(l.fromBufferAttribute(st,k),O[ot+it+4]=l.x,O[ot+it+5]=l.y,O[ot+it+6]=l.z,O[ot+it+7]=0),M===!0&&(l.fromBufferAttribute(mt,k),O[ot+it+8]=l.x,O[ot+it+9]=l.y,O[ot+it+10]=l.z,O[ot+it+11]=mt.itemSize===4?l.w:1)}}y={count:g,texture:G,size:new qt(H,F)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function nR(o,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const sx=new Vn,iy=new Yy(1,1),ox=new By,lx=new ZE,ux=new qy,ay=[],ry=[],sy=new Float32Array(16),oy=new Float32Array(9),ly=new Float32Array(4);function ho(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=ay[l];if(c===void 0&&(c=new Float32Array(l),ay[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Uc(o,e){let i=ry[e];i===void 0&&(i=new Int32Array(e),ry[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function iR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function aR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function rR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function sR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function oR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;ly.set(r),o.uniformMatrix2fv(this.addr,!1,ly),vn(i,r)}}function lR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;oy.set(r),o.uniformMatrix3fv(this.addr,!1,oy),vn(i,r)}}function uR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;sy.set(r),o.uniformMatrix4fv(this.addr,!1,sy),vn(i,r)}}function cR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function fR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function hR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function dR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function pR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function gR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function _R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function vR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(iy.compareFunction=zy,c=iy):c=sx,i.setTexture2D(e||c,l)}function yR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||lx,l)}function xR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||ux,l)}function SR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ox,l)}function MR(o){switch(o){case 5126:return iR;case 35664:return aR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return lR;case 35676:return uR;case 5124:case 35670:return cR;case 35667:case 35671:return fR;case 35668:case 35672:return hR;case 35669:case 35673:return dR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return SR}}function ER(o,e){o.uniform1fv(this.addr,e)}function TR(o,e){const i=ho(e,this.size,2);o.uniform2fv(this.addr,i)}function bR(o,e){const i=ho(e,this.size,3);o.uniform3fv(this.addr,i)}function AR(o,e){const i=ho(e,this.size,4);o.uniform4fv(this.addr,i)}function RR(o,e){const i=ho(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function CR(o,e){const i=ho(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wR(o,e){const i=ho(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function DR(o,e){o.uniform1iv(this.addr,e)}function NR(o,e){o.uniform2iv(this.addr,e)}function UR(o,e){o.uniform3iv(this.addr,e)}function LR(o,e){o.uniform4iv(this.addr,e)}function OR(o,e){o.uniform1uiv(this.addr,e)}function PR(o,e){o.uniform2uiv(this.addr,e)}function zR(o,e){o.uniform3uiv(this.addr,e)}function IR(o,e){o.uniform4uiv(this.addr,e)}function BR(o,e,i){const r=this.cache,l=e.length,c=Uc(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||sx,c[h])}function FR(o,e,i){const r=this.cache,l=e.length,c=Uc(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||lx,c[h])}function HR(o,e,i){const r=this.cache,l=e.length,c=Uc(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||ux,c[h])}function GR(o,e,i){const r=this.cache,l=e.length,c=Uc(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||ox,c[h])}function VR(o){switch(o){case 5126:return ER;case 35664:return TR;case 35665:return bR;case 35666:return AR;case 35674:return RR;case 35675:return CR;case 35676:return wR;case 5124:case 35670:return DR;case 35667:case 35671:return NR;case 35668:case 35672:return UR;case 35669:case 35673:return LR;case 5125:return OR;case 36294:return PR;case 36295:return zR;case 36296:return IR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}class XR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=MR(i.type)}}class kR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VR(i.type)}}class qR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function uy(o,e){o.seq.push(e),o.map[e.id]=e}function YR(o,e,i){const r=o.name,l=r.length;for(Wd.lastIndex=0;;){const c=Wd.exec(r),h=Wd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){uy(i,m===void 0?new XR(d,o,e):new kR(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new qR(d),uy(i,g)),i=g}}}class Ac{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);YR(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function cy(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const WR=37297;let ZR=0;function KR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const fy=new ye;function jR(o){Oe._getMatrix(fy,Oe.workingColorSpace,o);const e=`mat3( ${fy.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(o)){case Rc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function hy(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+KR(o.getShaderSource(e),d)}else return c}function QR(o,e){const i=jR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function JR(o,e){let i;switch(e){case EE:i="Linear";break;case TE:i="Reinhard";break;case bE:i="Cineon";break;case by:i="ACESFilmic";break;case RE:i="AgX";break;case CE:i="Neutral";break;case AE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new Y;function $R(){Oe.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function eC(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function nC(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function dl(o){return o!==""}function dy(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function py(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(o){return o.replace(iC,rC)}const aC=new Map;function rC(o,e){let i=xe[e];if(i===void 0){const r=aC.get(e);if(r!==void 0)i=xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Fp(i)}const sC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function my(o){return o.replace(sC,oC)}function oC(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function gy(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ey?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===nE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function uC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ao:case ro:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cC(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===ro&&(e="ENVMAP_MODE_REFRACTION"),e}function fC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ty:e="ENVMAP_BLENDING_MULTIPLY";break;case SE:e="ENVMAP_BLENDING_MIX";break;case ME:e="ENVMAP_BLENDING_ADD";break}return e}function hC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function dC(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=lC(i),m=uC(i),_=cC(i),g=fC(i),y=hC(i),S=tC(i),E=eC(c),R=l.createProgram();let M,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(dl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(dl).join(`
`),x.length>0&&(x+=`
`)):(M=[gy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),x=[gy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==or?"#define TONE_MAPPING":"",i.toneMapping!==or?xe.tonemapping_pars_fragment:"",i.toneMapping!==or?JR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,QR("linearToOutputTexel",i.outputColorSpace),$R(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),h=Fp(h),h=dy(h,i),h=py(h,i),d=Fp(d),d=dy(d,i),d=py(d,i),h=my(h),d=my(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===M0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=z+M+h,w=z+x+d,H=cy(l,l.VERTEX_SHADER,U),F=cy(l,l.FRAGMENT_SHADER,w);l.attachShader(R,H),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(B){if(o.debug.checkShaderErrors){const W=l.getProgramInfoLog(R)||"",st=l.getShaderInfoLog(H)||"",mt=l.getShaderInfoLog(F)||"",ot=W.trim(),k=st.trim(),it=mt.trim();let j=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,F);else{const At=hy(l,H,"vertex"),Ht=hy(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ot+`
`+At+`
`+Ht)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(k===""||it==="")&&(St=!1);St&&(B.diagnostics={runnable:j,programLog:ot,vertexShader:{log:k,prefix:M},fragmentShader:{log:it,prefix:x}})}l.deleteShader(H),l.deleteShader(F),G=new Ac(l,R),D=nC(l,R)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,WR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=F,this}let pC=0;class mC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new gC(e),i.set(e,r)),r}}class gC{constructor(e){this.id=pC++,this.code=e,this.usedTimes=0}}function _C(o,e,i,r,l,c,h){const d=new Fy,p=new mC,m=new Set,_=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,B,W,st){const mt=W.fog,ot=st.geometry,k=D.isMeshStandardMaterial?W.environment:null,it=(D.isMeshStandardMaterial?i:e).get(D.envMap||k),j=it&&it.mapping===Nc?it.image.height:null,St=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const At=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ht=At!==void 0?At.length:0;let oe=0;ot.morphAttributes.position!==void 0&&(oe=1),ot.morphAttributes.normal!==void 0&&(oe=2),ot.morphAttributes.color!==void 0&&(oe=3);let ge,I,ht,$;if(St){const Re=Wi[St];ge=Re.vertexShader,I=Re.fragmentShader}else ge=D.vertexShader,I=D.fragmentShader,p.update(D),ht=p.getVertexShaderID(D),$=p.getFragmentShaderID(D);const at=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Ot=st.isInstancedMesh===!0,Ut=st.isBatchedMesh===!0,Ct=!!D.map,Yt=!!D.matcap,P=!!it,Tt=!!D.aoMap,yt=!!D.lightMap,_t=!!D.bumpMap,dt=!!D.normalMap,Mt=!!D.displacementMap,bt=!!D.emissiveMap,zt=!!D.metalnessMap,le=!!D.roughnessMap,ce=D.anisotropy>0,N=D.clearcoat>0,b=D.dispersion>0,et=D.iridescence>0,ft=D.sheen>0,Et=D.transmission>0,pt=ce&&!!D.anisotropyMap,Zt=N&&!!D.clearcoatMap,Pt=N&&!!D.clearcoatNormalMap,Qt=N&&!!D.clearcoatRoughnessMap,ee=et&&!!D.iridescenceMap,Dt=et&&!!D.iridescenceThicknessMap,Gt=ft&&!!D.sheenColorMap,ue=ft&&!!D.sheenRoughnessMap,ne=!!D.specularMap,Vt=!!D.specularColorMap,me=!!D.specularIntensityMap,X=Et&&!!D.transmissionMap,Lt=Et&&!!D.thicknessMap,Bt=!!D.gradientMap,jt=!!D.alphaMap,wt=D.alphaTest>0,xt=!!D.alphaHash,te=!!D.extensions;let pe=or;D.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(pe=o.toneMapping);const Xe={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:ge,fragmentShader:I,defines:D.defines,customVertexShaderID:ht,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Ut,batchingColor:Ut&&st._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&st.instanceColor!==null,instancingMorph:Ot&&st.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:at===null?o.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:so,alphaToCoverage:!!D.alphaToCoverage,map:Ct,matcap:Yt,envMap:P,envMapMode:P&&it.mapping,envMapCubeUVHeight:j,aoMap:Tt,lightMap:yt,bumpMap:_t,normalMap:dt,displacementMap:y&&Mt,emissiveMap:bt,normalMapObjectSpace:dt&&D.normalMapType===UE,normalMapTangentSpace:dt&&D.normalMapType===Py,metalnessMap:zt,roughnessMap:le,anisotropy:ce,anisotropyMap:pt,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Qt,dispersion:b,iridescence:et,iridescenceMap:ee,iridescenceThicknessMap:Dt,sheen:ft,sheenColorMap:Gt,sheenRoughnessMap:ue,specularMap:ne,specularColorMap:Vt,specularIntensityMap:me,transmission:Et,transmissionMap:X,thicknessMap:Lt,gradientMap:Bt,opaque:D.transparent===!1&&D.blending===$s&&D.alphaToCoverage===!1,alphaMap:jt,alphaTest:wt,alphaHash:xt,combine:D.combine,mapUv:Ct&&R(D.map.channel),aoMapUv:Tt&&R(D.aoMap.channel),lightMapUv:yt&&R(D.lightMap.channel),bumpMapUv:_t&&R(D.bumpMap.channel),normalMapUv:dt&&R(D.normalMap.channel),displacementMapUv:Mt&&R(D.displacementMap.channel),emissiveMapUv:bt&&R(D.emissiveMap.channel),metalnessMapUv:zt&&R(D.metalnessMap.channel),roughnessMapUv:le&&R(D.roughnessMap.channel),anisotropyMapUv:pt&&R(D.anisotropyMap.channel),clearcoatMapUv:Zt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:ue&&R(D.sheenRoughnessMap.channel),specularMapUv:ne&&R(D.specularMap.channel),specularColorMapUv:Vt&&R(D.specularColorMap.channel),specularIntensityMapUv:me&&R(D.specularIntensityMap.channel),transmissionMapUv:X&&R(D.transmissionMap.channel),thicknessMapUv:Lt&&R(D.thicknessMap.channel),alphaMapUv:jt&&R(D.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(dt||ce),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ot.attributes.uv&&(Ct||jt),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Rt,skinning:st.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:oe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ct&&D.map.isVideoTexture===!0&&Oe.getTransfer(D.map.colorSpace)===qe,decodeVideoTextureEmissive:bt&&D.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(D.emissiveMap.colorSpace)===qe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Di,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:te&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&D.extensions.multiDraw===!0||Ut)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(z(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function z(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let B;if(C){const W=Wi[C];B=lT.clone(W.uniforms)}else B=D.uniforms;return B}function H(D,C){let B;for(let W=0,st=_.length;W<st;W++){const mt=_[W];if(mt.cacheKey===C){B=mt,++B.usedTimes;break}}return B===void 0&&(B=new dC(o,C,D,c),_.push(B)),B}function F(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function O(D){p.remove(D)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:H,releaseProgram:F,releaseShaderCache:O,programs:_,dispose:G}}function vC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function yC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _y(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function vy(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,E,R,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:R,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=R,x.group=M),e++,x}function d(g,y,S,E,R,M){const x=h(g,y,S,E,R,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(g,y,S,E,R,M){const x=h(g,y,S,E,R,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function m(g,y){i.length>1&&i.sort(g||yC),r.length>1&&r.sort(y||_y),l.length>1&&l.sort(y||_y)}function _(){for(let g=e,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function xC(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new vy,o.set(r,[h])):l>=c.length?(h=new vy,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function SC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Y,color:new he};break;case"SpotLight":i={position:new Y,direction:new Y,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=i,i}}}function MC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let EC=0;function TC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function bC(o){const e=new SC,i=MC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const l=new Y,c=new nn,h=new nn;function d(m){let _=0,g=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,R=0,M=0,x=0,z=0,U=0,w=0,H=0,F=0,O=0;m.sort(TC);for(let D=0,C=m.length;D<C;D++){const B=m[D],W=B.color,st=B.intensity,mt=B.distance,ot=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=W.r*st,g+=W.g*st,y+=W.b*st;else if(B.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(B.sh.coefficients[k],st);O++}else if(B.isDirectionalLight){const k=e.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const it=B.shadow,j=i.get(B);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=ot,r.directionalShadowMatrix[S]=B.shadow.matrix,z++}r.directional[S]=k,S++}else if(B.isSpotLight){const k=e.get(B);k.position.setFromMatrixPosition(B.matrixWorld),k.color.copy(W).multiplyScalar(st),k.distance=mt,k.coneCos=Math.cos(B.angle),k.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),k.decay=B.decay,r.spot[R]=k;const it=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,it.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[R]=it.matrix,B.castShadow){const j=i.get(B);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=ot,w++}R++}else if(B.isRectAreaLight){const k=e.get(B);k.color.copy(W).multiplyScalar(st),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=k,M++}else if(B.isPointLight){const k=e.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),k.distance=B.distance,k.decay=B.decay,B.castShadow){const it=B.shadow,j=i.get(B);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,j.shadowCameraNear=it.camera.near,j.shadowCameraFar=it.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=ot,r.pointShadowMatrix[E]=B.shadow.matrix,U++}r.point[E]=k,E++}else if(B.isHemisphereLight){const k=e.get(B);k.skyColor.copy(B.color).multiplyScalar(st),k.groundColor.copy(B.groundColor).multiplyScalar(st),r.hemi[x]=k,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==R||G.rectAreaLength!==M||G.hemiLength!==x||G.numDirectionalShadows!==z||G.numPointShadows!==U||G.numSpotShadows!==w||G.numSpotMaps!==H||G.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,G.directionalLength=S,G.pointLength=E,G.spotLength=R,G.rectAreaLength=M,G.hemiLength=x,G.numDirectionalShadows=z,G.numPointShadows=U,G.numSpotShadows=w,G.numSpotMaps=H,G.numLightProbes=O,r.version=EC++)}function p(m,_){let g=0,y=0,S=0,E=0,R=0;const M=_.matrixWorldInverse;for(let x=0,z=m.length;x<z;x++){const U=m[x];if(U.isDirectionalLight){const w=r.directional[g];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),g++}else if(U.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:r}}function yy(o){const e=new bC(o),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function AC(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new yy(o),e.set(l,[d])):c>=h.length?(d=new yy(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const RC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wC(o,e,i){let r=new Qp;const l=new qt,c=new qt,h=new Ye,d=new JT({depthPacking:NE}),p=new $T,m={},_=i.maxTextureSize,g={[lr]:Qn,[Qn]:lr,[Di]:Di},y=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:RC,fragmentShader:CC}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new $i;E.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new En(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ey;let x=this.type;this.render=function(F,O,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),W=o.state;W.setBlending(sr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const st=x!==Ma&&this.type===Ma,mt=x===Ma&&this.type!==Ma;for(let ot=0,k=F.length;ot<k;ot++){const it=F[ot],j=it.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const St=j.getFrameExtents();if(l.multiply(St),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/St.x),l.x=c.x*St.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/St.y),l.y=c.y*St.y,j.mapSize.y=c.y)),j.map===null||st===!0||mt===!0){const Ht=this.type!==Ma?{minFilter:Li,magFilter:Li}:{};j.map!==null&&j.map.dispose(),j.map=new Wr(l.x,l.y,Ht),j.map.texture.name=it.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const At=j.getViewportCount();for(let Ht=0;Ht<At;Ht++){const oe=j.getViewport(Ht);h.set(c.x*oe.x,c.y*oe.y,c.x*oe.z,c.y*oe.w),W.viewport(h),j.updateMatrices(it,Ht),r=j.getFrustum(),w(O,G,j.camera,it,this.type)}j.isPointLightShadow!==!0&&this.type===Ma&&z(j,G),j.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,B)};function z(F,O){const G=e.update(R);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Wr(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(O,null,G,y,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(O,null,G,S,R,null)}function U(F,O,G,D){let C=null;const B=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)C=B;else if(C=G.isPointLight===!0?p:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=C.uuid,st=O.uuid;let mt=m[W];mt===void 0&&(mt={},m[W]=mt);let ot=mt[st];ot===void 0&&(ot=C.clone(),mt[st]=ot,O.addEventListener("dispose",H)),C=ot}if(C.visible=O.visible,C.wireframe=O.wireframe,D===Ma?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const W=o.properties.get(C);W.light=G}return C}function w(F,O,G,D,C){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Ma)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const st=e.update(F),mt=F.material;if(Array.isArray(mt)){const ot=st.groups;for(let k=0,it=ot.length;k<it;k++){const j=ot[k],St=mt[j.materialIndex];if(St&&St.visible){const At=U(F,St,D,C);F.onBeforeShadow(o,F,O,G,st,At,j),o.renderBufferDirect(G,null,st,At,F,j),F.onAfterShadow(o,F,O,G,st,At,j)}}}else if(mt.visible){const ot=U(F,mt,D,C);F.onBeforeShadow(o,F,O,G,st,ot,null),o.renderBufferDirect(G,null,st,ot,F,null),F.onAfterShadow(o,F,O,G,st,ot,null)}}const W=F.children;for(let st=0,mt=W.length;st<mt;st++)w(W[st],O,G,D,C)}function H(F){F.target.removeEventListener("dispose",H);for(const G in m){const D=m[G],C=F.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const DC={[jd]:Qd,[Jd]:ep,[$d]:np,[io]:tp,[Qd]:jd,[ep]:Jd,[np]:$d,[tp]:io};function NC(o,e){function i(){let X=!1;const Lt=new Ye;let Bt=null;const jt=new Ye(0,0,0,0);return{setMask:function(wt){Bt!==wt&&!X&&(o.colorMask(wt,wt,wt,wt),Bt=wt)},setLocked:function(wt){X=wt},setClear:function(wt,xt,te,pe,Xe){Xe===!0&&(wt*=pe,xt*=pe,te*=pe),Lt.set(wt,xt,te,pe),jt.equals(Lt)===!1&&(o.clearColor(wt,xt,te,pe),jt.copy(Lt))},reset:function(){X=!1,Bt=null,jt.set(-1,0,0,0)}}}function r(){let X=!1,Lt=!1,Bt=null,jt=null,wt=null;return{setReversed:function(xt){if(Lt!==xt){const te=e.get("EXT_clip_control");xt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const pe=wt;wt=null,this.setClear(pe)}},getReversed:function(){return Lt},setTest:function(xt){xt?at(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(xt){Bt!==xt&&!X&&(o.depthMask(xt),Bt=xt)},setFunc:function(xt){if(Lt&&(xt=DC[xt]),jt!==xt){switch(xt){case jd:o.depthFunc(o.NEVER);break;case Qd:o.depthFunc(o.ALWAYS);break;case Jd:o.depthFunc(o.LESS);break;case io:o.depthFunc(o.LEQUAL);break;case $d:o.depthFunc(o.EQUAL);break;case tp:o.depthFunc(o.GEQUAL);break;case ep:o.depthFunc(o.GREATER);break;case np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}jt=xt}},setLocked:function(xt){X=xt},setClear:function(xt){wt!==xt&&(Lt&&(xt=1-xt),o.clearDepth(xt),wt=xt)},reset:function(){X=!1,Bt=null,jt=null,wt=null,Lt=!1}}}function l(){let X=!1,Lt=null,Bt=null,jt=null,wt=null,xt=null,te=null,pe=null,Xe=null;return{setTest:function(Re){X||(Re?at(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Re){Lt!==Re&&!X&&(o.stencilMask(Re),Lt=Re)},setFunc:function(Re,$e,pn){(Bt!==Re||jt!==$e||wt!==pn)&&(o.stencilFunc(Re,$e,pn),Bt=Re,jt=$e,wt=pn)},setOp:function(Re,$e,pn){(xt!==Re||te!==$e||pe!==pn)&&(o.stencilOp(Re,$e,pn),xt=Re,te=$e,pe=pn)},setLocked:function(Re){X=Re},setClear:function(Re){Xe!==Re&&(o.clearStencil(Re),Xe=Re)},reset:function(){X=!1,Lt=null,Bt=null,jt=null,wt=null,xt=null,te=null,pe=null,Xe=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},g={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,z=null,U=null,w=null,H=null,F=null,O=new he(0,0,0),G=0,D=!1,C=null,B=null,W=null,st=null,mt=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,it=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=it>=1):j.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=it>=2);let St=null,At={};const Ht=o.getParameter(o.SCISSOR_BOX),oe=o.getParameter(o.VIEWPORT),ge=new Ye().fromArray(Ht),I=new Ye().fromArray(oe);function ht(X,Lt,Bt,jt){const wt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(X,xt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<Bt;te++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,jt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Lt+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return xt}const $={};$[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),at(o.DEPTH_TEST),h.setFunc(io),_t(!1),dt(g0),at(o.CULL_FACE),Tt(sr);function at(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Rt(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Ot(X,Lt){return g[X]!==Lt?(o.bindFramebuffer(X,Lt),g[X]=Lt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ut(X,Lt){let Bt=S,jt=!1;if(X){Bt=y.get(Lt),Bt===void 0&&(Bt=[],y.set(Lt,Bt));const wt=X.textures;if(Bt.length!==wt.length||Bt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,te=wt.length;xt<te;xt++)Bt[xt]=o.COLOR_ATTACHMENT0+xt;Bt.length=wt.length,jt=!0}}else Bt[0]!==o.BACK&&(Bt[0]=o.BACK,jt=!0);jt&&o.drawBuffers(Bt)}function Ct(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Yt={[Vr]:o.FUNC_ADD,[aE]:o.FUNC_SUBTRACT,[rE]:o.FUNC_REVERSE_SUBTRACT};Yt[sE]=o.MIN,Yt[oE]=o.MAX;const P={[lE]:o.ZERO,[uE]:o.ONE,[cE]:o.SRC_COLOR,[Zd]:o.SRC_ALPHA,[gE]:o.SRC_ALPHA_SATURATE,[pE]:o.DST_COLOR,[hE]:o.DST_ALPHA,[fE]:o.ONE_MINUS_SRC_COLOR,[Kd]:o.ONE_MINUS_SRC_ALPHA,[mE]:o.ONE_MINUS_DST_COLOR,[dE]:o.ONE_MINUS_DST_ALPHA,[_E]:o.CONSTANT_COLOR,[vE]:o.ONE_MINUS_CONSTANT_COLOR,[yE]:o.CONSTANT_ALPHA,[xE]:o.ONE_MINUS_CONSTANT_ALPHA};function Tt(X,Lt,Bt,jt,wt,xt,te,pe,Xe,Re){if(X===sr){R===!0&&(Rt(o.BLEND),R=!1);return}if(R===!1&&(at(o.BLEND),R=!0),X!==iE){if(X!==M||Re!==D){if((x!==Vr||w!==Vr)&&(o.blendEquation(o.FUNC_ADD),x=Vr,w=Vr),Re)switch(X){case $s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _0:o.blendFunc(o.ONE,o.ONE);break;case v0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case y0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case $s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case v0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,U=null,H=null,F=null,O.set(0,0,0),G=0,M=X,D=Re}return}wt=wt||Lt,xt=xt||Bt,te=te||jt,(Lt!==x||wt!==w)&&(o.blendEquationSeparate(Yt[Lt],Yt[wt]),x=Lt,w=wt),(Bt!==z||jt!==U||xt!==H||te!==F)&&(o.blendFuncSeparate(P[Bt],P[jt],P[xt],P[te]),z=Bt,U=jt,H=xt,F=te),(pe.equals(O)===!1||Xe!==G)&&(o.blendColor(pe.r,pe.g,pe.b,Xe),O.copy(pe),G=Xe),M=X,D=!1}function yt(X,Lt){X.side===Di?Rt(o.CULL_FACE):at(o.CULL_FACE);let Bt=X.side===Qn;Lt&&(Bt=!Bt),_t(Bt),X.blending===$s&&X.transparent===!1?Tt(sr):Tt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const jt=X.stencilWrite;d.setTest(jt),jt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?at(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function dt(X){X!==tE?(at(o.CULL_FACE),X!==B&&(X===g0?o.cullFace(o.BACK):X===eE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),B=X}function Mt(X){X!==W&&(k&&o.lineWidth(X),W=X)}function bt(X,Lt,Bt){X?(at(o.POLYGON_OFFSET_FILL),(st!==Lt||mt!==Bt)&&(o.polygonOffset(Lt,Bt),st=Lt,mt=Bt)):Rt(o.POLYGON_OFFSET_FILL)}function zt(X){X?at(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function le(X){X===void 0&&(X=o.TEXTURE0+ot-1),St!==X&&(o.activeTexture(X),St=X)}function ce(X,Lt,Bt){Bt===void 0&&(St===null?Bt=o.TEXTURE0+ot-1:Bt=St);let jt=At[Bt];jt===void 0&&(jt={type:void 0,texture:void 0},At[Bt]=jt),(jt.type!==X||jt.texture!==Lt)&&(St!==Bt&&(o.activeTexture(Bt),St=Bt),o.bindTexture(X,Lt||$[X]),jt.type=X,jt.texture=Lt)}function N(){const X=At[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(X){ge.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function ue(X){I.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),I.copy(X))}function ne(X,Lt){let Bt=m.get(Lt);Bt===void 0&&(Bt=new WeakMap,m.set(Lt,Bt));let jt=Bt.get(X);jt===void 0&&(jt=o.getUniformBlockIndex(Lt,X.name),Bt.set(X,jt))}function Vt(X,Lt){const jt=m.get(Lt).get(X);p.get(Lt)!==jt&&(o.uniformBlockBinding(Lt,jt,X.__bindingPointIndex),p.set(Lt,jt))}function me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,At={},g={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,z=null,U=null,w=null,H=null,F=null,O=new he(0,0,0),G=0,D=!1,C=null,B=null,W=null,st=null,mt=null,ge.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:at,disable:Rt,bindFramebuffer:Ot,drawBuffers:Ut,useProgram:Ct,setBlending:Tt,setMaterial:yt,setFlipSided:_t,setCullFace:dt,setLineWidth:Mt,setPolygonOffset:bt,setScissorTest:zt,activeTexture:le,bindTexture:ce,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:ee,texImage3D:Dt,updateUBOMapping:ne,uniformBlockBinding:Vt,texStorage2D:Pt,texStorage3D:Qt,texSubImage2D:ft,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:Zt,scissor:Gt,viewport:ue,reset:me}}function UC(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new qt,_=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):wc("canvas")}function R(N,b,et){let ft=1;const Et=ce(N);if((Et.width>et||Et.height>et)&&(ft=et/Math.max(Et.width,Et.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(ft*Et.width),Zt=Math.floor(ft*Et.height);g===void 0&&(g=E(pt,Zt));const Pt=b?E(pt,Zt):g;return Pt.width=pt,Pt.height=Zt,Pt.getContext("2d").drawImage(N,0,0,pt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+Zt+")."),Pt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(N,b,et,ft,Et=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=b;if(b===o.RED&&(et===o.FLOAT&&(pt=o.R32F),et===o.HALF_FLOAT&&(pt=o.R16F),et===o.UNSIGNED_BYTE&&(pt=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.R8UI),et===o.UNSIGNED_SHORT&&(pt=o.R16UI),et===o.UNSIGNED_INT&&(pt=o.R32UI),et===o.BYTE&&(pt=o.R8I),et===o.SHORT&&(pt=o.R16I),et===o.INT&&(pt=o.R32I)),b===o.RG&&(et===o.FLOAT&&(pt=o.RG32F),et===o.HALF_FLOAT&&(pt=o.RG16F),et===o.UNSIGNED_BYTE&&(pt=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RG8UI),et===o.UNSIGNED_SHORT&&(pt=o.RG16UI),et===o.UNSIGNED_INT&&(pt=o.RG32UI),et===o.BYTE&&(pt=o.RG8I),et===o.SHORT&&(pt=o.RG16I),et===o.INT&&(pt=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),et===o.UNSIGNED_INT&&(pt=o.RGB32UI),et===o.BYTE&&(pt=o.RGB8I),et===o.SHORT&&(pt=o.RGB16I),et===o.INT&&(pt=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),et===o.UNSIGNED_INT&&(pt=o.RGBA32UI),et===o.BYTE&&(pt=o.RGBA8I),et===o.SHORT&&(pt=o.RGBA16I),et===o.INT&&(pt=o.RGBA32I)),b===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),b===o.RGBA){const Zt=Et?Rc:Oe.getTransfer(ft);et===o.FLOAT&&(pt=o.RGBA32F),et===o.HALF_FLOAT&&(pt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(pt=Zt===qe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function w(N,b){let et;return N?b===null||b===Yr||b===_l?et=o.DEPTH24_STENCIL8:b===Ea?et=o.DEPTH32F_STENCIL8:b===gl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yr||b===_l?et=o.DEPTH_COMPONENT24:b===Ea?et=o.DEPTH_COMPONENT32F:b===gl&&(et=o.DEPTH_COMPONENT16),et}function H(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Li&&N.minFilter!==Zi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function F(N){const b=N.target;b.removeEventListener("dispose",F),G(b),b.isVideoTexture&&_.delete(b)}function O(N){const b=N.target;b.removeEventListener("dispose",O),C(b)}function G(N){const b=r.get(N);if(b.__webglInit===void 0)return;const et=N.source,ft=y.get(et);if(ft){const Et=ft[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(N),Object.keys(ft).length===0&&y.delete(et)}r.remove(N)}function D(N){const b=r.get(N);o.deleteTexture(b.__webglTexture);const et=N.source,ft=y.get(et);delete ft[b.__cacheKey],h.memory.textures--}function C(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let Et=0;Et<b.__webglFramebuffer[ft].length;Et++)o.deleteFramebuffer(b.__webglFramebuffer[ft][Et]);else o.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)o.deleteFramebuffer(b.__webglFramebuffer[ft]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=N.textures;for(let ft=0,Et=et.length;ft<Et;ft++){const pt=r.get(et[ft]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(et[ft])}r.remove(N)}let B=0;function W(){B=0}function st(){const N=B;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function mt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ot(N,b){const et=r.get(N);if(N.isVideoTexture&&zt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&et.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,N,b);return}}else N.isExternalTexture&&(et.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function k(N,b){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){$(et,N,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function it(N,b){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){$(et,N,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function j(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){at(et,N,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const St={[rp]:o.REPEAT,[kr]:o.CLAMP_TO_EDGE,[sp]:o.MIRRORED_REPEAT},At={[Li]:o.NEAREST,[wE]:o.NEAREST_MIPMAP_NEAREST,[Ju]:o.NEAREST_MIPMAP_LINEAR,[Zi]:o.LINEAR,[fd]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},Ht={[LE]:o.NEVER,[FE]:o.ALWAYS,[OE]:o.LESS,[zy]:o.LEQUAL,[PE]:o.EQUAL,[BE]:o.GEQUAL,[zE]:o.GREATER,[IE]:o.NOTEQUAL};function oe(N,b){if(b.type===Ea&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Zi||b.magFilter===fd||b.magFilter===Ju||b.magFilter===qr||b.minFilter===Zi||b.minFilter===fd||b.minFilter===Ju||b.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,St[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,St[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,St[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,At[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Ht[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Li||b.minFilter!==Ju&&b.minFilter!==qr||b.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ge(N,b){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const ft=b.source;let Et=y.get(ft);Et===void 0&&(Et={},y.set(ft,Et));const pt=mt(b);if(pt!==N.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Et[pt].usedTimes++;const Zt=Et[N.__cacheKey];Zt!==void 0&&(Et[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&D(b)),N.__cacheKey=pt,N.__webglTexture=Et[pt].texture}return et}function I(N,b,et){return Math.floor(Math.floor(N/et)/b)}function ht(N,b,et,ft){const pt=N.updateRanges;if(pt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,ft,b.data);else{pt.sort((Dt,Gt)=>Dt.start-Gt.start);let Zt=0;for(let Dt=1;Dt<pt.length;Dt++){const Gt=pt[Zt],ue=pt[Dt],ne=Gt.start+Gt.count,Vt=I(ue.start,b.width,4),me=I(Gt.start,b.width,4);ue.start<=ne+1&&Vt===me&&I(ue.start+ue.count-1,b.width,4)===Vt?Gt.count=Math.max(Gt.count,ue.start+ue.count-Gt.start):(++Zt,pt[Zt]=ue)}pt.length=Zt+1;const Pt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Dt=0,Gt=pt.length;Dt<Gt;Dt++){const ue=pt[Dt],ne=Math.floor(ue.start/4),Vt=Math.ceil(ue.count/4),me=ne%b.width,X=Math.floor(ne/b.width),Lt=Vt,Bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,me),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,me,X,Lt,Bt,et,ft,b.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Pt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function $(N,b,et){let ft=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=o.TEXTURE_3D);const Et=ge(N,b),pt=b.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+et);const Zt=r.get(pt);if(pt.version!==Zt.__version||Et===!0){i.activeTexture(o.TEXTURE0+et);const Pt=Oe.getPrimaries(Oe.workingColorSpace),Qt=b.colorSpace===rr?null:Oe.getPrimaries(b.colorSpace),ee=b.colorSpace===rr||Pt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Dt=R(b.image,!1,l.maxTextureSize);Dt=le(b,Dt);const Gt=c.convert(b.format,b.colorSpace),ue=c.convert(b.type);let ne=U(b.internalFormat,Gt,ue,b.colorSpace,b.isVideoTexture);oe(ft,b);let Vt;const me=b.mipmaps,X=b.isVideoTexture!==!0,Lt=Zt.__version===void 0||Et===!0,Bt=pt.dataReady,jt=H(b,Dt);if(b.isDepthTexture)ne=w(b.format===yl,b.type),Lt&&(X?i.texStorage2D(o.TEXTURE_2D,1,ne,Dt.width,Dt.height):i.texImage2D(o.TEXTURE_2D,0,ne,Dt.width,Dt.height,0,Gt,ue,null));else if(b.isDataTexture)if(me.length>0){X&&Lt&&i.texStorage2D(o.TEXTURE_2D,jt,ne,me[0].width,me[0].height);for(let wt=0,xt=me.length;wt<xt;wt++)Vt=me[wt],X?Bt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Vt.width,Vt.height,Gt,ue,Vt.data):i.texImage2D(o.TEXTURE_2D,wt,ne,Vt.width,Vt.height,0,Gt,ue,Vt.data);b.generateMipmaps=!1}else X?(Lt&&i.texStorage2D(o.TEXTURE_2D,jt,ne,Dt.width,Dt.height),Bt&&ht(b,Dt,Gt,ue)):i.texImage2D(o.TEXTURE_2D,0,ne,Dt.width,Dt.height,0,Gt,ue,Dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,ne,me[0].width,me[0].height,Dt.depth);for(let wt=0,xt=me.length;wt<xt;wt++)if(Vt=me[wt],b.format!==Ui)if(Gt!==null)if(X){if(Bt)if(b.layerUpdates.size>0){const te=K0(Vt.width,Vt.height,b.format,b.type);for(const pe of b.layerUpdates){const Xe=Vt.data.subarray(pe*te/Vt.data.BYTES_PER_ELEMENT,(pe+1)*te/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,pe,Vt.width,Vt.height,1,Gt,Xe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,Vt.width,Vt.height,Dt.depth,Gt,Vt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,wt,ne,Vt.width,Vt.height,Dt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,Vt.width,Vt.height,Dt.depth,Gt,ue,Vt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,wt,ne,Vt.width,Vt.height,Dt.depth,0,Gt,ue,Vt.data)}else{X&&Lt&&i.texStorage2D(o.TEXTURE_2D,jt,ne,me[0].width,me[0].height);for(let wt=0,xt=me.length;wt<xt;wt++)Vt=me[wt],b.format!==Ui?Gt!==null?X?Bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,wt,0,0,Vt.width,Vt.height,Gt,Vt.data):i.compressedTexImage2D(o.TEXTURE_2D,wt,ne,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Bt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Vt.width,Vt.height,Gt,ue,Vt.data):i.texImage2D(o.TEXTURE_2D,wt,ne,Vt.width,Vt.height,0,Gt,ue,Vt.data)}else if(b.isDataArrayTexture)if(X){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,ne,Dt.width,Dt.height,Dt.depth),Bt)if(b.layerUpdates.size>0){const wt=K0(Dt.width,Dt.height,b.format,b.type);for(const xt of b.layerUpdates){const te=Dt.data.subarray(xt*wt/Dt.data.BYTES_PER_ELEMENT,(xt+1)*wt/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Dt.width,Dt.height,1,Gt,ue,te)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Gt,ue,Dt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ne,Dt.width,Dt.height,Dt.depth,0,Gt,ue,Dt.data);else if(b.isData3DTexture)X?(Lt&&i.texStorage3D(o.TEXTURE_3D,jt,ne,Dt.width,Dt.height,Dt.depth),Bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Gt,ue,Dt.data)):i.texImage3D(o.TEXTURE_3D,0,ne,Dt.width,Dt.height,Dt.depth,0,Gt,ue,Dt.data);else if(b.isFramebufferTexture){if(Lt)if(X)i.texStorage2D(o.TEXTURE_2D,jt,ne,Dt.width,Dt.height);else{let wt=Dt.width,xt=Dt.height;for(let te=0;te<jt;te++)i.texImage2D(o.TEXTURE_2D,te,ne,wt,xt,0,Gt,ue,null),wt>>=1,xt>>=1}}else if(me.length>0){if(X&&Lt){const wt=ce(me[0]);i.texStorage2D(o.TEXTURE_2D,jt,ne,wt.width,wt.height)}for(let wt=0,xt=me.length;wt<xt;wt++)Vt=me[wt],X?Bt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Gt,ue,Vt):i.texImage2D(o.TEXTURE_2D,wt,ne,Gt,ue,Vt);b.generateMipmaps=!1}else if(X){if(Lt){const wt=ce(Dt);i.texStorage2D(o.TEXTURE_2D,jt,ne,wt.width,wt.height)}Bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,ue,Dt)}else i.texImage2D(o.TEXTURE_2D,0,ne,Gt,ue,Dt);M(b)&&x(ft),Zt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function at(N,b,et){if(b.image.length!==6)return;const ft=ge(N,b),Et=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const pt=r.get(Et);if(Et.version!==pt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const Zt=Oe.getPrimaries(Oe.workingColorSpace),Pt=b.colorSpace===rr?null:Oe.getPrimaries(b.colorSpace),Qt=b.colorSpace===rr||Zt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Dt=b.image[0]&&b.image[0].isDataTexture,Gt=[];for(let xt=0;xt<6;xt++)!ee&&!Dt?Gt[xt]=R(b.image[xt],!0,l.maxCubemapSize):Gt[xt]=Dt?b.image[xt].image:b.image[xt],Gt[xt]=le(b,Gt[xt]);const ue=Gt[0],ne=c.convert(b.format,b.colorSpace),Vt=c.convert(b.type),me=U(b.internalFormat,ne,Vt,b.colorSpace),X=b.isVideoTexture!==!0,Lt=pt.__version===void 0||ft===!0,Bt=Et.dataReady;let jt=H(b,ue);oe(o.TEXTURE_CUBE_MAP,b);let wt;if(ee){X&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,me,ue.width,ue.height);for(let xt=0;xt<6;xt++){wt=Gt[xt].mipmaps;for(let te=0;te<wt.length;te++){const pe=wt[te];b.format!==Ui?ne!==null?X?Bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te,0,0,pe.width,pe.height,ne,pe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te,0,0,pe.width,pe.height,ne,Vt,pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te,me,pe.width,pe.height,0,ne,Vt,pe.data)}}}else{if(wt=b.mipmaps,X&&Lt){wt.length>0&&jt++;const xt=ce(Gt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,me,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Dt){X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Gt[xt].width,Gt[xt].height,ne,Vt,Gt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,me,Gt[xt].width,Gt[xt].height,0,ne,Vt,Gt[xt].data);for(let te=0;te<wt.length;te++){const Xe=wt[te].image[xt].image;X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te+1,0,0,Xe.width,Xe.height,ne,Vt,Xe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te+1,me,Xe.width,Xe.height,0,ne,Vt,Xe.data)}}else{X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ne,Vt,Gt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,me,ne,Vt,Gt[xt]);for(let te=0;te<wt.length;te++){const pe=wt[te];X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te+1,0,0,ne,Vt,pe.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,te+1,me,ne,Vt,pe.image[xt])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),pt.__version=Et.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Rt(N,b,et,ft,Et,pt){const Zt=c.convert(et.format,et.colorSpace),Pt=c.convert(et.type),Qt=U(et.internalFormat,Zt,Pt,et.colorSpace),ee=r.get(b),Dt=r.get(et);if(Dt.__renderTarget=b,!ee.__hasExternalTextures){const Gt=Math.max(1,b.width>>pt),ue=Math.max(1,b.height>>pt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,Qt,Gt,ue,b.depth,0,Zt,Pt,null):i.texImage2D(Et,pt,Qt,Gt,ue,0,Zt,Pt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),bt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Et,Dt.__webglTexture,0,Mt(b)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Et,Dt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(N,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const ft=b.depthTexture,Et=ft&&ft.isDepthTexture?ft.type:null,pt=w(b.stencilBuffer,Et),Zt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=Mt(b);bt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt,pt,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,pt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,pt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,N)}else{const ft=b.textures;for(let Et=0;Et<ft.length;Et++){const pt=ft[Et],Zt=c.convert(pt.format,pt.colorSpace),Pt=c.convert(pt.type),Qt=U(pt.internalFormat,Zt,Pt,pt.colorSpace),ee=Mt(b);et&&bt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Qt,b.width,b.height):bt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,Qt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ut(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ot(b.depthTexture,0);const Et=ft.__webglTexture,pt=Mt(b);if(b.depthTexture.format===vl)bt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(b.depthTexture.format===yl)bt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ct(N){const b=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",Et)};ft.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=ft}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Ut(b.__webglFramebuffer[0],N):Ut(b.__webglFramebuffer,N)}else if(et){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=o.createRenderbuffer(),Ot(b.__webglDepthbuffer[ft],N,!1);else{const Et=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,pt)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ot(b.__webglDepthbuffer,N,!1);else{const Et=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,pt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(N,b,et){const ft=r.get(N);b!==void 0&&Rt(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Ct(N)}function P(N){const b=N.texture,et=r.get(N),ft=r.get(b);N.addEventListener("dispose",O);const Et=N.textures,pt=N.isWebGLCubeRenderTarget===!0,Zt=Et.length>1;if(Zt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=b.version,h.memory.textures++),pt){et.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Pt]=[];for(let Qt=0;Qt<b.mipmaps.length;Qt++)et.__webglFramebuffer[Pt][Qt]=o.createFramebuffer()}else et.__webglFramebuffer[Pt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)et.__webglFramebuffer[Pt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Pt=0,Qt=Et.length;Pt<Qt;Pt++){const ee=r.get(Et[Pt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&bt(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Pt=0;Pt<Et.length;Pt++){const Qt=Et[Pt];et.__webglColorRenderbuffer[Pt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Pt]);const ee=c.convert(Qt.format,Qt.colorSpace),Dt=c.convert(Qt.type),Gt=U(Qt.internalFormat,ee,Dt,Qt.colorSpace,N.isXRRenderTarget===!0),ue=Mt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,ue,Gt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Pt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),oe(o.TEXTURE_CUBE_MAP,b);for(let Pt=0;Pt<6;Pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Rt(et.__webglFramebuffer[Pt][Qt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Qt);else Rt(et.__webglFramebuffer[Pt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Pt=0,Qt=Et.length;Pt<Qt;Pt++){const ee=Et[Pt],Dt=r.get(ee);let Gt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Gt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Gt,Dt.__webglTexture),oe(Gt,ee),Rt(et.__webglFramebuffer,N,ee,o.COLOR_ATTACHMENT0+Pt,Gt,0),M(ee)&&x(Gt)}i.unbindTexture()}else{let Pt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,ft.__webglTexture),oe(Pt,b),b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Rt(et.__webglFramebuffer[Qt],N,b,o.COLOR_ATTACHMENT0,Pt,Qt);else Rt(et.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Pt,0);M(b)&&x(Pt),i.unbindTexture()}N.depthBuffer&&Ct(N)}function Tt(N){const b=N.textures;for(let et=0,ft=b.length;et<ft;et++){const Et=b[et];if(M(Et)){const pt=z(N),Zt=r.get(Et).__webglTexture;i.bindTexture(pt,Zt),x(pt),i.unbindTexture()}}}const yt=[],_t=[];function dt(N){if(N.samples>0){if(bt(N)===!1){const b=N.textures,et=N.width,ft=N.height;let Et=o.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(N),Pt=b.length>1;if(Pt)for(let ee=0;ee<b.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<b.length;ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Pt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Dt=r.get(b[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Dt,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,Et,o.NEAREST),p===!0&&(yt.length=0,_t.length=0,yt.push(o.COLOR_ATTACHMENT0+ee),N.depthBuffer&&N.resolveDepthBuffer===!1&&(yt.push(pt),_t.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,_t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Pt)for(let ee=0;ee<b.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Dt=r.get(b[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Dt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Mt(N){return Math.min(l.maxSamples,N.samples)}function bt(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function zt(N){const b=h.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function le(N,b){const et=N.colorSpace,ft=N.format,Et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==so&&et!==rr&&(Oe.getTransfer(et)===qe?(ft!==Ui||Et!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=W,this.setTexture2D=ot,this.setTexture2DArray=k,this.setTexture3D=it,this.setTextureCube=j,this.rebindTextures=Yt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=bt}function LC(o,e){function i(r,l=rr){let c;const h=Oe.getTransfer(l);if(r===Qi)return o.UNSIGNED_BYTE;if(r===Xp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===wy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Dy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ry)return o.BYTE;if(r===Cy)return o.SHORT;if(r===gl)return o.UNSIGNED_SHORT;if(r===Vp)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===Ea)return o.FLOAT;if(r===Tl)return o.HALF_FLOAT;if(r===Ny)return o.ALPHA;if(r===Uy)return o.RGB;if(r===Ui)return o.RGBA;if(r===vl)return o.DEPTH_COMPONENT;if(r===yl)return o.DEPTH_STENCIL;if(r===Ly)return o.RED;if(r===qp)return o.RED_INTEGER;if(r===Oy)return o.RG;if(r===Yp)return o.RG_INTEGER;if(r===Wp)return o.RGBA_INTEGER;if(r===Mc||r===Ec||r===Tc||r===bc)if(h===qe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Mc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Mc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===op||r===lp||r===up||r===cp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===op)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===up)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fp||r===hp||r===dp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===fp||r===hp)return h===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===dp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pp||r===mp||r===gp||r===_p||r===vp||r===yp||r===xp||r===Sp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===pp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_p)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ep)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ap)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cp||r===wp||r===Dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cp)return h===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Np||r===Up||r===Lp||r===Op)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Np)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_l?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const OC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Wy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ur({vertexShader:OC,fragmentShader:PC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new En(new Cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IC extends uo{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,g=null,y=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",M=new zC,x={},z=i.getContextAttributes();let U=null,w=null;const H=[],F=[],O=new qt;let G=null;const D=new ui;D.viewport=new Ye;const C=new ui;C.viewport=new Ye;const B=[D,C],W=new a1;let st=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=H[$];return at===void 0&&(at=new Od,H[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=H[$];return at===void 0&&(at=new Od,H[$]=at),at.getGripSpace()},this.getHand=function($){let at=H[$];return at===void 0&&(at=new Od,H[$]=at),at.getHandSpace()};function ot($){const at=F.indexOf($.inputSource);if(at===-1)return;const Rt=H[at];Rt!==void 0&&(Rt.update($.inputSource,$.frame,m||h),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",it);for(let $=0;$<H.length;$++){const at=F[$];at!==null&&(F[$]=null,H[$].disconnect(at))}st=null,mt=null,M.reset();for(const $ in x)delete x[$];e.setRenderTarget(U),S=null,y=null,g=null,l=null,w=null,ht.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",k),l.addEventListener("inputsourceschange",it),z.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ot=null,Ut=null;z.depth&&(Ut=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=z.stencil?yl:vl,Ot=z.stencil?_l:Yr);const Ct={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(Ct),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),w=new Wr(y.textureWidth,y.textureHeight,{format:Ui,type:Qi,depthTexture:new Yy(y.textureWidth,y.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Rt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new Wr(S.framebufferWidth,S.framebufferHeight,{format:Ui,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),ht.setContext(l),ht.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function it($){for(let at=0;at<$.removed.length;at++){const Rt=$.removed[at],Ot=F.indexOf(Rt);Ot>=0&&(F[Ot]=null,H[Ot].disconnect(Rt))}for(let at=0;at<$.added.length;at++){const Rt=$.added[at];let Ot=F.indexOf(Rt);if(Ot===-1){for(let Ct=0;Ct<H.length;Ct++)if(Ct>=F.length){F.push(Rt),Ot=Ct;break}else if(F[Ct]===null){F[Ct]=Rt,Ot=Ct;break}if(Ot===-1)break}const Ut=H[Ot];Ut&&Ut.connect(Rt)}}const j=new Y,St=new Y;function At($,at,Rt){j.setFromMatrixPosition(at.matrixWorld),St.setFromMatrixPosition(Rt.matrixWorld);const Ot=j.distanceTo(St),Ut=at.projectionMatrix.elements,Ct=Rt.projectionMatrix.elements,Yt=Ut[14]/(Ut[10]-1),P=Ut[14]/(Ut[10]+1),Tt=(Ut[9]+1)/Ut[5],yt=(Ut[9]-1)/Ut[5],_t=(Ut[8]-1)/Ut[0],dt=(Ct[8]+1)/Ct[0],Mt=Yt*_t,bt=Yt*dt,zt=Ot/(-_t+dt),le=zt*-_t;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(le),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ut[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ce=Yt+zt,N=P+zt,b=Mt-le,et=bt+(Ot-le),ft=Tt*P/N*ce,Et=yt*P/N*ce;$.projectionMatrix.makePerspective(b,et,ft,Et,ce,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ht($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let at=$.near,Rt=$.far;M.texture!==null&&(M.depthNear>0&&(at=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),W.near=C.near=D.near=at,W.far=C.far=D.far=Rt,(st!==W.near||mt!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),st=W.near,mt=W.far),W.layers.mask=$.layers.mask|6,D.layers.mask=W.layers.mask&3,C.layers.mask=W.layers.mask&5;const Ot=$.parent,Ut=W.cameras;Ht(W,Ot);for(let Ct=0;Ct<Ut.length;Ct++)Ht(Ut[Ct],Ot);Ut.length===2?At(W,D,C):W.projectionMatrix.copy(D.projectionMatrix),oe($,W,Ot)};function oe($,at,Rt){Rt===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Pp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function($){p=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function($){return x[$]};let ge=null;function I($,at){if(_=at.getViewerPose(m||h),E=at,_!==null){const Rt=_.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Ot=!1;Rt.length!==W.cameras.length&&(W.cameras.length=0,Ot=!0);for(let P=0;P<Rt.length;P++){const Tt=Rt[P];let yt=null;if(S!==null)yt=S.getViewport(Tt);else{const dt=g.getViewSubImage(y,Tt);yt=dt.viewport,P===0&&(e.setRenderTargetTextures(w,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(w))}let _t=B[P];_t===void 0&&(_t=new ui,_t.layers.enable(P),_t.viewport=new Ye,B[P]=_t),_t.matrix.fromArray(Tt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Tt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(yt.x,yt.y,yt.width,yt.height),P===0&&(W.matrix.copy(_t.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ot===!0&&W.cameras.push(_t)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const P=g.getDepthInformation(Rt[0]);P&&P.isValid&&P.texture&&M.init(P,l.renderState)}if(Ut&&Ut.includes("camera-access")&&R){e.state.unbindTexture(),g=r.getBinding();for(let P=0;P<Rt.length;P++){const Tt=Rt[P].camera;if(Tt){let yt=x[Tt];yt||(yt=new Wy,x[Tt]=yt);const _t=g.getCameraImage(Tt);yt.sourceTexture=_t}}}}for(let Rt=0;Rt<H.length;Rt++){const Ot=F[Rt],Ut=H[Rt];Ot!==null&&Ut!==void 0&&Ut.update(Ot,at,m||h)}ge&&ge($,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),E=null}const ht=new rx;ht.setAnimationLoop(I),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}}const Fr=new Ji,BC=new nn;function FC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Xy(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,z,U,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,w)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,z,U):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Qn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Qn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const z=e.get(x),U=z.envMap,w=z.envMapRotation;U&&(M.envMap.value=U,Fr.copy(w),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),M.envMapRotation.value.setFromMatrix4(BC.makeRotationFromEuler(Fr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,z,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*z,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,z){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const z=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function HC(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,U){const w=U.program;r.uniformBlockBinding(z,w)}function m(z,U){let w=l[z.id];w===void 0&&(E(z),w=_(z),l[z.id]=w,z.addEventListener("dispose",M));const H=U.program;r.updateUBOMapping(z,H);const F=e.render.frame;c[z.id]!==F&&(y(z),c[z.id]=F)}function _(z){const U=g();z.__bindingPointIndex=U;const w=o.createBuffer(),H=z.__size,F=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,w),w}function g(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const U=l[z.id],w=z.uniforms,H=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,O=w.length;F<O;F++){const G=Array.isArray(w[F])?w[F]:[w[F]];for(let D=0,C=G.length;D<C;D++){const B=G[D];if(S(B,F,D,H)===!0){const W=B.__offset,st=Array.isArray(B.value)?B.value:[B.value];let mt=0;for(let ot=0;ot<st.length;ot++){const k=st[ot],it=R(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,W+mt,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,mt),mt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(z,U,w,H){const F=z.value,O=U+"_"+w;if(H[O]===void 0)return typeof F=="number"||typeof F=="boolean"?H[O]=F:H[O]=F.clone(),!0;{const G=H[O];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return H[O]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function E(z){const U=z.uniforms;let w=0;const H=16;for(let O=0,G=U.length;O<G;O++){const D=Array.isArray(U[O])?U[O]:[U[O]];for(let C=0,B=D.length;C<B;C++){const W=D[C],st=Array.isArray(W.value)?W.value:[W.value];for(let mt=0,ot=st.length;mt<ot;mt++){const k=st[mt],it=R(k),j=w%H,St=j%it.boundary,At=j+St;w+=St,At!==0&&H-At<it.storage&&(w+=H-At),W.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=it.storage}}}const F=w%H;return F>0&&(w+=H-F),z.__size=w,z.__cache={},this}function R(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),U}function M(z){const U=z.target;U.removeEventListener("dispose",M);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:p,update:m,dispose:x}}class GC{constructor(e={}){const{canvas:i=GE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,x=null;const z=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=jn;let F=0,O=0,G=null,D=-1,C=null;const B=new Ye,W=new Ye;let st=null;const mt=new he(0);let ot=0,k=i.width,it=i.height,j=1,St=null,At=null;const Ht=new Ye(0,0,k,it),oe=new Ye(0,0,k,it);let ge=!1;const I=new Qp;let ht=!1,$=!1;const at=new nn,Rt=new Y,Ot=new Ye,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Yt(){return G===null?j:1}let P=r;function Tt(A,Q){return i.getContext(A,Q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gp}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),P===null){const Q="webgl2";if(P=Tt(Q,A),P===null)throw Tt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let yt,_t,dt,Mt,bt,zt,le,ce,N,b,et,ft,Et,pt,Zt,Pt,Qt,ee,Dt,Gt,ue,ne,Vt,me;function X(){yt=new QA(P),yt.init(),ne=new LC(P,yt),_t=new kA(P,yt,e,ne),dt=new NC(P,yt),_t.reversedDepthBuffer&&y&&dt.buffers.depth.setReversed(!0),Mt=new tR(P),bt=new vC,zt=new UC(P,yt,dt,bt,_t,ne,Mt),le=new YA(w),ce=new jA(w),N=new s1(P),Vt=new VA(P,N),b=new JA(P,N,Mt,Vt),et=new nR(P,b,N,Mt),Dt=new eR(P,_t,zt),Pt=new qA(bt),ft=new _C(w,le,ce,yt,_t,Vt,Pt),Et=new FC(w,bt),pt=new xC,Zt=new AC(yt),ee=new GA(w,le,ce,dt,et,S,p),Qt=new wC(w,et,_t),me=new HC(P,Mt,_t,dt),Gt=new XA(P,yt,Mt),ue=new $A(P,yt,Mt),Mt.programs=ft.programs,w.capabilities=_t,w.extensions=yt,w.properties=bt,w.renderLists=pt,w.shadowMap=Qt,w.state=dt,w.info=Mt}X();const Lt=new IC(w,P);this.xr=Lt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(k,it,!1))},this.getSize=function(A){return A.set(k,it)},this.setSize=function(A,Q,lt=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,it=Q,i.width=Math.floor(A*j),i.height=Math.floor(Q*j),lt===!0&&(i.style.width=A+"px",i.style.height=Q+"px"),this.setViewport(0,0,A,Q)},this.getDrawingBufferSize=function(A){return A.set(k*j,it*j).floor()},this.setDrawingBufferSize=function(A,Q,lt){k=A,it=Q,j=lt,i.width=Math.floor(A*lt),i.height=Math.floor(Q*lt),this.setViewport(0,0,A,Q)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Ht)},this.setViewport=function(A,Q,lt,ut){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,Q,lt,ut),dt.viewport(B.copy(Ht).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,Q,lt,ut){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,Q,lt,ut),dt.scissor(W.copy(oe).multiplyScalar(j).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){dt.setScissorTest(ge=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){At=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(A=!0,Q=!0,lt=!0){let ut=0;if(A){let J=!1;if(G!==null){const Nt=G.texture.format;J=Nt===Wp||Nt===Yp||Nt===qp}if(J){const Nt=G.texture.type,Xt=Nt===Qi||Nt===Yr||Nt===gl||Nt===_l||Nt===Xp||Nt===kp,Wt=ee.getClearColor(),It=ee.getClearAlpha(),Jt=Wt.r,se=Wt.g,ae=Wt.b;Xt?(E[0]=Jt,E[1]=se,E[2]=ae,E[3]=It,P.clearBufferuiv(P.COLOR,0,E)):(R[0]=Jt,R[1]=se,R[2]=ae,R[3]=It,P.clearBufferiv(P.COLOR,0,R))}else ut|=P.COLOR_BUFFER_BIT}Q&&(ut|=P.DEPTH_BUFFER_BIT),lt&&(ut|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),ee.dispose(),pt.dispose(),Zt.dispose(),bt.dispose(),le.dispose(),ce.dispose(),et.dispose(),Vt.dispose(),me.dispose(),ft.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",pn),Lt.removeEventListener("sessionend",Nn),ea.stop()};function Bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Mt.autoReset,Q=Qt.enabled,lt=Qt.autoUpdate,ut=Qt.needsUpdate,J=Qt.type;X(),Mt.autoReset=A,Qt.enabled=Q,Qt.autoUpdate=lt,Qt.needsUpdate=ut,Qt.type=J}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const Q=A.target;Q.removeEventListener("dispose",xt),te(Q)}function te(A){pe(A),bt.remove(A)}function pe(A){const Q=bt.get(A).programs;Q!==void 0&&(Q.forEach(function(lt){ft.releaseProgram(lt)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,Q,lt,ut,J,Nt){Q===null&&(Q=Ut);const Xt=J.isMesh&&J.matrixWorld.determinant()<0,Wt=Dl(A,Q,lt,ut,J);dt.setMaterial(ut,Xt);let It=lt.index,Jt=1;if(ut.wireframe===!0){if(It=b.getWireframeAttribute(lt),It===void 0)return;Jt=2}const se=lt.drawRange,ae=lt.attributes.position;let Ee=se.start*Jt,Be=(se.start+se.count)*Jt;Nt!==null&&(Ee=Math.max(Ee,Nt.start*Jt),Be=Math.min(Be,(Nt.start+Nt.count)*Jt)),It!==null?(Ee=Math.max(Ee,0),Be=Math.min(Be,It.count)):ae!=null&&(Ee=Math.max(Ee,0),Be=Math.min(Be,ae.count));const Qe=Be-Ee;if(Qe<0||Qe===1/0)return;Vt.setup(J,ut,Wt,lt,It);let Pe,Ne=Gt;if(It!==null&&(Pe=N.get(It),Ne=ue,Ne.setIndex(Pe)),J.isMesh)ut.wireframe===!0?(dt.setLineWidth(ut.wireframeLinewidth*Yt()),Ne.setMode(P.LINES)):Ne.setMode(P.TRIANGLES);else if(J.isLine){let re=ut.linewidth;re===void 0&&(re=1),dt.setLineWidth(re*Yt()),J.isLineSegments?Ne.setMode(P.LINES):J.isLineLoop?Ne.setMode(P.LINE_LOOP):Ne.setMode(P.LINE_STRIP)}else J.isPoints?Ne.setMode(P.POINTS):J.isSprite&&Ne.setMode(P.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)xl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ne.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const re=J._multiDrawStarts,ze=J._multiDrawCounts,Se=J._multiDrawCount,mn=It?N.get(It).bytesPerElement:1,Jn=bt.get(ut).currentProgram.getUniforms();for(let Ue=0;Ue<Se;Ue++)Jn.setValue(P,"_gl_DrawID",Ue),Ne.render(re[Ue]/mn,ze[Ue])}else if(J.isInstancedMesh)Ne.renderInstances(Ee,Qe,J.count);else if(lt.isInstancedBufferGeometry){const re=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,ze=Math.min(lt.instanceCount,re);Ne.renderInstances(Ee,Qe,ze)}else Ne.render(Ee,Qe)};function Xe(A,Q,lt){A.transparent===!0&&A.side===Di&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,ci(A,Q,lt),A.side=lr,A.needsUpdate=!0,ci(A,Q,lt),A.side=Di):ci(A,Q,lt)}this.compile=function(A,Q,lt=null){lt===null&&(lt=A),x=Zt.get(lt),x.init(Q),U.push(x),lt.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),A!==lt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ut=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Nt=J.material;if(Nt)if(Array.isArray(Nt))for(let Xt=0;Xt<Nt.length;Xt++){const Wt=Nt[Xt];Xe(Wt,lt,J),ut.add(Wt)}else Xe(Nt,lt,J),ut.add(Nt)}),x=U.pop(),ut},this.compileAsync=function(A,Q,lt=null){const ut=this.compile(A,Q,lt);return new Promise(J=>{function Nt(){if(ut.forEach(function(Xt){bt.get(Xt).currentProgram.isReady()&&ut.delete(Xt)}),ut.size===0){J(A);return}setTimeout(Nt,10)}yt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Re=null;function $e(A){Re&&Re(A)}function pn(){ea.stop()}function Nn(){ea.start()}const ea=new rx;ea.setAnimationLoop($e),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(A){Re=A,Lt.setAnimationLoop(A),A===null?ea.stop():ea.start()},Lt.addEventListener("sessionstart",pn),Lt.addEventListener("sessionend",Nn),this.render=function(A,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Q),Q=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Q,G),x=Zt.get(A,U.length),x.init(Q),U.push(x),at.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),I.setFromProjectionMatrix(at,Ki,Q.reversedDepth),$=this.localClippingEnabled,ht=Pt.init(this.clippingPlanes,$),M=pt.get(A,z.length),M.init(),z.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){const Nt=w.xr.getDepthSensingMesh();Nt!==null&&po(Nt,Q,-1/0,w.sortObjects)}po(A,Q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(St,At),Ct=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Ct&&ee.addToRenderList(M,A),this.info.render.frame++,ht===!0&&Pt.beginShadows();const lt=x.state.shadowsArray;Qt.render(lt,A,Q),ht===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,J=M.transmissive;if(x.setupLights(),Q.isArrayCamera){const Nt=Q.cameras;if(J.length>0)for(let Xt=0,Wt=Nt.length;Xt<Wt;Xt++){const It=Nt[Xt];cr(ut,J,A,It)}Ct&&ee.render(A);for(let Xt=0,Wt=Nt.length;Xt<Wt;Xt++){const It=Nt[Xt];wl(M,A,It,It.viewport)}}else J.length>0&&cr(ut,J,A,Q),Ct&&ee.render(A),wl(M,A,Q);G!==null&&O===0&&(zt.updateMultisampleRenderTarget(G),zt.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(w,A,Q),Vt.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(x=U[U.length-1],ht===!0&&Pt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function po(A,Q,lt,ut){if(A.visible===!1)return;if(A.layers.test(Q.layers)){if(A.isGroup)lt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Q);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||I.intersectsSprite(A)){ut&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);const Xt=et.update(A),Wt=A.material;Wt.visible&&M.push(A,Xt,Wt,lt,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||I.intersectsObject(A))){const Xt=et.update(A),Wt=A.material;if(ut&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Ot.copy(Xt.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(Wt)){const It=Xt.groups;for(let Jt=0,se=It.length;Jt<se;Jt++){const ae=It[Jt],Ee=Wt[ae.materialIndex];Ee&&Ee.visible&&M.push(A,Xt,Ee,lt,Ot.z,ae)}}else Wt.visible&&M.push(A,Xt,Wt,lt,Ot.z,null)}}const Nt=A.children;for(let Xt=0,Wt=Nt.length;Xt<Wt;Xt++)po(Nt[Xt],Q,lt,ut)}function wl(A,Q,lt,ut){const J=A.opaque,Nt=A.transmissive,Xt=A.transparent;x.setupLightsView(lt),ht===!0&&Pt.setGlobalState(w.clippingPlanes,lt),ut&&dt.viewport(B.copy(ut)),J.length>0&&na(J,Q,lt),Nt.length>0&&na(Nt,Q,lt),Xt.length>0&&na(Xt,Q,lt),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function cr(A,Q,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ut.id]===void 0&&(x.state.transmissionRenderTarget[ut.id]=new Wr(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Tl:Qi,minFilter:qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Nt=x.state.transmissionRenderTarget[ut.id],Xt=ut.viewport||B;Nt.setSize(Xt.z*w.transmissionResolutionScale,Xt.w*w.transmissionResolutionScale);const Wt=w.getRenderTarget(),It=w.getActiveCubeFace(),Jt=w.getActiveMipmapLevel();w.setRenderTarget(Nt),w.getClearColor(mt),ot=w.getClearAlpha(),ot<1&&w.setClearColor(16777215,.5),w.clear(),Ct&&ee.render(lt);const se=w.toneMapping;w.toneMapping=or;const ae=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),x.setupLightsView(ut),ht===!0&&Pt.setGlobalState(w.clippingPlanes,ut),na(A,lt,ut),zt.updateMultisampleRenderTarget(Nt),zt.updateRenderTargetMipmap(Nt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Be=0,Qe=Q.length;Be<Qe;Be++){const Pe=Q[Be],Ne=Pe.object,re=Pe.geometry,ze=Pe.material,Se=Pe.group;if(ze.side===Di&&Ne.layers.test(ut.layers)){const mn=ze.side;ze.side=Qn,ze.needsUpdate=!0,fr(Ne,lt,ut,re,ze,Se),ze.side=mn,ze.needsUpdate=!0,Ee=!0}}Ee===!0&&(zt.updateMultisampleRenderTarget(Nt),zt.updateRenderTargetMipmap(Nt))}w.setRenderTarget(Wt,It,Jt),w.setClearColor(mt,ot),ae!==void 0&&(ut.viewport=ae),w.toneMapping=se}function na(A,Q,lt){const ut=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Nt=A.length;J<Nt;J++){const Xt=A[J],Wt=Xt.object,It=Xt.geometry,Jt=Xt.group;let se=Xt.material;se.allowOverride===!0&&ut!==null&&(se=ut),Wt.layers.test(lt.layers)&&fr(Wt,Q,lt,It,se,Jt)}}function fr(A,Q,lt,ut,J,Nt){A.onBeforeRender(w,Q,lt,ut,J,Nt),A.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(w,Q,lt,ut,A,Nt),J.transparent===!0&&J.side===Di&&J.forceSinglePass===!1?(J.side=Qn,J.needsUpdate=!0,w.renderBufferDirect(lt,Q,ut,J,A,Nt),J.side=lr,J.needsUpdate=!0,w.renderBufferDirect(lt,Q,ut,J,A,Nt),J.side=Di):w.renderBufferDirect(lt,Q,ut,J,A,Nt),A.onAfterRender(w,Q,lt,ut,J,Nt)}function ci(A,Q,lt){Q.isScene!==!0&&(Q=Ut);const ut=bt.get(A),J=x.state.lights,Nt=x.state.shadowsArray,Xt=J.state.version,Wt=ft.getParameters(A,J.state,Nt,Q,lt),It=ft.getProgramCacheKey(Wt);let Jt=ut.programs;ut.environment=A.isMeshStandardMaterial?Q.environment:null,ut.fog=Q.fog,ut.envMap=(A.isMeshStandardMaterial?ce:le).get(A.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&A.envMap===null?Q.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",xt),Jt=new Map,ut.programs=Jt);let se=Jt.get(It);if(se!==void 0){if(ut.currentProgram===se&&ut.lightsStateVersion===Xt)return ba(A,Wt),se}else Wt.uniforms=ft.getUniforms(A),A.onBeforeCompile(Wt,w),se=ft.acquireProgram(Wt,It),Jt.set(It,se),ut.uniforms=Wt.uniforms;const ae=ut.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ae.clippingPlanes=Pt.uniform),ba(A,Wt),ut.needsLights=Nl(A),ut.lightsStateVersion=Xt,ut.needsLights&&(ae.ambientLightColor.value=J.state.ambient,ae.lightProbe.value=J.state.probe,ae.directionalLights.value=J.state.directional,ae.directionalLightShadows.value=J.state.directionalShadow,ae.spotLights.value=J.state.spot,ae.spotLightShadows.value=J.state.spotShadow,ae.rectAreaLights.value=J.state.rectArea,ae.ltc_1.value=J.state.rectAreaLTC1,ae.ltc_2.value=J.state.rectAreaLTC2,ae.pointLights.value=J.state.point,ae.pointLightShadows.value=J.state.pointShadow,ae.hemisphereLights.value=J.state.hemi,ae.directionalShadowMap.value=J.state.directionalShadowMap,ae.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ae.spotShadowMap.value=J.state.spotShadowMap,ae.spotLightMatrix.value=J.state.spotLightMatrix,ae.spotLightMap.value=J.state.spotLightMap,ae.pointShadowMap.value=J.state.pointShadowMap,ae.pointShadowMatrix.value=J.state.pointShadowMatrix),ut.currentProgram=se,ut.uniformsList=null,se}function hr(A){if(A.uniformsList===null){const Q=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(Q.seq,A.uniforms)}return A.uniformsList}function ba(A,Q){const lt=bt.get(A);lt.outputColorSpace=Q.outputColorSpace,lt.batching=Q.batching,lt.batchingColor=Q.batchingColor,lt.instancing=Q.instancing,lt.instancingColor=Q.instancingColor,lt.instancingMorph=Q.instancingMorph,lt.skinning=Q.skinning,lt.morphTargets=Q.morphTargets,lt.morphNormals=Q.morphNormals,lt.morphColors=Q.morphColors,lt.morphTargetsCount=Q.morphTargetsCount,lt.numClippingPlanes=Q.numClippingPlanes,lt.numIntersection=Q.numClipIntersection,lt.vertexAlphas=Q.vertexAlphas,lt.vertexTangents=Q.vertexTangents,lt.toneMapping=Q.toneMapping}function Dl(A,Q,lt,ut,J){Q.isScene!==!0&&(Q=Ut),zt.resetTextureUnits();const Nt=Q.fog,Xt=ut.isMeshStandardMaterial?Q.environment:null,Wt=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:so,It=(ut.isMeshStandardMaterial?ce:le).get(ut.envMap||Xt),Jt=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,se=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ae=!!lt.morphAttributes.position,Ee=!!lt.morphAttributes.normal,Be=!!lt.morphAttributes.color;let Qe=or;ut.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Pe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ne=Pe!==void 0?Pe.length:0,re=bt.get(ut),ze=x.state.lights;if(ht===!0&&($===!0||A!==C)){const an=A===C&&ut.id===D;Pt.setState(ut,A,an)}let Se=!1;ut.version===re.__version?(re.needsLights&&re.lightsStateVersion!==ze.state.version||re.outputColorSpace!==Wt||J.isBatchedMesh&&re.batching===!1||!J.isBatchedMesh&&re.batching===!0||J.isBatchedMesh&&re.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&re.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&re.instancing===!1||!J.isInstancedMesh&&re.instancing===!0||J.isSkinnedMesh&&re.skinning===!1||!J.isSkinnedMesh&&re.skinning===!0||J.isInstancedMesh&&re.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&re.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&re.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&re.instancingMorph===!1&&J.morphTexture!==null||re.envMap!==It||ut.fog===!0&&re.fog!==Nt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Pt.numPlanes||re.numIntersection!==Pt.numIntersection)||re.vertexAlphas!==Jt||re.vertexTangents!==se||re.morphTargets!==ae||re.morphNormals!==Ee||re.morphColors!==Be||re.toneMapping!==Qe||re.morphTargetsCount!==Ne)&&(Se=!0):(Se=!0,re.__version=ut.version);let mn=re.currentProgram;Se===!0&&(mn=ci(ut,Q,J));let Jn=!1,Ue=!1,Aa=!1;const Ze=mn.getUniforms(),zn=re.uniforms;if(dt.useProgram(mn.program)&&(Jn=!0,Ue=!0,Aa=!0),ut.id!==D&&(D=ut.id,Ue=!0),Jn||C!==A){dt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ze.setValue(P,"projectionMatrix",A.projectionMatrix),Ze.setValue(P,"viewMatrix",A.matrixWorldInverse);const Un=Ze.map.cameraPosition;Un!==void 0&&Un.setValue(P,Rt.setFromMatrixPosition(A.matrixWorld)),_t.logarithmicDepthBuffer&&Ze.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ze.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ue=!0,Aa=!0)}if(J.isSkinnedMesh){Ze.setOptional(P,J,"bindMatrix"),Ze.setOptional(P,J,"bindMatrixInverse");const an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ze.setValue(P,"boneTexture",an.boneTexture,zt))}J.isBatchedMesh&&(Ze.setOptional(P,J,"batchingTexture"),Ze.setValue(P,"batchingTexture",J._matricesTexture,zt),Ze.setOptional(P,J,"batchingIdTexture"),Ze.setValue(P,"batchingIdTexture",J._indirectTexture,zt),Ze.setOptional(P,J,"batchingColorTexture"),J._colorsTexture!==null&&Ze.setValue(P,"batchingColorTexture",J._colorsTexture,zt));const ln=lt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Dt.update(J,lt,mn),(Ue||re.receiveShadow!==J.receiveShadow)&&(re.receiveShadow=J.receiveShadow,Ze.setValue(P,"receiveShadow",J.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(zn.envMap.value=It,zn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Q.environment!==null&&(zn.envMapIntensity.value=Q.environmentIntensity),Ue&&(Ze.setValue(P,"toneMappingExposure",w.toneMappingExposure),re.needsLights&&Lc(zn,Aa),Nt&&ut.fog===!0&&Et.refreshFogUniforms(zn,Nt),Et.refreshMaterialUniforms(zn,ut,j,it,x.state.transmissionRenderTarget[A.id]),Ac.upload(P,hr(re),zn,zt)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Ac.upload(P,hr(re),zn,zt),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ze.setValue(P,"center",J.center),Ze.setValue(P,"modelViewMatrix",J.modelViewMatrix),Ze.setValue(P,"normalMatrix",J.normalMatrix),Ze.setValue(P,"modelMatrix",J.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const an=ut.uniformsGroups;for(let Un=0,Kr=an.length;Un<Kr;Un++){const Oi=an[Un];me.update(Oi,mn),me.bind(Oi,mn)}}return mn}function Lc(A,Q){A.ambientLightColor.needsUpdate=Q,A.lightProbe.needsUpdate=Q,A.directionalLights.needsUpdate=Q,A.directionalLightShadows.needsUpdate=Q,A.pointLights.needsUpdate=Q,A.pointLightShadows.needsUpdate=Q,A.spotLights.needsUpdate=Q,A.spotLightShadows.needsUpdate=Q,A.rectAreaLights.needsUpdate=Q,A.hemisphereLights.needsUpdate=Q}function Nl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,Q,lt){const ut=bt.get(A);ut.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),bt.get(A.texture).__webglTexture=Q,bt.get(A.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Q){const lt=bt.get(A);lt.__webglFramebuffer=Q,lt.__useDefaultFramebuffer=Q===void 0};const mo=P.createFramebuffer();this.setRenderTarget=function(A,Q=0,lt=0){G=A,F=Q,O=lt;let ut=!0,J=null,Nt=!1,Xt=!1;if(A){const It=bt.get(A);if(It.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(P.FRAMEBUFFER,null),ut=!1;else if(It.__webglFramebuffer===void 0)zt.setupRenderTarget(A);else if(It.__hasExternalTextures)zt.rebindTextures(A,bt.get(A.texture).__webglTexture,bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ae=A.depthTexture;if(It.__boundDepthTexture!==ae){if(ae!==null&&bt.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Xt=!0);const se=bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[Q])?J=se[Q][lt]:J=se[Q],Nt=!0):A.samples>0&&zt.useMultisampledRTT(A)===!1?J=bt.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?J=se[lt]:J=se,B.copy(A.viewport),W.copy(A.scissor),st=A.scissorTest}else B.copy(Ht).multiplyScalar(j).floor(),W.copy(oe).multiplyScalar(j).floor(),st=ge;if(lt!==0&&(J=mo),dt.bindFramebuffer(P.FRAMEBUFFER,J)&&ut&&dt.drawBuffers(A,J),dt.viewport(B),dt.scissor(W),dt.setScissorTest(st),Nt){const It=bt.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Q,It.__webglTexture,lt)}else if(Xt){const It=Q;for(let Jt=0;Jt<A.textures.length;Jt++){const se=bt.get(A.textures[Jt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Jt,se.__webglTexture,lt,It)}}else if(A!==null&&lt!==0){const It=bt.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,It.__webglTexture,lt)}D=-1},this.readRenderTargetPixels=function(A,Q,lt,ut,J,Nt,Xt,Wt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(It=It[Xt]),It){dt.bindFramebuffer(P.FRAMEBUFFER,It);try{const Jt=A.textures[Wt],se=Jt.format,ae=Jt.type;if(!_t.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=A.width-ut&&lt>=0&&lt<=A.height-J&&(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Wt),P.readPixels(Q,lt,ut,J,ne.convert(se),ne.convert(ae),Nt))}finally{const Jt=G!==null?bt.get(G).__webglFramebuffer:null;dt.bindFramebuffer(P.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,Q,lt,ut,J,Nt,Xt,Wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(It=It[Xt]),It)if(Q>=0&&Q<=A.width-ut&&lt>=0&&lt<=A.height-J){dt.bindFramebuffer(P.FRAMEBUFFER,It);const Jt=A.textures[Wt],se=Jt.format,ae=Jt.type;if(!_t.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.bufferData(P.PIXEL_PACK_BUFFER,Nt.byteLength,P.STREAM_READ),A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Wt),P.readPixels(Q,lt,ut,J,ne.convert(se),ne.convert(ae),0);const Be=G!==null?bt.get(G).__webglFramebuffer:null;dt.bindFramebuffer(P.FRAMEBUFFER,Be);const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await VE(P,Qe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Nt),P.deleteBuffer(Ee),P.deleteSync(Qe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Q=null,lt=0){const ut=Math.pow(2,-lt),J=Math.floor(A.image.width*ut),Nt=Math.floor(A.image.height*ut),Xt=Q!==null?Q.x:0,Wt=Q!==null?Q.y:0;zt.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,lt,0,0,Xt,Wt,J,Nt),dt.unbindTexture()};const dr=P.createFramebuffer(),Oc=P.createFramebuffer();this.copyTextureToTexture=function(A,Q,lt=null,ut=null,J=0,Nt=null){Nt===null&&(J!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=J,J=0):Nt=0);let Xt,Wt,It,Jt,se,ae,Ee,Be,Qe;const Pe=A.isCompressedTexture?A.mipmaps[Nt]:A.image;if(lt!==null)Xt=lt.max.x-lt.min.x,Wt=lt.max.y-lt.min.y,It=lt.isBox3?lt.max.z-lt.min.z:1,Jt=lt.min.x,se=lt.min.y,ae=lt.isBox3?lt.min.z:0;else{const ln=Math.pow(2,-J);Xt=Math.floor(Pe.width*ln),Wt=Math.floor(Pe.height*ln),A.isDataArrayTexture?It=Pe.depth:A.isData3DTexture?It=Math.floor(Pe.depth*ln):It=1,Jt=0,se=0,ae=0}ut!==null?(Ee=ut.x,Be=ut.y,Qe=ut.z):(Ee=0,Be=0,Qe=0);const Ne=ne.convert(Q.format),re=ne.convert(Q.type);let ze;Q.isData3DTexture?(zt.setTexture3D(Q,0),ze=P.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(zt.setTexture2DArray(Q,0),ze=P.TEXTURE_2D_ARRAY):(zt.setTexture2D(Q,0),ze=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Q.unpackAlignment);const Se=P.getParameter(P.UNPACK_ROW_LENGTH),mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Jn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ue=P.getParameter(P.UNPACK_SKIP_ROWS),Aa=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jt),P.pixelStorei(P.UNPACK_SKIP_ROWS,se),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ae);const Ze=A.isDataArrayTexture||A.isData3DTexture,zn=Q.isDataArrayTexture||Q.isData3DTexture;if(A.isDepthTexture){const ln=bt.get(A),an=bt.get(Q),Un=bt.get(ln.__renderTarget),Kr=bt.get(an.__renderTarget);dt.bindFramebuffer(P.READ_FRAMEBUFFER,Un.__webglFramebuffer),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Oi=0;Oi<It;Oi++)Ze&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.get(A).__webglTexture,J,ae+Oi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.get(Q).__webglTexture,Nt,Qe+Oi)),P.blitFramebuffer(Jt,se,Xt,Wt,Ee,Be,Xt,Wt,P.DEPTH_BUFFER_BIT,P.NEAREST);dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||bt.has(A)){const ln=bt.get(A),an=bt.get(Q);dt.bindFramebuffer(P.READ_FRAMEBUFFER,dr),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Oc);for(let Un=0;Un<It;Un++)Ze?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ln.__webglTexture,J,ae+Un):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ln.__webglTexture,J),zn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,an.__webglTexture,Nt,Qe+Un):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,an.__webglTexture,Nt),J!==0?P.blitFramebuffer(Jt,se,Xt,Wt,Ee,Be,Xt,Wt,P.COLOR_BUFFER_BIT,P.NEAREST):zn?P.copyTexSubImage3D(ze,Nt,Ee,Be,Qe+Un,Jt,se,Xt,Wt):P.copyTexSubImage2D(ze,Nt,Ee,Be,Jt,se,Xt,Wt);dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else zn?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(ze,Nt,Ee,Be,Qe,Xt,Wt,It,Ne,re,Pe.data):Q.isCompressedArrayTexture?P.compressedTexSubImage3D(ze,Nt,Ee,Be,Qe,Xt,Wt,It,Ne,Pe.data):P.texSubImage3D(ze,Nt,Ee,Be,Qe,Xt,Wt,It,Ne,re,Pe):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Nt,Ee,Be,Xt,Wt,Ne,re,Pe.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Nt,Ee,Be,Pe.width,Pe.height,Ne,Pe.data):P.texSubImage2D(P.TEXTURE_2D,Nt,Ee,Be,Xt,Wt,Ne,re,Pe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Aa),Nt===0&&Q.generateMipmaps&&P.generateMipmap(ze),dt.unbindTexture()},this.initRenderTarget=function(A){bt.get(A).__webglFramebuffer===void 0&&zt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?zt.setTextureCube(A,0):A.isData3DTexture?zt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?zt.setTexture2DArray(A,0):zt.setTexture2D(A,0),dt.unbindTexture()},this.resetState=function(){F=0,O=0,G=null,dt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Oe._getUnpackColorSpace()}}function xy(o,e,i){const r=new Jy,l=-o/2,c=o/2,h=-e/2,d=e/2;return r.moveTo(l+i,h),r.lineTo(c-i,h),r.quadraticCurveTo(c,h,c,h+i),r.lineTo(c,d-i),r.quadraticCurveTo(c,d,c-i,d),r.lineTo(l+i,d),r.quadraticCurveTo(l,d,l,d-i),r.lineTo(l,h+i),r.quadraticCurveTo(l,h,l+i,h),r}function fl(o){const e=document.createElement("canvas");e.width=1,e.height=1;const i=e.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("Unable to resolve theme colors for the 3D scene.");i.fillStyle=o,i.fillRect(0,0,1,1);const[r,l,c]=i.getImageData(0,0,1,1).data;return`rgb(${r}, ${l}, ${c})`}function VC(o,e,i){const r=document.createElement("canvas");r.width=512,r.height=320;const l=r.getContext("2d");if(!l)return null;l.fillStyle=o,l.fillRect(0,0,r.width,r.height),l.strokeStyle=e,l.globalAlpha=.28,l.lineWidth=2,l.strokeRect(22,22,468,276),l.globalAlpha=1,l.fillStyle=e,l.textAlign="center",l.font=`700 66px "${i}"`,l.fillText("Abeer",256,150),l.font=`500 30px "${i}"`,l.fillText("Perfumes",256,206);const c=new vT(r);return c.colorSpace=jn,c.anisotropy=4,c}function XC(o,e,i,r,l,c){const h=new Ks,d=new Fd({color:new he(i),metalness:.08,roughness:.1,transparent:!0,opacity:.32,clearcoat:.85,clearcoatRoughness:.1,transmission:.28,thickness:.5,side:Di}),p=new Fd({color:new he(l),metalness:.18,roughness:.24,clearcoat:.8,transparent:!0,opacity:.76}),m=xy(1.74,2.45,.24),_=new Dc(m,{depth:.44,bevelEnabled:!0,bevelSegments:5,steps:1,bevelSize:.075,bevelThickness:.07});_.translate(0,0,-.22);const g=new En(_,d);h.add(g);const y=xy(1.48,1.7,.18),S=new Dc(y,{depth:.25,bevelEnabled:!0,bevelSegments:4,bevelSize:.035,bevelThickness:.04});S.translate(0,0,-.125);const E=new En(S,p);E.position.y=-.3,h.add(E);const R=new no({color:new he(e),metalness:.38,roughness:.28}),M=new En(new eo(.35,.39,.32,48),R);M.position.set(0,1.33,0),h.add(M);const x=new Fd({color:new he(r),metalness:.42,roughness:.22,clearcoat:.75}),z=new En(new eo(.37,.38,.5,48),x);z.position.set(0,1.73,0),h.add(z);const U=new En(new eo(.39,.39,.045,48),new no({color:new he(o),metalness:.52,roughness:.25}));U.position.set(0,1.52,0),h.add(U);const w=VC(o,r,c);if(w){const F=new En(new Cl(1.18,.74),new jp({map:w,side:Di}));F.position.set(0,.08,.31),h.add(F)}const H=new no({color:new he(o),metalness:.22,roughness:.24,transparent:!0,opacity:.58});for(const F of[-.69,.69]){const O=new En(new fo(.025,1.92,.024),H);O.position.set(F,-.04,.263),h.add(O)}return h.position.y=-.3,h}function kC(o,e,i){const r=new Ks,l=new En(new eo(1.12,1.2,.16,96),new no({color:new he(i),metalness:.26,roughness:.32}));l.position.y=-1.62,r.add(l);const c=new En(new tm(1.1,.014,6,96),new no({color:new he(o),metalness:.32,roughness:.3}));return c.rotation.x=Math.PI/2,c.position.y=-1.52,r.add(c),r}function qC(){const o=Js.useRef(null);return Js.useEffect(()=>{const e=o.current;if(!e)return;const i=getComputedStyle(document.documentElement),r=W=>i.getPropertyValue(W).trim(),l=fl(r("--color-paper")),c=fl(r("--color-paper-2")),h=fl(r("--color-paper-3")),d=fl(r("--color-ink")),p=fl(r("--color-accent")),m=r("--font-display").split(",")[0].replaceAll('"',"").trim(),_=new pT,g=new ui(33,1,.1,50);g.position.set(0,.1,8.6),g.lookAt(0,0,0);const y=new GC({alpha:!0,antialias:!0,powerPreference:"low-power"});e.dataset.ready="true",y.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),y.outputColorSpace=jn,y.toneMapping=by,y.toneMappingExposure=1.14,y.setClearColor(new he(l),0),y.domElement.setAttribute("aria-hidden","true"),e.appendChild(y.domElement);const S=new t1(new he(l),new he(d),2.2);_.add(S);const E=new Z0(new he(l),4.5);E.position.set(-4,5,6),_.add(E);const R=new Z0(new he(c),3.8);R.position.set(4,1.8,-3),_.add(R);const M=new n1(new he(p),2.4,10);M.position.set(3.2,-1.3,3),_.add(M);const x=XC(l,c,h,d,p,m);_.add(x),_.add(kC(l,h,p));const z=window.matchMedia("(prefers-reduced-motion: reduce)");let U=0,w=0,H=0;const F=()=>{const{width:W,height:st}=e.getBoundingClientRect();!W||!st||(g.aspect=W/st,g.position.z=W<520?9.2:8.6,g.updateProjectionMatrix(),y.setSize(W,st,!1),y.render(_,g))},O=W=>{const st=e.getBoundingClientRect();U=((W.clientX-st.left)/st.width-.5)*2,w=((W.clientY-st.top)/st.height-.5)*2},G=(W=0)=>{z.matches?x.rotation.set(0,0,0):(x.rotation.y=Math.sin(W*36e-5)*.1+U*.045,x.rotation.x=w*-.025),y.render(_,g),H=window.requestAnimationFrame(G)},D=()=>{if(window.cancelAnimationFrame(H),z.matches){x.rotation.set(0,0,0),y.render(_,g);return}H=window.requestAnimationFrame(G)},C=()=>D(),B=new ResizeObserver(F);return B.observe(e),e.addEventListener("pointermove",O),z.addEventListener("change",C),F(),D(),()=>{window.cancelAnimationFrame(H),B.disconnect(),e.removeEventListener("pointermove",O),z.removeEventListener("change",C),_.traverse(W=>{if(W.geometry&&W.geometry.dispose(),W.material){const st=Array.isArray(W.material)?W.material:[W.material];for(const mt of st)mt.map?.dispose(),mt.dispose()}}),y.dispose(),y.domElement.remove()}},[]),ct.createElement("div",{className:"perfume-scene",ref:o},ct.createElement("svg",{className:"perfume-scene__fallback",viewBox:"0 0 360 420","aria-hidden":"true"},ct.createElement("ellipse",{cx:"180",cy:"370",rx:"108",ry:"17"}),ct.createElement("rect",{x:"103",y:"125",width:"154",height:"218",rx:"25"}),ct.createElement("rect",{x:"137",y:"77",width:"86",height:"64",rx:"10"}),ct.createElement("rect",{x:"131",y:"59",width:"98",height:"23",rx:"7"}),ct.createElement("rect",{className:"perfume-scene__label",x:"125",y:"210",width:"110",height:"66"}),ct.createElement("text",{x:"180",y:"239"},"Abeer"),ct.createElement("text",{className:"perfume-scene__small",x:"180",y:"259"},"Perfumes")))}const Sy=[{name:"Oud & woods",descriptor:"A deeper, warmer direction.",index:"01"},{name:"Florals",descriptor:"Soft notes with a little lift.",index:"02"},{name:"Fresh",descriptor:"A clear, easygoing feel.",index:"03"}],YC=["Kunnamkulam","Thrissur","Kuttippuram"],WC="+919847953894",My="https://wa.me/919847953894",ZC="https://www.instagram.com/abeerperfumes_";function Yi(){return ct.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 20 20",fill:"none"},ct.createElement("path",{d:"M3.5 10h12m-5-5 5 5-5 5"}))}function KC(){const[o,e]=Js.useState(Sy[0]),[i,r]=Js.useState("Retail"),[l,c]=Js.useState(!1),h=i==="Wholesale"?"wholesale":"retail",d=`${My}?text=${encodeURIComponent("Hi Abeer Perfumes, I’m interested in creating a customized scent.")}`;return ct.createElement(ct.Fragment,null,ct.createElement("header",{className:"masthead"},ct.createElement("div",{className:"container masthead__inner"},ct.createElement("a",{className:"wordmark",href:"#home","aria-label":"Abeer Perfumes home"},ct.createElement("span",{className:"wordmark__name"},"Abeer"),ct.createElement("span",{className:"wordmark__sub"},"Perfumes")),ct.createElement("button",{className:"menu-toggle",type:"button","aria-expanded":l,"aria-controls":"primary-navigation",onClick:()=>c(p=>!p)},l?"Close":"Menu"),ct.createElement("nav",{className:`navigation${l?" navigation--open":""}`,id:"primary-navigation","aria-label":"Main navigation"},ct.createElement("a",{href:"#collection",onClick:()=>c(!1)},"The collection"),ct.createElement("a",{href:"#trade",onClick:()=>c(!1)},"For retailers"),ct.createElement("a",{className:"navigation__action",href:"#contact",onClick:()=>c(!1)},"Get in touch ",ct.createElement(Yi,null))))),ct.createElement("main",null,ct.createElement("section",{className:"hero",id:"home","aria-labelledby":"hero-title"},ct.createElement("div",{className:"container hero__inner"},ct.createElement("div",{className:"hero__copy"},ct.createElement("h1",{id:"hero-title"},"A scent that feels like yours."),ct.createElement("p",{className:"hero__lede"},"Discover your next fragrance, create a custom scent, or stock your shelves."),ct.createElement("div",{className:"hero__actions"},ct.createElement("a",{className:"button button--primary",href:"#collection"},"Explore the collection ",ct.createElement(Yi,null)),ct.createElement("a",{className:"text-link",href:"#contact"},"Retail and wholesale enquiries"))),ct.createElement("div",{className:"hero__stage",role:"img","aria-label":"Animated 3D perfume bottle"},ct.createElement("div",{className:"hero__stage-top"},ct.createElement("span",null,"01 / Abeer"),ct.createElement("span",null,"Fragrance, found your way")),ct.createElement(qC,null),ct.createElement("p",{className:"hero__stage-caption"},"A new point of view on fragrance."))),ct.createElement("div",{className:"hero__baseline","aria-hidden":"true"},ct.createElement("span",null,"Kerala"),ct.createElement("span",null,"Retail / wholesale"),ct.createElement("span",null,"Explore by character"))),ct.createElement("section",{className:"collection section-pad",id:"collection","aria-labelledby":"collection-title"},ct.createElement("div",{className:"container"},ct.createElement("div",{className:"section-heading collection__heading"},ct.createElement("div",null,ct.createElement("h2",{id:"collection-title"},"A world of notes.")),ct.createElement("p",{className:"section-heading__aside"},"Start with a fragrance family. We’ll help you find what fits.")),ct.createElement("div",{className:"family-grid",role:"group","aria-label":"Choose a fragrance family"},Sy.map(p=>ct.createElement("article",{className:"family-option",key:p.name,"data-selected":o.name===p.name},ct.createElement("span",{className:"family-option__index"},p.index),ct.createElement("span",{className:"family-option__name"},p.name),ct.createElement("span",{className:"family-option__descriptor"},p.descriptor),ct.createElement("button",{className:"family-option__select",type:"button","aria-pressed":o.name===p.name,onClick:()=>e(p)},o.name===p.name?"Selected":"Explore family",ct.createElement(Yi,null))))),ct.createElement("div",{className:"collection-note","aria-live":"polite"},ct.createElement("span",{className:"collection-note__rule"}),ct.createElement("p",null,ct.createElement("strong",null,o.name),": ",o.descriptor," Ask us about the current selection."),ct.createElement("a",{className:"text-link",href:"#contact"},"Ask about this family ",ct.createElement(Yi,null))))),ct.createElement("section",{className:"story","aria-labelledby":"story-title"},ct.createElement("div",{className:"container story__inner"},ct.createElement("figure",{className:"story__photo","data-slot":"perfume-photo","data-alt":"A real Abeer perfume bottle photographed in soft natural light"},ct.createElement("img",{src:"/abeerperfumes/images/fragrance-reference.jpg",width:"1920",height:"1440",alt:"An unbranded ribbed glass perfume bottle with a dark cap on a pale shelf",sizes:"(min-width: 60rem) 50vw, 100vw",loading:"lazy",onError:p=>{p.currentTarget.closest("[data-slot]")?.remove()}})),ct.createElement("p",{className:"story__caption"},"A reference image, not a product listing."),ct.createElement("div",{className:"story__copy"},ct.createElement("h2",{id:"story-title"},"The right scent is a feeling."),ct.createElement("p",{className:"story__body"},"Some days call for something light. Others linger a little longer. Begin with what draws you in, then explore from there."),ct.createElement("a",{className:"text-link",href:"#collection"},"Find your starting point ",ct.createElement(Yi,null))))),ct.createElement("section",{className:"trade section-pad",id:"trade","aria-labelledby":"trade-title"},ct.createElement("div",{className:"container trade__inner"},ct.createElement("div",{className:"trade__intro"},ct.createElement("h2",{id:"trade-title"},"For the everyday, and for the shop floor."),ct.createElement("p",null,"Looking for a personal fragrance or a range for your business? Tell us what you have in mind.")),ct.createElement("div",{className:"trade__panel"},ct.createElement("div",{className:"mode-switch",role:"group","aria-label":"Choose how you shop"},["Retail","Wholesale"].map(p=>ct.createElement("button",{className:i===p?"mode-switch__option is-active":"mode-switch__option",key:p,type:"button","aria-pressed":i===p,onClick:()=>r(p)},p))),ct.createElement("div",{className:"trade__answer","aria-live":"polite"},ct.createElement("span",{className:"trade__number"},i==="Retail"?"01":"02"),ct.createElement("h3",null,i==="Retail"?"A scent for you.":"A range for your business."),ct.createElement("p",null,i==="Retail"?"Tell us what you usually reach for, or start with a fragrance family.":"Let’s talk about the fragrances and quantities that suit your shelves.")),ct.createElement("a",{className:"button button--light",href:"#contact"},"Ask about ",h," ",ct.createElement(Yi,null))))),ct.createElement("section",{className:"custom-scent section-pad",id:"custom-scents","aria-labelledby":"custom-title"},ct.createElement("div",{className:"container custom-scent__inner"},ct.createElement("div",{className:"custom-scent__copy"},ct.createElement("h2",{id:"custom-title"},"A fragrance of your own."),ct.createElement("p",null,"A scent can feel like a memory, a mood, or simply you. Talk with us about creating a customized fragrance that feels personal."),ct.createElement("a",{className:"button button--primary",href:d,target:"_blank",rel:"noreferrer"},"Create a custom scent ",ct.createElement(Yi,null))),ct.createElement("div",{className:"custom-scent__note","aria-hidden":"true"},ct.createElement("span",{className:"custom-scent__note-index"},"AP / C"),ct.createElement("span",{className:"custom-scent__note-word"},"Yours,",ct.createElement("br",null),"by nature."),ct.createElement("span",{className:"custom-scent__note-rule"}),ct.createElement("span",{className:"custom-scent__note-caption"},"Abeer Perfumes · Kerala")))),ct.createElement("section",{className:"locations section-pad",id:"locations","aria-labelledby":"locations-title"},ct.createElement("div",{className:"container locations__inner"},ct.createElement("div",{className:"locations__intro"},ct.createElement("h2",{id:"locations-title"},"Meet us in Kerala."),ct.createElement("p",null,"Visit Abeer Perfumes in one of our shop locations.")),ct.createElement("ul",{className:"locations__list"},YC.map((p,m)=>ct.createElement("li",{className:"locations__item",key:p},ct.createElement("span",{className:"locations__index"},"0",m+1),ct.createElement("a",{className:"locations__link",href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Abeer Perfumes ${p}`)}`,target:"_blank",rel:"noreferrer"},p," ",ct.createElement(Yi,null))))))),ct.createElement("section",{className:"contact section-pad",id:"contact","aria-labelledby":"contact-title"},ct.createElement("div",{className:"container contact__inner"},ct.createElement("div",{className:"contact__copy"},ct.createElement("h2",{id:"contact-title"},"Start a conversation."),ct.createElement("p",null,"Tell us about your ",h," enquiry. We’ll take it from there.")),ct.createElement("div",{className:"contact__details"},ct.createElement("span",{className:"contact__detail-label"},"Call or WhatsApp"),ct.createElement("a",{className:"contact__number",href:`tel:${WC}`},"+91 98479 53894"),ct.createElement("a",{className:"button button--primary",href:`${My}?text=${encodeURIComponent(`Hi Abeer Perfumes, I’m enquiring about ${h}.`)}`,target:"_blank",rel:"noreferrer"},"WhatsApp us ",ct.createElement(Yi,null)),ct.createElement("a",{className:"contact__instagram",href:ZC,target:"_blank",rel:"noreferrer"},"Follow on Instagram ",ct.createElement(Yi,null)))))),ct.createElement("footer",{className:"footer"},ct.createElement("div",{className:"container footer__inner"},ct.createElement("a",{className:"wordmark wordmark--footer",href:"#home"},ct.createElement("span",{className:"wordmark__name"},"Abeer"),ct.createElement("span",{className:"wordmark__sub"},"Perfumes")),ct.createElement("p",{className:"footer__note"},"Fragrance for every way of being."),ct.createElement("div",{className:"footer__links"},ct.createElement("a",{href:"#collection"},"Collection"),ct.createElement("a",{href:"#custom-scents"},"Custom scents"),ct.createElement("a",{href:"#locations"},"Our shops"),ct.createElement("a",{href:"#trade"},"Wholesale"),ct.createElement("a",{href:"#contact"},"Contact")),ct.createElement("p",{className:"footer__credit","data-credits":!0},"Photographs: ",ct.createElement("a",{href:"https://commons.wikimedia.org/wiki/File:Perfume_glass_bottle.jpg"},"Santeri Viinamäki"),"(CC BY-SA 4.0, Wikimedia Commons)"),ct.createElement("p",{className:"footer__copyright"},"© Abeer Perfumes"))))}$M.createRoot(document.getElementById("root")).render(ct.createElement(ct.StrictMode,null,ct.createElement(KC,null)));
