(this["webpackJsonpgoit-react-hw-02-statistic"]=this["webpackJsonpgoit-react-hw-02-statistic"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n(3),s=n.n(i),r=(n(14),n(4)),o=n(5),d=n(6),l=n(8),j=n(7),b=function(t){var e=t.onLeaveFeedback;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{type:"button",name:"good",onClick:e,children:"Good"}),Object(c.jsx)("button",{type:"button",name:"neutral",onClick:e,children:"Neutral"}),Object(c.jsx)("button",{type:"button",name:"bad",onClick:e,children:"Bad"})]})},u=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:e}),n]})},h=function(t){var e=t.good,n=t.neutral,a=t.bad,i=t.total,s=t.positivePercentage;return Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",Object(c.jsx)("span",{children:e})]}),Object(c.jsxs)("li",{children:["Neutral: ",Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("li",{children:["Bad: ",Object(c.jsx)("span",{children:a})]}),Object(c.jsxs)("li",{children:["Total: ",Object(c.jsx)("span",{children:i})]}),Object(c.jsxs)("li",{children:["Positive feedback: ",Object(c.jsxs)("span",{children:[s,"%"]})]})]})},O=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.addStatistic=function(e){var n=e.target.name;t.setState((function(t){return Object(r.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.bad+t.state.neutral},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{title:"Please leve your feedback",children:Object(c.jsx)(b,{options:0,onLeaveFeedback:this.addStatistic})}),Object(c.jsx)(u,{title:"Statistics",children:Object(c.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component);s.a.render(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.414c002d.chunk.js.map