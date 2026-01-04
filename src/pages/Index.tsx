import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">S</span>
            </div>
            <span className="text-foreground font-medium text-lg tracking-tight">Startup</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-tight mb-8">
            Building the Future of Innovation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're crafting something extraordinary. Our team is dedicated to revolutionizing the way 
            you experience technology. Stay tuned as we prepare to launch a product that will transform 
            your digital landscape.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border/50">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Startup. All rights reserved.
          </p>
          <Link 
            to="/imprint" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Imprint
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
