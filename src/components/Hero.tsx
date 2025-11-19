import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <header className="position-relative overflow-hidden hero-section">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="badge rounded-pill bg-success-subtle text-success mb-3 fw-semibold"
                        >
                            Verey — build your product, not your pipelines.
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="display-5 fw-bold mb-3"
                        >
                            Fast, efficient & affordable way to deploy, version and scale.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lead text-secondary mb-4"
                        >
                            Describe your infra in YAML or UI — Verey will provision, secure,
                            version and roll back for you. No full-time DevOps required.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="d-flex gap-3 flex-wrap"
                        >
                            <a href="#contact" className="btn btn-success btn-lg rounded-pill px-4 shadow-sm">
                                Contact us
                            </a>
                            <a href="#features" className="btn btn-outline-dark btn-lg rounded-pill px-4">
                                See features
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="d-flex align-items-center gap-3 mt-4"
                        >
                            <div className="small text-muted">
                                Gdańsk, Poland · partners@verey-platform.com · +48 730 664 826
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="hero-card shadow-lg rounded-4 p-3 bg-white position-relative"
                        >
                            {/* логотип */}
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img
                                    src="/assets/verey-logo.png"
                                    alt="Verey Logo"
                                    className="rounded-3"
                                    style={{ width: 64, height: 64, objectFit: 'cover' }}
                                />
                                <div>
                                    <div className="fw-semibold">Verey Cloud Orchestrator</div>
                                    <small className="text-muted">Multi-cloud · Secure · YAML-first</small>
                                </div>
                            </div>

                            <p className="mb-1 fw-semibold">Best Orchestrator</p>
                            <p className="text-muted small mb-3"> Fastest Way to Manage All Your Infrastructure</p>

                            <div className="d-flex gap-2 flex-wrap">
                                <span className="badge rounded-pill bg-success-subtle text-success">AWS</span>
                                <span className="badge rounded-pill bg-success-subtle text-success">Azure</span>
                                <span className="badge rounded-pill bg-success-subtle text-success">GCP</span>
                                <span className="badge rounded-pill bg-success-subtle text-success">Custom VPS</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
};