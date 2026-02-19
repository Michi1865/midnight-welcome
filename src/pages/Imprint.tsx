import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Imprint = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <span className="text-foreground font-medium text-lg tracking-tight">mkind</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-16">
        <div className="container mx-auto max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-8">
            Imprint
          </h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Angaben gemäß § 5 DDG</h2>
              <p>Michael Sauer  
Freddie-Mercury-Straße 5
            </p>
              <p>80797 München
Deutschland</p>
              
            </section>
            
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Kontakt</h2>
              <p>E-Mail: info@mkind.com</p>
              
            </section>
            
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
              <p>Michael Sauer</p>
            </section>
            
            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">Verbraucherstreitbeilegung (§ 36 VSBG):</h2>
              
              <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              
            </section>
          </div>
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
    </div>;};export default Imprint;