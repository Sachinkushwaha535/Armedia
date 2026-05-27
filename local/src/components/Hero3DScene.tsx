// 'use client'

// import { useEffect, useRef } from 'react'
// import * as THREE from 'three'

// // ─── helpers ────────────────────────────────────────────────────────────────

// function makeLabel(text: string, accent = '#c8ff00', sub = '') {
//   const W = 512, H = sub ? 160 : 128
//   const canvas = document.createElement('canvas')
//   canvas.width = W; canvas.height = H
//   const ctx = canvas.getContext('2d')!
//   ctx.clearRect(0, 0, W, H)

//   // pill background
//   ctx.fillStyle = 'rgba(6, 22, 18, 0.88)'
//   ctx.strokeStyle = accent
//   ctx.lineWidth = 2.5
//   ctx.roundRect(20, 20, W - 40, H - 40, 16)
//   ctx.fill(); ctx.stroke()

//   // accent dot
//   ctx.fillStyle = accent
//   ctx.beginPath(); ctx.arc(50, H / 2, 7, 0, Math.PI * 2); ctx.fill()

//   // main text
//   ctx.font = '700 30px Arial'
//   ctx.fillStyle = '#f0ffe8'
//   ctx.textAlign = 'center'
//   ctx.textBaseline = 'middle'
//   ctx.fillText(text, W / 2, sub ? H / 2 - 16 : H / 2)

//   if (sub) {
//     ctx.font = '400 20px Arial'
//     ctx.fillStyle = accent
//     ctx.fillText(sub, W / 2, H / 2 + 18)
//   }

//   const tex = new THREE.CanvasTexture(canvas)
//   tex.colorSpace = THREE.SRGBColorSpace
//   const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }))
//   sp.scale.set(2.4, sub ? 0.75 : 0.6, 1)
//   return sp
// }

// function makePipe(from: THREE.Vector3, to: THREE.Vector3, color: number, r = 0.038) {
//   const dir = new THREE.Vector3().subVectors(to, from)
//   const len = dir.length()
//   const geo = new THREE.CylinderGeometry(r, r, len, 16)
//   const mat = new THREE.MeshStandardMaterial({
//     color, emissive: color, emissiveIntensity: 0.9, metalness: 0.1, roughness: 0.1,
//   })
//   const mesh = new THREE.Mesh(geo, mat)
//   mesh.position.copy(from).add(to).multiplyScalar(0.5)
//   mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
//   return mesh
// }

// function makeGlowRing(r: number, color: number, y: number, group: THREE.Group) {
//   const pts: THREE.Vector3[] = []
//   for (let i = 0; i <= 64; i++) {
//     const a = (i / 64) * Math.PI * 2
//     pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r))
//   }
//   const geo = new THREE.BufferGeometry().setFromPoints(pts)
//   const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.7 })
//   group.add(new THREE.Line(geo, mat))
// }

// // ─── platform builder ────────────────────────────────────────────────────────

// type NodeDef = {
//   label: string; sub?: string
//   pos: THREE.Vector3
//   accent: number
//   style: 'servers' | 'screens' | 'antenna' | 'hub'
// }

// const darkMat = () => new THREE.MeshStandardMaterial({ color: 0x0e1f1a, metalness: 0.8, roughness: 0.35 })
// const midMat  = () => new THREE.MeshStandardMaterial({ color: 0x182e27, metalness: 0.7, roughness: 0.3  })

// function glowMat(color: number, intensity = 1.4) {
//   return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, metalness: 0.2, roughness: 0.15 })
// }

// function buildPlatform(g: THREE.Group, node: NodeDef) {
//   const { pos, accent } = node

//   // base slab
//   const base = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.22, 1.7), darkMat())
//   base.position.set(pos.x, pos.y + 0.11, pos.z)
//   g.add(base)

//   // stepped top
//   const mid = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.14, 1.35), midMat())
//   mid.position.set(pos.x, pos.y + 0.29, pos.z)
//   g.add(mid)

