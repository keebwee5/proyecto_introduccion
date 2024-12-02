import React, {useState, useEffect, useMemo} from 'react'
import { MdKeyboardArrowRight, MdOutlineChevronLeft} from "react-icons/md";
import { BsDot } from "react-icons/bs";
import stackimg from '../assets/img/stackoverflowimg.png'
import page1 from '../assets/img/vanillapage.png'
import frameimg from '../assets/img/frameworks3.png'
import gitimg from '../assets/img/githubimg.png'
import vrimg from '../assets/img/vrimg.png'
import Hangman from './Hangman';
import modevaimg from '../assets/img/modevaimg.png'
import Teachableai from './Teachableai';


function Slides() {

    

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const divIds = useMemo(() => ['stackOver', 'vanilla', 'git', 'vr', 'scan', 'frameW', 'hangman','modeva', 'teachable',], []);

  useEffect(() => {
    divIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = 'none';
      }

    });
    
    const currentDiv = document.getElementById(divIds[currentIndex]);
    if (currentDiv) {
      currentDiv.style.display = 'block'
    }
  }, [currentIndex, divIds]);

  const nextDiv = () => {
    setCurrentIndex((thisIndex) => (thisIndex + 1 + divIds.length) % divIds.length)
  }

  const prevDiv = () => {
    setCurrentIndex((thisIndex) => (thisIndex - 1 + divIds.length) % divIds.length)
  }

  
  return (
    <div className='flex text-white'>


      {/*Arrow to cicle divs*/}
      <div className='flex w-[50px]'>
        {/*Used icons from react icons web page*/}
        <button onClick={prevDiv}><MdOutlineChevronLeft size={30}/></button>
      </div>

      {/*all stackoverflow stuff */}
      <div id='stackOver' className='flex w-[2060px] h-[700px] px-5 items-center'>
        <article className='grid grid-cols-2 h-full place-items-center'>
          <div>
            <h3 className='font-bold text-5xl text-center'>Stack Overflow</h3>
            <h5 className='font-semibold text-3xl mt-10'>Origin</h5>
            <div className='text-lg ml-11 mt-5 font-thin'>
              <p>Stack Overflow was founded in <span className='text-cyan-300'>september 15th of 2008</span> by <span className='text-cyan-300'>Jeff Atwood</span> and <span className='text-cyan-300'>Joel Spolsky</span>,</p>
              <p>it's a website where developers can ask any problem about programing to de comunity members.</p>
            </div>

            
            <h3 className='font-semibold text-3xl mt-10 '>Developer survey</h3>
            

            <div className='ml-6'>
              <h5 className='font-normal text-xl mt-5 flex items-center'><BsDot/>Most Pupular Technologies</h5>

              <div className='ml-5 mt-2 text-lg font-thin'>
                <p><span className='text-cyan-300'>JavaScript</span> consistently ranks as the most used programming language. Followed by <span className='text-cyan-300'>Python</span> and <span className='text-cyan-300'>Typescript</span>. For frameworks, <span className='text-cyan-300'>React</span> and <span className='text-cyan-300'>Node.js</span> are popular choices.</p>
              </div>

              <h5 className='font-normal text-xl mt-5 flex items-center'><BsDot/>Top Paying Thechnologies</h5>
              <div className='ml-5 mt-2 text-lg font-thin'>
                <p>Languages like <span className='text-cyan-300'>Rust</span>, <span className='text-cyan-300'>Clojure</span>, and <span className='text-cyan-300'>F#</span> often appear among the <span className='text-cyan-300'>highest-paying</span>.</p>
                <p>This trend reflects the demand for niche skills and expertise in less common languages.</p>
              </div>
            </div>

          </div>
          <div>
            <img src={stackimg} alt="Homework image" className='rounded-xl transition ease-in hover:scale-105'/>
          </div>

        </article>

      </div>

      {/*all 1st page stuff */}
      <div id='vanilla' className='flex w-[2060px] h-[700px] px-5 items-center'>
        <article className='grid grid-cols-2 h-full place-items-center'>
          <div>
            <h1 className='font-bold text-5xl text-center'>My First Webpage</h1>
            <h3 className='font-semibold text-3xl mt-10'>Using Tailwind</h3>

            <div className='text-lg ml-11 mt-5 font-thin'>
              <p>Before doing this webpage I didn't know anything ahout <span className='text-cyan-300'>Tailwind</span>.</p>
              <p>This was very challenging for me as a beginer on it, like right now with <span className='text-cyan-300'>React</span>.</p>
            </div>

            <h3 className='font-semibold text-3xl mt-10'>Design</h3>

            <div className='ml-11 mt-5 text-lg font-thin'>
              <p>I didn't had any inspiration for this project so I made an sketch in Microsoft Paint,</p>
              <p>I'm not proud about it...but it worked fine and ended kinda nice.</p>
              <p>Also had some problems with my navbar becauce I wasn't happy with the size,</p>
              <p>at the end I did what my teacher told me.</p>
            </div>

          </div>
          
          <div>
           <img src={page1} alt="Homework image" className='rounded-xl transition ease-in hover:scale-105'/>
          </div>

        </article>
      </div>

      {/*all github stuff */}
      <div id='git' className='flex w-[2060px] h-[700px] px-5 items-center'>
        <article className='grid grid-cols-2 h-full place-items-center'>
          <div>
            <h1 className='font-bold text-5xl text-center'>GitHub</h1>

            <h3 className='font-semibold text-3xl mt-10'>What's GitHub?</h3>

            <div className='text-lg ml-11 mt-5 font-thin'>
              <p>Is a platform for hosting <span className='text-cyan-300'>Git</span> repositories, enabling code sharing and collaboration. </p>
              <p>It provides additional features like <span className='text-cyan-300'>pull requests</span>, code reviews, and <span className='text-cyan-300'>project management tools</span> </p>
              <p>on top of Git's core functionality.</p>
             
            </div>

            <h3 className='font-semibold text-3xl mt-7'>What's Git?</h3>

            <div className='text-lg ml-11 mt-5 font-thin'>
              <p>Is a <span className='text-cyan-300'>version control system</span> that tracks code changes and allows multiple developers to </p>
              <p><span className='text-cyan-300'>collaborate on projects</span>. It helps <span className='text-cyan-300'>manage project history</span>, branching, merging, and code reverting.</p>
            </div>

            <h3 className='font-semibold text-3xl mt-7'>Some Git Commands</h3>

            <div className='ml-6'>

              <p className='flex items-center text-lg font-thin mt-5'><BsDot className='text-xl'/><span className='text-cyan-300 font-normal text-xl'>gitinit</span><span className='text-xl px-1'>:</span>  Initializes a new Git repository in the current directory.</p>
              <p className='flex items-center text-lg font-thin mt-2'><BsDot className='text-xl'/><span className='text-cyan-300 font-normal text-xl'>git add [file]</span><span className='text-xl px-1'>:</span> Stages changes for the next commit. Use "git add ." to stage all changes.</p>
              <p className='flex items-center text-lg font-thin mt-2'><BsDot className='text-xl'/><span className='text-cyan-300 font-normal text-xl'>git commit -m "message"</span><span className='text-xl px-1'>:</span> Commits the staged changes with a descriptive message.</p>
              <p className='flex items-center text-lg font-thin mt-2'><BsDot className='text-xl'/><span className='text-cyan-300 font-normal text-xl'>git push</span><span className='text-xl px-1'>:</span> Sends local commits to a remote repository.</p>

            </div>
          </div>

          <div>
           <img src={gitimg} alt="Homework image" className='rounded-xl transition ease-in hover:scale-105'/>
          </div>
        </article>
      </div>

      {/*all vr and augmented reality stuff */}
      <div id='vr' className='flex w-[2060px] h-[700px] py-24 px-5'>
        <article className='grid grid-cols-2'>
          <div>
            <h1 className='font-bold text-5xl text-center'>VR and AR</h1>

            <h3 className='font-semibold text-3xl mt-7'>What's Vr?</h3>

            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Is a technology that creates a fully immersive <span className='text-cyan-300'>digital environment</span>, allowing users to experience and interact with a <span className='text-cyan-300'>computer-generated 3D world</span> through headsets and controllers. VR isolates users from the physical world, replacing it with a simulated environment that can feel realistic and <span className='text-cyan-300'>engage multiple senses</span>, primarily sight and sound.</p>
            </div>

            <h3 className='font-semibold text-3xl mt-7'>What's AR?</h3>
            
            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Overlays digital elements like images, sounds, or animations <span className='text-cyan-300'>onto the real world</span> in real time, typically through smartphones, tablets, or AR glasses. Unlike VR, AR <span className='text-cyan-300'>enhances</span> the user's current environment by adding <span className='text-cyan-300'>virtual components</span> rather than replacing it, allowing users to see and interact with digital objects as part of their <span className='text-cyan-300'>physical surroundings</span>.</p>
            </div>


            
          </div>
          <div>
            <img src={vrimg} alt="Homework image" className='rounded-xl transition ease-in hover:scale-105'/>
          </div>
        </article>
      </div>

      {/*all scan in 3d stuff */}
      <div id='scan' className='flex w-[2060px] h-[700px] py-24 px-5'>
        <article className='grid grid-cols-2'>
          <div>
            <h1 className='font-bold text-5xl text-center'>3D Scan</h1>

            <h3 className='font-semibold text-3xl mt-7'>My experience...</h3>
            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              
              <p>We were supposed to <span className='text-cyan-300'>scan an object in 3D</span> and upload it to <span className='text-cyan-300'>sketchfab</span>, then embed the code to display it in our webpage but I couldn't do that, so I made a donut in <span className='text-cyan-300'>Blender</span> and then upload it.</p>
              <p className='mt-5'>After all I had to do, i know is <span className='text-cyan-300'>way easier to just 3D scan</span> whatever you need, making it from scratch is a nightmare.</p>
              <p className='mt-5'>The original idea was way easier since we just needed to <span className='text-cyan-300'>scan the object</span> using a tool like <span className='text-cyan-300'>Polycam</span> or <span className='text-cyan-300'>KIRI Engine</span> and just crop it a little bit and upload it, but I didn't manage to make it work :/</p>
            </div>
          </div>
          <div>
            <div className="sketchfab-embed-wrapper rounded-xl"> <iframe title="donut" frameBorder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="800" height="500" src="https://sketchfab.com/models/3a99ea4cd314492abcf2a353db645688/embed?ui_theme=dark"> </iframe> </div>
          </div>
        </article>
      </div>

      {/*all frameworks enterpises use stuff */}
      <div id='frameW' className='flex w-[2060px] h-[700px] py-24 px-5'>
        <article className='grid grid-cols-2'>
          <div>
            <h1 className='font-bold text-5xl text-center'>Frameworks</h1>
            
            <h3 className='font-semibold text-3xl mt-7'>Github</h3>
            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>GitHub uses <span className='text-cyan-300'>Ruby</span>, <span className='text-cyan-300'>JavaScript</span>, and <span className='text-cyan-300'>Go</span> as its primary programming languages. It is built with frameworks like <span className='text-cyan-300'>Ruby on Rails</span> for the backend and <span className='text-cyan-300'>React</span> for the frontend.</p>
            </div>
          
            <h3 className='font-semibold text-3xl mt-7'>Spotify</h3>
            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Spotify uses <span className='text-cyan-300'>JavaScript</span>, <span className='text-cyan-300'>Python</span>, and <span className='text-cyan-300'>C++</span> for programming, along with <span className='text-cyan-300'>React</span>, <span className='text-cyan-300'>Handlebars</span>, and <span className='text-cyan-300'>LESS</span> for its front-end. Its database is based on <span className='text-cyan-300'>PostgreSQ</span>L and <span className='text-cyan-300'>RESTful</span> services.</p>
            </div>

            <h3 className='font-semibold text-3xl mt-7'>Discord</h3>
            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Discord uses <span className='text-cyan-300'>JavaScript</span>, <span className='text-cyan-300'>Elixir</span>, <span className='text-cyan-300'>Rust</span>, <span className='text-cyan-300'>Python</span>, and <span className='text-cyan-300'>C++</span>. It leverages the <span className='text-cyan-300'>Electron</span> framework, which combines web technologies to create a <span className='text-cyan-300'>hybrid app</span> experience.</p>
            </div>

          </div>
          <div>
           <img src={frameimg} alt="Homework image" className='rounded-xl transition ease-in hover:scale-105'/>
          </div>
        </article>
      </div>

      {/*all hangman game stuff */}
      <div id='hangman' className='flex w-[2060px] h-[700px] py-24 px-5'>
        <article className=''>
          <Hangman/>
          
        </article>
      </div>

      {/*all about modeva and shi */}
      <div id='modeva' className='flex w-[2060px] h-[700px] py-24 px-5'>
        <article className='grid grid-cols-2'>
          <div>
            <h1 className='font-bold text-5xl text-center'>Integra course</h1>

            <h3 className='font-semibold text-3xl mt-10'>What's MODEVA?</h3>
            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Stands for Modelo de Evaluación del Aprendizaje, this model is based on <span className='text-cyan-300'>jesuits university sistem</span> and helps to guide to good <span className='text-cyan-300'>educational practices</span>, it includes curricular areas, curricular dimentions, formative axes, <span className='text-cyan-300'>generic and specific</span> competences.</p>
            </div>

            <h3 className='font-semibold text-2xl mt-10'>Intro course</h3>
            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Some students of higher semesters came to show us all about MODEVA and show us some of the courses we can be part of like spiritual courses, sports courses and artistic courses.</p>
            </div>


          </div>
          <div>
           <img src={modevaimg} alt="Homework image" className='rounded-xl transition ease-in hover:scale-105'/>
          </div>
        </article>
      </div>

      {/*all about AI and shi */}
      <div id='teachable' className='flex w-[2060px] h-[700px] py-24 px-5'>
        <article className='grid grid-cols-2'>
          <div>
            <h1 className='font-bold text-5xl text-center'>Teachable Machine</h1>

            <h3 className='font-semibold text-3xl mt-10'>What's Teachable Machine</h3>

            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Teachable Machine is a <span className='text-cyan-300'>user-friendly tool by Google</span> that allows anyone to create <span className='text-cyan-300'>machine learning models</span> without coding. It supports image, sound, and pose recognition, enabling users to <span className='text-cyan-300'>train models</span> using their own data and <span className='text-cyan-300'></span>export them for use in various applications.</p>
            </div>

            <h3 className='font-semibold text-3xl mt-10'>Supervised Learning</h3>

            <div className='text-lg ml-11 mt-5 font-thin pr-10'>
              <p>Is a <span className='text-cyan-300'>machine learning technique</span> that uses <span className='text-cyan-300'>labeled data sets</span> to train algorithms to predict outcomes and <span className='text-cyan-300'>recognize patterns</span>.</p>
            </div>
          </div>
          <div>
            <Teachableai/>
          </div>
        </article>
      </div>

      {/*Arrow to cicle divs*/}
      <div className='flex w-[50px] justify-end'>
        <button onClick={nextDiv}><MdKeyboardArrowRight size={30}/></button>
      </div>
    </div>
    


  )
}

export default Slides