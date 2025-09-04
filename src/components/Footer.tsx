import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, MessageCircle, Send, Leaf } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#facebook" },
    { icon: Twitter, label: "Twitter", href: "#twitter" },
    { icon: MessageCircle, label: "WhatsApp", href: "#whatsapp" },
    { icon: Instagram, label: "Instagram", href: "#instagram" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Donate", href: "#donate" },
    { label: "Contact", href: "#contact" },
  ];

  const resources = [
    { label: "Environmental Tips", href: "#tips" },
    { label: "Sustainability Guide", href: "#guide" },
    { label: "Carbon Calculator", href: "#calculator" },
    { label: "Community", href: "#community" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="EcoVibe" className="h-10 w-auto" />
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  EcoVibe
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Driving positive change through sustainability. Together, we're building 
                a greener future for generations to come.
              </p>

              {/* Environmental Badge */}
              <div className="inline-flex items-center px-3 py-2 bg-primary/10 rounded-full">
                <Leaf className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Carbon Neutral</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <div className="flex flex-col space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Resources</h3>
              <div className="flex flex-col space-y-3">
                {resources.map((resource) => (
                  <a
                    key={resource.label}
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {resource.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
              
              {/* Newsletter */}
              <div>
                <p className="text-muted-foreground mb-4">
                  Get the latest updates on environmental initiatives and tips.
                </p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1 bg-background"
                  />
                  <Button size="icon" variant="default" className="shrink-0">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary/10 hover:border-primary/20 hover:text-primary"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 EcoVibe. All rights reserved. Made with 💚 for the planet.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;