import React, { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Walter White',
      position: 'UI/UX',
      image: '/assets/img/team/team-1.jpg',
      text: 'It was a pleasure collaborating with Raven on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it\'s like working with someone you\'ve known for a long period of time.'
    },
    {
      id: 2,
      name: 'Sarah Jhonson',
      position: 'Back-End Developer',
      image: '/assets/img/team/team-2.jpg',
      text: 'As a developer and a problem solver, I think Raven is a great collaborative partner to have. I met Raven in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.'
    },
    {
      id: 3,
      name: 'William Anderson',
      position: 'Full Stack Developer',
      image: '/assets/img/team/team-3.jpg',
      text: 'I mentored Raven some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he\'s building.'
    },
    {
      id: 4,
      name: 'Amanda Jepson',
      position: 'Web Designer',
      image: '/assets/img/team/team-4.jpg',
      text: 'Throughout all our collaborations, Raven has always conducted herself politely and kindly. He comes across as someone that\'s always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He\'s not only someone I highly recommend but is also someone I greatly respect.'
    },
  ];

  return (
    <section id="testimonials" className="team">
      <div className="container">
        <div className="section-title">
          <div className="container_title_2">
            <div className="Title_2">
              <h1 className="Title_h1_2">
                TESTIMONIALS
                <div className="Title__highlight_2"></div>
              </h1>
              <div className="Title__underline_2"></div>
              <div aria-hidden className="Title__filled_2">TESTIMONIALS</div>
            </div>
          </div>
          <div className="height_divider_1"></div>
        </div>

        <div className="row team_testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={testimonial.image} className="img-fluid" alt={testimonial.name} />
                  <div className="social">
                    <a href="#twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.position}</span>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
