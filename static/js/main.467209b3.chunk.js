(this.webpackJsonpstrfactory=this.webpackJsonpstrfactory||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var i,a,l,n,r,c,o,d,h,u,p=s(0),j=s(1),b=s.n(j),x=s(34),g=s.n(x),f=(s(41),s(3)),O=s(4),m=s(7),y=s(6),v=(s.p,s(42),s(8)),S=s(15),k=s(5),W=s.n(k),w=s(9),C=s.n(w),N=s(2),q=s(11),G=s(10),R=(s(44),i=N.action.bound,a=N.action.bound,l=N.action.bound,n=N.action.bound,r=function(){function e(t){Object(f.a)(this,e),this.rootStore=void 0,Object(q.a)(this,"username",c,this),Object(q.a)(this,"data",o,this),Object(q.a)(this,"nextGoal",d,this),Object(q.a)(this,"nextGoalInt",h,this),Object(q.a)(this,"sessionMultiplierSet",u,this),this.rootStore=t}return Object(O.a)(e,[{key:"setUsername",value:function(e){this.username=e}},{key:"setData",value:function(e){this.data=e}},{key:"setNextGoal",value:function(e){this.nextGoal=e}},{key:"setNextGoalInt",value:function(e){this.nextGoalInt=e}}]),e}(),c=Object(G.a)(r.prototype,"username",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"User"}}),o=Object(G.a)(r.prototype,"data",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"undefined"!==typeof W.a.get("data")?JSON.parse(W.a.get("data")):[]}}),d=Object(G.a)(r.prototype,"nextGoal",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"undefined"!==typeof W.a.get("nextGoal")?JSON.parse(W.a.get("nextGoal")):{}}}),h=Object(G.a)(r.prototype,"nextGoalInt",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"undefined"!==typeof W.a.get("next")?JSON.parse(W.a.get("next")):{}}}),u=Object(G.a)(r.prototype,"sessionMultiplierSet",[N.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{BenchV:[{multiplier:.65,reps:8},{multiplier:.75,reps:6},{multiplier:.85,reps:4},{multiplier:.85,reps:4},{multiplier:.85,reps:4},{multiplier:.8,reps:5},{multiplier:.75,reps:6},{multiplier:.7,reps:7},{multiplier:.6,reps:8}],OHPV:[{multiplier:.5,reps:6},{multiplier:.6,reps:5},{multiplier:.7,reps:3},{multiplier:.7,reps:5},{multiplier:.7,reps:7},{multiplier:.7,reps:4},{multiplier:.7,reps:6},{multiplier:.7,reps:8}],SquatS:[{multiplier:.75,reps:5},{multiplier:.85,reps:3},{multiplier:.95,reps:1},{multiplier:.9,reps:3},{multiplier:.85,reps:3},{multiplier:.8,reps:3},{multiplier:.75,reps:3},{multiplier:.7,reps:5},{multiplier:.6,reps:5}],DeadliftV:[{multiplier:.5,reps:5},{multiplier:.6,reps:5},{multiplier:.7,reps:3},{multiplier:.7,reps:5},{multiplier:.7,reps:7},{multiplier:.7,reps:4},{multiplier:.7,reps:6},{multiplier:.7,reps:8},{multiplier:.7,reps:8}],OHPS:[{multiplier:.65,reps:5},{multiplier:.75,reps:3},{multiplier:.85,reps:1},{multiplier:.85,reps:3},{multiplier:.85,reps:3},{multiplier:.8,reps:3},{multiplier:.75,reps:5},{multiplier:.7,reps:5},{multiplier:.6,reps:5}],IBenchV:[{multiplier:.4,reps:6},{multiplier:.5,reps:5},{multiplier:.6,reps:3},{multiplier:.6,reps:5},{multiplier:.6,reps:7},{multiplier:.6,reps:4},{multiplier:.6,reps:8},{multiplier:.6,reps:8}],DeadliftS:[{multiplier:.75,reps:5},{multiplier:.85,reps:3},{multiplier:.95,reps:1},{multiplier:.9,reps:3},{multiplier:.85,reps:3},{multiplier:.8,reps:3},{multiplier:.75,reps:3},{multiplier:.7,reps:3},{multiplier:.6,reps:3}],FrontSquatV:[{multiplier:.35,reps:5},{multiplier:.45,reps:5},{multiplier:.55,reps:3},{multiplier:.55,reps:5},{multiplier:.55,reps:7},{multiplier:.55,reps:4},{multiplier:.55,reps:6},{multiplier:.55,reps:8}],BenchS:[{multiplier:.65,reps:5},{multiplier:.75,reps:3},{multiplier:.85,reps:1},{multiplier:.85,reps:3},{multiplier:.85,reps:5},{multiplier:.8,reps:3},{multiplier:.75,reps:5},{multiplier:.7,reps:3},{multiplier:.6,reps:5}],CGBenchV:[{multiplier:.4,reps:6},{multiplier:.5,reps:5},{multiplier:.6,reps:3},{multiplier:.6,reps:5},{multiplier:.6,reps:7},{multiplier:.6,reps:4},{multiplier:.6,reps:6},{multiplier:.6,reps:8}]}}}),Object(G.a)(r.prototype,"setUsername",[i],Object.getOwnPropertyDescriptor(r.prototype,"setUsername"),r.prototype),Object(G.a)(r.prototype,"setData",[a],Object.getOwnPropertyDescriptor(r.prototype,"setData"),r.prototype),Object(G.a)(r.prototype,"setNextGoal",[l],Object.getOwnPropertyDescriptor(r.prototype,"setNextGoal"),r.prototype),Object(G.a)(r.prototype,"setNextGoalInt",[n],Object.getOwnPropertyDescriptor(r.prototype,"setNextGoalInt"),r.prototype),r),B=s(35);Object(N.configure)({enforceActions:"observed"});Object(B.create)({storage:localStorage,jsonify:!0});var I=new function e(){Object(f.a)(this,e),this.generalStore=void 0,this.generalStore=new R(this)},D=function(e){Object(m.a)(s,e);var t=Object(y.a)(s);function s(e,i){var a;return Object(f.a)(this,s),(a=t.call(this,e)).state={showGraph:!1,reps:0,activeQuestion:"squat",squat:"",bench:"",deadlift:"",submitted:I.generalStore.data.length>=1,loggingMax:I.generalStore.data.length<1,squatReps:I.generalStore.data.length>=1?0:1,deadliftReps:I.generalStore.data.length>=1?0:1,benchReps:I.generalStore.data.length>=1?0:1},a}return Object(O.a)(s,[{key:"calculateNextGoal",value:function(e,t){return t<2?"".concat(e," x 1+"):t>=2&&t<4?"".concat(e+2.5," x 1+"):t>=4&&t<=5?"".concat(e+3," x 1+"):t>5?"".concat(e+6.8," x 1+"):void 0}},{key:"calculateNextGoalInt",value:function(e,t){return t<2?e:t>=2&&t<4?e+2.5:t>=4&&t<=5?e+3:t>5?e+6.8:void 0}},{key:"handleSurveyChangeReps",value:function(e,t){"squat"===t&&this.setState({reps:e.target.value,squatReps:e.target.value}),"bench"===t&&this.setState({reps:e.target.value,benchReps:e.target.value}),"deadlift"===t&&this.setState({reps:e.target.value,deadliftReps:e.target.value})}},{key:"handleSurveyChangeBench",value:function(e){this.setState({bench:e.target.value})}},{key:"handleSurveyChangeSquat",value:function(e){this.setState({squat:e.target.value})}},{key:"handleSurveyChangeDeadlift",value:function(e){this.setState({deadlift:e.target.value})}},{key:"submitDataToCookies",value:function(e){var t=this.calculateNextGoal(parseFloat(this.state.squat),this.state.squatReps),s=this.calculateNextGoal(parseFloat(this.state.bench),this.state.benchReps),i=this.calculateNextGoal(parseFloat(this.state.deadlift),this.state.deadliftReps),a=this.calculateNextGoalInt(parseFloat(this.state.squat),this.state.squatReps),l=this.calculateNextGoalInt(parseFloat(this.state.bench),this.state.benchReps),n={squat:t,deadlift:i,bench:s},r={squat:a,deadlift:this.calculateNextGoalInt(parseFloat(this.state.deadlift),this.state.deadliftReps),bench:l};W.a.set("nextGoal",n);var c=W.a.get("data");if(console.log("prevData",typeof c,c,e),"undefined"!==typeof c){var o=JSON.parse(c);o.length;o.push({data:{squat:e.squat,squatReps:e.squatReps,deadlift:e.deadlift,deadliftReps:e.deadliftReps,bench:e.bench,benchReps:e.benchReps},timestamp:C()().format("LL")}),I.generalStore.setData(o),I.generalStore.setNextGoal(n),I.generalStore.setNextGoalInt(r),W.a.set("next",r),W.a.set("data",o)}else W.a.set("data",[{data:e,timestamp:C()().format("LL")}]),W.a.set("next",r),I.generalStore.setData([{data:e,timestamp:C()().format("LL")}]),I.generalStore.setNextGoal(n),I.generalStore.setNextGoalInt(r),this.setState({submitted:!0})}},{key:"removeData",value:function(){W.a.remove("data"),W.a.remove("nextGoal"),W.a.remove("next"),window.location.reload()}},{key:"renderActiveQuestion",value:function(){var e=this;switch(this.state.activeQuestion){case"squat":return Object(p.jsxs)("div",{className:"fadedshort",style:{width:"100%",display:"block",marginTop:50},children:[Object(p.jsx)("input",{autoFocus:!0,max:400,min:0,style:{display:"inline-block",width:200},type:"number",name:"squat",value:this.state.squat,placeholder:"Squat",className:"signup-form",onChange:function(t){e.handleSurveyChangeSquat(t)},onKeyPress:function(t){"Enter"===t.key&&e.state.squatReps&&e.setState({activeQuestion:"bench",reps:0})}}),Object(p.jsx)("input",{max:400,min:0,style:{display:"inline-block",width:80},type:"number",name:"reps",value:this.state.reps||this.state.squatReps,placeholder:"x reps",className:"signup-form",onChange:function(t){e.handleSurveyChangeReps(t,"squat")},onKeyPress:function(t){"Enter"===t.key&&(document.activeElement.blur(),e.setState({activeQuestion:"bench",reps:0}))}})]});case"bench":return Object(p.jsxs)("div",{style:{width:"100%",display:"block",marginTop:50},children:[Object(p.jsx)("input",{autoFocus:!0,max:400,min:0,style:{display:"inline-block",width:200},type:"number",name:"bench",value:this.state.bench,placeholder:"Bench",className:"signup-form fadedshort",onChange:function(t){e.handleSurveyChangeBench(t)},onKeyPress:function(t){"Enter"===t.key&&e.state.benchReps&&e.setState({activeQuestion:"deadlift",reps:0})}}),Object(p.jsx)("input",{max:400,min:0,style:{display:"inline-block",width:80},type:"number",name:"reps",value:this.state.reps||this.state.benchReps,placeholder:"x reps",className:"signup-form fadedshort",onChange:function(t){e.handleSurveyChangeReps(t,"bench")},onKeyPress:function(t){"Enter"===t.key&&(e.setState({activeQuestion:"deadlift",reps:0}),document.activeElement.blur())}})]});case"deadlift":return Object(p.jsxs)("div",{className:"fadedshort",style:{width:"100%",display:"block",marginTop:50},children:[Object(p.jsx)("input",{autoFocus:!0,max:400,min:0,style:{display:"inline-block",width:200},type:"number",name:"deadlift",value:this.state.deadlift,placeholder:"Deadlift",className:"signup-form fadedshort",onChange:function(t){e.handleSurveyChangeDeadlift(t)},onKeyPress:function(t){"Enter"===t.key&&e.state.deadliftReps&&(e.setState({activeQuestion:null,reps:0}),e.submitDataToCookies(e.state))}}),Object(p.jsx)("input",{max:400,min:0,style:{display:"inline-block",width:80},type:"number",name:"reps",value:this.state.reps||this.state.deadliftReps,placeholder:"x reps",className:"signup-form fadedshort",onChange:function(t){e.handleSurveyChangeReps(t,"deadlift")},onKeyPress:function(t){"Enter"===t.key&&(e.setState({activeQuestion:null,reps:0}),e.submitDataToCookies(e.state))}})]});default:return 1==this.state.squatReps&&1==this.state.benchReps&&1==this.state.deadliftReps&&(this.state.squat&&(p.Fragment,this.state.squat),this.state.squat&&(p.Fragment,Math.ceil(.9*this.state.squat)),this.state.bench&&(p.Fragment,this.state.bench),this.state.bench&&(p.Fragment,Math.ceil(.9*this.state.bench)),this.state.deadlift&&(p.Fragment,this.state.deadlift),this.state.deadlift&&(p.Fragment,Math.ceil(.9*this.state.deadlift))),Object(p.jsxs)("div",{className:"fadedshort",children:[Object(p.jsx)("h3",{style:{color:"pink"},children:"Your work has been logged. Thank you."}),Object(p.jsx)("br",{})]})}}},{key:"render",value:function(){var e=this;return console.log(I.generalStore.data),Object(p.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"transparent"},className:"fadedshort",children:Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsxs)("div",{style:{width:350,padding:"0px 0px 0px 30px",margin:0,height:550,backgroundColor:"#6584ff",borderRadius:12,marginBottom:50,border:"2px solid #fff"},children:[Object(p.jsx)("p",{style:{height:40,color:"#fff"},children:this.state.submitted?"Log today's training session":"Submit Your One Rep Max"}),I.generalStore.nextGoal.squat?Object(p.jsxs)("div",{style:{color:"white"},children:[Object(p.jsx)("h3",{style:{color:"white",margin:0},children:1===I.generalStore.data.length?"Your programme has been generated below":"Try for these numbers next week"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"S"}),I.generalStore.nextGoal.squat,"  ",Object(p.jsx)("b",{style:{marginLeft:10},children:"B"}),I.generalStore.nextGoal.bench," ",Object(p.jsx)("b",{style:{marginLeft:10},children:"D"}),I.generalStore.nextGoal.deadlift]})]}):null,Object(p.jsx)("div",{className:"scrollbar",style:{maxHeight:90,overflowY:"auto",overflowX:"hidden",maxWidth:399},children:I.generalStore.data.length>=1?Object(p.jsxs)("div",{children:[I.generalStore.data.map((function(e){return console.log("...",e),Object(p.jsxs)("div",{style:{borderBottom:"1px solid #6584ff",backgroundColor:"#4264ea",color:"white",maxWidth:399,overflowX:"hidden",display:"flex",justifyContent:"space-evenly"},children:[Object(p.jsx)("div",{children:C()(e.timestamp).format("l")}),Object(p.jsxs)("div",{style:{width:40},children:["S",e.data.squat," x",e.data.squatReps]}),Object(p.jsxs)("div",{style:{width:40},children:["B",e.data.bench," x",e.data.benchReps]}),Object(p.jsxs)("div",{style:{width:40},children:["D",e.data.deadlift," x",e.data.deadliftReps]})]})})),Object(p.jsxs)("div",{style:{marginTop:10,display:"flex",justifyContent:"center",height:30},children:[" ",Object(p.jsx)("div",{style:{width:"95%",backgroundColor:"#fff",border:"2px solid #6584ff",color:"#4264ea",cursor:"pointer",borderRadius:8,height:22,fontSize:18},onClick:function(){e.removeData()},children:"Clear All Logs"})]})]}):null}),Object(p.jsx)("br",{}),this.renderActiveQuestion()]}),Object(p.jsx)("br",{})]})})}}]),s}(j.Component),F=Object(v.c)(D),P=s(14),M=s(16),T=s.n(M),V=s(13),L=function(e){Object(m.a)(s,e);var t=Object(y.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(O.a)(s,[{key:"render",value:function(){var e=this.props,t=e.containerClass,s=e.className,i=e.size,a={className:t},l={className:"spinner spinner-".concat(i," spinner-is-spinning").concat(s?" ".concat(s):"")},n=this.getSpinner,r=Object(p.jsx)("div",Object(V.a)(Object(V.a)({},l),{},{children:n}));return t&&(r=Object(p.jsx)("div",Object(V.a)(Object(V.a)({},a),{},{children:r}))),r}},{key:"getSpinner",get:function(){var e=this.props.label;return Object(p.jsxs)("div",{className:"spinner-content",children:[Object(p.jsx)("div",{className:"spin"}),e?Object(p.jsx)("div",{className:"spinner-label",children:e}):null]})}}]),s}(j.Component);L.defaultProps={containerClass:"",className:"",label:"",size:"large"},L.contextTypes={router:T.a.object.isRequired};var H=s(23),z=s.n(H),A=s(17),E=s.n(A),Q=function(e){Object(m.a)(s,e);var t=Object(y.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(O.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.type,s=e.data,i=e.options,a=e.plugins;this.chartInstance=new E.a(this.canvas,{type:t,data:s,options:i,plugins:a});try{this.props.chartHandle(this.chartInstance)}catch(l){console.log("error",l)}}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,s=t.data,i=t.options,a=z()(s,e.data),l=z()(i,e.options);a&&l||this.updateChart(e)}},{key:"componentWillUnmount",value:function(){this.chartInstance.destroy()}},{key:"updateChart",value:function(e){var t=this.chartInstance;t.config.data=e.data,t.config.options=e.options,t.update()}},{key:"render",value:function(){var e=this;return Object(p.jsx)("canvas",{ref:function(t){return e.canvas=t}})}}],[{key:"drawTextItems",value:function(e,t,s,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"normal";e.restore();for(var l="middle"===a,n=0;n<i.length;n++){var r=i[n];if(r.text)for(var c=r.text,o=c.split("\n"),d=0;d<o.length;d++){e.font=E.a.helpers.fontString(r.fontSize,r.fontStyle,r.fontFamily),e.textBaseline=r.textBaseline,e.textAlign=r.textAlign,e.fillStyle=r.fillStyle;var h=e.measureText(o[d]),u=l?Math.round(t-h.width)/2+r.position.x:r.position.x,p=(l?Math.round(s/2)+r.position.y:r.position.y)-r.fontSize/2*o.length+r.fontSize*d;e.fillText(o[d],u,p)}}e.save()}},{key:"drawText",value:function(e,t,s,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"normal",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{x:0,y:0},n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#FFF",r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:14,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"normal",o=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"Roboto",d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"alphabetic",h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:"left";e.restore(),e.font=E.a.helpers.fontString(r,c,o),e.textBaseline=d,e.textAlign=h,e.fillStyle=n;for(var u="middle"===a,p=i.split("\n"),j=0;j<p.length;j++){var b=e.measureText(p[j]),x=(u?s/2+l.y:l.y)-r/2*p.length+r*j,g=u?t/2-b.width/2+l.x:l.x;e.fillText(p[j],g,x)}e.save()}}]),s}(j.Component);Q.defaultProps={plugins:[],options:{}};var Y=Q,J=function(e){Object(m.a)(s,e);var t=Object(y.a)(s);function s(e){var i;return Object(f.a)(this,s),(i=t.call(this,e)).chartHandle=i.chartHandle.bind(Object(P.a)(i)),i}return Object(O.a)(s,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){this.setState({selectedLegend:[],selectedOrganizations:[],dataItems:[],updated:!1,legendItems:[{datasetIndex:0,fillStyle:"#b16037",hidden:!1,lineCap:"",lineDash:"",lineDashOffset:"",lineJoin:"",lineWidth:1,pointStyle:"",strokeStyle:"#b16037",text:"Organization1 Score3"}]})}},{key:"chartHandle",value:function(e){var t=e;this.setState({chartInstance:t,legendItems:t.legend.legendItems}),this.forceUpdate()}},{key:"render",value:function(){this.props.submitted;var e=Math.floor(16777215*Math.random()),t="#".concat(e.toString(16)),s="#".concat(Math.floor(e-5e3).toString(16)),i="#".concat(Math.floor(e-8e3).toString(16)),a=this.props.dataset.map((function(e){return{x:e.timestamp,y:e.data.squat}})),l=this.props.dataset.map((function(e){return{x:e.timestamp,y:e.data.bench}})),n=this.props.dataset.map((function(e){return{x:e.timestamp,y:e.data.deadlift}})),r=this.props.dataset;console.log("WHAT IS MY TEST DATA",r,a,l,n);var c=[{label:"Squat",backgroundColor:t,borderColor:t,borderWidth:1,hoverBackgroundColor:t,hoverBorderColor:t,fill:!1,showLine:!0,hidden:!1,data:a},{label:"Bench",backgroundColor:s,borderColor:s,borderWidth:1,hoverBackgroundColor:s,hoverBorderColor:s,fill:!1,showLine:!0,hidden:!1,data:l},{label:"Deadlift",backgroundColor:i,borderColor:i,borderWidth:1,hoverBackgroundColor:i,hoverBorderColor:i,fill:!1,showLine:!0,hidden:!1,data:n}],o={labels:this.props.dataset.length>=1?[C()(this.props.dataset[0].timestamp).toISOString(),C()(this.props.dataset[this.props.dataset.length-1].timestamp).toISOString()]:[(new Date).toISOString(),C()().add("30","day").toISOString()],datasets:c};return Object(p.jsx)("section",{style:{width:800,height:800},children:Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{style:{margin:15},children:Object(p.jsx)(Y,{chartHandle:this.chartHandle,type:"line",data:o,options:{animationTime:0,hoverMode:"index",stacked:!1,legend:{display:!1,position:"bottom"},annotation:{annotations:[]},tooltips:{mode:"nearest",intersect:!0,enabled:!0,callbacks:{label:function(e,t){e.datasetIndex;return console.log(t,e),"".concat(t.datasets[e.datasetIndex].label,": ").concat(e.yLabel," kg/lb ")}}},scales:{xAxes:[{type:"time",time:{unit:"day",displayFormats:{day:"MMM D"},tooltipFormat:"MMM D",display:!0,ticks:{display:!0,source:"labels"},scaleLabel:{display:!0}}}],yAxes:[{ticks:{stepSize:1},scaleLabel:{display:!0,labelString:"KG/LB"}}]}}})})})})})}}]),s}(j.Component);J.contextTypes={router:T.a.object.isRequired};var K,U=J,X=function(e){Object(m.a)(s,e);var t=Object(y.a)(s);function s(e,i){var a;return Object(f.a)(this,s),(a=t.call(this,e)).state={index:0},a}return Object(O.a)(s,[{key:"iterateIndex",value:function(e){if(e===this.state.index)return console.log("!"),this.props.resetSession();this.setState({index:this.state.index+1})}},{key:"getWeight",value:function(e,t){switch(t){case"BenchV":case"IBenchV":case"BenchS":case"CGBenchV":return e.bench;case"SquatS":case"FrontSquatV":return e.squat;case"DeadliftV":case"DeadliftS":return e.deadlift;case"OHPS":case"OHPV":return e.ohp}}},{key:"renderSetName",value:function(e){switch(e){case"BenchV":return"Bench Press";case"IBenchV":return"Incline Bench Press";case"BenchS":return"Bench Press";case"CGBenchV":return"Close Grip Bench Press";case"SquatS":return"Back Squat";case"FrontSquatV":return"Front Squat";case"DeadliftV":case"DeadliftS":return"Deadlift";case"OHPS":case"OHPV":return"Overhead Press"}}},{key:"render",value:function(){var e=this;console.log(this.props.lifts);var t=this.props.session.map((function(t){return e.props.generalStore.sessionMultiplierSet[t].map((function(s,i){return s.name=t,s.weight=e.getWeight(e.props.lifts,t),s.setWeight=e.getWeight(e.props.lifts,t)*s.multiplier,s}))}));console.log(".!",t);var s=t[0].concat(t[1]);return Object(p.jsx)("div",{style:{cursor:"pointer"},onClick:function(){e.iterateIndex(s.length)},children:Object(p.jsx)("div",{style:{width:200,height:400,marginTop:50,backgroundColor:"orange",padding:50,paddingLeft:120,borderRadius:12},children:s.map((function(t,i,a){return e.state.index===a.length&&0===i?Object(p.jsx)("div",{onClick:function(){e.props.resetSession()},children:"You have completed the workout! Tap to reset."}):i===e.state.index?t.name?Object(p.jsxs)("div",{className:"fadedshort",style:{color:a[i-1]&&t.name!==a[i-1].name?"#6bf5fa":"#fff",marginTop:150},children:[e.renderSetName(t.name),Object(p.jsxs)("div",{style:{height:60,width:"100%",fontSize:32},children:[Math.round(100*t.setWeight)/100," x ",t.reps]}),Object(p.jsxs)("div",{style:{marginTop:30,fontSize:9,width:"100%",display:"flex",justifyContent:"space-around"},children:[a[i-1]&&Object(p.jsxs)("div",{children:[Math.round(100*a[i-1].setWeight)/100," x ",a[i-1].reps]}),"".concat(i+1," / ").concat(s.length)," ",a[i+1]&&Object(p.jsxs)("div",{children:[Math.round(100*a[i+1].setWeight)/100," x ",a[i+1].reps]})]})]}):Object(p.jsxs)("div",{style:{height:60,width:"100%",backgroundColor:"orange"},children:[t.setWeight," x ",t.reps]}):void 0}))})})}}]),s}(j.Component),Z=Object(v.c)(X),$=function(e){Object(m.a)(s,e);var t=Object(y.a)(s);function s(e,i){var a;return Object(f.a)(this,s),(a=t.call(this,e)).state={username:"",submitted:!1,showGraph:!1,training:!1},a}return Object(O.a)(s,[{key:"toggleGraph",value:function(){this.setState({showGraph:!this.state.showGraph})}},{key:"resetSession",value:function(){console.log(this.state.session,"reset"),this.setState({session:!1})}},{key:"setSubmitted",value:function(e){this.setState({submitted:e})}},{key:"calculateWeight",value:function(e,t){return Math.round(100*parseFloat(t*e))/100}},{key:"renderSession",value:function(e){var t=this,s=I.generalStore.nextGoalInt.deadlift,i=I.generalStore.nextGoalInt.bench,a=I.generalStore.nextGoalInt.squat,l=Math.round(.7*I.generalStore.nextGoalInt.bench);console.log("????",this.state.session);var n=Object(p.jsxs)("div",{style:{height:"100%",width:"100%"},children:[Object(p.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",borderRadius:12,backgroundColor:"#6584ff"},children:Object(p.jsx)("h3",{style:Object(S.a)({color:"#4264ea",paddingLeft:60},"color","#fff"),children:"Select Session:"})}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{height:600,width:"100%",display:"inline"},children:[Object(p.jsx)("div",{onClick:function(){t.setState({session:"BV"})},style:{cursor:"pointer",width:"70%",margin:"0px 0px 20px 70px",borderRadius:12,backgroundColor:"#4264ea",color:"#fff",height:20,padding:20},children:"Bench Volume"}),Object(p.jsx)("div",{onClick:function(){t.setState({session:"SS"})},style:{cursor:"pointer",width:"70%",margin:"0px 0px 20px 70px",borderRadius:12,backgroundColor:"#4264ea",color:"#fff",height:20,padding:20},children:"Squat Strength"}),Object(p.jsx)("div",{onClick:function(){t.setState({session:"OS"})},style:{cursor:"pointer",width:"70%",margin:"0px 0px 20px 70px",borderRadius:12,backgroundColor:"#4264ea",color:"#fff",height:20,padding:20},children:"OHP Strength"}),Object(p.jsx)("div",{onClick:function(){t.setState({session:"DS"})},style:{cursor:"pointer",width:"70%",margin:"0px 0px 20px 70px",borderRadius:12,backgroundColor:"#4264ea",color:"#fff",height:20,padding:20},children:"Deadlift Strength"}),Object(p.jsx)("div",{onClick:function(){t.setState({session:"BS"})},style:{cursor:"pointer",width:"70%",margin:"0px 0px 20px 70px",borderRadius:12,backgroundColor:"#4264ea",color:"#fff",height:20,padding:20},children:"Bench Strength"}),Object(p.jsx)("div",{onClick:function(){t.setState({session:"FR"})},style:{cursor:"pointer",width:"70%",margin:"0px 0px 20px 70px",borderRadius:12,backgroundColor:"#fff",color:"green",height:20,marginTop:20,padding:20},children:"Full Programme"})]})]});if(!this.state.session||"false"===this.state.session)return n;switch(this.state.session){case"BV":return Object(p.jsx)(Z,{resetSession:this.resetSession.bind(this),lifts:e,generalStore:I.generalStore,session:["BenchV","OHPV"]});case"SS":return Object(p.jsx)(Z,{resetSession:this.resetSession.bind(this),lifts:e,generalStore:I.generalStore,session:["SquatS","DeadliftV"]});case"OS":return Object(p.jsx)(Z,{resetSession:this.resetSession.bind(this),lifts:e,generalStore:I.generalStore,session:["OHPS","IBenchV"]});case"DS":return Object(p.jsx)(Z,{resetSession:this.resetSession.bind(this),lifts:e,generalStore:I.generalStore,session:["DeadliftS","FrontSquatV"]});case"BS":return Object(p.jsx)(Z,{resetSession:this.resetSession.bind(this),lifts:e,generalStore:I.generalStore,session:["BenchS","CGBenchV"]});case"FR":return I.generalStore.data.length>=1?Object(p.jsxs)("table",{className:"scrollbar",style:{maxHeight:600,height:600,paddingLeft:550,width:1200,backgroundColor:"#6584ff"},children:[Object(p.jsxs)("thead",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Max:"}),Object(p.jsxs)("td",{children:["Squat - ",a]}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"})," ",Object(p.jsxs)("td",{children:["Bench - ",i]}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsxs)("td",{children:["Deadlift - ",s]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"TM: "}),Object(p.jsxs)("td",{children:["Squat - ",parseFloat(.9*a)]}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsxs)("td",{children:["Bench - ",parseFloat(.9*i)]}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsx)("td",{className:"blank-cell"}),Object(p.jsxs)("td",{children:["Deadlift -",parseFloat(.9*s)]})]})]}),Object(p.jsxs)("tbody",{className:"scrollbar",style:{maxHeight:600,height:600},children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"routine-cell",children:"Bench"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.65,i),"  x8"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,i),"   x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.8,i)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,i),"  x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,i),"  x7"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x8"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"OHP"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.5,l),"  x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,l),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,l)," x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,l)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,l)," x7"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,l)," x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,l)," x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,l)," x8"]}),Object(p.jsx)("td",{})]}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{className:"blank-cell"})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Squat"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,a)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,a),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.95,a),"  x1+"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.9,a),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,a),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.8,a),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,a),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,a),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,a),"  x5"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Deadlift"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.5,s),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,s)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s)," x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x7"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x8"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x8"]})]}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{className:"blank-cell"})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"OHP"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.65,l),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,l),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,l),"  x1+"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,l),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,l),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.8,l),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,l),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,l),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,l),"  x5+"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Incline Bench"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.4,i),"  x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.5,i)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x7"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x8"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x8"]}),Object(p.jsx)("td",{})]}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{className:"blank-cell"})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Deadlift"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,s),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,s),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.95,s)," x1+"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.9,s),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,s)," x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.8,s),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,s),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,s),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,s),"  x3"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Front Squat"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.35,a)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.45,a)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.55,a)," x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.55,a)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.55,a),"x7"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.55,a)," x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.55,a),"x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.55,a)," x8"]}),Object(p.jsx)("td",{})]}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{className:"blank-cell"})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Bench"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.65,i),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,i),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x1+"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,i),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.85,i)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.8,i),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.75,i),"  x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.7,i),"  x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i),"  x5+"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"CG Bench"}),Object(p.jsxs)("td",{children:[this.calculateWeight(.4,i)," x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.5,i)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x3"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x5"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x7"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x4"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x6"]}),Object(p.jsxs)("td",{children:[this.calculateWeight(.6,i)," x8"]}),Object(p.jsx)("td",{})]})]})]}):null;case!1:default:return n}}},{key:"render",value:function(){var e=this,t=I.generalStore.nextGoalInt.deadlift,s=I.generalStore.nextGoalInt.bench,i=I.generalStore.nextGoalInt.squat,a=Math.round(.7*I.generalStore.nextGoalInt.bench);return Object(p.jsxs)("div",{style:{height:"84%",width:"100%",backgroundColor:"#6584ff"},children:[Object(p.jsxs)("div",{onClick:function(){e.setState({training:!e.state.training,session:!1})},className:"training-select ".concat(this.state.training?"slider":""),children:[Object(p.jsx)("div",{children:this.state.training?Object(p.jsx)("div",{style:{position:"absolute",right:"29%",top:60,height:600,backgroundColor:"#6584ff",borderRadius:12},children:Object(p.jsx)("div",{onClick:function(e){e.preventDefault(),e.stopPropagation()},className:"normal",style:{width:"100%"},children:this.renderSession({deadlift:t,bench:s,squat:i,ohp:a})})}):null}),Object(p.jsx)("div",{style:{cursor:"pointer"},children:Object(p.jsx)("h3",{style:{marginRight:this.state.training?40:0},children:this.state.training?"PROGRESSION":""})})]}),Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)("h3",{style:{color:"#4264ea"},className:"strongFont"})}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"center",height:480},children:[Object(p.jsx)(F,{toggleGraph:this.toggleGraph.bind(this),rootStore:this.props.rootStore,setSubmitted:this.setSubmitted.bind(this)}),this.state.showGraph?Object(p.jsx)("div",{children:Object(p.jsx)("section",{className:"dashboard content container fadedshort",children:Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)(U,{dataset:I.generalStore.data,submitted:this.state.submitted})})})}):null]}),Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",height:200,marginTop:100,zIndex:-1},children:Object(p.jsx)("div",{className:"scrollbar",style:{overflowY:"auto",maxHeight:600,width:800,fontSize:14,margin:20,padding:20,backgroundColor:"#6584ff"},children:I.generalStore.data.length<1?Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{style:{color:"#fff"},children:"Start by entering your one rep maxes, your training maxes will be calculated at 90% of your true max."}),Object(p.jsxs)("p",{style:{color:"#fff"},children:["Each week, you will increase your training max if you were able to complete all the reps, ",Object(p.jsx)("p",{children:"your new peak set will be suggested for you based on how many reps you achieved."}),Object(p.jsx)("p",{style:{color:"#fff"},children:"Your progress is stored in cookies and will be logged on the graph on the right and can be cleared at any time. "})]})]}):null})})]})}}]),s}(j.Component),_=Object(v.c)($),ee=Object(v.b)("rootStore")(K=Object(v.c)(K=function(e){Object(m.a)(s,e);var t=Object(y.a)(s);function s(e){return Object(f.a)(this,s),t.call(this,e)}return Object(O.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(_,{rootStore:this.props.rootStore})})}}]),s}(b.a.Component))||K)||K,te=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),l(e),n(e)}))};g.a.render(Object(p.jsx)(v.a,{rootStore:I,children:Object(p.jsx)(ee,{})}),document.getElementById("root")),te()}},[[62,1,2]]]);
//# sourceMappingURL=main.467209b3.chunk.js.map