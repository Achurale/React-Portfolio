import {useState} from 'react'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'

import Header from './components/header'
import Footer from './components/footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="body">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <section>
          {renderPage()}
      </section>
      <Footer />      
    </div>
  )
}

export default App
