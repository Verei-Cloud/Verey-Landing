import { motion } from 'framer-motion';

export const Reliability = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="fw-bold mb-3"
                        >
                            Your infrastructure. Always safe. Always recoverable.
                        </motion.h2>
                        <p className="text-secondary">
                            Continuous backups, automatic fallbacks, full history, compliance, consistent state.
                            If something goes wrong — Verey brings it back.
                        </p>
                        <div className="d-flex gap-2 flex-wrap">
                            <span className="badge bg-success-subtle text-success rounded-pill">Backups</span>
                            <span className="badge bg-success-subtle text-success rounded-pill">Rollbacks</span>
                            <span className="badge bg-success-subtle text-success rounded-pill">Audit Trails</span>
                            <span className="badge bg-success-subtle text-success rounded-pill">Security-by-design</span>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="p-4 rounded-4 bg-dark text-white shadow-sm"
                        >
                            <h5 className="fw-semibold mb-2">“Infrastructure simplicity that grows with your business.”</h5>
                            <p className="small mb-0 text-white-50">
                                Verey was designed for teams that don’t want to burn weeks on DevOps, but still want
                                observability, security and repeatability.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reliability;