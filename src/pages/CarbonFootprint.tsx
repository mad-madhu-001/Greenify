import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

const CarbonFootprint = () => {
  const [electricity, setElectricity] = useState("");
  const [gas, setGas] = useState("");
  const [car, setCar] = useState("");
  const [flights, setFlights] = useState("");
  const [totalEmissions, setTotalEmissions] = useState<number | null>(null);

  const calculateEmissions = () => {
    // CO2 emission factors (kg CO2 per unit)
    const electricityFactor = 0.5; // kg CO2 per kWh
    const gasFactor = 2.3; // kg CO2 per cubic meter
    const carFactor = 0.21; // kg CO2 per km
    const flightFactor = 0.115; // kg CO2 per km

    const electricityEmissions = parseFloat(electricity || "0") * electricityFactor * 12;
    const gasEmissions = parseFloat(gas || "0") * gasFactor * 12;
    const carEmissions = parseFloat(car || "0") * carFactor * 52;
    const flightEmissions = parseFloat(flights || "0") * flightFactor;

    const total = electricityEmissions + gasEmissions + carEmissions + flightEmissions;
    setTotalEmissions(Math.round(total));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Calculator className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Carbon Footprint Calculator
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Measure your environmental impact and discover ways to reduce your carbon dioxide emissions
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Calculate Your Annual CO₂ Emissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Electricity Usage (kWh)</label>
                    <Input
                      type="number"
                      placeholder="e.g. 300"
                      value={electricity}
                      onChange={(e) => setElectricity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Natural Gas (cubic meters)</label>
                    <Input
                      type="number"
                      placeholder="e.g. 50"
                      value={gas}
                      onChange={(e) => setGas(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Weekly Car Distance (km)</label>
                    <Input
                      type="number"
                      placeholder="e.g. 200"
                      value={car}
                      onChange={(e) => setCar(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Annual Flight Distance (km)</label>
                    <Input
                      type="number"
                      placeholder="e.g. 5000"
                      value={flights}
                      onChange={(e) => setFlights(e.target.value)}
                    />
                  </div>
                </div>
                
                <Button onClick={calculateEmissions} className="w-full">
                  Calculate My Carbon Footprint
                </Button>

                {totalEmissions !== null && (
                  <div className="mt-8 p-6 bg-gradient-card rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Your Annual CO₂ Emissions</h3>
                    <div className="text-3xl font-bold text-primary mb-4">
                      {totalEmissions.toLocaleString()} kg CO₂
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Global average: ~4,800 kg CO₂ per person per year</p>
                      <p>Target for climate goals: ~2,300 kg CO₂ per person per year</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Understanding CO₂ Emissions</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Global CO₂ emissions have increased by 50% since 1990, reaching over 36 billion tons annually.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Energy sector: 75% of emissions</li>
                  <li>• Transportation: 16% of emissions</li>
                  <li>• Agriculture: 24% of emissions</li>
                  <li>• Industrial processes: 21% of emissions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <AlertTriangle className="w-8 h-8 text-destructive mb-2" />
                <CardTitle>Climate Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  High CO₂ levels contribute to global warming and climate change effects.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Rising global temperatures</li>
                  <li>• Sea level rise</li>
                  <li>• Extreme weather events</li>
                  <li>• Ocean acidification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Reduction Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Simple changes can significantly reduce your carbon footprint.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Use renewable energy</li>
                  <li>• Improve home insulation</li>
                  <li>• Choose sustainable transport</li>
                  <li>• Reduce, reuse, recycle</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarbonFootprint;