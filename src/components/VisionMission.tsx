import { motion } from 'framer-motion';

export const VisionMission = () => {
    return (
        <section id="vision" className="py-5 bg-light">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-5">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="fw-bold mb-3"
                        >
                            Vision & Mission
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-secondary"
                        >
                            Verei makes infrastructure management effortless and accessible for every company —
                            no matter its size, team or cloud provider.
                        </motion.p>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <motion.div
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="p-4 rounded-4 bg-white shadow-sm h-100"
                                >
                                    <h5 className="fw-semibold mb-2">Our Mission</h5>
                                    <p className="small text-muted mb-0">
                                        “To make infrastructure management effortless and accessible for every company.”
                                    </p>
                                </motion.div>
                            </div>
                            <div className="col-md-6">
                                <motion.div
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: 0.1 }}
                                    className="p-4 rounded-4 bg-white shadow-sm h-100"
                                >
                                    <h5 className="fw-semibold mb-2">Our Vision</h5>
                                    <p className="small text-muted mb-0">
                                        “A world where anyone can deploy, scale & secure apps using only YAML or intuitive UI.”
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};