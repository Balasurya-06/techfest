'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SponsorsSection = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="w-11/12 md:w-4/5 mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Partners</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
                        Official Sponsors
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are proud to be supported by industry leaders who are shaping the future of technology and innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center justify-center max-w-4xl mx-auto">
                    {/* Xarlex Sponsor */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group flex flex-col items-center"
                    >
                        <div className="w-full h-48 md:h-64 relative transition-all duration-500 ease-in-out">
                            <Image 
                                src="/xarlex-logo.png" 
                                alt="Xarlex Logo" 
                                fill
                                className="object-contain drop-shadow-sm group-hover:drop-shadow-2xl transition-all duration-300"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Xarlex</h3>
                            <p className="text-sm text-gray-500 font-medium">Tech Innovation Partner</p>
                        </div>
                    </motion.div>

                    {/* Vygron Sponsor */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex flex-col items-center"
                    >
                        <div className="w-full h-48 md:h-64 relative transition-all duration-500 ease-in-out">
                            <Image 
                                src="/vygron-logo.png" 
                                alt="Vygron Logo" 
                                fill
                                className="object-contain drop-shadow-sm group-hover:drop-shadow-2xl transition-all duration-300"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Vygron</h3>
                            <p className="text-sm text-gray-500 font-medium">Strategic Technology Partner</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
