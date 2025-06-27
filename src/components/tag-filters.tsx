"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TagFiltersProps = {
  tags: string[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  layout?: 'default' | 'sidebar';
};

export function TagFilters({ tags, selectedTag, setSelectedTag, layout = 'default' }: TagFiltersProps) {
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null); // Deselect if the same tag is clicked again
    } else {
      setSelectedTag(tag);
    }
  };
  
  const containerClasses = layout === 'sidebar' ? "flex flex-col items-start gap-1" : "flex flex-wrap gap-2 justify-center";
  const buttonClasses = layout === 'sidebar' ? "w-full justify-start" : "";

  return (
    <div className={containerClasses}>
      <h3 className="px-2 py-1 text-sm font-semibold text-muted-foreground">Filters</h3>
      <Button
        variant={selectedTag === null ? "secondary" : "ghost"}
        onClick={() => setSelectedTag(null)}
        className={cn("transition-all duration-200", buttonClasses)}
        size="sm"
      >
        All Projects
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "secondary" : "ghost"}
          onClick={() => handleTagClick(tag)}
          className={cn("transition-all duration-200", buttonClasses)}
          size="sm"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}
