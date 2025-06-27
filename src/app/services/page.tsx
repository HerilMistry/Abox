
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, Brush, Rocket, Bot } from 'lucide-react';

const services = [
  {
    icon: Brush,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that provide a seamless user experience. We focus on user research, wireframing, and high-fidelity mockups.'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building robust, scalable, and performant web applications using modern technologies like Next.js, React, and TypeScript.'
  },
  {
    icon: Rocket,
    title: 'SaaS Development',
    description: 'From idea to launch, we build and scale Software-as-a-Service products. We handle everything from architecture to deployment.'
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Leveraging the power of Generative AI to build intelligent applications, automate processes, and create unique user experiences with Genkit.'
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Our Services</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          We offer a range of services to help you build and scale your digital products.
        </p>
      </header>
      
      <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col md:flex-row items-start p-6 gap-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="bg-primary/10 text-primary p-4 rounded-lg">
               <service.icon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <CardTitle className="mb-2 text-xl font-headline">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </div>
          </Card>
        ))}
      </section>

    </div>
  );
}
