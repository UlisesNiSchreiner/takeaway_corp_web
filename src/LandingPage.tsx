import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Header */}
            <header className={`fixed-top ${scrolled ? 'scrolled navbar-light bg-white shadow-sm' : 'navbar-dark'}`}>
                <nav className="navbar navbar-expand-lg container">
                    <a className="navbar-brand" href="#">
                        <img src="/logoWording.png" alt="MiMenu Logo" height="60" />
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
                                <a className="nav-link nav-link-custom active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-header" href="#signup">Crear cuenta</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="video-header d-flex flex-column justify-content-center align-items-center text-white text-center">
                <video autoPlay muted loop playsInline className="bg-video">
                    <source src="/video.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className="z-1 position-relative">
                    <h1 className="display-4 fw-bold">Centraliza todo tu menú acá</h1>
                    <h5 className="mt-2">Aprendé a usar nuestro QR</h5>
                    <div className="d-flex gap-3 mt-4 justify-content-center flex-wrap">
                        <a href="#features" className="btn btn-primary-custom px-4 py-2 fw-semibold">Comenzar</a>
                        <button type="button" className="btn custom-how-btn" data-bs-toggle="button">
                            <i className="bi bi-play-circle-fill fs-5"></i> Cómo funciona
                        </button>
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src="/menus.png"
                                alt="Promoción"
                                className="img-fluid"
                                style={{ maxHeight: '300px' }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold">Genera tu menú de forma simple y disponibilizalo</h3>
                            <p className="lead text-muted">Crea tu menu de forma perzonalizada con contro de stock y modificalo cuando quieras</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3 className="fw-bold">Gestiona todos tus pedidos en un solo lugar</h3>
                            <p className="lead text-muted">Disponibiliza tu menu en tu local, chats bos y redes sociales. Gestiona de forma sensilla todos tus pedidos</p>
                        </div>
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src="/devices.png"
                                alt="Promoción"
                                className="img-fluid"
                                style={{ maxHeight: '300px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="section-call-to-action p-4"
            >
                <div className="container p-1 text-center">
                    <h2 className="mb-3 text-dark">
                        Crea tu menú, probá la plataforma un mes gratis
                    </h2>
                    <a href="/registro" className="btn btn-primary-custom btn-lg">
                        ¡Comenzar!
                    </a>
                </div>
            </section>


            {/* Features Section */}
            <section id="features" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Características del Producto</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <img
                                    src="/menus-item.png"
                                    alt="Menu personalizable"
                                    className="img-fluid"
                                    style={{ maxHeight: '120px' }}
                                />
                            </div>
                            <h5 className="fw-bold">Menu perzonalizable</h5>
                            <p>Puedes generar y mantener actualizado tu menu. con control de stoc, precios, etc</p>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <img
                                    src="/qr-smartpone-item.png"
                                    alt="Menu personalizable"
                                    className="img-fluid"
                                    style={{ maxHeight: '120px' }}
                                />
                            </div>
                            <h5 className="fw-bold">Menu QR y digiltal</h5>
                            <p>Podes disponibilizar tu menu con QR y mediante links en tus redes/chatbots.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <img
                                    src="/report-item.png"
                                    alt="Menu personalizable"
                                    className="img-fluid"
                                    style={{ maxHeight: '120px' }}
                                />
                            </div>
                            <h5 className="fw-bold">Reportes y estadisticas</h5>
                            <p>Genera estadisticas de tus ventas y pedidos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-2">Seguinos en nuestras redes</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                    </div>
                    <p className="mt-3 small">© {new Date().getFullYear()} MiMenu. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
