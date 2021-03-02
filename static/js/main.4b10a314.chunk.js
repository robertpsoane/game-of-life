(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{13:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n.n(r),i=n(9),a=n.n(i),o=(n(18),n(3)),c=n(4),d=n(6),h=n(5),l=(n(19),n(20),n(1)),u=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={id:t.props.id,divId:"cell:"+t.props.id[0]+","+t.props.id[1]},t.styling={backgroundColor:"black"},t}return Object(c.a)(n,[{key:"contextMenu",value:function(){return!1}},{key:"render",value:function(){var t=this,e=this.props.onMouseDown,n=this.props.onMouseEnter,r=this.props.onMouseUp,s={backgroundColor:"dead"===this.props.life?"black":"white"};return Object(l.jsx)("div",{id:this.state.divId,className:"cell",style:s,onMouseDown:function(){return e(t.state.id[0],t.state.id[1])},onMouseEnter:function(){return n(t.state.id[0],t.state.id[1])},onMouseUp:function(){return r()},onContextMenu:function(t){return t.preventDefault()}})}}]),n}(r.Component),p=(n(13),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={showAbout:!1},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{type:"button",class:"btn btn-secondary",style:{width:100},onClick:this.props.reset,children:"Reset"})})}}]),n}(r.Component)),j=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{class:"btn-group",role:"group",children:[Object(l.jsx)("div",{type:"button",class:"btn btn-success",style:{width:100},onClick:this.props.start,children:"Start"}),Object(l.jsx)("div",{type:"button",class:"btn btn-danger",style:{width:100,backgroundColor:"dark-red"},onClick:this.props.pause,children:"Stop"})]})}}]),n}(r.Component),b=(n(22),n(8)),m=(n(12),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.show,e=this.props.hide;return Object(l.jsxs)(b.a,{show:t,onHide:e,centered:!0,children:[Object(l.jsx)(b.a.Header,{children:Object(l.jsx)(b.a.Title,{children:"About"})}),Object(l.jsxs)(b.a.Body,{children:[Object(l.jsxs)("p",{className:"mini-margin",children:["Conway's Game of Life (aka ",Object(l.jsx)("em",{children:"Life"}),") was created by"," ",Object(l.jsxs)("a",{href:"https://en.wikipedia.org/wiki/John_Horton_Conway",children:[" ","John Conway"]}),". The idea is to simulate life in a 2d grid with a set of simple rules:",Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:"A live cell with less than 2 living neighbours dies."}),Object(l.jsx)("li",{children:"A live cell with 2 or 3 live neighbours survives."}),Object(l.jsx)("li",{children:"A live cell with 4+ live neighbours dies."}),Object(l.jsx)("li",{children:"A dead cell with 3 live neighbours comes back to life. "})]})]}),Object(l.jsxs)("div",{className:"mini-margin",children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:["To find out more about the game, see the"," ",Object(l.jsx)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",children:"Wikipedia Page"}),"."]}),Object(l.jsxs)("p",{children:["This was produced by Robert Soane to get exposure to React JS. You can find the code on my"," ",Object(l.jsx)("a",{href:"https://github.com/robertpsoane/game-of-life",children:"GitHub"}),". To see more of my work, checkout"," ",Object(l.jsx)("a",{href:"https://robertpsoane.github.io",children:"robertsoane.me"}),"."]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:["The original simpler version of this React app can be found"," ",Object(l.jsx)("a",{href:"https://robertpsoane.github.io/game-of-life-v1/",children:"here"}),"."]})]})]}),Object(l.jsx)(b.a.Footer,{children:Object(l.jsx)("button",{type:"button",class:"btn btn-primary",style:{width:100},onClick:e,children:"Close"})})]})}}]),n}(r.Component)),g=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.show,e=this.props.hide;return Object(l.jsxs)(b.a,{show:t,onHide:e,centered:!0,children:[Object(l.jsx)(b.a.Header,{children:Object(l.jsx)(b.a.Title,{children:"Instructions"})}),Object(l.jsxs)(b.a.Body,{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Click on the cells in the grid to switch their state."}),Object(l.jsx)("li",{children:"Black cells represent dead cells, and white cells represent alive cells"}),Object(l.jsxs)("li",{children:["Click ",Object(l.jsx)("code",{children:"Start"})," to start the game, ",Object(l.jsx)("code",{children:"Pause"})," to stop the game, and ",Object(l.jsx)("code",{children:"Reset"})," to reset the board"," "]}),Object(l.jsxs)("li",{children:["The speed of the animation can be changed in ",Object(l.jsx)("code",{children:"Settings"}),"."]}),Object(l.jsxs)("li",{children:["Interesting well-known patterns can be loaded from the"," ",Object(l.jsx)("code",{children:"Patterns"})," tab."]})]}),Object(l.jsx)("div",{class:"alert alert-warning",role:"alert",children:"These instructions can be brought up again from the Settings menu."})]}),Object(l.jsx)(b.a.Footer,{children:Object(l.jsx)("button",{type:"button",class:"btn btn-primary",style:{width:100},onClick:e,children:"Ok"})})]})}}]),n}(r.Component),O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={showAbout:!1,showHowTo:!0},t}return Object(c.a)(n,[{key:"showAbout",value:function(){this.setState({showAbout:!0})}},{key:"hideAbout",value:function(){this.setState({showAbout:!1})}},{key:"showHowTo",value:function(){this.setState({showHowTo:!0})}},{key:"hideHowTo",value:function(){this.setState({showHowTo:!1})}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsx)("div",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Settings"}),Object(l.jsxs)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenuButton",children:[Object(l.jsxs)("div",{className:"dropdown-item",children:[Object(l.jsx)("label",{for:"time-out-slider",class:"form-label",children:"Speed"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"range",class:"form-range",id:"time-out-slider",min:"0",max:"799",step:"1",defaultValue:"400",onChange:this.props.setTime})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("a",{type:"button",class:"dropdown-item",onClick:function(){t.showHowTo()},children:"Help"}),Object(l.jsx)("a",{type:"button",class:"dropdown-item",onClick:function(){t.showAbout()},children:"About"})]}),Object(l.jsx)(m,{show:this.state.showAbout,hide:function(){t.hideAbout()}}),Object(l.jsx)(g,{show:this.state.showHowTo,hide:function(){t.hideHowTo()}})]})}}]),n}(r.Component),f=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props.patterns[this.props.pattern_arg].min_rows,n=this.props.patterns[this.props.pattern_arg].min_cols,r=this.props.grid_dims[0],s=this.props.grid_dims[1]>=e&&r>=n?"dropdown-item":"dropdown-item disabled";return Object(l.jsx)("a",{type:"button",className:s,onClick:function(){t.props.patternFunc(t.props.pattern_arg)},children:this.props.text})}}]),n}(r.Component),v=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.pattern_grid,e=this.props.grid_dims;return Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsx)("div",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Patterns"}),Object(l.jsxs)("div",{className:"dropdown-menu dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(l.jsx)("h6",{class:"dropdown-header",children:"Oscillators"}),Object(l.jsx)(f,{text:"Blinker",pattern_arg:"blinker",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)(f,{text:"Beacon",pattern_arg:"beacon",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)(f,{text:"Pulsar",pattern_arg:"pulsar",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)(f,{text:"Penta-decathlon",pattern_arg:"pentadecathlon",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)("hr",{}),Object(l.jsx)("h6",{class:"dropdown-header",children:"Spaceships"}),Object(l.jsx)(f,{text:"Glider",pattern_arg:"glider",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)(f,{text:"Lightweight spaceship",pattern_arg:"lwss",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)(f,{text:"Middleweight spaceship",pattern_arg:"mwss",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)(f,{text:"Heavyweight spaceship",pattern_arg:"hwss",grid_dims:e,patterns:t,patternFunc:this.props.pattern}),Object(l.jsx)("hr",{}),Object(l.jsx)("h6",{class:"dropdown-header",children:"Guns"}),Object(l.jsx)(f,{text:"Gosper Glider Gun",grid_dims:e,pattern_arg:"gosper",patterns:t,patternFunc:this.props.pattern})]})]})}}]),n}(r.Component),w=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("nav",{id:"navBar",className:"navbar  navbar-dark bg-primary",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("span",{class:"navbar-brand mb-0 h2",children:"Game of Life"}),Object(l.jsx)(j,{start:this.props.start,pause:this.props.pause}),Object(l.jsx)(p,{reset:this.props.reset}),Object(l.jsx)(v,{pattern_grid:this.props.pattern_grid,pattern:this.props.pattern,grid_dims:this.props.grid_dims}),Object(l.jsx)(O,{setTime:this.props.timeOut})]})})}}]),n}(r.Component),x=(n(27),n(10)),y=n.n(x),k={gosper:{grid:[[0,-6],[-1,-5],[-1,-6],[-1,-7],[-2,-4],[-2,-8],[-3,-6],[-4,-3],[-5,-3],[-6,-4],[-7,-5],[-7,-6],[-7,-7],[-4,-9],[-5,-9],[-6,-8],[-16,-6],[-16,-7],[-17,-6],[-17,-7],[3,-7],[3,-8],[3,-9],[4,-7],[4,-8],[4,-9],[5,-6],[5,-10],[7,-5],[7,-6],[7,-10],[7,-11],[17,-8],[17,-9],[18,-8],[18,-9]],min_rows:22,min_cols:36},pulsar:{grid:[[-1,2],[-1,3],[-1,4],[-1,-2],[-1,-3],[-1,-4],[1,2],[1,3],[1,4],[1,-2],[1,-3],[1,-4],[2,1],[3,1],[4,1],[-2,1],[-3,1],[-4,1],[2,-1],[3,-1],[4,-1],[-2,-1],[-3,-1],[-4,-1],[2,6],[3,6],[4,6],[-2,6],[-3,6],[-4,6],[2,-6],[3,-6],[4,-6],[-2,-6],[-3,-6],[-4,-6],[-6,2],[-6,3],[-6,4],[-6,-2],[-6,-3],[-6,-4],[6,2],[6,3],[6,4],[6,-2],[6,-3],[6,-4]],min_rows:8,min_cols:8},blinker:{grid:[[1,0],[0,0],[-1,0]],min_rows:6,min_cols:6},beacon:{grid:[[0,0],[-1,0],[-1,-1],[0,-1],[1,1],[1,2],[2,1],[2,2]],min_rows:6,min_cols:6},pentadecathlon:{grid:[[0,0],[0,1],[0,2],[0,4],[0,5],[0,-1],[0,-3],[0,-4],[1,3],[1,-2],[-1,3],[-1,-2]],min_rows:16,min_cols:10},glider:{grid:[[-1,1],[0,1],[1,1],[1,0],[0,-1]],min_rows:5,min_cols:5},lwss:{grid:[[-2,-1],[-2,1],[-1,2],[0,2],[1,2],[1,-1],[2,0],[2,1],[2,2]],min_rows:7,min_cols:6},mwss:{grid:[[-3,0],[-3,1],[-3,2],[-2,-1],[-2,2],[-1,2],[0,-2],[0,2],[1,2],[2,1],[2,-1]],min_rows:7,min_cols:8},hwss:{grid:[[-3,0],[-3,1],[-3,2],[-2,-1],[-2,2],[-1,2],[0,-2],[0,2],[1,-2],[1,2],[2,2],[3,1],[3,-1]],min_rows:7,min_cols:9},test:{grid:[[0,0]],min_rows:1,min_cols:1}},_=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={grid:[],mouseDown:!1,running:!1,timeOut:400,neighbours:[[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]]},t.makeGrid=function(t,e){for(var n=[],r=0;r<e;r++){for(var s=[],i=0;i<t;i++)s.push([0]);n.push(s)}return n},t}return Object(c.a)(n,[{key:"getWidthHeight",value:function(){var t,e=y()("#navBar").height(),n=Math.max(y()(window).height());return t=Math.floor((n-e)/25)-1,[Math.floor(Math.max(y()(document).width(),y()(window).width())/25)-1,t]}},{key:"componentDidMount",value:function(){var t=this.getWidthHeight(),e=this.makeGrid(t[0],t[1]);this.setState({grid:e,mouseDown:!1,running:!1,dims:t})}},{key:"handleMouseDown",value:function(t,e){this.setState({mouseDown:!0,grid:this.changeCell(t,e)})}},{key:"handleMouseUp",value:function(){this.setState({mouseDown:!1})}},{key:"setTimeOut",value:function(){var t=800-y()("#time-out-slider").val();this.setState({timeOut:t})}},{key:"handleMouseEnter",value:function(t,e){this.state.mouseDown&&this.handleMouseDown(t,e)}},{key:"handlePattern",value:function(t){var e=k[t].grid,n=this.getMidPoint(),r=this.state.grid;e.forEach((function(t){var e=n[1],s=n[0],i=t[1],a=t[0];r[e+i][s+a][0]=1})),this.setState({grid:r})}},{key:"getMidPoint",value:function(){var t=this.state.dims;return[Math.floor(t[0]/2),Math.floor(t[1]/2)]}},{key:"changeCell",value:function(t,e){var n=this.state.grid;return 0===n[t][e][0]?n[t][e][0]=1:n[t][e][0]=0,n}},{key:"startGame",value:function(){var t=this;this.setState({running:!0}),this.timeoutHandler=window.setTimeout((function(){t.runStep()}),this.state.timeOut)}},{key:"pauseGame",value:function(){this.setState({running:!1})}},{key:"countLivingNeighbours",value:function(t,e,n){for(var r=this.state.dims,s=this.state.neighbours,i=0,a=0;a<8;a++){var o=s[a],c=e+o[0],d=n+o[1];c>0&&d>0&&c<r[1]&&d<r[0]&&1===t[c][d][0]&&i++}return i}},{key:"runStep",value:function(){var t=this;if(this.state.running){for(var e=this.state.dims,n=this.state.grid,r=[],s=0;s<e[1];s++){for(var i=[],a=0;a<e[0];a++)if(0===n[s][a][0])3===this.countLivingNeighbours(n,s,a)?i.push([1]):i.push([0]);else{var o=this.countLivingNeighbours(n,s,a);2===o|3===o?i.push([1]):i.push([0])}r.push(i)}this.setState({grid:r}),this.timeoutHandler=window.setTimeout((function(){console.log(t.state.timeOut),t.runStep()}),this.state.timeOut)}}},{key:"render",value:function(){var t,e=this,n=this.state.grid;return t="undefined"!==typeof this.state.dims?this.state.dims:this.getWidthHeight(),Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:Object(l.jsx)(w,{grid_dims:t,pattern:function(t){return e.handlePattern(t)},pattern_grid:k,reset:function(){return e.componentDidMount()},start:function(){return e.startGame()},pause:function(){return e.pauseGame()},timeOut:function(){return e.setTimeOut()}})}),Object(l.jsx)("div",{className:"board",children:n.map((function(t,n){return Object(l.jsx)("div",{className:"cellrow",children:t.map((function(t,r){var s=[n,r],i=1===e.state.grid[n][r][0]?"alive":"dead";return Object(l.jsx)(u,{id:s,life:i,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(t,n){return e.handleMouseUp()}},s)}))},n)}))})]})}}]),n}(r.Component),C=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(_,{})})}}]),n}(r.Component),M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),s(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),M()}},[[28,1,2]]]);
//# sourceMappingURL=main.4b10a314.chunk.js.map