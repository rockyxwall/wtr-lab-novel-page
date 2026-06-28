import { useState } from 'react'
import Navbar from './components/Navbar'
import NovelCard from './components/NovelCard'
import UnlockProgress from './components/UnlockProgress'
import TabSection from './components/TabSection'
import SimilarNovelsCarousel from './components/SimilarNovelsCarousel'
import Footer from './components/Footer'

export default function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div id="__next" className="dark">
      <Navbar />
      <div className="layout-body flex flex-col max-w-7xl container mx-auto font-sans antialiased">
        <NovelCard />
        <UnlockProgress />
        <TabSection activeTab={activeTab} onTabChange={setActiveTab} />
        <SimilarNovelsCarousel />
      </div>
      <Footer />
    </div>
  )
}
