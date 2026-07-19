const projects = [
  {
    id:'hrms', title:'HRMS Dashboard', tag:'Enterprise', accent:'#c8ff31', dark:false,
    links:{
      design:'https://www.figma.com/design/CBvlmDQMFqR3Tv7X9K0qOH/Projects?node-id=145-3057&t=XzTStROmQYoyUEwu-1',
      medium:'https://www.figma.com/design/CBvlmDQMFqR3Tv7X9K0qOH/Projects?node-id=145-3057&t=XzTStROmQYoyUEwu-1'
    },
    images: {
  problem: 'assets/hrms/problem.png',
  research: 'assets/hrms/research.png',
  wireframe: 'assets/hrms/wireframe.png',
  final: 'assets/hrms/final.png',
  outcome: 'assets/hrms/outcome.png'
},
    line:'Designed role-based attendance, leave and approval workflows for a 200+ employee organisation, helping people reach their next action with less navigation and uncertainty.',
    outcome:'How I cut time to first action by 45% for 200+ employees.',
    meta:['Product designer + front-end','1 designer · 3 engineers','12 weeks','200+ employees'],
    problem:['People logged in—and didn’t know what to do next.','Employees, HR teams and administrators entered the same dashboard but arrived with completely different responsibilities. The interface exposed modules according to the systems data structure rather than each roles daily priorities. Employees struggled to locate attendance and leave actions, while managers repeatedly checked pending approvals across separate areas. This created slower onboarding, avoidable support questions and uncertainty around task status. The challenge was not simply reorganising a dashboardâ€”it was creating one system that could adapt its priorities, navigation and actions according to role and permission.'],
    research:[['Contextual observation','Support-ticket audit','Stakeholder interviews'],'I shadowed employees and HR admins completing everyday tasks, then grouped friction by role and frequency.','I reviewed recurring support questions, mapped existing attendance and approval journeys and observed employees and HR stakeholders completing frequent tasks. The analysis consistently pointed to irrelevant role controls, unclear submission states and the absence of a visually dominant next action.'],
    decisions:[['Make the next action role-dependent','Attendance was a frequent first action for employees, while approvals mattered more to managers and HR. I avoided one universal hierarchy and created role-aware priorities. This introduced additional permission logic, but removed irrelevant controls and reduced navigation effort.'],['Expose capability through permission','The role matrix showed that visibility and action rights were not identical. Navigation and controls therefore respond to permission rather than job title alone. The trade-off was more state documentation for engineering, in exchange for a safer and clearer interface.'],['Treat status as part of the task','Repeated uncertainty around submissions showed that success feedback could not end at a toast. Persistent states, timestamps and ownership cues made pending, completed and rejected actions understandable after the moment of submission.']],
    process:['From one dashboard for everyone to priorities shaped by role.', 'The initial assumption was that reorganising modules would solve the problem. Workflow reviews showed the deeper issue was priority and permission. Early wireframes still exposed too much information; the final direction used a shared structure with role-specific next actions, visible task states and progressive detail.'],
    rollout:'The experience was released progressively across Employee, HR, Admin and Super Admin roles, allowing the team to review permission behaviour and operational feedback as modules were implemented.', metrics:[['30%','Reported onboarding improvement'],['45%','Reported reduction in time to first action'],['35%','Reported satisfaction improvement'],['25%','Reported reduction in mobile bounce']],
    reflection:'I would define role-level task-success instrumentation before implementation, not after rollout. That would make prioritisation less dependent on qualitative signals and improve the quality of post-release comparison.'
  },
  {
  id:'veltrix', title:'Veltrix', tag:'B2B SaaS', accent:'#465fff', dark:true,
  links:{
      design:'https://www.figma.com/design/96KEV5NLp2eb6dLNckJVKH/Projects?node-id=2018-2293&t=qRTe4skww4007YKL-1',
      medium:'https://www.figma.com/design/96KEV5NLp2eb6dLNckJVKH/Projects?node-id=2018-2293&t=qRTe4skww4007YKL-1'
    },

    images: {
  problem: 'assets/veltrix/problem.png',
  research: 'assets/veltrix/research.png',
  wireframe: 'assets/veltrix/wireframe.png',
  final: 'assets/veltrix/final.png',
  outcome: 'assets/veltrix/outcome.png'
},

  line:'Translated a complex international recruitment model into connected Employer, Agency and Admin workflows covering KYB, mandates, candidates, compliance and mobilization.',

  outcome:'Making ownership, access and the next required action visible across a governed recruitment system.',

  meta:[ 'Product designer', '1 designer · product · engineering', '10 weeks', 'Employers · agencies · platform admins'],

  problem:['Global recruitment was fragmented across forms, emails, spreadsheets and disconnected service providers.', 'International recruitment involved employers, agencies, candidates and platform administrators working across KYB verification, mandates, documents, interviews, payments and mobilization. Responsibility frequently changed between participants, but the product needed to maintain one reliable source of truth. The core challenge was not the number of features. It was making ownership, access, status and the next required action unmistakable across multiple roles and countries.'
  ],

  research:[
    [
      'Requirement mapping',
      'Workflow audit',
      'Compliance workshops',
      'User-story analysis'
    ],
    'I mapped the complete journey across Employer, Agency and Admin roles—including Partial KYB, Full KYB, mandate execution, candidate sourcing, interviews, offers, mobilization, payments and post-placement cases.',
    'The main challenge was not the number of steps. It was helping every participant understand what was required, who was responsible and what would happen next.'
  ],

  decisions:[
    [
      'Use progressive KYB instead of one complete form',
      'Requiring every business document before users understood the platform created unnecessary entry friction. I separated KYB into progressive stages: basic verification enabled exploration while sensitive actions stayed protected until full approval. The trade-off was additional state management, but it balanced activation with compliance.'
    ],
    [
      'Turn mandates into governed projects',
      'A mandate connected criteria, commercial terms, access, agreements and candidate progress. Treating it as a project created one auditable source of truth. This required a denser object model, but prevented workflows from fragmenting across separate modules.'
    ],
    [
      'Keep ownership visible through every hand-off',
      'Mobilization tasks moved between Employer, Agency and Platform. Checklists and action queues explicitly named the current owner. The interface became more operational, but reduced reliance on email follow-ups and memory.'
    ],
    [
      'Reveal sensitive information progressively',
      'Employer, agency and candidate details remain masked until the correct verification and engagement conditions are met, reducing data leakage and platform bypass.'
    ],
    [
      'Design around status, not memory',
      'Checklists, timelines, badges and action queues help users understand current progress, blockers and next steps without relying on external follow-ups.'
    ]
  ],

  process:'I converted a dense set of user stories and country-specific rules into role-based information architecture, permission-aware navigation and connected workflows. Low-fidelity flows established dependencies first; TailAdmin components were then adapted into a consistent enterprise design system for data-heavy forms, queues, tables and operational dashboards.',

  rollout:'Prepared as a responsive end-to-end B2B SaaS experience covering Employer, Agency and Admin portals—from onboarding and verification to hiring, mobilization, finance and post-placement governance.',

  metrics:[
    ['3','Role-based workspaces'],
    ['2-stage','KYB verification'],
    ['10+','Connected hiring stages'],
    ['1 system','From mandate to placement']
  ],

  reflection:'The biggest lesson was that complex enterprise products do not become simple by hiding information. They become usable when information appears at the right time, ownership is explicit and every critical action has a visible consequence.'
},
  {
  id:'magtapp',
  title:'MagTapp',
  tag:'AI Product',
  accent:'#7c6cff',
  dark:true,

  links:{
      design:'https://www.figma.com/design/96KEV5NLp2eb6dLNckJVKH/Projects?node-id=51-2&t=qRTe4skww4007YKL-1',
      medium:'https://medium.com/@intut43/magtapp-designing-an-ai-powered-visual-learning-experience-c92f3b827c3a?sharedUserId=intut43'
    },

    images: {
  problem: 'assets/magtapp/problem.png',
  research: 'assets/magtapp/research.png',
  wireframe: 'assets/magtapp/wireframe.png',
  final: 'assets/magtapp/final.png',
  outcome: 'assets/magtapp/outcome.png'
},

  line:'Designed an AI-powered visual dictionary that helps readers understand unfamiliar words without interrupting their reading flow.',

  outcome:'Transforming word lookup into a contextual learning experience.',

  meta:[
    'UI/UX Designer',
    'Design · AI · Product · Mobile Engineering',
    '8 weeks',
    'Readers (16–40 years)'
  ],

  problem:[
    'Understanding one unfamiliar word meant breaking the entire reading experience.',
    'Readers had to leave the article, open another app or browser, search for the meaning, then return to continue reading. Although MagTapp already offered translation, the experience felt disconnected and transactional. The opportunity was not to redesign a dictionary—it was to redesign how people learn while reading.'
  ],

  research:[
    [
      'User journey mapping',
      'Competitive audit',
      'Product walkthroughs'
    ],
    'I mapped the journey from discovering an unfamiliar word to understanding it, compared existing dictionary experiences, and reviewed how users interacted with AI features across the product.',

    'The biggest friction was not finding the meaning—it was losing reading context. Users wanted understanding to happen instantly, exactly where curiosity occurred.'
  ],

  decisions:[
    [
      'Keep users in their reading flow',
      'Instead of redirecting users to a separate dictionary screen, I introduced Tap-to-Search so a long press reveals the meaning as an in-context overlay without leaving the page.'
    ],

    [
      'Design for progressive learning',
      'Rather than overwhelming users with every detail, I separated information into swipeable cards—meaning first, then synonyms and antonyms, followed by detailed explanations—making the experience easier to scan.'
    ],

    [
      'Support different learning styles',
      'Translation alone was not enough. I combined contextual imagery, example sentences, pronunciation, voice search, and audio playback to create a richer AI-assisted learning experience.'
    ]
  ],

  process:'The feature evolved from a standalone dictionary into a reusable AI learning system. I iterated through user flows, wireframes, interaction patterns, and prototypes before refining the final mobile and browser experiences.',

  rollout:'Shipped as part of MagTapp’s AI toolkit across Android and iOS, including the browser-based Tap-to-Search experience.',

  metrics:[
    ['1M+','Downloads'],
    ['4★','Play Store rating'],
    ['139K+','User reviews'],
    ['2','Learning modes (Visual Dictionary + Tap-to-Search)']
  ],

  reflection:'If I continued this project, I would validate how visual explanations, AI-generated examples, and adaptive vocabulary recommendations perform for users with different language proficiency and literacy levels.'
},
  {
  id:'woopw',
  title:'Woopw',
  tag:'Healthcare',
  accent:'#ff9ed8',
  dark:false,

  links:{
      design:'https://www.figma.com/design/96KEV5NLp2eb6dLNckJVKH/Projects?node-id=2018-2293&t=qRTe4skww4007YKL-1',
      medium:'https://www.figma.com/design/96KEV5NLp2eb6dLNckJVKH/Projects?node-id=2018-2293&t=qRTe4skww4007YKL-1'
    },

    images: {
  problem: 'assets/woopw/problem.png',
  research: 'assets/woopw/research.png',
  wireframe: 'assets/woopw/wireframe.png',
  final: 'assets/woopw/final.png',
  outcome: 'assets/woopw/outcome.png'
},

  line:'Redesigned a prescription medicine journey by replacing uncertainty with trust, guidance and transparent progress. +27% conversion, −21% bounce.',

  outcome:'Helping patients feel confident enough to complete a healthcare consultation.',

  meta:[
    'Product designer',
    'Design · product · healthcare',
    '6 weeks',
    'Prescription patients'
  ],

  problem:[
    'Patients abandoned the consultation before they could reach a doctor.',
    'The experience demanded medical information immediately, but offered little reassurance, unclear progress, and payment before prescription approval. Trust dropped long before checkout, especially on mobile devices.'
  ],

  research:[
    ['Journey audit','Funnel analysis','Heuristic review'],
    'I mapped every patient touchpoint, audited consultation forms, and analysed where users lost confidence during the prescription journey.',
    'Patients did not mind answering medical questions—they wanted to understand why each question mattered before sharing sensitive information.'
  ],

  decisions:[
    [
      'Build trust before asking',
      'Medical credentials, verified reviews, security indicators and transparent pricing were surfaced before the consultation to reduce hesitation.'
    ],
    [
      'Break one long form into guided steps',
      'The consultation changed from a single overwhelming questionnaire into progressive sections with contextual guidance and meaningful progress.'
    ],
    [
      'Reduce payment anxiety',
      'Moving payment after prescription approval removed uncertainty and made patients feel the clinical decision came before the transaction.'
    ]
  ],

  process:'The experience evolved into a guided healthcare journey with progressive consultation, contextual explanations, real-time review status, and a mobile-first checkout that reduced anxiety at every stage.',

  rollout:'The redesigned patient flow was validated across the complete prescription journey—from product discovery and consultation to doctor review and checkout—with desktop and mobile experiences designed together.',

  metrics:[
    ['27%','Higher conversion'],
    ['21%','Lower bounce'],
    ['36%','Higher consultation completion'],
    ['40%','Lower checkout abandonment']
  ],

  reflection:'The biggest lesson was that trust is a UX problem before it becomes a visual one. Explaining intent, showing clinical credibility, and reducing uncertainty had a greater impact than simply shortening the form.'
},
  {
  id:'whatsapp',
  title:'WhatsApp Scheduled Messaging',
  tag:'Concept',
  accent:'#32d477',
  dark:true,

  links:{
      design:'https://www.figma.com/design/gUWfm9CJhy8chi8eiwvtFv/WhatsApp-Scheduled-Messaging?node-id=0-1&t=8PVhwEiglsn70kUr-1',
      medium:'https://medium.com/@intut43/whatsapp-scheduled-messaging-2b5b1792b7d0?sharedUserId=intut43'
    },

    images: {
  problem: 'assets/whatsapp/problem.png',
  research: 'assets/whatsapp/research.png',
  wireframe: 'assets/whatsapp/wireframe.png',
  final: 'assets/whatsapp/final.png',
  outcome: 'assets/whatsapp/outcome.png'
},

  line:'Designing future communication that helps users send messages at the right moment without changing WhatsApp’s familiar experience.',

  outcome:'Helping users prepare conversations in advance while keeping messaging effortless, contextual and trustworthy.',

  meta:[
    'Independent Product Concept',
    'Research · UX · Interaction Design',
    '2 weeks',
    'WhatsApp users'
  ],

  problem:[
    'WhatsApp supports instant communication, but many conversations need to happen in the future.',
    'Users often prepared birthday wishes, reminders, follow-ups and important messages in advance, yet relied on memory, alarms or third-party apps to send them at the right time. The challenge was not adding a scheduling feature—it was introducing future communication without making WhatsApp feel like a productivity app.'
  ],

  research:[
    [
      'Behaviour mapping',
      'Pattern audit',
      'Edge-case exploration'
    ],
    'I explored everyday messaging habits, mapped time-sensitive communication scenarios and audited WhatsApp’s interaction patterns to identify where scheduling could feel native instead of introducing a completely new workflow.',
    'The problem was never writing the message—it was remembering the moment. Users wanted confidence that their message would reach the recipient on time without adding more mental effort.'
  ],

  decisions:[
    [
      'Schedule where the message is created',
      'Users naturally decide whether to send now or later immediately after writing a message, so scheduling begins with a long-press on the existing send button instead of introducing new navigation.'
    ],
    [
      'Reduce decisions before asking for dates',
      'Most messages are scheduled for common moments such as midnight birthdays or tomorrow morning. Quick suggestions appear first, while custom date and time remain available for advanced needs.'
    ],
    [
      'Keep scheduled messages visible',
      'A dedicated scheduled message bubble inside the conversation provides constant visibility, reducing uncertainty and allowing users to edit, reschedule, send immediately or delete without searching elsewhere.'
    ],
    [
      'Design one scheduling pattern across communication',
      'The same interaction model extends to WhatsApp Status, creating a consistent mental model instead of introducing separate scheduling behaviours.'
    ]
  ],

  process:'The concept evolved from a calendar-first workflow into a lightweight, contextual experience built around existing messaging behaviour. Every iteration focused on reducing cognitive load while preserving WhatsApp’s simplicity.',

  rollout:'A self-initiated product concept covering Scheduled Messages, Scheduled Status, Scheduled Messages Hub, editing, send-now actions, offline behaviour, blocked users, timezone changes and other real-world edge cases.',

  metrics:[
    ['3 taps','To schedule a message'],
    ['1 interaction','Long-press to schedule'],
    ['7+','Real-world edge cases explored'],
    ['1 system','Shared scheduling across Messages & Status']
  ],

  reflection:'This project taught me that the real opportunity was not message scheduling—it was designing future communication. If I continued this exploration, I would validate feature discoverability through usability testing, compare long-press against alternative entry points, and measure whether users naturally understand scheduling without additional onboarding.'
}
];

