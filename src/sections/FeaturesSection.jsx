import { FiBarChart2, FiMessageCircle, FiCpu, FiShield, FiTrendingUp, FiZap } from 'react-icons/fi'
import FeatureCard from '../components/FeatureCard'
import SectionHeading from '../components/SectionHeading'

const features = [
  {
    icon: FiCpu,
    title: 'AI Career Coach',
    description: 'Get tailored guidance for your next role, project, or pivot with strategic insights in seconds.',
    badge: 'New',
  },
  {
    icon: FiBarChart2,
    title: 'Progress Intelligence',
    description: 'Track momentum with live milestones, growth signals, and personalized recommendations.',
  },
  {
    icon: FiMessageCircle,
    title: 'Smart Interview Prep',
    description: 'Practice with realistic scenarios and sharpen communication with AI-driven feedback.',
  },
  {
    icon: FiShield,
    title: 'Confident Roadmapping',
    description: 'Turn goals into an actionable plan with clear next steps and confidence checkpoints.',
  },
  {
    icon: FiTrendingUp,
    title: 'Role Matching',
    description: 'Discover opportunities that fit your strengths, values, and growth preferences.',
  },
  {
    icon: FiZap,
    title: 'Instant Momentum',
    description: 'Stay engaged with focused exercises designed to keep your growth moving forward.',
  },
]

const FeaturesSection = () => {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Premium features"
        title="Everything you need to move forward with conviction"
        description="CareerForge AI combines strategy, coaching, and clarity in one elegant experience that feels premium from the first screen."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
