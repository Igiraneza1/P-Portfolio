import React from 'react'
import mission from '../images/0_Fo8WM_Tkq0bC_bPN.jpg'
import vission from '../images/1698334919638.png'

function About() {
  return (
    <div className='p-5' >
        <h1 className='text-6xl p-5 text-center font-bold'>About Me</h1>
        <div  className='grid grid-cols-2 gap-10'>
            <div className='border-l-4 border-b-4 border-black p-5'>
                <figcaption>
                    <img className='rounded-xl opacity-80' src={mission} alt={mission} />
                    <h1 className='text-center font-extrabold text-3xl p-5 text-cyan-900'>Vission</h1>
                    <p className='font-serif text-lg'>To become a creative and skilled front-end developer who builds meaningful digital experiences that
                        make life easier and more enjoyable for people around the world.
                        I would also want to inspire others to join technology, especially people in rural areas, by showing 
                        them how to use their small resourses to achieve big goals .
                        I will also build a lessons platform to help them learn and grow.           
                    </p>
                </figcaption>
            </div>

            <div className='border-r-4 border-t-4 border-black p-5'>
                <figcaption>
                    <img className='rounded-xl opacity-80' src={vission} alt={vission} />
                    <h1 className='text-center font-extrabold text-3xl p-5 text-slate-800'>Mission</h1>
                    <p className='font-serif text-lg'>
                        I create user-frindly and responsive website using modern tools. I work hard, keep learning by building real-projects, joining tech communities, and enjoy building useful
                        and beautiful projects with others. 
                        My goal is to grow my skills through hand-on practice and teamwork.    
                    </p>
                </figcaption>
            </div>
            
            
        </div>

    </div>
  )
}

export default About