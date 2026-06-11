// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - PrismRelay Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, CircleDot, Clock, Coins, Heart, Layers, Pause, Play, Power, RefreshCw, Server, Shapes, Timer, Trophy } from "lucide-react";


export type GameplayPrismrelayCanaryActionId = "scoreboard-1" | "start-1" | "pause-2" | "restart-3" | "level-4" | "score-5" | "lives-6" | "timer-7";

export interface GameplayPrismrelayCanaryProps {
  actions?: Partial<Record<GameplayPrismrelayCanaryActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayPrismrelayCanary({ actions, runtime }: GameplayPrismrelayCanaryProps) {
  void runtime;
  return (
    <>
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>
      {/* SideNavBar (Web - Left) */}
      <nav className="hidden md:flex flex-col items-center py-panel-padding bg-surface-container-low/60 backdrop-blur-xl docked left-0 h-screen rounded-r-xl border-r border-primary/20 shadow-[0_0_15px_rgba(0,219,231,0.2)] fixed left-0 top-0 w-20 z-40">
      {/* Header / Identity */}
      <div className="mb-12 flex flex-col items-center">
      <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center border border-outline-variant/30 mb-2 neon-border">
      <Server className="text-primary-container" aria-hidden={true} focusable="false" />
      </div>
      <div className="text-[10px] font-mono-label text-primary-fixed-dim text-center leading-tight">
                      OPERATOR_01<br />
      <span className="text-outline/70">SIGNAL_STABLE</span>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-6 w-full px-2">
      <a className="flex flex-col items-center justify-center bg-primary-container/20 text-primary-container border-l-2 border-primary-container p-unit group hover:bg-primary/10 hover:text-primary-fixed-dim translate-x-1 transition-colors duration-200" href="#" data-action-id="start-1" onClick={(event) => { event.preventDefault(); actions?.["start-1"]?.(); }}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-mono-label">START</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline p-unit group hover:bg-primary/10 hover:text-primary-fixed-dim transition-colors" href="#" data-action-id="pause-2" onClick={(event) => { event.preventDefault(); actions?.["pause-2"]?.(); }}>
      <Pause className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-mono-label">PAUSE</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline p-unit group hover:bg-primary/10 hover:text-primary-fixed-dim transition-colors" href="#" data-action-id="restart-3" onClick={(event) => { event.preventDefault(); actions?.["restart-3"]?.(); }}>
      <RefreshCw className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-mono-label">RESTART</span>
      </a>
      </div>
      {/* Bottom Status */}
      <div className="mt-auto">
      <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center opacity-50">
      <Power className="text-xs" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-20 flex flex-col relative z-10 h-screen">
      {/* TopAppBar (Web & Mobile Header) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-12 bg-background/80 backdrop-blur-md border-b border-outline-variant/30 md:pl-24">
      <div className="flex items-center gap-4">
      <div className="font-mono-label text-mono-label font-black tracking-tighter text-primary-container text-glow">
                          PRISM_RELAY_CANARY
                      </div>
      </div>
      {/* HUD Stats */}
      <div className="hidden md:flex items-center gap-6 font-mono-value text-mono-value text-primary-fixed-dim">
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded border-l-2 border-primary-container">
      <span className="text-xs text-outline font-mono-label">LEVEL</span>
      <span>04</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded border-l-2 border-tertiary-fixed">
      <span className="text-xs text-outline font-mono-label">SCORE</span>
      <span>12,450</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded border-l-2 border-secondary-fixed">
      <span className="text-xs text-outline font-mono-label">LIVES</span>
      <div className="flex gap-1 text-secondary-fixed">
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-sm" aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-sm" aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded border border-outline-variant text-primary-fixed-dim font-mono-value">
      <Timer className="text-sm" aria-hidden={true} focusable="false" />
      <span>02:45</span>
      </div>
      <button className="w-8 h-8 flex items-center justify-center text-outline hover:text-primary-fixed hover:glow-sm transition-colors hidden md:flex" type="button" aria-label="Scoreboard" data-action-id="scoreboard-1" onClick={actions?.["scoreboard-1"]}>
      <Trophy aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Playfield Canvas */}
      <div className="flex-1 mt-12 flex flex-col items-center justify-center relative overflow-hidden p-margin-desktop">
      {/* Pause Overlay Hint */}
      <div className="absolute top-8 right-8 font-mono-label text-mono-label text-outline/50 flex items-center gap-2 z-20 bg-surface/50 px-3 py-1 rounded backdrop-blur-sm border border-outline-variant/30">
      <span className="px-2 py-0.5 bg-surface-container rounded text-on-surface">P</span>
      <span>TO PAUSE</span>
      </div>
      {/* Central Relay Grid */}
      <div className="relative w-full max-w-4xl mx-auto flex-1 flex items-center justify-center">
      {/* Glowing Paths / Beams (Simulated) */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
      <div className="beam h-1 w-32 top-[40%] left-[25%] rotate-[30deg]"></div>
      <div className="beam h-1 w-24 top-[55%] left-[45%] rotate-[-30deg]"></div>
      <div className="beam h-1 w-40 top-[40%] left-[55%] rotate-[0deg]"></div>
      </div>
      <div className="hex-grid scale-75 md:scale-100 transition-transform">
      {/* Row 1 */}
      <div className="hex-node opacity-30"></div>
      <div className="hex-node"></div>
      <div className="hex-node opacity-30"></div>
      <div className="hex-node"></div>
      <div className="hex-node opacity-30"></div>
      <div className="hex-node"></div>
      <div className="hex-node opacity-30"></div>
      <div className="hex-node"></div>
      {/* Row 2 */}
      <div className="hex-node"></div>
      <div className="hex-node hex-active pulse">
      <CircleDot  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-container text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="hex-node border-outline-variant">
      <div className="w-1 h-full bg-outline-variant rotate-45"></div>
      </div>
      <div className="hex-node"></div>
      <div className="hex-node"></div>
      <div className="hex-node hex-active">
      <Shapes className="text-secondary-fixed text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="hex-node"></div>
      <div className="hex-node opacity-30"></div>
      {/* Row 3 */}
      <div className="hex-node opacity-30"></div>
      <div className="hex-node"></div>
      <div className="hex-node hex-active border-primary-container">
      <div className="w-full h-1 bg-primary-container pulse shadow-[0_0_10px_#00f2ff]"></div>
      </div>
      <div className="hex-node"></div>
      <div className="hex-node hex-active border-primary-container">
      <div className="w-1 h-full bg-primary-container rotate-[-45deg] pulse shadow-[0_0_10px_#00f2ff]"></div>
      </div>
      <div className="hex-node"></div>
      <div className="hex-node"></div>
      <div className="hex-node opacity-30"></div>
      {/* Row 4 */}
      <div className="hex-node opacity-30"></div>
      <div className="hex-node"></div>
      <div className="hex-node"></div>
      <div className="hex-node hex-active border-tertiary-fixed pulse">
      <Coins className="text-tertiary-fixed text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="hex-node border-outline-variant">
      <div className="w-full h-1 bg-outline-variant"></div>
      </div>
      <div className="hex-node"></div>
      <div className="hex-node"></div>
      <div className="hex-node opacity-30"></div>
      {/* Row 5 */}
      <div className="hex-node opacity-30"></div>
      <div className="hex-node opacity-30"></div>
      <div className="hex-node"></div>
      <div className="hex-node"></div>
      <div className="hex-node"></div>
      <div className="hex-node"></div>
      <div className="hex-node opacity-30"></div>
      <div className="hex-node opacity-30"></div>
      </div>
      </div>
      {/* Active Controls Help (Bottom Right Corner) */}
      <div className="absolute bottom-8 right-8 bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/30 rounded-lg p-4 w-64 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="font-mono-label text-caption text-primary-fixed-dim mb-3 border-b border-outline-variant/30 pb-2 uppercase tracking-widest">
                          Active Controls
                      </div>
      <div className="flex flex-col gap-2 font-mono-label text-caption">
      <div className="flex justify-between items-center">
      <span className="text-outline">SELECT</span>
      <div className="flex gap-1">
      <span className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-on-surface">↑</span>
      <span className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-on-surface">↓</span>
      <span className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-on-surface">←</span>
      <span className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-on-surface">→</span>
      </div>
      </div>
      <div className="flex justify-between items-center">
      <span className="text-outline">FLIP MIRROR</span>
      <span className="px-3 py-0.5 bg-surface rounded border border-outline-variant text-on-surface">SPACE</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="text-outline">CYCLE NODE</span>
      <span className="px-2 py-0.5 bg-surface rounded border border-outline-variant text-on-surface">TAB</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface-container-highest/40 backdrop-blur-lg border-t border-primary/20 shadow-[0_-4px_20px_rgba(0,219,231,0.15)] rounded-t-xl">
      <a className="flex flex-col items-center justify-center text-primary-container glow-sm scale-110 transition-colors shadow-primary-container" href="#" data-action-id="level-4" onClick={(event) => { event.preventDefault(); actions?.["level-4"]?.(); }}>
      <Layers className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-mono-label">LEVEL</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline hover:text-secondary" href="#" data-action-id="score-5" onClick={(event) => { event.preventDefault(); actions?.["score-5"]?.(); }}>
      <BarChart3 className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-mono-label">SCORE</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline hover:text-secondary" href="#" data-action-id="lives-6" onClick={(event) => { event.preventDefault(); actions?.["lives-6"]?.(); }}>
      <Heart className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-mono-label">LIVES</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline hover:text-secondary" href="#" data-action-id="timer-7" onClick={(event) => { event.preventDefault(); actions?.["timer-7"]?.(); }}>
      <Clock className="mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px] font-mono-label">TIMER</span>
      </a>
      </nav>
      
    </>
  );
}
