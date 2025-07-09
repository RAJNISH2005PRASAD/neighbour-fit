import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">NeighborFit Global</h1>
          <nav className="space-x-6">
            <Link href="/research" className="text-gray-600 hover:text-gray-800">
              Research
            </Link>
            <Link href="/algorithm" className="text-gray-600 hover:text-gray-800">
              Algorithm
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Neighborhood</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Match your lifestyle with neighborhoods worldwide using data-driven recommendations.
          </p>
          <Link href="/match">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Start Matching</Button>
          </Link>
        </div>

        {/* Simple Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Global Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Real neighborhood data from cities worldwide.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Smart Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Algorithm matches your preferences with neighborhood features.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Personalized</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Get recommendations based on your lifestyle needs.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
