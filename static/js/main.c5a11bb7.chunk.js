(this["webpackJsonpgoit-react-hw-02-statistic"]=this["webpackJsonpgoit-react-hw-02-statistic"]||[]).push([[0],{23:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n(10),i=n.n(a),o=(n(23),n(7)),s=n(4),d=n(11),u=n(12),j=n(17),b=n(16),l=n(2),h=n(3);function O(){var t=Object(l.a)(["\nborder: none;\noutline: none;\nbackground: LightGrey;\nmargin-right: 10px;\npadding-right: 10px;\npadding-left: 10px;\nborder-radius: 3px;\nfont-weight: bold;\n&:hover {\n    background: DimGrey;\n    color: white;\n}\n"]);return O=function(){return t},t}var p=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(c.jsx)(c.Fragment,{children:Object.keys(e).map((function(t){return Object(c.jsx)(x,{type:"button",name:t,onClick:n,children:t.toUpperCase()},t)}))})},x=h.a.button(O());function g(){var t=Object(l.a)(["\nwidth: 1100px;\nmargin: 10px auto;\n/* outline: 1px solid tomato; */\npadding: 10px;\n"]);return g=function(){return t},t}var v=function(t){var e=t.title,n=t.children;return Object(c.jsxs)(f,{children:[Object(c.jsx)("h2",{children:e}),n]})},f=h.a.section(g());function k(){var t=Object(l.a)(["\npadding: 0;\n"]);return k=function(){return t},t}var m=function(t){var e=t.good,n=t.neutral,r=t.bad,a=t.total,i=t.positivePercentage;return Object(c.jsxs)(F,{children:[Object(c.jsxs)("li",{children:["Good: ",Object(c.jsx)("span",{children:e})]}),Object(c.jsxs)("li",{children:["Neutral: ",Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("li",{children:["Bad: ",Object(c.jsx)("span",{children:r})]}),Object(c.jsxs)("li",{children:["Total: ",Object(c.jsx)("span",{children:a})]}),Object(c.jsxs)("li",{children:["Positive feedback: ",Object(c.jsxs)("span",{children:[a?i:0,"%"]})]})]})},F=h.a.ul(k()),y=function(t){var e=t.message;return Object(c.jsx)("p",{children:e})},w=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.addStatistic=function(e){var n=e.target.name;t.setState((function(t){return Object(s.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.bad+e.neutral},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.round(100*e/t.countTotalFeedback())},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{title:"Please leve your feedback",children:Object(c.jsx)(p,{options:this.state,onLeaveFeedback:this.addStatistic})}),Object(c.jsx)(v,{title:"Statistics",children:this.countTotalFeedback()?Object(c.jsx)(m,Object(o.a)(Object(o.a)({},this.state),{},{total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})):Object(c.jsx)(y,{message:"No feedback given"})})]})}}]),n}(r.Component);i.a.render(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c5a11bb7.chunk.js.map