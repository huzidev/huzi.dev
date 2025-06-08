'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ShootingStar {
  x: number
  y: number
  startX: number
  startY: number
  endX: number
  endY: number
  speed: number
  size: number
  color: { r: number; g: number; b: number }
  life: number
  maxLife: number
  opacity: number
  angle: number
  tailLength: number
  isActive: boolean
}

const SHOOTING_STAR_COUNT = 8 // Keep it low for subtle effect
const MIN_SPAWN_INTERVAL = 3000 // Minimum 3 seconds between spawns
const MAX_SPAWN_INTERVAL = 8000 // Maximum 8 seconds between spawns

export default function ShootingStars2D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shootingStarsRef = useRef<ShootingStar[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)
  const lastSpawnTimeRef = useRef<number>(0)
  const nextSpawnDelayRef = useRef<number>(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Initialize shooting stars array
    const initializeShootingStars = () => {
      shootingStarsRef.current = new Array(SHOOTING_STAR_COUNT).fill(null).map(() => createInactiveShootingStar())
    }

    // Create an inactive shooting star
    const createInactiveShootingStar = (): ShootingStar => ({
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      speed: 0,
      size: 0,
      color: { r: 255, g: 255, b: 255 },
      life: 0,
      maxLife: 0,
      opacity: 0,
      angle: 0,
      tailLength: 0,
      isActive: false
    })

    // Create a new shooting star
    const createShootingStar = (width: number, height: number): ShootingStar => {
      // Determine entry side (0: top, 1: right, 2: bottom, 3: left)
      const side = Math.floor(Math.random() * 4)
      let startX: number, startY: number, endX: number, endY: number
      
      // Start from edges, move toward opposite side with some randomness
      switch (side) {
        case 0: // From top
          startX = Math.random() * width
          startY = -50
          endX = Math.random() * width
          endY = height + 50
          break
        case 1: // From right
          startX = width + 50
          startY = Math.random() * height
          endX = -50
          endY = Math.random() * height
          break
        case 2: // From bottom
          startX = Math.random() * width
          startY = height + 50
          endX = Math.random() * width
          endY = -50
          break
        case 3: // From left
        default:
          startX = -50
          startY = Math.random() * height
          endX = width + 50
          endY = Math.random() * height
          break
      }

      // Calculate angle for the shooting star
      const angle = Math.atan2(endY - startY, endX - startX)
      
      // Varied properties for natural look
      const speed = 0.3 + Math.random() * 0.5 // Slow speed (0.3 - 0.8)
      const size = 2 + Math.random() * 3 // Size 2-5
      const maxLife = 5000 + Math.random() * 8000 // 5-13 seconds lifetime
      const tailLength = 80 + Math.random() * 120 // Tail length 80-200
      
      // Color variations - mostly white with some colored stars
      const colorChoice = Math.random()
      let color: { r: number; g: number; b: number }
      
      if (colorChoice < 0.6) {
        // White/blue-white (60%)
        color = { r: 255, g: 255, b: 255 }
      } else if (colorChoice < 0.8) {
        // Light blue (20%)
        color = { r: 200, g: 220, b: 255 }
      } else {
        // Warm white/yellow (20%)
        color = { r: 255, g: 245, b: 200 }
      }

      return {
        x: startX,
        y: startY,
        startX,
        startY,
        endX,
        endY,
        speed,
        size,
        color,
        life: 0,
        maxLife,
        opacity: 1,
        angle,
        tailLength,
        isActive: true
      }
    }

    // Update shooting star
    const updateShootingStar = (star: ShootingStar, deltaTime: number) => {
      if (!star.isActive) return

      // Update life
      star.life += deltaTime
      
      // Calculate progress (0 to 1)
      const progress = Math.min(star.life / star.maxLife, 1)
      
      // Update position
      star.x = star.startX + (star.endX - star.startX) * progress
      star.y = star.startY + (star.endY - star.startY) * progress
      
      // Fade in/out effect
      if (progress < 0.1) {
        // Fade in
        star.opacity = progress / 0.1
      } else if (progress > 0.8) {
        // Fade out
        star.opacity = (1 - progress) / 0.2
      } else {
        star.opacity = 1
      }
      
      // Deactivate if life exceeded
      if (progress >= 1) {
        star.isActive = false
      }
    }

    // Draw shooting star with glowing tail
    const drawShootingStar = (ctx: CanvasRenderingContext2D, star: ShootingStar) => {
      if (!star.isActive || star.opacity <= 0) return

      const { x, y, color, size, opacity, angle, tailLength } = star
      
      // Calculate tail end position
      const tailEndX = x - Math.cos(angle) * tailLength
      const tailEndY = y - Math.sin(angle) * tailLength
      
      // Draw tail with gradient
      ctx.save()
      
      // Create gradient for tail
      const gradient = ctx.createLinearGradient(tailEndX, tailEndY, x, y)
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
      gradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.1})`)
      gradient.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.4})`)
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.8})`)
      
      // Draw tail
      ctx.strokeStyle = gradient
      ctx.lineWidth = size * 1.5
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(tailEndX, tailEndY)
      ctx.lineTo(x, y)
      ctx.stroke()
      
      // Draw main star body with glow
      const glowSize = size * 3
      
      // Outer glow
      const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, glowSize)
      outerGlow.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`)
      outerGlow.addColorStop(0.2, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.6})`)
      outerGlow.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.3})`)
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.fillStyle = outerGlow
      ctx.fillRect(x - glowSize, y - glowSize, glowSize * 2, glowSize * 2)
      
      // Inner bright core
      const coreSize = size * 0.8
      const coreGlow = ctx.createRadialGradient(x, y, 0, x, y, coreSize)
      coreGlow.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
      coreGlow.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.8})`)
      coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.fillStyle = coreGlow
      ctx.fillRect(x - coreSize, y - coreSize, coreSize * 2, coreSize * 2)
      
      ctx.restore()
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Initialize shooting stars on first resize
      if (shootingStarsRef.current.length === 0) {
        initializeShootingStars()
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop
    let lastTime = 0
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Check if we should spawn a new shooting star
      const timeSinceLastSpawn = currentTime - lastSpawnTimeRef.current
      if (timeSinceLastSpawn >= nextSpawnDelayRef.current) {
        // Find an inactive shooting star to reuse
        const inactiveStar = shootingStarsRef.current.find(star => !star.isActive)
        if (inactiveStar) {
          // Create new shooting star
          const newStar = createShootingStar(canvas.width, canvas.height)
          Object.assign(inactiveStar, newStar)
          
          // Set next spawn time
          lastSpawnTimeRef.current = currentTime
          nextSpawnDelayRef.current = MIN_SPAWN_INTERVAL + Math.random() * (MAX_SPAWN_INTERVAL - MIN_SPAWN_INTERVAL)
        }
      }
      
      // Update and draw all shooting stars
      shootingStarsRef.current.forEach(star => {
        updateShootingStar(star, deltaTime)
        drawShootingStar(ctx, star)
      })
      
      animationIdRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    />
  )
}
