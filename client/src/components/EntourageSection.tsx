import { motion } from 'framer-motion';

import Red_Yellow_and_Green_Watercolor_Floral_Tropical_Filipino_Wedding_Entourage_Virtual_Invitation from "@assets/Red Yellow and Green Watercolor Floral Tropical Filipino Wedding Entourage Virtual Invitation.png";

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-white py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-display italic text-[hsl(var(--burgundy))]">
            Entourage
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <img 
            src={Red_Yellow_and_Green_Watercolor_Floral_Tropical_Filipino_Wedding_Entourage_Virtual_Invitation}
            alt="Wedding Entourage"
            className="w-full h-auto block rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;