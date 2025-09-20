import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Users, Video } from 'lucide-react';
import profileImage from '/profile.jpg';

const stats = [
  { icon: Video, label: 'Projects Completed', value: '200+' },
  { icon: Users, label: 'Happy Clients', value: '50+' },
  { icon: Clock, label: 'Years Experience', value: '8+' },
  { icon: Award, label: 'Awards Won', value: '15+' },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-darker-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting visual stories that captivate and inspire
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-neon rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <motion.img
                src={profileImage}
                alt="Hamza Shah - Video Editor"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className='mt-8 hidden md:block'>
              <p>
                I work with brands, filmmakers, and content creators to transform raw footage 
                into polished, engaging content. From commercial projects to artistic short films, 
                every project is an opportunity to push creative boundaries and deliver exceptional results.
              </p>
            <p>
                My expertise spans across various editing software including Adobe Premiere Pro, 
                After Effects, DaVinci Resolve, and Final Cut Pro. I believe in staying current 
                with industry trends and continuously refining my craft.
            </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Passionate About Visual Storytelling
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! My name is Hamza Shah, and I have over four years of experience in video 
                editing. Throughout my career, I have worked with a diverse range of clients 
                across different industries. I have collaborated with doctors in the U.S. to 
                edit professional talking-head videos, worked with car enthusiasts to create 
                dynamic automotive content for social media, and edited engaging food 
                videos for restaurants. In addition, I have experience producing high-quality 
                real estate reels for Instagram, YouTube, and other platforms. I also specialize 
                in crafting documentary-style videos, bringing stories to life with creativity, 
                attention to detail, and a strong sense of storytelling..
              </p>
              <div className='md:hidden'>
              <p>
                I work with brands, filmmakers, and content creators to transform raw footage 
                into polished, engaging content. From commercial projects to artistic short films, 
                every project is an opportunity to push creative boundaries and deliver exceptional results.
              </p>
             <p className='mt-4'>
                My expertise spans across various editing software including Adobe Premiere Pro, 
                After Effects, DaVinci Resolve, and Final Cut Pro. I believe in staying current 
                with industry trends and continuously refining my craft.
            </p>
            </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};