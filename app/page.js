"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { RealtimeProgress } from "@/components/realtime-progress"
import { AccuracyStats } from "@/components/accuracy-stats"
import { CompletionStats } from "@/components/completion-stats"
import { CertificateModal } from "@/components/certificate-modal"
import { Shield, HardDrive, Clock, CheckCircle } from "lucide-react"

export default function DataWipingDashboard() {
  const [showCertificate, setShowCertificate] = useState(false)
  const [currentSection, setCurrentSection] = useState("realtime")

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-balance">SecureWipe Pro</h1>
                <p className="text-sm text-muted-foreground">Enterprise Data Erasure Solution</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-success border-success">
                <CheckCircle className="h-3 w-3 mr-1" />
                System Active
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium">Session ID: SW-2024-001</p>
                <p className="text-xs text-muted-foreground">Started: Jan 15, 2024 05:43:22</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: "realtime", label: "Real-time Progress", icon: Clock },
              { id: "accuracy", label: "Accuracy Analysis", icon: HardDrive },
              { id: "completion", label: "Completion Status", icon: CheckCircle },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentSection(id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  currentSection === id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {currentSection === "realtime" && <RealtimeProgress />}
        {currentSection === "accuracy" && <AccuracyStats />}
        {currentSection === "completion" && (
          <CompletionStats onGenerateCertificate={() => setShowCertificate(true)} />
        )}
      </main>

      {/* Certificate Modal */}
      <CertificateModal open={showCertificate} onOpenChange={setShowCertificate} />
    </div>
  )
}
