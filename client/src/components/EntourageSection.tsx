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
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Best Man and Maid of Honor - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-x-8">
            <div data-testid="section-best-man">
              <h3 className="font-display italic text-lg text-[hsl(var(--gold))] mb-4">Best Man</h3>
              <p className="text-black font-normal text-xs">Jim Paolo Verzosa</p>
            </div>
            <div data-testid="section-maid-of-honor">
              <h3 className="font-display italic text-lg text-[hsl(var(--gold))] mb-4">Maid of Honor</h3>
              <p className="text-black font-normal text-xs">Mary Ann Bacay</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS (Men Left, Women Right) */}
          <div data-testid="section-principal-sponsors">
            <h3 className="font-display italic text-lg text-[hsl(var(--gold))] mb-4">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <p className="text-black font-normal text-xs">Allan Venasquez</p>
                <p className="text-black font-normal text-xs">Julius Mulle</p>
                <p className="text-black font-normal text-xs">Andrew Catli</p>
                <p className="text-black font-normal text-xs">Mark Matira</p>
                <p className="text-black font-normal text-xs">Godofredo Bayola</p>
                <p className="text-black font-normal text-xs">Julio Castillo Palazon</p>
              </div>
              <div>
                <p className="text-black font-normal text-xs">Ma. Gina Verzosa</p>
                <p className="text-black font-normal text-xs">Iris Mulle</p>
                <p className="text-black font-normal text-xs">Alma Catli</p>
                <p className="text-black font-normal text-xs">Rosemarie Matira</p>
                <p className="text-black font-normal text-xs">Rosaline Bayola</p>
                <p className="text-black font-normal text-xs">Emergina Rey</p>
                <p className="text-black font-normal text-xs">Rowena Talastas</p>
              </div>
            </div>
          </div>

          {/* Secondary Sponsors - 2 COLUMNS (Men Left, Women Right) */}
          <div>
            <h3 className="font-display italic text-lg text-[hsl(var(--gold))] mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8">
              <div className="space-y-3">
                <div data-testid="section-candle-man">
                  <h4 className="font-bold italic text-xs text-[hsl(var(--gold))] mb-1">Candle</h4>
                  <p className="text-black font-normal text-xs">John Carlo Verzosa</p>
                </div>
                <div data-testid="section-veil-man">
                  <h4 className="font-bold italic text-xs text-[hsl(var(--gold))] mb-1">Veil</h4>
                  <p className="text-black font-normal text-xs">Mark Manuel Bacay</p>
                </div>
                <div data-testid="section-cord-man">
                  <h4 className="font-bold italic text-xs text-[hsl(var(--gold))] mb-1">Cord</h4>
                  <p className="text-black font-normal text-xs">Jonathan Deomampo</p>
                </div>
              </div>
              <div className="space-y-3">
                <div data-testid="section-candle-woman">
                  <h4 className="font-bold italic text-xs text-[hsl(var(--gold))] mb-1">Candle</h4>
                  <p className="text-black font-normal text-xs">Maria Trisha Venasquez</p>
                </div>
                <div data-testid="section-veil-woman">
                  <h4 className="font-bold italic text-xs text-[hsl(var(--gold))] mb-1">Veil</h4>
                  <p className="text-black font-normal text-xs">Jemima Lois Rey</p>
                </div>
                <div data-testid="section-cord-woman">
                  <h4 className="font-bold italic text-xs text-[hsl(var(--gold))] mb-1">Cord</h4>
                  <p className="text-black font-normal text-xs">Mary Grace Bayola</p>
                </div>
              </div>
            </div>
          </div>

          {/* Groomsmen and Bridesmaids - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-x-8">
            <div data-testid="section-groomsmen">
              <h3 className="font-display italic text-lg text-[hsl(var(--gold))] mb-4">Groomsmen</h3>
              <div className="space-y-1">
                <p className="text-black font-normal text-xs">Gheremie Sombilla</p>
                <p className="text-black font-normal text-xs">Mark Joseph Bacay</p>
                <p className="text-black font-normal text-xs">Jacob Angelo Torino</p>
              </div>
            </div>
            <div data-testid="section-bridesmaids">
              <h3 className="font-display italic text-lg text-[hsl(var(--gold))] mb-4">Bridesmaids</h3>
              <div className="space-y-1">
                <p className="text-black font-normal text-xs">Beryl Verzosa</p>
                <p className="text-black font-normal text-xs">Jenny Vive Verzosa</p>
                <p className="text-black font-normal text-xs">Alexandra Mae Verzosa</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
