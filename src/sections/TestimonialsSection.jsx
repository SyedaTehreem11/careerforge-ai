import TestimonialCard from '../components/TestimonialCard'
import SectionHeading from '../components/SectionHeading'

const testimonials = [
  {
    quote: 'We went from scattered ideas to a sharp growth plan in under a week. The experience feels like having a strategic advisor on demand.',
    name: 'Maya Chen',
    role: 'VP of People',
    company: 'Northstar Labs',
  },
  {
    quote: 'The guidance is practical, elegant, and surprisingly personal. It helped me reposition my narrative and land the role I wanted.',
    name: 'Daniel Ortiz',
    role: 'Product Designer',
    company: 'Aero Studio',
  },
  {
    quote: 'Every recommendation felt precise and useful. It transformed our planning cadence into something calm, focused, and actually motivating.',
    name: 'Aisha Brooks',
    role: 'Founder',
    company: 'Beacon AI',
  },
]

const TestimonialsSection = () => {
  return (
    <section id="stories" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Loved by ambitious teams"
        title="Stories from people building momentum"
        description="CareerForge AI helps people make better decisions, move with confidence, and turn ambitious goals into visible progress."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
