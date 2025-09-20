import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Tech Innovations Inc.',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b6ad3894?w=150&h=150&fit=crop&crop=face',
    content: 'Hamza transformed our brand video beyond our expectations. His attention to detail and creative vision brought our story to life in a way that truly resonates with our audience.',
    rating: 5,
    project: 'Corporate Brand Video'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Wavelength Records',
    role: 'Music Producer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Working with Hamza on our music video was an absolute pleasure. He understood the artistic vision immediately and delivered a cinematic masterpiece that perfectly complemented our sound.',
    rating: 5,
    project: 'Music Video Production'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Fashion Forward',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'The fashion campaign video Hamza created was stunning. His color grading skills and eye for composition elevated our brand to a whole new level. Exceptional work!',
    rating: 5,
    project: 'Fashion Campaign'
  },
  {
    id: 4,
    name: 'David Thompson',
    company: 'Documentary Films Co.',
    role: 'Executive Producer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Hamza\'s storytelling ability is remarkable. He took hours of raw footage and crafted a compelling narrative that kept viewers engaged from start to finish. Highly recommended!',
    rating: 5,
    project: 'Documentary Editing'
  },
  {
    id: 5,
    name: 'Lisa Park',
    company: 'Event Masters',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    content: 'The highlight reel Hamza created for our corporate event was phenomenal. He captured all the key moments and energy perfectly. Our client was thrilled with the final result.',
    rating: 5,
    project: 'Event Highlight Reel'
  }
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-darker-surface to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="neon-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
            >
            {/* Background Quote */}
            <Quote className="absolute top-4 left-4 w-16 h-16 text-primary/10" />
            
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="text-center md:text-left">
                <div className="text-xl font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-accent font-medium">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].company}
                </div>
                <div className="text-sm text-primary mt-1">
                  {testimonials[currentIndex].project}
                </div>
              </div>
            </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary shadow-neon'
                      : 'bg-muted-foreground hover:bg-secondary-foreground'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Mini Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-4 mt-16"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 cursor-pointer"
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.content.substring(0, 100)}..."
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};