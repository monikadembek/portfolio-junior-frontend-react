(window["webpackJsonpportfolio-junior-frontend-react"]=window["webpackJsonpportfolio-junior-frontend-react"]||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=(a(18),a(7)),o=a(8),s=a(10),m=a(9),u=a(11),E=a(5),d=(a(28),function(){return l.a.createElement("div",{className:"nav-container"},l.a.createElement("div",{className:"nav-title"},l.a.createElement("h1",null,l.a.createElement(E.b,{to:"/",exact:!0},"Monika.Dembek")),l.a.createElement("h3",null,"junior frontend developer")),l.a.createElement("nav",{className:"main-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.b,{to:"/about",className:"main-nav__link",activeClassName:"navlink__selected"},"about")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/skills",className:"main-nav__link",activeClassName:"navlink__selected"},"skills")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/portfolio",className:"main-nav__link",activeClassName:"navlink__selected"},"portfolio")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/contact",className:"main-nav__link",activeClassName:"navlink__selected"},"contact")))))}),f=a(6),p=(a(33),function(){return l.a.createElement("div",{className:"start"},l.a.createElement("div",{className:"start__intro--1"},l.a.createElement("div",null,"design"),l.a.createElement("div",null,"code"),l.a.createElement("div",null,"passion")),l.a.createElement("div",{className:"start__intro--2"},l.a.createElement("h3",null,"Monika.Dembek"),l.a.createElement("h2",null,"Frontend"),l.a.createElement("h2",null,"Developer")),l.a.createElement("div",{style:{marginTop:40}},"This is a new portfolio coded in React and it is still under contruction. ",l.a.createElement("br",null),"Most pages have its content but there are still some work to be done, especially implementing responsive web design."))}),h=(a(34),function(e){return l.a.createElement("div",{className:"page-title"},e.title)}),v=(a(35),function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(h,{title:"about"}),l.a.createElement("div",{className:"about"},l.a.createElement("img",{src:"img/mina-pic.jpg",alt:"bio",className:"bio-photo"}),l.a.createElement("div",{className:"about__content"},l.a.createElement("h2",{className:"about__header"},"Facts"),l.a.createElement("ul",{className:"about__list"},l.a.createElement("li",null,"Name:"),l.a.createElement("li",null,"Monika Dembek"),l.a.createElement("li",null,"City:"),l.a.createElement("li",null,"Bydgoszcz, Poland"),l.a.createElement("li",null,"Education:"),l.a.createElement("li",null,"IT engeener"),l.a.createElement("li",null,"Professional experience:"),l.a.createElement("li",null,"Graphic designer for 13 years, designing mainly DTP materials, working in advertisig agencies and as a freelancer"),l.a.createElement("li",null,"Current job:"),l.a.createElement("li",null,"Junior frontend developer")),l.a.createElement("h2",{className:"about__header"},"Goals"),l.a.createElement("ul",{className:"about__list"},l.a.createElement("li",null,"General:"),l.a.createElement("li",null,"Developing my skills as frontend developer, quickly progressing into regular position"),l.a.createElement("li",null,"Next to learn:"),l.a.createElement("li",null,"Redux ",l.a.createElement("br",null),"Google Firebase",l.a.createElement("br",null),"Styled Components")),l.a.createElement("h2",{className:"about__header"},"Fun facts"),l.a.createElement("ul",{className:"about__list"},l.a.createElement("li",null,"Lifestyle:"),l.a.createElement("li",null,"Vegetarian"),l.a.createElement("li",null,"Animals:"),l.a.createElement("li",null,"one assasin cat"),l.a.createElement("li",null,"Enjoy:"),l.a.createElement("li",null,"attending live concerts",l.a.createElement("br",null),"going to cinema"),l.a.createElement("li",null,"Favoutite cities:"),l.a.createElement("li",null,"Prague and Amsterdam"),l.a.createElement("li",null,"Current tv series:"),l.a.createElement("li",null,"La casa de papel")))))}),b=(a(36),function(e){var t=e.name,a=e.info,n=e.imgSrc;return l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:n,className:"skill__img",alt:"technology icon"}),l.a.createElement("div",null,l.a.createElement("h3",{className:"skill__name"},t),l.a.createElement("p",{className:"skill__info"},a)))}),g=(a(37),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={skills:[],isLoaded:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/data.json").then(function(e){return e.json()}).then(function(t){e.setState({skills:t.skills,isLoaded:!0})}).catch(function(e){return console.log("Error:",e)})}},{key:"render",value:function(){console.log(this.state.skills);var e=this.state.skills.map(function(e){return l.a.createElement(b,{key:e.id,name:e.name,info:e.info,imgSrc:e.imgSrc})});return l.a.createElement("div",null,l.a.createElement(h,{title:"skills"}),l.a.createElement("div",{className:"skills-cnt"},this.state.isLoaded?e:l.a.createElement("p",null,"Currently there are no skills to show")))}}]),t}(n.Component)),k=(a(38),function(e){var t=e.title,a=e.tech,n=e.desc,r=e.imgSrc,c=e.codeLink,i=e.pageLink,o=a.join(" / ");return l.a.createElement("div",{className:"project"},l.a.createElement("h3",{className:"project__title"},t),l.a.createElement("img",{src:r,className:"project__thumbSrc",alt:"project thumbnail"}),l.a.createElement("p",{className:"project__techStack"},o),l.a.createElement("p",{className:"project__desc"},n),l.a.createElement("div",{className:"project__links"},i.length>0?l.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"project__button btn--square"},"Live"):null,c.length>0?l.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"project__button btn--square"},"Code"):null))}),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={portfolio:[],isLoaded:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/data.json").then(function(e){return e.json()}).then(function(t){e.setState({portfolio:t.portfolio,isLoaded:!0})}).catch(function(e){return console.log("Error:"+e)})}},{key:"render",value:function(){var e=this.state.portfolio.map(function(e){return l.a.createElement(k,{key:e.id,title:e.title,tech:e.technologies,desc:e.description,imgSrc:e.thumbSrc,codeLink:e.codeLink,pageLink:e.pageLink})});return l.a.createElement("div",null,l.a.createElement(h,{title:"skills"}),l.a.createElement("div",{className:"skills-cnt"},this.state.isLoaded?e:l.a.createElement("p",null,"No portfolio projects to display")))}}]),t}(l.a.Component),N=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 32 32"},l.a.createElement("title",null,"phone"),l.a.createElement("path",{fill:"#ffffff",d:"M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"})),l.a.createElement("a",{href:"tel:0048608414676"},"+48 608 414 676")),l.a.createElement("div",null,l.a.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l.a.createElement("path",{fill:"#ffffff",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"})),l.a.createElement("a",{href:"mailto:monika.dembek@gmail.com"},"monika.dembek@gmail.com")))},j=(a(39),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page"},l.a.createElement(f.a,{path:"/",exact:!0,component:p}),l.a.createElement(f.a,{path:"/about",component:v}),l.a.createElement(f.a,{path:"/skills",component:g}),l.a.createElement(f.a,{path:"/portfolio",component:_}),l.a.createElement(f.a,{path:"/contact",component:N})))}),w=(a(40),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:"https://github.com/monikadembek",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://www.dropbox.com/s/5ljh8wqazchttux/Monika%20Dembek%20CV%20junior%20front%20end%20developer%2009.2019.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"},"CV"),l.a.createElement("a",{href:"https://www.linkedin.com/in/monikadembek/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin"})))}),y=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{basename:"/portfolio-junior-frontend-react"},l.a.createElement("div",{className:"App"},l.a.createElement("aside",null,l.a.createElement(d,null)),l.a.createElement("main",null,l.a.createElement(j,null)),l.a.createElement("footer",{className:"footer"},l.a.createElement(w,null)))))}}]),t}(n.Component));c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.328ea932.chunk.js.map