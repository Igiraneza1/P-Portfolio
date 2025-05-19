import React from 'react'
import profile from '../images/profile.png'

function Home() {
  return (
    <div className='sm:grid-cols-2 grid grid-cols-2 gap-5 bg-slate-950 text-gray-200  h-screen'>
      
        <div>

        <img className='bg-gray-600 pr-10 pl-10 h-screen opacity-70 ' src={profile} alt="profile.png" />
        </div>
        <div className='flex  flex-col gap-y-10 justify-center items-center '>
            <p className='text-xl font-semibol font-mono  animate-pulse'  style={{ animationIterationCount: 2 }} >
              <strong className='text-2xl'>Hi,</strong><br/> I'm a Front-End developer who enjoys creating beautiful and functional user interfaces.
              I work hard and like working with others to build great projects.
              I'm always open to learning new tools and improving my skills to become better. 
            </p>

            <button className='font-serif bg-slate-700 w-1/3 py-3 rounded-full animate-bounce'>CV</button>  
        </div>
        
    </div>
  )
}

export default Home