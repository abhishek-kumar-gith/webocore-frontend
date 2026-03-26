import { motion } from 'framer-motion';

export const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group card"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  );
};

export const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1';

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/50',
    secondary: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'text-primary-400 hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const AnimatedText = ({ text, delay = 0 }) => {
  const words = text.split(' ');

  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + index * 0.1, duration: 0.5 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
