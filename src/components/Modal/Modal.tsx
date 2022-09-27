import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ handleClose, children, title, className = '' }: any) => {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  const test = {};

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: '100' }}
        className={`rounded-lg overflow-hidden bg-white`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.05,
          delay: 0.1,
          // ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className='flex justify-between border-b border-b-gray-100 py-4 px-6'>
          <p className='text-lg font-semibold'>{title}</p>
          <button
            onClick={handleClose}
            className='bg-red-600 w-6 h-6 text-white rounded-full'
          >
            X
          </button>
        </div>
        <div className={`${className} p-6`}>{children}</div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
