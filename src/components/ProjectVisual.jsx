import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Play, Pause, SkipForward, Volume2, Sparkles, Send, Sun, MapPin, Navigation, Compass, AlertTriangle, Eye, Layers } from 'lucide-react';

export default function ProjectVisual({ visualType }) {
  switch (visualType) {

    // 1. CrowdSense AI Computer Vision Dashboard Visual
    case 'cv_dashboard':
      return (
        <div className="w-full h-full min-h-[300px] bg-[#0A0E17] border border-accent/30 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden font-mono select-none">
          {/* Top Camera Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs text-white font-bold">CAM-01 • MAIN PLAZA</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              <Eye className="w-3 h-3" />
              <span>YOLO v8 ACTIVE</span>
            </div>
          </div>

          {/* Video Feed Simulation with Bounding Boxes */}
          <div className="relative my-4 flex-1 rounded-xl bg-slate-900/80 border border-white/5 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            
            {/* Bounding Box 1 */}
            <motion.div
              animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 left-12 w-20 h-28 border-2 border-emerald-400 bg-emerald-500/10 rounded flex flex-col justify-between p-1"
            >
              <span className="text-[9px] text-emerald-300 font-bold bg-emerald-950/80 px-1 rounded w-max">PERSON 98%</span>
              <span className="text-[8px] text-emerald-400 self-end">#024</span>
            </motion.div>

            {/* Bounding Box 2 (Risk Highlight) */}
            <motion.div
              animate={{ x: [0, -10, 0], y: [0, 12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 right-16 w-24 h-32 border-2 border-rose-500 bg-rose-500/15 rounded flex flex-col justify-between p-1 shadow-[0_0_15px_rgba(244,63,94,0.3)]"
            >
              <span className="text-[9px] text-rose-300 font-bold bg-rose-950/80 px-1 rounded w-max flex items-center gap-1">
                <AlertTriangle className="w-2.5 h-2.5" /> DENSITY WARN
              </span>
              <span className="text-[8px] text-rose-400 self-end">#089</span>
            </motion.div>

            <div className="text-center text-slate-500 text-xs z-10 font-mono">
              [ REAL-TIME COMPUTER VISION INFERENCE STREAM ]
            </div>
          </div>

          {/* Bottom Telemetry Gauges */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 rounded bg-slate-900 border border-white/10">
              <span className="text-slate-400 block">CROWD COUNT</span>
              <span className="text-white font-bold text-sm">142 PPL</span>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-white/10">
              <span className="text-slate-400 block">DENSITY MAP</span>
              <span className="text-emerald-400 font-bold text-sm">MODERATE</span>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-rose-500/40 bg-rose-950/20">
              <span className="text-rose-400 block">RISK LEVEL</span>
              <span className="text-rose-400 font-bold text-sm flex items-center justify-center gap-1">
                <ShieldAlert className="w-3 h-3" /> LOW
              </span>
            </div>
          </div>
        </div>
      );

    // 2. Spotify Clone Player Visual
    case 'spotify_player':
      return (
        <div className="w-full h-full min-h-[300px] bg-[#121212] border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden font-sans text-white select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold tracking-wider">SPOTIFY CLONE • MOOD PLAYER</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">GSAP MOTION</span>
          </div>

          {/* Music Track Body */}
          <div className="flex items-center gap-4 my-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-2xl font-bold shadow-lg shadow-emerald-900/40">
              🎵
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-white truncate">Midnight Coding Session</h4>
              <p className="text-xs text-slate-400 truncate">Prithvi Ahuja • Lo-Fi Beats</p>
              
              {/* Dynamic Waveform Bars */}
              <div className="flex items-end gap-1 h-6 mt-3">
                {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 35].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['20%', `${h}%`, '30%'] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                    className="w-1 bg-emerald-500 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>02:14</span>
              <div className="flex-1 mx-3 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/5 h-full bg-emerald-500 rounded-full" />
              </div>
              <span>03:45</span>
            </div>
            <div className="flex items-center justify-center gap-6 pt-1">
              <SkipForward className="w-4 h-4 text-slate-400 rotate-180 cursor-pointer hover:text-white" />
              <button className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center hover:scale-105 transition-transform">
                <Pause className="w-4 h-4 fill-current" />
              </button>
              <SkipForward className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" />
              <Volume2 className="w-4 h-4 text-slate-400 ml-auto" />
            </div>
          </div>
        </div>
      );

    // 3. HealthBot Visual
    case 'health_bot':
      return (
        <div className="w-full h-full min-h-[300px] bg-[#0F172A] border border-indigo-500/30 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden font-sans text-slate-200 select-none">
          {/* Bot Header */}
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-400/40 text-indigo-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">HealthBot AI</span>
                <span className="text-[9px] font-mono text-indigo-400">Gemini 1.5 Pro</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">ONLINE</span>
          </div>

          {/* Chat Messages */}
          <div className="flex flex-col gap-3 my-3 text-xs">
            <div className="self-end bg-indigo-600 text-white rounded-2xl rounded-tr-none px-3.5 py-2 max-w-[80%] shadow">
              What are preventive wellness habits for computer fatigue?
            </div>
            <div className="self-start bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-3.5 py-2 max-w-[85%] text-slate-300">
              <span className="text-indigo-400 font-bold block mb-1">AI Health Guidance:</span>
              1. 20-20-20 Rule for eye strain.<br />
              2. Ergonomic wrist alignment.<br />
              3. Hydration check every 60 mins.
            </div>
          </div>

          {/* Input Box Simulation */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-2 flex items-center justify-between text-xs text-slate-400">
            <span>Ask HealthBot medical guidance...</span>
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      );

    // 4. AI Resume Builder Visual
    case 'resume_builder':
      return (
        <div className="w-full h-full min-h-[300px] bg-[#141B2D] border border-cyan-500/30 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden font-sans text-slate-200 select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white">AI RESUME EDITOR</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">FIGMA PROTOTYPE</span>
          </div>

          {/* Dual Pane Editor Mockup */}
          <div className="grid grid-cols-2 gap-3 my-3 flex-1">
            {/* Left Controls */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex flex-col justify-between text-[10px]">
              <div>
                <span className="text-slate-400 font-mono uppercase block mb-1">AI Enhancers</span>
                <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 p-2 rounded mb-2">
                  ✨ Bullet Point Optimizer Active
                </div>
                <div className="space-y-1.5 text-slate-400">
                  <div className="h-1.5 bg-slate-700 rounded w-full" />
                  <div className="h-1.5 bg-slate-700 rounded w-4/5" />
                </div>
              </div>
              <button className="w-full py-1.5 bg-cyan-600 text-white rounded font-mono text-[9px] font-bold">
                GENERATE ATS BULLETS
              </button>
            </div>

            {/* Right Document Preview */}
            <div className="bg-white text-slate-900 rounded-xl p-3 shadow-lg flex flex-col justify-between text-[8px]">
              <div>
                <div className="font-bold text-[10px] text-slate-900">PRITHVI AHUJA</div>
                <div className="text-[7px] text-slate-500 mb-2">Computer Science Student</div>
                <div className="space-y-1">
                  <div className="h-1 bg-slate-300 rounded w-full" />
                  <div className="h-1 bg-slate-300 rounded w-5/6" />
                  <div className="h-1 bg-slate-300 rounded w-4/6" />
                </div>
              </div>
              <div className="text-[7px] font-mono text-cyan-700 font-bold">100% ATS SCORE</div>
            </div>
          </div>
        </div>
      );

    // 5. Weather Forecast Visual
    case 'weather_app':
      return (
        <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-slate-900 to-indigo-950 border border-blue-500/30 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden text-white select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold">NAGPUR, INDIA</span>
            </div>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">REST API</span>
          </div>

          {/* Weather Stats */}
          <div className="flex items-center justify-between my-2">
            <div>
              <div className="text-4xl font-bold tracking-tight font-display">28°C</div>
              <div className="text-xs text-blue-300 font-mono mt-1">Partly Cloudy • Humidity 45%</div>
            </div>
            <Sun className="w-12 h-12 text-amber-400 animate-spin-slow" />
          </div>

          {/* Temperature Trend Bar */}
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="text-[10px] font-mono text-slate-400 mb-2">HOURLY FORECAST</div>
            <div className="flex items-center justify-between text-center text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[9px]">14:00</span>
                <span className="font-bold">28°</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px]">16:00</span>
                <span className="font-bold">27°</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px]">18:00</span>
                <span className="font-bold">25°</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px]">20:00</span>
                <span className="font-bold">23°</span>
              </div>
            </div>
          </div>
        </div>
      );

   // 6. Incredible India Travel Visual
case 'travel':
  return (
    <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden relative bg-[#0B1220] border border-orange-400/30 select-none">

      {/* Real India travel image */}
      <img
        src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=90"
        alt="India travel destination"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#07101f]/45 to-transparent" />

      {/* Moving atmospheric glow */}
      <motion.div
        animate={{
          x: [-30, 40, -30],
          y: [20, -20, 20],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-orange-400/30 blur-3xl"
      />

      {/* Top navigation-style HUD */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 border border-white/20 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-orange-300" />

          <span className="text-[10px] font-mono font-bold tracking-wider text-white">
            INDIA
          </span>
        </div>

        <div className="px-2.5 py-1 rounded bg-black/35 border border-white/15 backdrop-blur-md">
          <span className="text-[9px] font-mono text-orange-300">
            TRAVEL DISCOVERY
          </span>
        </div>

      </div>

      {/* Floating destination marker */}
      <motion.div
        animate={{
          y: [0, -8, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[42%] left-[48%]"
      >
        <div className="relative">

          <div className="absolute inset-0 w-8 h-8 rounded-full bg-orange-400/30 animate-ping" />

          <div className="relative w-8 h-8 rounded-full bg-orange-500/90 border-2 border-white/80 flex items-center justify-center shadow-[0_0_25px_rgba(251,146,60,0.7)]">
            <MapPin className="w-4 h-4 text-white fill-white" />
          </div>

        </div>
      </motion.div>

      {/* Bottom destination information */}
      <div className="absolute bottom-0 left-0 right-0 p-5">

        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-px bg-orange-400" />

          <span className="text-[9px] font-mono tracking-[0.2em] text-orange-300">
            INCREDIBLE INDIA
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight">
          Explore India
        </h3>

        <p className="text-xs text-white/70 mt-1 max-w-[280px]">
          Discover destinations, culture, heritage and unforgettable experiences.
        </p>

        {/* Bottom stats */}
        <div className="flex items-center gap-2 mt-4">

          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/35 border border-white/15 backdrop-blur-md">
            <Compass className="w-3 h-3 text-orange-300" />
            <span className="text-[9px] font-mono text-white/80">
              DESTINATIONS
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/35 border border-white/15 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-orange-300" />
            <span className="text-[9px] font-mono text-white/80">
              EXPERIENCES
            </span>
          </div>

        </div>

      </div>

      {/* Subtle animated scan line */}
      <motion.div
        animate={{ y: ["-100%", "500%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-0 right-0 h-px bg-orange-300/20 pointer-events-none"
      />

    </div>
  );

    default:
      return null;
  }
}
