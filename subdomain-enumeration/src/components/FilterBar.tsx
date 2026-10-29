import React from 'react';
import { Search, Filter, Download, FileSpreadsheet, FileCode, FileText, ChevronDown } from 'lucide-react';
import { RiskLevel, SubdomainStatus } from '../types';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  riskFilter: string;
  setRiskFilter: (risk: string) => void;
  sourceFilter: string;
  setSourceFilter: (source: string) => void;
  onExportCsv: () => void;
  onExportJson: () => void;
  onOpenReportModal: () => void;
  totalFilteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  riskFilter,
  setRiskFilter,
  sourceFilter,
  setSourceFilter,
  onExportCsv,
  onExportJson,
  onOpenReportModal,
  totalFilteredCount,
}) => {
  const [showExportMenu, setShowExportMenu] = React.useState(false);
  const exportMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target as Node)) {
        setShowExportMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#0b1324]/90 backdrop-blur border border-cyan-500/15 rounded-xl p-3.5 shadow-xs space-y-3">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="results-search-filter"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter subdomains, IPs, CNAME targets, or services..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/60 border border-cyan-500/15 rounded-lg text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-slate-900 transition-colors"
          />
        </div>

        {/* Filter selectors */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <select
            id="status-filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-2.5 py-1.5 text-xs bg-slate-900/60 border border-cyan-500/15 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="ALL">Status: All</option>
            <option value="RESOLVED">Resolved (Live)</option>
            <option value="DANGLING_CNAME">Dangling CNAMEs</option>
            <option value="NXDOMAIN">Unresolved (NXDOMAIN)</option>
          </select>

          {/* Risk Level Filter */}
          <select
            id="risk-filter-select"
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="px-2.5 py-1.5 text-xs bg-slate-900/60 border border-cyan-500/15 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="ALL">Severity: All</option>
            <option value="CRITICAL_HIGH">Critical & High</option>
            <option value="CRITICAL">Critical Only</option>
            <option value="HIGH">High Only</option>
            <option value="MEDIUM">Medium Only</option>
            <option value="LOW_INFO">Low & Info</option>
          </select>

          {/* Discovery Source Filter */}
          <select
            id="source-filter-select"
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-2.5 py-1.5 text-xs bg-slate-900/60 border border-cyan-500/15 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="ALL">Source: All</option>
            <option value="Certificate Transparency">Certificate Transparency</option>
            <option value="DNS Wordlist">DNS Wordlist</option>
          </select>

          {/* Export Dropdown */}
          <div className="relative" ref={exportMenuRef}>
            <button
              id="export-dropdown-btn"
              type="button"
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Report</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {showExportMenu && (
              <div className="absolute right-0 mt-1 w-56 bg-[#0b1324]/90 backdrop-blur border border-cyan-500/15 rounded-lg shadow-lg z-20 py-1 text-xs">
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase text-slate-400 border-b border-cyan-500/10">
                  Vulnerability Reporting Formats
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onOpenReportModal();
                    setShowExportMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-800/70 flex items-center gap-2 text-slate-300"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="font-medium">Security Assessment Report</div>
                    <div className="text-[10px] text-slate-500">Preview & download Markdown report</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onExportCsv();
                    setShowExportMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-800/70 flex items-center gap-2 text-slate-300 border-t border-cyan-500/10"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-medium">Export CSV Spreadsheet</div>
                    <div className="text-[10px] text-slate-500">Asset inventory for bug bounty / audit</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onExportJson();
                    setShowExportMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-800/70 flex items-center gap-2 text-slate-300 border-t border-cyan-500/10"
                >
                  <FileCode className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="font-medium">Export Raw JSON</div>
                    <div className="text-[10px] text-slate-500">Machine-readable artifact</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-cyan-500/10">
        <span>
          Showing <strong className="text-slate-100">{totalFilteredCount}</strong> matching records
        </span>
        {(searchQuery || statusFilter !== 'ALL' || riskFilter !== 'ALL' || sourceFilter !== 'ALL') && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('ALL');
              setRiskFilter('ALL');
              setSourceFilter('ALL');
            }}
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};
