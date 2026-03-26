import { motion } from 'framer-motion';
import { Code, Cloud, Zap, Shield, Smartphone, BarChart3 } from 'lucide-react';
import { ServiceCard } from '../components/common';

export const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration, and management services on AWS, Azure, and GCP.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits and solutions to protect your digital assets.',
    },
    {
      icon: Zap,
      title: 'IT Consulting',
      description: 'Expert guidance on digital transformation and technology strategy.',
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Data-driven insights to optimize your business operations and growth.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300"
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Discovery', desc: 'Understand your needs' },
              { number: '02', title: 'Planning', desc: 'Create a strategy' },
              { number: '03', title: 'Implementation', desc: 'Execute the solution' },
              { number: '04', title: 'Support', desc: 'Ongoing maintenance' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">{step.number}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-16">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend',
                techs: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
              },
              {
                title: 'Backend',
                techs: ['Node.js', 'Python', 'Java', 'Go'],
              },
              {
                title: 'DevOps',
                techs: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud'],
              },
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-lg font-bold text-primary-400 mb-4">{stack.title}</h3>
                <div className="space-y-2">
                  {stack.techs.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};
