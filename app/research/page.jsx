import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ResearchPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Research & Problem Analysis</h1>
          <p className="text-gray-600">Understanding the neighborhood selection problem across international cities</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Global Problem Definition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h4 className="font-semibold text-red-800 mb-2">Core Problem</h4>
                  <p className="text-red-700">
                    Most people worldwide make neighborhood decisions based primarily on proximity to work and basic
                    housing costs, often ignoring crucial factors like cultural fit, climate adaptation, healthcare
                    quality, safety variations, and long-term lifestyle satisfaction, leading to relocation regret and
                    daily stress.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Issues Identified</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 71% prioritize only rent and commute distance</li>
                      <li>• Limited awareness of cultural integration challenges</li>
                      <li>• No systematic evaluation of climate adaptation</li>
                      <li>• Healthcare quality differences often ignored</li>
                      <li>• High international relocation rates within 2 years (48%)</li>
                      <li>• Language and cultural barriers underestimated</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Research Questions</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• What factors matter most across different cultures?</li>
                      <li>• How do preferences vary by nationality and age?</li>
                      <li>• What role does cultural adaptation play?</li>
                      <li>• How important is expat community presence?</li>
                      <li>• Can algorithmic matching improve global outcomes?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>International User Research Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Research Methodology</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-800">Global Interviews</h5>
                      <p className="text-blue-700 text-sm">80+ in-depth interviews across NYC, London, Tokyo, Sydney</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <h5 className="font-semibold text-green-800">International Surveys</h5>
                      <p className="text-green-700 text-sm">400+ online survey responses from 15 major cities</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded">
                      <h5 className="font-semibold text-purple-800">Platform Analysis</h5>
                      <p className="text-purple-700 text-sm">
                        Existing solution analysis (Numbeo, Expatistan, local platforms)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Findings</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">Top Priority Factors (Global Average)</h5>
                      <ol className="space-y-1 text-gray-700">
                        <li>1. Safety & Security (9.1/10)</li>
                        <li>2. Healthcare Quality (8.8/10)</li>
                        <li>3. Commute & Transportation (8.6/10)</li>
                        <li>4. Cost of Living (8.4/10)</li>
                        <li>5. Cultural Integration (7.9/10)</li>
                        <li>6. Climate Comfort (7.6/10)</li>
                        <li>7. Education Quality (7.3/10)</li>
                        <li>8. Language Accessibility (6.8/10)</li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Current Research Methods</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Online property sites only: 68%</li>
                        <li>• Single neighborhood visit: 52%</li>
                        <li>• Expat forums and groups: 45%</li>
                        <li>• Ask colleagues/friends: 41%</li>
                        <li>• Social media research: 38%</li>
                        <li>• Data-driven analysis: 14%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
