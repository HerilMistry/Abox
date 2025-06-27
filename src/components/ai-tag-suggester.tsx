'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestTagsAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const formSchema = z.object({
  description: z.string().min(20, 'Description must be at least 20 characters long.'),
  codeRepository: z.string().url('Please enter a valid URL for the code repository.'),
});

export function AITagSuggester() {
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      codeRepository: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestedTags([]);
    const result = await suggestTagsAction(values);
    setIsLoading(false);

    if (result.error) {
      toast({
        title: 'Error Suggesting Tags',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.tags) {
      setSuggestedTags(result.tags);
    }
  }

  const copyToClipboard = () => {
    if (suggestedTags.length > 0) {
      navigator.clipboard.writeText(suggestedTags.join(', '));
      toast({
        title: 'Copied!',
        description: 'Tags have been copied to your clipboard.',
      });
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g., A full-featured e-commerce platform built with Next.js and Stripe..." {...field} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="codeRepository"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code Repository URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/user/repo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Suggest Tags'
            )}
          </Button>
        </form>
      </Form>
      
      {(isLoading || suggestedTags.length > 0) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <p>Our AI is analyzing your project...</p>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <div className="flex flex-wrap gap-2 flex-grow">
                  {suggestedTags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Copy tags">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
