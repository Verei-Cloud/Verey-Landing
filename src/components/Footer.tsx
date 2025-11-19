export const Footer = () => {
    return (
        <footer className="py-4 bg-white border-top">
            <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                    <img src="/assets/verey-logo.png" alt="Verey" style={{ width: 36, height: 36 }} />
                    <span className="fw-semibold">Verey</span>
                </div>
                <div className="small text-muted">
                    © {new Date().getFullYear()} Verey — Infrastructure that builds itself.
                </div>
            </div>
        </footer>
    );
};