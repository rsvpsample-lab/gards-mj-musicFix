import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
      >
        <img 
          src="https://res.cloudinary.com/dljaaf4x9/image/upload/v1762755529/Red_Yellow_and_Green_Watercolor_Floral_Tropical_Filipino_Wedding_Entourage_Virtual_Invitation_1_ppcmex.jpg"
          alt="Wedding Entourage"
          className="w-full h-auto block"
        />
      </motion.div>
    </motion.section>
  );
};

export default EntourageSection;