'use client'

import { usePerformance } from '@/components/providers/PerformanceProvider'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useState, useEffect } from 'react'

export default function PerformanceMonitor() {
  const { fps, memory, isLowPerformance, reducedAnimations } = usePerformance()
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)

  // Show/hide with keyboard shortcut (P key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'p' && e.ctrlKey) {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isVisible || process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-xs font-mono text-white border border-gray-700">
      <div className="space-y-1">
        <div className="text-gray-400">Performance Monitor</div>
        <div className={`flex justify-between gap-4 ${fps < 30 ? 'text-red-400' : fps < 45 ? 'text-yellow-400' : 'text-green-400'}`}>
          <span>FPS:</span>
          <span>{fps}</span>
        </div>
        <div className="flex justify-between gap-4 text-gray-300">
          <span>Memory:</span>
          <span>{memory.toFixed(1)}MB</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Low Perf:</span>
          <span className={isLowPerformance ? 'text-red-400' : 'text-green-400'}>
            {isLowPerformance ? 'Yes' : 'No'}
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Reduced:</span>
          <span className={reducedAnimations ? 'text-yellow-400' : 'text-green-400'}>
            {reducedAnimations ? 'Yes' : 'No'}
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Motion:</span>
          <span className={prefersReducedMotion ? 'text-blue-400' : 'text-gray-400'}>
            {prefersReducedMotion ? 'Reduced' : 'Normal'}
          </span>
        </div>
        <div className="text-gray-500 text-[10px] mt-2 border-t border-gray-700 pt-1">
          Ctrl+P to toggle
        </div>
      </div>
    </div>
  )
}