const projectImage = (src, alt, className = '') => {
  if (!src) return '';

  return `
    <figure class="case-image ${className}">
      <img
        src="${src}"
        alt="${alt}"
        loading="lazy"
        draggable="false"
      />
    </figure>
  `;
};
const card = (p, n) => {
  const labels=['Problem','Research','Decisions','Process','Outcome','Reflection'];
  let body='';
  if(n === 0) body = `
  <span class="kicker">The challenge</span>

  <h3>${p.problem[0]}</h3>

  <p>${p.problem[1]}</p>

  ${projectImage(
    p.images.problem,
    `${p.title} problem screen`
  )}
`;
  if(n === 1) body = `
  <div class="chips">
    ${p.research[0]
      .map(item => `<span>${item}</span>`)
      .join('')}
  </div>

  <h3>Evidence before interface.</h3>

  <p>${p.research[1]}</p>

  <blockquote>
    <b>Key finding</b>
    ${p.research[2]}
  </blockquote>

  ${projectImage(
    p.images.research,
    `${p.title} research artifacts`
  )}
`;
  if(n===2) body=`<span class="kicker">From evidence to interface</span><h3>Decisions that shaped the product.</h3><div class="decision-list">${p.decisions.map((d,i)=>`<div><b>Decision 0${i+1}</b><h4>${d[0]}</h4><p>${d[1]}</p></div>`).join('')}</div>`;
  if(n === 3) body = `
  <span class="kicker">Evolution</span>

  <h3>From broad structure to a focused flow.</h3>

  <p>${p.process}</p>

  <div class="compare">
    <div class="compare-item">
      <small>EARLY WIREFRAME</small>

      ${projectImage(
        p.images.wireframe,
        `${p.title} early wireframe`,
        'comparison-image'
      )}
    </div>

    <div class="compare-item">
      <small>FINAL DIRECTION</small>

      ${projectImage(
        p.images.final,
        `${p.title} final design`,
        'comparison-image'
      )}
    </div>
  </div>
`;
  if(n === 4) body = `
  <span class="kicker">Impact</span>

  <h3>What changed after the work.</h3>

  <p>${p.rollout}</p>

  <div class="metric-grid">
    ${p.metrics
      .map(metric => `
        <div>
          <strong>${metric[0]}</strong>
          <span>${metric[1]}</span>
        </div>
      `)
      .join('')}
  </div>

  ${projectImage(
    p.images.outcome,
    `${p.title} final product outcome`,
    'outcome-image'
  )}
`;
  if(n===5) body=`<span class="kicker">Looking back</span><h3>What I’d do differently.</h3><p class="reflection">${p.reflection}</p><a class="back" href="#work">Back to selected work ↑</a>`;
  return `<article class="stage"><aside class="stage-rail"><b>0${n+1}</b><span>${labels[n]}</span></aside><div class="stage-body">${body}</div></article>`;
};

