(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(t,n,e){t.exports=e.p+"static/media/closed-shell.683d0e02.png"},36:function(t,n,e){t.exports=e.p+"static/media/empty-shell.388158d0.png"},37:function(t,n,e){t.exports=e.p+"static/media/pearl-shell.9c6cd460.png"},38:function(t,n,e){t.exports=e.p+"static/media/title.9264086a.png"},49:function(t,n,e){t.exports=e(89)},88:function(t,n,e){},89:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"monitorReducerEnhancer",function(){return Mt});var a={};e.r(a),e.d(a,"logger",function(){return Ut});var o=e(0),i=e.n(o),c=e(7),u=e(5),l=e(10),s=e(11),p=e(14),d=e(12),b=e(15),x=e(9),f=e(21),m=e.n(f),h=e(41),g=function(t){return{type:"SET_USERS_ANSWER",payload:{chosenShell:t}}},E=function(){return{type:"GET_GAME_RESULT"}},v=e(26),O=e(45),j=e(42),w=e.n(j),k=e(35),S=e.n(k),y=e(36),T=e.n(y),A=e(37),_=e.n(A),I=e(38),R=e.n(I),N=e(1),M=e(2);function U(){var t=Object(N.a)(["\n\t {\n\t\tmargin-top: auto;\n\t\twidth: 200px;\n\t}\n"]);return U=function(){return t},t}var G=M.a.img(U()),P=function(t){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(b.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){var t=this.props,n=t.id,e=t.image,r=t.onClickHandler;return i.a.createElement(G,{src:e,alt:"shell",onClick:function(){return r(n)}})}}]),n}(i.a.Component),C={position:"absolute",display:"flex",flexWrap:"wrap",width:"100%",flexDirection:"row",bottom:"80px",justifyContent:"center",zIndex:100},W=function(t,n,e){var r=t.find(function(t){return t.id===n});return r&&(r.image=e),Object(v.a)(t)},D=function(){var t=Object(u.b)(),n=Object(u.c)(function(t){var n=t.gameReducer,e=t.animationReducer;return[n.numberOfShells,n.pearlIndex,n.canUserGuess,n.isPlaying,e.shouldAnimate]}),e=Object(x.a)(n,5),r=e[0],a=e[1],c=e[2],l=e[3],s=e[4],p=Object(o.useState)(function(t){for(var n=[],e=0;e<t;e++)n.push({id:e,image:S.a});return n}(r)),d=Object(x.a)(p,2),b=d[0],f=d[1],j=function(n){var e;c&&(f(function(t){var e=a===n?_.a:T.a;return W(t,n,e)}),t((e=n,function(){var t=Object(h.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(g(e));case 2:return t.next=4,n(E());case 4:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}())))};return Object(o.useEffect)(function(){var n=0;if(s){f(function(t){return W(t,a,S.a)});var e=setInterval(function(){f(w()(b)),++n>5&&(t({type:"SET_ANIMATION_STOP"}),clearInterval(e))},500)}},[s]),Object(o.useEffect)(function(){l&&f(function(t){return t.map(function(t){return t.image=t.id===a?_.a:S.a}),Object(v.a)(t)})},[l,a]),i.a.createElement(O.a,{style:C,staggerDurationBy:"30",duration:500},b.map(function(t){return i.a.createElement(P,Object.assign({key:t.id,onClickHandler:j},t))}))},z=(e(88),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"sol"}),i.a.createElement("div",{class:"cerros"},i.a.createElement("span",{class:"c1"}),i.a.createElement("span",{class:"c2"}),i.a.createElement("span",{class:"c3"})),i.a.createElement("div",{class:"sea"}),i.a.createElement("div",{class:"lineas"},i.a.createElement("span",{class:"l1"}),i.a.createElement("span",{class:"l2"}),i.a.createElement("span",{class:"l3"}),i.a.createElement("span",{class:"l4"}),i.a.createElement("span",{class:"l5"}),i.a.createElement("span",{class:"l6"}),i.a.createElement("span",{class:"l7"}),i.a.createElement("span",{class:"l8"})),i.a.createElement("div",{class:"sol3"}))});function L(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\tborder-radius: 0px 70px 0px 70px;\n\t\tbackground: #ddd;\n\t\tmargin: 90px 221px;\n\t\ttransform: rotate(-12deg);\n\n\t\t::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 0px 70px 0px 70px;\n\t\t\tbackground: #ddd;\n\t\t\tmargin: 0px 3px;\n\t\t\ttransform: rotate(50deg);\n\t\t}\n\t\t::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 0px 70px 0px 70px;\n\t\t\tbackground: #ddd;\n\t\t\tmargin: 12px -3px;\n\t\t\ttransform: rotate(-30deg);\n\t\t}\n\t}\n"]);return L=function(){return t},t}function B(){var t=Object(N.a)(["\n\t {\n\t\tbackground: #ccc;\n\t\tmargin: 80px 241px;\n\t}\n"]);return B=function(){return t},t}function F(){var t=Object(N.a)(["\n\t {\n\t\tbackground: #ddd;\n\t\tmargin: 80px 251px;\n\t}\n"]);return F=function(){return t},t}function H(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 30px;\n\t\theight: 50px;\n\t\tborder-radius: 0px 112px 0px 112px;\n\t\ttransform-origin: center bottom;\n\t\tanimation: rotar 3s alternate infinite;\n\t}\n"]);return H=function(){return t},t}function J(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 65px;\n\t\theight: 150px;\n\t\tborder-bottom: 12px solid #ddd;\n\t\tborder-left: 12px solid transparent;\n\t\tborder-right: 12px solid transparent;\n\t\tborder-radius: 90px / 100px;\n\t\tmargin: -30px 231px;\n\n\t\t::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 55px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 0 0 70px 70px;\n\t\t\tbackground: #ddd;\n\t\t\tmargin: 150px 0;\n\t\t}\n\t}\n"]);return J=function(){return t},t}function X(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder-top: 5px solid transparent;\n\t\tborder-left: 7px solid #ffae44;\n\t\tborder-bottom: 7px solid transparent;\n\t\ttransform: rotate(45deg);\n\t\tmargin: 17px 21px;\n\t}\n"]);return X=function(){return t},t}function Y(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 5px;\n\t\theight: 5px;\n\t\tborder-radius: 100%;\n\t\tbackground: black;\n\t\tmargin: 12px 14px;\n\t}\n"]);return Y=function(){return t},t}function q(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t\tborder-radius: 90px 90px 0;\n\t\tbackground: #ddd;\n\t\ttransform: rotate(-45deg);\n\t\tmargin: 102px 291px;\n\t}\n"]);return q=function(){return t},t}function K(){var t=Object(N.a)(["\n\t {\n\t\tmargin: -300px -300px;\n\t\tanimation: volar 12s linear infinite;\n\n\t\t.bird3 {\n\t\t\tposition: absolute;\n\t\t\ttransform: scale(0.4);\n\t\t}\n\t}\n"]);return K=function(){return t},t}function Q(){var t=Object(N.a)(["\n\t {\n\t\tmargin: -291px -330px;\n\t\tanimation: volar3 12s linear infinite;\n\n\t\t.bird7 {\n\t\t\tposition: absolute;\n\t\t\ttransform: scale(0.3);\n\t\t}\n\t}\n"]);return Q=function(){return t},t}function V(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t}\n"]);return V=function(){return t},t}function Z(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 300px;\n\t\theight: 152px;\n\t\tborder-radius: 300px 300px 0 0;\n\t\tbackground: #ddc58b;\n\t\tmargin: -21px 212px;\n\n\t\t::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 300px;\n\t\t\theight: 152px;\n\t\t\tborder-radius: 300px 300px 0 0;\n\t\t\tbackground: #ddc58b;\n\t\t\tmargin: 9px 152px;\n\t\t}\n\t\t::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 300px;\n\t\t\theight: 152px;\n\t\t\tborder-radius: 300px 300px 0 0;\n\t\t\tbackground: #ddc58b;\n\t\t\tmargin: 3px 261px;\n\t\t}\n\n\t\t.arenas {\n\t\t\tposition: absolute;\n\t\t\twidth: 300px;\n\t\t\theight: 152px;\n\t\t\tborder-radius: 300px 300px 0 0;\n\t\t\tbackground: #ddc58b;\n\t\t\tmargin: 7px 412px;\n\t\t}\n\t}\n"]);return Z=function(){return t},t}function $(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 320px;\n\t\tbackground: #ddc58b;\n\t\tmargin: 380px 0px;\n\n\t\t::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 300px;\n\t\t\theight: 152px;\n\t\t\tborder-radius: 300px 300px 0 0;\n\t\t\tbackground: #ddc58b;\n\t\t\tmargin: -21px -112px;\n\t\t}\n\n\t\t::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 300px;\n\t\t\theight: 152px;\n\t\t\tborder-radius: 300px 300px 0 0;\n\t\t\tbackground: #ddc58b;\n\t\t\tmargin: -12px -10px;\n\t\t\tz-index: 0;\n\t\t}\n\t}\n"]);return $=function(){return t},t}function tt(){var t=Object(N.a)(["\n\t {\n\t\tposition: relative;\n\t\twidth: 800px;\n\t\theight: 700px;\n\t\tbackground: #b3d1f2;\n\t\t// margin: auto;\n\t\toverflow: hidden;\n\t}\n"]);return tt=function(){return t},t}var nt=M.a.div(tt()),et=M.a.div($()),rt=M.a.div(Z()),at=M.a.div(V()),ot=Object(M.a)(at)(Q()),it=Object(M.a)(at)(K()),ct=M.a.div(q()),ut=M.a.div(Y()),lt=M.a.div(X()),st=M.a.div(J()),pt=M.a.div(H()),dt=Object(M.a)(pt)(F()),bt=Object(M.a)(pt)(B()),xt=M.a.div(L()),ft=function(t){var n=t.children;return i.a.createElement(et,null,i.a.createElement(rt,null),n)},mt=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ot,null,i.a.createElement("div",{className:"bird7"},i.a.createElement(ct,null,i.a.createElement(ut,null),i.a.createElement(lt,null)),i.a.createElement(bt,null),i.a.createElement(st,null),i.a.createElement(dt,null),i.a.createElement(xt,null))),i.a.createElement(it,null,i.a.createElement("div",{className:"bird3"},i.a.createElement(ct,null,i.a.createElement(ut,null),i.a.createElement(lt,null)),i.a.createElement(bt,null),i.a.createElement(st,null),i.a.createElement(dt,null),i.a.createElement(xt,null))))};function ht(){var t=Object(N.a)(["\n\t {\n\t\tposition: absolute;\n\t\tright: 40%;\n\t\ttop: 38%;\n\t\tz-index: 1000;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t}\n\n\th2 {\n\t\tcolor: white;\n\t\ttext-shadow: 1px 1px #5d5b5bd6;\n\t}\n\n\tbutton {\n\t\tbackground-color: #4caf50; /* Green */\n\t\tborder: none;\n\t\tcolor: white;\n\t\tpadding: 15px 32px;\n\t\ttext-align: center;\n\t\ttext-decoration: none;\n\t\tdisplay: inline-block;\n\t\tfont-size: 16px;\n\t\twidth: 150px;\n\t}\n\n\tbutton:disabled {\n\t\tbackground-color: #d8d5d5;\n\t\tcolor: #666666ab;\n\t}\n"]);return ht=function(){return t},t}function gt(){var t=Object(N.a)(["\n\t {\n\t\twidth: 300px;\n\t\tposition: absolute;\n\t\tright: 15%;\n\t}\n"]);return gt=function(){return t},t}var Et=M.a.img(gt()),vt=M.a.div(ht()),Ot=function(){var t=Object(u.b)(),n=Object(u.c)(function(t){var n=t.gameReducer;return[n.hasUserWon,n.isPlaying]}),e=Object(x.a)(n,2),r=e[0],a=e[1],c=Object(o.useState)(!1),l=Object(x.a)(c,2),s=l[0],p=l[1];return Object(o.useEffect)(function(){t({type:"SET_PEARL_INDEX"}),p(!1)},[a]),i.a.createElement(nt,null,i.a.createElement(Et,{src:R.a}),i.a.createElement(z,null),i.a.createElement(ft,null,i.a.createElement(D,null),i.a.createElement(mt,null)),i.a.createElement(vt,null,i.a.createElement("h2",null,r&&"You win!"),a?i.a.createElement("button",{disabled:s,onClick:function(){p(!0),t({type:"SET_ANIMATION_START"})}},"Start Game"):i.a.createElement("button",{onClick:function(){return t({type:"RESET"})}},"Reset")))},jt=function(t){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(b.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement(Ot,null)}}]),n}(o.Component),wt=e(3),kt=e(24),St=e(25),yt=e(46),Tt=e(13),At={numberOfShells:3,hasUserWon:!1,isPlaying:!0,canUserGuess:!1},_t=Object(Tt.a)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,n=arguments.length>1?arguments[1]:void 0,e=n.type,r=n.payload;switch(e){case"SET_USERS_ANSWER":t.answer=r.chosenShell;break;case"SET_PEARL_INDEX":t.pearlIndex=Math.floor(Math.random()*t.numberOfShells);break;case"GET_GAME_RESULT":var a=t.answer===t.pearlIndex;t.hasUserWon=a,t.isPlaying=!a,t.canUserGuess=!a;break;case"SET_ANIMATION_STOP":t.canUserGuess=!0;break;case"RESET":return Object(yt.a)({},At,{pearlIndex:t.pearlIndex});default:return t}}),It={shouldAnimate:!1},Rt=Object(Tt.a)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_ANIMATION_START":t.shouldAnimate=!0;break;case"SET_ANIMATION_STOP":t.shouldAnimate=!1;break;default:return t}}),Nt=Object(wt.combineReducers)({gameReducer:_t,animationReducer:Rt}),Mt=function(t){return function(n,e,r){return t(function(t,e){var r,a=performance.now(),o=n(t,e),i=performance.now(),c=(r=i-a,Math.round(100*r)/100);return console.log("reducer process time:",c),o},e,r)}},Ut=function(t){return function(n){return function(e){console.group(e.type),console.info("dispatching",e);var r=n(e);return console.log("next state",t.getState()),console.groupEnd(),r}}};var Gt=function(t){var n=[a,kt.a],e=[wt.applyMiddleware.apply(void 0,n),r];return St.composeWithDevTools.apply(void 0,e),Object(wt.createStore)(Nt,t,Object(St.composeWithDevTools)(Object(wt.applyMiddleware)(kt.a)))}();Object(c.render)(i.a.createElement(u.a,{store:Gt},i.a.createElement(jt,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7855b9fa.chunk.js.map