//   // glow edge ring on top
//   const edgeMat = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.7 })
//   const edge = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.03, 1.1), edgeMat)
//   edge.position.set(pos.x, pos.y + 0.375, pos.z)
//   g.add(edge)

//   // label sprite above
//   const label = makeLabel(node.label, `#${accent.toString(16).padStart(6, '0')}`, node.sub)
//   label.position.set(pos.x, pos.y + 1.9, pos.z + 0.1)
//   g.add(label)

//   const baseY = pos.y + 0.4

//   if (node.style === 'servers') {
//     // server rack towers
//     for (let row = 0; row < 2; row++) {
//       for (let col = 0; col < 3; col++) {
//         const rack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.64, 0.3), darkMat())
//         rack.position.set(pos.x - 0.48 + col * 0.48, baseY + 0.32, pos.z - 0.2 + row * 0.38)
//         g.add(rack)
//         // LED strip
//         const led = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.02), glowMat(accent, 2))
//         led.position.set(pos.x - 0.48 + col * 0.48, baseY + 0.5, pos.z - 0.2 + row * 0.38 + 0.14)
//         g.add(led)
//       }
//     }
//   }

//   if (node.style === 'screens') {
//     // monitor array
//     for (let i = 0; i < 3; i++) {
//       const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.42, 8), midMat())
//       stand.position.set(pos.x - 0.42 + i * 0.42, baseY + 0.21, pos.z)
//       g.add(stand)
//       const screen = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.26, 0.03), glowMat(accent, 1.1))
//       screen.position.set(pos.x - 0.42 + i * 0.42, baseY + 0.55, pos.z + 0.02)
//       g.add(screen)
//       // screen frame
//       const frame = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.3, 0.02), darkMat())
//       frame.position.set(pos.x - 0.42 + i * 0.42, baseY + 0.55, pos.z)
//       g.add(frame)
//     }
//   }

//   if (node.style === 'antenna') {
//     // antenna towers
//     for (let i = 0; i < 3; i++) {
//       const h = 0.55 + i * 0.12
//       const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.05, h, 8), midMat())
//       tower.position.set(pos.x - 0.38 + i * 0.38, baseY + h / 2, pos.z)
//       g.add(tower)
//       // dish
//       const dish = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 4, 0, Math.PI), glowMat(accent, 0.9))
//       dish.rotation.x = -Math.PI / 2.5
//       dish.position.set(pos.x - 0.38 + i * 0.38, baseY + h + 0.1, pos.z)
//       g.add(dish)
//       // glow point at tip
//       const tip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), glowMat(accent, 3))
//       tip.position.set(pos.x - 0.38 + i * 0.38, baseY + h + 0.22, pos.z)
//       g.add(tip)
//     }
//   }

//   if (node.style === 'hub') {
//     // central obelisk
//     const obelisk = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.58, 0.55), glowMat(accent, 0.55))
//     obelisk.position.set(pos.x, baseY + 0.29, pos.z)
//     g.add(obelisk)
//     // top crystal
//     const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), glowMat(accent, 2.2))
//     crystal.position.set(pos.x, baseY + 0.82, pos.z)
//     g.add(crystal)
//     // orbiting ring
//     makeGlowRing(0.55, accent, baseY + 0.65, g)
//   }
// }

// // ─── main component ──────────────────────────────────────────────────────────

// export default function Hero3DScene() {
//   const mountRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const mount = mountRef.current
//     if (!mount) return

//     const scene = new THREE.Scene()

//     const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120)
//     camera.position.set(5.2, 5.0, 7.0)
//     camera.lookAt(0, 0.5, 0)

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     renderer.setClearColor(0x000000, 0)
//     renderer.outputColorSpace = THREE.SRGBColorSpace
//     renderer.shadowMap.enabled = false
//     mount.appendChild(renderer.domElement)

