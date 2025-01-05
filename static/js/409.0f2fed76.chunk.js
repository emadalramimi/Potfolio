"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[409],{985:(e,t,i)=>{e.exports=i.p+"static/media/ai-drone.c693cf03d99ff5da5180.jpg"},7256:(e,t,i)=>{e.exports=i.p+"static/media/aircraft.0cd09475d724022a5747.jpg"},1209:(e,t,i)=>{e.exports=i.p+"static/media/aquacare.95ec85b1e2d491b3862f.jpg"},8279:(e,t,i)=>{i.d(t,{sW:()=>n,Sv:()=>l,AA:()=>d,Ce:()=>h});var r=i(5043),a=i(579);var o=i(2127);const n=()=>{const[e,t]=(0,r.useState)(!1),i=()=>{window.scrollY>300?t(!0):t(!1)};return(0,r.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[]),(0,a.jsx)("div",{id:"back-to-top",children:(0,a.jsx)("div",{className:e?"back-to-top":"hide-back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,a.jsx)(o.UN8,{className:"back-to-top__icon"})})})};var s=i(4282);const l=e=>(0,a.jsx)(s.A,{type:e.type,variant:e.variant,className:e.className,disabled:e.disabled,onClick:e.onClick,children:e.children});i(5751),i(6201);var c=i(9566);const d=e=>{const[t,i]=r.useState(e.show);return(0,a.jsxs)(c.A,{show:t,onHide:()=>i(!1),children:[(0,a.jsx)(c.A.Header,{closeButton:!0,children:(0,a.jsx)(c.A.Title,{children:"Error"})}),(0,a.jsx)(c.A.Body,{children:(0,a.jsx)("p",{children:e.error})}),(0,a.jsx)(c.A.Footer,{children:(0,a.jsx)(l,{onClick:()=>i(!1),children:"Close"})})]})};var p=i(7417),m=i(8553);const h=e=>{const{isLoading:t,error:i,sendRequest:o}=(0,m.A)(),[n,s]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!i){function s(e){var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+n+"?autoplay=1&rel=0"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","1"),t.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),e.parentNode.replaceChild(t,e)}for(var e=document.getElementsByClassName("youtube-player"),t=0;t<e.length;t++){var r=document.createElement("div");r.setAttribute("data-id",n);var a=document.createElement("img");a.src=n?"//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",n):"//ik.imagekit.io/itsrakesh/Portfolio/Misc/no_video_qewh2eY8Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644752640643",r.appendChild(a);var o=document.createElement("div");o.setAttribute("class","play"),r.appendChild(o),n&&(r.onclick=function(){s(this)}),e[t].appendChild(r)}}}),[n,i]),(0,r.useEffect)((()=>{(async()=>{try{const t=await o(`${{NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL}/project/projects/video/${e.repoName}`);s(t)}catch(t){}})()}),[o,e.repoName]),(0,a.jsxs)("div",{className:"youtube-player","data-id":n,children:[t&&(0,a.jsx)(p.A,{animation:"border"}),i&&(0,a.jsx)("p",{children:i})]})}},8553:(e,t,i)=>{i.d(t,{A:()=>o});var r=i(5043),a=i(6213);const o=()=>{const[e,t]=(0,r.useState)(!1),[i,o]=(0,r.useState)(null),[n,s]=(0,r.useState)(!1),l=(0,r.useRef)([]),c=(0,r.useCallback)((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t(!0);const n=new AbortController;l.current.push(n);try{const o=await(0,a.A)({method:i,url:e,data:r,signal:n.signal});return t(!1),o.data}catch(p){var c,d;const e=(null===(c=p.response)||void 0===c||null===(d=c.data)||void 0===d?void 0:d.message)||p.message||"An unexpected error occurred";throw o(e),s(!0),new Error(e)}finally{t(!1)}}),[]),d=(0,r.useCallback)((()=>{o(null),s(!1)}),[]);return(0,r.useEffect)((()=>{const e=l.current;return()=>{e.forEach((e=>e.abort()))}}),[]),{isLoading:e,error:i,sendRequest:c,show:n,clearError:d}}},3409:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var r=i(5043),a=i(1591),o=i(3519),n=i(1072),s=i(8602),l=i(2038),c=i(4117),d=i(5369),p=i(1434),m=i(579);const h=()=>{const{t:e,i18n:t}=(0,c.Bd)(),i=(0,r.useMemo)((()=>[e("home.roles.aiDeveloper"),1e3,e("home.roles.mlSpecialist"),1e3,e("home.roles.webDeveloper"),1e3,e("home.roles.droneTech"),1e3]),[e,t.language]);return(0,m.jsx)("div",{className:"hero-wrapper",dir:t.dir(),children:(0,m.jsx)(o.A,{className:"hero-container",children:(0,m.jsxs)(n.A,{className:"hero-content",children:[(0,m.jsx)(s.A,{md:6,className:"hero-text",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{className:"hero-greeting",children:e("home.greeting")}),(0,m.jsx)("h1",{className:"hero-name",children:e("home.name")}),(0,m.jsx)("div",{className:"hero-typed-container",children:(0,m.jsx)(l.d,{sequence:i,wrapper:"span",speed:50,repeat:1/0,className:"hero-typed-text"},t.language)}),(0,m.jsx)("p",{className:"hero-description",children:e("home.description")}),(0,m.jsxs)("div",{className:"hero-cta-buttons",children:[(0,m.jsxs)("a",{href:"/resume.pdf",download:!0,className:"btn btn-primary",children:[(0,m.jsx)(p.pfD,{})," ",e("home.downloadCV")]}),(0,m.jsx)("a",{href:"#contact",className:"btn btn-outline-primary",children:e("home.contactMe")})]}),(0,m.jsxs)("div",{className:"hero-social-links",children:[(0,m.jsx)("a",{href:"https://github.com/emadalramimi",target:"_blank",rel:"noopener noreferrer",title:e("home.socialLinks.github"),children:(0,m.jsx)(d.hL4,{})}),(0,m.jsx)("a",{href:"https://www.linkedin.com/in/emad-alramimi",target:"_blank",rel:"noopener noreferrer",title:e("home.socialLinks.linkedin"),children:(0,m.jsx)(d.QEs,{})}),(0,m.jsx)("a",{href:"https://twitter.com/emadalramimi",target:"_blank",rel:"noopener noreferrer",title:e("home.socialLinks.twitter"),children:(0,m.jsx)(d.feZ,{})}),(0,m.jsx)("a",{href:"mailto:alramimi10@gmail.com",title:e("home.socialLinks.email"),children:(0,m.jsx)(p.MH0,{})})]})]})}),(0,m.jsx)(s.A,{md:6,className:"hero-image",children:(0,m.jsx)("img",{src:"/profile.jpg",alt:e("home.name"),className:"profile-image"})})]})})})};var g=i(5475),x=i(5751),u=i(1926),b=i(9927),f=i(5843),j=i(5464),v=i(8279),y=i(8075);const w=j.Ay.div`
  .terminal {
    background: linear-gradient(180deg, #1E1E1E 0%, #2D2D2D 100%);
    border-radius: 12px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    font-family: 'JetBrains Mono', monospace;
    min-height: 450px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
      border-color: rgba(255, 255, 255, 0.15);
    }
  }

  .terminal-header {
    background: linear-gradient(90deg, #2D2D2D 0%, #353535 100%);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .terminal-buttons {
    display: flex;
    gap: 8px;
    margin-right: 15px;

    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover::after {
        opacity: 1;
      }
    }

    .close { background: linear-gradient(45deg, #FF5F56, #FF4242); }
    .minimize { background: linear-gradient(45deg, #FFBD2E, #FFB000); }
    .maximize { background: linear-gradient(45deg, #27C93F, #1AAB29); }
  }

  .terminal-title {
    color: #858585;
    font-size: 0.9rem;
    flex-grow: 1;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .terminal-controls {
    display: flex;
    gap: 10px;
    color: #858585;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.2);
    padding: 4px 10px;
    border-radius: 4px;
  }

  .terminal-body {
    padding: 40px;
    color: #fff;
    font-size: 1rem;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 350px;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  }

  .title-line {
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    .prompt {
      color: #C678DD;
      margin-right: 12px;
      opacity: 0.9;
    }

    .title {
      color: #E5C07B;
      font-weight: bold;
      font-size: 1.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      letter-spacing: -0.5px;
    }
  }

  .description-line {
    margin-bottom: 30px;
    color: #ABB2BF;
    padding-left: 25px;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    font-size: 1.1rem;
    line-height: 1.7;

    .description {
      display: inline-block;
    }
  }

  .highlight-line {
    margin-bottom: 35px;
    display: flex;
    align-items: center;

    .prompt {
      color: #E06C75;
      margin-right: 12px;
      opacity: 0.9;
    }

    .highlight {
      color: #56B6C2;
      background: rgba(86, 182, 194, 0.1);
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.95rem;
      border: 1px solid rgba(86, 182, 194, 0.2);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(86, 182, 194, 0.15);
        border-color: rgba(86, 182, 194, 0.3);
      }
    }
  }

  .explore-line {
    margin-top: auto;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 1rem;
      font-weight: 500;
      padding: 12px 24px;
      border-radius: 8px;
      background: linear-gradient(135deg, #61AFEF 0%, #56B6C2 100%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(97, 175, 239, 0.3);
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(97, 175, 239, 0.4);
        background: linear-gradient(135deg, #74BEFF 0%, #65C5D1 100%);
      }

      svg {
        font-size: 1.1rem;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(4px) translateY(-2px);
      }
    }
  }

  .progress-bar {
    margin-top: 30px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: linear-gradient(90deg, #61AFEF 0%, #56B6C2 100%);
      animation: progress 5s linear infinite;
      width: ${e=>(e.currentIndex+1)*(100/e.totalAchievements)}%;
      transition: width 0.3s ease;
      box-shadow: 0 0 10px rgba(97, 175, 239, 0.5);
    }
  }

  @keyframes progress {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  .typed-cursor {
    color: #61AFEF;
    text-shadow: 0 0 8px rgba(97, 175, 239, 0.5);
  }
`,N=e=>{let{achievement:t,totalAchievements:i,currentIndex:a}=e;const o=(0,r.useRef)(null),n=(0,r.useRef)(null),s=(0,r.useRef)(null),l=(0,r.useRef)(null);return(0,r.useEffect)((()=>{s.current=new y.A(o.current,{strings:[t.title],typeSpeed:30,showCursor:!1,startDelay:100}),l.current=new y.A(n.current,{strings:[t.description],typeSpeed:20,showCursor:!0,startDelay:300,cursorChar:"\u258b"});const e=Math.max(30*t.title.length+200,20*t.description.length+400),i=setTimeout((()=>{var e,t;null===(e=s.current)||void 0===e||e.destroy(),null===(t=l.current)||void 0===t||t.destroy()}),e+2500);return()=>{var e,t;clearTimeout(i),null===(e=s.current)||void 0===e||e.destroy(),null===(t=l.current)||void 0===t||t.destroy()}}),[t]),(0,m.jsx)(w,{currentIndex:a,totalAchievements:i,children:(0,m.jsxs)("div",{className:"terminal",children:[(0,m.jsxs)("div",{className:"terminal-header",children:[(0,m.jsxs)("div",{className:"terminal-buttons",children:[(0,m.jsx)("span",{className:"close"}),(0,m.jsx)("span",{className:"minimize"}),(0,m.jsx)("span",{className:"maximize"})]}),(0,m.jsx)("div",{className:"terminal-title",children:"achievements.exe"}),(0,m.jsx)("div",{className:"terminal-controls",children:(0,m.jsx)("span",{children:`${a+1}/${i}`})})]}),(0,m.jsxs)("div",{className:"terminal-body",children:[(0,m.jsxs)("div",{className:"title-line",children:[(0,m.jsx)("span",{className:"prompt",children:">"}),(0,m.jsx)("span",{ref:o,className:"title"})]}),(0,m.jsx)("div",{className:"description-line",children:(0,m.jsx)("span",{ref:n,className:"description"})}),(0,m.jsxs)("div",{className:"highlight-line",children:[(0,m.jsx)("span",{className:"prompt",children:"#"}),(0,m.jsx)("span",{className:"highlight",children:t.highlight})]}),(0,m.jsx)("div",{className:"explore-line",children:(0,m.jsxs)(g.N_,{to:"/achievements",children:["Explore All Achievements ",(0,m.jsx)(d.uoG,{})]})}),(0,m.jsx)("div",{className:"progress-bar"})]})]})})};i(3793);const A=j.Ay.section`
  padding: 4rem 0;
  background: #0D1117;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, #0D1117 21px, transparent 1%) center,
      linear-gradient(#0D1117 21px, transparent 1%) center,
      #16181C;
    background-size: 22px 22px;
    opacity: 0.4;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #58A6FF;
    margin-bottom: 1rem;
    font-family: 'JetBrains Mono', monospace;
    position: relative;

    &::before {
      content: '< ';
      color: #7EE787;
    }

    &::after {
      content: ' />';
      color: #7EE787;
    }
  }

  .section-subtitle {
    text-align: center;
    color: #8B949E;
    margin-bottom: 3rem;
    font-size: 1.1rem;
    font-family: 'JetBrains Mono', monospace;
    position: relative;

    &::before {
      content: '// ';
      color: #6E7681;
    }
  }

  .achievements-container {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .view-more {
    text-align: center;
    position: relative;
    z-index: 1;
    margin-top: 2rem;
  }
`,E=(0,j.Ay)(u.P.div)`
  background: linear-gradient(135deg, #1C2128 0%, #22272E 100%);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }

  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-category {
    color: #7EE787;
    font-size: 0.9rem;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 0.5rem;
  }

  .project-title {
    color: #E6EDF3;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .project-description {
    color: #8B949E;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    span {
      background: rgba(88, 166, 255, 0.1);
      color: #58A6FF;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.85rem;
      font-family: 'JetBrains Mono', monospace;
    }
  }

  .project-links {
    display: flex;
    gap: 1rem;

    a {
      color: #8B949E;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: #58A6FF;
      }
    }
  }
`,k=[{icon:d.SBv,count:15,label:"Awards & Honors",description:"Local and international recognitions"},{icon:d.ZPX,count:35,label:"Projects",description:"Cutting-edge projects and solutions"},{icon:d.YXz,count:70,label:"Participations",description:"Conferences, hackathons, and events"},{icon:d.w_X,count:3,label:"Experience",description:"Years of professional expertise"}],C=[{icon:d.Z0L,title:"Research Excellence",description:"Award-winning innovations in sustainable water purification technologies",highlight:"Featured in International Research Journal"},{icon:d.f35,title:"Global Recognition",description:"Selected Scholar for LIYSF 2024 at Imperial College London",highlight:"Representing Innovation in Science"},{icon:d.tut,title:"Tech Innovation",description:"Champion at International Hackathons with breakthrough solutions",highlight:"Multiple Competition Wins"},{icon:d.uoG,title:"Leadership",description:"Spearheaded innovative tech initiatives with global impact",highlight:"Driving Technological Change"}],S=[{id:1,title:"AI Guardian Drone",category:"AI & DRONE TECHNOLOGY",shortDescription:"Advanced AI-powered drone for search and rescue operations",technologies:["Python","OpenCV","TensorFlow","ROS"],githubLink:"https://github.com/emadalramimi/AI-Guardian-Drone",demoLink:"https://demo.ai-guardian-drone.com",imageUrl:i(985)},{id:2,title:"Aircraft Damage Detection",category:"COMPUTER VISION",shortDescription:"YOLOv8-based AI system for aircraft damage assessment",technologies:["Python","YOLOv8","PyTorch","OpenCV"],githubLink:"https://github.com/emadalramimi/aircraft-damage-detection",demoLink:"https://demo.aircraft-damage.com",imageUrl:i(7256)},{id:3,title:"AquaCare IoT System",category:"IOT & MACHINE LEARNING",shortDescription:"Smart water quality monitoring and prediction platform",technologies:["Python","TensorFlow","Raspberry Pi","Node.js"],githubLink:"https://github.com/emadalramimi/aquacare-iot",demoLink:"https://demo.aquacare-iot.com",imageUrl:i(1209)}],D=e=>{let{stat:t}=e;const i=(0,b.s)(),[a,o]=(0,f.Wx)({triggerOnce:!0,threshold:.1});return(0,r.useEffect)((()=>{o&&i.start("visible")}),[i,o]),(0,m.jsxs)(u.P.div,{ref:a,initial:"hidden",animate:i,variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},className:"stat-item",children:[(0,m.jsx)(u.P.div,{className:"stat-icon-wrapper",whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:300},children:(0,m.jsx)(t.icon,{className:"stat-icon"})}),(0,m.jsxs)("div",{className:"stat-number",children:[(0,m.jsx)(x.Ay,{end:t.count,duration:2.5,enableScrollSpy:!0,scrollSpyOnce:!0}),(0,m.jsx)("span",{children:"+"})]}),(0,m.jsx)("div",{className:"stat-label",children:t.label}),(0,m.jsx)("p",{className:"stat-description",children:t.description})]})},F=e=>{const[t,i]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=setInterval((()=>{i((e=>e===C.length-1?0:e+1))}),5e3);return()=>clearInterval(e)}),[]),(0,m.jsxs)(o.A,{fluid:!0,className:"content-wrapper",children:[(0,m.jsx)("section",{className:"stats-section",children:(0,m.jsxs)(o.A,{children:[(0,m.jsx)(u.P.h2,{className:"section-title",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.6},children:"Professional Milestones"}),(0,m.jsx)("div",{className:"stats-grid",children:k.map(((e,t)=>(0,m.jsx)(D,{stat:e},t)))})]})}),(0,m.jsx)(A,{children:(0,m.jsxs)(o.A,{children:[(0,m.jsx)(u.P.h2,{className:"section-title",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.6},children:"Achievements & Recognition"}),(0,m.jsx)(u.P.p,{className:"section-subtitle",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.2},children:"Pioneering Innovation Through Technology & Research"}),(0,m.jsx)("div",{className:"achievements-container",children:(0,m.jsx)(N,{achievement:C[t],totalAchievements:C.length,currentIndex:t})})]})}),(0,m.jsx)("section",{className:"recent-projects-section",children:(0,m.jsxs)(o.A,{children:[(0,m.jsx)(u.P.h2,{className:"section-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Recent Projects"}),(0,m.jsx)(u.P.p,{className:"section-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Check out my latest work in AI, IoT, and Software Development"}),(0,m.jsx)(n.A,{className:"g-4",children:S.map(((e,t)=>(0,m.jsx)(s.A,{lg:4,md:6,children:(0,m.jsxs)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2*t},children:[(0,m.jsx)("img",{src:e.imageUrl,alt:e.title,className:"project-image"}),(0,m.jsxs)("div",{className:"project-content",children:[(0,m.jsx)("div",{className:"project-category",children:e.category}),(0,m.jsx)("h3",{className:"project-title",children:e.title}),(0,m.jsx)("p",{className:"project-description",children:e.shortDescription}),(0,m.jsx)("div",{className:"project-tech",children:e.technologies.map(((e,t)=>(0,m.jsx)("span",{children:e},t)))}),(0,m.jsxs)("div",{className:"project-links",children:[(0,m.jsx)("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(d.hL4,{})}),(0,m.jsx)("a",{href:e.demoLink,target:"_blank",rel:"noopener noreferrer",children:(0,m.jsx)(d.EQc,{})})]})]})]})},e.id)))}),(0,m.jsx)(u.P.div,{className:"view-more-projects",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:(0,m.jsxs)(g.N_,{to:"/work",className:"explore-more-link",children:["View All Projects ",(0,m.jsx)(d.uoG,{})]})})]})})]})};var L=i(8553);const P=()=>{const{isLoading:e,error:t,sendRequest:i}=(0,L.A)(),[o,n]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{try{const e=await i(`${{NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL}/project/projects`);n(e)}catch(e){}})()}),[i]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(a.m,{children:[(0,m.jsx)("title",{children:"Emad Al Ramimi | Portfolio"}),(0,m.jsx)("meta",{name:"description",content:"Welcome to my portfolio! I'm Emad Al Ramimi, a passionate AI Developer and Machine Learning Specialist."})]}),(0,m.jsx)(h,{}),(0,m.jsx)(F,{projects:o,isLoading:e}),(0,m.jsx)(v.sW,{})]})}}}]);
//# sourceMappingURL=409.0f2fed76.chunk.js.map