'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, Award } from 'lucide-react';

const leadershipHighlights = [
  {
    icon: Trophy,
    title: 'Cricket Leadership',
    description: 'Elected Board Director & Team Captain at Orange County Cricket Developmental Team. Named MVP in 2021, 2022, and 2024 seasons. Competed in US Men\'s U23 and US Men\'s National Trials in 2023, 2024, and 2025. Mentored and led emerging cricketers to help develop their interpersonal skills and meet club strategic goals.',
    color: 'text-orange',
    bgColor: 'from-orange/10 to-orange/5',
  },
  {
    icon: Users,
    title: 'Entrepreneurship',
    description: 'Co-founded and scaled Hive to 70+ members globally, building products serving 600+ students. Led technical development, product strategy, and organizational growth. Established partnerships with Merriam-Webster and Spelling Bee Championship UAE.',
    color: 'text-purple',
    bgColor: 'from-purple/10 to-purple/5',
  },
  {
    icon: Lightbulb,
    title: 'Product Building',
    description: 'Led technical development of multiple educational platforms and tools. Built iOS apps, web platforms, and enterprise software. Focused on creating meaningful products that solve real problems.',
    color: 'text-blue',
    bgColor: 'from-blue/10 to-blue/5',
  },
  {
    icon: Award,
    title: 'Mentorship & Community',
    description: 'Founded CodingForCharity with 70+ members across 8 countries, developing 40+ websites for nonprofits. Received coverage from prominent local radio and TV stations. Co-founded Gathr and Internify, helping students connect with opportunities.',
    color: 'text-pink',
    bgColor: 'from-pink/10 to-pink/5',
  },
];

export default function LeadershipPanel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Leadership</h1>
          <p className="text-muted text-lg">
            Beyond code: leading teams, building communities, and creating impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-2 rounded-2xl p-8 space-y-4 bg-gradient-to-br ${item.bgColor} neon-glow hover:scale-[1.02] transition-transform`}
              >
                <div className={`${item.color}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8 space-y-4"
        >
          <h2 className="text-2xl font-bold">Building at Scale</h2>
          <p className="text-muted leading-relaxed">
            Leadership for me means creating environments where people can do their best work.
            Whether it's captaining a cricket team, scaling a global organization, or mentoring
            developers, I focus on clear communication, setting vision, and empowering others to
            succeed. The impact I'm most proud of isn't just the products built, but the teams
            and communities that grew stronger along the way.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
