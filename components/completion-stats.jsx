"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useWipeData } from "@/hooks/useWipeData"

export function CompletionStats() {
  const { progress } = useWipeData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Completion Status</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center space-x-4">
        {progress >= 100 ? (
          <>
            <CheckCircle className="text-green-500 w-8 h-8" />
            <span className="text-lg font-bold">Wiping Complete</span>
          </>
        ) : (
          <>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>{progress.toFixed(1)}%</span>
          </>
        )}
      </CardContent>
    </Card>
  )
}
