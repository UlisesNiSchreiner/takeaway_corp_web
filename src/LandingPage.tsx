import React, { useEffect, useState } from 'react';

const LandingPage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 10);

            const sections = [
                { id: 'home', offset: document.getElementById('home')?.offsetTop || 0 },
                { id: 'howwork', offset: document.getElementById('howwork')?.offsetTop || 0 },
                { id: 'pricing', offset: document.getElementById('pricing')?.offsetTop || 0 }
            ];

            const current = sections.reduce((prev, curr) => {
                return scrollY >= curr.offset - 100 ? curr : prev;
            }, sections[0]);

            setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // ejecutar una vez al montar
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Header */}
            <header className={`fixed-top ${scrolled ? 'scrolled navbar-light bg-white shadow-sm' : 'navbar-dark'}`}>
                <nav className="navbar navbar-expand-lg container">
                    <a className="navbar-brand" href="#">
                        <img src="/logoWording.png" loading="lazy" alt="MiMenu Logo" height="50" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center gap-2">
                            <li className="nav-item">
                                <a className={`nav-link nav-link-custom ${activeSection === 'home' ? 'active' : ''}`} href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link nav-link-custom ${activeSection === 'howwork' ? 'active' : ''}`} href="#howwork">Como funciona</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link nav-link-custom ${activeSection === 'pricing' ? 'active' : ''}`} href="#pricing">Precios</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav align-items-center gap-2 ms-lg-4">
                            <li className="nav-item">
                                <a className="btn btn-outline-light btn-login" href="/login">INGRESAR</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-light btn-header" href="#signup">Crear cuenta</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="video-header d-flex flex-column justify-content-center align-items-center text-white text-center">
                <video autoPlay muted loop playsInline className="bg-video">
                    <source src="/video.webm" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className="z-1 position-relative">
                    <h1 className="display-4 fw-bold p-3">Digitalizá tu menú y gestioná tus pedidos en un solo lugar</h1>
                    <h5 className="mt-2">Crea un menú online, recibí pedidos por QR o redes y avisá a tus clientes cuando estén listos.</h5>
                    <div className="d-flex gap-3 mt-4 justify-content-center flex-wrap">
                        <a href="#features" className="btn btn-primary-custom px-4 py-2 fw-semibold">Probar gratis</a>
                        <button
                            type="button"
                            className="btn custom-how-btn d-flex align-items-center gap-2 fs-5"
                            data-bs-toggle="modal"
                            data-bs-target="#howItWorksModal"
                        >
                            <i className="bi bi-play-circle-fill fs-5"></i>
                            <span className="fw-semibold">Cómo funciona</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section id="howwork" className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src="/menus.png"
                                alt="Crea menu"
                                loading="lazy"
                                className="img-fluid"
                                style={{ maxHeight: '300px' }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold">1. Creá tu menú</h3>
                            <p className="lead text-muted">Personalizalo con fotos, precios, opciones y control de stock.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3 className="fw-bold">2. Compartilo por QR o redes</h3>
                            <p className="lead text-muted">Generá un QR o link y pegalo donde tus clientes lo vean.</p>
                        </div>
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src="/devices.png"
                                loading="lazy"
                                alt="Compartir por qr"
                                className="img-fluid"
                                style={{ maxHeight: '300px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src="/tablet-orders.png"
                                alt="Gestion de pedidos"
                                loading="lazy"
                                className="img-fluid"
                                style={{ maxHeight: '300px' }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold">3. Recibí y gestioná los pedidos</h3>
                            <p className="lead text-muted">Todo en un solo panel con notificaciones en tiempo real.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-call-to-action p-4">
                <div className="container p-1 text-center">
                    <h2 className="mb-3 text-dark">Empezá gratis y digitalizá tu menú en minutos</h2>
                    <p className="text-muted mb-4">Sin tarjetas de crédito. Sin compromiso.</p>
                    <a href="/registro" className="btn btn-primary-custom btn-lg">Probar gratis ahora</a>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Planes y precios</h2>
                    <div className="row text-center">
                        {/* Plan Negocio */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Negocio</h5>
                                    <ul className="list-unstyled text-start my-4">
                                        <li>✓ Mes gratis de prueba</li>
                                        <li>✓ Menú digital personalizable</li>
                                        <li>✓ QRs y links para acceder al menú</li>
                                        <li>✓ Gestión de pedidos en tiempo real</li>
                                        <li>✓ Notificaciones al comprador</li>
                                        <li>✓ Control de caja</li>
                                        <li>✓ Cobro a través del menú digital</li>
                                        <li>✓ Reportes automáticos de ventas</li>
                                    </ul>
                                    <h4 className="fw-bold mb-3">ARS $15.000</h4>
                                    <a href="/registro" className="btn btn-primary-custom">Empezar ahora</a>
                                </div>
                            </div>
                        </div>

                        {/* Plan Pequeña cadena */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm border-0 opacity-75">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Pequeña cadena <span className="badge bg-secondary">Próximamente</span></h5>
                                    <ul className="list-unstyled text-start my-4">
                                        <li>✓ Múltiples negocios</li>
                                        <li>✓ Reportes y estadísticas globales</li>
                                    </ul>
                                    <h4 className="fw-bold mb-3">Muy pronto</h4>
                                </div>
                            </div>
                        </div>

                        {/* Plan Corporativo */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm border-0 opacity-75">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Corporativo <span className="badge bg-secondary">Próximamente</span></h5>
                                    <ul className="list-unstyled text-start my-4">
                                        <li>✓ Soporte 24hs</li>
                                        <li>✓ Integración con pasarelas de pago</li>
                                        <li>✓ Integración con sistemas de envíos</li>
                                    </ul>
                                    <h4 className="fw-bold mb-3">Muy pronto</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-2">Seguinos en nuestras redes</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="#" aria-label="Instagram" className="text-white"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.youtube.com/@menuclick" aria-label="Youtube" className="text-white"><i className="bi bi-youtube"></i></a>
                    </div>
                    <p className="mt-3 small">© {new Date().getFullYear()} MenuClick. Todos los derechos reservados.</p>
                </div>
            </footer>

            <div
                className="modal fade"
                id="howItWorksModal"
                tabIndex={-1}
                aria-labelledby="howItWorksModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            ></button>
                        </div>
                        <div className="modal-body ratio ratio-16x9">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/Ug8aggRtOps"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LandingPage;
