
'use client';

import { useState, useMemo } from 'react';
import { allTags, projects } from '@/lib/projects';
import { ProjectCard } from '@/components/project-card';
import { TagFilters } from '@/components/tag-filters';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AITagSuggester } from '@/components/ai-tag-suggester';
import { Wand2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (selectedTag) {
      result = result.filter((project) => project.tags.includes(selectedTag));
    }

    if (searchQuery.trim() !== '') {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(lowerCaseQuery) ||
          project.description.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    return result;
  }, [selectedTag, searchQuery]);

  return (
    <main className="container mx-auto px-4 py-8 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
          Projects Showcase
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          A curated collection of modern web projects. Explore, learn, and get inspired.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search projects..." 
            className="pl-9 h-10 w-full" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto shrink-0">
              <Wand2 className="mr-2 h-4 w-4" />
              <span>AI Tag Suggester</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">AI Tag Suggester</DialogTitle>
              <DialogDescription>
                Let our AI help you categorize your project.
              </DialogDescription>
            </DialogHeader>
            <AITagSuggester />
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-10">
        <TagFilters
          tags={allTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
            <div className="text-center col-span-full py-24">
                <h3 className="text-xl font-semibold">No Projects Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
            </div>
        )}
      </section>
    </main>
  );
}
