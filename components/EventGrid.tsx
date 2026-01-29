import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventsData } from '../data/eventsData';
import EventDetailView from './EventDetailView';
import { ArrowUpRight } from 'lucide-react';

const EventGrid = () => {
    const [activeEvent, setActiveEvent] = useState<typeof eventsData[0] | null>(null);

    return (
        <section id="events" className="py-32 px-4 relative bg-white">
            <div className="w-4/5 mx-auto">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Events</span>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-4">
                        Event Categories
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore our diverse range of technical and non-technical competitions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {eventsData.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setActiveEvent(event)}
                            className="group cursor-pointer border-b border-gray-200 pb-8 hover:border-blue-600 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                                        {event.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                                        {event.description}
                                    </p>
                                    <p className="text-blue-600 text-xs font-semibold italic">
                                        {event.tagline}
                                    </p>
                                </div>
                                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>

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
