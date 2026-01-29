import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const WorkshopSpotlight = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-[2px] rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-600 animate-shimmer bg-[length:200%_100%]"
                >
                    <div className="bg-black rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 border border-yellow-500/30 text-yellow-400">
                                <Cpu className="w-8 h-8" />
                            </div>

                            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                                EXCLUSIVE AGENTIC AI WORKSHOP
                            </h2>

                            <p className="text-gray-400 max-w-xl mb-8 text-lg">
                                Dive deep into the future of Artificial Intelligence. Learn to build autonomous agents and understand the next generation of AI systems.
                            </p>

                            <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-500/20 border border-yellow-500 text-yellow-400 rounded-full uppercase tracking-wider text-sm font-bold animate-pulse">
                                <button> <span>Limited Seats Available</span> </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default WorkshopSpotlight;
