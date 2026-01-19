import { Button } from "./ui/button";

const categories = [
  { id: "all", label: "All Posts" },
  { id: "indoor", label: "Indoor Plants" },
  { id: "garden", label: "Garden Tips" },
  { id: "sustainability", label: "Sustainability" },
  { id: "wildlife", label: "Wildlife" },
];

export const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className="rounded-full"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};
