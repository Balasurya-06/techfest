'use client';
import { motion } from 'framer-motion';

const Marquee = () => {
    const items = [
        "CODING CHALLENGE",
        "PAPER PRESENTATION", 
        "PROJECT EXPO",
        "WORKSHOPS",
        "HACKATHON",
        "GAMING ZONES",
        "TREASURE HUNT",
        "QUIZ & DEBATES"
    ];

    return (
        <div className="bg-black py-8 overflow-hidden border-y border-gray-800 relative z-20">
            <div className="flex select-none">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0"
                >
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center px-8">
                            <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 uppercase italic tracking-tighter hover:text-white transition-colors cursor-default whitespace-nowrap">
                                {item}
                            </span>
                            <span className="ml-16 text-3xl text-[#39FF14]">★</span>
                        </div>
                    ))}
                </motion.div>
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0"
                >
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center px-8">
                            <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 uppercase italic tracking-tighter hover:text-white transition-colors cursor-default whitespace-nowrap">
                                {item}
                            </span>
                            <span className="ml-16 text-3xl text-[#39FF14]">★</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
