import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
    const targetDate = new Date('2026-02-12T00:00:00');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 flex flex-col items-center"
            >
                <div className="mb-6 relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                        src="/college-logo.png"
                        alt="Karpagam Academy Logo"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    />
                </div>

                <h2 className="text-neon-green text-lg md:text-xl tracking-[0.2em] mb-4 font-bold">
                    KARPAGAM ACADEMY OF HIGHER EDUCATION
                </h2>

                <h1 className="text-6xl md:text-8xl font-black font-orbitron mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-green to-white animate-flicker neon-text">
                    TECH FEST 2K26
                </h1>

                <div className="h-1 w-full max-w-2xl mx-auto bg-neon-green mb-6 shadow-[0_0_10px_#39FF14]" />

                <h3 className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-12">
                    Faculty of Engineering | Dept of CSE
                </h3>

                {/* Countdown Timer */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="glass-card p-4 md:p-6 rounded-lg min-w-[100px] md:min-w-[140px]">
                            <div className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-2">
                                {String(value).padStart(2, '0')}
                            </div>
                            <div className="text-xs md:text-sm uppercase tracking-widest text-neon-green">
                                {unit}
                            </div>
                        </div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px #39FF14" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black border border-neon-green text-neon-green px-8 py-3 rounded-none font-orbitron text-lg tracking-wider uppercase hover:bg-neon-green hover:text-black transition-all duration-300"
                    onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore Events
                </motion.button>
            </motion.div>
        </section>
    );
};

export default HeroSection;
