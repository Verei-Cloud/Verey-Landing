import { motion } from 'framer-motion';

const Reliability = () => {
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
                            style={{ color: 'var(--verey-dark)' }}
                        >
                            Your infrastructure. Always safe. Always recoverable.
                        </motion.h2>
                        <p style={{ color: 'var(--verey-muted)' }}>
                            Continuous backups, automatic fallbacks, full history, compliance, consistent state.
                            If something goes wrong — Verey brings it back.
                        </p>
                        <div className="d-flex gap-2 flex-wrap">
                            {['Backups','Rollbacks','Audit Trails','Security-by-design'].map(x => (
                                <span key={x} className="badge rounded-pill"
                                      style={{ background:'rgba(108,76,245,.12)', color:'var(--verey-violet)', border:'1px solid rgba(108,76,245,.25)' }}>
                  {x}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="p-4 rounded-4 text-white shadow-sm"
                            style={{ background:'linear-gradient(135deg,var(--verey-violet),var(--verey-blue))' }}
                        >
                            <h5 className="fw-semibold mb-2">“Infrastructure simplicity that grows with your business.”</h5>
                            <p className="small mb-0" style={{ color:'rgba(255,255,255,.85)' }}>
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