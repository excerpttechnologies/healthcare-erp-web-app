// 'use client'

// import Link from 'next/link'
// import { ArrowRight, Stethoscope, Activity, Users } from 'lucide-react'

// export function HeroSection() {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
//       {/* Background Image Overlay */}
//       <div className="absolute inset-0 opacity-10">
//         <img 
//           src="/images/hospital-hero.jpg" 
//           alt="Hospital background"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-200">
//               <Activity className="w-4 h-4 text-blue-600" />
//               <span className="text-sm font-medium text-blue-600">Trusted by 500+ Healthcare Facilities</span>
//             </div>

//             <div className="space-y-4">
//               <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-balance">
//                 Healthcare Excellence, Simplified
//               </h1>
//               <p className="text-xl text-gray-600 text-balance">
//                 Streamline hospital operations, enhance patient care, and empower your medical team with our comprehensive ERP solution designed specifically for modern healthcare facilities.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <Link 
//                 href="/dashboard"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Access Dashboard
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//               <button className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors">
//                 Learn More
//               </button>
//             </div>

//             {/* Features Row */}
//             <div className="grid grid-cols-3 gap-4 pt-8">
//               {[
//                 { icon: Stethoscope, label: 'Patient Care', value: '99.9% Uptime' },
//                 { icon: Users, label: 'Team Collab', value: '500+ Users' },
//                 { icon: Activity, label: 'Real-time', value: 'Live Monitoring' }
//               ].map((feature) => (
//                 <div key={feature.label} className="text-center">
//                   <feature.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
//                   <p className="text-xs text-gray-600">{feature.label}</p>
//                   <p className="text-sm font-semibold text-gray-900">{feature.value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative h-full min-h-96">
//             <img 
//               src="/images/patient-care.jpg" 
//               alt="Patient care"
//               className="w-full h-full object-cover rounded-2xl shadow-2xl"
//             />
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }










'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowRight, Stethoscope, Activity, Users, ChevronLeft, ChevronRight, Heart, Brain, Shield, BarChart3, Clock, CheckCircle } from 'lucide-react'

const slides = [
  {
    id: 1,
    badge: 'Intelligent Patient Management',
    headline: ['Transform', 'Patient Care', 'Instantly'],
    sub: 'From admission to discharge — orchestrate every touchpoint with precision. Real-time vitals, smart triage, and automated workflows that let clinicians focus on healing.',
    stat1: { val: '99.9%', label: 'Uptime SLA' },
    stat2: { val: '4.2s', label: 'Avg. Record Access' },
    stat3: { val: '340%', label: 'ROI in Year 1' },
    accent: '#00C6AE',
    accentLight: 'rgba(0,198,174,0.12)',
    icon: Heart,
    pills: ['Smart Triage', 'e-Prescriptions', 'Bed Management'],
    visual: 'patient',
  },
  {
    id: 2,
    badge: 'Clinical Intelligence Suite',
    headline: ['Data-Driven', 'Clinical', 'Decisions'],
    sub: 'AI-powered diagnostics support, predictive analytics, and population health dashboards give your team the insights to intervene before crises occur.',
    stat1: { val: '12M+', label: 'Records Processed' },
    stat2: { val: '94%', label: 'Diagnostic Accuracy' },
    stat3: { val: '500+', label: 'Integrations' },
    accent: '#4F8EF7',
    accentLight: 'rgba(79,142,247,0.12)',
    icon: Brain,
    pills: ['AI Diagnostics', 'Predictive Alerts', 'Lab Analytics'],
    visual: 'clinical',
  },
  {
    id: 3,
    badge: 'Compliance & Security',
    headline: ['HIPAA-Grade', 'Security,', 'Always On'],
    sub: 'End-to-end encryption, role-based access, complete audit trails, and automated compliance reporting — built to meet the strictest regulatory demands worldwide.',
    stat1: { val: '256-bit', label: 'AES Encryption' },
    stat2: { val: '100%', label: 'HIPAA Compliant' },
    stat3: { val: '0', label: 'Breaches to Date' },
    accent: '#A855F7',
    accentLight: 'rgba(168,85,247,0.12)',
    icon: Shield,
    pills: ['HIPAA Ready', 'Audit Trails', 'SSO + MFA'],
    visual: 'security',
  },
  {
    id: 4,
    badge: 'Operations & Revenue Cycle',
    headline: ['Maximize', 'Revenue,', 'Minimize Waste'],
    sub: 'Automated billing, claims management, inventory optimization, and staffing analytics converge into one unified operations command center.',
    stat1: { val: '28%', label: 'Cost Reduction' },
    stat2: { val: '3x', label: 'Faster Claims' },
    stat3: { val: '$2.4M', label: 'Avg. Annual Savings' },
    accent: '#F59E0B',
    accentLight: 'rgba(245,158,11,0.12)',
    icon: BarChart3,
    pills: ['Auto Billing', 'Claims AI', 'Inventory Sync'],
    visual: 'ops',
  },
]

