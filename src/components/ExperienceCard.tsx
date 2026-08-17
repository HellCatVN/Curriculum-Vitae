import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Experience } from '../data/resume'

export function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  return (
    <motion.article
      className={`experience-card ${item.featured ? 'is-featured' : ''}`}
      initial={{ opacity: 0, x: index % 2 ? 42 : -42 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="experience-index">{String(index + 1).padStart(2, '0')}</div>
      <div className="experience-main">
        <div className="experience-topline">
          <span>{item.period}</span>
          {item.featured && <span className="featured-pill">selected chapter</span>}
        </div>
        <h3>{item.role}</h3>
        <div className="company-line">
          <span>{item.company}</span>
          <ArrowUpRight size={16} />
        </div>
        <p>{item.summary}</p>
        {item.detail && (
          <ul>
            {item.detail.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
        {item.projectUrl && (
          <a className="experience-project-link" href={item.projectUrl} target="_blank" rel="noreferrer">
            Open project <ArrowUpRight size={14} />
          </a>
        )}
        {item.stack && (
          <div className="stack-row">
            {item.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
