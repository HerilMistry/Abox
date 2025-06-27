import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-lg border-border/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-border">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <CardDescription>{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-6 pt-0 justify-end">
        <Button asChild variant="outline" size="sm">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github />
            GitHub
          </Link>
        </Button>
        {project.liveUrl && (
          <Button asChild size="sm">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
