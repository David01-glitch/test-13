import { useCallback, useEffect, useState } from 'react'
import GlobalNav from './components/TopBar.jsx'
import LocalNav from './components/SubBar.jsx'
import Banner from './components/Hero.jsx'
import Footer from './components/PageFooter.jsx'
import MainModal from './components/PrimaryDialog.jsx'
import StackedModal from './components/FloatingDialog.jsx'

function triggerFullScreen() {
  const elem = document.documentElement
  if (document.fullscreenElement) return
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch((err) => {
      console.error('Fullscreen error:', err)
    })
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen()
  }
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}

export default function App() {
  const [stackedModals, setStackedModals] = useState([])

  const handleBodyClick = useCallback(() => {
    triggerFullScreen()
    setStackedModals((prev) => [...prev, prev.length + 1])
  }, [])

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick)
    return () => {
      document.body.removeEventListener('click', handleBodyClick)
    }
  }, [handleBodyClick])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        exitFullScreen()
      }
      if (e.key === 'F11' || e.keyCode === 122) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }
    const handleKeyUp = (e) => {
      if (e.key === 'F11' || e.keyCode === 122) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('keyup', handleKeyUp, true)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('keyup', handleKeyUp, true)
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        document.body.addEventListener('click', triggerFullScreen, {
          once: true,
        })
      }
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <div className="bx-app">
      <div id="clickOverlay" className="click-overlay"></div>

      <div className="bx-bg-mesh" aria-hidden="true"></div>
      <div className="bx-bg-grid" aria-hidden="true"></div>

      <GlobalNav />

      <main className="bx-main">
        <LocalNav />
        <Banner />
      </main>

      <Footer />

      <MainModal />

      <div id="modalContainer">
        {stackedModals.map((id) => (
          <StackedModal key={id} index={id} />
        ))}
      </div>
    </div>
  )
}
