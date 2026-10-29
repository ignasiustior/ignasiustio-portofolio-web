
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-sm text-[#b7f36b]">404 / PROJECT NOT FOUND</p>
        <h1 className="mt-4 text-4xl font-semibold">
          This project doesn't exist.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-[#b7f36b]"
        >
          <ArrowLeft size={17} /> Back to home
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 pb-24 pt-36 sm:px-10 lg:px-16">
      <article className="mx-auto max-w-5xl">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-[#a6aba5] transition-colors hover:text-[#b7f36b]"
        >
          <ArrowLeft size={16} /> Back to selected work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-14 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#b7f36b]">
            <span>{project.category}</span>
            <span className="text-[#555b54]">/</span>
            <span className="text-[#858b84]">{project.year}</span>
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a6aba5]">
            {project.description}
          </p>

          <div className="mt-12 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#858b84]">
                Role
              </p>
              <p className="mt-3 text-sm">{project.role}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#858b84]">
                Technology
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#d8dbd4]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-12">
            <p className="text-xs uppercase tracking-widest text-[#b7f36b]">
              Project overview
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Context & implementation
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#a6aba5]">
              {project.overview}
            </p>
          </section>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <p className="text-sm text-[#858b84]">
              Want to explore more?
            </p>
            <Link
              to="/#work"
              className="mt-4 inline-flex items-center gap-2 text-[#b7f36b] hover:underline"
            >
              Back to all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  )
}