//     const group = new THREE.Group()
//     group.rotation.y = -0.3
//     scene.add(group)

//     // ── lighting ──
//     scene.add(new THREE.AmbientLight(0x8fffb0, 0.9))

//     const key = new THREE.DirectionalLight(0xffffff, 2.2)
//     key.position.set(4, 8, 5); scene.add(key)

//     const rim = new THREE.DirectionalLight(0x00ffb0, 0.8)
//     rim.position.set(-5, 3, -3); scene.add(rim)

//     const centerGlow = new THREE.PointLight(0x88ff00, 22, 10)
//     centerGlow.position.set(0, 2.5, 0); scene.add(centerGlow)

//     const blueGlow = new THREE.PointLight(0x00ffcc, 8, 8)
//     blueGlow.position.set(2.5, 1.5, 2.5); scene.add(blueGlow)

//     // ── floor ──
//     const floorMat = new THREE.MeshStandardMaterial({ color: 0x091510, metalness: 0.9, roughness: 0.45 })
//     const floor = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.07, 6.5), floorMat)
//     floor.position.y = -0.035
//     group.add(floor)

//     // grid lines
//     const gridMat = new THREE.LineBasicMaterial({ color: 0x1a4a35, transparent: true, opacity: 0.5 })
//     for (let i = -5; i <= 5; i++) {
//       const lx = new THREE.BufferGeometry().setFromPoints([
//         new THREE.Vector3(i * 0.85, 0.04, -3.2),
//         new THREE.Vector3(i * 0.85, 0.04, 3.2),
//       ])
//       group.add(new THREE.Line(lx, gridMat))
//       const lz = new THREE.BufferGeometry().setFromPoints([
//         new THREE.Vector3(-4.25, 0.04, i * 0.65),
//         new THREE.Vector3(4.25, 0.04, i * 0.65),
//       ])
//       group.add(new THREE.Line(lz, gridMat))
//     }

//     // glow grid overlay (larger, dimmer)
//     const glowGridMat = new THREE.LineBasicMaterial({ color: 0x0dff80, transparent: true, opacity: 0.08 })
//     for (let i = -4; i <= 4; i++) {
//       const lx2 = new THREE.BufferGeometry().setFromPoints([
//         new THREE.Vector3(i * 1.05, 0.05, -3.2), new THREE.Vector3(i * 1.05, 0.05, 3.2),
//       ])
//       group.add(new THREE.Line(lx2, glowGridMat))
//     }

//     // ── nodes ──
//     const CENTER = new THREE.Vector3(0, 0, 0)
//     const nodes: NodeDef[] = [
//       { label: 'AI Studio',     sub: 'ML workflows',    pos: new THREE.Vector3(-2.1, 0, -1.25), accent: 0xc8ff00, style: 'servers'  },
//       { label: 'OOH + Offline', sub: 'Brand recall',    pos: new THREE.Vector3( 2.1, 0, -1.25), accent: 0x47ffa8, style: 'screens'  },
//       { label: 'BI Dashboards', sub: 'Live analytics',  pos: new THREE.Vector3( 2.0, 0,  1.35), accent: 0x00d4ff, style: 'antenna'  },
//       { label: 'Digital Media', sub: 'Reach & leads',   pos: new THREE.Vector3(-2.0, 0,  1.35), accent: 0xffb84d, style: 'servers'  },
//     ]

//     const hub: NodeDef = { label: 'ARMEDIA', sub: 'Growth system', pos: CENTER, accent: 0xc8ff00, style: 'hub' }
//     buildPlatform(group, hub)

//     nodes.forEach(node => {
//       buildPlatform(group, node)
//       // main pipe from center
//       group.add(makePipe(
//         new THREE.Vector3(0, 0.36, 0),
//         new THREE.Vector3(node.pos.x * 0.82, 0.36, node.pos.z * 0.82),
//         node.accent, 0.042
//       ))
//       // glow pulse along pipe — add a thin bright core
//       group.add(makePipe(
//         new THREE.Vector3(0, 0.39, 0),
//         new THREE.Vector3(node.pos.x * 0.82, 0.39, node.pos.z * 0.82),
//         node.accent, 0.012
//       ))
//     })

