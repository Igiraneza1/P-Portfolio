import React from 'react';
import mission from '../images/0_Fo8WM_Tkq0bC_bPN.jpg';
import vision from '../images/1698334919638.png';

function About() {
  return (
    <section className="p-6 sm:p-10 bg-cyan-800 text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-200">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Vision */}
        <article className="border-l-4 border-b-4 border-gray-500 p-6 shadow-lg bg-cyan-800 rounded-lg transition-transform hover:scale-[1.01]">
          <figure>
            <img
              className="rounded-xl w-full h-64 object-cover opacity-90 mb-4"
              src={vision}
              alt="Vision illustration"
            />
            <figcaption>
              <h2 className="text-2xl font-extrabold text-center text-cyan-800 mb-4">Vision</h2>
              <p className="font-serif text-lg text-gray-200 leading-relaxed">
                My vision is to become a creative and skilled front-end developer who builds meaningful digital experiences that make life easier and more enjoyable for people around the world.
                I aim to inspire others to join technology, especially in rural areas, by showing them how to use their limited resources to achieve big goals.
                I also plan to build an online learning platform to help them grow and learn.
              </p>
            </figcaption>
          </figure>
        </article>

        {/* Mission */}
        <article className="border-r-4 border-t-4 border-gray-500 p-6 shadow-lg bg-cyan-800 rounded-lg transition-transform hover:scale-[1.01]">
          <figure>
            <img
              className="rounded-xl w-full h-64 object-cover opacity-90 mb-4"
              src={mission}
              alt="Mission illustration"
            />
            <figcaption>
              <h2 className="text-2xl font-extrabold text-center text-blue-800 mb-4">Mission</h2>
              <p className="font-serif text-lg text-gray-200 leading-relaxed">
                My mission is to create user-friendly and responsive websites using modern tools. I constantly learn by building real-world projects, joining tech communities, and collaborating with others.
                I’m passionate about creating beautiful and useful experiences, growing my skills through hands-on practice, and working as a team to solve real problems.
              </p>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default About;
