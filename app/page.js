import Image from "next/image";
import Reveal from "./Reveal";

const EMAIL = "usmanmahmood.services@gmail.com";
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent("Project inquiry")}`;
const LINKEDIN = "https://www.linkedin.com/in/usman-mahmood-837430385";
const WA = "https://wa.me/923086423755?text=" + encodeURIComponent("Hi Usman, I saw your portfolio and I'd like to talk about a project.");

const projects = [
  {
    title: "LFC Fast Food",
    url: "https://lfc-fastfood-ps7s.vercel.app",
    text: "A fast food ordering website where customers browse the menu and place orders easily from any device.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Responsive design"],
  },
  {
    title: "Aura by Gloss & Growth",
    url: "https://aura-by-gloss-and-growth.vercel.app",
    text: "A modern e-commerce store with a clean product catalogue and a smooth shopping experience.",
    stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Responsive design"],
  },
];

const skills = ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Responsive Design", "Front-End Development", "MERN Stack"];

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2Zm5.8 14.07c-.25.7-1.45 1.34-2 1.4-.52.06-1.17.09-1.89-.12a17 17 0 0 1-1.71-.63c-3-1.3-4.95-4.33-5.1-4.53-.15-.2-1.22-1.62-1.22-3.09s.77-2.19 1.04-2.49c.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.13 1 2.09 1.31 2.39 1.46.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.08.12.08.72-.17 1.4Z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <div className="glow g1" aria-hidden="true" />
      <div className="glow g2" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="logo">UsmanMahmood<span>.</span>services</a>
        <nav aria-label="Main">
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="/Usman_Mahmood_CV.pdf" download="Usman_Mahmood_CV.pdf">CV</a>
          <a href="#contact" className="pill">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="status in-1"><span className="dot" aria-hidden="true" /> Available for new projects</p>
            <h1 className="in-2">Hi, I&apos;m <span className="grad">Usman Mahmood</span></h1>
            <p className="role in-3">MERN Stack Developer · Lahore, Pakistan</p>
            <p className="lead in-3">I build fast, modern and responsive websites and web apps with React.js, Next.js, Node.js and MongoDB.</p>
            <div className="cta in-4">
              <a className="btn primary" href={WA} target="_blank" rel="noopener noreferrer"><WaIcon /> Chat on WhatsApp</a>
              <a className="btn" href="#work">View projects</a>
              <a className="btn" href="/Usman_Mahmood_CV.pdf" download="Usman_Mahmood_CV.pdf">Download CV</a>
            </div>
          </div>
          <div className="photo in-2">
            <div className="ring" aria-hidden="true" />
            <Image src="/usman.jpg" alt="Portrait of Usman Mahmood" width={640} height={640} priority />
            <span className="chip c1">React.js</span>
            <span className="chip c2">Node.js</span>
            <span className="chip c3">MongoDB</span>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...skills, ...skills].map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>

        <section id="work" className="section">
          <Reveal as="h2">Projects</Reveal>
          <Reveal as="p" className="sub" delay={80}>Live websites I have built.</Reveal>
          <div className="projects">
            {projects.map((p, i) => (
              <Reveal as="article" className="card" key={p.title} delay={i * 120}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <a className="btn primary" href={p.url} target="_blank" rel="noopener noreferrer">Visit website</a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <Reveal as="h2">Skills</Reveal>
          <Reveal as="ul" className="skills" delay={100}>
            {skills.map((s) => <li key={s}>{s}</li>)}
          </Reveal>
        </section>

        <section id="about" className="section about">
          <Reveal as="h2">About me</Reveal>
          <Reveal delay={100}>
            
<p>I build modern, user-friendly web applications that solve real business problems. My focus goes beyond code — I turn your ideas into fast, responsive, and reliable digital solutions that help your business grow. <b>Have an idea? Let’s bring it to life.</b></p>

          </Reveal>
        </section>

        <section id="contact" className="section contact">
          <Reveal as="h2">Let&apos;s work together</Reveal>
          <Reveal as="p" className="sub" delay={80}>Message me on WhatsApp for the quickest reply, or send an email.</Reveal>
          <Reveal className="cta" delay={160}>
            <a className="btn wa" href={WA} target="_blank" rel="noopener noreferrer"><WaIcon /> WhatsApp me</a>
            <a className="btn" href={GMAIL} target="_blank" rel="noopener noreferrer">Email</a>
            <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href="/Usman_Mahmood_CV.pdf" download="Usman_Mahmood_CV.pdf">Download CV</a>
          </Reveal>
          <a className="mail" href={GMAIL} target="_blank" rel="noopener noreferrer">{EMAIL}</a>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Usman Mahmood</span>
        <span>Lahore, Pakistan</span>
      </footer>

      <a className="float-wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WaIcon /></a>
    </>
  );
}
