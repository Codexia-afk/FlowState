import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getAIProvider } from '@/lib/ai/service';

const messageSchema = z.object({
  content: z.string().min(1, 'Message cannot be empty'),
});

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function AICoachPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = async (data: { content: string }) => {
    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', content: data.content };
    setMessages((prev) => [...prev, userMsg]);
    reset();
    // call mock AI provider
    const provider = getAIProvider();
    const response = await provider.sendMessage(data.content);
    const aiMsg: Message = { id: response.id, role: 'assistant', content: response.content };
    setMessages((prev) => [...prev, aiMsg]);
  };

  return (
    <section className="p-6">
      <Card className="glass max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">AI Coach</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                className={`p-3 rounded-md ${msg.role === 'user' ? 'bg-indigo-600 text-white self-end' : 'bg-gray-800 text-gray-100 self-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.content}
              </motion.div>
            ))}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            <Input
              {...register('content')}
              placeholder="Ask your AI coach..."
              disabled={isSubmitting}
            />
            <Button type="submit" disabled={isSubmitting}>Send</Button>
          </form>
          {errors.content && <p className="text-red-400 mt-1">{errors.content.message}</p>}
        </CardContent>
      </Card>
    </section>
  );
}
