import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-foreground font-medium text-lg tracking-tight">mkind</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-tight mb-8">
            ​Automating the most critical jobs in industry.                
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">At mkind, we are building a fully flexible, intelligent robotic work cell for the hardest, most painful manual tasks: surface finishing, welding, and coating.</p>
          <p className="text-lg md:text-xl text-primary">
            Want to join us or have another request? Contact us at{" "}
            <a href="mailto:info@mkind.net" className="text-foreground hover:underline transition-colors duration-200">
              info@mkind.net
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border/50">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} mkind. All rights reserved.
          </p>
          <Link to="/imprint" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Imprint
          </Link>
        </div>
      </footer>
    </div>;
};
export default Index;