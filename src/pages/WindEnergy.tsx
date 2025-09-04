import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Zap, Globe, TrendingUp, MapPin, Settings, Users, Leaf } from "lucide-react";

const WindEnergy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Wind className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wind Energy Power
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Harness the endless power of wind for clean, renewable energy generation
            </p>
          </div>
        </div>
      </section>

      {/* Wind Energy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Wind Energy at a Glance</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Global Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">906 GW</div>
                <p>Total installed wind capacity worldwide</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Annual Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">13%</div>
                <p>Year-over-year capacity growth rate</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Jobs Created</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">1.3M</div>
                <p>Jobs in the wind energy sector globally</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>CO₂ Avoided</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">1.1B tons</div>
                <p>Annual CO₂ emissions avoided</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Wind Energy Works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Wind Energy Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">The Wind Energy Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Wind Capture</h4>
                      <p className="text-muted-foreground">Large turbine blades (50-80m long) capture kinetic energy from moving air</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">Rotation Conversion</h4>
                      <p className="text-muted-foreground">Aerodynamic blades rotate at 15-50 RPM, turning the main shaft</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Speed Increase</h4>
                      <p className="text-muted-foreground">Gearbox increases rotation speed to 1,000-1,800 RPM for the generator</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                    <div>
                      <h4 className="font-semibold mb-2">Electricity Generation</h4>
                      <p className="text-muted-foreground">Generator converts mechanical energy to electrical energy (AC)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">5</div>
                    <div>
                      <h4 className="font-semibold mb-2">Grid Connection</h4>
                      <p className="text-muted-foreground">Transformer converts voltage for transmission through power lines</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle>Wind Turbine Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/10 rounded">
                      <div className="text-sm text-muted-foreground">Height</div>
                      <div className="font-bold">80-150m</div>
                    </div>
                    <div className="p-3 bg-secondary/10 rounded">
                      <div className="text-sm text-muted-foreground">Blade Length</div>
                      <div className="font-bold">35-80m</div>
                    </div>
                    <div className="p-3 bg-accent/10 rounded">
                      <div className="text-sm text-muted-foreground">Capacity</div>
                      <div className="font-bold">1.5-15 MW</div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded">
                      <div className="text-sm text-muted-foreground">Lifespan</div>
                      <div className="font-bold">20-25 years</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Optimal Wind Conditions:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cut-in speed: 6-9 mph</li>
                      <li>• Rated speed: 31-35 mph</li>
                      <li>• Cut-out speed: 55-65 mph</li>
                      <li>• Capacity factor: 25-50%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Wind Energy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Wind Energy Systems</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Onshore Wind</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Land-based wind farms are the most common and cost-effective wind energy solution.</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Advantages:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Lower installation costs</li>
                    <li>• Easier maintenance access</li>
                    <li>• Proven technology</li>
                    <li>• Faster development</li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-3 rounded">
                  <strong>Typical Cost:</strong> $1,200-1,700/kW<br/>
                  <strong>Capacity Factor:</strong> 25-35%<br/>
                  <strong>Turbine Size:</strong> 2-3 MW
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <Globe className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Offshore Wind</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Ocean-based wind farms benefit from stronger, more consistent winds.</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Advantages:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Higher wind speeds</li>
                    <li>• More consistent winds</li>
                    <li>• Larger turbines possible</li>
                    <li>• Less visual impact</li>
                  </ul>
                </div>

                <div className="bg-secondary/10 p-3 rounded">
                  <strong>Typical Cost:</strong> $3,000-5,000/kW<br/>
                  <strong>Capacity Factor:</strong> 40-50%<br/>
                  <strong>Turbine Size:</strong> 8-15 MW
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <Settings className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Distributed Wind</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Small-scale wind systems for residential, commercial, and community use.</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Residential properties</li>
                    <li>• Small businesses</li>
                    <li>• Remote communities</li>
                    <li>• Agricultural operations</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-3 rounded">
                  <strong>Typical Cost:</strong> $3,000-8,000/kW<br/>
                  <strong>Capacity Factor:</strong> 15-35%<br/>
                  <strong>Turbine Size:</strong> 1-100 kW
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Environmental Benefits</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-6 h-6 text-primary" />
                    Emissions Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>CO₂ Emissions</span>
                      <span className="font-bold text-primary">11 g/kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>vs. Coal</span>
                      <span className="text-muted-foreground">820 g/kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>vs. Natural Gas</span>
                      <span className="text-muted-foreground">490 g/kWh</span>
                    </div>
                  </div>
                  <div className="p-3 bg-primary/10 rounded">
                    <strong>1 MW wind turbine</strong> prevents ~2,600 tons of CO₂ annually
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    Resource Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>No water consumption for operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Minimal land footprint (1-3% of wind farm area)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Compatible with agriculture and grazing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>85-90% of materials are recyclable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WindEnergy;