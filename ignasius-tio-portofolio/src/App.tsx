
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm text-[#b7f36b]">404 / PAGE NOT FOUND</p>
      <h1 className="mt-4 text-4xl font-semibold">Lost in the wrong route.</h1>
      <a href="/" className="mt-6 text-[#b7f36b] hover:underline">
        Return home
      </a>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
