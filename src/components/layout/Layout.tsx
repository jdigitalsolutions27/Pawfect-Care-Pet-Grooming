import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { BackToTop } from './BackToTop'
import { FloatingActions } from './FloatingActions'
import { Footer } from './Footer'
import { Header } from './Header'
import { LoadingScreen } from './LoadingScreen'
import { ScrollProgress } from './ScrollProgress'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <BackToTop />
    </>
  )
}
