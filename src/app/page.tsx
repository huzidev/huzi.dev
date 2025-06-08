'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import { OptimizedStarField } from '@/components/three/OptimizedStarField'
import StarField2D from '@/components/effects/StarField2D'
import LightNebula2D from '@/components/effects/LightNebula2D'
import MeteorShower2D from '@/components/effects/MeteorShower2D'
import ShootingStars2D from '@/components/effects/ShootingStars2D'
import Navigation from '@/components/Navigation'
import PerformanceMonitor from '@/components/debug/PerformanceMonitor'
import { useResponsive } from '@/components/providers/ResponsiveProvider'

function HomePage() {
  const { starCount, effectsLevel } = useResponsive()

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Three.js Canvas for 3D effects */}
      {effectsLevel !== 'minimal' && (
        <div className="fixed inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 50], fov: 60 }}
            gl={{ antialias: effectsLevel === 'full', alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <OptimizedStarField count={starCount} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* 2D Background effects */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <StarField2D />
        <LightNebula2D />
        <MeteorShower2D />
        <ShootingStars2D />
      </div>

      {/* Content sections */}
      <div className="relative z-20">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Contact />
      </div>

      {/* Debug Components */}
      <PerformanceMonitor />
    </main>
  )
}

export default function Home() {
  return <HomePage />
}
