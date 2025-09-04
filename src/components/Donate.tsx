import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Leaf, ArrowRight } from "lucide-react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const donationAmounts = [
    { value: "5", label: "₹5 - Plant a Seed" },
    { value: "10", label: "₹10 - Support Education" },
    { value: "25", label: "₹25 - Fund Research" },
    { value: "50", label: "₹50 - Clean Water Access" },
    { value: "100", label: "₹100 - Solar Panel Fund" },
    { value: "custom", label: "Custom Amount" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation submitted:", { ...formData, amount: selectedAmount });
    // Handle form submission
  };

  return (
    <section id="donate" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Leaf className="text-primary/20 w-24 h-24" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce">
        <Heart className="text-secondary/20 w-16 h-16" />
      </div>

      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Support Our Mission</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">"</span>
            Donate for Change
            <span className="text-primary">"</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your contribution helps us create lasting environmental impact. 
            Every donation, no matter the size, makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video/Impact Section */}
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-elegant">
              <div className="relative bg-gradient-hero h-64 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="w-20 h-20 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Your Impact Matters</h3>
                  <p className="text-primary-foreground/80">
                    See how your donation creates real change
                  </p>
                </div>
              </div>
            </Card>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">₹50</div>
                <div className="text-sm text-muted-foreground">Plants 10 Trees</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="text-2xl font-bold text-secondary mb-2">₹100</div>
                <div className="text-sm text-muted-foreground">1 Solar Panel</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="text-2xl font-bold text-accent mb-2">₹25</div>
                <div className="text-sm text-muted-foreground">Clean Water</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="text-2xl font-bold text-primary-glow mb-2">₹5</div>
                <div className="text-sm text-muted-foreground">Education Kit</div>
              </Card>
            </div>
          </div>

          {/* Donation Form */}
          <Card className="p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Email and Amount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Donation Amount
                  </label>
                  <Select value={selectedAmount} onValueChange={setSelectedAmount}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select amount" />
                    </SelectTrigger>
                    <SelectContent>
                      {donationAmounts.map((amount) => (
                        <SelectItem key={amount.value} value={amount.value}>
                          {amount.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message (Optional)
                </label>
                <Textarea
                  placeholder="Share why you're supporting our mission..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-background min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
                disabled={!selectedAmount || !formData.email}
              >
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your donation is secure and will be used directly for environmental projects.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Donate;