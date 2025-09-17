import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className='space-y-32'>
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App