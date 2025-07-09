"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AlgorithmPage() {
  const [demoWeights, setDemoWeights] = useState({
    safety: 8,
    commute: 7,
    cost: 9,
    healthcare: 6,
    schools: 5,
    culture: 7,
    climate: 4,
  })

  const [showDemo, setShowDemo] = useState(false)

  const calculateDemo = () => {
    setShowDemo(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            NeighborFit Global
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Matching Algorithm</h1>
          <p className="text-gray-600">How we match neighborhoods worldwide to your lifestyle preferences</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Algorithm Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our global matching algorithm uses a weighted scoring system that considers international factors like
                  cultural adaptation, climate compatibility, healthcare quality variations, and cross-cultural
                  lifestyle preferences. Here's how it works:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Collect Global Preferences</h4>
                    <p className="text-sm text-gray-600">
                      User rates importance of factors relevant to international living
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-green-600">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Score Global Neighborhoods</h4>
                    <p className="text-sm text-gray-600">
                      Each area gets scored using international data sources and standards
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Calculate Cultural Match</h4>
                    <p className="text-sm text-gray-600">
                      Weighted average with cultural and climate adjustments for final score
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Try It Yourself</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700">
                  Adjust the importance ratings below to see how it affects global neighborhood rankings:
                </p>

                <div className="space-y-4">
                  {Object.entries(demoWeights).map(([key, value]) => {
                    const labels = {
                      safety: "Safety & Security",
                      commute: "Commute & Transportation",
                      cost: "Cost of Living",
                      healthcare: "Healthcare Quality",
                      schools: "Schools & Education",
                      culture: "Cultural Amenities",
                      climate: "Climate & Weather",
                    }

                    return (
                      <div key={key} className="flex items-center justify-between">
                        <span className="w-48">{labels[key]}</span>
                        <div className="flex items-center space-x-4">
                          <input
                            type="range"
                            min="1"
                            max="10"
                            value={value}
                            onChange={(e) => setDemoWeights({ ...demoWeights, [key]: Number.parseInt(e.target.value) })}
                            className="w-32"
                          />
                          <span className="w-8 text-center font-semibold">{value}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Button onClick={calculateDemo} className="w-full">
                  Calculate Sample Rankings
                </Button>

                {showDemo && (
                  <div className="mt-6 space-y-4">
                    <h4 className="font-semibold">Sample Results:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded border-l-4 border-green-500">
                        <div>
                          <span className="font-medium">Greenwich Village, NYC</span>
                          <p className="text-xs text-gray-600">High culture, expensive, great safety</p>
                        </div>
                        <span className="font-bold text-green-600">
                          {Math.round(
                            ((9 * demoWeights.safety +
                              8 * demoWeights.commute +
                              4 * demoWeights.cost +
                              9 * demoWeights.healthcare +
                              9 * demoWeights.schools +
                              10 * demoWeights.culture +
                              7 * demoWeights.climate) /
                              (demoWeights.safety +
                                demoWeights.commute +
                                demoWeights.cost +
                                demoWeights.healthcare +
                                demoWeights.schools +
                                demoWeights.culture +
                                demoWeights.climate)) *
                              10,
                          ) / 10}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                        <div>
                          <span className="font-medium">Shoreditch, London</span>
                          <p className="text-xs text-gray-600">Creative hub, moderate cost, good transport</p>
                        </div>
                        <span className="font-bold text-blue-600">
                          {Math.round(
                            ((8 * demoWeights.safety +
                              9 * demoWeights.commute +
                              6 * demoWeights.cost +
                              8 * demoWeights.healthcare +
                              8 * demoWeights.schools +
                              9 * demoWeights.culture +
                              6 * demoWeights.climate) /
                              (demoWeights.safety +
                                demoWeights.commute +
                                demoWeights.cost +
                                demoWeights.healthcare +
                                demoWeights.schools +
                                demoWeights.culture +
                                demoWeights.climate)) *
                              10,
                          ) / 10}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
