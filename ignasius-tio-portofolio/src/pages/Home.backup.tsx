import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
//   Github,
//   Linkedin,
  Mail,
  Code2,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const skills = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Laravel',
  'PHP',
  'MySQL',
  'REST API',
  'Kotlin',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="relative flex min-h-[90svh] items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      >
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#b7f36b]/10 blur-[100px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="relative mx-auto w-full max-w-7xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#b7f36b]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#b7f36b]" />
            Fullstack Web Developer
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-7xl lg:text-[100px]"
          >
            I build digital
            <br />
            products with
            <br />
            <span className="text-[#b7f36b]">purpose.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-9 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-lg text-base leading-7 text-[#a6aba5] sm:text-lg">
              I'm Ignasius Tio — a developer passionate about building
              thoughtful interfaces, reliable systems, and useful digital
              experiences.
            </p>

            <a
              href="#work"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#b7f36b] px-6 py-4 text-sm font-semibold text-[#111312] transition-transform duration-300 hover:-translate-y-1"
            >
              Explore my work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-widest text-[#858b84]"
          >
            <span>Frontend</span>
            <span>Backend</span>
            <span>API Integration</span>
            <span>Problem Solving</span>
          </motion.div>
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs text-[#858b84] transition-colors hover:text-[#b7f36b] sm:flex"
        >
          SCROLL TO DISCOVER <ArrowDown size={15} />
        </a>
      </section>

      <section
        id="about"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#b7f36b]">
              01 / About me
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Curious by nature.
              <br />
              <span className="text-[#858b84]">Engineer by practice.</span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#c5c9c1]">
              I enjoy working across the development process — from shaping
              user interfaces to integrating APIs and designing data-driven
              application flows.
            </p>
            <p className="mt-5 leading-7 text-[#858b84]">
              My background includes mobile application development, database
              work, and academic mentoring. I'm now bringing that experience
              into fullstack web development, with a focus on maintainable
              code and purposeful user experiences.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Code2, label: 'Development', value: 'End-to-end thinking' },
                { icon: Layers3, label: 'Architecture', value: 'Modular & maintainable' },
                { icon: Sparkles, label: 'Experience', value: 'User-focused design' },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <Icon className="mb-5 text-[#b7f36b]" size={22} />
                  <p className="text-sm font-medium">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-[#858b84]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#b7f36b]">
                02 / Selected work
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Projects with purpose.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#858b84]">
              A selection of projects, technical explorations, and product
              experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex min-h-[300px] flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-[#b7f36b]/50 hover:bg-white/[0.045] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#a6aba5]">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#858b84]">{project.year}</span>
                </div>

                <div className="mt-12 flex-1">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#858b84]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-xs text-[#a6aba5]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    aria-label={`View ${project.title} case study`}
                    className="inline-flex items-center gap-2 text-sm text-[#b7f36b]"
                  >
                    View case study
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#b7f36b]">
              03 / Technical toolkit
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools for turning ideas into reality.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[#858b84]">
              My toolkit evolves with the problem. These are technologies I
              have used or am actively developing my skills with.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-[#d8dbd4] transition-colors hover:border-[#b7f36b]/60 hover:text-[#b7f36b]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#b7f36b] p-8 text-[#111312] sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            04 / Let's connect
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Have a good idea? Let's build it.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-[#35432a]">
            I'm open to discussing development opportunities, meaningful
            products, and collaborative projects.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#111312] px-6 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-1"
          >
            <Mail size={17} />
            Get in touch
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-12 flex flex-wrap gap-5 border-t border-[#111312]/20 pt-6 text-sm">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <SiGithub size={17} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-3 px-6 py-7 text-xs text-[#858b84] sm:flex-row sm:px-10 lg:px-16">
        <span>© {new Date().getFullYear()} Ignasius Tio</span>
        <span>Designed with intent. Built with care.</span>
      </footer>
    </main>
  )
}
