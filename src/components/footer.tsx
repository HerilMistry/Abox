
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl font-headline">Abox</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Modern project showcase with AI-powered tagging.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
             <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary"><Github /></Link>
              <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abox Reimagined. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
