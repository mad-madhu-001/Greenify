import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Leaf className="text-primary-glow w-8 h-8 opacity-70" />
      </div>
      <div className="absolute bottom-32 right-16 animate-pulse">
        <Leaf className="text-accent w-6 h-6 opacity-50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full border border-primary/30">
          <Leaf className="w-4 h-4 text-primary-glow mr-2" />
          <span className="text-sm font-medium text-primary-foreground">
            Join the Movement
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Save Earth,
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Save Lives
          </span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          We don't inherit the Earth from our ancestors — we borrow it from our children. 
          Join us in creating a sustainable future for generations to come.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            Embrace Life
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="xl">
            Learn More
          </Button>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "10K+", label: "Volunteers" },
            { number: "1.3K+", label: "Trees Planted" },
            { number: "500+", label: "Energy Saved" },
            { number: "850+", label: "Supporters" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;