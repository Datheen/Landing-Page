import { Leaf, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                VerdeVivo
              </span>
            </div>
            <p className="text-muted-foreground">
              Exploring the beauty of nature, one leaf at a time.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@verdevivo.blog"
                className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VerdeVivo Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
