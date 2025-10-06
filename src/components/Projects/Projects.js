import {FaReact,FaNode} from "react-icons/fa"
import {SiCss3,SiHtml5,SiMongodb} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//import assets
import Rpreview1 from '../assets/Resort-p1.jpg'
import Rpreview2 from '../assets/Resort-p2.jpg'
import Rpreview3 from '../assets/Resort-p3.jpg'

import Tpreview1 from '../assets/todo-p1.jpeg'
import Tpreview2 from '../assets/todo-p2.jpeg'
import Tpreview3 from '../assets/todo-p3.jpeg'

import Epreview1 from '../assets/startup-p2.png'
import Epreview2 from '../assets/startupp3.png'
import Epreview3 from '../assets/startupp4.png'

import travels from '../assets/p4-1.png'

import genimi from '../assets/genimi.png'

import cofee from '../assets/cofee.png'

import IMDB from '../assets/imdb.png'
import dash1 from '../assets/dash1.png'
import dash2 from '../assets/dash2.png'
import dash3 from '../assets/dash3.png'
import dash4 from '../assets/dash4.png'
import dash5 from '../assets/dash5.png'
import zoom1 from '../assets/zoom1.png'
import zoom2 from '../assets/zoom2.png'
import zoom3 from '../assets/zoom3.png'
import zoom4 from '../assets/zoom4.png'
import zoom5 from '../assets/zoom5.png'
import zoom6 from '../assets/zoom6.png'
import zoom7 from '../assets/zoom7.png'
import zoom8 from '../assets/zoom8.png'
import zoom9 from '../assets/zoom9.png'
import prep1 from '../assets/prep1.png'
import prep2 from '../assets/prep2.png'
import prep3 from '../assets/prep3.png'
import prep4 from '../assets/prep4.png'
import prep5 from '../assets/prep5.png'
import prep8 from '../assets/prep8.png'
import prep9 from '../assets/prep9.png'
import prep10 from '../assets/prep10.png'
import prep11 from '../assets/prep11.png'


import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>

{/* <-------------------------------------------------1 start-------------------------------------------> */}
<div className='project' id='project'>

<div>
   <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
      <SplideSlide>
       <img src={prep1} alt="Image 1"/>
      </SplideSlide>
     <SplideSlide>
     <img src={prep2} alt="Image 2"/>
     </SplideSlide>

     <SplideSlide>
     <img src={prep3} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={prep4} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={prep11} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={prep10} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={prep9} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={prep8} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={prep5} alt="Image 2"/>
     </SplideSlide>

  </Splide>
</div>

<div>

  <h3 className="about_project">Doctor Appiontment Multivendor App</h3>

  <p className='project__description'>
This is a full-stack Doctor Appointment Booking Web App built using the MERN stack with Tailwind CSS. It includes separate panels for patients, doctors, and admin to manage appointments, profiles, and payments. Patients can book or cancel appointments, make online payments via Stripe, and update profiles. The platform offers secure authentication and a fully responsive design for seamless use across all devices.
</p>
  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={50}/>
    </li>

  </ul>






<div id='b'>
 <a href="https://doctor-frontend-wheat.vercel.app/"  target="_blank">
      <span type='button' className='btn btn--outline'>  Watch Live </span>
    </a>


    <a href="https://github.com/ahsaanullah0088/Doctor-appionment-app-Mern-Stack-" target="_blank" >
      <span type='button' className='btn btn--outline'>  View Code </span>
    </a>

</div>


</div> 


</div>

<div className='project' id='project'>

<div>
   <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
      <SplideSlide>
       <img src={zoom1} alt="Image 1"/>
      </SplideSlide>
     <SplideSlide>
     <img src={zoom2} alt="Image 2"/>
     </SplideSlide>

     <SplideSlide>
     <img src={zoom3} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={zoom4} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={zoom5} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={zoom6} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={zoom7} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={zoom8} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={zoom9} alt="Image 2"/>
     </SplideSlide>

  </Splide>
</div>

<div>

  <h3 className="about_project">Zoom meet clone</h3>

  <p className='project__description'>
  Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={50}/>
    </li>

  </ul>






<div id='b'>
 <a href="zoom-clone-nu-two.vercel.app"  target="_blank">
      <span type='button' className='btn btn--outline'>  Watch Live </span>
    </a>


    <a href="https://github.com/ahsaanullah0088/zoom-clone" target="_blank" >
      <span type='button' className='btn btn--outline'>  View Code </span>
    </a>

