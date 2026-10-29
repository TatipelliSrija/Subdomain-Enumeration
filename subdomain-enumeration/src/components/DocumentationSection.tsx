import React, { useState } from 'react';
import { BookOpen, ShieldCheck, AlertTriangle, Network, Search, Lock, FileCheck, ArrowRight, Layers, HelpCircle, Terminal } from 'lucide-react';

export const DocumentationSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'methods' | 'takeovers' | 'remediation' | 'ethics'>('overview');

  return (
    <div className="bg-[#0b1324]/90 backdrop-blur rounded-xl border border-cyan-500/15 shadow-xs overflow-hidden">
      {/* Top Header */}
      <div className="px-6 py-5 border-b border-cyan-500/15 bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base font-bold text-slate-100">
              Subdomain Enumeration & Assessment Documentation
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Technical guide on reconnaissance methodologies, vulnerability vectors, and defensive hardening.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap gap-1 bg-slate-800/70 p-1 rounded-lg text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveSection('overview')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeSection === 'overview' ? 'bg-[#0b1324]/90 backdrop-blur text-slate-100 shadow-2xs font-semibold' : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('methods')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeSection === 'methods' ? 'bg-[#0b1324]/90 backdrop-blur text-slate-100 shadow-2xs font-semibold' : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            Passive vs. Active
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('takeovers')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeSection === 'takeovers' ? 'bg-[#0b1324]/90 backdrop-blur text-rose-400 shadow-2xs font-semibold' : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            Subdomain Takeover
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('remediation')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeSection === 'remediation' ? 'bg-[#0b1324]/90 backdrop-blur text-slate-100 shadow-2xs font-semibold' : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            Defense & Remediation
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('ethics')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeSection === 'ethics' ? 'bg-[#0b1324]/90 backdrop-blur text-amber-300 shadow-2xs font-semibold' : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            Ethical Scoping
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-8 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
        {/* SECTION 1: OVERVIEW */}
        {activeSection === 'overview' && (
          <div className="space-y-6 max-w-4xl">
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                What is Subdomain Enumeration?
              </h3>
              <p className="text-slate-400">
                Subdomain enumeration is the process of mapping all subdomains under a primary domain name (e.g., finding <code className="bg-slate-800/60 px-1.5 py-0.5 rounded text-cyan-400 font-mono">api.example.com</code>, <code className="bg-slate-800/60 px-1.5 py-0.5 rounded text-cyan-400 font-mono">dev.example.com</code>, or <code className="bg-slate-800/60 px-1.5 py-0.5 rounded text-cyan-400 font-mono">vpn.example.com</code> under <code className="bg-slate-800/60 px-1.5 py-0.5 rounded font-mono">example.com</code>).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-900/60 border border-cyan-500/15 rounded-lg">
                <div className="font-semibold text-slate-100 mb-1 flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-cyan-400" />
                  Attack Surface Discovery
                </div>
                <p className="text-xs text-slate-400">
                  Organizations frequently deploy dozens or hundreds of subdomains across diverse cloud providers, CDNs, and internal servers, creating an expansive attack surface.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 border border-cyan-500/15 rounded-lg">
                <div className="font-semibold text-slate-100 mb-1 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Shadow IT Identification
                </div>
                <p className="text-xs text-slate-400">
                  Development teams often launch temporary test environments, staging databases, or proof-of-concept portals that remain forgotten and unmonitored.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 border border-cyan-500/15 rounded-lg">
                <div className="font-semibold text-slate-100 mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  Vulnerability Detection
                </div>
                <p className="text-xs text-slate-400">
                  Enumeration uncovers critical risks such as dangling CNAMEs, exposed administrative consoles, pre-production API endpoints, and outdated software stacks.
                </p>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-300 text-xs uppercase tracking-wider mb-1">
                Role in Authorized Penetration Testing
              </h4>
              <p className="text-xs text-cyan-200">
                In security assessments and Red Team engagements, reconnaissance (Phase 1) informs all downstream testing. Rather than attacking heavily fortified primary corporate websites, security analysts discover weaker perimeters (like unauthenticated staging APIs or legacy documentation hubs) identified through thorough enumeration.
              </p>
            </div>
          </div>
        )}

        {/* SECTION 2: PASSIVE VS ACTIVE METHODOLOGIES */}
        {activeSection === 'methods' && (
          <div className="space-y-6 max-w-4xl">
            <h3 className="text-lg font-bold text-slate-100">
              Reconnaissance Methodologies: Passive vs. Active
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Passive Enumeration */}
              <div className="border border-cyan-500/15 rounded-xl p-5 bg-[#0b1324]/90 backdrop-blur space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Network className="w-5 h-5" />
                  Passive Enumeration (Zero-Traffic to Target)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Passive enumeration collects information from third-party repositories without sending any network packets or requests to the target's own infrastructure. It leaves zero traces in the target organization's server access logs.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-cyan-500/15">
                    <strong className="text-slate-100 block mb-0.5">1. Certificate Transparency (CT) Logs</strong>
                    <span className="text-slate-400">
                      RFC 6962 requires Certificate Authorities (Let's Encrypt, DigiCert, Cloudflare) to publicly append every issued TLS certificate to public cryptographic logs (e.g. crt.sh). Querying these logs reveals subdomains even before they are published to public search engines.
                    </span>
                  </div>

                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-cyan-500/15">
                    <strong className="text-slate-100 block mb-0.5">2. Search Engine Dorking</strong>
                    <span className="text-slate-400">
                      Queries such as <code className="font-mono text-cyan-400">site:example.com -www</code> extract indexed subdomains from Google, Bing, and DuckDuckGo without directly probing the host.
                    </span>
                  </div>

                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-cyan-500/15">
                    <strong className="text-slate-100 block mb-0.5">3. Passive DNS Aggregators</strong>
                    <span className="text-slate-400">
                      Databases like SecurityTrails, VirusTotal, and Censys aggregate historical DNS resolution caches from global ISP telemetry.
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Enumeration */}
              <div className="border border-cyan-500/15 rounded-xl p-5 bg-[#0b1324]/90 backdrop-blur space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Terminal className="w-5 h-5" />
                  Active Enumeration (Direct DNS Interaction)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Active enumeration sends direct DNS queries to authoritative nameservers or recursive resolvers to probe for the existence of specific subdomains.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-cyan-500/15">
                    <strong className="text-slate-100 block mb-0.5">1. Wordlist / Dictionary Bruteforcing</strong>
                    <span className="text-slate-400">
                      Iterating through high-frequency prefix wordlists (<code className="font-mono text-emerald-400">api</code>, <code className="font-mono text-emerald-400">staging</code>, <code className="font-mono text-emerald-400">dev</code>, <code className="font-mono text-emerald-400">admin</code>) and resolving each against DNS.
                    </span>
                  </div>

                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-cyan-500/15">
                    <strong className="text-slate-100 block mb-0.5">2. DNS Zone Transfer (AXFR)</strong>
                    <span className="text-slate-400">
                      Attempting an AXFR request against nameservers. When misconfigured without ACLs, the nameserver dumps the complete DNS zone file containing all host records.
                    </span>
                  </div>

                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-cyan-500/15">
                    <strong className="text-slate-100 block mb-0.5">3. Wildcard DNS Detection</strong>
                    <span className="text-slate-400">
                      Active scanners test random strings (e.g. <code className="font-mono text-emerald-400">rand123xyz.domain.com</code>). If it resolves, wildcard DNS is enabled, requiring synthetic filtering to prevent infinite false positives.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: SUBDOMAIN TAKEOVERS */}
        {activeSection === 'takeovers' && (
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-100">
                The Mechanics of Subdomain Takeovers (Dangling CNAMEs)
              </h3>
            </div>

            <p className="text-slate-400">
              Subdomain takeover is one of the highest-severity vulnerabilities discovered through enumeration. It occurs when a DNS CNAME record points to an external third-party cloud service (such as AWS S3, GitHub Pages, Heroku, or Azure) that has been decommissioned or deleted, but the DNS pointer was never removed.
            </p>

            {/* Step-by-step visual diagram */}
            <div className="bg-[#02060d] border border-cyan-500/20 text-white rounded-xl p-5 font-mono text-xs space-y-4">
              <div className="text-slate-400 uppercase tracking-wider text-[11px] font-sans font-semibold">
                Attack Chain Lifecycle:
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-cyan-900/40 text-cyan-300 font-bold">Step 1</span>
                  <div>
                    <span className="text-cyan-400 font-semibold">Legitimate Setup:</span> Organization creates <code className="text-emerald-300">assets.corp.com</code> with a CNAME pointing to <code className="text-amber-300">corp-assets.s3.amazonaws.com</code>.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">Step 2</span>
                  <div>
                    <span className="text-amber-400 font-semibold">Decommissioning:</span> A developer deletes the S3 bucket <code className="text-amber-300">corp-assets</code> to stop cloud billing, but forgets to delete the DNS CNAME record in the corporate zone file.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">Step 3</span>
                  <div>
                    <span className="text-rose-400 font-semibold">Dangling Pointer:</span> <code className="text-emerald-300">assets.corp.com</code> now resolves to an unclaimed S3 bucket name returning HTTP 404 / NoSuchBucket.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-rose-500 text-white font-bold">Step 4</span>
                  <div>
                    <span className="text-rose-300 font-semibold">Adversary Takeover:</span> An attacker registers an AWS S3 bucket named <code className="text-amber-300">corp-assets</code>. Now, any visitor navigating to <code className="text-emerald-300">assets.corp.com</code> receives content hosted directly by the adversary!
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg space-y-1.5">
                <h4 className="font-bold text-rose-300">Severe Impact of Takeover:</h4>
                <ul className="list-disc list-inside text-rose-300 space-y-1">
                  <li><strong>Credential Theft & Phishing:</strong> Perfectly authentic corporate URL with valid TLS certificates.</li>
                  <li><strong>Cookie & Session Hijacking:</strong> Access to sensitive cookies scoped to <code className="font-mono">.corp.com</code>.</li>
                  <li><strong>Cross-Site Scripting (XSS):</strong> Bypassing Content Security Policies (CSP) that whitelist the parent domain.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900/60 border border-cyan-500/15 rounded-lg space-y-1.5">
                <h4 className="font-bold text-slate-100">Common Vulnerable Services:</h4>
                <ul className="list-disc list-inside text-slate-400 space-y-1 font-mono">
                  <li>*.s3.amazonaws.com (AWS S3)</li>
                  <li>*.github.io (GitHub Pages)</li>
                  <li>*.herokuapp.com (Heroku)</li>
                  <li>*.azurewebsites.net (Azure Web Apps)</li>
                  <li>*.trafficmanager.net (Azure Traffic Manager)</li>
                  <li>*.pantheonsite.io & *.ghost.io</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: DEFENSE & REMEDIATION */}
        {activeSection === 'remediation' && (
          <div className="space-y-6 max-w-4xl">
            <h3 className="text-lg font-bold text-slate-100">
              Defensive Hardening & Remediation Playbook
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-[#0b1324]/90 backdrop-blur border border-cyan-500/15 rounded-lg shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  1. DNS Zone File Hygiene & Automated Deprovisioning
                </div>
                <p className="text-slate-400">
                  Integrate DNS record deletion into Infrastructure-as-Code (IaC) pipelines (Terraform, CloudFormation, Pulumi). When tearing down a cloud instance, bucket, or CDN endpoint, ensure the associated CNAME record is deleted simultaneously.
                </p>
              </div>

              <div className="p-4 bg-[#0b1324]/90 backdrop-blur border border-cyan-500/15 rounded-lg shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  2. Certificate Transparency (CT) Monitoring
                </div>
                <p className="text-slate-400">
                  Implement continuous monitoring on public Certificate Transparency logs (e.g., via Certstream or Facebook Certificate Monitoring). Alert security teams immediately whenever an unexpected or shadow IT subdomain certificate is issued.
                </p>
              </div>

              <div className="p-4 bg-[#0b1324]/90 backdrop-blur border border-cyan-500/15 rounded-lg shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  3. Zero-Trust Network Access (ZTNA) for Non-Production Assets
                </div>
                <p className="text-slate-400">
                  Never publish staging, development, or internal administrative consoles on public DNS with routable IP addresses. Put them behind identity-aware proxies (Cloudflare Access, Google BeyondCorp, AWS Verified Access) or corporate VPNs.
                </p>
              </div>

              <div className="p-4 bg-[#0b1324]/90 backdrop-blur border border-cyan-500/15 rounded-lg shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  4. Restrict DNS Zone Transfers (AXFR)
                </div>
                <p className="text-slate-400">
                  Ensure authoritative nameservers (BIND, PowerDNS, Route 53) strictly deny unauthenticated AXFR zone transfer requests by specifying explicit IP access-control lists (ACLs) for trusted secondary nameservers only.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: ETHICAL SCOPING & RULES OF ENGAGEMENT */}
        {activeSection === 'ethics' && (
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-2 text-amber-400">
              <FileCheck className="w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-100">
                Ethical Scoping & Rules of Engagement (RoE)
              </h3>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-200 text-xs leading-relaxed space-y-2">
              <h4 className="font-bold text-amber-300 text-sm">Legal & Authorization Principles:</h4>
              <p>
                <strong>Golden Rule:</strong> Only test domains that you own or have explicit written permission from the domain owner to assess. Unauthorized reconnaissance and testing against computer systems without authorization violates laws such as the US Computer Fraud and Abuse Act (CFAA), the UK Computer Misuse Act, and equivalent global cybersecurity legislation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-900/60 border border-cyan-500/15 rounded-lg space-y-2">
                <h4 className="font-bold text-slate-100">Scope Definition:</h4>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>Verify whether wildcard domains (<code className="font-mono">*.example.com</code>) are in-scope or restricted to explicit FQDN lists.</li>
                  <li>Confirm whether third-party SaaS platforms (e.g. Zendesk, Salesforce) linked via CNAME are excluded by client policy.</li>
                  <li>Always verify Bug Bounty policy terms (Safe Harbor, rate limits, sensitive data disclosure rules).</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900/60 border border-cyan-500/15 rounded-lg space-y-2">
                <h4 className="font-bold text-slate-100">Subdomain Takeover Proof of Concept:</h4>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>In authorized assessments, never deface or host malicious content on a claimed subdomain.</li>
                  <li>A benign proof-of-concept (e.g., a simple HTML page stating <em>"PoC for authorized security assessment by [Researcher]"</em>) is sufficient to demonstrate impact.</li>
                  <li>Report critical takeover vulnerabilities immediately to enable rapid DNS zone remediation.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
