export const Footer = () => {
    return (
        <footer className="py-4 border-top" style={{ background:'#fff' }}>
            <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                    <img src="/assets/Verey-platform-icon.png" alt="Verey" style={{ width: 100, height: 100 }} />
                    {/*<span className="fw-semibold">Verey</span>*/}
                </div>
                <div className="small" style={{ color:'var(--verey-muted)' }}>
                    © {new Date().getFullYear()} Verey — Infrastructure that builds itself.
                </div>
            </div>
        </footer>
    );
};
