// src/ai/flows/suggest-tags.ts
'use server';
/**
 * @fileOverview AI-powered tag suggestion for projects based on description and code repository analysis.
 *
 * - suggestTags - A function that suggests relevant tags for a project.
 * - SuggestTagsInput - The input type for the suggestTags function.
 * - SuggestTagsOutput - The return type for the suggestTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestTagsInputSchema = z.object({
  description: z
    .string()
    .describe('The description of the project to analyze for tags.'),
  codeRepository: z
    .string()
    .describe('Link to the code repository to analyze for tags.'),
});
export type SuggestTagsInput = z.infer<typeof SuggestTagsInputSchema>;

const SuggestTagsOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe('An array of suggested tags for the project.'),
});
export type SuggestTagsOutput = z.infer<typeof SuggestTagsOutputSchema>;

export async function suggestTags(input: SuggestTagsInput): Promise<SuggestTagsOutput> {
  return suggestTagsFlow(input);
}

const suggestTagsPrompt = ai.definePrompt({
  name: 'suggestTagsPrompt',
  input: {schema: SuggestTagsInputSchema},
  output: {schema: SuggestTagsOutputSchema},
  prompt: `You are an expert in tagging projects based on their description and code repository.

  Analyze the following project description and code repository to suggest relevant tags.

  Description: {{{description}}}
  Code Repository: {{{codeRepository}}}

  Suggest at least 3 tags, but no more than 10.
  `, // Ensure prompt does not exceed token limit, or returns error.
});

const suggestTagsFlow = ai.defineFlow(
  {
    name: 'suggestTagsFlow',
    inputSchema: SuggestTagsInputSchema,
    outputSchema: SuggestTagsOutputSchema,
  },
  async input => {
    const {output} = await suggestTagsPrompt(input);
    return output!;
  }
);
