import { Metadata } from 'next';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { LayoutDashboard, Clock, BarChart2, Brain } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard – Overview',
  description: 'Your daily focus score, productivity index and upcoming deadlines.',
};

const cardData = [
  { title: 'Daily Focus Score', value: 84, suffix: '%', icon: Clock, color: 'bg-emerald-500' },
  { title: 'Productivity Index', value: 72, suffix: '%', icon: BarChart2, color: 'bg-cyan-500' },
  { title: 'Current Streak', value: 12, suffix: ' days', icon: LayoutDashboard, color: 'bg-purple-500' },
];

export default function Overview() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dashboard Overview
      </motion.h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((c, i) => (
          <motion.div
            key={c.title}
            className={`${c.color} glass rounded-xl p-6 text-center`}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <c.icon className="w-8 h-8 mx-auto mb-4 text-white" />
            <AnimatedCounter end={c.value} suffix={c.suffix} />
            <p className="mt-2 text-lg font-medium text-white">{c.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="flex justify-center space-x-6 mt-8">
        {[
          { href: '/dashboard/ai-coach', label: 'AI Coach', icon: Brain },
          { href: '/dashboard/future-self', label: 'Future Self', icon: LayoutDashboard },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <link.icon className="w-5 h-5" />
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
