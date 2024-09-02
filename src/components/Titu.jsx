import { motion } from 'framer-motion';

const textLine1 = "Reflejos de";
const textLine2 = "Murcia";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { 
      staggerChildren: 0.04, 
      delayChildren: 0.3 * i,
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      ease: 'easeOut', 
      duration: 0.5,
    },
  },
};

const Titu = () => {
  return (
    <div id='inicio' className='title-container'>
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        className='letras'
        animate="visible"
      >
        <div className='line'>
          {textLine1.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className='letter'
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className='line'>
          {textLine2.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className='letter'
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.h1>
    </div>
  );
};

export default Titu;
