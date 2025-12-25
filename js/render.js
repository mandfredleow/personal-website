async function loadJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return res.json();
}

function escapeHTML(str = "") {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* Experience timeline item */
function experienceItemTemplate(item) {
    const bulletsHTML = (item.bullets || [])
        .map(b => {
            const label = b.label ? `<strong>${escapeHTML(b.label)}</strong>: ` : "";
            return `<li>${label}${escapeHTML(b.text || "")}</li>`;
        })
        .join("");

    return `
    <li style="--accent-color:${escapeHTML(item.accentColor || "#000")}">
      <div class="date">${escapeHTML(item.year || "")}</div>

      <div class="company-header">
        <img src="${escapeHTML(item.logo || "")}" alt="Company Logo" class="company-logo">
        <div class="company-name">${escapeHTML(item.company || "")}</div>
      </div>

      <div class="role-header">
        <div class="title">${escapeHTML(item.role || "")}</div>
        <div class="duration">${escapeHTML(item.duration || "")}</div>
      </div>

      <div class="description">
        <ul class="description-list">
          ${bulletsHTML}
        </ul>
      </div>
    </li>
  `;
}

/* Project card */
function projectCardTemplate(project) {
    const linksHTML = (project.links || [])
        .map(link => `
      <a href="${escapeHTML(link.href)}"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="${escapeHTML(link.aria || "Link")}">
        <img src="${escapeHTML(link.icon || "")}" alt="${escapeHTML(link.type || "link")}"
             class="${escapeHTML(link.type)}-icon">
      </a>
    `)
        .join("");

    return `
    <div class="card">
      <img src="${escapeHTML(project.image || "")}" alt="${escapeHTML(project.title || "")}"
           class="card-img">
      <h3>${escapeHTML(project.title || "")}</h3>
      <p>${escapeHTML(project.description || "")}</p>
      ${linksHTML}
    </div>
  `;
}

async function renderExperience() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    const data = await loadJSON("./data/experience.json");
    timeline.innerHTML = data.map(experienceItemTemplate).join("");
}

async function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    const data = await loadJSON("./data/projects.json");
    grid.innerHTML = data.map(projectCardTemplate).join("");
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
window.scrollToSection = scrollToSection;

function observeSections() {
    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot");
    if (!sections.length || !dots.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const sectionIndex = [...sections].indexOf(entry.target);
            if (entry.isIntersecting) {
                dots.forEach(dot => dot.classList.remove("active"));
                if (dots[sectionIndex]) dots[sectionIndex].classList.add("active");
            }
        });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            sections[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

async function init() {
    try {
        await Promise.all([renderExperience(), renderProjects()]);
    } catch (err) {
        console.error(err);
    }
    observeSections();
}

window.addEventListener("load", init);
