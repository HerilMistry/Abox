
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TagFiltersProps = {
  tags: string[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
};

export function TagFilters({ tags, selectedTag, setSelectedTag }: TagFiltersProps) {
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null); // Deselect if the same tag is clicked again
    } else {
      setSelectedTag(tag);
    }
  };
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button
        variant={selectedTag === null ? "default" : "outline"}
        onClick={() => setSelectedTag(null)}
        className="transition-all duration-200"
        size="sm"
      >
        All Projects
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          onClick={() => handleTagClick(tag)}
          className="transition-all duration-200"
          size="sm"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}
