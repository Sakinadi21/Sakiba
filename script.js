
const skills = [
  "Java", "Python", "C/C++", "JavaScript",
  "HTML", "CSS", "PHP", "SQL",
  "React", "Next.js", "NestJS", "PostgreSQL",
  "OpenCV", "Git & GitHub", "Arduino",
  "OOP", "DBMS", "Distributed Systems", "Software Architecture",
];

const projects = [
  {
    name: "AL-Barakat Optics",
    tag: "E-commerce",
    accent: "var(--teal)",
    img: "project/al-barakat-optics.jpg",
    desc: "Online storefront for my father's optics shop — catalog, cart, and orders, built from scratch.",
    stack: "PHP · HTML · CSS · JavaScript",
    links: [{ label: "Private build", pending: true }],
  },
  {
    name: "SkillSync",
    tag: "Full-stack · Requirements",
    accent: "var(--teal)",
    img: "project/skillsync.jpg",
    desc: "AI-assisted job portal for CV parsing and job matching. I wrote the SRS that scoped the system.",
    stack: "Next.js · React · NestJS · PostgreSQL",
    links: [{ label: "GitHub", url: "https://github.com/Sakinadi21/HowPhysix.h" }],
  },
  {
    name: "How PhySix.h",
    tag: "Simulation",
    accent: "var(--gold)",
    img: "project/physix.jpg",
    desc: "A Java Swing lab for projectile motion, gases, and pendulums — physics you can nudge and watch.",
    stack: "Java Swing",
    links: [{ label: "GitHub", url: "https://github.com/Sakinadi21/HowPhysix.h" }],
  },
  {
    name: "ChemPointer",
    tag: "Simulation",
    accent: "var(--gold)",
    img: "project/chempointer.jpg",
    desc: "PhySix's sibling, for chemistry — built to make abstract reactions feel a little more hands-on.",
    stack: "Java Swing",
    links: [{ label: "GitHub", url: "https://github.com/Sakinadi21/ChemPointer" }],
  },
  {
    name: "IIT NSTU (Unofficial)",
    tag: "Web",
    accent: "var(--teal)",
    img: "project/iit-nstu.jpg",
    desc: "A website for my own institute, built in my second semester purely out of curiosity.",
    stack: "HTML · CSS · JavaScript",
    links: [
      { label: "GitHub", url: "https://github.com/Sakinadi21/IIT_NSTU" },
      { label: "Live site", url: "https://sakinadi21.github.io/IIT_NSTU/" },
    ],
  },
  {
    name: "SABAS Mentor Platform",
    tag: "Web",
    accent: "var(--teal)",
    img: "project/sabas.jpg",
    desc: "Built the site that introduces SABAS's mentors to the students they'll be teaching.",
    stack: "HTML · CSS · JavaScript",
    links: [
      { label: "GitHub", url: "https://github.com/Sakinadi21/SAB" },
      { label: "Live site", url: "https://sakinadi21.github.io/SAB/" },
    ],
  },
  {
    name: "Bondhu Marriage Gift",
    tag: "Web · Personal",
    accent: "var(--gold)",
    img: "project/bondhuar.jpg",
    desc: "A wedding gift, coded — a small site made for a close friend's family.",
    stack: "HTML · CSS · JavaScript",
    links: [
      { label: "GitHub", url: "https://github.com/Sakinadi21/BondhuAR" },
      { label: "Live site", url: "https://sakinadi21.github.io/BondhuAR/" },
    ],
  },
  {
    name: "AIDLINE",
    tag: "Requirements",
    accent: "var(--gold)",
    img: "project/aidline.jpg",
    desc: "Requirements spec for a medical assistance platform concept — the build comes next.",
    stack: "Requirements Engineering",
    links: [{ label: "SRS doc", pending: true }],
  },
  {
    name: "Real-Time Face Detection",
    tag: "Applied AI",
    accent: "var(--teal)",
    img: "project/face-detection.jpg",
    desc: "A real-time face detector, built to get my hands dirty with computer vision fundamentals.",
    stack: "Python · OpenCV",
    links: [{ label: "Private build", pending: true }],
  },
];

const achievements = [
  { title: "EF SET English Certificate", meta: "C2 Proficient — 73/100" },
  { title: "Phoenix Summit 2026", meta: "Full Fellowship, Master Application Security" },
  { title: "Aspire Leaders Program, Harvard University", meta: "1st Cohort Alumni" },
  { title: "Solvio AI Hackathon", meta: "Edugineer - interesting idea among 3,306 participants" },
];

