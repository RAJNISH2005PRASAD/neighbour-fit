"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const mockResults = [
  {
    id: 1,
    name: "Greenwich Village",
    city: "New York, USA",
    score: 91,
    rent: "$4,200 / ₹3.5L",
    commute: "15 min to Midtown",
    safety: "High",
    schools: "9/10",
    climate: "Temperate",
    pros: [
      "Vibrant cultural scene and nightlife",
      "Excellent restaurants and cafes",
      "Historic charm with modern amenities",
      "Great walkability and public transport",
    ],
    cons: ["Very expensive housing costs", "Tourist crowds", "Limited parking"],
  },
  {
    id: 2,
    name: "Shoreditch",
    city: "London, UK",
    score: 87,
    rent: "£2,800 / ₹2.8L",
    commute: "20 min to City",
    safety: "High",
    schools: "8/10",
    climate: "Mild",
    pros: [
      "Creative and artistic community",
      "Excellent food and market scene",
      "Great public transport links",
      "Diverse cultural offerings",
    ],
    cons: ["Can be noisy at weekends", "Gentrification concerns", "Weather can be unpredictable"],
  },
  {
    id: 3,
    name: "Shibuya",
    city: "Tokyo, Japan",
    score: 84,
    rent: "¥280,000 / ₹1.8L",
    commute: "10 min to business districts",
    safety: "Very High",
    schools: "9/10",
    climate: "Humid Subtropical",
    pros: ["Excellent public transportation", "Safe at all hours", "Amazing food scene", "Cultural experiences"],
    cons: ["Language barrier for non-Japanese speakers", "Very crowded", "High cost of living"],
  },
]

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            NeighborFit Global
          </Link>
          <Link href="/match">
            <Button variant="outline">New Search</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Global Neighborhood Matches</h1>
          <p className="text-gray-600">Based on your preferences, here are your top neighborhood matches worldwide</p>
        </div>

        <div className="space-y-6">
          {mockResults.map((result, index) => (
            <Card key={result.id} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      #{index + 1} {result.name}
                    </CardTitle>
                    <p className="text-gray-600">{result.city}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{result.score}%</div>
                    <div className="text-sm text-gray-500">Match Score</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Key Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Average Rent (2BR):</span>
                        <span className="font-medium">{result.rent}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commute Time:</span>
                        <span className="font-medium">{result.commute}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Safety Rating:</span>
                        <Badge
                          variant={result.safety === "Very High" || result.safety === "High" ? "default" : "secondary"}
                        >
                          {result.safety}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>School Rating:</span>
                        <span className="font-medium">{result.schools}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Climate:</span>
                        <Badge variant="outline">{result.climate}</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">Advantages</h5>
                        <ul className="text-sm space-y-1">
                          {result.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 mb-2">Considerations</h5>
                        <ul className="text-sm space-y-1">
                          {result.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-orange-500 mr-2">-</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">How These Matches Were Calculated</h3>
              <p className="text-gray-700 text-sm">
                Our algorithm analyzed your preferences and compared them against neighborhood data including safety
                statistics, cost of living, commute times, climate conditions, healthcare quality, educational
                institutions, and cultural amenities from cities worldwide. Each factor was weighted based on your
                stated priorities to generate personalized match scores.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