// SVG Visual Components
function PatientVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="380" height="300" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Patient card */}
      <rect x="40" y="40" width="160" height="100" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <circle cx="70" cy="68" r="16" fill={accent} fillOpacity="0.3"/>
      <circle cx="70" cy="68" r="8" fill={accent}/>
      <rect x="94" y="58" width="80" height="6" rx="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="94" y="70" width="55" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
      <rect x="48" y="96" width="140" height="1" fill="rgba(255,255,255,0.06)"/>
      <rect x="48" y="108" width="60" height="5" rx="2.5" fill={accent} fillOpacity="0.6"/>
      <rect x="118" y="108" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.15)"/>
      {/* Vitals chart */}
      <rect x="220" y="40" width="180" height="100" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <text x="235" y="63" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">VITALS MONITOR</text>
      <polyline points="235,100 255,85 270,95 285,78 300,90 315,72 330,88 345,76 360,88 380,82" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="235" y="112" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.15)"/>
      <rect x="272" y="112" width="25" height="5" rx="2.5" fill={accent} fillOpacity="0.5"/>
      {/* Bed grid */}
      {[0,1,2].map(row => [0,1,2,3].map(col => (
        <rect key={`${row}-${col}`} x={40+col*50} y={160+row*46} width="42" height="38" rx="8"
          fill={row===0&&col===1 ? accent : "rgba(255,255,255,0.04)"}
          fillOpacity={row===0&&col===1 ? 0.2 : 1}
          stroke={row===0&&col===1 ? accent : "rgba(255,255,255,0.07)"}
          strokeWidth="1"/>
      )))}
      <text x="40" y="152" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">BED MANAGEMENT — WARD A</text>
      {/* Status dots */}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={55+i*50} cy={180} r="4"
          fill={i===1 ? accent : i===3 ? "#ef4444" : "rgba(255,255,255,0.2)"}/>
      ))}
    </svg>
  )
}

function ClinicalVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="380" height="300" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Brain scan outline */}
      <ellipse cx="210" cy="130" rx="80" ry="70" fill="rgba(255,255,255,0.03)" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3"/>
      <ellipse cx="210" cy="130" rx="55" ry="48" fill="rgba(255,255,255,0.03)" stroke={accent} strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.5"/>
      {/* Scan lines */}
      {[-30,-10,10,30].map(y => (
        <line key={y} x1="140" y1={130+y} x2="280" y2={130+y} stroke={accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      ))}
      {/* Hotspots */}
      <circle cx="185" cy="110" r="12" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5"/>
      <circle cx="185" cy="110" r="5" fill={accent}/>
      <circle cx="240" cy="145" r="8" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1"/>
      <circle cx="240" cy="145" r="3" fill={accent} fillOpacity="0.7"/>
      {/* Labels */}
      <line x1="197" y1="110" x2="230" y2="88" stroke={accent} strokeWidth="0.8" strokeOpacity="0.6"/>
      <rect x="228" y="78" width="70" height="20" rx="4" fill="rgba(255,255,255,0.06)" stroke={accent} strokeOpacity="0.3" strokeWidth="0.5"/>
      <rect x="235" y="84" width="40" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="235" y="91" width="28" height="3" rx="1.5" fill={accent} fillOpacity="0.6"/>
      {/* Stats row */}
      {[{l:'Confidence',v:'94%'},{l:'Scan Time',v:'1.2s'},{l:'Anomalies',v:'2'}].map((s,i) => (
        <g key={i}>
          <rect x={40+i*130} y={230} width="110" height="50" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <text x={95+i*130} y={252} fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle" fontFamily="monospace">{s.l.toUpperCase()}</text>
          <text x={95+i*130} y={270} fill={i===0?accent:"rgba(255,255,255,0.8)"} fontSize="16" textAnchor="middle" fontWeight="bold" fontFamily="monospace">{s.v}</text>
        </g>
      ))}
    </svg>
  )
}

function SecurityVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="380" height="300" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Shield */}
      <path d="M210 50 L270 80 L270 150 C270 190 240 220 210 230 C180 220 150 190 150 150 L150 80 Z" fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1.5"/>
      <path d="M210 70 L255 93 L255 150 C255 180 235 203 210 212 C185 203 165 180 165 150 L165 93 Z" fill={accent} fillOpacity="0.08" stroke={accent} strokeOpacity="0.4" strokeWidth="1"/>
      {/* Lock icon */}
      <rect x="197" y="145" width="26" height="20" rx="4" fill={accent} fillOpacity="0.5" stroke={accent} strokeWidth="1.5"/>
      <path d="M202 145 L202 137 C202 130 218 130 218 137 L218 145" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="210" cy="155" r="3" fill="white" fillOpacity="0.8"/>
      {/* Orbital rings */}
      <circle cx="210" cy="140" r="95" stroke={accent} strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="2 4"/>
      <circle cx="210" cy="140" r="120" stroke={accent} strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="1 5"/>
      {/* Checkmarks */}
      {[{x:40,y:260,t:'HIPAA'},{x:155,y:260,t:'SOC 2'},{x:270,y:260,t:'ISO 27001'}].map((b,i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width="90" height="36" rx="8" fill={accent} fillOpacity="0.1" stroke={accent} strokeOpacity="0.25" strokeWidth="0.8"/>
          <circle cx={b.x+14} cy={b.y+18} r="7" fill={accent} fillOpacity="0.3"/>
          <path d={`M${b.x+10} ${b.y+18} L${b.x+13} ${b.y+21} L${b.x+19} ${b.y+15}`} stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <text x={b.x+28} y={b.y+22} fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace">{b.t}</text>
        </g>
      ))}
    </svg>
  )
}

function OpsVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="20" width="380" height="300" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Bar chart */}
      <text x="40" y="52" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">REVENUE CYCLE — Q4 2024</text>
      {[{h:80,l:'Oct'},{h:110,l:'Nov'},{h:95,l:'Dec'},{h:145,l:'Jan'},{h:130,l:'Feb'},{h:160,l:'Mar'}].map((b,i) => (
        <g key={i}>
          <rect x={50+i*55} y={200-b.h} width="36" height={b.h} rx="6"
            fill={i===5?accent:i===3?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.07)"}
            fillOpacity={i===5?0.7:1}/>
          <text x={68+i*55} y="215" fill="rgba(255,255,255,0.3)" fontSize="8" textAnchor="middle" fontFamily="monospace">{b.l}</text>
        </g>
      ))}
      <line x1="40" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      {/* KPI cards */}
      {[{l:'Claims Processed',v:'8,342',c:accent},{l:'Avg. Reimbursement',v:'$2,180',c:"rgba(255,255,255,0.6)"},{l:'Denial Rate',v:'1.2%',c:"#22c55e"}].map((k,i) => (
        <g key={i}>
          <rect x={40+i*125} y={235} width="110" height="50" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <text x={95+i*125} y={253} fill="rgba(255,255,255,0.35)" fontSize="7" textAnchor="middle" fontFamily="monospace">{k.l.toUpperCase()}</text>
          <text x={95+i*125} y={272} fill={k.c} fontSize="15" textAnchor="middle" fontWeight="bold" fontFamily="monospace">{k.v}</text>
        </g>
      ))}
      {/* Trend line overlay */}
      <polyline points="68,120 123,90 178,105 233,55 288,70 343,40" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="3 2" strokeOpacity="0.5"/>
    </svg>
  )
}

