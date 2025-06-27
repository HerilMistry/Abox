'use server';

import { suggestTags as suggestTagsFlow, type SuggestTagsInput } from '@/ai/flows/suggest-tags';
import { z } from 'zod';

const resultSchema = z.object({
  tags: z.array(z.string()).optional(),
  error: z.string().optional(),
});

export async function suggestTagsAction(input: SuggestTagsInput) {
  try {
    const result = await suggestTagsFlow(input);
    return resultSchema.parse({ tags: result.tags });
  } catch (e) {
    console.error(e);
    // Check if e is an instance of Error to safely access the message property
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return resultSchema.parse({ error: `Failed to suggest tags: ${errorMessage}` });
  }
}
