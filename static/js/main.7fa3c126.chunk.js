(this.webpackJsonpstrfactory=this.webpackJsonpstrfactory||[]).push([[0],{40:function(t,e,a){},41:function(t,e,a){},61:function(t,e,a){"use strict";a.r(e);var s,i,c,l,n,r,d,h,o,j=a(0),u=a(1),b=a.n(u),x=a(33),g=a.n(x),p=(a(40),a(3)),O=a(5),f=a(7),m=a(6),y=(a.p,a(41),a(8)),v=a(4),S=a.n(v),k=a(9),W=a.n(k),w=a(2),N=a(12),C=a(10),G=(a(43),s=w.action.bound,i=w.action.bound,c=w.action.bound,l=w.action.bound,n=function(){function t(e){Object(p.a)(this,t),this.rootStore=void 0,Object(N.a)(this,"username",r,this),Object(N.a)(this,"data",d,this),Object(N.a)(this,"nextGoal",h,this),Object(N.a)(this,"nextGoalInt",o,this),this.rootStore=e}return Object(O.a)(t,[{key:"setUsername",value:function(t){this.username=t}},{key:"setData",value:function(t){this.data=t}},{key:"setNextGoal",value:function(t){this.nextGoal=t}},{key:"setNextGoalInt",value:function(t){this.nextGoalInt=t}}]),t}(),r=Object(C.a)(n.prototype,"username",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"User"}}),d=Object(C.a)(n.prototype,"data",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"undefined"!==typeof S.a.get("data")?JSON.parse(S.a.get("data")):[]}}),h=Object(C.a)(n.prototype,"nextGoal",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"undefined"!==typeof S.a.get("nextGoal")?JSON.parse(S.a.get("nextGoal")):{}}}),o=Object(C.a)(n.prototype,"nextGoalInt",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"undefined"!==typeof S.a.get("next")?JSON.parse(S.a.get("next")):{}}}),Object(C.a)(n.prototype,"setUsername",[s],Object.getOwnPropertyDescriptor(n.prototype,"setUsername"),n.prototype),Object(C.a)(n.prototype,"setData",[i],Object.getOwnPropertyDescriptor(n.prototype,"setData"),n.prototype),Object(C.a)(n.prototype,"setNextGoal",[c],Object.getOwnPropertyDescriptor(n.prototype,"setNextGoal"),n.prototype),Object(C.a)(n.prototype,"setNextGoalInt",[l],Object.getOwnPropertyDescriptor(n.prototype,"setNextGoalInt"),n.prototype),n),R=a(34);Object(w.configure)({enforceActions:"observed"});Object(R.create)({storage:localStorage,jsonify:!0});var q=new function t(){Object(p.a)(this,t),this.generalStore=void 0,this.generalStore=new G(this)},I=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(t,s){var i;return Object(p.a)(this,a),(i=e.call(this,t)).state={showGraph:!1,reps:0,activeQuestion:"squat",squat:"",bench:"",deadlift:"",submitted:q.generalStore.data.length>=1,loggingMax:q.generalStore.data.length<1,squatReps:q.generalStore.data.length>=1?0:1,deadliftReps:q.generalStore.data.length>=1?0:1,benchReps:q.generalStore.data.length>=1?0:1},i}return Object(O.a)(a,[{key:"calculateNextGoal",value:function(t,e){return e<2?"".concat(t," x 1+"):e>=2&&e<4?"".concat(t+2.5," x 1+"):e>=4&&e<=5?"".concat(t+3," x 1+"):e>5?"".concat(t+6.8," x 1+"):void 0}},{key:"calculateNextGoalInt",value:function(t,e){return e<2?t:e>=2&&e<4?t+2.5:e>=4&&e<=5?t+3:e>5?t+6.8:void 0}},{key:"handleSurveyChangeReps",value:function(t,e){"squat"===e&&this.setState({reps:t.target.value,squatReps:t.target.value}),"bench"===e&&this.setState({reps:t.target.value,benchReps:t.target.value}),"deadlift"===e&&this.setState({reps:t.target.value,deadliftReps:t.target.value})}},{key:"handleSurveyChangeBench",value:function(t){this.setState({bench:t.target.value})}},{key:"handleSurveyChangeSquat",value:function(t){this.setState({squat:t.target.value})}},{key:"handleSurveyChangeDeadlift",value:function(t){this.setState({deadlift:t.target.value})}},{key:"submitDataToCookies",value:function(t){var e=this.calculateNextGoal(parseFloat(this.state.squat),this.state.squatReps),a=this.calculateNextGoal(parseFloat(this.state.bench),this.state.benchReps),s=this.calculateNextGoal(parseFloat(this.state.deadlift),this.state.deadliftReps),i=this.calculateNextGoalInt(parseFloat(this.state.squat),this.state.squatReps),c=this.calculateNextGoalInt(parseFloat(this.state.bench),this.state.benchReps),l={squat:e,deadlift:s,bench:a},n={squat:i,deadlift:this.calculateNextGoalInt(parseFloat(this.state.deadlift),this.state.deadliftReps),bench:c};S.a.set("nextGoal",l);var r=S.a.get("data");if(console.log("prevData",typeof r,r,t),"undefined"!==typeof r){var d=JSON.parse(r);d.length;d.push({data:{squat:t.squat,squatReps:t.squatReps,deadlift:t.deadlift,deadliftReps:t.deadliftReps,bench:t.bench,benchReps:t.benchReps},timestamp:W()().format("LL")}),q.generalStore.setData(d),q.generalStore.setNextGoal(l),q.generalStore.setNextGoalInt(n),S.a.set("next",n),S.a.set("data",d)}else S.a.set("data",[{data:t,timestamp:W()().format("LL")}]),S.a.set("next",n),q.generalStore.setData([{data:t,timestamp:W()().format("LL")}]),q.generalStore.setNextGoal(l),q.generalStore.setNextGoalInt(n),this.setState({submitted:!0})}},{key:"removeData",value:function(){S.a.remove("data"),S.a.remove("nextGoal"),S.a.remove("next"),window.location.reload()}},{key:"renderActiveQuestion",value:function(){var t=this;switch(this.state.activeQuestion){case"squat":return Object(j.jsxs)("div",{className:"fadedshort",style:{width:"100%",display:"block",marginTop:50},children:[Object(j.jsx)("input",{autoFocus:!0,max:400,min:0,style:{display:"inline-block",width:200},type:"number",name:"squat",value:this.state.squat,placeholder:"Squat",className:"signup-form",onChange:function(e){t.handleSurveyChangeSquat(e)},onKeyPress:function(e){"Enter"===e.key&&t.state.squatReps&&t.setState({activeQuestion:"bench",reps:0})}}),Object(j.jsx)("input",{max:400,min:0,style:{display:"inline-block",width:80},type:"number",name:"reps",disabled:this.state.loggingMax&&this.state.squatReps,value:this.state.reps||this.state.squatReps,placeholder:"x reps",className:"signup-form",onChange:function(e){t.handleSurveyChangeReps(e,"squat")},onKeyPress:function(e){"Enter"===e.key&&(document.activeElement.blur(),t.setState({activeQuestion:"bench",reps:0}))}})]});case"bench":return Object(j.jsxs)("div",{style:{width:"100%",display:"block",marginTop:50},children:[Object(j.jsx)("input",{autoFocus:!0,max:400,min:0,style:{display:"inline-block",width:200},type:"number",name:"bench",value:this.state.bench,placeholder:"Bench",className:"signup-form fadedshort",onChange:function(e){t.handleSurveyChangeBench(e)},onKeyPress:function(e){"Enter"===e.key&&t.state.benchReps&&t.setState({activeQuestion:"deadlift",reps:0})}}),Object(j.jsx)("input",{max:400,min:0,style:{display:"inline-block",width:80},type:"number",name:"reps",disabled:this.state.loggingMax&&this.state.benchReps,value:this.state.reps||this.state.benchReps,placeholder:"x reps",className:"signup-form fadedshort",onChange:function(e){t.handleSurveyChangeReps(e,"bench")},onKeyPress:function(e){"Enter"===e.key&&(t.setState({activeQuestion:"deadlift",reps:0}),document.activeElement.blur())}})]});case"deadlift":return Object(j.jsxs)("div",{className:"fadedshort",style:{width:"100%",display:"block",marginTop:50},children:[Object(j.jsx)("input",{autoFocus:!0,max:400,min:0,style:{display:"inline-block",width:200},type:"number",name:"deadlift",value:this.state.deadlift,placeholder:"Deadlift",className:"signup-form fadedshort",onChange:function(e){t.handleSurveyChangeDeadlift(e)},onKeyPress:function(e){"Enter"===e.key&&t.state.deadliftReps&&(t.setState({activeQuestion:null,reps:0}),t.submitDataToCookies(t.state))}}),Object(j.jsx)("input",{max:400,min:0,style:{display:"inline-block",width:80},type:"number",name:"reps",disabled:this.state.loggingMax&&this.state.deadliftReps,value:this.state.reps||this.state.deadliftReps,placeholder:"x reps",className:"signup-form fadedshort",onChange:function(e){t.handleSurveyChangeReps(e,"deadlift")},onKeyPress:function(e){"Enter"===e.key&&(t.setState({activeQuestion:null,reps:0}),t.submitDataToCookies(t.state))}})]});default:return 1==this.state.squatReps&&1==this.state.benchReps&&1==this.state.deadliftReps&&(this.state.squat&&(j.Fragment,this.state.squat),this.state.squat&&(j.Fragment,Math.ceil(.9*this.state.squat)),this.state.bench&&(j.Fragment,this.state.bench),this.state.bench&&(j.Fragment,Math.ceil(.9*this.state.bench)),this.state.deadlift&&(j.Fragment,this.state.deadlift),this.state.deadlift&&(j.Fragment,Math.ceil(.9*this.state.deadlift))),Object(j.jsxs)("div",{className:"fadedshort",children:[Object(j.jsx)("h3",{style:{color:"pink"},children:"Your work has been logged. Thank you."}),Object(j.jsx)("br",{})]})}}},{key:"render",value:function(){var t=this;return console.log(q.generalStore.data),Object(j.jsx)("div",{style:{height:"100%",width:"25%",backgroundColor:"transparent"},className:"fadedshort",children:Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsxs)("div",{style:{width:400,margin:0,height:550,backgroundColor:"#f7e1c7",borderRadius:12,marginBottom:50,border:"2px solid #fff"},children:[Object(j.jsx)("p",{style:{height:40,color:"#fff"},children:this.state.submitted?"Log today's training session":"Submit Your One Rep Max"}),q.generalStore.nextGoal.squat?Object(j.jsxs)("div",{style:{color:"white"},children:[Object(j.jsx)("h3",{style:{color:"white",margin:0},children:1===q.generalStore.data.length?"Your programme has been generated below":"Try for these numbers next week"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"S"}),q.generalStore.nextGoal.squat,"  ",Object(j.jsx)("b",{style:{marginLeft:10},children:"B"}),q.generalStore.nextGoal.bench," ",Object(j.jsx)("b",{style:{marginLeft:10},children:"D"}),q.generalStore.nextGoal.deadlift]})]}):null,Object(j.jsx)("div",{className:"scrollbar",style:{maxHeight:90,overflowY:"auto",overflowX:"hidden",maxWidth:399},children:q.generalStore.data.length>=1?Object(j.jsxs)("div",{children:[q.generalStore.data.map((function(t){return console.log("...",t),Object(j.jsxs)("div",{style:{borderBottom:"1px solid #f5f4fa",backgroundColor:"pink",color:"white",maxWidth:399,width:399,overflowX:"hidden",display:"flex",justifyContent:"space-evenly"},children:[Object(j.jsx)("div",{children:t.timestamp}),Object(j.jsxs)("div",{style:{marginLeft:20,width:40},children:["S",t.data.squat," x",t.data.squatReps]}),Object(j.jsxs)("div",{style:{marginLeft:20,width:40},children:["B",t.data.bench," x",t.data.benchReps]}),Object(j.jsxs)("div",{style:{marginLeft:20,width:40},children:["D",t.data.deadlift," x",t.data.deadliftReps]})]})})),Object(j.jsxs)("div",{style:{marginTop:10,display:"flex",justifyContent:"center",height:30},children:[" ",Object(j.jsx)("div",{style:{width:"95%",backgroundColor:"#fff",border:"2px solid #f5f4fa",color:"#fae0e2",cursor:"pointer",borderRadius:8,height:22,fontSize:18},onClick:function(){t.removeData()},children:"Clear All Logs"})]})]}):null}),Object(j.jsx)("br",{}),this.renderActiveQuestion(),Object(j.jsxs)("div",{style:{marginTop:10,display:"flex",justifyContent:"center",height:30},children:[" ",Object(j.jsx)("div",{style:{width:"95%",backgroundColor:"#fff",border:"2px solid #f5f4fa",color:"#fae0e2",cursor:"pointer",borderRadius:8,height:22,fontSize:18},onClick:function(){t.props.toggleGraph()},children:"Toggle Progress Graph"})]})]}),Object(j.jsx)("br",{})]})})}}]),a}(u.Component),D=Object(y.c)(I),F=a(14),T=a(15),M=a.n(T),B=a(13),L=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){var t=this.props,e=t.containerClass,a=t.className,s=t.size,i={className:e},c={className:"spinner spinner-".concat(s," spinner-is-spinning").concat(a?" ".concat(a):"")},l=this.getSpinner,n=Object(j.jsx)("div",Object(B.a)(Object(B.a)({},c),{},{children:l}));return e&&(n=Object(j.jsx)("div",Object(B.a)(Object(B.a)({},i),{},{children:n}))),n}},{key:"getSpinner",get:function(){var t=this.props.label;return Object(j.jsxs)("div",{className:"spinner-content",children:[Object(j.jsx)("div",{className:"spin"}),t?Object(j.jsx)("div",{className:"spinner-label",children:t}):null]})}}]),a}(u.Component);L.defaultProps={containerClass:"",className:"",label:"",size:"large"},L.contextTypes={router:M.a.object.isRequired};var P=a(22),z=a.n(P),A=a(16),H=a.n(A),E=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var t=this.props,e=t.type,a=t.data,s=t.options,i=t.plugins;this.chartInstance=new H.a(this.canvas,{type:e,data:a,options:s,plugins:i});try{this.props.chartHandle(this.chartInstance)}catch(c){console.log("error",c)}}},{key:"componentWillReceiveProps",value:function(t){var e=this.props,a=e.data,s=e.options,i=z()(a,t.data),c=z()(s,t.options);i&&c||this.updateChart(t)}},{key:"componentWillUnmount",value:function(){this.chartInstance.destroy()}},{key:"updateChart",value:function(t){var e=this.chartInstance;e.config.data=t.data,e.config.options=t.options,e.update()}},{key:"render",value:function(){var t=this;return Object(j.jsx)("canvas",{ref:function(e){return t.canvas=e}})}}],[{key:"drawTextItems",value:function(t,e,a,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"normal";t.restore();for(var c="middle"===i,l=0;l<s.length;l++){var n=s[l];if(n.text)for(var r=n.text,d=r.split("\n"),h=0;h<d.length;h++){t.font=H.a.helpers.fontString(n.fontSize,n.fontStyle,n.fontFamily),t.textBaseline=n.textBaseline,t.textAlign=n.textAlign,t.fillStyle=n.fillStyle;var o=t.measureText(d[h]),j=c?Math.round(e-o.width)/2+n.position.x:n.position.x,u=(c?Math.round(a/2)+n.position.y:n.position.y)-n.fontSize/2*d.length+n.fontSize*h;t.fillText(d[h],j,u)}}t.save()}},{key:"drawText",value:function(t,e,a,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"normal",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{x:0,y:0},l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#FFF",n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:14,r=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"normal",d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"Roboto",h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"alphabetic",o=arguments.length>11&&void 0!==arguments[11]?arguments[11]:"left";t.restore(),t.font=H.a.helpers.fontString(n,r,d),t.textBaseline=h,t.textAlign=o,t.fillStyle=l;for(var j="middle"===i,u=s.split("\n"),b=0;b<u.length;b++){var x=t.measureText(u[b]),g=(j?a/2+c.y:c.y)-n/2*u.length+n*b,p=j?e/2-x.width/2+c.x:c.x;t.fillText(u[b],p,g)}t.save()}}]),a}(u.Component);E.defaultProps={plugins:[],options:{}};var Q=E,J=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(p.a)(this,a),(s=e.call(this,t)).chartHandle=s.chartHandle.bind(Object(F.a)(s)),s}return Object(O.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){this.setState({selectedLegend:[],selectedOrganizations:[],dataItems:[],updated:!1,legendItems:[{datasetIndex:0,fillStyle:"#b16037",hidden:!1,lineCap:"",lineDash:"",lineDashOffset:"",lineJoin:"",lineWidth:1,pointStyle:"",strokeStyle:"#b16037",text:"Organization1 Score3"}]})}},{key:"chartHandle",value:function(t){var e=t;this.setState({chartInstance:e,legendItems:e.legend.legendItems}),this.forceUpdate()}},{key:"render",value:function(){this.props.submitted;var t=Math.floor(16777215*Math.random()),e="#".concat(t.toString(16)),a="#".concat(Math.floor(t-5e3).toString(16)),s="#".concat(Math.floor(t-8e3).toString(16)),i=this.props.dataset.map((function(t){return{x:t.timestamp,y:t.data.squat}})),c=this.props.dataset.map((function(t){return{x:t.timestamp,y:t.data.bench}})),l=this.props.dataset.map((function(t){return{x:t.timestamp,y:t.data.deadlift}})),n=this.props.dataset;console.log("WHAT IS MY TEST DATA",n,i,c,l);var r=[{label:"Squat",backgroundColor:e,borderColor:e,borderWidth:1,hoverBackgroundColor:e,hoverBorderColor:e,fill:!1,showLine:!0,hidden:!1,data:i},{label:"Bench",backgroundColor:a,borderColor:a,borderWidth:1,hoverBackgroundColor:a,hoverBorderColor:a,fill:!1,showLine:!0,hidden:!1,data:c},{label:"Deadlift",backgroundColor:s,borderColor:s,borderWidth:1,hoverBackgroundColor:s,hoverBorderColor:s,fill:!1,showLine:!0,hidden:!1,data:l}],d={labels:this.props.dataset.length>=1?[W()(this.props.dataset[0].timestamp).toISOString(),W()(this.props.dataset[this.props.dataset.length-1].timestamp).toISOString()]:[(new Date).toISOString(),W()().add("30","day").toISOString()],datasets:r};return Object(j.jsx)("section",{style:{width:800,height:800},children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{style:{margin:15},children:Object(j.jsx)(Q,{chartHandle:this.chartHandle,type:"line",data:d,options:{animationTime:0,hoverMode:"index",stacked:!1,legend:{display:!1,position:"bottom"},annotation:{annotations:[]},tooltips:{mode:"nearest",intersect:!0,enabled:!0,callbacks:{label:function(t,e){t.datasetIndex;return console.log(e,t),"".concat(e.datasets[t.datasetIndex].label,": ").concat(t.yLabel," kg/lb ")}}},scales:{xAxes:[{type:"time",time:{unit:"day",displayFormats:{day:"MMM D"},tooltipFormat:"MMM D",display:!0,ticks:{display:!0,source:"labels"},scaleLabel:{display:!0}}}],yAxes:[{ticks:{stepSize:1},scaleLabel:{display:!0,labelString:"KG/LB"}}]}}})})})})})}}]),a}(u.Component);J.contextTypes={router:M.a.object.isRequired};var K,Y=J,U=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(t,s){var i;return Object(p.a)(this,a),(i=e.call(this,t)).state={username:"",submitted:!1,showGraph:!1,training:!1},i}return Object(O.a)(a,[{key:"toggleGraph",value:function(){this.setState({showGraph:!this.state.showGraph})}},{key:"setSubmitted",value:function(t){this.setState({submitted:t})}},{key:"calculateWeight",value:function(t,e){return parseFloat(e*t)}},{key:"render",value:function(){var t=this,e=q.generalStore.nextGoalInt.deadlift,a=q.generalStore.nextGoalInt.bench,s=q.generalStore.nextGoalInt.squat,i=70;return Object(j.jsxs)("div",{style:{height:"84%",width:"100%",backgroundColor:"#f5f4fa"},children:[Object(j.jsx)("div",{className:"training-select ".concat(this.state.training?"slider":""),children:Object(j.jsx)("div",{style:{cursor:"pointer"},onClick:function(){t.setState({training:!t.state.training})},children:Object(j.jsx)("h3",{children:this.state.training?"PROGRESSION":"TRAINING"})})}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(j.jsx)("h3",{style:{color:"#4264ea"},className:"strongFont"})}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",height:480},children:[Object(j.jsx)("div",{style:{width:"33%"}}),Object(j.jsx)(D,{toggleGraph:this.toggleGraph.bind(this),rootStore:this.props.rootStore,setSubmitted:this.setSubmitted.bind(this)}),this.state.showGraph?Object(j.jsx)("div",{children:Object(j.jsx)("section",{className:"dashboard content container fadedshort",children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)(Y,{dataset:q.generalStore.data,submitted:this.state.submitted})})})}):null,Object(j.jsx)("div",{style:{width:"33%"},children:Object(j.jsx)("div",{children:Object(j.jsx)("h2",{className:"strongFont"})})})]}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",height:600},children:Object(j.jsxs)("div",{className:"scrollbar",style:{overflowY:"auto",maxHeight:600,width:800,fontSize:14,margin:20,padding:20,backgroundColor:"#f5f4fa"},children:[q.generalStore.data.length<1?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Start by entering your one rep maxes, your training maxes will be calculated at 90% of your true max."}),Object(j.jsxs)("p",{children:["Each week, you will increase your training max if you were able to complete all the reps, ",Object(j.jsx)("p",{children:"your new peak set will be suggested for you based on how many reps you achieved."}),Object(j.jsx)("p",{children:"Your progress is stored in cookies and will be logged on the graph on the right and can be cleared at any time. "})]})]}):null,q.generalStore.data.length>=1?Object(j.jsxs)("table",{className:"scrollbar",style:{maxHeight:600,height:600},children:[Object(j.jsxs)("thead",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Max:"}),Object(j.jsxs)("td",{children:["Squat - ",s]}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"})," ",Object(j.jsxs)("td",{children:["Bench - ",a]}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsxs)("td",{children:["Deadlift - ",e]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"TM: "}),Object(j.jsxs)("td",{children:["Squat - ",parseFloat(.9*s)]}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsxs)("td",{children:["Bench - ",parseFloat(.9*a)]}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsx)("td",{className:"blank-cell"}),Object(j.jsxs)("td",{children:["Deadlift -",parseFloat(.9*e)]})]})]}),Object(j.jsxs)("tbody",{className:"scrollbar",style:{maxHeight:600,height:600},children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"routine-cell",children:"Bench"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.65,a),"  x8"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,a),"   x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,a),"  x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,a),"  x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,a),"  x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.8,a)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,a),"  x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,a),"  x7"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a),"  x8"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"OHP"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.5,i),"  x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,i)," x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,i)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,i)," x7"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,i)," x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,i)," x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,i)," x8"]}),Object(j.jsx)("td",{})]}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{className:"blank-cell"})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Squat"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,s)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,s),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.95,s),"  x1+"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.9,s),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,s),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.8,s),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,s),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,s),"  x5"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Deadlift"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.5,e),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,e)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e)," x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e),"  x7"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e),"  x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e),"  x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e),"  x8"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e),"  x8"]})]}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{className:"blank-cell"})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"OHP"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.65,i),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,i),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x1+"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.8,i),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,i),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,i),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x5+"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Incline Bench"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.4,a),"  x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.5,a)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a),"  x7"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a),"  x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a),"  x8"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x8"]}),Object(j.jsx)("td",{})]}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{className:"blank-cell"})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Deadlift"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,e),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,e),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.95,e)," x1+"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.9,e),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,e)," x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.8,e),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,e),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,e),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,e),"  x3"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Front Squat"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.35,s)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.45,s)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.55,s)," x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.55,s)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.55,s),"x7"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.55,s)," x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.55,s),"x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.55,s)," x8"]}),Object(j.jsx)("td",{})]}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{className:"blank-cell"})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Bench"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.65,a),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,a),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,a),"  x1+"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,a),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.85,a)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.8,a),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.75,a),"  x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.7,a),"  x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a),"  x5+"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"CG Bench"}),Object(j.jsxs)("td",{children:[this.calculateWeight(.4,a)," x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.5,a)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x3"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x5"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x7"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x4"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x6"]}),Object(j.jsxs)("td",{children:[this.calculateWeight(.6,a)," x8"]}),Object(j.jsx)("td",{})]})]})]}):null]})})]})}}]),a}(u.Component),X=Object(y.c)(U),V=Object(y.b)("rootStore")(K=Object(y.c)(K=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(t){return Object(p.a)(this,a),e.call(this,t)}return Object(O.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(X,{rootStore:this.props.rootStore})})}}]),a}(b.a.Component))||K)||K,Z=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(e){var a=e.getCLS,s=e.getFID,i=e.getFCP,c=e.getLCP,l=e.getTTFB;a(t),s(t),i(t),c(t),l(t)}))};g.a.render(Object(j.jsx)(y.a,{rootStore:q,children:Object(j.jsx)(V,{})}),document.getElementById("root")),Z()}},[[61,1,2]]]);
//# sourceMappingURL=main.7fa3c126.chunk.js.map