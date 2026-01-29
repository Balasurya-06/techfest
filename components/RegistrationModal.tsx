import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const RegistrationModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky Bottom Status Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-neon-green/50 backdrop-blur-md z-50 py-3 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                        <div className="absolute inset-0 bg-neon-green rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="font-orbitron tracking-widest text-sm md:text-base text-white">
                        STATUS: <span className="text-neon-green font-bold">ON-SPOT REGISTRATION AVAILABLE</span>
                    </span>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-neon-green text-black font-bold font-orbitron px-6 py-2 rounded-sm hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                >
                    REGISTER NOW - ₹200
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-black border border-neon-green p-1 w-full max-w-lg relative shadow-[0_0_50px_rgba(57,255,20,0.2)]"
                        >
                            <div className="border border-neon-green/30 p-6 md:p-8 bg-black/50">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <h2 className="text-2xl font-orbitron text-white mb-6 border-b border-gray-800 pb-4">
                                    Registration Details
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-neon-green/10 border border-neon-green/20 p-4 rounded text-center">
                                        <p className="text-gray-300 text-sm uppercase tracking-wide mb-1">Registration Fee</p>
                                        <p className="text-4xl font-bold text-neon-green font-orbitron">₹200</p>
                                        <p className="text-xs text-gray-500 mt-2">Includes access to all events</p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                                            <p>Access to technical & non-technical events</p>
                                        </div>
                                        <div className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                                            <p>Participation certificate provided</p>
                                        </div>
                                        <div className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                                            <p>Lunch and refreshment included</p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="flex items-center gap-2 text-yellow-500 mb-4 bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                                            <AlertCircle className="w-5 h-5" />
                                            <span className="text-sm">Scan the QR code at the registration desk</span>
                                        </div>

                                        <a
                                            href="https://docs.google.com/forms/d/1tsiLFyOveddLrO794Vqn5WqIdr2A-1GrGI8rC0A4_HM/viewform"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center bg-neon-green text-black font-orbitron font-bold py-3 hover:bg-white transition-colors"
                                        >
                                            PROCEED TO PAY
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default RegistrationModal;