function SlideVisual({ slide, isActive }: { slide: typeof slides[0]; isActive: boolean }) {
  const props = { accent: slide.accent }
  return (
    <div style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.6s ease', position: 'absolute', inset: 0 }}>
      {slide.visual === 'patient' && <PatientVisual {...props}/>}
      {slide.visual === 'clinical' && <ClinicalVisual {...props}/>}
      {slide.visual === 'security' && <SecurityVisual {...props}/>}
      {slide.visual === 'ops' && <OpsVisual {...props}/>}
    </div>
  )
}

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const DURATION = 5000

  const goTo = useCallback((idx: number) => {
    if (animating || idx === current) return
    setAnimating(true)
    setPrev(current)
    setCurrent(idx)
    setProgress(0)
    setTimeout(() => { setPrev(null); setAnimating(false) }, 700)
  }, [animating, current])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const goToPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    intervalRef.current = setInterval(next, DURATION)
    progressRef.current = setInterval(() => setProgress(p => Math.min(p + 100/50, 100)), DURATION/50)
    return () => {
      clearInterval(intervalRef.current!)
      clearInterval(progressRef.current!)
    }
  }, [next])

  useEffect(() => { setProgress(0) }, [current])

  const slide = slides[current]
  const prevSlide = prev !== null ? slides[prev] : null
  const SlideIcon = slide.icon

  return (
    <section style={{ fontFamily: "'DM Sans', 'Outfit', system-ui, sans-serif" }}
      className="relative min-h-screen bg-[#050c18] overflow-hidden flex flex-col">

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Outfit:wght@400;700;800;900&family=DM+Mono:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px var(--accent); opacity: 0.7; }
          50% { box-shadow: 0 0 45px var(--accent); opacity: 1; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        @keyframes orbitA {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes orbitB {
          from { transform: rotate(180deg) translateX(80px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(80px) rotate(-540deg); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-word { display: inline-block; overflow: hidden; }
        .hero-word-inner {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-word-inner:nth-child(1) { animation-delay: 0.05s; }
        .hero-word-inner:nth-child(2) { animation-delay: 0.12s; }
        .hero-word-inner:nth-child(3) { animation-delay: 0.19s; }
        .badge-anim { animation: fadeIn 0.5s ease 0.3s both; }
        .sub-anim { animation: fadeUp 0.6s ease 0.35s both; }
        .pills-anim { animation: fadeUp 0.6s ease 0.45s both; }
        .cta-anim { animation: fadeUp 0.6s ease 0.5s both; }
        .stats-anim { animation: fadeUp 0.6s ease 0.6s both; }
        .visual-anim { animation: slideInRight 0.8s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .nav-btn { transition: all 0.2s; }
        .nav-btn:hover { transform: scale(1.08); }
        .pill-tag {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 4px 12px;
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.02em;
        }
        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 600; font-size: 15px;
          transition: all 0.25s;
          position: relative; overflow: hidden;
        }
        .cta-primary::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-100%);
          transition: transform 0.3s;
        }
        .cta-primary:hover::before { transform: translateX(0); }
        .cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 500; font-size: 15px;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.04);
          transition: all 0.25s;
        }
        .cta-secondary:hover {
          background: rgba(255,255,255,0.08);
          color: white;
          border-color: rgba(255,255,255,0.2);
        }
        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 16px 20px;
          transition: all 0.3s;
        }
        .stat-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }
        .dot-indicator {
          transition: all 0.4s cubic-bezier(.22,1,.36,1);
        }
        .slide-nav-thumb {
          transition: all 0.3s;
          cursor: pointer;
        }
        .slide-nav-thumb:hover { opacity: 0.9 !important; }
        .progress-bar {
          transition: width 0.1s linear;
        }
      `}</style>

      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        animation: 'gridMove 8s linear infinite',
      }}/>

      {/* Radial glows */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', left: '60%',
        width: 700, height: 700,
        background: `radial-gradient(circle, ${slide.accent}22 0%, transparent 65%)`,
        transition: 'background 0.8s ease',
        transform: 'translateX(-50%)',
      }}/>
      <div className="absolute pointer-events-none" style={{
        bottom: '-20%', left: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 65%)',
      }}/>

      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${slide.accent}55, transparent)`,
          animation: 'scan 4s ease-in-out infinite',
          transition: 'background 0.6s ease',
        }}/>
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}88)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.6s ease',
          }}>
            <Stethoscope size={18} color="white"/>
          </div>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 18, color: 'white', letterSpacing: '-0.02em' }}>
            MediCore <span style={{ color: slide.accent, transition: 'color 0.6s' }}>ERP</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          {['Solutions', 'Modules', 'Pricing', 'About'].map(t => (
            <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
              {t}
            </a>
          ))}
          <a href="/dashboard" style={{
            background: slide.accent, color: 'white',
            padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
            transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            Get Demo <ArrowRight size={13}/>
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div key={current} className="space-y-7">
          {/* Badge */}
          <div className="badge-anim inline-flex items-center gap-2" style={{
            background: slide.accentLight,
            border: `1px solid ${slide.accent}44`,
            borderRadius: 999, padding: '6px 16px',
            transition: 'all 0.6s',
          }}>
            <SlideIcon size={13} style={{ color: slide.accent }}/>
            <span style={{ fontSize: 12, fontWeight: 600, color: slide.accent, fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>
              {slide.badge.toUpperCase()}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 1.0, letterSpacing: '-0.035em', color: 'white' }}>
            {slide.headline.map((word, i) => (
              <span key={i} className="hero-word" style={{ display: 'block' }}>
                <span className="hero-word-inner" style={{
                  display: 'block',
                  animationDelay: `${0.05 + i * 0.08}s`,
                  color: i === 1 ? slide.accent : 'white',
                  transition: 'color 0.6s',
                }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p className="sub-anim" style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: 500, fontWeight: 400 }}>
            {slide.sub}
          </p>

          {/* Pills */}
          <div className="pills-anim flex flex-wrap gap-2">
            {slide.pills.map(p => (
              <span key={p} className="pill-tag">
                <CheckCircle size={11} style={{ color: slide.accent }}/> {p}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="cta-anim flex flex-wrap gap-3">
            <Link href="/dashboard" className="cta-primary" style={{ background: slide.accent, color: 'white', transition: 'all 0.3s' }}>
              Access Dashboard <ArrowRight size={15}/>
            </Link>
            <button className="cta-secondary">
              <Clock size={14}/> Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="stats-anim grid grid-cols-3 gap-3">
            {[slide.stat1, slide.stat2, slide.stat3].map((s, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${0.6 + i * 0.08}s` }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 22, color: i === 0 ? slide.accent : 'white', letterSpacing: '-0.02em', transition: 'color 0.6s' }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2, fontFamily: 'DM Mono, monospace', letterSpacing: '0.02em' }}>
                  {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Visual */}
        <div className="visual-anim relative h-full min-h-[380px] lg:min-h-[480px]">
          {/* Glow behind visual */}
          <div style={{
            position: 'absolute', inset: -40,
            background: `radial-gradient(ellipse, ${slide.accent}18 0%, transparent 70%)`,
            transition: 'background 0.8s ease',
            pointerEvents: 'none',
          }}/>

          {/* Visual card */}
          <div style={{
            position: 'relative', width: '100%', height: '100%', minHeight: 420,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 24,
            overflow: 'hidden',
            backdropFilter: 'blur(4px)',
          }}>
            {/* Corner accent */}
            <div style={{
              position: 'absolute', top: 0, right: 0, width: 120, height: 120,
              background: `radial-gradient(circle at top right, ${slide.accent}20, transparent 60%)`,
              transition: 'background 0.6s',
              pointerEvents: 'none',
            }}/>

            {/* Slide visuals */}
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 420 }}>
              {slides.map((s, i) => (
                <SlideVisual key={s.id} slide={s} isActive={i === current}/>
              ))}
            </div>

            {/* Top bar overlay */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              padding: '14px 20px',
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(5,12,24,0.5)',
              backdropFilter: 'blur(8px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              {['#ef4444','#f59e0b','#22c55e'].map(c => (
                <div key={c} style={{ width: 8, height: 8, borderRadius: 999, background: c, opacity: 0.7 }}/>
              ))}
              <div style={{ flex: 1, textAlign: 'center', fontFamily: 'DM Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>
                medicore-erp.io — {slide.badge}
              </div>
            </div>

            {/* Live badge */}
            <div style={{
              position: 'absolute', top: 52, right: 16,
              background: 'rgba(5,12,24,0.8)',
              border: `1px solid ${slide.accent}44`,
              borderRadius: 999, padding: '4px 10px',
              display: 'flex', alignItems: 'center', gap: 5,
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: 999, background: slide.accent,
                animation: 'pulse-glow 1.5s ease infinite',
                '--accent': slide.accent,
              } as React.CSSProperties}/>
              <span style={{ fontSize: 10, fontFamily: 'DM Mono, monospace', color: slide.accent }}>LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM — Slider controls */}
      <div className="relative z-10 px-8 pb-10 max-w-[1400px] mx-auto w-full">
        <div className="flex items-end justify-between gap-8">

          {/* Slide thumbnails / nav */}
          <div className="flex gap-3 items-center">
            {slides.map((s, i) => {
              const Icon = s.icon
              const active = i === current
              return (
                <button key={s.id} className="slide-nav-thumb" onClick={() => goTo(i)}
                  style={{
                    background: active ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                    border: active ? `1px solid ${s.accent}55` : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: '10px 16px',
                    display: 'flex', alignItems: 'center', gap: 8,
                    opacity: active ? 1 : 0.45,
                    transform: active ? 'translateY(-2px)' : 'none',
                  }}>
                  <Icon size={13} style={{ color: active ? s.accent : 'rgba(255,255,255,0.5)', flexShrink: 0 }}/>
                  <span style={{ fontSize: 12, color: active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)', fontWeight: 500, whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif' }}>
                    {s.badge.split(' ')[0]}
                  </span>
                  {active && (
                    <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 99, overflow: 'hidden', marginLeft: 2 }}>
                      <div className="progress-bar" style={{ height: '100%', background: s.accent, width: `${progress}%`, borderRadius: 99 }}/>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Prev/Next */}
          <div className="flex items-center gap-2">
            <button onClick={goToPrev} className="nav-btn" style={{
              width: 40, height: 40, borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.5)',
            }}>
              <ChevronLeft size={18}/>
            </button>
            <button onClick={next} className="nav-btn" style={{
              width: 40, height: 40, borderRadius: 10,
              border: `1px solid ${slide.accent}55`,
              background: slide.accentLight,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: slide.accent,
              transition: 'all 0.3s',
            }}>
              <ChevronRight size={18}/>
            </button>
            <span style={{ fontSize: 12, fontFamily: 'DM Mono, monospace', color: 'rgba(255,255,255,0.25)', marginLeft: 6 }}>
              0{current+1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* Trusted by bar */}
      <div className="relative z-10 border-t border-white/5 py-4 px-8">
        <div className="max-w-[1400px] mx-auto flex items-center gap-8">
          <span style={{ fontSize: 11, fontFamily: 'DM Mono, monospace', color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>
            TRUSTED BY
          </span>
          {['Apollo Hospitals', 'Manipal Health', 'Fortis', 'Max Healthcare', 'AIIMS', 'Narayana Health'].map(name => (
            <span key={name} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.18)', fontFamily: 'Outfit, sans-serif', whiteSpace: 'nowrap' }}>
              {name}
            </span>
          ))}
          <div style={{ flex: 1 }}/>
          <div className="flex items-center gap-2">
            <Users size={12} style={{ color: 'rgba(255,255,255,0.25)' }}/>
            <span style={{ fontSize: 11, fontFamily: 'DM Mono, monospace', color: 'rgba(255,255,255,0.25)' }}>500+ facilities worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}