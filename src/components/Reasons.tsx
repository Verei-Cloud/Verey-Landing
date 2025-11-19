import { motion } from 'framer-motion';

const reasons = [
    'Cost efficiency: eliminate DevOps overhead entirely.',
    'Faster time to market: deploy new environments in minutes.',
    'Reliability: automatic backups, fail-safes, and rollback logic.',
    'Flexibility: need a feature — let’s talk.',
    'Double safety: guarantees from Verey + partner cloud providers.',
];

export const Reasons = () => {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-5">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="fw-bold mb-3"
                        >
                            Reasons to choose Verey
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            className="text-secondary"
                        >
                            Don’t miss the opportunity to redefine your infrastructure workflow.
                        </motion.p>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-3">
                            {reasons.map((r, i) => (
                                <div key={r} className="col-md-6">
                                    <motion.div
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: 20 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.03 }}
                                        className="p-3 rounded-4 border border-success-subtle bg-success-subtle bg-opacity-10"
                                    >
                                        <p className="small mb-0">{r}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};