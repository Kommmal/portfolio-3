import { CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Alert = ({ type, message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`flex flex-col items-center p-6 rounded-lg shadow-lg max-w-sm w-full 
          ${type === 'success' ? 'bg-[#0f172a] text-white border border-blue-500' : 'bg-[#0f172a] text-white border border-blue-500'}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2, rotate: 360 }}
          transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
        >
          {type === 'success' ? (
            <CheckCircle className="w-12 h-12 text-blue-500" />
          ) : (
            <XCircle className="w-12 h-12 text-black" />
          )}
        </motion.div>
        <span className="mt-4 text-lg font-semibold text-center">{message}</span>
      </motion.div>
    </div>
  );
};

export default Alert;