</div>


</div> 


</div>
{/* ---------- */}

{/* ---------------------------------------------------------------------------------------------- */}
<div className='project' id='project'>

<div>
   <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
      <SplideSlide>
       <img src={dash1} alt="Image 1"/>
      </SplideSlide>
     <SplideSlide>
     <img src={dash2} alt="Image 2"/>
     </SplideSlide>

     <SplideSlide>
     <img src={dash3} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={dash4} alt="Image 2"/>
     </SplideSlide>
     <SplideSlide>
     <img src={dash5} alt="Image 2"/>
     </SplideSlide>

  </Splide>
</div>

<div>

  <h3 className="about_project">Admin Dashboard</h3>

  <p className='project__description'>
  This is a dashboard made with react and tailwind css , material UI in which we can see the data of our website. This dashboard contain 4 pages Home, Users, Products and Settings. This dashboard is fully responsive and user friendly.  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={50}/>
    </li>

  </ul>






<div id='b'>
 <a href="https://dashboard-react11.netlify.app/"  target="_blank">
      <span type='button' className='btn btn--outline'>  Watch Live </span>
    </a>


    <a href="https://github.com/ahsaanullah0088/react-admin-dashboard-" target="_blank" >
      <span type='button' className='btn btn--outline'>  View Code </span>
    </a>

</div>


</div> 


</div>
{/* --------------------------------------------------------------------------------------- */}
    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Rpreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Rpreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Rpreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">Hotel Reservation App</h3>

        <p className='project__description'>
 The Beach Resort App is a Web application focused on providing a seamless booking experience for beachside accommodations. It allows users to easily reserve rooms, check availability, and access essential information about the resort, ensuring a convenient stay.      </p>
   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <SiHtml5 size={40} />
             <IoLogoJavascript size={40} />
            <SiCss3 size={40}/>
            <FaReact size={50}/>
          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://resortsbyahsaan-550a33.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/ahsaanullah0088/React-resorts" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div>

{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Tpreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Tpreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Tpreview3} alt="Image 2"/>
           </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Todo List</h3>

  <p className='project__description'>
  MERN Todo List offers a convenient and flexible solution for managing tasks effectively. It combines the power of the MERN stack with a sleek and intuitive interface, making it the ideal tool for boosting productivity and keeping track of your to-do list.  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://gleaming-starlight-35a3ec.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/ahsaanullah0088/Notepad"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>
<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={travels} alt="Image 1"/>
            </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Travels</h3>

  <p className='project__description'>
 This is a travels website in which we use ReactJs form Front-End. This Travel website contain Pages Popular places , Travel outside , Online pakages, Register page , Start making money page
</p>
  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://deluxe-lebkuchen-85e4ef.netlify.app/?#"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/ahsaanullah0088/Tours"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={genimi} alt="Image 1"/>
            </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Genimi Clone</h3>

  <p className='project__description'>
    its a genimi clone in which I use Genimi api for creating this website I fetch data from genimi api and show it on my website. I use vite ReactJs and tailwind css for front-end. I use animations and transitions to make it more attractive.
</p>
  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://genimi-clone.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/ahsaanullah0088/Genimi_clone"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Epreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Epreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Epreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">StartUps</h3>

  <p className='project__description'> This startups website Contain main 4 pages Frist is Home page, Second is About page, Third is Services page and Fourth is Contact page. These pages are fully responsive and user friendly.I use ReactJs for front-end and NodeJs for back-end. I use animations and transitions to make it more attractive.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://monumental-pegasus-1080a3.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>
          

          <a href="https://github.com/ahsaanullah0088/startup"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}
<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={cofee} alt="Image 1"/>
            </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Cofee website</h3>

  <p className='project__description'>
    Its a cofee store website in which i use React js for front-end . I use animations and transitions to make it more attractive. I use tailwind css for styling.
</p>
  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://cofee-websitebyahsaan.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://cofee-websitebyahsaan.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>
{/* <-------------------------------------------------2 end-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={IMDB} alt="Image 1"/>
            </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">IMDB</h3>

  <p className='project__description'> ThiS IMDB project contains data which is fetch from api and show on the website. This data is fetched form IMDB api. I use ReactJs for front-end and tailwind css for styling.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://imdbbyahsaaan-7e2f5d.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>
          

          <a href="https://imdbbyahsaaan-7e2f5d.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

    </section>
  )
}

export default Projects
