import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code, Cloud } from 'lucide-react';
import { Button, ServiceCard, AnimatedText } from '../components/common';

export const HomePage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications with cutting-edge technology.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for your business needs.',
    },
    {
      icon: Zap,
      title: 'IT Consulting',
      description: 'Expert guidance on digital transformation and technology strategy.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <div className="inline-block px-4 py-2 bg-primary-900/40 border border-primary-500/30 rounded-full mb-6 backdrop-blur">
              <span className="text-primary-300 text-sm font-semibold">Welcome to Webocore</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <AnimatedText text="Building Smart Digital Solutions" delay={0.3} />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            Modern IT services to help your business grow digitally with innovative, cost-effective solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <Button>
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-y border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to accelerate your digital growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-cyan-900/20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how Webocore can help you achieve your digital goals.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};
