import React from 'react'
import MainNavbar from './components/mainNavbar'
import HeaderSection from './components/headerSection'
import FooterSection from './components/footer'
import MainContent from './components/mainContent'

const App = () => {
  return (
    <div className='app'>
      <MainNavbar />
      <HeaderSection />
      <MainContent />
      <FooterSection />
    </div>
  )
}

export default App