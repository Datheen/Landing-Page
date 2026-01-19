import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Leaf, Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex bg-primary/10 rounded-full p-4 mb-6">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About VerdeVivo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate community dedicated to celebrating the beauty of nature and
              promoting sustainable living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex bg-accent/20 rounded-full p-4 mb-4">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Our Passion</h3>
              <p className="text-muted-foreground">
                We believe in the power of plants to transform spaces and lives
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex bg-secondary/20 rounded-full p-4 mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-muted-foreground">
                Bringing together plant lovers and nature enthusiasts worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex bg-primary/20 rounded-full p-4 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Inspiring sustainable practices and deeper connections with nature
              </p>
            </div>
          </div>

          <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                VerdeVivo was born from a simple love for plants and a desire to share
                that passion with the world. What started as a small personal garden has
                grown into a thriving community of nature enthusiasts.
              </p>
              <p>
                We believe that everyone can benefit from bringing more green into their
                lives, whether it's a single houseplant on a windowsill or a full
                backyard garden. Our mission is to make plant care accessible,
                sustainable living achievable, and nature appreciation a daily practice.
              </p>
              <p>
                Through our articles, guides, and community, we aim to inspire people to
                cultivate their own green spaces and develop a deeper connection with the
                natural world. Every plant has a story, and we're here to help you write
                yours.
              </p>
            </div>
          </div>

          <div className="bg-gradient-forest rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="font-heading text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl text-white/90 mb-6">
              Whether you're a seasoned gardener or just starting your plant journey,
              there's a place for you in our community.
            </p>
            <p className="text-white/80">
              Follow us on social media, subscribe to our newsletter, and let's grow
              together! 🌱
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
