import { motion } from 'framer-motion';

const steps = [
    { title: 'Describe infra', text: 'YAML or UI. Define services, networks, security, storage.' },
    { title: 'Connect Git & cloud', text: 'AWS, Azure, GCP or mixed / hybrid setups.' },
    { title: 'Verey plans & executes', text: 'Validations, provisioning, policies, secrets.' },
    { title: 'Track & rollback', text: 'Full audit trail, history, environment cloning.' },
];

export const Steps = () => (
    <section className="py-5 section-soft" id="flow">
        <div className="container">
            <h2 className="fw-bold mb-4" style={{ color: 'var(--verey-dark)' }}>From idea to cloud</h2>
            <div className="row g-4">
                {steps.map((s, idx) => (
                    <div key={s.title} className="col-md-6 col-lg-3">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4 rounded-4 bg-white shadow-sm h-100"
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="fw-semibold mb-0">{s.title}</h5>
                                <span className="badge rounded-pill text-white"
                                      style={{ background:'linear-gradient(135deg,var(--verey-violet),var(--verey-magenta))' }}>
                  {idx + 1}
                </span>
                            </div>
                            <p className="small text-muted mb-0">{s.text}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);