"use client";

import { Dialog, Tabs } from "radix-ui";
import { projectCategories, webProjects, type WebProject } from "./projects";

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M6 4h10v10" /></svg>;
}

function ProjectPreview({ project }: { project: WebProject }) {
  return (
    <div className={`preview preview-${project.preview}`} aria-hidden="true">
      <div className="preview-window">
        <div className="preview-chrome"><span /><span /><span /><i>{project.title}</i></div>
        {project.preview === "home" && <div className="preview-home"><small>CHAVEZ POON · PERSONAL WEBSITE</small><strong>Faith.<br />Story.<br /><em>Design.</em></strong><div className="preview-lines"><b /><b /><b /></div><div className="preview-orbit" /></div>}
        {project.preview === "blog" && <div className="preview-blog"><small>WRITING &amp; REFLECTIONS</small><b>Notes from<br />the journey</b><span>20 OCTOBER 2026 · 2 MIN READ</span><div /></div>}
        {project.preview === "resume" && <div className="preview-resume"><div className="resume-photo" /><div className="resume-lines"><b /><b /><i /><i /><i /><b /><i /><i /></div></div>}
        {project.preview === "zh" && <div className="preview-zh"><small>CHAVEZ POON</small><strong>繁體中文<br /><span>香港網站即將推出</span></strong><b>UNDER CONSTRUCTION</b></div>}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: WebProject }) {
  return (
    <Dialog.Root>
      <article className="project-card">
        <Dialog.Trigger asChild>
          <button className="project-open" type="button" aria-label={`View details for ${project.title}`}>
            <ProjectPreview project={project} />
            <span className="project-card-info">
              <span className="project-card-meta"><span>{project.category}</span><span>{project.year}</span></span>
              <span className="project-card-title">{project.title}<span className="project-arrow"><ArrowIcon /></span></span>
              <span className="project-card-type">{project.type}</span>
            </span>
          </button>
        </Dialog.Trigger>
      </article>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="project-dialog">
          <div className="dialog-topline"><span>{project.number} / SELECTED WORK</span><Dialog.Close className="dialog-close" aria-label="Close project details">×</Dialog.Close></div>
          <Dialog.Title className="dialog-title">{project.title}</Dialog.Title>
          <Dialog.Description className="dialog-description">{project.description}</Dialog.Description>
          <div className="dialog-details"><span>{project.type}</span><span>{project.year}</span></div>
          <div className="dialog-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          <a className="dialog-link" href={project.href} target="_blank" rel="noreferrer">Visit project <ArrowIcon /></a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function PortfolioPage() {
  return (
    <main className="site-frame">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Chavez Poon, back to top">CP<span>.</span></a>
        <span className="header-note"><span className="availability-dot" />Independent web designer &amp; developer</span>
        <a className="header-contact" href="mailto:cyrillusmariae@outlook.com">Let’s talk <ArrowIcon /></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <p className="eyebrow"><span>WEB DESIGN PORTFOLIO</span><span>HONG KONG · NORFOLK</span></p>
        <div className="hero-main">
          <h1 id="hero-title">Thoughtful<br />websites for<br /><span>meaningful work.</span></h1>
          <div className="hero-side">
            <p>I’m Chavez, an amateur website designer and developer. I build clear, considered digital spaces for stories, people, and ideas.</p>
            <a className="text-link" href="#projects">Explore selected work <span>↓</span></a>
          </div>
        </div>
        <div className="hero-bottom"><span>DESIGN · DEVELOPMENT · STORYTELLING</span><span>SCROLL TO EXPLORE <span className="scroll-line" /></span></div>
      </section>

      <section className="work-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><p className="eyebrow">A FEW THINGS I’VE MADE</p><h2 id="projects-title">Selected work<span className="green-dot">.</span></h2></div>
          <p className="section-aside">A growing collection of personal web projects, shaped with care and built for clarity.</p>
        </div>

        <Tabs.Root className="project-tabs" defaultValue="All" activationMode="automatic">
          <Tabs.List className="project-tab-list" aria-label="Filter projects by type">
            <Tabs.Trigger className="project-tab" value="All">All projects <span>{String(webProjects.length).padStart(2, "0")}</span></Tabs.Trigger>
            {projectCategories.map(category => <Tabs.Trigger className="project-tab" key={category} value={category}>{category}</Tabs.Trigger>)}
          </Tabs.List>
          <Tabs.Content className="project-grid" value="All">
            {webProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </Tabs.Content>
          {projectCategories.map(category => (
            <Tabs.Content className="project-grid" key={category} value={category}>
              {webProjects.filter(project => project.category === category).map(project => <ProjectCard key={project.id} project={project} />)}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </section>

      <section className="about-strip" aria-labelledby="about-title">
        <p className="eyebrow">A LITTLE ABOUT THE APPROACH</p>
        <div><h2 id="about-title">Good design makes<br />the next step clear.</h2><p>I’m learning by making: shaping the structure, writing the code, and refining the details. My work is guided by readable interfaces, thoughtful motion, and a sense of place.</p></div>
      </section>

      <footer className="site-footer">
        <div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><a className="footer-email" href="mailto:cyrillusmariae@outlook.com">Let’s make it clear.<ArrowIcon /></a></div>
        <div className="footer-bottom"><a href="https://www.chavezpoon.com/" target="_blank" rel="noreferrer">Chavez Poon <ArrowIcon /></a><span>© {new Date().getFullYear()} · BUILT WITH NEXT.JS &amp; RADIX</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
