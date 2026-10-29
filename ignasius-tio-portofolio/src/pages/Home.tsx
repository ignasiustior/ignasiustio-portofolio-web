
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
//   BriefcaseBusiness,
  Code2,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const skills = [
  'Kotlin',
  'Android Development',
  'React',
  'TypeScript',
  'Laravel',
  'PHP',
  'REST API',
  'MySQL',
  'Tailwind CSS',
  'Git',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}


function ProjectPreview({ index }: { index: number }) {
  const variant = index % 3

  return (
    <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-[#191c19] p-5 sm:p-8">
      <div className="grid-background absolute inset-0 opacity-50" />

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#b7f36b]/10 blur-3xl" />

      {/* AutoGlaze POS: mobile application mockup */}
      {variant === 0 && (
        <div className="relative flex w-full max-w-[290px] items-center justify-center gap-4">
          <div className="w-[145px] rotate-[-5deg] overflow-hidden rounded-[22px] border-[4px] border-[#343a35] bg-[#f4f3ed] p-2 shadow-2xl transition-transform duration-500 group-hover:-rotate-2">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#343a35]" />

            <div className="rounded-xl bg-[#183c2b] p-3 text-white">
              <p className="text-[8px] uppercase tracking-widest text-white/60">
                AutoGlaze
              </p>
              <p className="mt-2 text-sm font-bold">Welcome back</p>
              <p className="mt-1 text-[8px] text-white/65">
                Your service, simplified.
              </p>
            </div>

            <div className="mt-3 rounded-lg border border-black/5 bg-white p-2">
              <div className="h-2 w-16 rounded bg-[#dfe6dc]" />
              <div className="mt-2 h-12 rounded-md bg-[#e7ece3]" />
              <div className="mt-2 h-2 w-20 rounded bg-[#e1e4dd]" />
            </div>

            <div className="mt-2 flex gap-1.5">
              <div className="h-7 flex-1 rounded-md bg-[#dce9d4]" />
              <div className="h-7 flex-1 rounded-md bg-[#e8e9e1]" />
            </div>
          </div>

          <div className="hidden w-28 space-y-3 rounded-xl border border-white/10 bg-[#222622] p-3 sm:block">
            <p className="text-[9px] text-white/45">API STATUS</p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#b7f36b]" />
              <span className="text-[10px] text-white/75">Connected</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-1.5 w-4/5 rounded-full bg-[#b7f36b]" />
            </div>
            <p className="text-[9px] leading-4 text-white/40">
              Mobile interface
              <br />
              Data integration
            </p>
          </div>
        </div>
      )}

      {/* Loookers: recruitment dashboard mockup */}
      {variant === 1 && (
        <div className="relative w-full max-w-[370px] overflow-hidden rounded-xl border border-white/10 bg-[#121512] shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
            <div className="h-2 w-2 rounded-full bg-[#b7f36b]" />
            <span className="text-[9px] font-semibold tracking-wide text-white/70">
              LOOOKERS / TALENT MATCH
            </span>
          </div>

          <div className="grid grid-cols-[80px_1fr]">
            <div className="space-y-3 border-r border-white/10 p-3">
              <div className="h-2 rounded bg-white/15" />
              <div className="h-2 rounded bg-[#b7f36b]/60" />
              <div className="h-2 rounded bg-white/10" />
              <div className="h-2 rounded bg-white/10" />
            </div>

            <div className="p-3">
              <p className="text-[10px] font-semibold text-white">
                Candidate ranking
              </p>
              <p className="mt-1 text-[8px] text-white/35">
                Hybrid evaluation overview
              </p>

              {[92, 84, 76].map((score, i) => (
                <div key={score} className="mt-3 flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[8px] text-white/60">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-1.5 rounded-full bg-[#b7f36b]"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-[8px] text-[#b7f36b]">{score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* AI Acne Detection: model analysis mockup */}
      {variant === 2 && (
        <div className="relative w-full max-w-[320px] rounded-xl border border-white/10 bg-[#171a18] p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold text-white">
                AI Image Analysis
              </p>
              <p className="mt-1 text-[8px] text-white/40">
                Computer vision concept
              </p>
            </div>
            <span className="rounded-md border border-[#b7f36b]/20 bg-[#b7f36b]/10 px-2 py-1 text-[8px] text-[#b7f36b]">
              DEMO
            </span>
          </div>

          <div className="mt-4 grid grid-cols-[1fr_0.85fr] gap-3">
            <div className="relative flex min-h-[112px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#4b5148] via-[#343b33] to-[#20251f]">
              <div className="absolute h-20 w-20 rounded-full border border-[#b7f36b]/50" />
              <div className="absolute h-12 w-12 rounded-full border border-dashed border-[#b7f36b]/80" />
              <div className="absolute left-[28%] top-[30%] h-2 w-2 rounded-full bg-[#b7f36b]" />
              <div className="absolute right-[28%] bottom-[30%] h-2 w-2 rounded-full bg-[#b7f36b]" />
              <span className="relative text-[8px] text-white/70">
                Scan preview
              </span>
            </div>

            <div className="space-y-3 rounded-lg bg-white/[0.035] p-3">
              <p className="text-[8px] text-white/40">Analysis result</p>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-1.5 w-3/4 rounded-full bg-[#b7f36b]" />
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-1.5 w-1/2 rounded-full bg-[#8bc8a2]" />
              </div>
              <p className="text-[8px] leading-4 text-white/55">
                Detection
                <br />
                Classification
              </p>
            </div>
          </div>
        </div>
      )}

      <span className="absolute bottom-4 left-5 text-[9px] uppercase tracking-[0.18em] text-white/30">
        Selected project / 0{index + 1}
      </span>
    </div>
  )
}


export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="overflow-hidden bg-[#111312] text-[#f1f2ec]">
      {/* HERO */}
      <section
        id="home"
        className="relative isolate min-h-[88vh] border-b border-white/10 pt-[76px]"
      >
        <div className="grid-background absolute inset-0 -z-20 opacity-60" />

        <div className="absolute -right-36 top-20 -z-10 h-96 w-96 rounded-full bg-[#b7f36b]/10 blur-[120px]" />

        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-28">
          <div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b7f36b] opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#b7f36b]" />
              </span>
              <span className="text-xs font-medium tracking-wide text-white/70">
                Informatics Graduate · Developer
              </span>
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#b7f36b]"
            >
              Hello, I&apos;m Ignasius Tio
            </motion.p>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[5.6rem]"
            >
              Building digital
              <br />
              products with
              <br />
              <span className="text-[#b7f36b]">purpose.</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg"
            >
              I develop mobile and web applications by combining thoughtful
              interfaces, reliable engineering, and practical problem-solving
              to create meaningful digital experiences.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#b7f36b] px-6 py-3.5 text-sm font-semibold text-[#111312] hover:bg-[#c9ff85]"
              >
                Explore my work
                <ArrowDownRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 hover:border-white/40 hover:text-white"
              >
                Let&apos;s talk
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/40"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} />
                Indonesia
              </span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>Mobile & Web Development</span>
            </motion.div>
          </div>

          {/* DEVELOPER VISUAL */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.96, y: 20 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-[#b7f36b]/[0.045] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171a18] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f7c66a]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b7f36b]/80" />
                </div>

                <div className="flex items-center gap-2 text-xs text-white/35">
                  <Terminal size={14} />
                  developer.ts
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#b7f36b]/20 bg-[#b7f36b]/10 text-[#b7f36b]">
                    <Code2 size={23} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ignasius Tio</p>
                    <p className="mt-1 text-xs text-white/40">
                      Software Developer
                    </p>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs leading-6 sm:text-sm">
                  <p className="text-white/30">
                    <span className="text-[#b7f36b]">01</span>
                    {'  '}const developer = {'{'}
                  </p>
                  <p className="pl-8 text-white/70">
                    name:{' '}
                    <span className="text-[#b7f36b]">
                      &apos;Ignasius Tio&apos;
                    </span>
                    ,
                  </p>
                  <p className="pl-8 text-white/70">
                    focus:{' '}
                    <span className="text-[#b7f36b]">
                      &apos;Mobile & Web&apos;
                    </span>
                    ,
                  </p>
                  <p className="pl-8 text-white/70">
                    mindset:{' '}
                    <span className="text-[#b7f36b]">
                      &apos;Continuous Learning&apos;
                    </span>
                    ,
                  </p>
                  <p className="pl-8 text-white/70">
                    approach:{' '}
                    <span className="text-[#b7f36b]">
                      &apos;Build with Purpose&apos;
                    </span>
                  </p>
                  <p className="text-white/30">
                    <span className="text-[#b7f36b]">07</span>
                    {'  '}
                    {'}'}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Currently exploring
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Kotlin', 'React', 'TypeScript', 'Laravel'].map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-5 py-3">
                <span className="text-[10px] text-white/30">
                  DESIGN · DEVELOP · ITERATE
                </span>
                <Sparkles size={15} className="text-[#b7f36b]" />
              </div>
            </div>

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -7, 0], rotate: [0, 1, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#1b1e1c] p-4 shadow-xl sm:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#b7f36b]/10 text-[#b7f36b]">
                <Layers3 size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">
                  End-to-end mindset
                </p>
                <p className="mt-1 text-[10px] text-white/40">
                  From UI to implementation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 right-7 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/25 lg:flex">
          Scroll to explore
          <ArrowDownRight size={14} />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14 lg:py-32"
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7f36b]">
            01 / About me
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Engineering meets
            <span className="text-white/35"> thoughtful design.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-lg leading-8 text-white/60">
            I am an Informatics graduate with a strong interest in mobile
            application development and fullstack web engineering. I enjoy
            transforming ideas into useful products through clean
            implementation, API integration, data management, and intuitive
            user interfaces.
          </p>

          <p className="mt-5 leading-8 text-white/45">
            My experience spans Android development, web technologies,
            academic mentoring, and collaborative project work. I value
            continuous learning, clear communication, and building software
            that solves real problems.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#b7f36b] hover:gap-3"
          >
            Get to know me
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-y border-white/10 bg-[#151715]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
          <Reveal className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7f36b]">
                02 / Selected work
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Projects in focus<span className="text-[#b7f36b]">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              A selection of projects that reflect my approach to
              engineering, problem-solving, and product development.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111312] hover:border-[#b7f36b]/40"
                >
                   <ProjectPreview index={index} />
                  <div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-[#1b1e1c] p-8">
                    <div className="absolute inset-0 grid-background opacity-50" />

                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#b7f36b]/10 blur-3xl transition-colors group-hover:bg-[#b7f36b]/20" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#b7f36b]/20 bg-[#b7f36b]/10 text-[#b7f36b] transition-transform duration-300 group-hover:scale-110">
                      {/* {index % 3 === 0 ? (
                        <Code2 size={34} strokeWidth={1.5} />
                      ) : index % 3 === 1 ? (
                        <Layers3 size={34} strokeWidth={1.5} />
                      ) : (
                        <Sparkles size={34} strokeWidth={1.5} />
                      )} */}
                      <ProjectPreview index={index} />
                    </div>
                    
                    <span className="absolute left-5 top-5 text-xs text-white/35">
                      0{index + 1} — {project.year}
                    </span>

                    <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all group-hover:border-[#b7f36b] group-hover:bg-[#b7f36b] group-hover:text-[#111312]">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#b7f36b]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#b7f36b]">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/50">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/10 px-2.5 py-1.5 text-[11px] text-white/55"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                      <span className="text-white/45">View case study</span>
                      <ArrowRight
                        size={16}
                        className="text-[#b7f36b] transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7f36b]">
            03 / Toolbox
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools I use to
              <br />
              <span className="text-white/35">bring ideas to life.</span>
            </h2>

            <div>
              <p className="max-w-xl leading-8 text-white/50">
                My toolkit covers application development, frontend
                interfaces, backend integration, and database management.
                I choose technologies based on the problem and the needs
                of the product.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/65 transition-colors hover:border-[#b7f36b]/50 hover:text-[#b7f36b]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 pb-20 sm:px-10 lg:px-14"
      >
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#191c19] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid-background absolute inset-0 opacity-40" />
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#b7f36b]/10 blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7f36b]">
                  04 / Get in touch
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Have an idea?
                  <br />
                  <span className="text-white/40">
                    Let&apos;s build it.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-white/50">
                  I&apos;m open to discussing development opportunities,
                  interesting projects, and collaborations.
                </p>
              </div>

              <a
                href="mailto:your.email@example.com"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#b7f36b] px-6 py-4 text-sm font-semibold text-[#111312] hover:bg-[#c9ff85]"
              >
                <Mail size={18} />
                Get in touch
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-7 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="font-semibold tracking-wide text-white/75 hover:text-[#b7f36b]"
          >
            IGNASIUS TIO<span className="text-[#b7f36b]">.</span>
          </a>

          <p>
            Designed with intention. Built with curiosity.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#b7f36b]"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/your-username/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#b7f36b]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
