import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface WorkflowStep {
    title: string;
    description: string;
}

interface EventData {
    id: string;
    title: string;
    tagline: string;
    description: string;
    color: string;
    icon: any; // Using any for simplicity with Lucide icons passed as props/components
    workflow: WorkflowStep[];
}

interface EventDetailViewProps {
    event: EventData;
    onBack: () => void;
}

import { useRef, useEffect } from 'react';

// ... (interfaces remain unchanged)

const EventDetailView = ({ event, onBack }: EventDetailViewProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onBack]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
            <div className="relative w-full max-w-6xl h-[85vh] bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">

                {/* Close Button Mobile */}
                <button
                    onClick={onBack}
                    className="md:hidden absolute top-4 right-4 z-50 p-2 bg-white/80 rounded-full text-gray-900 shadow-md hover:bg-gray-100 transition-colors"
                >
                    <span className="sr-only">Close</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Left Side: Brand & Info */}
                <div className="w-full md:w-1/3 p-10 bg-gray-50 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100">
                    {/* Decorative Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -left-1/4 -bottom-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
                        <event.icon className="absolute -left-10 bottom-10 w-80 h-80 text-gray-100 transform rotate-12" />
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight leading-none"
                        >
                            {event.title}
                        </motion.h2>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-1 h-12 bg-gray-900 rounded-full"></div>
                            <p className="text-xl text-gray-500 italic font-medium">
                                &quot;{event.tagline}&quot;
                            </p>
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 leading-relaxed text-sm md:text-base max-w-sm"
                        >
                            {event.description}
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onClick={onBack}
                        className="relative z-10 hidden md:flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors group mt-8 font-semibold"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="tracking-wide text-sm">BACK TO EVENTS</span>
                    </motion.button>
                </div>

                {/* Right Side: Workflow Timeline */}
                <div className="w-full md:w-2/3 p-10 bg-white overflow-y-auto custom-scrollbar">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-1.5 h-6 bg-gray-900 rounded-full"></div>
                            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                                Event Workflow
                            </h3>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Vertical Connecting Line */}
                            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gray-100" />

                            {event.workflow.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="relative pl-16 group"
                                >
                                    {/* Circle Number Node */}
                                    <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-gray-900 font-bold text-sm">
                                            {index + 1}
                                        </span>
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            `}</style>
        </motion.div>
    );
};

export default EventDetailView;
