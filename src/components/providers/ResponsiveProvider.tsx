'use client'

import { useViewportSize } from '@/hooks/useViewportSize'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { createContext, useContext, ReactNode, useMemo } from 'react'

interface ResponsiveState {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  effectsLevel: 'minimal' | 'reduced' | 'full'
  starCount: number
  animationSpeed: number
}

const ResponsiveContext = createContext<ResponsiveState | null>(null)

interface ResponsiveProviderProps {
  children: ReactNode
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
  const { width } = useViewportSize()
  const prefersReducedMotion = useReducedMotion()

  const responsive = useMemo<ResponsiveState>(() => {
    const isMobile = width < 768
    const isTablet = width >= 768 && width < 1024
    const isDesktop = width >= 1024

    let effectsLevel: ResponsiveState['effectsLevel'] = 'full'
    let starCount = 2000
    let animationSpeed = 1

    if (prefersReducedMotion) {
      effectsLevel = 'minimal'
      starCount = 100
      animationSpeed = 0
    } else if (isMobile) {
      effectsLevel = 'reduced'
      starCount = 500
      animationSpeed = 0.5
    } else if (isTablet) {
      effectsLevel = 'reduced'
      starCount = 1000
      animationSpeed = 0.75
    }

    return {
      isMobile,
      isTablet,
      isDesktop,
      effectsLevel,
      starCount,
      animationSpeed
    }
  }, [width, prefersReducedMotion])

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export function useResponsive() {
  const context = useContext(ResponsiveContext)
  if (!context) {
    throw new Error('useResponsive must be used within a ResponsiveProvider')
  }
  return context
}
