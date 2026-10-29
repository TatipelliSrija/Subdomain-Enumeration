import React, { useState } from 'react';
import { Copy, Check, ExternalLink, AlertTriangle, ShieldAlert, Info, ArrowUpRight, Search } from 'lucide-react';
import { SubdomainRecord, RiskLevel, SubdomainStatus } from '../types';

interface ResultsTableProps {
  records: SubdomainRecord[];
  onSelectRecord: (record: SubdomainRecord) => void;
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ records, onSelectRecord }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const getRiskBadge = (level: RiskLevel) => {
    switch (level) {
      case 'CRITICAL':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/50">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            CRITICAL
          </span>
        );
      case 'HIGH':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            HIGH
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/40">
            MEDIUM
          </span>
        );
      case 'LOW':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30">
            LOW
          </span>
        );
      case 'INFO':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-800/60 text-slate-300 border border-cyan-500/15">
            INFO
          </span>
        );
    }
  };

  const getStatusBadge = (status: SubdomainStatus) => {
    switch (status) {
      case 'RESOLVED':
        return (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Resolved
          </span>
        );
      case 'DANGLING_CNAME':
        return (
          <span className="inline-flex items-center gap-1 text-xs text-rose-400 font-semibold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            Dangling CNAME
          </span>
        );
      case 'NXDOMAIN':
        return (
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-slate-700" />
            NXDOMAIN
          </span>
        );
      case 'TIMEOUT':
        return (
          <span className="inline-flex items-center gap-1 text-xs text-amber-400">
            Timeout
          </span>
        );
    }
  };

  if (records.length === 0) {
    return (
      <div className="bg-[#0b1324]/90 backdrop-blur rounded-xl border border-cyan-500/15 p-12 text-center shadow-xs">
        <div className="w-12 h-12 rounded-full bg-slate-800/60 flex items-center justify-center mx-auto text-slate-400 mb-3">
          <Search className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-semibold text-slate-100">No Subdomain Records Found</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
          No records matched your search query or filter parameters. Try clearing filters or running a broader scan with both CT logs and wordlists enabled.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#0b1324]/90 backdrop-blur rounded-xl border border-cyan-500/15 shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-900/60 border-b border-cyan-500/15 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <th className="py-3 px-4">Subdomain Finding</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3">Severity</th>
              <th className="py-3 px-3">DNS Resolution / Target</th>
              <th className="py-3 px-3 hidden md:table-cell">Source</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-500/10 text-slate-200">
            {records.map((rec) => (
              <tr
                key={rec.id}
                onClick={() => onSelectRecord(rec)}
                className={`hover:bg-slate-800/60 transition-colors cursor-pointer ${
                  rec.riskLevel === 'CRITICAL' ? 'bg-rose-500/5' : ''
                }`}
              >
                {/* Subdomain name & copy */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-medium text-slate-100 text-xs truncate max-w-[220px] sm:max-w-xs">
                      {rec.subdomain}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => handleCopy(rec.subdomain, rec.id, e)}
                      title="Copy subdomain to clipboard"
                      className="text-slate-400 hover:text-slate-300 p-1 rounded transition-colors"
                    >
                      {copiedId === rec.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  {rec.riskReasons.length > 0 && (
                    <div className="text-[11px] text-slate-500 truncate max-w-sm mt-0.5">
                      {rec.riskReasons[0]}
                    </div>
                  )}
                </td>

                {/* Status */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {getStatusBadge(rec.status)}
                </td>

                {/* Risk Level */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {getRiskBadge(rec.riskLevel)}
                </td>

                {/* DNS Resolution / CNAME */}
                <td className="py-3 px-3 max-w-xs">
                  {rec.cnames.length > 0 && (
                    <div className="text-[11px] font-mono text-cyan-400 truncate" title={`CNAME: ${rec.cnames.join(', ')}`}>
                      CNAME: {rec.cnames[0]}
                    </div>
                  )}
                  {rec.ips.length > 0 ? (
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {rec.ips.slice(0, 2).map((ip) => (
                        <span key={ip} className="font-mono text-[10px] px-1.5 py-0.2 bg-slate-800/60 text-slate-300 rounded border border-cyan-500/15">
                          {ip}
                        </span>
                      ))}
                      {rec.ips.length > 2 && (
                        <span className="text-[10px] text-slate-400">+{rec.ips.length - 2} more</span>
                      )}
                    </div>
                  ) : rec.cnames.length === 0 ? (
                    <span className="text-slate-400 text-[11px]">No active DNS records</span>
                  ) : null}
                </td>

                {/* Source */}
                <td className="py-3 px-3 hidden md:table-cell whitespace-nowrap">
                  <span className="text-[11px] text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
                    {rec.source}
                  </span>
                </td>

                {/* Inspect Action */}
                <td className="py-3 px-4 text-right whitespace-nowrap">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRecord(rec);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-md transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
