import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            NeighborFit Global
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">About This Project</h1>
          <p className="text-gray-600">
            A systematic approach to solving the neighborhood-lifestyle matching problem globally
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  NeighborFit Global was built as a solution to the international neighborhood selection problem - the
                  fact that most people worldwide make crucial housing decisions based primarily on rent affordability
                  and office proximity, often ignoring factors like cultural adaptation, healthcare quality, climate
                  compatibility, and long-term lifestyle satisfaction.
                </p>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Project Goals</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Identify neighborhood selection problems across global cities</li>
                    <li>• Analyze existing international property platforms and gaps</li>
                    <li>• Develop hypotheses about cross-cultural lifestyle preferences</li>
                    <li>• Build a globally-applicable matching algorithm</li>
                    <li>• Handle international data collection challenges</li>
                    <li>• Consider cultural and climate factors in recommendations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technology Stack</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <h5 className="font-semibold">Frontend</h5>
                      <p className="text-sm text-gray-600">React, Next.js, Tailwind CSS</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <h5 className="font-semibold">Global Data Sources</h5>
                      <p className="text-sm text-gray-600">World Bank, WHO, UNESCO, OpenStreetMap</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <h5 className="font-semibold">Processing</h5>
                      <p className="text-sm text-gray-600">Cultural algorithms, climate adjustments</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Global Features</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Multi-cultural compatibility matching</li>
                    <li>• Climate and weather adaptation assessment</li>
                    <li>• International healthcare quality integration</li>
                    <li>• Multi-currency cost comparison</li>
                    <li>• Cross-cultural community preferences</li>
                    <li>• Global education and expat considerations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