//     // outer border pipes
//     for (let i = 0; i < nodes.length; i++) {
//       const a = nodes[i], b = nodes[(i + 1) % nodes.length]
//       group.add(makePipe(
//         new THREE.Vector3(a.pos.x, 0.34, a.pos.z),
//         new THREE.Vector3(b.pos.x, 0.34, b.pos.z),
//         0x1a4a35, 0.028
//       ))
//     }

//     // ── particles ──
//     const pGeo = new THREE.BufferGeometry()
//     const pPos = new Float32Array(120 * 3)
//     for (let i = 0; i < 120; i++) {
//       pPos[i * 3]     = (Math.random() - 0.5) * 8.5
//       pPos[i * 3 + 1] = 0.5 + Math.random() * 2.8
//       pPos[i * 3 + 2] = (Math.random() - 0.5) * 5.5
//     }
//     pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
//     const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
//       color: 0x88ff44, size: 0.03, transparent: true, opacity: 0.55,
//     }))
//     group.add(particles)

//     // floating data particles (cyan)
//     const pGeo2 = new THREE.BufferGeometry()
//     const pPos2 = new Float32Array(60 * 3)
//     for (let i = 0; i < 60; i++) {
//       pPos2[i * 3]     = (Math.random() - 0.5) * 5
//       pPos2[i * 3 + 1] = 0.4 + Math.random() * 1.5
//       pPos2[i * 3 + 2] = (Math.random() - 0.5) * 4
//     }
//     pGeo2.setAttribute('position', new THREE.BufferAttribute(pPos2, 3))
//     const particles2 = new THREE.Points(pGeo2, new THREE.PointsMaterial({
//       color: 0x00d4ff, size: 0.025, transparent: true, opacity: 0.45,
//     }))
//     group.add(particles2)

//     // ── resize ──
//     const resize = () => {
//       const w = Math.max(320, mount.clientWidth)
//       const h = Math.max(320, mount.clientHeight)
//       renderer.setSize(w, h, false)
//       camera.aspect = w / h
//       camera.updateProjectionMatrix()
//     }
//     const ro = new ResizeObserver(resize)
//     ro.observe(mount)
//     resize()

//     // ── animate ──
//     let t = 0, raf = 0
//     const crystal = group.children.find(
//       c => c instanceof THREE.Mesh && (c as THREE.Mesh).geometry instanceof THREE.OctahedronGeometry
//     ) as THREE.Mesh | undefined

//     const animate = () => {
//       t += 0.009
//       group.rotation.y = -0.3 + Math.sin(t * 0.7) * 0.04
//       group.position.y = Math.sin(t * 1.1) * 0.04

//       particles.rotation.y  += 0.0015
//       particles2.rotation.y -= 0.002

//       centerGlow.intensity = 20 + Math.sin(t * 2.8) * 3
//       if (crystal) crystal.rotation.y = t * 1.4

//       raf = requestAnimationFrame(animate)
//       renderer.render(scene, camera)
//     }
//     animate()

//     return () => {
//       cancelAnimationFrame(raf)
//       ro.disconnect()
//       renderer.dispose()
//       scene.traverse(obj => {
//         if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry?.dispose()
//         const mat = (obj as THREE.Mesh).material
//         if (Array.isArray(mat)) mat.forEach(m => m.dispose())
//         else if (mat instanceof THREE.Material) mat.dispose()
//       })
//       mount.removeChild(renderer.domElement)
//     }
//   }, [])

//   return <div className="hero-3d-scene" ref={mountRef} aria-hidden="true" />
// }











