import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Video, 
  Scissors, 
  Palette, 
  Music, 
  Smartphone, 
  Film,
  Clock,
  Award
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Commercial Editing',
    description: 'Professional commercial video editing for brands, products, and marketing campaigns with compelling storytelling.',
    features: ['Brand storytelling', 'Product showcases', 'Marketing campaigns', 'Social media content'],
    price: 'Starting at $500'
  },
  {
    icon: Film,
    title: 'Cinematic Cuts',
    description: 'Artistic video editing with cinematic techniques, creating visually stunning and emotionally engaging content.',
    features: ['Narrative structure', 'Visual storytelling', 'Artistic transitions', 'Mood creation'],
    price: 'Starting at $800'
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Professional color correction and grading to enhance the visual appeal and mood of your footage.',
    features: ['Color correction', 'Mood enhancement', 'Cinematic looks', 'Consistency across shots'],
    price: 'Starting at $300'
  },
  {
    icon: Music,
    title: 'Music Synchronization',
    description: 'Expert audio editing and music synchronization to create perfect harmony between visuals and sound.',
    features: ['Audio mixing', 'Music selection', 'Beat synchronization', 'Sound design'],
    price: 'Starting at $250'
  },
  {
    icon: Smartphone,
    title: 'Short-form Content',
    description: 'Specialized editing for social media platforms including TikTok, Instagram Reels, and YouTube Shorts.',
    features: ['Platform optimization', 'Vertical formats', 'Quick turnaround', 'Trend adaptation'],
    price: 'Starting at $150'
  },
  {
    icon: Scissors,
    title: 'Post-Production',
    description: 'Complete post-production services including editing, effects, graphics, and final delivery.',
    features: ['Complete workflows', 'Motion graphics', 'Visual effects', 'Multi-format delivery'],
    price: 'Custom pricing'
  }
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-darker-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="neon-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video editing solutions tailored to your creative needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 hover:shadow-neon/20 transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-neon rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <service.icon className="relative w-12 h-12 text-primary mb-4" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-lg font-semibold text-accent">{service.price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            My <span className="neon-text">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Consultation', desc: 'Understanding your vision and requirements' },
              { icon: Film, title: 'Planning', desc: 'Creating a detailed editing strategy' },
              { icon: Scissors, title: 'Editing', desc: 'Bringing your story to life' },
              { icon: Award, title: 'Delivery', desc: 'Final review and project completion' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mx-auto border border-primary/20">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};