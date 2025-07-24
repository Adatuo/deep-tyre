import { createDeepSeek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openAI = createDeepSeek({
  apiKey: process.env.DEEPTYRE_API_KEY,
  baseURL: process.env.BASE_URL,
});



export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openAI('deepseek-v3'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toDataStreamResponse();
}