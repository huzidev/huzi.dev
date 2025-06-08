import MeteorShower from '@/components/MeteorShower';
import InfoSection from '@/components/InfoSection';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ConnectSection from '@/components/ConnectSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated background */}
      <MeteorShower />
      
      {/* Main content sections */}
      <div className="relative z-10">
        <InfoSection />
        <AboutSection />
        <ExpertiseSection />
        <ConnectSection />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-white/10 backdrop-blur-sm bg-black/20">
        <p className="text-gray-400">
          © 2025 Your Name. Crafted with ❤️ using Next.js & TailwindCSS
        </p>
      </footer>
    </main>
  );
}
