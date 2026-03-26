import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

export const AboutPage = () => {
  const timeline = [
    {
      icon: Lightbulb,
      year: '2019',
      title: 'Webocore Founded',
      description: 'Started by Avnish Kumar and Abhishek Kumar with a vision to revolutionize IT services.',
    },
    {
      icon: Users,
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew to a talented team of developers and IT professionals.',
    },
    {
      icon: Target,
      year: '2024',
      title: 'Market Leader',
      description: 'Established as a trusted technology partner for businesses worldwide.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative solutions.',
    },
    {
      title: 'Quality',
      description: 'Excellence in every project and deliverable is our commitment.',
    },
    {
      title: 'Reliability',
      description: 'Your success is our priority with consistent support.',
    },
    {
      title: 'Flexibility',
      description: 'Remote-first approach tailored to your business needs.',
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
            About Webocore
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300"
          >
            Empowering businesses with innovative IT solutions since 2019
          </motion.p>
        </div>
      </motion.section>

      {/* Company Description */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Who We Are</h2>
              <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                Webocore is a dynamic and innovative IT service firm founded by two young IT professionals,
                <span className="text-primary-400 font-semibold"> Avnish Kumar</span> and{' '}
                <span className="text-primary-400 font-semibold">Abhishek Kumar</span>.
              </p>
              <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                We provide modern IT solutions to help businesses grow digitally with a focus on:
              </p>
              <ul className="space-y-3">
                {['Customized solutions', 'Productivity improvement', 'Digital presence growth'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-primary-400 font-semibold mb-2">Mission</h3>
                  <p className="text-slate-300">
                    To empower businesses with innovative and reliable IT solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-primary-400 font-semibold mb-2">Vision</h3>
                  <p className="text-slate-300">
                    To become a trusted technology partner providing scalable digital solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-primary-400 font-semibold mb-2">Tagline</h3>
                  <p className="text-slate-300">
                    "Building Smart Digital Solutions for Modern Businesses"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-primary-500 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary-500 to-transparent mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-primary-400 font-semibold">{item.year}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-slate-400 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
};
