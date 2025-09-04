import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Leaf, Droplets, Wind, Users, Globe, Heart, Sprout } from "lucide-react";

const TreeConservation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <TreePine className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trees: Earth's Guardians
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover the vital role trees play in our ecosystem and learn how to protect and nurture them
            </p>
          </div>
        </div>
      </section>

      {/* Why Trees Matter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Trees Are Essential</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Wind className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Oxygen Production</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">20%</div>
                <p>of Earth's oxygen comes from trees. One large tree produces enough oxygen for 2 people per day.</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Carbon Absorption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">48 lbs</div>
                <p>of CO₂ absorbed annually by a mature tree, helping combat climate change.</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Biodiversity Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">80%</div>
                <p>of terrestrial biodiversity depends on forests for habitat and survival.</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Climate Regulation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">9°F</div>
                <p>cooler temperatures in areas with tree cover, providing natural air conditioning.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tree Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Tree Benefits</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <Leaf className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Environmental Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Air Purification:</strong> Filter pollutants and improve air quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Water Cycle:</strong> Regulate water flow and prevent erosion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Soil Protection:</strong> Prevent soil erosion with root systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Noise Reduction:</strong> Act as natural sound barriers</span>
                  </li>
                </ul>
                
                <div className="p-3 bg-primary/10 rounded">
                  <strong>Impact:</strong> A single tree can intercept over 15,000 gallons of rainwater per year
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Health & Social Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span><strong>Mental Health:</strong> Reduce stress and improve well-being</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span><strong>Physical Health:</strong> Encourage outdoor activities and exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span><strong>Community Spaces:</strong> Create gathering areas and parks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span><strong>Property Value:</strong> Increase real estate values by 10-15%</span>
                  </li>
                </ul>
                
                <div className="p-3 bg-secondary/10 rounded">
                  <strong>Research:</strong> Patients with views of trees recover 36% faster from surgery
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <Sprout className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Economic Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span><strong>Energy Savings:</strong> Reduce cooling costs by up to 50%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span><strong>Job Creation:</strong> Forestry and urban forestry employment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span><strong>Tourism:</strong> Attract visitors to natural areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span><strong>Resources:</strong> Provide timber, fruits, and other products</span>
                  </li>
                </ul>
                
                <div className="p-3 bg-accent/10 rounded">
                  <strong>ROI:</strong> Every $1 invested in urban trees returns $2.25 in benefits
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tree Types & Uses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tree Types & Their Special Purposes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle>Fast-Growing Trees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Perfect for quick carbon sequestration and shade</p>
                
                <div className="space-y-3">
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Hybrid Poplar</h4>
                    <p className="text-sm">Growth: 5-8 ft/year • Lifespan: 30-50 years</p>
                    <p className="text-xs text-muted-foreground">Excellent for carbon absorption and biomass</p>
                  </div>
                  
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Willow</h4>
                    <p className="text-sm">Growth: 3-6 ft/year • Lifespan: 40-75 years</p>
                    <p className="text-xs text-muted-foreground">Great for erosion control and wetland restoration</p>
                  </div>
                  
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Eastern Cottonwood</h4>
                    <p className="text-sm">Growth: 3-5 ft/year • Lifespan: 70-100 years</p>
                    <p className="text-xs text-muted-foreground">Excellent windbreak and wildlife habitat</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle>Fruit & Nut Trees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Provide food while supporting the environment</p>
                
                <div className="space-y-3">
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Apple Trees</h4>
                    <p className="text-sm">Yield: 30-50 years • CO₂: 48 lbs/year</p>
                    <p className="text-xs text-muted-foreground">Support pollinators and provide healthy food</p>
                  </div>
                  
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Walnut Trees</h4>
                    <p className="text-sm">Yield: 50-100 years • Value: High timber</p>
                    <p className="text-xs text-muted-foreground">Long-term investment with multiple benefits</p>
                  </div>
                  
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Fig Trees</h4>
                    <p className="text-sm">Yield: 30-50 years • Growth: Moderate</p>
                    <p className="text-xs text-muted-foreground">Drought-resistant with year-round productivity</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle>Native & Adaptive Trees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Best adapted to local climate and ecosystem</p>
                
                <div className="space-y-3">
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Oak Trees</h4>
                    <p className="text-sm">Lifespan: 200-300 years • Wildlife: 500+ species</p>
                    <p className="text-xs text-muted-foreground">Keystone species supporting entire ecosystems</p>
                  </div>
                  
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Maple Trees</h4>
                    <p className="text-sm">Syrup production • Fall colors • Shade</p>
                    <p className="text-xs text-muted-foreground">Beautiful landscaping with economic value</p>
                  </div>
                  
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Pine Trees</h4>
                    <p className="text-sm">Evergreen • Year-round oxygen • Timber value</p>
                    <p className="text-xs text-muted-foreground">Continuous air purification and carbon storage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conservation Actions */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Support Tree Conservation</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Individual Actions</h3>
                <div className="space-y-4">
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">🌱 Plant Trees</h4>
                      <p className="text-sm">Plant native species in your yard or participate in community planting events. Choose the right tree for the right place.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">♻️ Reduce Paper Use</h4>
                      <p className="text-sm">Go digital, recycle paper products, and choose recycled paper when printing is necessary.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">🛡️ Support Conservation</h4>
                      <p className="text-sm">Donate to forestry organizations and vote for policies that protect existing forests.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">🌿 Choose Sustainable Products</h4>
                      <p className="text-sm">Buy FSC-certified wood products and avoid products that contribute to deforestation.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Community Initiatives</h3>
                <div className="space-y-4">
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">🏘️ Urban Forest Programs</h4>
                      <p className="text-sm">Support city tree planting initiatives and advocate for green infrastructure in urban planning.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">🎓 Education & Awareness</h4>
                      <p className="text-sm">Organize workshops about tree care and the importance of forest conservation in your community.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">👥 Tree Adoption Programs</h4>
                      <p className="text-sm">Create programs where individuals or businesses can adopt and care for specific trees in public spaces.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card shadow-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">🌳 Reforestation Projects</h4>
                      <p className="text-sm">Participate in large-scale reforestation efforts to restore damaged ecosystems and expand forest coverage.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Care Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tree Care & Maintenance</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle>Planting Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Timing:</strong> Plant in fall or early spring when trees are dormant</li>
                    <li>• <strong>Location:</strong> Consider mature size, sunlight, and proximity to structures</li>
                    <li>• <strong>Soil:</strong> Ensure proper drainage and soil pH for the species</li>
                    <li>• <strong>Depth:</strong> Plant at same depth as in the container or nursery</li>
                    <li>• <strong>Spacing:</strong> Allow adequate space for root and canopy expansion</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-card">
                <CardHeader>
                  <CardTitle>Ongoing Care</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Watering:</strong> Deep, infrequent watering is better than frequent shallow watering</li>
                    <li>• <strong>Mulching:</strong> Apply 2-4 inches around base, keeping away from trunk</li>
                    <li>• <strong>Pruning:</strong> Remove dead/diseased branches; prune for structure when young</li>
                    <li>• <strong>Protection:</strong> Guard against pests, diseases, and physical damage</li>
                    <li>• <strong>Monitoring:</strong> Regular health checks and professional assessment when needed</li>
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

export default TreeConservation;