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
import { Wand2, Search, FolderKanban } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarInset, SidebarTrigger, SidebarGroup } from '@/components/ui/sidebar';

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
    <SidebarProvider>
      <div className="bg-background">
        <Sidebar collapsible="icon" className="bg-card border-r border-border/50">
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 flex items-center justify-center">
                <FolderKanban size={24} />
              </div>
              <h2 className="font-headline text-2xl font-bold tracking-tighter text-foreground">Abox</h2>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-4">
            <SidebarGroup>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search projects..." 
                  className="pl-9 h-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <TagFilters
                tags={allTags}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
                layout="sidebar"
              />
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full justify-center">
                  <Wand2 className="mr-2" />
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
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <main className="container mx-auto px-4 py-8 md:p-12">
            <header className="flex items-center gap-4 mb-8">
              <SidebarTrigger className="md:hidden" />
              <div>
                <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                  Projects Showcase
                </h1>
                <p className="text-muted-foreground mt-1">
                  A curated collection of modern web projects. Explore, learn, and get inspired.
                </p>
              </div>
            </header>

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

            <footer className="text-center mt-12 py-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">Built with Abox Reimagined.</p>
            </footer>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
