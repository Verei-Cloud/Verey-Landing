import {type FormEvent, useState} from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await new Promise(r => setTimeout(r, 600)); // mock
            setStatus('success'); setName(''); setCompany(''); setEmail(''); setMessage('');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-5 section-soft position-relative">
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
                            Contact us
                        </motion.h2>
                        <p style={{ color: 'var(--verey-muted)' }}>
                            Want to integrate Verey in your current infra, need a demo or want to discuss enterprise features?
                        </p>

                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><strong>Phone:</strong> +48 730 664 826</li>
                            <li className="mb-2"><strong>Website:</strong> <a className="link-muted" href="#">verey-platform.com</a></li>
                            <li className="mb-2"><strong>Email:</strong> partners@verey-platform.com</li>
                            <li className="mb-2"><strong>Location:</strong> Gdańsk, Poland</li>
                        </ul>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <motion.form
                            onSubmit={handleSubmit}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="p-4 rounded-4 bg-white shadow-sm"
                            style={{ border:'1px solid rgba(108,76,245,.15)' }}
                        >
                            <div className="mb-3">
                                <label className="form-label">Your name</label>
                                <input value={name} onChange={e=>setName(e.target.value)} type="text"
                                       className="form-control rounded-3" placeholder="Yehor Kochetov" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Company / project</label>
                                <input value={company} onChange={e=>setCompany(e.target.value)} type="text"
                                       className="form-control rounded-3" placeholder="Startup, SaaS, agency..." />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input value={email} onChange={e=>setEmail(e.target.value)} type="email"
                                       className="form-control rounded-3" placeholder="you@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">What do you want to deploy?</label>
                                <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={3}
                                          className="form-control rounded-3" placeholder="K8s apps, microservices, serverless..." required />
                            </div>

                            <button type="submit" className="btn rounded-pill px-4 btn-verey" disabled={status==='loading'}>
                                {status==='loading' ? 'Sending…' : 'Send request'}
                            </button>

                            {status==='success' && <p className="mt-3 text-success small">Thank you! We will contact you.</p>}
                            {status==='error' && <p className="mt-3 text-danger small">Oops. Something went wrong.</p>}
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};