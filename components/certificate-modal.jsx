"use client"

import { useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Printer as Print, Shield } from "lucide-react"

export function CertificateModal({ open, onOpenChange }) {
  const certRef = useRef(null)

  const handleDownload = async () => {
    if (certRef.current) {
      const html2pdf = (await import("html2pdf.js")).default
      const opt = {
        margin: 0.5,
        filename: "certificate-of-erasure.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      }
      html2pdf().set(opt).from(certRef.current).save()
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Certificate of Erasure
          </DialogTitle>
        </DialogHeader>

        <div ref={certRef} className="bg-white text-black p-8 rounded-xl shadow-xl border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-300">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-black to-red-600 text-transparent bg-clip-text">
                SecureWipe
              </div>
            </div>
            <div className="text-right text-2xl font-bold text-blue-600">SecureTech</div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Certificate of Erasure</h1>
            <div className="h-1 w-24 mx-auto bg-blue-600 rounded-full"></div>
          </div>

          {/* Status and Report ID */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Erasure Status:</span>
              <span className="text-green-600 font-bold px-2 py-1 rounded bg-green-100">Completed</span>
            </div>
            <div className="text-right flex items-center justify-end gap-2">
              <span className="font-semibold">Report ID:</span>
              <span className="font-mono text-gray-700">240115053444</span>
            </div>
          </div>

          {/* Customer Details */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Customer Details</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="mb-2">
                  <span className="font-semibold">Customer Name:</span>
                  <span className="ml-2">Enterprise Corp</span>
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-semibold">Customer Address:</span>
                  <span className="ml-2">New York</span>
                </div>
              </div>
            </div>
          </div>

          {/* Media Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Media Information</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div><span className="font-semibold">Media Source:</span> <span className="ml-2">Data Center</span></div>
                <div><span className="font-semibold">Model Name:</span> <span className="ml-2">Various HDDs</span></div>
                <div><span className="font-semibold">Serial Number:</span> <span className="ml-2">Multiple Devices</span></div>
                <div><span className="font-semibold">Manufacturer:</span> <span className="ml-2">Various</span></div>
                <div><span className="font-semibold">Media Asset Tag:</span> <span className="ml-2">-</span></div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Media Destination:</span> <span className="ml-2">Secure Disposal</span></div>
                <div><span className="font-semibold">Size:</span> <span className="ml-2">1.2 TB Total</span></div>
                <div><span className="font-semibold">Media Type:</span> <span className="ml-2">HDD</span></div>
                <div><span className="font-semibold">SMART Status:</span> <span className="ml-2 text-green-600 font-bold">PASSED</span></div>
              </div>
            </div>
          </div>

          {/* Erasure Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Erasure Information</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div><span className="font-semibold">Digital Identifier:</span> <span className="ml-2 font-mono text-sm">4c7a8a060fcb8b0d2f26f7b1adc8e4de</span></div>
                <div><span className="font-semibold">Erasure Method:</span> <span className="ml-2">NIST 800-88 Purge</span></div>
                <div><span className="font-semibold">Write Passes:</span> <span className="ml-2">4</span></div>
                <div><span className="font-semibold">Start Time:</span> <span className="ml-2">Jan 15, 2024 05:43:22</span></div>
                <div><span className="font-semibold">Duration:</span> <span className="ml-2">02:15:30</span></div>
                <div><span className="font-semibold">Extra Status:</span> <span className="ml-2">Complete Erase</span></div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Tool Used:</span> <span className="ml-2">SecureWipe Pro 3.0.0.7</span></div>
                <div><span className="font-semibold">Method Type:</span> <span className="ml-2">Purge</span></div>
                <div><span className="font-semibold">Verification:</span> <span className="ml-2">Total Verification</span></div>
                <div><span className="font-semibold">End Time:</span> <span className="ml-2">Jan 15, 2024 07:58:52</span></div>
                <div><span className="font-semibold">Erasure Status:</span> <span className="ml-2 text-green-600 font-bold">Completed</span></div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600 mt-8 pt-4 border-t border-gray-300 space-y-1">
            <p>This certificate confirms that the data erasure process has been completed successfully</p>
            <p>according to industry standards and best practices.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2 bg-transparent">
            <Print className="h-4 w-4" /> Print
          </Button>
          <Button onClick={handleDownload} className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
