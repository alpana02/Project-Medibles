import React from "react";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to MEDIBLES</h1>
                    <h2>Say Hello to India's top doctors via "Project MEDIBLES"</h2>
                    <a href="/login" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>

            <main id="main">

                <section id="why-us" className="why-us">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose MEDIBLES?</h3>
                                    <p>
                                        Get digital
                                        prescriptions, monitoring your progress
                                        with advanced AI features, being a part of
                                        patients - community. Get personalized
                                        one-to-one attentions by health
                                        professionals till completely recovery .
                                    </p>
                                    <div className="text-center">
                                        <a href="/login" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-receipt"></i>
                                                <h4>Corporis voluptates sit</h4>
                                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-cube-alt"></i>
                                                <h4>Ullamco laboris ladore pan</h4>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-images"></i>
                                                <h4>Labore consequatur</h4>
                                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Features</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                    <h4><a href="/">Activity Create (Assign)</a></h4>
                                    <p>Doctors can assign different post recovery
                                        workouts to patients according to their
                                        requirements for complete recovery which will be
                                        monitored by deep learning algorithms. They can
                                        also track daily progress.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-pills"></i></div>
                                    <h4><a href="/">Assign Digital Prescription</a></h4>
                                    <p>It allows medical practitioners to write and send
                                        prescriptions electronically which will enhance patient
                                        safety, increase access to patient prescription records,
                                        and improve pharmacy workflow.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-user"></i></div>
                                    <h4><a href="/">Activity Tracker</a></h4>
                                    <p>Analyzing patient’s performed activity using MediaPipe
                                        Pose. It is a ML solution for high-fidelity body pose
                                        tracking, inferring 3D landmarks and background
                                        segmentation mask on the whole body from input
                                        video frames .</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-dna"></i></div>
                                    <h4><a href="/">Patient Community</a></h4>
                                    <p>Patients connect with others who have the same disease or
                                        condition and track and share their own experiences. Users can
                                        get information and update the diseases, conditions, and related
                                        symptoms every day on the platform</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-wheelchair"></i></div>
                                    <h4><a href="/">Remainder Prescription</a></h4>
                                    <p>Reminding users for taking medicines ad per the given time schedule by
                                        doctor.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical"></i></div>
                                    <h4><a href="/">Medicine Shopping</a></h4>
                                    <p>There are times when the Patient are unable
                                        to obtain the medicine they reqire, so we have designed an inbuilt
                                        function that allows them to browse any
                                        medicine of their choice and provide them link to the online site so that they can buy easily.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical"></i></div>
                                    <h4><a href="/">Medicine Shopping</a></h4>
                                    <p>There are times when the Patient are unable
                                        to obtain the medicine they reqire, so we have designed an inbuilt
                                        function that allows them to browse any
                                        medicine of their choice and provide them link to the online site so that they can buy easily.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical"></i></div>
                                    <h4><a href="/">Medicine Shopping</a></h4>
                                    <p>There are times when the Patient are unable
                                        to obtain the medicine they reqire, so we have designed an inbuilt
                                        function that allows them to browse any
                                        medicine of their choice and provide them link to the online site so that they can buy easily.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="departments" className="departments">
                    <div className="container">

                        <div className="section-title">
                            <h2>Departments</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Cardiology</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="/img/departments-1.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="/img/departments-2.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                                <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="/img/departments-3.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                                <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="/img/departments-4.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-5">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                                <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="/img/departments-5.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="team" className="team section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Team</h2>
                            <p>Team Nutella, a group of 3 tech enthusiast from NIT Rourkela</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="pic"><img src="/img/team/team-1.jpeg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Parwin Akhtari </h4>

                                        <p>An Aspiring developer and tech enthusiast. Interested in Problem Solving. </p>

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="pic"><img src="/img/team/team-2.PNG" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Siddharth Sharma</h4>

                                        <p>I'm a passionate Learner and tech enthusiast, currently learning Machine Learning</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="pic"><img src="/img/team/team-3.jpeg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Alpana Nanda</h4>

                                        <p>I seek new challenges and try to think out-of-the-box while solving a problem.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
};