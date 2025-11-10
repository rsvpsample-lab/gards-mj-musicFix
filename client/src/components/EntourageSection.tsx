import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-white py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-[hsl(var(--burgundy))] mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <img 
            src="https://res.cloudinary.com/dljaaf4x9/image/upload/v1762755529/Red_Yellow_and_Green_Watercolor_Floral_Tropical_Filipino_Wedding_Entourage_Virtual_Invitation_1_ppcmex.jpg"
            alt="Wedding Entourage"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;