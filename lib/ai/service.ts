import { IAIProvider } from './provider';
import { MockProvider } from './mockProvider';
// Future imports: OpenAIProvider, GeminiProvider, VertexAIProvider

/**
 * Factory that returns the appropriate AI provider based on an environment flag.
 * For now it always returns the MockProvider.
 */
export function getAIProvider(): IAIProvider {
  // In a real deployment you could read process.env.NEXT_PUBLIC_AI_PROVIDER
  // and instantiate the corresponding class.
  return new MockProvider();
}
