import React from 'react';
import { motion } from 'framer-motion';
import img from '../../../assets/p4.png';
// import './PotraittSecttion.css';

const PotraittSecttion = () => {
  return (
    <div className="portrait-section">
      <div className="water-effect">
      <motion.img
            src={img}
            alt="Tahmid"
            className="rounded-md mx-auto w-48 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
      </div>
    </div>
  );
};

export default PotraittSecttion;
