/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source visit the plugins github repository
*/

"use strict";var Ee=Object.defineProperty;var It=Object.getOwnPropertyDescriptor;var Gt=Object.getOwnPropertyNames;var zt=Object.prototype.hasOwnProperty;var Jt=(i,n)=>{for(var e in n)Ee(i,e,{get:n[e],enumerable:!0})},qt=(i,n,e,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Gt(n))!zt.call(i,t)&&t!==e&&Ee(i,t,{get:()=>n[t],enumerable:!(r=It(n,t))||r.enumerable});return i};var Kt=i=>qt(Ee({},"__esModule",{value:!0}),i);var wn={};Jt(wn,{default:()=>Se});module.exports=Kt(wn);var ke=require("obsidian");var it=require("obsidian");var et=/[\u4e00-\u9fff]/,tt=new RegExp(et,"g"),q=i=>et.test(i);var nt={".":"\u3002",",":"\uFF0C",":":"\uFF1A",";":"\uFF1B","?":"\uFF1F","\\":"\u3001",'"':"\u201C","<":"\u300A",">":"\u300B","[":"\u300C","]":"\u300D","(":"\uFF08",")":"\uFF09"};function rt({vim:i,CodeMirror:n,cut:e}){let r=i.getVimGlobalState_(),t=n.Pos;var o=[n.isWordChar,function(f){return f&&!n.isWordChar(f)&&!/\s/.test(f)}],l=[function(f){return/\S/.test(f)}];function s(f,b){r.lastCharacterSearch.increment=f,r.lastCharacterSearch.forward=b.forward,r.lastCharacterSearch.selectedCharacter=b.selectedCharacter}function a(f,b,T,A,w){var g;return A?(g=b.indexOf(T,f+1),g!=-1&&!w&&(g-=1)):(g=b.lastIndexOf(T,f-1),g!=-1&&!w&&(g+=1)),g}function u(f){return new t(f.line,f.ch)}function c(f,b){return b>=f.firstLine()&&b<=f.lastLine()}function d(f,b){return f.getLine(b).length}function m(f,b,T,A,w,g){var h=u(b),C=[];(A&&!w||!A&&w)&&T++;for(var E=!(A&&w),v=0;v<T;v++){var M=x(f,b,A,g,E);if(!M){var _=d(f,f.lastLine());C.push(A?{line:f.lastLine(),from:_,to:_}:{line:0,from:0,to:0});break}C.push(M),b=new t(M.line,A?M.to-1:M.from)}var R=C.length!=T,P=C[0],S=C.pop();return A&&!w?(!R&&(P.from!=h.ch||P.line!=h.line)&&(S=C.pop()),new t(S.line,S.from)):A&&w?new t(S.line,S.to-1):!A&&w?(!R&&(P.to!=h.ch||P.line!=h.line)&&(S=C.pop()),new t(S.line,S.to)):new t(S.line,S.from)}function p(f,b,T,A){let w=f.getCursor(),g=w.ch,h;for(let C=0;C<b;C++){let E=f.getLine(w.line);if(h=a(g,E,A,T,!0),h=j(A,g,E,T,h),h==-1)return null;g=h}return new t(f.getCursor().line,h)}function x(f,b,T,A,w){var g=b.line,h=b.ch,C=f.getLine(g),E=T?1:-1,v=A?l:o;if(w&&C==""){if(g+=E,C=f.getLine(g),!c(f,g))return null;h=T?0:C.length}for(;;){if(w&&C=="")return{from:0,to:0,line:g};for(var M=E>0?C.length:-1,_=M,R=M;h!=M;){var P=!1;let Ft=Math.max(h-6,0),Ht=Math.min(h+6,C.length),Wt=C.slice(Ft,Ht);if(q(Wt))for(let $=0;$<v.length&&!P;++$){if(!v[$](C.charAt(h)))continue;_=h;let Ze=e(C),J;for(;h!=M;)if(J=L(Ze,h),!!v[$](J.text)){if(T){h=J.end,h=Math.min(h,M);break}J=L(Ze,Math.max(--h,0)),v[$](J.text)&&(h=J.begin-1,h=Math.max(h,M));break}R=h,P=_!=R;let jt=T?Math.min(_+E,M):Math.max(_+E,M);if(!(_==b.ch&&g==b.line&&R==jt))return{from:Math.min(_,R+1),to:Math.max(_,R),line:g}}for(var S=0;S<v.length&&!P;++S)if(v[S](C.charAt(h))){for(_=h;h!=M&&v[S](C.charAt(h));)h+=E;if(R=h,P=_!=R,_==b.ch&&g==b.line&&R==_+E)continue;return{from:Math.min(_,R+1),to:Math.max(_,R),line:g}}P||(h+=E)}if(g+=E,!c(f,g))return null;C=f.getLine(g),h=E>0?0:C.length}}function j(f,b,T,A,w){if(f.length==1&&nt[f]!=null){let g=nt[f],h=a(b,T,g,A,!0);return h==-1?w:w==-1?h:A?Math.min(w,h):Math.max(w,h)}return w}function L(f,b){let T=0,A=0;for(var w=0;w<f.length;w++){var g=f[w];if(A=T+g.length,b>=T&&b<A)break;T+=g.length}return{index:w,text:g,begin:T,end:A}}return{moveToCharacter:p,recordLastCharacterSearch:s,moveToWord:m}}var oe=class extends it.Component{constructor(n){super(),this.plugin=n,this.utils=rt({CodeMirror:window.CodeMirror,vim:this.vim,cut:n.cut.bind(n)})}get vim(){return window.CodeMirrorAdapter?.Vim}get enabled(){return this.plugin.settings.useJieba||window.Intl?.Segmenter}onload(){!this.vim||(this.enabled&&this.plugin.settings.moveByChineseWords&&this.enableMoveByChineseWords(this.vim),this.enabled&&this.plugin.settings.moveTillChinesePunctuation&&this.enableMoveTillChinesePunctuation(this.vim))}enableMoveByChineseWords(n){n.defineMotion("moveByWords",(e,r,t)=>this.utils.moveToWord(e,r,t.repeat,!!t.forward,!!t.wordEnd,!!t.bigWord))}enableMoveTillChinesePunctuation(n){let{recordLastCharacterSearch:e,moveToCharacter:r}=this.utils;n.defineMotion("moveToCharacter",(t,o,l)=>{let s=l.repeat;return e(0,l),r(t,s,l.forward,l.selectedCharacter)||o}),n.defineMotion("moveTillCharacter",(t,o,l)=>{let s=l.repeat,a=r(t,s,l.forward,l.selectedCharacter),u=l.forward?-1:1;return e(u,l),a?(a.ch+=u,a):null}),n.defineMotion("repeatLastCharacterSearch",(t,o,l)=>{let a=n.getVimGlobalState_().lastCharacterSearch,u=l.repeat,c=l.forward===a.forward,d=(a.increment?1:0)*(c?-1:1);t.moveH(-d,"char"),l.inclusive=!!c;let m=r(t,u,c,a.selectedCharacter);return m?(m.ch+=d,m):(t.moveH(d,"char"),o)})}};var ge=require("@codemirror/state"),_t=require("@codemirror/view");function Re(i,n){let e=Object.keys(n).map(r=>Ut(i,r,n[r]));return e.length===1?e[0]:function(){e.forEach(r=>r())}}function Ut(i,n,e){let r=i[n],t=i.hasOwnProperty(n),o=e(r);return r&&Object.setPrototypeOf(o,r),Object.setPrototypeOf(l,o),i[n]=l,s;function l(...a){return o===r&&i[n]===l&&s(),o.apply(this,a)}function s(){i[n]===l&&(t?i[n]=r:delete i[n]),o!==r&&(o=r,Object.setPrototypeOf(l,r||Function))}}var he=require("@codemirror/state"),Ct=require("@codemirror/view");var ot=require("@codemirror/state"),Yt=(i,n,e,r)=>{if(!e)return null;let{from:t,to:o}=e,l=r.doc.sliceString(t,o),s=i.getSegRangeFromCursor(n,{from:t,to:o,text:l});return s?ot.EditorSelection.range(s.from,s.to):null},le=Yt;function se(i){return i.nodeType==3?Pe(i,0,i.nodeValue.length).getClientRects():i.nodeType==1?i.getClientRects():[]}function Ne(i){for(var n=0;;n++)if(i=i.previousSibling,!i)return n}function st(i){return i.nodeType==3?i.nodeValue.length:i.childNodes.length}var De={left:0,right:0,top:0,bottom:0};function ve(i,n){let e=n?i.left:i.right;return{left:e,right:e,top:i.top,bottom:i.bottom}}var lt;function Pe(i,n,e=n){let r=lt||(lt=document.createRange());return r.setEnd(i,e),r.setStart(i,n),r}function ae(i){for(;i.attributes.length;)i.removeAttributeNode(i.attributes[0])}var D=class{constructor(n,e,r=!0){this.node=n;this.offset=e;this.precise=r}static before(n,e){return new D(n.parentNode,Ne(n),e)}static after(n,e){return new D(n.parentNode,Ne(n)+1,e)}},ue=[],k=class{constructor(){this.parent=null;this.dom=null;this.dirty=2}get editorView(){if(!this.parent)throw new Error("Accessing view in orphan content view");return this.parent.editorView}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(n){let e=this.posAtStart;for(let r of this.children){if(r==n)return e;e+=r.length+r.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(n){return this.posBefore(n)+n.length}coordsAt(n,e){return null}sync(n){if(this.dirty&2){let e=this.dom,r=null,t;for(let o of this.children){if(o.dirty){if(!o.dom&&(t=r?r.nextSibling:e.firstChild)){let l=k.get(t);(!l||!l.parent&&l.canReuseDOM(o))&&o.reuseDOM(t)}o.sync(n),o.dirty=0}if(t=r?r.nextSibling:e.firstChild,n&&!n.written&&n.node==e&&t!=o.dom&&(n.written=!0),o.dom.parentNode==e)for(;t&&t!=o.dom;)t=at(t);else e.insertBefore(o.dom,t);r=o.dom}for(t=r?r.nextSibling:e.firstChild,t&&n&&n.node==e&&(n.written=!0);t;)t=at(t)}else if(this.dirty&1)for(let e of this.children)e.dirty&&(e.sync(n),e.dirty=0)}reuseDOM(n){}localPosFromDOM(n,e){let r;if(n==this.dom)r=this.dom.childNodes[e];else{let t=st(n)==0?0:e==0?-1:1;for(;;){let o=n.parentNode;if(o==this.dom)break;t==0&&o.firstChild!=o.lastChild&&(n==o.firstChild?t=-1:t=1),n=o}t<0?r=n:r=n.nextSibling}if(r==this.dom.firstChild)return 0;for(;r&&!k.get(r);)r=r.nextSibling;if(!r)return this.length;for(let t=0,o=0;;t++){let l=this.children[t];if(l.dom==r)return o;o+=l.length+l.breakAfter}}domBoundsAround(n,e,r=0){let t=-1,o=-1,l=-1,s=-1;for(let a=0,u=r,c=r;a<this.children.length;a++){let d=this.children[a],m=u+d.length;if(u<n&&m>e)return d.domBoundsAround(n,e,u);if(m>=n&&t==-1&&(t=a,o=u),u>e&&d.dom.parentNode==this.dom){l=a,s=c;break}c=m,u=m+d.breakAfter}return{from:o,to:s<0?r+this.length:s,startDOM:(t?this.children[t-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:l<this.children.length&&l>=0?this.children[l].dom:null}}markDirty(n=!1){this.dirty|=2,this.markParentsDirty(n)}markParentsDirty(n){for(let e=this.parent;e;e=e.parent){if(n&&(e.dirty|=2),e.dirty&1)return;e.dirty|=1,n=!1}}setParent(n){this.parent!=n&&(this.parent=n,this.dirty&&this.markParentsDirty(!0))}setDOM(n){this.dom&&(this.dom.cmView=null),this.dom=n,n.cmView=this}get rootView(){for(let n=this;;){let e=n.parent;if(!e)return n;n=e}}replaceChildren(n,e,r=ue){this.markDirty();for(let t=n;t<e;t++){let o=this.children[t];o.parent==this&&o.destroy()}this.children.splice(n,e-n,...r);for(let t=0;t<r.length;t++)r[t].setParent(this)}ignoreMutation(n){return!1}ignoreEvent(n){return!1}childCursor(n=this.length){return new Be(this.children,n,this.children.length)}childPos(n,e=1){return this.childCursor().findPos(n,e)}toString(){let n=this.constructor.name.replace("View","");return n+(this.children.length?"("+this.children.join()+")":this.length?"["+(n=="Text"?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(n){return n.cmView}get isEditable(){return!0}merge(n,e,r,t,o,l){return!1}become(n){return!1}canReuseDOM(n){return n.constructor==this.constructor}getSide(){return 0}destroy(){this.parent=null}};k.prototype.breakAfter=0;function at(i){let n=i.nextSibling;return i.parentNode.removeChild(i),n}var Be=class{constructor(n,e,r){this.children=n;this.pos=e;this.i=r;this.off=0}findPos(n,e=1){for(;;){if(n>this.pos||n==this.pos&&(e>0||this.i==0||this.children[this.i-1].breakAfter))return this.off=n-this.pos,this;let r=this.children[--this.i];this.pos-=r.length+r.breakAfter}}};function Xt(i,n,e,r,t,o,l,s,a){let{children:u}=i,c=u.length?u[n]:null,d=o.length?o[o.length-1]:null,m=d?d.breakAfter:l;if(!(n==r&&c&&!l&&!m&&o.length<2&&c.merge(e,t,o.length?d:null,e==0,s,a))){if(r<u.length){let p=u[r];p&&t<p.length?(n==r&&(p=p.split(t),t=0),!m&&d&&p.merge(0,t,d,!0,0,a)?o[o.length-1]=p:(t&&p.merge(0,t,null,!1,0,a),o.push(p))):p?.breakAfter&&(d?d.breakAfter=1:l=1),r++}for(c&&(c.breakAfter=l,e>0&&(!l&&o.length&&c.merge(e,c.length,o[0],!1,s,0)?c.breakAfter=o.shift().breakAfter:(e<c.length||c.children.length&&c.children[c.children.length-1].length==0)&&c.merge(e,c.length,null,!1,s,0),n++));n<r&&o.length;)if(u[r-1].become(o[o.length-1]))r--,o.pop(),a=o.length?0:s;else if(u[n].become(o[0]))n++,o.shift(),s=o.length?0:a;else break;!o.length&&n&&r<u.length&&!u[n-1].breakAfter&&u[r].merge(0,0,u[n-1],!1,s,a)&&n--,(n<r||o.length)&&i.replaceChildren(n,r,o)}}function ce(i,n,e,r,t,o){let l=i.childCursor(),{i:s,off:a}=l.findPos(e,1),{i:u,off:c}=l.findPos(n,-1),d=n-e;for(let m of r)d+=m.length;i.length+=d,Xt(i,u,c,s,a,r,0,t,o)}var de=require("@codemirror/state");var N=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},Ve=typeof document<"u"?document:{documentElement:{style:{}}},Le=/Edge\/(\d+)/.exec(N.userAgent),dt=/MSIE \d/.test(N.userAgent),Fe=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(N.userAgent),fe=!!(dt||Fe||Le),ut=!fe&&/gecko\/(\d+)/i.test(N.userAgent),Oe=!fe&&/Chrome\/(\d+)/.exec(N.userAgent),ct="webkitFontSmoothing"in Ve.documentElement.style,ht=!fe&&/Apple Computer/.test(N.vendor),ft=ht&&(/Mobile\/\w+/.test(N.userAgent)||N.maxTouchPoints>2),K={mac:ft||/Mac/.test(N.platform),windows:/Win/.test(N.platform),linux:/Linux|X11/.test(N.platform),ie:fe,ie_version:dt?Ve.documentMode||6:Fe?+Fe[1]:Le?+Le[1]:0,gecko:ut,gecko_version:ut?+(/Firefox\/(\d+)/.exec(N.userAgent)||[0,0])[1]:0,chrome:!!Oe,chrome_version:Oe?+Oe[1]:0,ios:ft,android:/Android\b/.test(N.userAgent),webkit:ct,safari:ht,webkit_version:ct?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,tabSize:Ve.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};var Qt=256,B=class extends k{constructor(e){super();this.text=e}get length(){return this.text.length}createDOM(e){this.setDOM(e||document.createTextNode(this.text))}sync(e){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text)}reuseDOM(e){e.nodeType==3&&this.createDOM(e)}merge(e,r,t){return t&&(!(t instanceof B)||this.length-(r-e)+t.length>Qt)?!1:(this.text=this.text.slice(0,e)+(t?t.text:"")+this.text.slice(r),this.markDirty(),!0)}split(e){let r=new B(this.text.slice(e));return this.text=this.text.slice(0,e),this.markDirty(),r}localPosFromDOM(e,r){return e==this.dom?r:r?this.text.length:0}domAtPos(e){return new D(this.dom,e)}domBoundsAround(e,r,t){return{from:t,to:t+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(e,r){return Zt(this.dom,e,r)}},O=class extends k{constructor(e,r=[],t=0){super();this.mark=e;this.children=r;this.length=t;for(let o of r)o.setParent(this)}setAttrs(e){if(ae(e),this.mark.class&&(e.className=this.mark.class),this.mark.attrs)for(let r in this.mark.attrs)e.setAttribute(r,this.mark.attrs[r]);return e}reuseDOM(e){e.nodeName==this.mark.tagName.toUpperCase()&&(this.setDOM(e),this.dirty|=6)}sync(e){this.dom?this.dirty&4&&this.setAttrs(this.dom):this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),super.sync(e)}merge(e,r,t,o,l,s){return t&&(!(t instanceof O&&t.mark.eq(this.mark))||e&&l<=0||r<this.length&&s<=0)?!1:(ce(this,e,r,t?t.children:[],l-1,s-1),this.markDirty(),!0)}split(e){let r=[],t=0,o=-1,l=0;for(let a of this.children){let u=t+a.length;u>e&&r.push(t<e?a.split(e-t):a),o<0&&t>=e&&(o=l),t=u,l++}let s=this.length-e;return this.length=e,o>-1&&(this.children.length=o,this.markDirty()),new O(this.mark,r,s)}domAtPos(e){return He(this,e)}coordsAt(e,r){return je(this,e,r)}};function Zt(i,n,e){let r=i.nodeValue.length;n>r&&(n=r);let t=n,o=n,l=0;n==0&&e<0||n==r&&e>=0?K.chrome||K.gecko||(n?(t--,l=1):o<r&&(o++,l=-1)):e<0?t--:o<r&&o++;let s=Pe(i,t,o).getClientRects();if(!s.length)return De;let a=s[(l?l<0:e>=0)?0:s.length-1];return K.safari&&!l&&a.width==0&&(a=Array.prototype.find.call(s,u=>u.width)||a),l?ve(a,l<0):a||null}var H=class extends k{constructor(e,r,t){super();this.widget=e;this.length=r;this.side=t;this.prevWidget=null}static create(e,r,t){return new(e.customView||H)(e,r,t)}split(e){let r=H.create(this.widget,this.length-e,this.side);return this.length-=e,r}sync(){(!this.dom||!this.widget.updateDOM(this.dom))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(this.editorView)),this.dom.contentEditable="false")}getSide(){return this.side}merge(e,r,t,o,l,s){return t&&(!(t instanceof H)||!this.widget.compare(t.widget)||e>0&&l<=0||r<this.length&&s<=0)?!1:(this.length=e+(t?t.length:0)+(this.length-r),!0)}become(e){return e.length==this.length&&e instanceof H&&e.side==this.side&&this.widget.constructor==e.widget.constructor?(this.widget.eq(e.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get overrideDOMText(){if(this.length==0)return de.Text.empty;let e=this;for(;e.parent;)e=e.parent;let r=e.editorView,t=r&&r.state.doc,o=this.posAtStart;return t?t.slice(o,o+this.length):de.Text.empty}domAtPos(e){return e==0?D.before(this.dom):D.after(this.dom,e==this.length)}domBoundsAround(){return null}coordsAt(e,r){let t=this.dom.getClientRects(),o=null;if(!t.length)return De;for(let l=e>0?t.length-1:0;o=t[l],!(e>0?l==0:l==t.length-1||o.top<o.bottom);l+=e>0?-1:1);return ve(o,this.side>0)}get isEditable(){return!1}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}};var U=class extends k{constructor(e){super();this.side=e}get length(){return 0}merge(){return!1}become(e){return e instanceof U&&e.side==this.side}split(){return new U(this.side)}sync(){if(!this.dom){let e=document.createElement("img");e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),this.setDOM(e)}}getSide(){return this.side}domAtPos(e){return D.before(this.dom)}localPosFromDOM(){return 0}domBoundsAround(){return null}coordsAt(e){let r=this.dom.getBoundingClientRect(),t=en(this,this.side>0?-1:1);return t&&t.top<r.bottom&&t.bottom>r.top?{left:r.left,right:r.right,top:t.top,bottom:t.bottom}:r}get overrideDOMText(){return de.Text.empty}};B.prototype.children=H.prototype.children=U.prototype.children=ue;function en(i,n){let e=i.parent,r=e?e.children.indexOf(i):-1;for(;e&&r>=0;)if(n<0?r>0:r<e.children.length){let t=e.children[r+n];if(t instanceof B){let o=t.coordsAt(n<0?t.length:0,n);if(o)return o}r+=n}else if(e instanceof O&&e.parent)r=e.parent.children.indexOf(e)+(n<0?0:1),e=e.parent;else{let t=e.dom.lastChild;if(t&&t.nodeName=="BR")return t.getClientRects()[0];break}}function He(i,n){let e=i.dom,{children:r}=i,t=0;for(let o=0;t<r.length;t++){let l=r[t],s=o+l.length;if(!(s==o&&l.getSide()<=0)){if(n>o&&n<s&&l.dom.parentNode==e)return l.domAtPos(n-o);if(n<=o)break;o=s}}for(let o=t;o>0;o--){let l=r[o-1];if(l.dom.parentNode==e)return l.domAtPos(l.length)}for(let o=t;o<r.length;o++){let l=r[o];if(l.dom.parentNode==e)return l.domAtPos(0)}return new D(e,0)}function We(i,n,e){let r,{children:t}=i;e>0&&n instanceof O&&t.length&&(r=t[t.length-1])instanceof O&&r.mark.eq(n.mark)?We(r,n.children[0],e-1):(t.push(n),n.setParent(i)),i.length+=n.length}function je(i,n,e){return i.children.length?(e<=0?mt:gt)(i,n):tn(i)}function mt(i,n){let e=null,r=-1;function t(o,l){for(let s=0,a=0;s<o.children.length&&a<=l;s++){let u=o.children[s],c=a+u.length;if(c>=l){if(u.children.length){if(t(u,l-a))return!0}else if(c>=l){if(c==l&&u.getSide()>0)return!0;e=u,r=l-a}}a=c}}return t(i,n),e?e.coordsAt(Math.max(0,r),-1):gt(i,n)}function gt(i,n){let e=null,r=-1;function t(o,l){for(let s=o.children.length-1,a=o.length;s>=0&&a>=l;s--){let u=o.children[s];if(a-=u.length,a<=l){if(u.children.length){if(t(u,l-a))return!0}else if(a<=l){if(a==l&&u.getSide()<0)return!0;e=u,r=l-a}}}}return t(i,n),e?e.coordsAt(Math.max(0,r),1):mt(i,n)}function tn(i){let n=i.dom.lastChild;if(!n)return i.dom.getBoundingClientRect();let e=se(n);return e[e.length-1]||null}function Ie(i,n){for(let e in i)e=="class"&&n.class?n.class+=" "+i.class:e=="style"&&n.style?n.style+=";"+i.style:n[e]=i[e];return n}function pt(i,n){if(i==n)return!0;if(!i||!n)return!1;let e=Object.keys(i),r=Object.keys(n);if(e.length!=r.length)return!1;for(let t of e)if(r.indexOf(t)==-1||i[t]!==n[t])return!1;return!0}function bt(i,n,e){let r=null;if(n)for(let t in n)e&&t in e||i.removeAttribute(r=t);if(e)for(let t in e)n&&n[t]==e[t]||i.setAttribute(r=t,e[t]);return!!r}var nn=require("@codemirror/state"),W=class extends k{constructor(){super(...arguments);this.children=[];this.length=0;this.prevAttrs=void 0;this.attrs=null;this.breakAfter=0}merge(e,r,t,o,l,s){if(t){if(!(t instanceof W))return!1;this.dom||t.transferDOM(this)}return o&&this.setDeco(t?t.attrs:null),ce(this,e,r,t?t.children:[],l,s),!0}split(e){let r=new W;if(r.breakAfter=this.breakAfter,this.length==0)return r;let{i:t,off:o}=this.childPos(e);o&&(r.append(this.children[t].split(o),0),this.children[t].merge(o,this.children[t].length,null,!1,0,0),t++);for(let l=t;l<this.children.length;l++)r.append(this.children[l],0);for(;t>0&&this.children[t-1].length==0;)this.children[--t].destroy();return this.children.length=t,this.markDirty(),this.length=e,r}transferDOM(e){!this.dom||(this.markDirty(),e.setDOM(this.dom),e.prevAttrs=this.prevAttrs===void 0?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(e){pt(this.attrs,e)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=e)}append(e,r){We(this,e,r)}addLineDeco(e){let r=e.spec.attributes,t=e.spec.class;r&&(this.attrs=Ie(r,this.attrs||{})),t&&(this.attrs=Ie({class:t},this.attrs||{}))}domAtPos(e){return He(this,e)}reuseDOM(e){e.nodeName=="DIV"&&(this.setDOM(e),this.dirty|=6)}sync(e){this.dom?this.dirty&4&&(ae(this.dom),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0):(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),this.prevAttrs!==void 0&&(bt(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(e);let r=this.dom.lastChild;for(;r&&k.get(r)instanceof O;)r=r.lastChild;if(!r||!this.length||r.nodeName!="BR"&&k.get(r)?.isEditable==!1&&(!K.ios||!this.children.some(t=>t instanceof B))){let t=document.createElement("BR");t.cmIgnore=!0,this.dom.appendChild(t)}}measureTextSize(){if(this.children.length==0||this.length>20)return null;let e=0;for(let r of this.children){if(!(r instanceof B)||/[^ -~]/.test(r.text))return null;let t=se(r.dom);if(t.length!=1)return null;e+=t[0].width}return e?{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length}:null}coordsAt(e,r){return je(this,e,r)}become(e){return!1}get type(){return 0}static find(e,r){for(let t=0,o=0;t<e.children.length;t++){let l=e.children[t],s=o+l.length;if(s>=r){if(l instanceof W)return l;if(s>r)break}o=s+l.breakAfter}return null}};var V=require("@codemirror/state");function Ge(i,n,e=1){let r=i.charCategorizer(n),t=i.doc.lineAt(n),o=n-t.from;if(t.length==0)return V.EditorSelection.cursor(n);o==0?e=1:o==t.length&&(e=-1);let l=o,s=o;e<0?l=(0,V.findClusterBreak)(t.text,o,!1):s=(0,V.findClusterBreak)(t.text,o);let a=r(t.text.slice(l,s));for(;l>0;){let u=(0,V.findClusterBreak)(t.text,l,!1);if(r(t.text.slice(u,l))!=a)break;l=u}for(;s<t.length;){let u=(0,V.findClusterBreak)(t.text,s);if(r(t.text.slice(s,u))!=a)break;s=u}return V.EditorSelection.range(l+t.from,s+t.from)}var wt=(i,n)=>i>=n.top&&i<=n.bottom,yt=(i,n,e)=>wt(n,e)&&i>=e.left&&i<=e.right;function rn(i,n,e,r){let t=W.find(i.docView,n);if(!t)return 1;let o=n-t.posAtStart;if(o==0)return 1;if(o==t.length)return-1;let l=t.coordsAt(o,-1);if(l&&yt(e,r,l))return-1;let s=t.coordsAt(o,1);return s&&yt(e,r,s)?1:l&&wt(r,l)?-1:1}function ze(i,n){let e=i.posAtCoords({x:n.clientX,y:n.clientY},!1);return{pos:e,bias:rn(i,e,n.clientX,n.clientY)}}var xt=i=>{let n=(r,t,o,l)=>{let s=Ge(r.state,t,o);return le(i,t,s,r.state)??s};return Ct.EditorView.mouseSelectionStyle.of((r,t)=>{if(t.button!==0||t.detail!==2)return null;let o=ze(r,t),l=t.detail,s=r.state.selection,a=o,u=t;return{update(c){c.docChanged&&(o&&(o.pos=c.changes.mapPos(o.pos)),s=s.map(c.changes),u=null)},get(c,d,m){let p;if(u&&c.clientX==u.clientX&&c.clientY==u.clientY?p=a:(p=a=ze(r,c),u=c),!p||!o)return s;let x=n(r,p.pos,p.bias,l);if(o.pos!=p.pos&&!d){let j=n(r,o.pos,o.bias,l),L=Math.min(j.from,x.from),f=Math.max(j.to,x.to);x=L<x.from?he.EditorSelection.range(L,f):he.EditorSelection.range(f,L)}return d?s.replaceRange(s.main.extend(x.from,x.to)):m?s.addRange(x):he.EditorSelection.create([x])}}})};var me=require("@codemirror/state"),Y=require("@codemirror/view"),At=i=>{function n(l,s){if(l.state.readOnly)return!1;let a="delete.selection",{state:u}=l,c=u.changeByRange(d=>{let{from:m,to:p}=d;if(m==p){let x=s(m);x<m?(a="delete.backward",x=e(l,x,!1)):x>m&&(a="delete.forward",x=e(l,x,!0)),m=Math.min(m,x),p=Math.max(p,x)}else m=e(l,m,!1),p=e(l,m,!0);return m==p?{range:d}:{changes:{from:m,to:p},range:me.EditorSelection.cursor(m)}});return c.changes.empty?!1:(l.dispatch(u.update(c,{scrollIntoView:!0,userEvent:a,effects:a=="delete.selection"?Y.EditorView.announce.of(u.phrase("Selection deleted")):void 0})),!0)}function e(l,s,a){if(l instanceof Y.EditorView)for(let u of l.state.facet(Y.EditorView.atomicRanges).map(c=>c(l)))u.between(s,s,(c,d)=>{c<s&&d>s&&(s=a?d:c)});return s}let r=(l,s)=>n(l,a=>{let u=a,{state:c}=l,d=c.doc.lineAt(u),m=c.charCategorizer(u);for(let p=null;;){if(u==(s?d.to:d.from)){u==a&&d.number!=(s?c.doc.lines:1)&&(u+=s?1:-1);break}let x=(0,me.findClusterBreak)(d.text,u-d.from,s)+d.from,j=d.text.slice(Math.min(u,x)-d.from,Math.max(u,x)-d.from),L=m(j);if(p!=null&&L!=p)break;(j!=" "||u!=a)&&(p=L),u=x}return u=i.getSegDestFromGroup(a,u,c.sliceDoc.bind(c))??u,u}),t=l=>r(l,!1),o=l=>r(l,!0);return Y.keymap.of([{key:"Ctrl-Alt-h",run:t},{key:"Mod-Backspace",mac:"Alt-Backspace",run:t},{key:"Mod-Delete",mac:"Alt-Delete",run:o}])};var Tt=i=>[xt(i),At(i)];var on=i=>{i.registerEditorExtension(Tt(i)),i.register(Re(ge.EditorState.prototype,{wordAt:r=>function(t){let o=r.call(this,t);return le(i,t,r.call(this,t),this)??o}}));let n,e;(u=>(u.BeginAndForward="BeginAndForward",u.BeginAndBackward="BeginAndBackward",u.ForwardAndForward="ForwardAndForward",u.ForwardAndBackward="ForwardAndBackward",u.BackwardAndForward="BackwardAndForward",u.BackwardAndBackward="BackwardAndBackward"))(e||(e={})),i.register(Re(_t.EditorView.prototype,{moveByGroup:r=>function(t,o){let l=r.call(this,t,o);if(l.empty||t.empty){let s;l.empty&&t.empty?(s=o?"BeginAndForward":"BeginAndBackward",n=t.from):o?s=n!=t.to?"ForwardAndForward":"BackwardAndForward":s=n!=t.from?"BackwardAndBackward":"ForwardAndBackward";let a;switch(s){case"BeginAndForward":a=t.from;break;case"BeginAndBackward":case"ForwardAndBackward":a=t.to;break;case"ForwardAndForward":t.from<=l.to?a=t.to+1:a=t.from+1;break;case"BackwardAndForward":a=t.from+1;break;case"BackwardAndBackward":t.from>l.to?a=t.from-1:a=t.to;break;default:a=t.from;break}let u=i.getSegDestFromGroup(a,o?l.from:l.to,this.state.sliceDoc.bind(this.state));if(u)return ge.EditorSelection.range(u,u)}return l}}))},Mt=on;var pe=class extends Error{},Je=class extends pe{},qe=class extends pe{},ln=(i,n=",")=>i.join(n),sn={accept:"*",multiple:!1,strict:!1},St=i=>{let{accept:n,multiple:e,strict:r}={...sn,...i},t=cn({multiple:e,accept:Array.isArray(n)?ln(n):n});return new Promise(o=>{t.onchange=()=>{o(an(t.files,e,r)),t.remove()},t.click()})},an=(i,n,e)=>new Promise((r,t)=>{if(!i)return t(new Je);let o=un(i,n,e);if(!o)return t(new qe);r(o)}),un=(i,n,e)=>!n&&e?i.length===1?i[0]:null:i.length?i:null,cn=({accept:i,multiple:n})=>{let e=document.createElement("input");return e.type="file",e.multiple=n,e.accept=i,e};var Q=require("obsidian"),kt="var(--background-modifier-success)",Et="var(--background-modifier-cover)",Ke="https://unpkg.com/jieba-wasm@0.0.2/pkg/web/jieba_rs_wasm_bg.wasm",I=class extends Q.Modal{constructor(e){super(e.app);this.plugin=e;this.reloadButton=null;this.selectButton=null;this.downloadButton=null;this.modalEl.addClass("zt-install-guide")}get libName(){return this.plugin.libName}onOpen(){this.contentEl.createEl("h1",{text:"\u5B89\u88C5\u7ED3\u5DF4\u5206\u8BCD"}),this.contentEl.createDiv({},e=>{e.appendText("\u65B0\u7248\u5206\u8BCD\u63D2\u4EF6\u9700\u8981\u5B89\u88C5 jieba-wasm\uFF0C\u8BF7\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u5B89\u88C5\uFF1A"),e.createEl("ol",{},r=>{r.createEl("li",{},t=>{this.downloadButton=t.createEl("button",{text:"\u81EA\u52A8\u4E0B\u8F7D"},o=>o.onclick=this.onDownloadingFile.bind(this)),t.createEl("br"),t.appendText("\u6216"),t.createEl("ol",{},o=>{o.createEl("li",{},l=>{l.appendText("\u70B9\u51FB\u94FE\u63A5\u624B\u52A8\u4E0B\u8F7D"),l.createEl("code",{text:this.libName}),l.createEl("br"),l.createEl("a",{href:Ke,text:Ke})}),o.createEl("li",{},l=>{l.appendText("\u5728\u5F39\u51FA\u7684\u7A97\u53E3\u9009\u62E9\u4E0B\u8F7D\u597D\u7684 "),l.createEl("code",{text:this.libName}),l.appendText("  "),this.selectButton=l.createEl("button",{text:"\u9009\u62E9\u6587\u4EF6"},s=>s.onclick=this.onSelectingFile.bind(this))})})}),r.createEl("li",{},t=>{t.appendText("\u91CD\u65B0\u52A0\u8F7D\u5206\u8BCD\u63D2\u4EF6:  "),this.reloadButton=t.createEl("button",{text:"\u91CD\u65B0\u52A0\u8F7D"},o=>{o.disabled=!0,o.style.backgroundColor=Et,o.onclick=this.onReloadPlugin.bind(this)})})})})}onClose(){this.contentEl.empty()}async onSelectingFile(){let e=await St({multiple:!1,accept:".wasm",strict:!0});!e||(await this.plugin.saveLib(await e.arrayBuffer()),this.selectButton&&(this.selectButton.setText("\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u5BFC\u5165\u6210\u529F"),this.selectButton.style.backgroundColor=kt),this.reloadButton&&(this.reloadButton.disabled=!1,this.reloadButton.style.backgroundColor=""))}async onDownloadingFile(){this.reloadButton&&(this.reloadButton.disabled=!0,this.reloadButton.style.backgroundColor=Et);let e=await fetch(Ke);await this.plugin.saveLib(await e.arrayBuffer()),this.selectButton&&(this.selectButton.setText("\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u5BFC\u5165\u6210\u529F"),this.selectButton.style.backgroundColor=kt),this.reloadButton&&(this.reloadButton.disabled=!1,this.reloadButton.style.backgroundColor="")}async onReloadPlugin(){if(await this.plugin.libExists()){let e=await app.vault.adapter.stat(this.plugin.libPath);e&&e.type=="file"&&e.size>0&&(await this.app.plugins.disablePlugin(this.plugin.manifest.id),this.close(),await this.app.plugins.enablePlugin(this.plugin.manifest.id),await this.app.setting.openTabById(this.plugin.manifest.id)),new Q.Notice("\u2714\uFE0F \u5B89\u88C5\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u6210\u529F")}else new Q.Notice("\u274C \u5B89\u88C5\u7ED3\u5DF4\u5206\u8BCD\u63D2\u4EF6\u5931\u8D25")}};var gn={},y,Rt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Rt.decode();var be=null;function Ce(){return(be===null||be.buffer!==y.memory.buffer)&&(be=new Uint8Array(y.memory.buffer)),be}function Ue(i,n){return Rt.decode(Ce().subarray(i,i+n))}var F=new Array(32).fill(void 0);F.push(void 0,null,!0,!1);var te=F.length;function Z(i){te===F.length&&F.push(F.length+1);let n=te;return te=F[n],F[n]=i,n}function xe(i){return F[i]}function fn(i){i<36||(F[i]=te,te=i)}function ee(i){let n=xe(i);return fn(i),n}function Xe(i){let n=typeof i;if(n=="number"||n=="boolean"||i==null)return`${i}`;if(n=="string")return`"${i}"`;if(n=="symbol"){let t=i.description;return t==null?"Symbol":`Symbol(${t})`}if(n=="function"){let t=i.name;return typeof t=="string"&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(i)){let t=i.length,o="[";t>0&&(o+=Xe(i[0]));for(let l=1;l<t;l++)o+=", "+Xe(i[l]);return o+="]",o}let e=/\[object ([^\]]+)\]/.exec(toString.call(i)),r;if(e.length>1)r=e[1];else return toString.call(i);if(r=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:r}var G=0,Ae=new TextEncoder("utf-8"),dn=typeof Ae.encodeInto=="function"?function(i,n){return Ae.encodeInto(i,n)}:function(i,n){let e=Ae.encode(i);return n.set(e),{read:i.length,written:e.length}};function ne(i,n,e){if(e===void 0){let s=Ae.encode(i),a=n(s.length);return Ce().subarray(a,a+s.length).set(s),G=s.length,a}let r=i.length,t=n(r),o=Ce(),l=0;for(;l<r;l++){let s=i.charCodeAt(l);if(s>127)break;o[t+l]=s}if(l!==r){l!==0&&(i=i.slice(l)),t=e(t,r,r=l+i.length*3);let s=Ce().subarray(t+l,t+r),a=dn(i,s);l+=a.written}return G=l,t}var ye=null;function X(){return(ye===null||ye.buffer!==y.memory.buffer)&&(ye=new Int32Array(y.memory.buffer)),ye}var we=null;function hn(){return(we===null||we.buffer!==y.memory.buffer)&&(we=new Uint32Array(y.memory.buffer)),we}function Nt(i,n){let r=hn().subarray(i/4,i/4+n),t=[];for(let o=0;o<r.length;o++)t.push(ee(r[o]));return t}function $e(i,n){try{let s=y.__wbindgen_add_to_stack_pointer(-16);var e=ne(i,y.__wbindgen_malloc,y.__wbindgen_realloc),r=G;y.cut(s,e,r,n);var t=X()[s/4+0],o=X()[s/4+1],l=Nt(t,o).slice();return y.__wbindgen_free(t,o*4),l}finally{y.__wbindgen_add_to_stack_pointer(16)}}function Dt(i,n){try{let s=y.__wbindgen_add_to_stack_pointer(-16);var e=ne(i,y.__wbindgen_malloc,y.__wbindgen_realloc),r=G;y.cut_for_search(s,e,r,n);var t=X()[s/4+0],o=X()[s/4+1],l=Nt(t,o).slice();return y.__wbindgen_free(t,o*4),l}finally{y.__wbindgen_add_to_stack_pointer(16)}}function Ye(i){return i==null}function Te(i,n,e){var r=ne(i,y.__wbindgen_malloc,y.__wbindgen_realloc),t=G,o=Ye(e)?0:ne(e,y.__wbindgen_malloc,y.__wbindgen_realloc),l=G,s=y.add_word(r,t,!Ye(n),Ye(n)?0:n,o,l);return s>>>0}async function mn(i,n){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,n)}catch(r){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}let e=await i.arrayBuffer();return await WebAssembly.instantiate(e,n)}else{let e=await WebAssembly.instantiate(i,n);return e instanceof WebAssembly.Instance?{instance:e,module:i}:e}}async function vt(i){typeof i>"u"&&(i=new URL("jieba_rs_wasm_bg.wasm",gn.url));let n={};n.wbg={},n.wbg.__wbindgen_string_new=function(t,o){var l=Ue(t,o);return Z(l)},n.wbg.__wbindgen_object_drop_ref=function(t){ee(t)},n.wbg.__wbg_new_68adb0d58759a4ed=function(){var t=new Object;return Z(t)},n.wbg.__wbindgen_number_new=function(t){var o=t;return Z(o)},n.wbg.__wbg_set_2e79e744454afade=function(t,o,l){xe(t)[ee(o)]=ee(l)},n.wbg.__wbindgen_object_clone_ref=function(t){var o=xe(t);return Z(o)},n.wbg.__wbg_new_7031805939a80203=function(t,o){var l=new Error(Ue(t,o));return Z(l)},n.wbg.__wbindgen_debug_string=function(t,o){var l=Xe(xe(o)),s=ne(l,y.__wbindgen_malloc,y.__wbindgen_realloc),a=G;X()[t/4+1]=a,X()[t/4+0]=s},n.wbg.__wbindgen_throw=function(t,o){throw new Error(Ue(t,o))},n.wbg.__wbindgen_rethrow=function(t){throw ee(t)},(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));let{instance:e,module:r}=await mn(await i,n);return y=e.exports,vt.__wbindgen_wasm_module=r,y}var Pt=vt;var pn=i=>i&&Number.isInteger(+i)?+i:void 0,Bt=i=>i&&i in bn?i:void 0,_e=!1,Ot=async(i,n)=>{if(_e)return;let e=[];if(await Pt(i),n)for(let r of n.split(/\r?\n/)){let[t,o,l]=r.trim().split(/\s+/),s,a;if(!t){e.push(r);continue}!o&&!l?Te(t):(a=Bt(o))?Te(t,void 0,a):(a=Bt(l),s=pn(o),Te(t,s,a))}$e("",!0),_e=!0},Vt=(i,n=!1)=>{if(!_e)throw new Error("jieba not loaded");return $e(i,n)},Lt=(i,n=!1)=>{if(!_e)throw new Error("jieba not loaded");return Dt(i,n)},bn={n:void 0,f:void 0,s:void 0,t:void 0,nr:void 0,ns:void 0,nt:void 0,nw:void 0,nz:void 0,v:void 0,vd:void 0,vn:void 0,a:void 0,ad:void 0,an:void 0,d:void 0,m:void 0,q:void 0,r:void 0,p:void 0,c:void 0,u:void 0,xc:void 0,w:void 0,PER:void 0,LOC:void 0,ORG:void 0,TIME:void 0};var z=require("obsidian");var Qe={useJieba:!1,hmm:!1,dict:"",moveByChineseWords:!0,moveTillChinesePunctuation:!0},Me=class extends z.PluginSettingTab{constructor(e){super(e.app,e);this.plugin=e}display(){let{containerEl:e}=this;e.empty(),this.addToggle(e,"useJieba").setName("\u4F7F\u7528\u7ED3\u5DF4\u5206\u8BCD").setDesc("\u652F\u6301\u65B0\u8BCD\u53D1\u73B0\u3001\u81EA\u5B9A\u4E49\u8BCD\u5178\uFF0C\u9700\u8981\u989D\u5916\u4E0B\u8F7D\uFF0C\u91CD\u542F Obsidian \u751F\u6548"),(this.plugin.settings.useJieba||!window.Intl?.Segmenter)&&(this.addToggle(e,"hmm").setName("\u65B0\u8BCD\u53D1\u73B0\u529F\u80FD").setDesc("\u91C7\u7528\u57FA\u4E8E\u6C49\u5B57\u6210\u8BCD\u80FD\u529B\u7684 HMM \u6A21\u578B\uFF0C\u4F7F\u7528 Viterbi \u7B97\u6CD5\u63A8\u7B97\u672A\u5B58\u5728\u4E8E\u8BCD\u5E93\u5185\u7684\u8BCD\u3002\u82E5\u6548\u679C\u4E0D\u7406\u60F3\uFF0C\u53EF\u9009\u62E9\u5173\u95ED\u6B64\u9009\u9879"),this.addTextField(e,{get:"dict",set:"dict"},{cols:30,rows:5}).setName("\u7528\u6237\u81EA\u5B9A\u4E49\u8BCD\u5178").setDesc(createFragment(r=>{r.appendText("\u901A\u8FC7\u7528\u6237\u81EA\u5B9A\u4E49\u8BCD\u5178\u6765\u589E\u5F3A\u6B67\u4E49\u7EA0\u9519\u80FD\u529B"),r.createEl("br"),r.appendText("\u8BCD\u5178\u683C\u5F0F\uFF1A\u4E00\u4E2A\u8BCD\u5360\u4E00\u884C\uFF1B\u6BCF\u4E00\u884C\u5206\u4E09\u90E8\u5206\uFF1A\u8BCD\u8BED\u3001\u8BCD\u9891\uFF08\u53EF\u7701\u7565\uFF09\u3001\u8BCD\u6027\uFF08\u53EF\u7701\u7565\uFF09\uFF0C\u7528\u7A7A\u683C\u9694\u5F00\uFF0C\u987A\u5E8F\u4E0D\u53EF\u98A0\u5012"),r.createEl("br"),r.appendText("\u6309\u4E0B\u6309\u94AE\u751F\u6548")})).addButton(r=>r.setIcon("reset").setTooltip("\u91CD\u65B0\u52A0\u8F7D\u8BCD\u5178").onClick(async()=>{await this.app.plugins.disablePlugin(this.plugin.manifest.id),await this.app.plugins.enablePlugin(this.plugin.manifest.id),this.app.setting.openTabById(this.plugin.manifest.id)}))),(this.plugin.settings.useJieba||window.Intl?.Segmenter)&&app.vault.getConfig("vimMode")==!0&&(this.addToggle(e,"moveByChineseWords").setName("\u3010Vim Mode\u3011\u4F7F\u7528\u7ED3\u5DF4\u5206\u8BCD\u79FB\u52A8\u5149\u6807").setDesc("Motion w/e/b/ge \u4F7F\u7528\u7ED3\u5DF4\u5206\u8BCD\u79FB\u52A8\u5149\u6807 in Vim Normal Mode, \u91CD\u542FObsidian\u751F\u6548"),this.addToggle(e,"moveTillChinesePunctuation").setName("\u3010Vim Mode\u3011f/t<character> \u652F\u6301\u8F93\u5165\u82F1\u6587\u6807\u70B9\u8DF3\u8F6C\u5230\u4E2D\u6587\u6807\u70B9").setDesc("Motion f/t<character> \u652F\u6301\u8F93\u5165\u82F1\u6587\u6807\u70B9\u8DF3\u8F6C\u5230\u4E2D\u6587\u6807\u70B9 in Vim Normal Mode, \u91CD\u542FObsidian\u751F\u6548"))}addToggle(e,r){return new z.Setting(e).addToggle(t=>{t.setValue(this.plugin.settings[r]).onChange(o=>{this.plugin.settings[r]=o,this.plugin.saveSettings(),r=="useJieba"&&(app.vault.adapter.exists(this.plugin.libPath,!0).then(l=>{!l&&o==!0&&new I(this.plugin).open()}),this.display())})})}addTextField(e,r,t={},o=500){return new z.Setting(e).addTextArea(l=>{let{get:s,set:a}=r,u=typeof s=="function"?s:()=>this.plugin.settings[s],c=typeof a=="function"?a:m=>this.plugin.settings[a]=m,d=async m=>{c(m),await this.plugin.saveSettings()};l.setValue(u()).onChange((0,z.debounce)(d,o,!0)),Object.assign(l.inputEl,{cols:30,rows:5,...t})})}};var ie=10,re=ke.Platform.isDesktopApp?require("@electron/remote").app.getPath("userData"):null,Se=class extends ke.Plugin{constructor(){super(...arguments);this.libName="jieba_rs_wasm_bg.wasm";this.settings=Qe}async loadLib(){if(re){let{readFile:e}=require("fs/promises");try{return await e(this.libPath)}catch(r){if(r.code==="ENOENT")return null;throw r}}else return await app.vault.adapter.exists(this.libPath,!0)?await app.vault.adapter.readBinary(this.libPath):null}async libExists(){if(re){let{access:e}=require("fs/promises");try{return await e(this.libPath),!0}catch(r){if(r.code==="ENOENT")return!1;throw r}}else return await app.vault.adapter.exists(this.libPath,!0)}async saveLib(e){if(re){let{writeFile:r}=require("fs/promises");await r(this.libPath,Buffer.from(e))}else await app.vault.adapter.writeBinary(this.libPath,e)}get libPath(){if(re){let{join:e}=require("path");return e(re,this.libName)}else return[app.vault.configDir,this.libName].join("/")}async onload(){this.addSettingTab(new Me(this)),await this.loadSettings(),await this.loadSegmenter()&&(Mt(this),console.info("editor word splitting patched")),this.addChild(new oe(this))}async loadSettings(){this.settings=Object.assign({},Qe,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async loadSegmenter(){if(!this.settings.useJieba&&window.Intl?.Segmenter)return this.segmenter=new Intl.Segmenter("zh-CN",{granularity:"word"}),console.info("window.Intl.Segmenter loaded"),!0;let e=await this.loadLib();return e?(await Ot(e,this.settings.dict),console.info("Jieba loaded"),!0):(new I(this).open(),!1)}cut(e,{search:r=!1}={}){return!this.settings.useJieba&&this.segmenter?Array.from(this.segmenter.segment(e)).map(t=>t.segment):r?Lt(e,this.settings.hmm):Vt(e,this.settings.hmm)}getSegRangeFromCursor(e,{from:r,to:t,text:o}){if(q(o)){if(e-r>ie){let c=e-ie;q(o.slice(c,e))&&(o=o.slice(c-r),r=c)}if(t-e>ie){let c=e+ie;q(o.slice(e,c))&&(o=o.slice(0,c-t),t=c)}let l=this.cut(o);if(e===t){let c=l.last();return{from:t-c.length,to:t}}let s=0,a=0,u=e-r;for(let c of l){if(a=s+c.length,u>=s&&u<a)break;s+=c.length}return t=a+r,r+=s,{from:r,to:t}}else return null}getSegDestFromGroup(e,r,t){let o=e<r,l=yn(o?t(e,r):t(r,e),o),s=this.cut(l);if(s.length===0)return null;let a=0,u;do u=o?s.shift():s.pop(),a+=u.length;while(/\s+/.test(u));return o?e+a:e-a}};function yn(i,n){n||(i=[...i].reverse().join(""));let e=i.length-1,r=0;for(let{index:o}of i.matchAll(tt))if(r++,e=o,r>ie)break;let t=i.slice(0,e+1);return n?t:[...t].reverse().join("")}
