(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__t4gOW",image:"recipe_image__3chVP"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=(a(12),a(2)),l=a.n(s),u=a(6),o=a(1),m=a(3),p=a.n(m),b=function(e){return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.calories),c.a.createElement("img",{className:p.a.image,src:e.image,alt:"..."}),c.a.createElement("ol",null,e.ingredients.map((function(e){return c.a.createElement("li",null,e.text)}))))},f=(a(14),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],p=s[1],f=Object(n.useState)("chicken"),d=Object(o.a)(f,2),h=d[0],E=d[1];Object(n.useEffect)((function(){g()}),[h]);var g=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("bccdbcda","&app_key=").concat("a5b5d2d0d1bfbadb04b669c5b76382bf\t"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(m),p("")},className:"search_form"},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-btn",type:"submit"},"Search")),c.a.createElement("div",{className:"recipe"},a.map((function(e){return c.a.createElement(b,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ffd3ea07.chunk.js.map