import React from 'react'
import projectsimg from '../assets/img/projects1st.png'


function Projects() {
/*en div, cambiar pading vertical y en la imagen poner un margen para contrarrestar el cambio del pading del div grande */
  return (
    <div className='w-full py-60 px-16'>
        <article className='grid md:grid-cols-2'>
            <section className='text-white pl-5 text-xl font-light'>
                <h1 className='text-5xl font-bold'>Projects</h1>
                <p className='mt-16 font-normal'>Welcome to my <span className='text-cyan-300'>projects</span> section!</p>
                <p className='mt-8'>I'll be adding all my <span className='text-cyan-300'>homeworks and activities</span> from computer systems engineering</p>
                <p>introduction <span className='text-cyan-300'>class</span>.</p>
                <p className='mt-8'>I hope you like <span className='text-cyan-300'>my work</span>, in case that you dont like it make sure to tell me what</p>
                <p>can I do <span className='text-cyan-300'>improve</span>!</p>
            </section>
            <section className=''>
                <a href="#"><img src={projectsimg} alt="Homework image" className='rounded-xl transition ease-in hover:scale-105'/></a>
            </section>
        </article>
    </div>
    
  )
}

export default Projects