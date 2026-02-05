import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const WorkshopSpotlight = () => {
    return (
        <section id="workshop" className="py-32 bg-gray-50">
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-medium text-gray-600 border-b-2 border-gray-900 pb-2 inline-block mb-8">
                            Featured Workshop
                        </h3>
                        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                            <Image 
                                src="/workshop-poster.jpg"
                                alt="Agentic AI Workshop Poster"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                            We Have Put Together A Special{' '}
                            <span className="inline-block bg-[#39FF14] px-4 py-1 mt-2 transform -rotate-1 text-black">
                                Agentic AI Workshop
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                            <p className="text-base leading-relaxed">
                                Dive deep into the future of Artificial Intelligence. Learn to build autonomous agents 
                                and understand the next generation of AI systems in this exclusive hands-on workshop.
                            </p>
                            <p className="text-base leading-relaxed">
                                Master cutting-edge AI techniques with expert guidance. Build real-world agentic systems, 
                                explore advanced frameworks, and gain practical skills that will set you apart in the AI revolution.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            Learn More
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorkshopSpotlight;
