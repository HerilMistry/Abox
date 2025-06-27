
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Here you would typically send the form data to a server
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Contact Us</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Have a project in mind? We'd love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <CardContent className="pt-6 flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        <Mail className="w-6 h-6"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground text-sm">Our team is here to help.</p>
                        <a href="mailto:hello@abox.com" className="text-primary break-all">hello@abox.com</a>
                    </div>
                </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <CardContent className="pt-6 flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        <MapPin className="w-6 h-6"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Our Office</h3>
                        <p className="text-muted-foreground text-sm">Come say hello.</p>
                        <p>123 Creative Lane, Webville, 12345</p>
                    </div>
                </CardContent>
            </Card>
             <Card className="transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <CardContent className="pt-6 flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        <Phone className="w-6 h-6"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground text-sm">Mon-Fri from 9am to 5pm.</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div>
          <Card className="border-border/50">
            <CardContent className="pt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                            <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Tell us about your project..." {...field} rows={6}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
