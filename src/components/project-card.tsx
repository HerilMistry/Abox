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
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
            data-ai-hint={project.imageHint}
          />
        </div>
        <div className="p-6">
            <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-6 pt-0">
        <Button asChild variant="outline">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github />
            GitHub
          </Link>
        </Button>
        {project.liveUrl && (
          <Button asChild>
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
