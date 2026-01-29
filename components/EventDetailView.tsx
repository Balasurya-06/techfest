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

const EventDetailView = ({ event, onBack }: EventDetailViewProps) => {
    return (
        <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
            <div className="relative w-full max-w-6xl h-[90vh] bg-black/90 border border-neon-green rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(57,255,20,0.15)]">

                {/* Close Button Mobile */}
                <button
                    onClick={onBack}
                    className="md:hidden absolute top-4 left-4 z-50 p-2 bg-black/50 border border-neon-green/50 rounded-full text-neon-green"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                {/* Left Side: Info */}
                <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-neon-green/20 relative overflow-hidden flex flex-col justify-center">
                    {/* Watermark Icon */}
                    <div className="absolute -left-20 -bottom-20 opacity-5 pointer-events-none">
                        <event.icon className="w-96 h-96 text-neon-green" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-neon-green mb-4 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                            {event.title}
                        </h2>
                        <p className="text-xl text-gray-300 italic mb-6 font-light border-l-2 border-neon-green pl-4">
                            &quot;{event.tagline}&quot;
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            {event.description}
                        </p>

                        <button
                            onClick={onBack}
                            className="hidden md:flex items-center gap-2 text-neon-green hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                            <span className="font-orbitron tracking-wider">RETURN TO EVENTS</span>
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: Workflow */}
                <div className="w-full md:w-2/3 p-8 bg-gradient-to-br from-gray-900/50 to-black overflow-y-auto">
                    <h3 className="text-2xl font-orbitron text-white mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-neon-green rounded-full" />
                        EVENT WORKFLOW
                    </h3>

                    <div className="space-y-6 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neon-green/50 to-transparent" />

                        {event.workflow.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="relative pl-12 md:pl-16"
                            >
                                {/* Number Node */}
                                <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-black border border-neon-green rounded-full flex items-center justify-center text-neon-green font-bold font-orbitron text-sm md:text-lg shadow-[0_0_10px_rgba(57,255,20,0.3)] z-10">
                                    {index + 1}
                                </div>

                                {/* Content Card */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-neon-green/50 transition-colors group">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EventDetailView;
