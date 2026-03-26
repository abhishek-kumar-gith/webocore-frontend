import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer = () => {
  const services = ['Web Development', 'IT Consulting', 'Cloud Solutions'];
  const company = ['About', 'Services', 'Contact'];
  const legal = ['Privacy', 'Terms', 'Security'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700/50 py-12 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white">
                W
              </div>
              <span className="font-bold text-xl text-white">Webocore</span>
            </div>
            <p className="text-slate-400 text-sm">
              Building smart digital solutions for modern businesses.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Webocore. All rights reserved. Founded by Avnish Kumar & Abhishek Kumar
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