'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── Component Helpers ──────────────────────────────────────────────────────

function makeLabel(text: string, accent = '#c8ff00', sub = '') {
  const W = 512, H = sub ? 160 : 128
  const canvas = document.createElement('canvas')
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, W, H)

  // Pill frame
  ctx.fillStyle = 'rgba(5, 16, 13, 0.95)'
  ctx.strokeStyle = accent
  ctx.lineWidth = 3
  ctx.roundRect(20, 20, W - 40, H - 40, 16)
  ctx.fill(); ctx.stroke()

  // Status dot
  ctx.fillStyle = accent
  ctx.beginPath(); ctx.arc(50, H / 2, 8, 0, Math.PI * 2); ctx.fill()

  // Primary heading text
  ctx.font = '700 32px Arial'
  ctx.fillStyle = '#f2fff0'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, W / 2, sub ? H / 2 - 18 : H / 2)

  if (sub) {
    ctx.font = '400 22px Arial'
    ctx.fillStyle = accent
    ctx.fillText(sub, W / 2, H / 2 + 20)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }))
  sp.scale.set(2.1, sub ? 0.65 : 0.52, 1)
  return sp
}

function makePipe(from: THREE.Vector3, to: THREE.Vector3, color: number, r = 0.04) {
  const dir = new THREE.Vector3().subVectors(to, from)
  const len = dir.length()
  const geo = new THREE.CylinderGeometry(r, r, len, 16)
  const mat = new THREE.MeshStandardMaterial({
    color, emissive: color, emissiveIntensity: 1.4, metalness: 0.1, roughness: 0.1
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.copy(from).add(to).multiplyScalar(0.5)
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
  return mesh
}

function makeGlowRing(r: number, color: number, y: number, group: THREE.Group) {
  const pts: THREE.Vector3[] = []
  for (let i = 0; i <= 64; i++) {
    const a = (i / 64) * Math.PI * 2
    pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r))
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts)
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.75 })
  group.add(new THREE.Line(geo, mat))
}

// ─── Platform Builders ───────────────────────────────────────────────────────

type NodeDef = {
  label: string; sub?: string
  pos: THREE.Vector3
  accent: number
  style: 'servers' | 'screens' | 'antenna' | 'hub'
}

const baseMat = () => new THREE.MeshStandardMaterial({ color: 0x070f0d, metalness: 0.9, roughness: 0.35 })
const deckMat = () => new THREE.MeshStandardMaterial({ color: 0x10211c, metalness: 0.8, roughness: 0.28 })

