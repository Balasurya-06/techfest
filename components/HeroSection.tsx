import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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
        <section className="relative min-h-screen bg-white pt-32 pb-20 px-4 md:px-8 w-full">
            <div className="w-4/5 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Headline with Image Cutouts */}
                        <div className="relative">
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                                Experience <span className="relative inline-block">
                                    <span className="relative z-10">Innovation</span>
                                    <div className="absolute inset-0 overflow-hidden rounded-full">
                                        <Image 
                                            src="/college-logo.png" 
                                            alt="Tech"
                                            fill
                                            className="object-cover opacity-30"
                                        />
                                    </div>
                                </span> at{' '}
                                <span className="block mt-2">
                                    <span className="relative inline-block">
                                        <span className="relative z-10">TechFest</span>
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                            <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
                                        </div>
                                    </span>{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        2K26
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            Join us for a National Level Technical Symposium organized by the Department of Computer Science and Engineering, 
                            Karpagam Academy of Higher Education. In association with Metaverse Association, we bring you cutting-edge 
                            workshops, competitions, and networking opportunities.
                        </p>

                        {/* CTA Button */}
                        {/* CTA Button */}
                        <motion.a
                            href="https://docs.google.com/forms/d/1tsiLFyOveddLrO794Vqn5WqIdr2A-1GrGI8rC0A4_HM/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg w-fit"
                        >
                            Register Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        {/* Partner Logos */}
                        <div className="flex items-center gap-8 pt-8 opacity-60">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-900 rounded"></div>
                                <span className="font-bold text-gray-900">KAHE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                                <span className="font-bold text-gray-900">CSE Dept</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-900 rounded-lg"></div>
                                <span className="font-bold text-gray-900">Metaverse</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Ticket & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Category Badge */}
                        <div className="absolute -top-6 right-32 z-20">
                            <div className="bg-white rounded-2xl px-6 py-4 shadow-2xl border-2 border-gray-900">
                                <p className="text-xs font-semibold text-gray-900 mb-3 text-center uppercase tracking-wider">Event Categories</p>
                                <div className="flex gap-3">
                                    <div className="group relative">
                                        <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white transition-transform group-hover:scale-110">
                                            Tech
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="group relative">
                                        <div className="w-14 h-14 rounded-full border-2 border-gray-900 flex flex-col items-center justify-center text-[10px] font-bold text-gray-900 bg-white transition-transform group-hover:scale-110 leading-tight">
                                            <span>Non-</span>
                                            <span>Tech</span>
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ticket Card */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            
                            {/* Ticket Notches */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                                <div className="w-8 h-8 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                                <div className="w-8 h-8 bg-white rounded-full"></div>
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-white/60 text-sm uppercase tracking-wider">Your Present</span>
                                    
                                    {/* Logos */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center">
                                            <Image 
                                                src="/college-logo.png" 
                                                alt="KAHE Logo" 
                                                width={32} 
                                                height={32}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center">
                                            <Image 
                                                src="/metaverse-logo.png" 
                                                alt="Metaverse Association Logo" 
                                                width={32} 
                                                height={32}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-white text-3xl font-black uppercase tracking-wider">
                                    Tech Fest Pass
                                </h3>

                                <div className="border-t border-dashed border-white/20 my-6"></div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-white/80">
                                        <span>Date</span>
                                        <span className="font-semibold">Feb 12, 2026</span>
                                    </div>
                                    <div className="flex justify-between text-white/80">
                                        <span>Price</span>
                                        <span className="font-semibold">₹200</span>
                                    </div>
                                    <div className="flex justify-between text-white/80">
                                        <span>Venue</span>
                                        <span className="font-semibold text-sm">KAHE, Coimbatore</span>
                                    </div>
                                </div>

                                <div className="border-t border-dashed border-white/20 my-4"></div>

                                {/* Organizer Info */}
                                <div className="space-y-2">
                                    <p className="text-white/60 text-xs uppercase tracking-wider">Organized By</p>
                                    <p className="text-white text-sm font-semibold">Department of CSE</p>
                                    <p className="text-white/80 text-xs">Karpagam Academy of Higher Education</p>
                                    <p className="text-white/60 text-xs italic">In Association with Metaverse Association</p>
                                </div>

                                <div className="flex justify-center gap-2 pt-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="text-white text-2xl">★</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Countdown Timer */}
                        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <p className="text-sm text-gray-500 mb-4 text-center uppercase tracking-wider">Event Starts In</p>
                            <div className="grid grid-cols-4 gap-4">
                                {Object.entries(timeLeft).map(([unit, value]) => (
                                    <div key={unit} className="text-center">
                                        <div className="text-3xl font-black text-gray-900">
                                            {String(value).padStart(2, '0')}
                                        </div>
                                        <div className="text-xs text-gray-500 uppercase mt-1">
                                            {unit}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