document.querySelector('#projectGrid').innerHTML=projects.map((p,i)=>`<a class="project-card reveal" href="#${p.id}" style="--accent:${p.accent}"><div><span>0${i+1}</span><b>${p.tag}</b></div><h3>${p.title}</h3><p>${p.line}</p><small>Problem · Research · Decisions · Outcome</small><strong>Read case study →</strong></a>`).join('');

document.querySelector('#caseStudies').innerHTML=projects.map((p,i)=>`<section class="case ${p.dark?'dark':''}" id="${p.id}" style="--accent:${p.accent}"><header class="case-head reveal"><span>0${i+1} / 05</span><p>${p.tag} case study</p><h2>${p.title}</h2><h3>${p.outcome}</h3><div class="case-actions"><a href="${p.links.design}"
    target="_blank"
    rel="noopener noreferrer">View design ↗</a><a href="${p.links.medium}"
    target="_blank"
    rel="noopener noreferrer">Read full story on Medium ↗</a></div><div class="meta">${['ROLE','TEAM','TIMELINE','USERS'].map((x,j)=>`<div><small>${x}</small><b>${p.meta[j]}</b></div>`).join('')}</div></header><div class="swipe-banner"><i>←</i><span>Swipe left or right</span><i>→</i></div><div class="carousel-shell"><button class="arrow prev" aria-label="Previous stage">←</button><div class="carousel" tabindex="0">${[0,1,2,3,4,5].map(n=>card(p,n)).join('')}</div><button class="arrow next" aria-label="Next stage">→</button></div><div class="progress"><span class="count">01 / 06</span><div class="dots">${[0,1,2,3,4,5].map((_,j)=>`<button class="${j===0?'active':''}" aria-label="Go to stage ${j+1}"></button>`).join('')}</div></div></section>`).join('');

