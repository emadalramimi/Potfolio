"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[697],{8279:(e,i,s)=>{s.d(i,{sW:()=>a,Sv:()=>l,AA:()=>d,Ce:()=>A});var n=s(5043),t=s(579);var r=s(2127);const a=()=>{const[e,i]=(0,n.useState)(!1),s=()=>{window.scrollY>300?i(!0):i(!1)};return(0,n.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[]),(0,t.jsx)("div",{id:"back-to-top",children:(0,t.jsx)("div",{className:e?"back-to-top":"hide-back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,t.jsx)(r.UN8,{className:"back-to-top__icon"})})})};var c=s(4282);const l=e=>(0,t.jsx)(c.A,{type:e.type,variant:e.variant,className:e.className,disabled:e.disabled,onClick:e.onClick,children:e.children});s(5751),s(6201);var o=s(9566);const d=e=>{const[i,s]=n.useState(e.show);return(0,t.jsxs)(o.A,{show:i,onHide:()=>s(!1),children:[(0,t.jsx)(o.A.Header,{closeButton:!0,children:(0,t.jsx)(o.A.Title,{children:"Error"})}),(0,t.jsx)(o.A.Body,{children:(0,t.jsx)("p",{children:e.error})}),(0,t.jsx)(o.A.Footer,{children:(0,t.jsx)(l,{onClick:()=>s(!1),children:"Close"})})]})};var h=s(7417),m=s(8553);const A=e=>{const{isLoading:i,error:s,sendRequest:r}=(0,m.A)(),[a,c]=(0,n.useState)("");return(0,n.useEffect)((()=>{if(!s){function c(e){var i=document.createElement("iframe");i.setAttribute("src","https://www.youtube.com/embed/"+a+"?autoplay=1&rel=0"),i.setAttribute("frameborder","0"),i.setAttribute("allowfullscreen","1"),i.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),e.parentNode.replaceChild(i,e)}for(var e=document.getElementsByClassName("youtube-player"),i=0;i<e.length;i++){var n=document.createElement("div");n.setAttribute("data-id",a);var t=document.createElement("img");t.src=a?"//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",a):"//ik.imagekit.io/itsrakesh/Portfolio/Misc/no_video_qewh2eY8Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644752640643",n.appendChild(t);var r=document.createElement("div");r.setAttribute("class","play"),n.appendChild(r),a&&(n.onclick=function(){c(this)}),e[i].appendChild(n)}}}),[a,s]),(0,n.useEffect)((()=>{(async()=>{try{const i=await r(`${{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL}/project/projects/video/${e.repoName}`);c(i)}catch(i){}})()}),[r,e.repoName]),(0,t.jsxs)("div",{className:"youtube-player","data-id":a,children:[i&&(0,t.jsx)(h.A,{animation:"border"}),s&&(0,t.jsx)("p",{children:s})]})}},8553:(e,i,s)=>{s.d(i,{A:()=>r});var n=s(5043),t=s(6213);const r=()=>{const[e,i]=(0,n.useState)(!1),[s,r]=(0,n.useState)(null),[a,c]=(0,n.useState)(!1),l=(0,n.useRef)([]),o=(0,n.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i(!0);const a=new AbortController;l.current.push(a);try{const r=await(0,t.A)({method:s,url:e,data:n,signal:a.signal});return i(!1),r.data}catch(h){var o,d;const e=(null===(o=h.response)||void 0===o||null===(d=o.data)||void 0===d?void 0:d.message)||h.message||"An unexpected error occurred";throw r(e),c(!0),new Error(e)}finally{i(!1)}}),[]),d=(0,n.useCallback)((()=>{r(null),c(!1)}),[]);return(0,n.useEffect)((()=>{const e=l.current;return()=>{e.forEach((e=>e.abort()))}}),[]),{isLoading:e,error:s,sendRequest:o,show:a,clearError:d}}},1543:(e,i,s)=>{s.r(i),s.d(i,{default:()=>C});var n=s(5043),t=s(1591),r=s(8279),a=s(3519),c=s(1072),l=s(8602),o=s(5475),d=s(5369),h=s(1434),m=s(579);const A=()=>(0,m.jsx)("div",{id:"introduction",children:(0,m.jsx)(a.A,{children:(0,m.jsxs)("div",{className:"introduction",children:[(0,m.jsxs)(c.A,{children:[(0,m.jsx)(l.A,{sm:!0,children:(0,m.jsx)("div",{className:"introduction__img",children:(0,m.jsx)("img",{src:"https://via.placeholder.com/400x400?text=Emad+Al+Ramimi",alt:"Emad Al Ramimi",loading:"lazy"})})}),(0,m.jsxs)(l.A,{className:"introduction__short mt-4",sm:!0,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Emad Al Ramimi"}),(0,m.jsx)("p",{children:"Computer Scientist, AI Developer, and Web Developer"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{children:"Email Me"}),(0,m.jsx)("a",{href:"mailto:alramimi10@gmail.com",children:(0,m.jsx)("span",{className:"introduction__short__email",children:"alramimi10@gmail.com"})})]}),(0,m.jsx)("div",{className:"introduction__short__links",children:(0,m.jsxs)(c.A,{children:[(0,m.jsx)(l.A,{lg:3,md:6,xs:6,children:(0,m.jsx)(o.N_,{to:"/work",children:(0,m.jsx)(r.Sv,{className:"work",children:"Projects"})})}),(0,m.jsx)(l.A,{lg:3,md:6,xs:6,children:(0,m.jsx)(o.N_,{to:"/about",children:(0,m.jsx)(r.Sv,{className:"about",children:"About"})})}),(0,m.jsx)(l.A,{lg:3,md:6,xs:6,children:(0,m.jsx)(o.N_,{to:"/contact",children:(0,m.jsx)(r.Sv,{className:"contact",children:"Contact"})})})]})}),(0,m.jsxs)("div",{className:"introduction__short__social",children:[(0,m.jsx)("h6",{children:"Connect with me"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("a",{href:"https://github.com/emadalramimi",target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(d.hL4,{className:"social-icon"})}),(0,m.jsx)("a",{href:"https://www.linkedin.com/in/emad-alramimi",target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(d.QEs,{className:"social-icon"})}),(0,m.jsx)("a",{href:"mailto:alramimi10@gmail.com",children:(0,m.jsx)(h.MH0,{className:"social-icon"})})]})]})]})]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("div",{className:"introduction__brief",children:[(0,m.jsx)("p",{children:"Hi there! I'm Emad Al Ramimi, a passionate Computer Scientist and AI Developer with expertise in Machine Learning, Web Development, and Drone Technology. Currently pursuing my Bachelor's in Computer Science at the University of Paul Sabatier in Toulouse, France, I am dedicated to creating innovative solutions that leverage cutting-edge technologies."}),(0,m.jsx)("p",{children:"My journey includes developing groundbreaking projects like the AI Guardian Drone, Aircraft Damage Detection system, and AquaCare IoT platform. I've been recognized for my innovative work, including winning the Water Research & Innovation Award and participating in global initiatives like COP28 and ROWAD Hackathon."}),(0,m.jsx)("p",{children:"As an entrepreneur and technology enthusiast, I'm committed to pushing the boundaries of AI and creating impactful solutions that address real-world challenges."})]})]})})});var g=s(3244),j=s.n(g);s(6948),s(8343);const x=()=>((0,n.useEffect)((()=>{j()(".calendar","RakeshPotnuru",{tooltips:!0})}),[]),(0,m.jsx)(a.A,{children:(0,m.jsxs)("div",{className:"contributions-graph",children:[(0,m.jsx)("h2",{children:"OSS Contributions"}),(0,m.jsx)("div",{className:"calendar"})]})})),v=[{techName:"Python",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",bg:"#FFD43B"},{techName:"Machine Learning",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",bg:"#FF6F61"},{techName:"JavaScript",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",bg:"#F7DF1E"},{techName:"React",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",bg:"#61DAFB"},{techName:"Docker",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",bg:"#2496ED"},{techName:"C++",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",bg:"#00599C"},{techName:"Java",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",bg:"#007396"},{techName:"Git",imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",bg:"#F05032"}],u=e=>(0,m.jsxs)("div",{className:"tech-card",children:[(0,m.jsx)("img",{style:{background:`${e.bg}`},src:e.imageUrl,alt:e.title}),(0,m.jsx)("h6",{className:"mt-2",children:e.title})]}),p=()=>(0,m.jsx)(a.A,{children:(0,m.jsxs)("div",{className:"details",children:[(0,m.jsxs)("div",{className:"details__techs",children:[(0,m.jsx)("h2",{className:"details__techs__title",children:"Technologies & Skills"}),(0,m.jsx)("div",{className:"details__techs__container",children:(0,m.jsx)(c.A,{className:"mt-5",children:v.map(((e,i)=>(0,m.jsx)(l.A,{xs:4,md:3,className:"mb-4",children:(0,m.jsx)(u,{imageUrl:e.imageUrl,title:e.techName,bg:e.bg})},i)))})})]}),(0,m.jsxs)("div",{className:"details__skills mt-5",children:[(0,m.jsx)("h2",{className:"details__skills__title",children:"Skill Categories"}),(0,m.jsx)("div",{className:"details__skills__container",children:(0,m.jsxs)(c.A,{children:[(0,m.jsxs)(l.A,{sm:!0,children:[(0,m.jsx)("h4",{children:"\ud83e\udd16 Machine Learning & AI"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Computer Vision"}),(0,m.jsx)("li",{children:"Deep Learning"}),(0,m.jsx)("li",{children:"Object Detection"}),(0,m.jsx)("li",{children:"Neural Networks"})]})]}),(0,m.jsxs)(l.A,{sm:!0,children:[(0,m.jsx)("h4",{children:"\ud83d\udcbb Web Development"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Full Stack Development"}),(0,m.jsx)("li",{children:"React.js"}),(0,m.jsx)("li",{children:"REST APIs"}),(0,m.jsx)("li",{children:"Frontend & Backend"})]})]}),(0,m.jsxs)(l.A,{sm:!0,children:[(0,m.jsx)("h4",{children:"\ud83d\ude81 Drone & IoT Technology"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Embedded Systems"}),(0,m.jsx)("li",{children:"Drone Programming"}),(0,m.jsx)("li",{children:"IoT Solutions"}),(0,m.jsx)("li",{children:"Sensor Integration"})]})]})]})})]}),(0,m.jsxs)("div",{className:"details__languages mt-5",children:[(0,m.jsx)("h2",{className:"details__languages__title",children:"Languages"}),(0,m.jsx)("div",{className:"details__languages__container",children:(0,m.jsxs)(c.A,{children:[(0,m.jsx)(l.A,{sm:!0,children:(0,m.jsx)("h4",{children:"\ud83c\uddeb\ud83c\uddf7 French (B2)"})}),(0,m.jsx)(l.A,{sm:!0,children:(0,m.jsx)("h4",{children:"\ud83c\uddec\ud83c\udde7 English (B2)"})}),(0,m.jsx)(l.A,{sm:!0,children:(0,m.jsx)("h4",{children:"\ud83c\uddf8\ud83c\udde6 Arabic (Native)"})})]})})]}),(0,m.jsxs)("div",{className:"support mt-5",children:[(0,m.jsx)("h2",{children:"Want to collaborate?"}),(0,m.jsxs)("p",{children:["Connect with me on ",(0,m.jsx)(o.N_,{to:"/contact",children:"LinkedIn or GitHub"})," for potential projects or research opportunities!"]})]})]})});var f=s(2327);s.p;s.p;s.p;s(2806);const E=e=>(0,m.jsx)("div",{className:"experience__content__item",children:(0,m.jsxs)(f.A,{direction:"horizontal",gap:5,children:[(0,m.jsx)("div",{className:"experience__content__item__img",children:(0,m.jsx)("img",{src:e.companyImgUrl?e.companyImgUrl:"data:image/png;base64,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",alt:e.company})}),(0,m.jsxs)("div",{className:"experience__content__item__details mt-3",children:[(0,m.jsx)("h3",{children:e.company}),(0,m.jsx)("h5",{children:e.position}),(0,m.jsxs)("span",{className:"type",children:[(0,m.jsx)("span",{style:{backgroundColor:"Present"===e.endDate?"rgb(51, 255, 0)":"#ff0000"}})," ",e.type]}),(0,m.jsxs)("p",{children:[e.startDate," - ",e.endDate]})]})]})}),k=()=>(0,m.jsx)("div",{id:"experience",children:(0,m.jsx)(a.A,{children:(0,m.jsxs)("div",{className:"experience",children:[(0,m.jsx)("h2",{children:"Professional Experience"}),(0,m.jsxs)("div",{className:"experience__content",children:[(0,m.jsx)(E,{company:"Matterz Company",type:"Full Time",position:"Application & Web Developer",startDate:"2023",endDate:"Present"}),(0,m.jsx)("div",{className:"line"}),(0,m.jsx)(E,{company:"Rent-Way",type:"Internship",position:"Web Developer Intern",startDate:"Aug 2019",endDate:"Sep 2019"}),(0,m.jsx)("div",{className:"line"}),(0,m.jsx)(E,{company:"Innovators Course, Oman",type:"Mentorship",position:"Mentor & Facilitator",startDate:"Jul-Nov 2023",endDate:"Nov 2023"}),(0,m.jsx)("div",{className:"line"}),(0,m.jsx)(E,{company:"Embedded Systems & IoT",type:"Internship",position:"Technology Intern",startDate:"Aug 2019",endDate:"Sep 2019"})]})]})})}),C=()=>(0,m.jsxs)(n.Fragment,{children:[(0,m.jsxs)(t.m,{children:[(0,m.jsx)("title",{children:"About Emad Al Ramimi | AI & Machine Learning"}),(0,m.jsx)("meta",{name:"description",content:"Computer Scientist, AI Developer, and Innovator"}),(0,m.jsx)("meta",{property:"og:title",content:"About Emad Al Ramimi"}),(0,m.jsx)("meta",{property:"og:description",content:"Computer Scientist, AI Developer, and Innovator"})]}),(0,m.jsx)(A,{}),(0,m.jsx)(x,{}),(0,m.jsx)(k,{}),(0,m.jsx)(p,{}),(0,m.jsx)(r.sW,{})]})}}]);
//# sourceMappingURL=697.f2106a94.chunk.js.map