"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from "lucide-react"
import { useWipeData } from "@/hooks/useWipeData"

export function AccuracyStats() {
  const { accuracy } = useWipeData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wipe Accuracy</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center space-x-4">
        <Zap className="text-yellow-500 w-8 h-8" />
        <span className="text-lg font-bold">
          {accuracy > 0 ? `${accuracy.toFixed(2)}%` : "Calculating..."}
        </span>
      </CardContent>
    </Card>
  )
}
