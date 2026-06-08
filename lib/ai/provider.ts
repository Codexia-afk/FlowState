export interface IAIProvider {
  /**
   * Return a list of insight cards for the AI Coach dashboard.
   * Each card contains a title, description, and optional actions.
   */
  getInsights(): Promise<InsightCard[]>;

  /**
   * Send a user message to the AI and receive a response.
   */
  sendMessage(message: string): Promise<AIResponse>;
}

export type InsightCard = {
  id: string;
  title: string;
  description: string;
  type: 'risk' | 'recommendation' | 'focus' | 'behavior';
  icon: string; // Lucide icon name
  severity?: 'low' | 'medium' | 'high';
};

export type AIResponse = {
  id: string;
  content: string;
  suggestedActions?: string[];
};
