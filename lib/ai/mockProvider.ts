import { IAIProvider, InsightCard, AIResponse } from './provider';

/**
 * MockProvider simulates realistic AI coach insights and chat responses.
 * It returns deterministic data so the UI can be built and styled without a real LLM.
 */
export class MockProvider implements IAIProvider {
  async getInsights(): Promise<InsightCard[]> {
    // Simulated list of cards
    return [
      {
        id: 'risk-01',
        title: 'Procrastination Risk',
        description: 'Your recent study pattern shows a 23% higher risk of missing the upcoming deadline.',
        type: 'risk',
        icon: 'alert-circle',
        severity: 'medium',
      },
      {
        id: 'rec-01',
        title: 'Focus Recommendation',
        description: 'Schedule a 45‑minute Pomodoro session now to boost retention.',
        type: 'recommendation',
        icon: 'zap',
        severity: 'low',
      },
      {
        id: 'behavior-01',
        title: 'Behavior Insight',
        description: 'You tend to study best after 7 PM. Consider aligning high‑value tasks with this window.',
        type: 'behavior',
        icon: 'brain',
        severity: 'low',
      },
    ];
  }

  async sendMessage(message: string): Promise<AIResponse> {
    // Simple rule‑based mock response
    const reply = `I hear you: "${message}". Here's a quick tip: take a 5‑minute stretch before diving back in.`;
    return {
      id: `msg-${Date.now()}`,
      content: reply,
      suggestedActions: ['Start Pomodoro', 'Open Study Planner'],
    };
  }
}
