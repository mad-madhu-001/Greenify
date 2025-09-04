import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, TreePine, Lightbulb, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Volunteers", color: "text-primary" },
    { icon: TreePine, number: "1,300+", label: "Trees Planted", color: "text-secondary" },
    { icon: Lightbulb, number: "500+", label: "Energy Projects", color: "text-accent" },
    { icon: Heart, number: "850+", label: "Supporters", color: "text-primary-glow" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={aboutImage}
                alt="People working together for the environment"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
            {/* Floating card */}
            <Card className="absolute -bottom-6 -right-6 p-6 bg-card shadow-glow border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Impact</div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">About EcoVibe</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Together We Can
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Save the Planet
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our mission is to drive positive change through sustainability. We empower 
                individuals and communities to make eco-friendly choices that benefit both 
                the planet and future generations.
              </p>
              <p>
                Our platform provides practical tools and insights to help you understand 
                and reduce your environmental impact, from calculating your carbon footprint 
                to exploring water and energy conservation strategies.
              </p>
              <p>
                We believe that every small step towards sustainability counts. Whether 
                you're looking to save energy, reduce waste, or embrace greener practices, 
                we offer resources designed to inspire and inform.
              </p>
            </div>

            <Button variant="default" size="lg" className="group">
              Learn More
              <TreePine className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 group">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-card flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;