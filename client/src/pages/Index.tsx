import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import cover1Image from '@assets/cover1_1762419093421.jpg';
import cover2Image from '@assets/cover2_1762419093422.jpg';
import cover3Image from '@assets/cover3_1762419093423.jpg';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import UnpluggedCeremonySection from '@/components/UnpluggedCeremonySection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import RSVPSection from '@/components/RSVPSection';
import EntourageSection from '@/components/EntourageSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicControl from '@/components/MusicControl';
import { AnimationContext } from '@/contexts/AnimationContext';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import envelopeImage from '@assets/7a7e36e2-b156-4b15-b8cb-2b8c6516d9fc-removebg-preview_1762573270050.png';

import gardss_removebg_preview from "@assets/gardss-removebg-preview.png";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    
    // Play music when invitation is opened
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    }
  };

  useEffect(() => {
    setAnimationsEnabled(true);
    
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;

      const handleError = (e: Event) => {
        console.error('Audio loading error:', e);
      };

      const handleLoadedData = () => {
        console.log('Audio data loaded successfully');
      };

      audio.addEventListener('error', handleError);
      audio.addEventListener('loadeddata', handleLoadedData);

      return () => {
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {/* Envelope Popup Dialog */}
      <Dialog open={!isEnvelopeOpen} onOpenChange={(open) => !open && setIsEnvelopeOpen(true)}>
        <DialogContent 
          className="max-w-full w-screen h-screen bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BA] border-none p-0 m-0 rounded-none"
          data-testid="dialog-envelope"
        >
          <DialogTitle className="sr-only">Wedding Invitation</DialogTitle>
          <DialogDescription className="sr-only">Open the wedding invitation to view details</DialogDescription>
          <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md"
              >
                <img
                  src={gardss_removebg_preview}
                  alt="Wedding Invitation Envelope"
                  className="w-full h-auto drop-shadow-2xl"
                  data-testid="img-envelope"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <Button
                  onClick={handleOpenInvitation}
                  className="bg-[hsl(var(--gold))] hover:bg-[#B8960F] text-white font-serif text-lg md:text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  data-testid="button-open-invitation"
                >
                  Open Invitation
                </Button>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/dsicpzepi/video/upload/v1762510143/ytmp3free.cc_elliot-james-reay-i-think-they-call-this-love-official-music-video-youtubemp3free.org_g8pdoi.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <div className="min-h-screen relative">
        <Navigation />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <InvitationRevealSection />
          <CountdownSection />
          <StorySection />
          <CoverSection
            imageUrl={cover1Image}
            alt="Gards & Mj Wedding Cover Image 1"
          />
          <ScrollTriggeredTimeline />
          <VenueSection />
          <CoverSection
            imageUrl={cover2Image}
            alt="Gards & Mj Wedding Cover Image 2"
          />
          <DressCodeSection />
          <UnpluggedCeremonySection />
          <HashtagGiftsSection />
          <RSVPSection />
          <EntourageSection />
          <MemorableMomentsSection />
          <CoverSection
            imageUrl={cover3Image}
            alt="Gards & Mj Wedding Cover Image 3"
          />
          <FAQSection />
          <Footer />
        </main>

        {/* Music Control - always show */}
        <MusicControl audioRef={audioRef} />
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;