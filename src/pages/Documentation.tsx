import { ChevronRight, Github, Book, Zap, Users, Code2 } from 'lucide-react';
import { CodeSnippet } from '@/components/CodeSnippet';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full border-r border-border bg-card">
        <div className="p-6">
          <h3 className="font-semibold mb-4">Getting Started</h3>
          <nav className="space-y-2">
            <a href="#installation" className="block text-muted-foreground hover:text-foreground">Installation</a>
            <a href="#project-structure" className="block text-muted-foreground hover:text-foreground">Project Structure</a>
            <a href="#features" className="block text-muted-foreground hover:text-foreground">Features</a>
          </nav>
          
          <h3 className="font-semibold mt-8 mb-4">Building Your Application</h3>
          <nav className="space-y-2">
            <a href="#routing" className="block text-muted-foreground hover:text-foreground">Routing</a>
            <a href="#data-fetching" className="block text-muted-foreground hover:text-foreground">Data Fetching</a>
            <a href="#authentication" className="block text-muted-foreground hover:text-foreground">Authentication</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Introduction</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Welcome to the Exo CLI documentation!
        </p>

        <section id="what-is-exo" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What is Exo CLI?</h2>
          <p className="text-muted-foreground mb-6">
            Exo CLI is a powerful command-line tool for building full-stack web applications. You use React
            components to build user interfaces, and Exo CLI provides additional features and
            optimizations out of the box.
          </p>
          <p className="text-muted-foreground mb-6">
            Under the hood, Exo CLI abstracts and automatically configures tooling needed for
            React, like bundling, compiling, and more. This allows you to focus on building your
            application instead of spending time with configuration.
          </p>
          <CodeSnippet
            code="# Create a new project
exo create my-app
cd my-app

# Start development server
npm run dev"
            className="mb-8"
          />
        </section>

        <section id="main-features" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Main Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-border">
              <Zap className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Zero Config</h3>
              <p className="text-muted-foreground">Automatic compilation and bundling. No configuration needed.</p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <Code2 className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2">TypeScript Support</h3>
              <p className="text-muted-foreground">Built-in TypeScript support with optimized configuration.</p>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between py-8 border-t border-border">
          <a href="/" className="text-primary hover:text-primary/90">
            ← Back to Home
          </a>
          <a
            href="https://github.com/your-repo/exo-cli"
            className="flex items-center text-muted-foreground hover:text-foreground"
          >
            <Github className="w-4 h-4 mr-2" />
            Edit this page on GitHub
          </a>
        </div>
      </div>

      {/* Right Sidebar - Table of Contents */}
      <div className="fixed right-0 top-0 w-64 h-full p-6 border-l border-border">
        <h4 className="font-semibold mb-4">On this page</h4>
        <nav className="space-y-2">
          <a href="#what-is-exo" className="block text-sm text-muted-foreground hover:text-foreground">What is Exo CLI?</a>
          <a href="#main-features" className="block text-sm text-muted-foreground hover:text-foreground">Main Features</a>
          <a href="#installation" className="block text-sm text-muted-foreground hover:text-foreground">Installation</a>
        </nav>
      </div>
    </div>
  );
};

export default Documentation;