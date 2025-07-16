import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center font-poppins relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 px-8 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          Marwen Maliou
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide">
          Full-Stack Developer & Designer
        </p>
        
        <Button 
          variant="hero" 
          size="lg" 
          className="text-lg px-8 py-4 h-auto rounded-full"
        >
          View My Projects
        </Button>
      </div>
    </div>
  );
};

export default Index;
