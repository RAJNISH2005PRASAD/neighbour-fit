"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function MatchPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    family: "",
    work: "",
    city: "",
    budget: "",
    transport: "",
    currency: "",
    priorities: {
      safety: 5,
      commute: 5,
      cost: 5,
      schools: 5,
      healthcare: 5,
      culture: 5,
      climate: 5,
      nightlife: 5,
    },
    preferences: [],
    notes: "",
  })

  const handlePreferenceChange = (preference, checked) => {
    setFormData((prev) => ({
      ...prev,
      preferences: checked ? [...prev.preferences, preference] : prev.preferences.filter((p) => p !== preference),
    }))
  }

  const handleSubmit = () => {
    window.location.href = "/results"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            NeighborFit Global
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Global Match</h1>
          <p className="text-gray-600">
            Tell us about your preferences to get personalized neighborhood recommendations worldwide
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Step {step} of 4</CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Preferred City/Region</Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai, India</SelectItem>
                        <SelectItem value="delhi">Delhi, India</SelectItem>
                        <SelectItem value="bangalore">Bangalore, India</SelectItem>
                        <SelectItem value="chennai">Chennai, India</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad, India</SelectItem>
                        <SelectItem value="kolkata">Kolkata, India</SelectItem>
                        <SelectItem value="pune">Pune, India</SelectItem>
                        <SelectItem value="ahmedabad">Ahmedabad, India</SelectItem>
                        <SelectItem value="jaipur">Jaipur, India</SelectItem>
                        <SelectItem value="lucknow">Lucknow, India</SelectItem>
                        <SelectItem value="new-york">New York, USA</SelectItem>
                        <SelectItem value="london">London, UK</SelectItem>
                        <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                        <SelectItem value="sydney">Sydney, Australia</SelectItem>
                        <SelectItem value="toronto">Toronto, Canada</SelectItem>
                        <SelectItem value="berlin">Berlin, Germany</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="dubai">Dubai, UAE</SelectItem>
                        <SelectItem value="paris">Paris, France</SelectItem>
                        <SelectItem value="amsterdam">Amsterdam, Netherlands</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currency">Preferred Currency</Label>
                    <Select
                      value={formData.currency}
                      onValueChange={(value) => setFormData({ ...formData, currency: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="inr">INR (₹)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="age">Age Range</Label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({ ...formData, age: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18-25</SelectItem>
                        <SelectItem value="26-35">26-35</SelectItem>
                        <SelectItem value="36-45">36-45</SelectItem>
                        <SelectItem value="46-55">46-55</SelectItem>
                        <SelectItem value="55+">55+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="income">Household Income (Annual)</Label>
                    <Select
                      value={formData.income}
                      onValueChange={(value) => setFormData({ ...formData, income: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-30k">Under $30,000 / ₹25 Lakh</SelectItem>
                        <SelectItem value="30k-60k">$30,000 - $60,000 / ₹25-50 Lakh</SelectItem>
                        <SelectItem value="60k-100k">$60,000 - $100,000 / ₹50-80 Lakh</SelectItem>
                        <SelectItem value="100k-150k">$100,000 - $150,000 / ₹80 Lakh - 1.2 Crore</SelectItem>
                        <SelectItem value="above-150k">Above $150,000 / ₹1.2 Crore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="family">Family Type</Label>
                    <Select
                      value={formData.family}
                      onValueChange={(value) => setFormData({ ...formData, family: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select family type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="couple">Couple</SelectItem>
                        <SelectItem value="young-family">Young Family</SelectItem>
                        <SelectItem value="family-teens">Family with Teenagers</SelectItem>
                        <SelectItem value="empty-nesters">Empty Nesters</SelectItem>
                        <SelectItem value="retirees">Retirees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="work">Work Location/Type</Label>
                    <Input
                      placeholder="e.g., Downtown, Financial District, Remote, etc."
                      value={formData.work}
                      onChange={(e) => setFormData({ ...formData, work: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="transport">Preferred Transport</Label>
                    <Select
                      value={formData.transport}
                      onValueChange={(value) => setFormData({ ...formData, transport: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="How do you commute?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Personal Car</SelectItem>
                        <SelectItem value="public-transport">Public Transport</SelectItem>
                        <SelectItem value="bike">Bicycle</SelectItem>
                        <SelectItem value="walking">Walking</SelectItem>
                        <SelectItem value="rideshare">Rideshare/Taxi</SelectItem>
                        <SelectItem value="mixed">Mixed Transport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Monthly Housing Budget</Label>
                    <Input
                      placeholder="e.g., $2,500 or ₹50,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Rate Your Priorities (1-10)</h3>
                <p className="text-gray-600">How important are these factors for your ideal neighborhood?</p>

                <div className="space-y-4">
                  {Object.entries(formData.priorities).map(([key, value]) => {
                    const labels = {
                      safety: "Safety & Security",
                      commute: "Commute Time & Transportation",
                      cost: "Cost of Living",
                      schools: "Schools & Education",
                      healthcare: "Healthcare Quality",
                      culture: "Cultural Amenities & Diversity",
                      climate: "Climate & Weather",
                      nightlife: "Nightlife & Entertainment",
                    }

                    return (
                      <div key={key} className="flex items-center justify-between">
                        <Label className="w-48">{labels[key]}</Label>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <button
                              key={num}
                              type="button"
                              className={`w-8 h-8 rounded border ${value >= num ? "bg-blue-500 text-white" : "bg-white text-gray-600"}`}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  priorities: { ...formData.priorities, [key]: num },
                                })
                              }
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Lifestyle Preferences</h3>
                <p className="text-gray-600">Select amenities and features important to you</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "International cuisine options",
                    "Museums and galleries",
                    "Parks and green spaces",
                    "Fitness centers and gyms",
                    "Shopping centers and malls",
                    "Coffee shops and cafes",
                    "Public libraries",
                    "Live music venues",
                    "Farmers markets",
                    "Pet-friendly areas",
                    "Bike lanes and paths",
                    "Beach or waterfront access",
                    "Universities and colleges",
                    "Co-working spaces",
                    "International schools",
                    "Expat communities",
                    "24/7 convenience stores",
                    "Good internet connectivity",
                    "Delivery services",
                    "Parking availability",
                    "Low noise levels",
                    "Air quality monitoring",
                    "Emergency services nearby",
                    "Language diversity",
                  ].map((preference) => (
                    <div key={preference} className="flex items-center space-x-2">
                      <Checkbox
                        id={preference}
                        checked={formData.preferences.includes(preference)}
                        onCheckedChange={(checked) => handlePreferenceChange(preference, checked)}
                      />
                      <Label htmlFor={preference} className="text-sm">
                        {preference}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Additional Requirements</h3>

                <div>
                  <Label htmlFor="notes">Any specific requirements or preferences?</Label>
                  <Textarea
                    placeholder="e.g., need to be close to international airport, prefer English-speaking area, specific dietary requirements, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Your Preferences Summary:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      City: {formData.city}, Age: {formData.age}, Income: {formData.income}
                    </p>
                    <p>
                      Family: {formData.family}, Budget: {formData.budget} ({formData.currency})
                    </p>
                    <p>Transport: {formData.transport}</p>
                    <p>
                      Top Priorities:{" "}
                      {Object.entries(formData.priorities)
                        .sort(([, a], [, b]) => b - a)
                        .slice(0, 3)
                        .map(([key]) => key)
                        .join(", ")}
                    </p>
                    <p>Selected Preferences: {formData.preferences.length} items</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 1}>
                Previous
              </Button>

              {step < 4 ? (
                <Button onClick={() => setStep(step + 1)}>Next</Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
                  Get My Matches
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
