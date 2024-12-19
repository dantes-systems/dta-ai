// Types for external API interactions (e.g., OpenAI, image generation APIs)

// OpenAI API response
interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: Array<{
    text: string;
    index: number;
    logprobs: any;
    finish_reason: string;
  }>;
}

// Image Generation API response
interface ImageGenerationResponse {
  success: boolean;
  images: Array<{
    url: string;
    metadata: any;
  }>;
}