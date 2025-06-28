
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">About Abox</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          We are a creative studio dedicated to building beautiful, functional, and modern web experiences that leave a lasting impression.
        </p>
      </header>
      
      <div className="relative aspect-[16/6] rounded-xl overflow-hidden mb-12 shadow-lg">
        <Image 
          src="https://placehold.co/1200x450.png" 
          alt="Our Team"
          fill
          className="object-cover"
          data-ai-hint="team office"
        />
      </div>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <CardHeader className="flex-row items-center gap-4">
            <Lightbulb className="w-8 h-8 text-primary" />
            <CardTitle>Our Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground">
              We believe in the power of good design and clean code. Our philosophy is centered around user-centric design, robust engineering, and a collaborative process to bring your vision to life.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <CardHeader className="flex-row items-center gap-4">
            <Target className="w-8 h-8 text-primary" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground">
              Our mission is to empower businesses and individuals by providing them with exceptional digital tools and platforms that drive growth, engagement, and success in an ever-evolving digital landscape.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <CardHeader className="flex-row items-center gap-4">
            <Users className="w-8 h-8 text-primary" />
            <CardTitle>Our Team</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground">
              We are a diverse team of passionate designers, developers, and strategists. We thrive on challenges and are dedicated to pushing the boundaries of what's possible on the web.
            </p>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}
