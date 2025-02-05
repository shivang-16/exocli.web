import { Zap, Box, Lock, Mail } from 'lucide-react';
import { CodeSnippet } from '@/components/CodeSnippet';
import { FeatureCard } from '@/components/FeatureCard';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Exo CLI
        </h1>
        <p className="typing-demo text-xl md:text-2xl mb-8 text-muted-foreground">
          Full-stack projects in seconds
        </p>
        <CodeSnippet
          code="npm install -g exo-cli"
          className="mb-8 max-w-lg mx-auto"
        />
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#features"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#docs"
            className="px-6 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            Documentation
          </a>
        </div>
      </section>

      {/* IDE and Installation Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">INSTALL VIA CLI</h2>
          <p className="text-muted-foreground">
            Get started with Exo CLI in seconds. Our command-line tool makes it easy to scaffold full-stack projects with all the features you need.
          </p>
          <CodeSnippet
            code="$ apm install exo-cli-syntax"
            className="mb-4"
          />
          <a
            href="#download"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            DOWNLOAD
          </a>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/lovable-uploads/ec11926c-a627-45e7-81b5-d9137119668a.png"
            alt="Code IDE Screenshot"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            Icon={Zap}
            title="Lightning Fast"
            description="Scaffold a full-stack project in seconds with best practices built-in"
          />
          <FeatureCard
            Icon={Box}
            title="All-in-One"
            description="Express, authentication, database, and more - all preconfigured"
          />
          <FeatureCard
            Icon={Lock}
            title="Secure Auth"
            description="Built-in authentication with JWT and secure session management"
          />
          <FeatureCard
            Icon={Mail}
            title="Mail Ready"
            description="Integrated email system for notifications and verification"
          />
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="docs" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Start</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <CodeSnippet
            code="# Create a new project
exo create my-app
cd my-app

# Start development server
npm run dev"
          />
          <p className="text-center text-muted-foreground">
            Visit our{" "}
            <a href="#" className="text-primary hover:underline">
              documentation
            </a>{" "}
            for more examples and guides.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;