import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Eye, ExternalLink, X, Clock } from 'lucide-react';

const portfolioItems = [
  {
    id: 10,
    title: 'GTR Built for Speed',
    category: 'Car Edits',
    description: 'editing This GT-R showcase highlights every angle, rev, and road-tearing moment with sleek transitions and powerful pacing.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:28',
    thumbnail: '/thumbnail-10.jpg',
    videoUrl: 'video-10.mp4'
  },
  {
    id: 11,
    title: 'Turbo Edit',
    category: 'Car Edits',
    description: 'Fast-paced automotive reel with clean speed ramps, punchy cuts, and subtle VFX to elevate the visual experience.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:14',
    thumbnail: '/thumbnail-11.jpg',
    videoUrl: 'video-11.mp4'
  },
  {
    id: 12,
    title: 'BMW in Motion',
    category: 'Car Edits',
    description: 'Cinematic reel capturing the spirit of BMW — bold visuals, smooth transitions, and a luxury-driven aesthetic.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:14',
    thumbnail: '/thumbnail-12.jpg',
    videoUrl: 'video-12.mp4'
  },
  {
    id: 1,
    title: 'Soha Mall Cinematic Cut',
    category: 'Food Restaurant',
    description: `A short aerial edit highlighting Soha Mall's growth. Stylish pacing and professional visual tone.`,
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    duration: '0:32',
    thumbnail: '/thumbnail-1.jpg',
    videoUrl: '/video-1.mp4'
  },
  // {
  //   id: 2,
  //   title: 'Music Video - "Midnight Dreams"',
  //   category: 'Food Restaurant',
  //   description: 'Cinematic music video with dynamic color grading and synchronized editing.',
  //   tools: ['Final Cut Pro', 'Motion', 'Color Finale'],
  //   duration: '0:32',
  //   thumbnail: '/thumbnail-2.jpg',
  //   videoUrl: 'video-2.mp4'
  // },
  {
    id: 3,
    title: 'Trift Gym x Soha Mall',
    category: 'Food Restaurant',
    description: 'Upbeat pacing, clean cuts, and dynamic visuals to match the brand vibe.',
    tools: ['Avid Media Composer', 'Pro Tools', 'DaVinci Resolve'],
    duration: '1:04',
    thumbnail: '/thumbnail-3.jpg',
    videoUrl: 'video-3.mp4'
  },
  {
    id: 4,
    title: 'Fast paced reel soha mall',
    category: 'Food Restaurant',
    description: 'Trendy cuts, bold text overlays, and stylish model visuals in viral IG style.',
    tools: ['Premiere Pro', 'After Effects', 'Cinema 4D'],
    duration: '1:29',
    thumbnail: '/thumbnail-4.jpg',
    videoUrl: 'video-4.mp4'
  },
  {
    id: 5,
    title: 'Café Eleganza – Taste Test Reel',
    category: 'Food Restaurant',
    description: 'Aesthetic food review card with clean visuals and trendy music. Showcasing Café Eleganza’s signature flavors in a stylish reel format.',
    tools: ['Premiere Pro', 'Audition', 'Photoshop'],
    duration: '0:17',
    thumbnail: '/thumbnail-5.jpg',
    videoUrl: 'video-5.mp4'
  },
  {
    id: 6,
    title: 'Smooth cinematic shots paired with punchy beats.',
    category: 'Food Restaurant',
    description: 'Capturing the mood, flavors, and elegance of the café in style',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:20',
    thumbnail: '/thumbnail-6.jpg',
    videoUrl: 'video-6.mp4'
  },
   {
    id: 7,
    title: 'Eleganza Moments',
    category: 'Food Restaurant',
    description: 'capturing coffee vibes and cozy café ambiance. Smooth, natural shots that highlight the café’s warm atmosphere..',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:39',
    thumbnail: '/thumbnail-7.jpg',
    videoUrl: 'video-7.mp4'
  },
   {
    id: 8,
    title: 'Eleganza Podcast Visuals',
    category: 'Food Restaurant',
    description: 'Dynamic animated intro and AI-generated visuals synced to the podcast discussion. Bringing Café Eleganza’s stories to life with cutting-edge motion design and creativity.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '2:10',
    thumbnail: '/thumbnail-8.jpg',
    videoUrl: 'video-8.mp4'
  },
   {
    id: 9,
    title: 'Delicious cakes showcased with a tempting 30% discount.',
    category: 'Food Restaurant',
    description: 'Bright, colorful edit designed to satisfy your sweet cravings!',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:14',
    thumbnail: '/thumbnail-9.jpg',
    videoUrl: 'video-9.mp4'
  },
  {
    id: 13,
    title: 'Carlo Ghambino',
    category: 'Youtube Documentary',
    description: 'A compelling edit capturing the life and legacy of Carlo Ghambino. Narrative-driven with thoughtful pacing and cinematic storytelling.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '1:03',
    thumbnail: '/thumbnail-13.jpg',
    videoUrl: 'video-13.mp4'
  },
  {
    id: 14,
    title: 'YouTube Niche Edits',
    category: 'Youtube Documentary',
    description: 'Versatile video edits tailored for a variety of YouTube niches. From motion graphics to storytelling, delivering engaging content that grows channels.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '1:07',
    thumbnail: '/thumbnail-14.jpg',
    videoUrl: 'video-14.mp4'
  },
  {
    id: 17,
    title: 'Fast Pace Fitness',
    category: 'Fitness',
    description: 'High-energy gym video featuring dynamic speed ramps and smooth transitions. Showcasing strength, motion, and intensity in every frame.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:21',
    thumbnail: '/thumbnail-17.jpg',
    videoUrl: 'video-17.mp4'
  },
  {
    id: 15,
    title: 'US doctors dermatologist',
    category: 'Doctors talking head',
    description: 'Engaging talking head videos of US doctors enhanced with dynamic motion graphics. Clear visuals and animated elements to simplify complex medical information.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:28',
    thumbnail: '/thumbnail-15.jpg',
    videoUrl: 'video-15.mp4'
  },
  {
    id: 16,
    title: 'NeuroTalk Visual Edit',
    category: 'Doctors talking head',
    description: 'Expert neurologist insights brought to life with clean motion graphics and subtle SFX. A polished, informative edit designed to enhance clarity and viewer engagement.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '1:19',
    thumbnail: '/thumbnail-16.jpg',
    videoUrl: 'video-16.mp4'
  },
  {
    id: 18,
    title: 'SportsMed Insight',
    category: 'Fitness',
    description: 'A focused video edit featuring a sports medicine expert breaking down common athlete injuries. Crafted to match the doctor’s tone with clean visuals, supportive motion graphics, and medical clarity.',
    tools: ['Premiere Pro', 'After Effects', 'Element 3D'],
    duration: '0:31',
    thumbnail: '/thumbnail-18.jpg',
    videoUrl: 'video-18.mp4'
  }
];

const categories = ['All', 'Food Restaurant', 'Car Edits', 'Youtube Documentary','Doctors talking head','Fitness'];

export const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="relative section-padding bg-gradient-to-b from-darker-surface to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="neon-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work across various genres and styles
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-neon'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {item.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-accent text-sm font-medium">{item.category}</span>
                  <Eye className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-secondary px-2 py-1 rounded text-xs text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 md:h-[90vh] w-full bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 z-100"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
              <div className="relative">
                <div className="aspect-video bg-black">
                  <iframe
                    src={selectedProject.videoUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={selectedProject.title}
                  />
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Video Details */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedProject.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-sm text-muted-foreground mr-4">Tools used:</span>
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/50">
                  <motion.a
                    href={selectedProject.videoUrl.replace('?autoplay=1', '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hero-button flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in New Tab
                  </motion.a>
                  <motion.button
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hero-button-secondary flex items-center justify-center gap-2"
                  >
                    Back to Portfolio
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};