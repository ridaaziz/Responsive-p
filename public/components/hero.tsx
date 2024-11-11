import Link from "next/link"
import "../style/hero.css"
import Image from 'next/image'
const Hero = () => {
  return (
    <div id="" className='header-container'>
       <div  className='header-boxes-con'> 
       <div >
              <Image
               src={"/image/mypic.jpg"}
               width={200}
               height={200}
               className='header-image'
               alt='profile'
       />
       </div>
       <div className="hero-right-div">
       <h1 className="title-hero">Hi, Im Muhammad Saleem s/o Mehmood Hussain,</h1>
        <p className="des-hero">a passionate frontend developer
                  with expertise in building responsive 
              and scalable web applications.</p>
              <Link href="https://www.linkedin.com/in/muhammad-saleem-342269293/"><button className="btn">Hire me</button></Link>
       </div>
       </div> 
    </div>
  )
}
export default Hero