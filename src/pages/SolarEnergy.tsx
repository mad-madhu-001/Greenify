import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Zap, DollarSign, Leaf, BarChart3, Home, Factory, Car } from "lucide-react";

const SolarEnergy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Sun className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solar Energy Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Harness the power of the sun for a sustainable and cost-effective energy future
            </p>
          </div>
        </div>
      </section>

      {/* Solar Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Solar Energy?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Zero emissions during operation, reducing your carbon footprint significantly</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reduce electricity bills by 70-90% and gain energy independence</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Reliable Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p>25+ year lifespan with minimal maintenance required</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Increases Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Solar panels can increase property value by 3-4%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Energy Consumption Data */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solar Energy Consumption & Usage</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Global Solar Capacity</h3>
              <Card className="bg-card shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span>Total Global Capacity</span>
                      <span className="font-bold text-primary">1,177 GW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Annual Growth Rate</span>
                      <span className="font-bold text-primary">22%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Jobs Created Globally</span>
                      <span className="font-bold text-primary">4.9 Million</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>CO₂ Avoided (2022)</span>
                      <span className="font-bold text-primary">1.2 Billion Tons</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Energy Production Facts</h3>
              <Card className="bg-card shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold mb-2">1 kW Solar System Produces:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 1,500-2,000 kWh annually</li>
                        <li>• Enough for 3-4 hours of home power daily</li>
                        <li>• Saves $200-400 annually on electricity</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Average Home (5kW System):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 7,500-10,000 kWh annually</li>
                        <li>• Covers 80-100% of electricity needs</li>
                        <li>• Saves $1,000-2,000 annually</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solar Energy Applications</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <Home className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Residential Solar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Perfect for homeowners looking to reduce electricity bills and carbon footprint.</p>
                <ul className="text-sm space-y-2">
                  <li>• Rooftop installations</li>
                  <li>• Battery storage options</li>
                  <li>• Smart home integration</li>
                  <li>• Net metering benefits</li>
                </ul>
                <div className="bg-primary/10 p-3 rounded">
                  <strong>Typical System:</strong> 3-8 kW<br/>
                  <strong>Cost:</strong> $15,000-40,000<br/>
                  <strong>Payback:</strong> 6-10 years
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <Factory className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Commercial Solar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Large-scale solutions for businesses and industrial facilities.</p>
                <ul className="text-sm space-y-2">
                  <li>• Ground-mounted systems</li>
                  <li>• Power purchase agreements</li>
                  <li>• Corporate sustainability goals</li>
                  <li>• Tax incentives and rebates</li>
                </ul>
                <div className="bg-secondary/10 p-3 rounded">
                  <strong>Typical System:</strong> 100 kW - 10 MW<br/>
                  <strong>Savings:</strong> 20-50% on electricity<br/>
                  <strong>ROI:</strong> 15-25%
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <Car className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Solar Mobility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Solar-powered transportation and charging solutions.</p>
                <ul className="text-sm space-y-2">
                  <li>• Electric vehicle charging</li>
                  <li>• Solar carports and canopies</li>
                  <li>• Public transportation systems</li>
                  <li>• Remote area applications</li>
                </ul>
                <div className="bg-accent/10 p-3 rounded">
                  <strong>EV Charging:</strong> 6-8 kW needed<br/>
                  <strong>Daily Range:</strong> 40-60 km solar powered<br/>
                  <strong>Benefit:</strong> Zero fuel costs
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solar Installation Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Site Assessment</h3>
                <p className="text-sm">Evaluate roof condition, shading, and energy needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">System Design</h3>
                <p className="text-sm">Custom design based on energy requirements and budget</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Installation</h3>
                <p className="text-sm">Professional installation typically takes 1-3 days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Grid Connection</h3>
                <p className="text-sm">Final inspections and utility interconnection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarEnergy;