import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PostHogProvider } from 'posthog-js/react';
import { Provider as ZustandProvider } from 'zustand'; // placeholder, actual use via hooks
import { ReactNode } from 'react';

// Initialize TanStack Query client (singleton)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// PostHog configuration (replace with real key in .env)
const POSTHOG_API_KEY = process.env.NEXT_PUBLIC_POSTHOG_API_KEY ?? '';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <PostHogProvider apiKey={POSTHOG_API_KEY} options={{ api_host: 'https://app.posthog.com' }}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