const timeline = [
  { when: "Jul 2026 · 12 weeks", role: "Frontend AI Engineering Intern", org: "Flyrank AI (Remote)" },
  { when: "Aug 2026 · 3 months", role: "Cybersecurity Intern", org: "DG Intern Hub (Remote)" },
  { when: "Ongoing", role: "Physics Mentor ", org: "SABAS" },
  { when: "2022 – Present", role: "BSc. in Software Engineering", org: "Noakhali Science and Technology University" },
  { when: "2022", role: "Higher Secondary Certificate", org: "Govt. City College — GPA 5.00" },
  { when: "2020", role: "Secondary School Certificate", org: "Dr. Khastagir Govt. Girls' High School — GPA 5.00" },
];

const contacts = [
  { label: "Email", value: "sakiba2518@student.nstu.edu.bd", href: "mailto:sakiba2518@student.nstu.edu.bd" },
  { label: "Phone", value: "+880 1973-084583", href: "tel:+8801973084583" },
  { label: "LinkedIn", value: "sakiba-belal", href: "https://www.linkedin.com/in/sakiba-belal-7250ab2a2" },
  { label: "GitHub", value: "Sakinadi21", href: "https://github.com/Sakinadi21" },
  { label: "CV", value: "Download PDF", href: "files/Sakiba_Belal_CV.pdf", download: true },
  { label: "Certificates", value: "Download PDF", href: "files/Sakiba_Belal_Certificates.pdf", download: true },
];


function renderSkills() {
  const el = document.getElementById("skills");
  el.innerHTML = skills.map((s) => `<span class="chip">${s}</span>`).join("");
}

