import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Moon, BarChart2, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FlowState – AI‑Powered Procrastination Prevention',
  description: 'Stop tracking failure. Engineer success. AI‑driven focus and coaching platform for students.',
};

// Reusable motion wrapper
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  return (
    <main className="bg-gray-950 text-gray-100 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 glass">
        <div className="max-w-4xl text-center px-4">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-6">
              Stop Tracking Failure. Engineer Success.
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              FlowState predicts procrastination before it happens and helps students build lasting focus habits through AI‑powered coaching.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <a
              href="/dashboard"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium rounded-full px-6 py-3 shadow-lg transition-all duration-300"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-100">
              Empower Your Focus Journey
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <BarChart2 className="w-8 h-8 text-emerald-400" />, title: 'Live Analytics', desc: 'Real‑time charts show focus trends, productivity scores, and streaks.' },
              { icon: <Sun className="w-8 h-8 text-purple-400" />, title: 'AI Coach', desc: 'Personalized recommendations, risk analysis, and daily action items.' },
              { icon: <CheckCircle className="w-8 h-8 text-cyan-400" />, title: 'Future Self Simulator', desc: 'Adjust study, sleep, and consistency to see GPA and burnout forecasts.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.1}>
                <div className="bg-gray-800 bg-opacity-60 backdrop-blur-xl rounded-xl p-6 text-center glass">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-medium mb-2 text-gray-100">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-100">
              What Students Say
            </h2>
          </FadeIn>
          <motion.div
            className="flex overflow-x-auto gap-6 pb-4"
            whileTap={{ cursor: 'grabbing' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
          >
            {[
              { name: 'Aisha K.', quote: 'FlowState turned my chaotic study schedule into a focused routine. The AI coach feels like a personal mentor.', avatar: '/avatar1.png' },
              { name: 'Ravi P.', quote: 'Seeing my future GPA in the simulator motivated me to sleep more and study smarter.', avatar: '/avatar2.png' },
              { name: 'Mia L.', quote: 'The Pomodoro focus mode is gorgeous and actually helps me stay on task.', avatar: '/avatar3.png' },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl p-6 glass flex-shrink-0"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,0,0,0.6)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <Image src={t.avatar} alt={t.name} width={48} height={48} className="rounded-full mr-3" />
                  <div>
                    <p className="font-medium text-gray-100">{t.name}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{t.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCounter end={1500} suffix="+" label="Students Empowered" />
          <AnimatedCounter end={98} suffix="%" label="Procrastination Reduction" />
          <AnimatedCounter end={24} suffix="/7" label="Support Hours" />
        </div>
      </section>

      {/* Call‑to‑Action Footer */}
      <section className="py-16 bg-gradient-to-r from-indigo-800 to-purple-800 glass text-center">
        <FadeIn delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Engineer Your Success?
          </h2>
        </FadeIn>
        <FadeIn delay={0.4}>
          <a
            href="/dashboard"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full px-8 py-3 shadow-md transition-colors"
          >
            Start Your Focus Journey <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </FadeIn>
      </section>
    </main>
  );
}
