// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - PrismRelay Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Settings } from "lucide-react";


export type GameSettingsPrismrelayCanaryActionId = "novice-1" | "operator-2" | "master-3" | "save-preferences-4" | "return-to-gameplay-5";

export interface GameSettingsPrismrelayCanaryProps {
  actions?: Partial<Record<GameSettingsPrismrelayCanaryActionId, () => void>>;

}

export function GameSettingsPrismrelayCanary({ actions }: GameSettingsPrismrelayCanaryProps) {
  return (
    <>
      {/* Blurred Gameplay Background Simulation */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-no-repeat" data-alt="A futuristic cyberpunk cityscape at night, heavily blurred to serve as a background. Neon cyan and magenta lights streak across a dark, technological landscape, creating a sense of high-speed motion and advanced computing environments. The overall aesthetic is dark, vibrant, and highly digital, resembling a complex game engine rendered scene.">
      <div className="absolute inset-0 backdrop-blur-md bg-background/80"></div>
      </div>
      {/* Main Settings Panel */}
      <main className="relative z-10 w-full max-w-2xl px-gutter">
      <div className="bg-surface-container-low/60 backdrop-blur-xl border border-primary/20 rounded-xl shadow-[0_0_15px_rgba(0,219,231,0.2)] p-margin-desktop scanline-bg flex flex-col gap-8">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
      <div>
      <h1 className="font-headline-md text-headline-md text-primary-fixed-dim uppercase tracking-wider">SYSTEM_CONFIG</h1>
      <p className="font-mono-label text-mono-label text-outline mt-1">PRISM_RELAY_CANARY v2.4</p>
      </div>
      <Settings style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      </header>
      {/* Settings Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
      {/* Difficulty */}
      <div className="flex flex-col gap-2">
      <label className="font-mono-label text-mono-label text-on-surface-variant uppercase">Threat Level</label>
      <div className="flex rounded-DEFAULT border border-outline-variant overflow-hidden">
      <button className="flex-1 py-2 font-mono-label text-mono-label text-outline hover:bg-primary/10 hover:text-primary-fixed-dim transition-colors" type="button" data-action-id="novice-1" onClick={actions?.["novice-1"]}>NOVICE</button>
      <button className="flex-1 py-2 font-mono-label text-mono-label bg-primary-container/20 text-primary-container border-x border-outline-variant glow-sm transition-colors" type="button" data-action-id="operator-2" onClick={actions?.["operator-2"]}>OPERATOR</button>
      <button className="flex-1 py-2 font-mono-label text-mono-label text-outline hover:bg-primary/10 hover:text-primary-fixed-dim transition-colors" type="button" data-action-id="master-3" onClick={actions?.["master-3"]}>MASTER</button>
      </div>
      </div>
      {/* Game Speed */}
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
      <label className="font-mono-label text-mono-label text-on-surface-variant uppercase">Sim Speed</label>
      <span className="font-mono-value text-mono-value text-primary-fixed-dim">1.0x</span>
      </div>
      <div className="pt-2">
      <input className="w-full" max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.0" />
      </div>
      </div>
      {/* Toggles */}
      <div className="flex flex-col gap-4 mt-2">
      <label className="flex items-center justify-between cursor-pointer group">
      <span className="font-mono-label text-mono-label text-on-surface uppercase group-hover:text-primary-fixed-dim transition-colors">Screen Shake</span>
      <div className="relative">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" />
      <div className="w-10 h-4 bg-surface-container-highest border border-outline-variant peer-focus:outline-none peer-checked:bg-primary/20 peer-checked:border-primary-fixed-dim transition-colors"></div>
      <div className="absolute left-0 top-0 w-4 h-4 bg-outline peer-checked:translate-x-6 peer-checked:bg-primary-fixed-dim transition-colors shadow-[0_0_5px_rgba(0,219,231,0.5)] peer-checked:shadow-[0_0_8px_rgba(0,219,231,0.8)]"></div>
      </div>
      </label>
      <label className="flex items-center justify-between cursor-pointer group">
      <span className="font-mono-label text-mono-label text-on-surface uppercase group-hover:text-primary-fixed-dim transition-colors">Glow Intensity</span>
      <div className="relative">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" />
      <div className="w-10 h-4 bg-surface-container-highest border border-outline-variant peer-focus:outline-none peer-checked:bg-primary/20 peer-checked:border-primary-fixed-dim transition-colors"></div>
      <div className="absolute left-0 top-0 w-4 h-4 bg-outline peer-checked:translate-x-6 peer-checked:bg-primary-fixed-dim transition-colors shadow-[0_0_5px_rgba(0,219,231,0.5)] peer-checked:shadow-[0_0_8px_rgba(0,219,231,0.8)]"></div>
      </div>
      </label>
      </div>
      </div>
      {/* Right Column */}
      <div className="flex flex-col gap-6">
      {/* Input Help */}
      <div className="bg-surface-container-high/50 border border-outline-variant/30 p-4 rounded-lg flex flex-col gap-4">
      <h3 className="font-mono-label text-mono-label text-on-surface-variant uppercase border-b border-outline-variant/30 pb-2">Input_Mapping</h3>
      <div className="flex items-center justify-between">
      <span className="font-body-md text-body-md text-on-surface">Flip Polarity</span>
      <div className="bg-surface-container-lowest border border-outline-variant px-3 py-1 rounded text-mono-label font-mono-label text-primary-fixed-dim min-w-[80px] text-center">SPACE</div>
      </div>
      <div className="flex items-center justify-between">
      <span className="font-body-md text-body-md text-on-surface">Navigate</span>
      <div className="flex gap-1">
      <div className="bg-surface-container-lowest border border-outline-variant px-2 py-1 rounded text-mono-label font-mono-label text-outline"><ArrowLeft className="text-[16px]" aria-hidden={true} focusable="false" /></div>
      <div className="bg-surface-container-lowest border border-outline-variant px-2 py-1 rounded text-mono-label font-mono-label text-outline"><ArrowDown className="text-[16px]" aria-hidden={true} focusable="false" /></div>
      <div className="bg-surface-container-lowest border border-outline-variant px-2 py-1 rounded text-mono-label font-mono-label text-outline"><ArrowUp className="text-[16px]" aria-hidden={true} focusable="false" /></div>
      <div className="bg-surface-container-lowest border border-outline-variant px-2 py-1 rounded text-mono-label font-mono-label text-outline"><ArrowRight className="text-[16px]" aria-hidden={true} focusable="false" /></div>
      </div>
      </div>
      <div className="flex items-center justify-between">
      <span className="font-body-md text-body-md text-on-surface">Halt Sim</span>
      <div className="bg-surface-container-lowest border border-outline-variant px-3 py-1 rounded text-mono-label font-mono-label text-error min-w-[40px] text-center">P</div>
      </div>
      </div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 border-t border-outline-variant/30 pt-6">
      <button className="flex-1 py-3 px-6 font-headline-md text-headline-md uppercase text-primary-fixed-dim bg-transparent neon-border neon-glow transition-colors duration-200" type="button" data-action-id="save-preferences-4" onClick={actions?.["save-preferences-4"]}>
                          SAVE PREFERENCES
                      </button>
      <button className="flex-1 py-3 px-6 font-mono-label text-mono-label uppercase text-outline border border-outline-variant hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" type="button" data-action-id="return-to-gameplay-5" onClick={actions?.["return-to-gameplay-5"]}>
                          RETURN TO GAMEPLAY
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
