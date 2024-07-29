import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

export default function Header() {
    
   useGSAP(()=>{
    gsap.from('.navbar',{
        y:-20,
        opacity:0,
        duration:.5,
    })
    gsap.from('.navbar h2',{
        x:-20,
        opacity:0,
        duration:.5,
        delay:.4,
    })
    gsap.from('.links',{
        x:20,
        delay:.4,
        duration:.5,
        opacity:0

    })
   })
  return (
    <div>
        <div className="navbar">
      <h2>Usman khan</h2>
      
      <div className="links ">
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#skill1">Skill</a>
        <a href="">Experense</a>
        <a href="">Contect US</a>
        

      </div>
      <div className="burger">
      <i className="ri-menu-fill menu"></i>
      </div>
    </div>
    </div>
  )
}
