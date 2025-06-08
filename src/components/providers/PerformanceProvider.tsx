'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface PerformanceState {
  fps: number
  memory: number
  isLowPerformance: boolean
  reducedAnimations: boolean
}

interface PerformanceContextType extends PerformanceState {
  updatePerformance: (data: Partial<PerformanceState>) => void
}

const PerformanceContext = createContext<PerformanceContextType | null>(null)

interface PerformanceProviderProps {
  children: ReactNode
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  const [performanceState, setPerformanceState] = useState<PerformanceState>({
    fps: 60,
    memory: 0,
    isLowPerformance: false,
    reducedAnimations: false,
  })

  const updatePerformance = (data: Partial<PerformanceState>) => {
    setPerformanceState(prev => ({ ...prev, ...data }))
  }

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measurePerformance = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        const isLowPerformance = fps < 30
        
        // Get memory usage if available
        const memory = (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0
        
        updatePerformance({
          fps,
          memory,
          isLowPerformance,
          reducedAnimations: isLowPerformance || fps < 45
        })
        
        frameCount = 0
        lastTime = currentTime
      }
      
      animationId = requestAnimationFrame(measurePerformance)
    }

    animationId = requestAnimationFrame(measurePerformance)
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <PerformanceContext.Provider value={{ ...performanceState, updatePerformance }}>
      {children}
    </PerformanceContext.Provider>
  )
}

export function usePerformance() {
  const context = useContext(PerformanceContext)
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider')
  }
  return context
}