document.querySelectorAll('.case').forEach(section=>{
  const track=section.querySelector('.carousel'); const slides=[...section.querySelectorAll('.stage')]; const dots=[...section.querySelectorAll('.dots button')]; const count=section.querySelector('.count');
  const go=i=>slides[Math.max(0,Math.min(slides.length-1,i))].scrollIntoView({behavior:'smooth',inline:'start',block:'nearest'});
  const current=()=>Math.round(track.scrollLeft/track.clientWidth);
  section.querySelector('.next').onclick=()=>go(current()+1); section.querySelector('.prev').onclick=()=>go(current()-1); dots.forEach((d,i)=>d.onclick=()=>go(i));
  let timer; track.addEventListener('scroll',()=>{clearTimeout(timer);timer=setTimeout(()=>{const i=current();dots.forEach((d,j)=>d.classList.toggle('active',i===j));count.textContent=`0${i+1} / 06`;},60)});
  let down=false,startX=0,startScroll=0; track.addEventListener('pointerdown',e=>{down=true;startX=e.clientX;startScroll=track.scrollLeft;track.setPointerCapture(e.pointerId);track.classList.add('dragging')});track.addEventListener('pointermove',e=>{if(down)track.scrollLeft=startScroll-(e.clientX-startX)});['pointerup','pointercancel'].forEach(ev=>track.addEventListener(ev,()=>{down=false;track.classList.remove('dragging');go(current())}));
});

const menu=document.querySelector('.menu'), links=document.querySelector('.nav-links');menu.onclick=()=>{links.classList.toggle('open');menu.textContent=links.classList.contains('open')?'Close':'Menu'};links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
const cursor=document.querySelector('.cursor');window.addEventListener('mousemove',e=>{cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
if(window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches){gsap.registerPlugin(ScrollTrigger);gsap.utils.toArray('.reveal').forEach(el=>gsap.fromTo(el,{y:45,opacity:0},{y:0,opacity:1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 87%',once:true}}));gsap.from('.hero h1',{y:70,opacity:0,duration:1.1,ease:'power4.out',delay:.2});}else{document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'))}
