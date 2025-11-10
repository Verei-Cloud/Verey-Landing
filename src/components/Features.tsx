import { motion } from 'framer-motion';

const features = [
    {
        title: 'Easy & Flexible Setup',
        text: 'Deploy from YAML or web UI in minutes — no DevOps, no scripts.',
        badge: '01',
    },
    {
        title: 'Unlimited scalability',
        text: 'From prototype to production — Verei scales across multiple providers.',
        badge: '02',
    },
    {
        title: 'Guaranteed security',
        text: 'Advanced security: IAM, encryption, least-privilege by default.',
        badge: '03',
    },
    {
        title: 'Smart rollbacks',
        text: 'If something fails, Verei instantly restores the latest stable version.',
        badge: '04',
    },
];

export const Features = () => {
    return (
        <section id="features" className="py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold mb-0">Key Features of Verei</h2>
                    <p className="text-muted mb-0 small">Inspired by your PDF deck.</p>
                </div>
                <div className="row g-4">
                    {features.map((f, i) => (
                        <div key={f.title} className="col-md-6 col-lg-3">
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="h-100 p-4 rounded-4 shadow-sm bg-white position-relative feature-card"
                            >
                                <div className="feature-badge">{f.badge}</div>
                                <h5 className="fw-semibold mb-2">{f.title}</h5>
                                <p className="small text-muted mb-0">{f.text}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};