function buildPlatform(g: THREE.Group, node: NodeDef) {
  const { pos, accent } = node

  // Main dark concrete foundation slab
  const base = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.24, 1.7), baseMat())
  base.position.set(pos.x, pos.y + 0.12, pos.z)
  g.add(base)

  // Raised inner hardware deck
  const mid = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.15, 1.3), deckMat())
  mid.position.set(pos.x, pos.y + 0.31, pos.z)
  g.add(mid)

  // Bright integrated ambient edge strip
  const borderMat = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.0 })
  const border = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.03, 1.05), borderMat)
  border.position.set(pos.x, pos.y + 0.4, pos.z)
  g.add(border)

  // Floating HTML canvas UI label sprite
  const label = makeLabel(node.label, `#${accent.toString(16).padStart(6, '0')}`, node.sub)
  label.position.set(pos.x, pos.y + 1.75, pos.z + 0.05)
  g.add(label)

  const hY = pos.y + 0.42

  if (node.style === 'servers') {
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 3; c++) {
        const rack = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.6, 0.26), baseMat())
        rack.position.set(pos.x - 0.42 + c * 0.42, hY + 0.3, pos.z - 0.2 + r * 0.4)
        g.add(rack)
        
        const lineLED = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.02), new THREE.MeshStandardMaterial({
          color: accent, emissive: accent, emissiveIntensity: 3.0
        }))
        lineLED.position.set(pos.x - 0.42 + c * 0.42, hY + 0.48, pos.z - 0.2 + r * 0.4 + 0.13)
        g.add(lineLED)
      }
    }
  }

  if (node.style === 'screens') {
    for (let i = 0; i < 3; i++) {
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 8), deckMat())
      stand.position.set(pos.x - 0.4 + i * 0.4, hY + 0.2, pos.z)
      g.add(stand)
      const monitor = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.26, 0.02), new THREE.MeshStandardMaterial({
        color: accent, emissive: accent, emissiveIntensity: 1.5
      }))
      monitor.position.set(pos.x - 0.4 + i * 0.4, hY + 0.5, pos.z + 0.02)
      g.add(monitor)
    }
  }

  if (node.style === 'antenna') {
    for (let i = 0; i < 3; i++) {
      const h = 0.55 + i * 0.12
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.035, h, 8), deckMat())
      mast.position.set(pos.x - 0.38 + i * 0.38, hY + h / 2, pos.z)
      g.add(mast)
      
      const beamNode = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshStandardMaterial({
        color: accent, emissive: accent, emissiveIntensity: 4.0
      }))
      beamNode.position.set(pos.x - 0.38 + i * 0.38, hY + h + 0.05, pos.z)
      g.add(beamNode)
    }
  }

  if (node.style === 'hub') {
    const monolith = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.55, 0.55), new THREE.MeshStandardMaterial({
      color: accent, emissive: accent, emissiveIntensity: 0.8
    }))
    monolith.position.set(pos.x, hY + 0.27, pos.z)
    g.add(monolith)
    
    const floatCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), new THREE.MeshStandardMaterial({
      color: accent, emissive: accent, emissiveIntensity: 3.5, metalness: 0.1
    }))
    floatCore.position.set(pos.x, hY + 0.85, pos.z)
    g.add(floatCore)
    
    makeGlowRing(0.55, accent, hY + 0.6, g)
  }
}

// ─── Main Canvas Render Implementation ───────────────────────────────────────

