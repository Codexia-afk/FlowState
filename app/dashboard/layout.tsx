import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PostHogProvider } from 'posthog-js/react';
import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LayoutDashboard, Brain, Gift, Clock, Users, BarChart2, Menu } from 'lucide-react';

// Re‑use the same QueryClient from the root layout
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false } },
});

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'AI Coach', href: '/dashboard/ai-coach', icon: Brain },
  { name: 'Future Self', href: '/dashboard/future-self', icon: Gift },
  { name: 'Focus Mode', href: '/dashboard/focus-mode', icon: Clock },
  { name: 'Focus Pods', href: '/dashboard/pods', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-gray-950 min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 bg-opacity-80 backdrop-blur-xl glass p-6 flex flex-col">
          <h1 className="text-2xl font-bold text-white mb-8">FlowState</h1>
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="group flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" />
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-8">
          <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
              <PostHogProvider apiKey={process.env.NEXT_PUBLIC_POSTHOG_API_KEY ?? ''} options={{ api_host: 'https://app.posthog.com' }}>
                {/* Simple page transition */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  {children}
                </motion.div>
              </PostHogProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
