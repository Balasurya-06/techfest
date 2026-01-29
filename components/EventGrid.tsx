import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventsData } from '../data/eventsData';
import EventDetailView from './EventDetailView';

const EventGrid = () => {
    const [activeEvent, setActiveEvent] = useState<typeof eventsData[0] | null>(null);

    return (
        <section id="events" className="py-20 px-4 relative min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    {!activeEvent ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-orbitron text-center mb-16 text-white uppercase tracking-wider relative inline-block left-1/2 -translate-x-1/2">
                                <span className="relative z-10">Events</span>
                                <div className="absolute -inset-2 bg-neon-green/20 blur-lg -skew-x-12 z-0" />
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {eventsData.map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        onClick={() => setActiveEvent(event)}
                                        className="glass-card p-6 rounded-xl relative group overflow-hidden cursor-pointer"
                                    >
                                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${event.color} opacity-10 blur-2xl rounded-bl-full group-hover:opacity-20 transition-opacity`} />

                                        <div className="mb-4 text-neon-green group-hover:text-white transition-colors duration-300">
                                            <event.icon className="w-8 h-8" />
                                        </div>

                                        <h3 className="text-xl font-orbitron text-white mb-2 group-hover:text-neon-green transition-colors">
                                            {event.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm">
                                            {event.description}
                                        </p>

                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <AnimatePresence>
                    {activeEvent && (
                        <EventDetailView
                            event={activeEvent}
                            onBack={() => setActiveEvent(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default EventGrid;
