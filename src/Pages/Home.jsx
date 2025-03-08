import React from 'react'


function Home() {
  return (
    <div>
        <header id="header" className="header d-flex align-items-center fixed-top">
      <div
        className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
      >
        <a
          href="index.htmll"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/**  Uncomment the line below if you also wish to use an image logo*/} 
          {/** <img src="assets/img/logo.png" alt=""> */} 
          <h1 className="sitename">CALVENT</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li className="dropdown">
              <a href="#"
                ><span>Service</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="/service">Shared CFO</a></li>
                <li><a href="/consulting">Consulting </a></li>
              </ul>
            </li>            
            <li><a href="/blog">Blog</a></li>  
            <li><a href="/contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="index.html">Get Started</a>
      </div>
    </header>
    
        <main className="main">
            <section id="hero" className="hero section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div
                    className="hero-content"
                    data-aos="fade-up"
                    data-aos-delay={200}
                    >
                    <div className="company-badge mb-4">
                        <i className="bi bi-gear-fill me-2" />
                        Working for your success
                    </div>
                    <h1 className="mb-4">
                        Adapting to <br />
                        Evolving Business
                        <span className="accent-text">Needs</span>
                    </h1>
                    <p className="mb-4 mb-md-5">
                        Nullam quis ante. Etiam sit amet orci eget eros faucibus
                        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                        sodales sagittis magna.
                    </p>
                    <div className="hero-buttons">
                        <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">
                        CONTACT US
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                    className="hero-image"
                    data-aos="zoom-out"
                    data-aos-delay={300}
                    >
                    <img
                        src="assets/img/Revenue-bro.svg"
                        alt="Hero Image"
                        className="img-fluid"
                    />
                    {/*div class="customers-badge">
                        <div class="customer-avatars">
                        <img
                            src="assets/img/avatar-1.webp"
                            alt="Customer 1"
                            class="avatar"
                        />
                        <img
                            src="assets/img/avatar-2.webp"
                            alt="Customer 2"
                            class="avatar"
                        />
                        <img
                            src="assets/img/avatar-3.webp"
                            alt="Customer 3"
                            class="avatar"
                        />
                        <img
                            src="assets/img/avatar-4.webp"
                            alt="Customer 4"
                            class="avatar"
                        />
                        <img
                            src="assets/img/avatar-5.webp"
                            alt="Customer 5"
                            class="avatar"
                        />
                        <span class="avatar more">12+</span>
                        </div>
                        <p class="mb-0 mt-2">
                        12,000+ lorem ipsum dolor sit amet consectetur adipiscing
                        elit
                        </p>
                    div*/}
                    </div>
                </div>
                </div>
                {/*--
                <div
                class="row stats-row gy-4 mt-5"
                data-aos="fade-up"
                data-aos-delay="500"
                >
                <div class="col-lg-3 col-md-6">
                    <div class="stat-item">
                    <div class="stat-icon">
                        <i class="bi bi-trophy"></i>
                    </div>
                    <div class="stat-content">
                        <h4>3x Won Awards</h4>
                        <p class="mb-0">Vestibulum ante ipsum</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="stat-item">
                    <div class="stat-icon">
                        <i class="bi bi-briefcase"></i>
                    </div>
                    <div class="stat-content">
                        <h4>6.5k Faucibus</h4>
                        <p class="mb-0">Nullam quis ante</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="stat-item">
                    <div class="stat-icon">
                        <i class="bi bi-graph-up"></i>
                    </div>
                    <div class="stat-content">
                        <h4>80k Mauris</h4>
                        <p class="mb-0">Etiam sit amet orci</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="stat-item">
                    <div class="stat-icon">
                        <i class="bi bi-award"></i>
                    </div>
                    <div class="stat-content">
                        <h4>6x Phasellus</h4>
                        <p class="mb-0">Vestibulum ante ipsum</p>
                    </div>
                    </div>
                </div>
                </div>*/}
            </div>
            </section>
            {/* /Hero Section */}
            {/* Call To Action Section */}
            <section id="call-to-action" className="call-to-action section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row content justify-content-center align-items-center position-relative">
                <div className="col-lg-8 mx-auto text-center">
                    <h2 className="display-4 mb-4">Introduction to Calvent </h2>
                    <p className="mb-4">
                    In today’s fast-paced business world, staying ahead requires
                    adaptability, clarity, and a solid strategy. With a focus on
                    data-driven strategies and practical insights, we empower you to
                    make the right business decisions, improve cash flow, and grow
                    sustainably.
                    <br />
                    <br />
                    Led by Sanath, our founder, Calvent brings years of experience in
                    guiding businesses to success. Sanath has trained numerous
                    consultants, and his deep expertise in business strategy,
                    financial planning, and risk management ensures that we provide
                    only the most reliable, data-driven solutions to meet your
                    business needs.
                    </p>
                    <a href="#" className="btn btn-cta">
                    Learn More
                    </a>
                </div>
                {/* Abstract Background Elements */}
                <div className="shape shape-1">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z"
                        transform="translate(100 100)"
                    />
                    </svg>
                </div>
                <div className="shape shape-2">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z"
                        transform="translate(100 100)"
                    />
                    </svg>
                </div>
                {/* Dot Pattern Groups */}
                <div className="dots dots-1">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <pattern
                        id="dot-pattern"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </pattern>
                    <rect width={100} height={100} fill="url(#dot-pattern)" />
                    </svg>
                </div>
                <div className="dots dots-2">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <pattern
                        id="dot-pattern-2"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </pattern>
                    <rect width={100} height={100} fill="url(#dot-pattern-2)" />
                    </svg>
                </div>
                <div className="shape shape-3">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z"
                        transform="translate(100 100)"
                    />
                    </svg>
                </div>
                </div>
            </div>
            </section>
            {/* /Call To Action Section */}
            {/* Stats Section */}
            <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                    <span className="number purecounter" data-target={232}>
                        0
                    </span>
                    <p>Clients</p>
                    </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                    <span className="number purecounter" data-target={521}>
                        0
                    </span>
                    <p>Projects</p>
                    </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                    <span className="number purecounter" data-target={1453}>
                        0
                    </span>
                    <p>Hours Of Support</p>
                    </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                    <span className="number purecounter" data-target={32}>
                        0
                    </span>
                    <p>Workers</p>
                    </div>
                </div>
                {/* End Stats Item */}
                </div>
            </div>
            </section>
            {/* /Stats Section */}
            {/*--
            <section>
        <div class="section-wrapper">
        <div class="s1">
            <i class="bi bi-award"></i>

            <div class="title"><h3>Shared CFO Services</h3></div>
            <div class="description">
                Small and mid-sized businesses often face financial challenges that demand expert attention but lack the resources for a full-time CFO. Shared CFO services provide flexible, high-level financial oversight, ensuring everything from budgeting to cash flow is managed effectively.
            </div>
            <a class="more_btn" href="#">Read More</a>

        </div>
        <div class="image-container">
            <img src="assets/img/hero1.png" alt="Service Illustration">
        </div>
        <div class="s1">
            <i class="bi bi-shield-check"></i>

            <div class="title"><h3>Consulting Services</h3></div>
            <div class="description">
                Expert consulting services offer a fresh perspective, helping companies refine their strategies, streamline processes, and tackle challenges confidently. It ensures businesses stay ahead in a competitive environment, whether it is compliance requirements, improving profitability, or identifying new growth opportunities.
            </div>
            <a class="more_btn" href="#">Read More</a>

        </div>
            </div>

        </section>-*/}
            {/* Features Section */}
            <section id="features" className="features section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>What We Do?</h2>
                <p>
                We understand that every business is unique, and we're here to help
                you tackle your specific challenges and achieve your goals.
                </p>
            </div>
            {/* End Section Title */}
            <div className="container">
                <div className="d-flex justify-content-center">
                <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay={100}>
                    <li className="nav-item">
                    <a
                        className="nav-link active show"
                        data-bs-toggle="tab"
                        data-bs-target="#features-tab-1"
                    >
                        <h4>Shared CFO</h4>
                    </a>
                    </li>
                    {/* End tab nav item */}
                    <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#features-tab-2"
                    >
                        <h4>Consulting </h4>{" "}
                    </a>
                    {/* End tab nav item */}
                    </li>
                    {/* End tab nav item */}
                </ul>
                </div>
                <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
                <div className="tab-pane fade active show" id="features-tab-1">
                    <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                        <h3>Shared CFO Services</h3>
                        <p className="fst-italic">
                        Small and mid-sized businesses often face financial challenges
                        that demand expert attention but lack the resources for a
                        full-time CFO. Shared CFO services provide flexible,
                        high-level financial oversight, ensuring everything from
                        budgeting to cash flow is managed effectively.
                        </p>
                        <ul>
                        {/*--
                    <li>
                        <i class="bi bi-check2-all"></i>
                        <span
                        >Ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</span
                        >
                    </li>
                    <li>
                        <i class="bi bi-check2-all"></i>
                        <span
                        >Duis aute irure dolor in reprehenderit in voluptate
                        velit.</span
                        >
                    </li>*/}
                        <li>
                            <i className="bi bi-check2-all" />
                            <span>
                            This service is a cost-effective way to access CFO-level
                            expertise without hiring full-time staff. It’s designed to
                            give your business the support it needs to succeed while
                            saving on overhead costs.
                            </span>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                        <img src="assets/img/sfo.svg" alt="" className="img-fluid" />
                    </div>
                    </div>
                </div>
                {/* End tab content item */}
                <div className="tab-pane fade" id="features-tab-2">
                    <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                        <h3>Consulting Services</h3>
                        <p className="fst-italic">
                        Expert consulting services offer a fresh perspective, helping
                        companies refine their strategies, streamline processes, and
                        tackle challenges confidently. It ensures businesses stay
                        ahead in a competitive environment, whether it is compliance
                        requirements, improving profitability, or identifying new
                        growth opportunities.
                        </p>
                        <ul>
                        {/*--
                    <li>
                        <i class="bi bi-check2-all"></i>
                        <span
                        >Ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</span
                        >
                    </li>
                    <li>
                        <i class="bi bi-check2-all"></i>
                        <span
                        >Duis aute irure dolor in reprehenderit in voluptate
                        velit.</span
                        >
                    </li>
                    <li>
                        <i class="bi bi-check2-all"></i>
                        <span
                        >Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.</span
                        >
                    </li>*/}
                        <li>
                            <i className="bi bi-check2-all" />
                            <span>
                            Instead of a one-size-fits-all approach, this service
                            offers advice based on your specific needs and goals. It’s
                            a partnership that complements your team’s work and helps
                            unlock your business’s full potential.
                            </span>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                        <img
                        src="assets/img/Pitch meeting-bro.svg"
                        alt=""
                        className="img-fluid"
                        />
                    </div>
                    </div>
                </div>
                {/* End tab content item */}
                <div className="tab-pane fade" id="features-tab-3">
                    <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                        <h3>Voluptatibus commodi accusamu</h3>
                        <ul>
                        <li>
                            <i className="bi bi-check2-all" />
                            <span>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </li>
                        <li>
                            <i className="bi bi-check2-all" />
                            <span>
                            Duis aute irure dolor in reprehenderit in voluptate velit.
                            </span>
                        </li>
                        <li>
                            <i className="bi bi-check2-all" />
                            <span>
                            Provident mollitia neque rerum asperiores dolores quos qui
                            a. Ipsum neque dolor voluptate nisi sed.
                            </span>
                        </li>
                        </ul>
                        <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                        <img
                        src="assets/img/features-illustration-3.webp"
                        alt=""
                        className="img-fluid"
                        />
                    </div>
                    </div>
                </div>
                {/* End tab content item */}
                </div>
            </div>
            </section>
            {/* /Features Section */}
            {/* Clients Section ->
        <section id="clients" class="clients section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper init-swiper">
            
            <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                <img src="assets/img/client-1.png" class="img-fluid" alt="" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
            </div>
        </div>
        </section>
        <!- /Clients Section */}
            {/* Testinomial Section */}
            {/* Testimonials Section */}
            <section
            id="testimonials"
            className="testimonials section light-background"
            >
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Testimonials</h2>
                <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
                </p>
            </div>
            {/* End Section Title */}
            <div className="container">
                <div className="row g-5">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                    <div className="testimonial-item">
                    <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                    </div>
                    <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                        eget id, aliquam eget nibh et. Maecen aliquam, risus at
                        semper.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                    </p>
                    </div>
                </div>
                {/* End testimonial item */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                    <div className="testimonial-item">
                    <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                    </div>
                    <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                        Export tempor illum tamen malis malis eram quae irure esse
                        labore quem cillum quid cillum eram malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam anim
                        culpa.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                    </p>
                    </div>
                </div>
                {/* End testimonial item */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                    <div className="testimonial-item">
                    <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                    </div>
                    <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                        Enim nisi quem export duis labore cillum quae magna enim sint
                        quorum nulla quem veniam duis minim tempor labore quem eram
                        duis noster aute amet eram fore quis sint minim.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                    </p>
                    </div>
                </div>
                {/* End testimonial item */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                    <div className="testimonial-item">
                    <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                    </div>
                    <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                        multos export minim fugiat minim velit minim dolor enim duis
                        veniam ipsum anim magna sunt elit fore quem dolore labore
                        illum veniam.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                    </p>
                    </div>
                </div>
                {/* End testimonial item */}
                </div>
            </div>
            </section>
            {/* /blog Section */}
            <section className="blog">
            <div className="blog-section">
                <div className="container">
                <h1 className="text-center">From Our Blog</h1>
                <p className="section-description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed
                    accusantium maxime dolore cum provident itaque ea, a architecto
                    alias quod reiciendis ex ullam id, soluta deleniti eaque neque
                    perferendis.
                </p>
                <div className="blog-posts">
                    <div className="blog-post" id="blog1">
                    <a href="#">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cssgrid_blog1.png"
                        alt="blog image"
                        />
                    </a>
                    <a href="#">
                        <h2 className="blog-title">Blog Post Title 1</h2>
                    </a>
                    <div className="blog-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                        ullam, ipsa quasi?
                    </div>
                    </div>
                    <div className="blog-post" id="blog2">
                    <a href="#">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cssgrid_blog2.png"
                        alt="blog image"
                        />
                    </a>
                    <a href="#">
                        <h2 className="blog-title">Blog Post Title 2</h2>
                    </a>
                    <div className="blog-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                        ullam, ipsa quasi?
                    </div>
                    </div>
                    <div className="blog-post" id="blog3">
                    <a href="#">
                        <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cssgrid_blog3.png"
                        alt="blog image"
                        />
                    </a>
                    <a href="#">
                        <h2 className="blog-title">Blog Post Title 3</h2>
                    </a>
                    <div className="blog-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                        ullam, ipsa quasi?
                    </div>
                    </div>
                </div>{" "}
                {/* end blog-posts */}
                </div>{" "}
                {/* end container */}
            </div>{" "}
            {/* end blog-section */}
            </section>
        </main>
        {/*footer start--
        <footer id="footer" class="footer">
        <div class="container footer-top">
            <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
                <a href="index.htmll" class="logo d-flex align-items-center">
                <span class="sitename">CALVENT</span>
                </a>
                <div class="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p class="mt-3">
                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
                <div class="social-links d-flex mt-4">
                <a href=""><i class="bi bi-twitter-x"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
        
            <div class="left col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
        
            --div class="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
                </ul>
            </div--
        
            <div class="left col-md-3 footer-links">
                <h4>Hic solutasetp</h4>
                <ul>
                <li><a href="#">Molestiae accusamus iure</a></li>
                <li><a href="#">Excepturi dignissimos</a></li>
                <li><a href="#">Suscipit distinctio</a></li>
                <li><a href="#">Dilecta</a></li>
                <li><a href="#">Sit quas consectetur</a></li>
                </ul>
            </div>
        
            <div class="left col-md-3 footer-links">
                <h4>Nobis illum</h4>
                <ul>
                <li><a href="#">Ipsam</a></li>
                <li><a href="#">Laudantium dolorum</a></li>
                <li><a href="#">Dinera</a></li>
                <li><a href="#">Trodelas</a></li>
                <li><a href="#">Flexo</a></li>
                </ul>
            </div>
            </div>
        </div>
        
        <div class="container copyright text-center mt-4">
            <p>
            © <span>Copyright</span>
            <strong class="px-1 sitename">CALVENT</strong>
            <span>All Rights Reserved</span>
            </p>
        </div>
        </footer>
        ---footer end*/}
        <footer>
            <div className="footer-container">
            <div className="footer-section">
                <h2>CALVENT</h2>
                <p>
                A108 Adam Street <br />
                New York, NY 535022
                </p>
                <p>
                <strong>Phone:</strong> +1 5589 55488 55
                </p>
                <p>
                <strong>Email:</strong> info@example.com
                </p>
                <div className="social-links d-flex mt-4">
                <a href="">
                    <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                    <i className="bi bi-facebook" />
                </a>
                <a href="">
                    <i className="bi bi-instagram" />
                </a>
                <a href="">
                    <i className="bi bi-linkedin" />
                </a>
                </div>
            </div>
            <div className="footer-section">
                <h3>Useful Links</h3>
                <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/service">Shared CFO</a>
                </li>
                <li>
                    <a href="/consulting">Consulting</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Hic solutasept</h3>
                <ul>
                <li>
                    <a href="#">Molestiae accusamus iure</a>
                </li>
                <li>
                    <a href="#">Excepturi dignissimos</a>
                </li>
                <li>
                    <a href="#">Suscipit distinctio</a>
                </li>
                <li>
                    <a href="#">Dilecta</a>
                </li>
                <li>
                    <a href="#">Sit quas consectetur</a>
                </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact-Us</h3>
                <ul>
                <li>
                    <a href="#">Ipsam</a>
                </li>
                <li>
                    <a href="#">Laudantium dolorum</a>
                </li>
                <li>
                    <a href="#">Dinera</a>
                </li>
                <li>
                    <a href="#">Trodela</a>
                </li>
                <li>
                    <a href="#">Flexo</a>
                </li>
                </ul>
            </div>
            </div>
            <div className="footer-bottom">
            <p>
                © Copyright <strong>CALVENT</strong> All Rights Reserved
            </p>
            </div>
        </footer>

    </div>
  )
}

export default Home