import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }: any) => {
  return (
    <motion.div
      onClick={onClick}
      className='absolute top-0 left-0 h-screen w-full bg-black/50 grid place-content-center'
      style={{ zIndex: '100' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
