import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Imprint = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">S</span>
            </div>
            <span className="text-foreground font-medium text-lg tracking-tight">Startup</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-16">
        <div className="container mx-auto max-w-2xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-8">
            Imprint
          </h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Company Information</h2>
              <p>Startup GmbH</p>
              <p>Sample Street 123</p>
              <p>12345 City, Country</p>
            </section>
            
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Contact</h2>
              <p>Email: hello@startup.com</p>
              <p>Phone: +1 234 567 890</p>
            </section>
            
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Legal Representative</h2>
              <p>John Doe, Managing Director</p>
            </section>
            
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Registration</h2>
              <p>Commercial Register: HRB 12345</p>
              <p>Registration Court: District Court City</p>
              <p>VAT ID: DE123456789</p>
            </section>
          </div>
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

export default Imprint;
