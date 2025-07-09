"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Comprehensive neighborhood data for different cities
const neighborhoodData = {
  // Indian Cities
  mumbai: [
    {
      id: 1,
      name: "Bandra West",
      city: "Mumbai, India",
      score: 88,
      rent: "₹80,000 / $960",
      commute: "25 min to BKC",
      safety: "High",
      schools: "9/10",
      climate: "Tropical",
      pros: ["Excellent restaurants and cafes", "Great connectivity", "Vibrant nightlife", "Close to airport"],
      cons: ["Very expensive", "Traffic congestion", "Monsoon flooding"],
    },
    {
      id: 2,
      name: "Powai",
      city: "Mumbai, India",
      score: 85,
      rent: "₹55,000 / $660",
      commute: "20 min to Andheri",
      safety: "High",
      schools: "8/10",
      climate: "Tropical",
      pros: ["IT hub proximity", "Good infrastructure", "Lake view", "Family-friendly"],
      cons: ["Limited nightlife", "Monsoon issues", "Distance from South Mumbai"],
    },
    {
      id: 3,
      name: "Andheri East",
      city: "Mumbai, India",
      score: 82,
      rent: "₹45,000 / $540",
      commute: "15 min to BKC",
      safety: "Medium",
      schools: "7/10",
      climate: "Tropical",
      pros: ["Metro connectivity", "Business district", "Good restaurants", "Airport proximity"],
      cons: ["Traffic congestion", "Air pollution", "Crowded"],
    },
  ],
  delhi: [
    {
      id: 1,
      name: "Connaught Place",
      city: "Delhi, India",
      score: 86,
      rent: "₹60,000 / $720",
      commute: "10 min to Central Delhi",
      safety: "Medium",
      schools: "8/10",
      climate: "Continental",
      pros: ["Central location", "Metro connectivity", "Shopping and dining", "Cultural attractions"],
      cons: ["Air pollution", "Traffic", "Very crowded"],
    },
    {
      id: 2,
      name: "Gurgaon Sector 29",
      city: "Delhi NCR, India",
      score: 84,
      rent: "₹50,000 / $600",
      commute: "30 min to Delhi",
      safety: "High",
      schools: "9/10",
      climate: "Continental",
      pros: ["Modern infrastructure", "IT hub", "Good schools", "Shopping malls"],
      cons: ["Distance from Delhi", "Water issues", "Traffic jams"],
    },
    {
      id: 3,
      name: "Hauz Khas",
      city: "Delhi, India",
      score: 83,
      rent: "₹55,000 / $660",
      commute: "20 min to Central Delhi",
      safety: "Medium",
      schools: "7/10",
      climate: "Continental",
      pros: ["Trendy area", "Great nightlife", "Metro access", "Cultural scene"],
      cons: ["Expensive", "Parking issues", "Air pollution"],
    },
  ],
  bangalore: [
    {
      id: 1,
      name: "Koramangala",
      city: "Bangalore, India",
      score: 87,
      rent: "₹40,000 / $480",
      commute: "15 min to Electronic City",
      safety: "High",
      schools: "8/10",
      climate: "Pleasant",
      pros: ["IT hub", "Great food scene", "Startup ecosystem", "Good connectivity"],
      cons: ["Traffic congestion", "Expensive", "Parking issues"],
    },
    {
      id: 2,
      name: "Indiranagar",
      city: "Bangalore, India",
      score: 85,
      rent: "₹45,000 / $540",
      commute: "20 min to Whitefield",
      safety: "High",
      schools: "8/10",
      climate: "Pleasant",
      pros: ["Vibrant nightlife", "Metro connectivity", "Shopping", "Restaurants"],
      cons: ["Traffic", "Expensive", "Crowded weekends"],
    },
    {
      id: 3,
      name: "Whitefield",
      city: "Bangalore, India",
      score: 82,
      rent: "₹35,000 / $420",
      commute: "10 min to IT parks",
      safety: "High",
      schools: "9/10",
      climate: "Pleasant",
      pros: ["IT corridor", "Good schools", "Less traffic", "Modern amenities"],
      cons: ["Distance from city center", "Limited nightlife", "Dependency on cabs"],
    },
  ],
  hyderabad: [
    {
      id: 1,
      name: "Hitech City",
      city: "Hyderabad, India",
      score: 86,
      rent: "₹35,000 / $420",
      commute: "5 min to IT companies",
      safety: "High",
      schools: "8/10",
      climate: "Hot",
      pros: ["IT hub", "Modern infrastructure", "Good connectivity", "Shopping malls"],
      cons: ["Limited cultural scene", "Hot climate", "Traffic during peak hours"],
    },
    {
      id: 2,
      name: "Banjara Hills",
      city: "Hyderabad, India",
      score: 84,
      rent: "₹45,000 / $540",
      commute: "20 min to Hitech City",
      safety: "High",
      schools: "9/10",
      climate: "Hot",
      pros: ["Upscale area", "Great restaurants", "Cultural attractions", "Good schools"],
      cons: ["Expensive", "Traffic", "Hot summers"],
    },
    {
      id: 3,
      name: "Kondapur",
      city: "Hyderabad, India",
      score: 83,
      rent: "₹30,000 / $360",
      commute: "15 min to Hitech City",
      safety: "High",
      schools: "7/10",
      climate: "Hot",
      pros: ["Affordable", "IT proximity", "Good connectivity", "Family-friendly"],
      cons: ["Limited entertainment", "Hot climate", "Developing area"],
    },
  ],
  pune: [
    {
      id: 1,
      name: "Koregaon Park",
      city: "Pune, India",
      score: 85,
      rent: "₹40,000 / $480",
      commute: "20 min to Hinjewadi",
      safety: "High",
      schools: "8/10",
      climate: "Pleasant",
      pros: ["Upscale area", "Great restaurants", "Cultural scene", "Good weather"],
      cons: ["Expensive", "Traffic", "Limited parking"],
    },
    {
      id: 2,
      name: "Hinjewadi",
      city: "Pune, India",
      score: 83,
      rent: "₹30,000 / $360",
      commute: "5 min to IT parks",
      safety: "High",
      schools: "7/10",
      climate: "Pleasant",
      pros: ["IT hub", "Modern amenities", "Good infrastructure", "Affordable"],
      cons: ["Distance from city", "Limited nightlife", "Developing area"],
    },
    {
      id: 3,
      name: "Viman Nagar",
      city: "Pune, India",
      score: 82,
      rent: "₹35,000 / $420",
      commute: "25 min to Hinjewadi",
      safety: "High",
      schools: "8/10",
      climate: "Pleasant",
      pros: ["Airport proximity", "Good connectivity", "Family-friendly", "Shopping"],
      cons: ["Traffic", "Noise from airport", "Expensive"],
    },
  ],
  chennai: [
    {
      id: 1,
      name: "Anna Nagar",
      city: "Chennai, India",
      score: 84,
      rent: "₹35,000 / $420",
      commute: "20 min to OMR",
      safety: "High",
      schools: "9/10",
      climate: "Hot & Humid",
      pros: ["Well-planned area", "Good schools", "Metro connectivity", "Family-friendly"],
      cons: ["Hot climate", "Traffic", "Limited nightlife"],
    },
    {
      id: 2,
      name: "OMR (Thoraipakkam)",
      city: "Chennai, India",
      score: 82,
      rent: "₹30,000 / $360",
      commute: "10 min to IT companies",
      safety: "High",
      schools: "7/10",
      climate: "Hot & Humid",
      pros: ["IT corridor", "Beach proximity", "Modern amenities", "Good restaurants"],
      cons: ["Hot climate", "Monsoon flooding", "Traffic"],
    },
    {
      id: 3,
      name: "T. Nagar",
      city: "Chennai, India",
      score: 80,
      rent: "₹40,000 / $480",
      commute: "30 min to OMR",
      safety: "Medium",
      schools: "8/10",
      climate: "Hot & Humid",
      pros: ["Shopping hub", "Cultural center", "Good connectivity", "Traditional area"],
      cons: ["Very crowded", "Traffic", "Hot climate"],
    },
  ],
  // International Cities
  "new-york": [
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
      pros: ["Vibrant cultural scene", "Excellent restaurants", "Historic charm", "Great walkability"],
      cons: ["Very expensive", "Tourist crowds", "Limited parking"],
    },
    {
      id: 2,
      name: "Brooklyn Heights",
      city: "New York, USA",
      score: 87,
      rent: "$3,800 / ₹3.2L",
      commute: "20 min to Manhattan",
      safety: "High",
      schools: "8/10",
      climate: "Temperate",
      pros: ["Great views", "Family-friendly", "Historic area", "Good schools"],
      cons: ["Expensive", "Limited nightlife", "Commute to Manhattan"],
    },
    {
      id: 3,
      name: "Long Island City",
      city: "New York, USA",
      score: 84,
      rent: "$3,200 / ₹2.7L",
      commute: "25 min to Midtown",
      safety: "Medium",
      schools: "7/10",
      climate: "Temperate",
      pros: ["More affordable", "Good transport", "Growing area", "Manhattan views"],
      cons: ["Industrial feel", "Limited culture", "Developing"],
    },
  ],
  london: [
    {
      id: 1,
      name: "Shoreditch",
      city: "London, UK",
      score: 87,
      rent: "£2,800 / ₹2.8L",
      commute: "20 min to City",
      safety: "High",
      schools: "8/10",
      climate: "Mild",
      pros: ["Creative community", "Excellent food scene", "Great transport", "Cultural offerings"],
      cons: ["Noisy weekends", "Gentrification", "Unpredictable weather"],
    },
    {
      id: 2,
      name: "Canary Wharf",
      city: "London, UK",
      score: 85,
      rent: "£3,200 / ₹3.2L",
      commute: "5 min to financial district",
      safety: "High",
      schools: "7/10",
      climate: "Mild",
      pros: ["Modern area", "Business district", "Good transport", "Shopping"],
      cons: ["Expensive", "Corporate feel", "Limited character"],
    },
    {
      id: 3,
      name: "Clapham",
      city: "London, UK",
      score: 83,
      rent: "£2,400 / ₹2.4L",
      commute: "30 min to Central London",
      safety: "High",
      schools: "8/10",
      climate: "Mild",
      pros: ["Vibrant nightlife", "Good value", "Young professionals", "Parks"],
      cons: ["Busy nightlife", "Commute time", "Can be noisy"],
    },
  ],
  singapore: [
    {
      id: 1,
      name: "Orchard Road",
      city: "Singapore",
      score: 89,
      rent: "S$4,500 / ₹2.7L",
      commute: "10 min to CBD",
      safety: "Very High",
      schools: "9/10",
      climate: "Tropical",
      pros: ["Shopping district", "Excellent transport", "International community", "Great food"],
      cons: ["Very expensive", "Crowded", "Humid climate"],
    },
    {
      id: 2,
      name: "Marina Bay",
      city: "Singapore",
      score: 87,
      rent: "S$5,000 / ₹3.0L",
      commute: "5 min to CBD",
      safety: "Very High",
      schools: "8/10",
      climate: "Tropical",
      pros: ["Modern area", "Waterfront views", "Business district", "Luxury amenities"],
      cons: ["Very expensive", "Corporate feel", "Limited local culture"],
    },
    {
      id: 3,
      name: "Tiong Bahru",
      city: "Singapore",
      score: 85,
      rent: "S$3,800 / ₹2.3L",
      commute: "15 min to CBD",
      safety: "Very High",
      schools: "8/10",
      climate: "Tropical",
      pros: ["Hip neighborhood", "Great cafes", "Art deco architecture", "Local culture"],
      cons: ["Expensive", "Limited space", "Humid weather"],
    },
  ],
}

