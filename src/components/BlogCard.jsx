import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BlogCard = ({
  id,
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        rotationY: -15,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(cardRef.current, {
              y: -10,
              duration: 0.2,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(cardRef.current, { y: 0, duration: 0.2 });
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Link to={`/post/${id}`} className="block group">
      <Card ref={cardRef} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <CardHeader className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="rounded-full px-3 bg-accent/20 text-accent-foreground border-accent/30">
              {category}
            </Badge>
          </div>
          <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>

        <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border/50 pt-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
