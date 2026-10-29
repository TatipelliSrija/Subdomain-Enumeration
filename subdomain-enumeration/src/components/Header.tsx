import React from 'react';
import { Shield, ShieldAlert, BookOpen, SearchCode, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeTab: 'recon' | 'docs';
  setActiveTab: (tab: 'recon' | 'docs') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="border-b border-cyan-500/15 bg-[#0b1324]/90 backdrop-blur sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.35)]">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-slate-100 tracking-tight">
                  Subdomain Enumeration
                </h1>
                <span className="px-2 py-0.5 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30">
                  Project 5 Prototype
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Authorized Reconnaissance & Vulnerability Assessment
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-md text-xs text-amber-300">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Only assess domains you own or have written authorization to test</span>
            </div>

            <nav className="flex items-center bg-slate-800/60 p-1 rounded-lg">
              <button
                id="tab-recon-btn"
                type="button"
                onClick={() => setActiveTab('recon')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'recon'
                    ? 'bg-[#0b1324]/90 backdrop-blur text-slate-100 shadow-xs'
                    : 'text-slate-400 hover:text-cyan-300'
                }`}
              >
                <SearchCode className="w-4 h-4" />
                <span>Enumeration</span>
              </button>
              <button
                id="tab-docs-btn"
                type="button"
                onClick={() => setActiveTab('docs')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'docs'
                    ? 'bg-[#0b1324]/90 backdrop-blur text-slate-100 shadow-xs'
                    : 'text-slate-400 hover:text-cyan-300'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Documentation</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
