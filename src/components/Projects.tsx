import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, MessageCircle, Upload, X } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      image: project1,
      title: "Solar Panel Installation",
      likes: 245,
      shares: 32,
      comments: 18
    },
    {
      id: 2,
      image: project2,
      title: "Beach Cleanup Initiative",
      likes: 189,
      shares: 28,
      comments: 15
    },
    {
      id: 3,
      image: project3,
      title: "Wind Energy Project",
      likes: 321,
      shares: 45,
      comments: 22
    },
    {
      id: 4,
      image: project1,
      title: "Community Garden",
      likes: 156,
      shares: 19,
      comments: 12
    },
    {
      id: 5,
      image: project2,
      title: "Water Conservation",
      likes: 278,
      shares: 38,
      comments: 25
    },
    {
      id: 6,
      image: project3,
      title: "Renewable Energy Hub",
      likes: 334,
      shares: 52,
      comments: 31
    }
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log("File selected:", file.name);
    }
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Community Impact</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">"</span>
            Share Your Vision
            <span className="text-primary">"</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore inspiring environmental projects from our community and share your own 
            sustainable initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
                  onClick={() => handleImageClick(project.image)}
                />
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="icon"
                      variant="glass"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:scale-110"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="glass"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 hover:scale-110"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="glass"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 hover:scale-110"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-3">{project.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {project.likes}
                  </span>
                  <span className="flex items-center">
                    <Share2 className="w-4 h-4 mr-1" />
                    {project.shares}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {project.comments}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-card hover:shadow-card transition-all duration-300">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Share Your Impact</h3>
              <p className="text-muted-foreground mb-6">
                Upload photos of your environmental projects and inspire others
              </p>
            </div>
            
            <label htmlFor="projectUpload" className="cursor-pointer">
              <Button variant="default" size="lg" className="group">
                <Upload className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Upload Your Project
              </Button>
              <input
                id="projectUpload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
              />
            </label>
          </Card>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Project preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;