function renderProjects() {
  const el = document.getElementById("projectGrid");
  el.innerHTML = projects
    .map((p) => {
      const links = p.links
        .map((l) =>
          l.pending
            ? `<span class="pending">${l.label}</span>`
            : `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
        )
        .join("");
      const initial = p.name.trim()[0];
      return `
      <article class="project-card" style="--accent:${p.accent}">
        <div class="project-thumb">
          <img src="${p.img}" alt="${p.name} screenshot" loading="lazy"
               onerror="this.closest('.project-thumb').classList.add('no-image'); this.remove();">
          <span class="project-thumb-fallback">${initial}</span>
        </div>
        <div class="project-body">
          <p class="project-tag">${p.tag}</p>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <p class="project-stack">${p.stack}</p>
          <div class="project-links">${links}</div>
        </div>
      </article>`;
    })
    .join("");
}

function renderAchievements() {
  const el = document.getElementById("badgeRow");
  el.innerHTML = achievements
    .map((a) => `<div class="badge"><strong>${a.title}</strong><span>${a.meta}</span></div>`)
    .join("");
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  el.innerHTML = timeline
    .map(
      (t) => `
      <div class="timeline-item">
        <p class="when">${t.when}</p>
        <h3>${t.role}</h3>
        <p class="org">${t.org}</p>
      </div>`
    )
    .join("");
}

function renderContacts() {
  const el = document.getElementById("contactGrid");
  el.innerHTML = contacts
    .map((c) => {
      const dl = c.download ? ` download` : "";
      return `
      <a class="contact-card${c.download ? " contact-card-download" : ""}" href="${c.href}" target="_blank" rel="noopener"${dl}>
        <span class="label">${c.label}</span>
        <span class="value">${c.value}</span>
      </a>`;
    })
    .join("");
}

renderSkills();
renderProjects();
renderAchievements();
renderTimeline();
renderContacts();


const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none)").matches;

if (!reduceMotion && !isTouch) {
  function attachTilt(node, strength = 10) {
    node.addEventListener("mousemove", (e) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const x = px - 0.5;
      const y = py - 0.5;
      node.style.transform = `perspective(1000px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`;
      node.style.setProperty("--mx", `${px * 100}%`);
      node.style.setProperty("--my", `${py * 100}%`);
    });
    node.addEventListener("mouseleave", () => {
      node.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    });
  }

  const tiltCard = document.querySelector(".hero-card-inner");
  if (tiltCard) attachTilt(tiltCard, 12);

  document.querySelectorAll(".project-card").forEach((card) => attachTilt(card, 6));

  // Subtle parallax on the hero background orbs
  const hero = document.getElementById("hero");
  const orb1 = document.querySelector(".orb-1");
  const orb2 = document.querySelector(".orb-2");
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    orb1.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    orb2.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
  });
}

// ---------- Hero background: rotating 3D node network (hand-rolled, no libraries) ----------

(function renderNetwork() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const hero = document.getElementById("hero");

  let W, H, DPR;
  function resize() {
    const rect = hero.getBoundingClientRect();
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width;
    H = rect.height;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  // Generate points on a loose sphere — reads as a "network" / systems diagram
  const COUNT = isTouch ? 36 : 56;
  const RADIUS = 220;
  const pts = Array.from({ length: COUNT }, () => {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = RADIUS * (0.6 + Math.random() * 0.4);
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
    };
  });

  let targetTiltX = 0, targetTiltY = 0, tiltX = 0, tiltY = 0;
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    targetTiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
    targetTiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -0.6;
  });

  let angle = 0;
  const FOV = 480;
  const CX = () => W * 0.78; // anchor the network near the hero photo, right side
  const CY = () => H * 0.46;

  function frame() {
    if (reduceMotion) { draw(); return; } // one static frame only
    angle += 0.0022;
    tiltX += (targetTiltX - tiltX) * 0.04;
    tiltY += (targetTiltY - tiltY) * 0.04;
    draw();
    requestAnimationFrame(frame);
  }

  function project(p) {
    // rotate around Y (auto) then X (mouse tilt)
    let x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
    let z = p.x * Math.sin(angle) + p.z * Math.cos(angle);
    let y = p.y * Math.cos(tiltX) - z * Math.sin(tiltX);
    z = p.y * Math.sin(tiltX) + z * Math.cos(tiltX);
    const xr = x * Math.cos(tiltY) - z * Math.sin(tiltY);
    const scale = FOV / (FOV + z);
    return { sx: CX() + xr * scale, sy: CY() + y * scale, scale, z };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const projected = pts.map(project).sort((a, b) => a.z - b.z);

    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const a = projected[i], b = projected[j];
        const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
        if (d < 85) {
          ctx.strokeStyle = `rgba(79, 209, 197, ${0.14 * (1 - d / 85) * a.scale})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      }
    }
    projected.forEach((p, i) => {
      const r = Math.max(1, 2.2 * p.scale);
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
      ctx.fillStyle = i % 5 === 0 ? "rgba(217, 169, 78, 0.85)" : "rgba(79, 209, 197, 0.85)";
      ctx.fill();
    });
  }

  frame();
})();


(function typeTerminal() {
  const body = document.getElementById("terminalBody");
  if (!body) return;

  const script = [
    { prompt: "whoami", output: "sakiba_belal — software engineering student, nstu" },
    { prompt: "status", output: "open_to_internships: true" },
    { prompt: "stack --list", output: 'java · python · javascript · react · nestjs · postgresql' },
    { prompt: "git log -1 --oneline", output: "built BondhuAR as a wedding gift, apparently" },
  ];

  if (reduceMotion) {
    body.innerHTML = script
      .map((l) => `<div><span class="line-prompt">$ ${l.prompt}</span></div><div class="line-output">${l.output}</div>`)
      .join("");
    return;
  }

  let li = 0;
  function typeLine() {
    if (li >= script.length) return;
    const { prompt, output } = script[li];
    const lineEl = document.createElement("div");
    const promptSpan = document.createElement("span");
    promptSpan.className = "line-prompt";
    promptSpan.textContent = "$ ";
    lineEl.appendChild(promptSpan);
    const typed = document.createElement("span");
    lineEl.appendChild(typed);
    const cursor = document.createElement("span");
    cursor.className = "cursor-blink";
    lineEl.appendChild(cursor);
    body.appendChild(lineEl);

    let ci = 0;
    const typer = setInterval(() => {
      typed.textContent += prompt[ci];
      ci++;
      if (ci >= prompt.length) {
        clearInterval(typer);
        cursor.remove();
        const outEl = document.createElement("div");
        outEl.className = "line-output";
        outEl.textContent = output;
        body.appendChild(outEl);
        li++;
        setTimeout(typeLine, 320);
      }
    }, 28);
  }
  typeLine();
})();
