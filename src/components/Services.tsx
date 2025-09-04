import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, TreePine, Lightbulb, Sun, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Let's make every drop of water count for the planet and future generations.",
      gradient: "from-blue-500 to-cyan-400",
      link: "#water"
    },
    {
      icon: TreePine,
      title: "Forest Protection", 
      description: "Trees give us oxygen, shelter, and food—let's give them protection in return.",
      gradient: "from-green-500 to-emerald-400",
      link: "#trees"
    },
    {
      icon: Lightbulb,
      title: "Energy Efficiency",
      description: "Small steps like saving energy lead to big environmental changes.",
      gradient: "from-yellow-500 to-orange-400", 
      link: "#energy"
    },
    {
      icon: Sun,
      title: "Solar Solutions",
      description: "From sunlight to savings—solar panels are a smart choice for the environment.",
      gradient: "from-orange-500 to-red-400",
      link: "#solar"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">"</span>
            Sustainable Solutions
            <span className="text-primary">"</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of environmental services designed to create 
            lasting positive impact on our planet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-6 relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary"
                  asChild
                >
                  <a href={service.link} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of others in creating positive environmental impact. 
              Every action counts towards a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;