(this.webpackJsonpscramble=this.webpackJsonpscramble||[]).push([[0],{27:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n.n(o),a=n(18),c=n.n(a),s=(n(27),n(5)),u=n(16),l=n(15),d=n.n(l),h=(n(29),n(10)),f=function(e){var t=e.letter,n=e.selected,o=e.setSelected,i=e.isWord,a=e.boardSize,c=function(){var e=5,t=1,n=(t-2)/(e-25)*(a-e)+t;return function(e){return e/n}}();return Object(r.jsx)("div",{onClick:o,style:{backgroundColor:n?"yellow":"white",padding:"".concat(c(1),"%"),margin:"".concat(c(.2),"%"),width:"".concat(c(3),"%"),fontSize:"".concat(c(3),"vw"),borderWidth:"".concat(c(1),"vw"),borderStyle:n?"inset":"outset",borderRadius:i?"".concat(c(2),"vw"):0,textAlign:"center"},children:t})},v=function(e){var t=e.word,n=e.isWord,o=e.selectedIndex,i=e.setSelectedIndex,a=e.boardSize;return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",fontWeight:n?"bold":"normal"},children:Object(h.a)(t.toUpperCase()).map((function(e,t){return Object(r.jsx)(f,{letter:e,selected:o===t,setSelected:function(){return i(t)},isWord:n,boardSize:a},t)}))})},b=function(e){var t=e.words,n=t.solution,i=t.shuffled,a=e.wordChecker,c=e.Solution;console.log(n);var u=Object(o.useCallback)((function(){return{x:-1,y:-1,words:i,solved:a.words(i)}}),[a,i]),l=Object(o.useState)(u),d=Object(s.a)(l,2),f=d[0],b=f.x,j=f.y,g=f.words,m=f.solved,x=d[1];return Object(o.useEffect)((function(){x(u())}),[u]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:g.map((function(e,t){return Object(r.jsx)(v,{word:e,isWord:a.word(e),selectedIndex:t===b?j:-1,setSelectedIndex:function(e){return function(e,t){if(-1===j||-1===b)x({x:e,y:t,words:g,solved:m});else if(b===e&&j===t)x({x:-1,y:-1,words:g,solved:m});else{var n=g.map((function(e){return Object(h.a)(e)})),r=n[e][t];n[e][t]=n[b][j],n[b][j]=r;var o=n.map((function(e){return e.join("")}));x({x:-1,y:-1,words:o,solved:a.words(o)})}}(t,e)},boardSize:g.length},t)}))}),Object(r.jsx)(c,{solved:m,showSolution:function(){return x({x:-1,y:-1,words:n,solved:!0})}})]})},j=n(7),g=n.n(j),m=n(19),x=n(8),y=n(9),w=n(13),O=n(12),p=n(2),k=n.n(p);var S=n(20),W=n(21),C=n.n(W),L=g.a.mark(z);function z(e){var t,n,r,o,i;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=e.start,n=void 0===t?0:t,r=e.stop,o=e.step,i=void 0===o?1:o;case 1:if(!(n<r)){a.next=7;break}return a.next=4,n;case 4:n+=i,a.next=1;break;case 7:case"end":return a.stop()}}),L)}function B(e){return k()(z(e))}function N(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}}var E,I=function(){function e(t){Object(x.a)(this,e),this.metadata=t}return Object(y.a)(e,[{key:"toString",value:function(){return"Lexicon ".concat(this.name)}},{key:"label",value:function(){return"".concat(this.name," (").concat(this.size.numWords," words, ").concat(C()(this.size.numBytes),")")}},{key:"name",get:function(){return this.metadata.name}},{key:"size",get:function(){return this.metadata.size}}]),e}(),A=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e,r){var o;Object(x.a)(this,n),(o=t.call(this,e)).handle=void 0,o.words=void 0,o.rawWordsByLength=void 0,o.handle=e,o.words=k()(r).filter((function(e){return e.length>0})).map((function(e){return e.toLowerCase()})).toSet();var i,a=B({stop:k()(o.words).map((function(e){return e.length})).reduce(Math.max)+1}).map((function(){return[]})).toArray(),c=Object(S.a)(o.words);try{for(c.s();!(i=c.n()).done;){var s=i.value;a[s.length].push(s)}}catch(u){c.e(u)}finally{c.f()}return o.rawWordsByLength=a,o}return Object(y.a)(n,[{key:"toString",value:function(){return"".concat(this.name," Lexicon (").concat(this.words.size," words)")}},{key:"wordsByLength",value:function(e){var t;return null!==(t=this.rawWordsByLength[e])&&void 0!==t?t:[]}},{key:"hasLength",value:function(e){return this.wordsByLength(e).length>0}},{key:"maxLengthBound",value:function(){return this.rawWordsByLength.length}},{key:"lengthRange",value:function(){return B({start:1,stop:this.maxLengthBound()})}},{key:"lengths",value:function(){var e=this;return this.lengthRange().filter((function(t){return e.hasLength(t)}))}},{key:"consecutiveLengths",value:function(){var e,t=this;return B({start:1,stop:null!==(e=this.lengthRange().find((function(e){return!t.hasLength(e)})))&&void 0!==e?e:this.maxLengthBound()})}},{key:"checkWord",value:function(e){return this.words.has(e)}},{key:"checkWords",value:function(e){var t=this;return e.every((function(e){return t.checkWord(e)}))}},{key:"wordChecker",value:function(){var e=this;return{word:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){return e.checkWord(t)})),words:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){return e.checkWords(t)}))}}},{key:"randomWord",value:function(e){if(!this.hasLength(e))throw new Error("".concat(this," has no words of length ").concat(e));var t=this.wordsByLength(e);return t[Math.random()*t.length|0]}},{key:"randomWords",value:function(e){var t=this;return B({stop:e}).map((function(e){return t.randomWord(e+1)}))}},{key:"randomShuffledWords",value:function(e){for(var t=this.randomWords(e).toArray(),n=function(e){var t=Object(h.a)(e);return N(t),t.join("")}(t.join("")),r=[],o=0,i=1;i<=e;i++){var a=o+i;r.push(n.slice(o,a)),o=a}return{solution:t,shuffled:r}}}]),n}(I),D=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).lexicon=void 0,e}return Object(y.a)(n,[{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(Object(m.a)(g.a.mark((function e(){var t,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.name,e.next=3,fetch("/lexicons/".concat(t,".txt"));case 3:return n=e.sent,e.next=6,n.text();case 6:if(!(r=e.sent).startsWith("<!DOCTYPE html>")){e.next=9;break}throw new Error("the ".concat(this," doesn't actually exist on the server"));case 9:return e.abrupt("return",new A(this,r.split("\n")));case 10:case"end":return e.stop()}}),e,this)}))))},{key:"getCachedPromise",value:function(){return this.lexicon}},{key:"getCached",value:function(){if(!(this.lexicon instanceof Promise))return this.lexicon}},{key:"get",value:function(){var e=this;if(this.lexicon)return this.lexicon;var t=this.fetch();return this.lexicon=t,t.then((function(t){return e.lexicon=t})),t}}]),n}(I);E=Symbol.iterator;var P,F=new(function(){function e(t){Object(x.a)(this,e),this.handles=void 0,this.defaultNameKey=void 0,this._defaultName=void 0,this.handles=k()(t).map((function(e){return[e.name,new D(e)]})).toMap(),this.defaultNameKey="scramble.lexicon.default",this._defaultName=this.getDefaultName(),this.default().get()}return Object(y.a)(e,[{key:E,value:function(){return this.handles.values()}},{key:"iter",value:function(){return k()(this)}},{key:"getDefaultName",value:function(){var e=localStorage.getItem(this.defaultNameKey);return null!==e&&this.handles.has(e)?e:this.iter().map((function(e){return e.name})).find((function(){return!0}))}},{key:"updateDefault",value:function(e){this._defaultName=e.name,localStorage.setItem(this.defaultNameKey,this._defaultName)}},{key:"get",value:function(e){var t=this.handles.get(e);if(!t){var n=this.iter().map((function(e){return e.name}));throw new Error("the Lexicon ".concat(e," doesn't exist in {").concat(n.join(", "),"}"))}return t}},{key:"default",value:function(){return this.get(this._defaultName)}}]),e}())([{name:"English Sample",size:{numWords:16,numChars:47,numBytes:62}},{name:"English",size:{numWords:410323,numChars:3802737,numBytes:4213059}},{name:"Spanish",size:{numWords:2,numChars:7,numBytes:8}}]);P={lexicons:F},Object.assign(globalThis,P);var M=function(e){var t=e.solved,n=e.showSolution;return Object(r.jsx)("div",{children:t?"Done!":Object(r.jsx)("button",{onClick:n,children:"Show Solution"})})},_=function(e){var t=e.lexicon,n=e.size,o=t.randomShuffledWords(n);return console.log(o.solution),Object(r.jsx)("div",{children:Object(r.jsx)(b,{words:o,wordChecker:t.wordChecker(),Solution:M})})},H=function(e){var t=e.options,n=e.setOptions,i=t?Object(u.a)(Object(u.a)({again:!0},t),{},{lexiconHandle:t.lexicon.handle}):{again:!1,lexiconHandle:F.default()},a=Object(o.useState)(i.lexiconHandle),c=Object(s.a)(a,2),l=c[0],h=c[1],f=Object(o.useState)(i.lexiconHandle.getCached()),v=Object(s.a)(f,2),b=v[0],j=v[1],g=Object(o.useState)(i.size),m=Object(s.a)(g,2),x=m[0],y=m[1];return Object(o.useEffect)((function(){y(void 0);var e=l.get();e instanceof Promise?e.then(j):j(e)}),[l]),Object(o.useEffect)((function(){b&&F.updateDefault(b)}),[b]),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{disabled:!(b&&void 0!==x),onClick:function(){if(!b||void 0===x)throw new Error("impossible");n({lexicon:b,size:x})},children:"Play".concat(i.again?" Again":"","!")}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Lexicon"}),Object(r.jsx)(d.a,{options:F.iter().map((function(e){return{value:e.name,label:e.label()}})).toArray(),value:l.name,onChange:function(e){return h(F.get(e.value))}}),b&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{children:"Size"}),Object(r.jsx)(d.a,{options:b.consecutiveLengths().map((function(e){return e.toString()})).toArray(),value:null===x||void 0===x?void 0:x.toString(),onChange:function(e){return y(parseInt(e.value))}})]})]})},K=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(r.jsxs)("div",{children:[n&&Object(r.jsx)(_,{lexicon:n.lexicon,size:n.size}),Object(r.jsx)(H,{options:n,setOptions:i})]})};var R=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(K,{})})},T=(n(39),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))});c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),T()}},[[40,1,2]]]);
//# sourceMappingURL=main.81941738.chunk.js.map