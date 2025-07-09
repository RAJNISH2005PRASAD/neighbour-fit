import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, MapPin } from "lucide-react"
import Link from "next/link"

export default function DataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <nav className="border-b border-emerald-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">NeighborFit Global</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/research" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Research
              </Link>
              <Link href="/algorithm" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Algorithm
              </Link>
              <Link href="/data" className="text-emerald-600 font-medium">
                Data
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Global Data Infrastructure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive international data collection, processing, and integration system powering global neighborhood
            analysis
          </p>
        </div>

        <Tabs defaultValue="sources" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="quality">Quality Control</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
          </TabsList>

          <TabsContent value="sources" className="space-y-8">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-6 h-6 mr-2 text-emerald-600" />
                  Global Data Sources
                </CardTitle>
                <CardDescription>
                  Free and publicly available international data sources integrated into our system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-blue-900">World Bank Open Data</h4>
                      <Badge className="bg-blue-100 text-blue-800">International</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-blue-800">
                      <div>• Economic indicators</div>
                      <div>• Development metrics</div>
                      <div>• Population statistics</div>
                      <div>• Urban development data</div>
                      <div>• Infrastructure indices</div>
                    </div>
                    <div className="mt-4 flex justify-between text-xs">
                      <span className="text-blue-600">Update: Annual</span>
                      <span className="text-blue-600">Coverage: Global</span>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-red-900">Global Peace Index</h4>
                      <Badge className="bg-red-100 text-red-800">Security</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-red-800">
                      <div>• Safety rankings by country</div>
                      <div>• Crime statistics</div>
                      <div>• Political stability</div>
                      <div>• Regional security data</div>
                      <div>• Peace indicators</div>
                    </div>
                    <div className="mt-4 flex justify-between text-xs">
                      <span className="text-red-600">Update: Annual</span>
                      <span className="text-red-600">Coverage: 163 countries</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-green-900">WHO Health Statistics</h4>
                      <Badge className="bg-green-100 text-green-800">Healthcare</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-green-800">
                      <div>• Healthcare quality indices</div>
                      <div>• Hospital accessibility</div>
                      <div>• Health system performance</div>
                      <div>• Medical infrastructure</div>
                      <div>• Health outcomes data</div>
                    </div>
                    <div className="mt-4 flex justify-between text-xs">
                      <span className="text-green-600">Update: Quarterly</span>
                      <span className="text-green-600">Coverage: 194 countries</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="processing" className="space-y-8">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>Global Data Processing Pipeline</CardTitle>
                <CardDescription>How we handle and normalize international data from multiple sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Data Collection</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Automated API calls to international sources</li>
                        <li>• Multi-language data extraction</li>
                        <li>• Currency conversion and standardization</li>
                        <li>• Time zone normalization</li>
                        <li>• Data validation and error handling</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Normalization</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Universal 1-10 scoring scale</li>
                        <li>• Cultural context adjustments</li>
                        <li>• Climate factor integration</li>
                        <li>• Regional weighting algorithms</li>
                        <li>• Statistical outlier handling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quality" className="space-y-8">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>Quality Control Measures</CardTitle>
                <CardDescription>Ensuring data accuracy and reliability across global sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-green-600">95%</span>
                    </div>
                    <h4 className="font-semibold mb-2">Data Accuracy</h4>
                    <p className="text-sm text-gray-600">Cross-validated against multiple sources</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">24h</span>
                    </div>
                    <h4 className="font-semibold mb-2">Update Frequency</h4>
                    <p className="text-sm text-gray-600">Critical data refreshed daily</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">50+</span>
                    </div>
                    <h4 className="font-semibold mb-2">Cities Covered</h4>
                    <p className="text-sm text-gray-600">Major international metropolitan areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-8">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>Global Data Challenges</CardTitle>
                <CardDescription>Unique challenges in handling international data and our solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">Challenges</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inconsistent data standards across countries</li>
                      <li>• Multiple currencies and cost variations</li>
                      <li>• Language barriers in data sources</li>
                      <li>• Different measurement units and scales</li>
                      <li>• Varying update frequencies by region</li>
                      <li>• Cultural context missing from raw data</li>
                      <li>• Time zone coordination complexities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Solutions</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Universal data normalization pipeline</li>
                      <li>• Real-time currency conversion system</li>
                      <li>• Multi-language processing algorithms</li>
                      <li>• Standardized measurement conversions</li>
                      <li>• Intelligent refresh scheduling</li>
                      <li>• Cultural context integration from multiple sources</li>
                      <li>• Automated time zone handling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-8">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
                <CardDescription>Technical infrastructure supporting global data processing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Data Flow Architecture</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="bg-blue-500 text-white p-3 rounded-lg mb-2">
                          <span className="font-semibold">Collection</span>
                        </div>
                        <p className="text-xs text-gray-600">API calls to global sources</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-500 text-white p-3 rounded-lg mb-2">
                          <span className="font-semibold">Processing</span>
                        </div>
                        <p className="text-xs text-gray-600">Normalization & validation</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-500 text-white p-3 rounded-lg mb-2">
                          <span className="font-semibold">Storage</span>
                        </div>
                        <p className="text-xs text-gray-600">Structured data storage</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-orange-500 text-white p-3 rounded-lg mb-2">
                          <span className="font-semibold">Serving</span>
                        </div>
                        <p className="text-xs text-gray-600">API endpoints for matching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
