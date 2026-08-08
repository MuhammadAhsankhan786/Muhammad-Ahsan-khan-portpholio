import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export type Testimonial = {
  id: string
  clientName: string
  flag: string
  country: string
  rating: number
  projectTitle: string
  reviewText: string
  tags: string[]
  avatarColor: string
  avatarInitial: string
  accentColor: string
}

const testimonialsData: Testimonial[] = [
  {
    id: 'aakash',
    clientName: 'Aakash',
    flag: '🇮🇳',
    country: 'India',
    rating: 5.0,
    projectTitle: 'Boost Unit Test Coverage to over 90%',
    reviewText:
      'Muhammad Ahsan did an outstanding job on this project! He put in a lot of time, effort, and attention to detail to ensure everything was done perfectly. He went above and beyond the original requirements and delivered exceptional results. Truly appreciate his dedication, professionalism, and proactive approach. Highly recommended!',
    tags: ['JavaScript', 'Testing / QA', 'Software Testing', 'Test Automation', 'Agile'],
    avatarColor: '#7c6ff7',
    avatarInitial: 'A',
    accentColor: '#7c6ff7',
  },
  {
    id: 'serunjogi',
    clientName: 'Serunjogi',
    flag: '🇺🇬',
    country: 'Uganda',
    rating: 5.0,
    projectTitle: 'Pre-Built Member-School Web Portal',
    reviewText:
      'He is the best freelancer I have worked with, very calm and understanding, innovative, professional with high level of integrity and honest. He is going to handle all phases of this project.',
    tags: ['PHP', 'Website Design', 'Web Portal', 'HTML5', 'System Architecture'],
    avatarColor: '#f59e0b',
    avatarInitial: 'S',
    accentColor: '#f59e0b',
  },
  {
    id: 'veer-cashfree',
    clientName: 'Veer',
    flag: '🇮🇳',
    country: 'India',
    rating: 5.0,
    projectTitle: 'Cashfree Payment Gateway Integration & PHP Backend',
    reviewText:
      'Excellent work! The Cashfree payment gateway integration was completed perfectly on time and within budget. Muhammad Ahsan has great technical expertise and communication skills. Highly recommended!',
    tags: ['PHP', 'Payment Gateway Integration', 'Android App', 'REST API', 'Backend'],
    avatarColor: '#38bdf8',
    avatarInitial: 'V',
    accentColor: '#38bdf8',
  },
  {
    id: 'anas-horoscope',
    clientName: 'Anas',
    flag: '🇵🇰',
    country: 'Pakistan',
    rating: 5.0,
    projectTitle: 'Gingerino AI Daily Horoscope App Development',
    reviewText:
      'This time he proves himself very well. Thank you for your efforts. Will work more in future. Good experience overall.',
    tags: ['AI Mobile App', 'Android', 'App Development', 'AI Integration'],
    avatarColor: '#10b981',
    avatarInitial: 'A',
    accentColor: '#10b981',
  },
  {
    id: 'tutorsclub',
    clientName: 'Tutorsclub',
    flag: '🇮🇳',
    country: 'India',
    rating: 5.0,
    projectTitle: 'Mesh Central Server Customization',
    reviewText:
      "He consistently demonstrates excellent communication and a strong commitment to meeting project deadlines. He quickly understands project requirements and always gives his best effort. It's been a pleasure working with him—thank you!",
    tags: ['Server Customization', 'Node.js', 'DevOps', 'Linux', 'Network Ops'],
    avatarColor: '#8b5cf6',
    avatarInitial: 'T',
    accentColor: '#8b5cf6',
  },
  {
    id: 'djole',
    clientName: 'Djole',
    flag: '🇧🇦',
    country: 'Bosnia & Herzegovina',
    rating: 5.0,
    projectTitle: 'Cross-Platform Food Scheduling App Build',
    reviewText:
      'Very good freelancer, strong recommendations for collaboration!',
    tags: ['Mobile App Development', 'Android', 'Kotlin', 'Push Notification', 'REST API'],
    avatarColor: '#06b6d4',
    avatarInitial: 'D',
    accentColor: '#06b6d4',
  },
  {
    id: 'abdelrahman',
    clientName: 'Abdelrahman',
    flag: '🇪🇬',
    country: 'Egypt',
    rating: 5.0,
    projectTitle: 'NestJS & React Docs Portal',
    reviewText:
      'Good developer. I hope all the best for you!',
    tags: ['NestJS', 'React.js', 'Documentation Portal', 'TypeScript', 'Node.js'],
    avatarColor: '#4ade80',
    avatarInitial: 'A',
    accentColor: '#4ade80',
  },
  {
    id: 'veer-seo',
    clientName: 'Veer',
    flag: '🇮🇳',
    country: 'India',
    rating: 5.0,
    projectTitle: 'Organic Traffic SEO for Two Websites',
    reviewText:
      'I am satisfied with your services. Great optimization and communication.',
    tags: ['Internet Marketing', 'SEO', 'Link Building', 'Google Analytics'],
    avatarColor: '#ec4899',
    avatarInitial: 'V',
    accentColor: '#ec4899',
  },
  {
    id: 'anshul',
    clientName: 'Anshul',
    flag: '🇮🇳',
    country: 'India',
    rating: 5.0,
    projectTitle: 'Informational Logistics Brokerage Website',
    reviewText:
      'Team is Supportive totally, No Hurry. Delivered modern web development and responsive layout.',
    tags: ['Website Design', 'WordPress', 'CMS', 'HTML', 'Web Development'],
    avatarColor: '#f43f5e',
    avatarInitial: 'A',
    accentColor: '#f43f5e',
  },
  {
    id: 'ahmed-coordinates',
    clientName: 'Ahmed',
    flag: '🇹🇳',
    country: 'Tunisia',
    rating: 5.0,
    projectTitle: 'Localizing Coordinates in a Building',
    reviewText:
      'I was again satisfied by the quality of work.',
    tags: ['JavaScript', 'NoSQL Couch & Mongo', 'Node.js', 'AngularJS', 'TypeScript'],
    avatarColor: '#e11d48',
    avatarInitial: 'A',
    accentColor: '#e11d48',
  },
  {
    id: 'ahmed-firebase',
    clientName: 'Ahmed',
    flag: '🇹🇳',
    country: 'Tunisia',
    rating: 5.0,
    projectTitle: 'Firebase Setup & TypeScript Cloud Functions',
    reviewText:
      'Really satisfied with the work.',
    tags: ['Firebase', 'TypeScript', 'Cloud Functions', 'Node.js', 'Serverless'],
    avatarColor: '#ef4444',
    avatarInitial: 'A',
    accentColor: '#ef4444',
  },
  {
    id: 'former-client',
    clientName: 'Enterprise Client',
    flag: '🌐',
    country: 'Global Client',
    rating: 5.0,
    projectTitle: 'Full-Stack Web App Refactor',
    reviewText:
      'Good job and good communication! Excellent code refactoring and architecture optimization.',
    tags: ['Full-Stack Web App Refactor', 'React.js', 'Clean Code', 'REST APIs'],
    avatarColor: '#a78bfa',
    avatarInitial: 'E',
    accentColor: '#a78bfa',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative px-6 md:px-20 py-20 md:py-36 overflow-hidden"
      style={{ background: 'var(--section-b)' }}
    >
      {/* Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--decorative) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 60 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          09 — Verified Global Client Reviews (100% 5.0 ★ Rated)
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </motion.div>

      {/* Main Headline */}
      <div style={{ maxWidth: 800, marginBottom: 60 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 3.5vw, 56px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--fg)',
            margin: '0 0 20px',
          }}
        >
          Verified Client Reviews &
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            5-Star Project Endorsements.
          </em>
        </motion.h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(var(--fg-rgb), 0.7)',
            margin: 0,
          }}
        >
          Genuine reviews from clients across Pakistan 🇵🇰, India 🇮🇳, Tunisia 🇹🇳, Uganda 🇺🇬, Bosnia 🇧🇦, Egypt 🇪🇬, and global enterprise projects.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--card-radius)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: 'var(--card-shadow)',
            }}
            whileHover={{ y: -6 }}
          >
            {/* Header: Avatar, Name, Flag & Country */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'var(--surface)',
                      border: '1px solid var(--border-bright)',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: 18,
                      fontWeight: 800,
                      color: 'var(--fg)',
                    }}
                  >
                    {item.avatarInitial}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 16 }}>{item.flag}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--fg)' }}>
                        {item.clientName}
                      </span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 }}>
                      📍 {item.flag} {item.country}
                    </div>
                  </div>
                </div>

                {/* 5.0 Rating Badge */}
                <div
                  style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 10px',
                    borderRadius: 20,
                    background: 'rgba(var(--accent-rgb), 0.15)',
                    border: '1px solid rgba(var(--accent-rgb), 0.3)',
                    color: 'var(--fg)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  <span>★</span>
                  <span>5.0</span>
                </div>
              </div>

              {/* Project Title */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: 12,
                  lineHeight: 1.35,
                }}
              >
                💼 {item.projectTitle}
              </div>

              {/* Client Feedback quote */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: 'var(--fg)',
                  margin: '0 0 20px',
                  fontStyle: 'italic',
                }}
              >
                "{item.reviewText}"
              </p>
            </div>

            {/* Skill Tags Footer */}
            <div style={{ paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {item.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    padding: '3px 8px',
                    background: 'var(--tag-bg)',
                    border: '1px solid var(--tag-border)',
                    color: 'var(--tag-fg)',
                    borderRadius: 4,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
