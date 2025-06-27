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
import { Wand2 } from 'lucide-react';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
          Abox Reimagined
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A curated collection of modern web projects. Explore, learn, and get inspired.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-6">
              <Wand2 className="mr-2" />
              Suggest Tags with AI
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
      </header>

      <section className="mb-8 md:mb-12 flex justify-center">
        <TagFilters
          tags={allTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
            <div className="text-center col-span-full py-16">
                <p className="text-muted-foreground">No projects found for the selected tag.</p>
            </div>
        )}
      </section>
      <footer className="text-center mt-12 py-6 border-t">
        <p className="text-sm text-muted-foreground">Built by Abox Reimagined.</p>
      </footer>
    </main>
  );
}
