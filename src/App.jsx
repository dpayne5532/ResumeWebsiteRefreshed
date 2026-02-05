import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import SystemsIntegrations from './components/systems-integrations/SystemsIntegrations'

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/systems-integrations" element={<SystemsIntegrations />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