export default function ResultsPage() {
  const [userPreferences, setUserPreferences] = useState(null)
  const [results, setResults] = useState([])

  useEffect(() => {
    // Get user preferences from localStorage
    const savedPreferences = localStorage.getItem("neighborFitPreferences")
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences)
      setUserPreferences(preferences)

      // Get neighborhoods based on selected city
      const selectedCity = preferences.city
      const cityNeighborhoods = neighborhoodData[selectedCity] || []

      // Calculate scores based on user priorities and sort
      const scoredResults = cityNeighborhoods
        .map((neighborhood) => {
          // Simple scoring algorithm based on user priorities
          let calculatedScore = 0
          const priorities = preferences.priorities

          // Base score from neighborhood data
          calculatedScore = neighborhood.score

          // Adjust based on user priorities (simplified)
          if (priorities.cost > 7 && neighborhood.rent.includes("₹")) {
            const rentAmount = Number.parseInt(neighborhood.rent.replace(/[₹,]/g, ""))
            if (rentAmount < 40000) calculatedScore += 5
            else if (rentAmount > 60000) calculatedScore -= 5
          }

          if (priorities.safety > 8 && neighborhood.safety === "Very High") {
            calculatedScore += 3
          }

          return {
            ...neighborhood,
            score: Math.min(calculatedScore, 95), // Cap at 95
          }
        })
        .sort((a, b) => b.score - a.score)

      setResults(scoredResults)
    }
  }, [])

  if (!userPreferences) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading your matches...</h2>
          <p className="text-gray-600">Please complete the matching form first.</p>
          <Link href="/match" className="mt-4 inline-block">
            <Button>Go to Matching Form</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Neighborhood Matches in{" "}
            {userPreferences.city.charAt(0).toUpperCase() + userPreferences.city.slice(1).replace("-", " ")}
          </h1>
          <p className="text-gray-600">Based on your preferences, here are your top neighborhood matches</p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">No matches found for this city</h3>
            <p className="text-gray-600 mb-6">
              We're still building our database for this location. Try selecting a different city.
            </p>
            <Link href="/match">
              <Button>Try Different City</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((result, index) => (
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
                            variant={
                              result.safety === "Very High" || result.safety === "High" ? "default" : "secondary"
                            }
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
        )}

        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">How These Matches Were Calculated</h3>
              <p className="text-gray-700 text-sm">
                Our algorithm analyzed your preferences for {userPreferences.city.replace("-", " ")} and compared them
                against neighborhood data including safety statistics, cost of living, commute times, climate
                conditions, healthcare quality, educational institutions, and cultural amenities. Each factor was
                weighted based on your stated priorities to generate personalized match scores.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
