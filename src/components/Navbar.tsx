import { useEffect, useState } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`verey-nav navbar navbar-expand-lg fixed-top ${
                scrolled ? "verey-nav--scrolled" : ""
            }`}
        >
            <div className="container">
                <a className="navbar-brand d-flex align-items-center gap-2" href="#top">
                    <img src="/assets/verey-logo.png" alt="Verey" width={28} height={28} />
                    <span className="fw-semibold">Verey</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#vereyNav"
                    aria-controls="vereyNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="vereyNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reasons">Why Verey</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#flow">Flow</a>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="btn btn-verey w-100 mt-2" href="#contact">Get a demo</a>
                        </li>
                    </ul>

                    <div className="d-none d-lg-block ms-3">
                        <a className="btn btn-verey rounded-pill px-3" href="#contact">Get a demo</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};