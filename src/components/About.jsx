import React from 'react'
import hollowknightgif from '../assets/img/hollow_knight.gif'

function About() {
  return (
    <div className='w-full bg-white py-6 px-16'>
        <article className='grid md:grid-cols-2'>
            <section className='items-center mx-auto'>
                <img src={hollowknightgif} alt="Animated gif" className=''/>
            </section>
            <section className=''>
              <h3 className='font-bold text-3xl mt-36'>About me</h3>
              <div className='text-lg'>
                <p className='mt-5'>I'm a <span className='text-cyan-400'>computer systems engineering</span> student. I spend my time searching for new programing stuff,</p>
                <p>playing videogames and working out in the gym.</p>
                <p className='mt-4'>I don't have many programming skills, but I'm good at solving <span className='text-cyan-400'>logic problems</span>, <span className='text-cyan-400'>math problems</span>,</p>
                <p>and <span className='text-cyan-400'>researching</span> new topics to implement in my projects.</p>
                <p className='mt-4'>Speaking about my hobbies, I like to solve any kind of puzzles, skating, play videogames and</p>
                <p>whatching random videos of <span className='text-cyan-400'>Pirate Software</span> or <span className='text-cyan-400'>ThePrimeagen</span>.</p>
              </div>
            </section>


        </article>
    </div>
  )
}

export default About