export default function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()

    // Fixed camera settings for the wide-angle overhead isometric composition
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(7.5, 6.8, 9.2)
    camera.lookAt(0, 0.15, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    group.rotation.y = -0.22
    scene.add(group)

    // ── Global Scene Lighting ──
    scene.add(new THREE.AmbientLight(0x55ffaa, 0.65))

    const directionalKey = new THREE.DirectionalLight(0xffffff, 3.0)
    directionalKey.position.set(8, 12, 7)
    scene.add(directionalKey)

    const backRimGlow = new THREE.DirectionalLight(0x00ffcc, 1.5)
    backRimGlow.position.set(-8, 5, -5)
    scene.add(backRimGlow)

    const centralOmniGlow = new THREE.PointLight(0x88ff00, 35, 14)
    centralOmniGlow.position.set(0, 2.2, 0)
    scene.add(centralOmniGlow)

    // ── Grid & Foundation Floor ──
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x040a08, metalness: 0.95, roughness: 0.42 })
    const structureBase = new THREE.Mesh(new THREE.BoxGeometry(14.0, 0.06, 11.0), floorMat)
    structureBase.position.y = -0.03
    group.add(structureBase)

    const darkGrid = new THREE.GridHelper(15, 22, 0x1a4a35, 0x0c2419)
    darkGrid.position.y = 0.03
    group.add(darkGrid)

    // ── Nodes System Coordinates (Spaced out dynamically to prevent overlap) ──
    const nodes: NodeDef[] = [
      { label: 'AI Studio',     sub: 'ML workflows',    pos: new THREE.Vector3(-4.0, 0, -2.8), accent: 0xc8ff00, style: 'servers'  },
      { label: 'OOH + Offline', sub: 'Brand recall',    pos: new THREE.Vector3( 4.0, 0, -2.8), accent: 0x47ffa8, style: 'screens'  },
      { label: 'BI Dashboards', sub: 'Live analytics',  pos: new THREE.Vector3( 3.8, 0,  2.9), accent: 0x00d4ff, style: 'antenna'  },
      { label: 'Digital Media', sub: 'Reach & leads',   pos: new THREE.Vector3(-3.8, 0,  2.9), accent: 0xffb84d, style: 'servers'  },
    ]

    const centralHub: NodeDef = { label: 'ARMEDIA', sub: 'Growth system', pos: new THREE.Vector3(0, 0, 0), accent: 0xc8ff00, style: 'hub' }
    buildPlatform(group, centralHub)

    nodes.forEach(node => {
      buildPlatform(group, node)
      
      // Outer pipeline casing
      group.add(makePipe(
        new THREE.Vector3(0, 0.38, 0),
        new THREE.Vector3(node.pos.x * 0.88, 0.38, node.pos.z * 0.88),
        node.accent, 0.048
      ))
      // High intensity pure-white central electric core beam
      group.add(makePipe(
        new THREE.Vector3(0, 0.41, 0),
        new THREE.Vector3(node.pos.x * 0.88, 0.41, node.pos.z * 0.88),
        0xffffff, 0.014
      ))
    })

    // Sub-peripheral structures link line connecting outer nodes
    for (let i = 0; i < nodes.length; i++) {
      const current = nodes[i]
      const next = nodes[(i + 1) % nodes.length]
      group.add(makePipe(
        new THREE.Vector3(current.pos.x, 0.35, current.pos.z),
        new THREE.Vector3(next.pos.x, 0.35, next.pos.z),
        0x0c261b, 0.024
      ))
    }

    // ── Floating Light Particles ──
    const dustGeometry = new THREE.BufferGeometry()
    const dustCount = 160
    const coordinates = new Float32Array(dustCount * 3)
    for (let i = 0; i < dustCount * 3; i += 3) {
      coordinates[i]     = (Math.random() - 0.5) * 13
      coordinates[i + 1] = 0.2 + Math.random() * 3.8
      coordinates[i + 2] = (Math.random() - 0.5) * 10
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(coordinates, 3))
    const dustParticles = new THREE.Points(dustGeometry, new THREE.PointsMaterial({
      color: 0x99ff55, size: 0.038, transparent: true, opacity: 0.65
    }))
    group.add(dustParticles)

    // ── Reactive Window Dimension Resizer ──
    const handleResize = () => {
      const width = Math.max(320, mount.clientWidth)
      const height = Math.max(320, mount.clientHeight)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(handleResize)
    observer.observe(mount)
    handleResize()

    // ── Animation Loop ──
    let elapsed = 0, animationFrameId = 0
    const centerCrystal = group.children.find(
      obj => obj instanceof THREE.Mesh && (obj.geometry instanceof THREE.OctahedronGeometry)
    ) as THREE.Mesh | undefined

    const renderLoop = () => {
      elapsed += 0.0075
      group.rotation.y = -0.22 + Math.sin(elapsed * 0.4) * 0.025
      group.position.y = Math.sin(elapsed * 0.7) * 0.025

      dustParticles.rotation.y += 0.0008
      centralOmniGlow.intensity = 30 + Math.sin(elapsed * 2.5) * 4
      
      if (centerCrystal) {
        centerCrystal.rotation.y = elapsed * 1.1
      }

      animationFrameId = requestAnimationFrame(renderLoop)
      renderer.render(scene, camera)
    }
    renderLoop()

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      renderer.dispose()
      scene.traverse(obj => {
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose()
        const targetMaterial = (obj as THREE.Mesh).material
        if (Array.isArray(targetMaterial)) {
          targetMaterial.forEach(m => m.dispose())
        } else if (targetMaterial instanceof THREE.Material) {
          targetMaterial.dispose()
        }
      })
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero-3d-scene" ref={mountRef} aria-hidden="true" />
}