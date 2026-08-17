import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Globe, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ExperienceCard } from './components/ExperienceCard'
import { ProfilePanel } from './components/ProfilePanel'
import { Reveal } from './components/Reveal'
import { SceneCanvas } from './components/SceneCanvas'
import { SmoothScroll } from './components/SmoothScroll'
import { education, experiences, interests, interestsIntro, intro, legacyAbout, profile, skillGroups } from './data/resume'

const nav = [
  ['01', 'contact'],
  ['02', 'about'],
  ['03', 'experience'],
  ['04', 'skills'],
]

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 })
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.15])
  const [active, setActive] = useState('home')

  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (best) setActive(best.target.id)
      },
      { threshold: [0.25, 0.45, 0.65] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <SmoothScroll>
      <main>
        <motion.div className="scroll-progress" style={{ scaleX: progress }} />
        <div className="noise" />
        <SceneCanvas />

        <header className="top-nav">
          <a className="monogram" href="#home" aria-label="Home">
            L<span>/</span>Q
          </a>
          <nav aria-label="Primary navigation">
            {nav.map(([number, id]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
                <span>{number}</span>{id}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            <span>Let’s talk</span><ArrowUpRight size={16} />
          </a>
        </header>

        <section id="home" className="hero section-shell">
          <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="status-dot" /> Software Engineer · Full-stack · Cloud
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              I build systems that move from <em>idea</em> to <span>production.</span>
            </motion.h1>
            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
            >
              {intro}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8 }}
            >
              <a className="button primary" href="#experience">Explore my work <ArrowDown size={17} /></a>
              <a className="button ghost" href={profile.cv} target="_blank" rel="noreferrer">Open résumé <ArrowUpRight size={17} /></a>
            </motion.div>
            <motion.div
              className="hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <span><MapPin size={15} />{profile.location}</span>
              <span className="hero-handle">@{profile.handle}</span>
            </motion.div>
          </motion.div>
          <ProfilePanel />
          <div className="hero-side-label">SCROLL / DISCOVER / BUILD</div>
        </section>

        <section id="contact" className="contact content-section">
          <div className="section-shell contact-inner">
            <div className="contact-header">
              <div className="section-kicker"><span>01</span> Contact</div>
              <p className="contact-intro">Have a product, platform or difficult system to build? Start with a clear conversation.</p>
            </div>
            <div className="contact-grid">
              <Reveal className="contact-statement">
                <h2>Write the <em>code.</em><br /><span>Rule the world.</span></h2>
                <p>Tell me what you are working on, where it is stuck, and what a useful next step looks like.</p>
                <a className="contact-primary" href={`mailto:${profile.email}`}>Send an email <ArrowUpRight size={17} /></a>
              </Reveal>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-label">Direct</span>
                  <div>
                    <a href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>
                    <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={18} />{profile.phone}</a>
                    <span><MapPin size={18} />{profile.location}</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Elsewhere</span>
                  <div className="social-row">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /> LinkedIn</a>
                    <a href={`https://${profile.website}`} target="_blank" rel="noreferrer" aria-label="Website"><Globe size={18} /> {profile.website}</a>
                    <a href={profile.facebook} target="_blank" rel="noreferrer">Facebook</a>
                    <a href={profile.twitter} target="_blank" rel="noreferrer">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-line"><span>Trần Quốc Long · {profile.title}</span><span>Interactive CV / 2026 redesign</span></div>
          </div>
        </section>

        <section id="about" className="about section-shell content-section">
          <div className="section-kicker"><span>02</span> Profile</div>
          <div className="about-grid">
            <Reveal className="about-sticky">
              <h2>Engineer by craft.<br /><span>Builder by instinct.</span></h2>
            </Reveal>
            <div className="about-copy">
              <Reveal>
                <p className="lead">
                  My career started in web development and expanded into full-stack product engineering, banking integrations, mobile contribution, cloud systems and production support.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  I like the messy middle: understanding a business requirement, turning it into architecture, shipping the interface and APIs, connecting the data, then staying close enough to production to learn what actually works.
                </p>
              </Reveal>
              <Reveal>
                <p>{legacyAbout}</p>
              </Reveal>
              <div className="metric-grid">
                <Reveal className="metric"><strong>2017</strong><span>first professional web role</span></Reveal>
                <Reveal className="metric"><strong>9</strong><span>career / project chapters</span></Reveal>
                <Reveal className="metric"><strong>FE → BE → CLOUD</strong><span>cross-stack engineering path</span></Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience content-section">
          <div className="section-shell">
            <div className="section-heading">
              <div className="section-kicker"><span>03</span> Experience</div>
              <Reveal><h2>Career timeline,<br />without the boring timeline.</h2></Reveal>
              <Reveal><p>Selected roles, side projects and the engineering problems that shaped how I work.</p></Reveal>
            </div>
            <div className="experience-list">
              {experiences.map((item, index) => (
                <ExperienceCard key={`${item.company}-${item.period}`} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="project-interlude content-section">
          <div className="project-marquee" aria-hidden="true">
            <div>BUILD · INTEGRATE · SCALE · SUPPORT · LEARN · BUILD · INTEGRATE · SCALE · SUPPORT · LEARN ·</div>
          </div>
          <div className="section-shell selected-grid">
            <Reveal className="selected-copy">
              <div className="section-kicker"><span>+</span> Selected DNA</div>
              <h2>Products, platforms and <span>systems in motion.</span></h2>
              <p>Across the résumé, the recurring pattern is ownership across boundaries — product UI, service contracts, integrations, databases, infrastructure and production reality.</p>
            </Reveal>
            <div className="orbit-card-grid">
              {[
                ['01', 'Phoenix', 'Discord text-game platform', 'Node.js · MongoDB · AWS'],
                ['02', 'Comicaholic', 'Content platform & automation', 'React · MongoDB · CDN'],
                ['03', 'CIMB', 'Partner banking integrations', 'React · NestJS · Flutter'],
                ['04', 'NAB', 'Open banking engineering', 'GraphQL · Node.js · Cloud'],
              ].map(([n, title, desc, stack]) => (
                <Reveal className="orbit-card" key={title}>
                  <span>{n}</span>
                  <Sparkles size={18} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <small>{stack}</small>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-shell content-section">
          <div className="section-heading split-heading">
            <div>
              <div className="section-kicker"><span>04</span> Toolkit</div>
              <Reveal><h2>A stack built by solving real work.</h2></Reveal>
            </div>
            <Reveal><p>Not a percentage bar in sight. These are technologies explicitly represented in the original résumé and project history.</p></Reveal>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, groupIndex) => (
              <Reveal className="skill-panel" key={group.label}>
                <div className="skill-panel-head"><span>0{groupIndex + 1}</span><h3>{group.label}</h3></div>
                <div className="skill-cloud">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className={index % 3 === 0 ? 'bright' : ''}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="education section-shell content-section">
          <div className="section-kicker"><span>+</span> Foundation</div>
          <div className="education-grid">
            <Reveal><h2>Computer science,<br /><span>continuous self-study.</span></h2></Reveal>
            <div>
              {education.map((item) => (
                <Reveal className="education-row" key={item.title}>
                  <div><small>{item.period}</small><h3>{item.title}</h3><span>{item.org}</span></div>
                  <p>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="life-strip content-section">
          <div className="section-shell life-inner">
            <Reveal>
              <div className="section-kicker"><span>+</span> Away from keyboard</div>
              <h2>Fresh input makes better output.</h2>
              <p className="life-intro">{interestsIntro}</p>
            </Reveal>
            <div className="interest-list">
              {interests.map((interest, index) => (
                <motion.span key={interest} whileHover={{ x: 8 }}>
                  <small>{String(index + 1).padStart(2, '0')}</small>{interest}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

      </main>
    </SmoothScroll>
  )
}

export default App
