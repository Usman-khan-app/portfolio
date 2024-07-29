import { useGSAP } from "@gsap/react"
import gsap from 'gsap';

function Hero() {
    useGSAP(()=>{
        gsap.from('.right',{
x:100,
duration:1,
opacity:0,
height:70,

        })
        gsap.from(".left",{
            x:-100,
            duration:1,
            opacity:0,
            height:30,
        })
       let tl = gsap.timeline()
       tl.from('.ani',{
        x:20,
        duration:1,
        delay:1.3,
        opacity:0
       })
    })
  return (
    
        <div className="main_container" id="home">
        <div className="hero">
          <div className="left"></div>
          <div className="right">
            <div className="intro ani">
              <h1>Usman Khan</h1>
              <h5>Web desinger & devaloper</h5>
            </div>
            <div className="phone ani">
              <h3>Phone</h3>
              <h5>03419661436</h5>
            </div>
            <div className="email ani">
              <h3>Email</h3>
              <h5>uk8987996@gamil.com</h5>
            </div>
            <div className="address ani">
              <h3>Address</h3>
              <h5>Dir Upper Kpk Pakistan</h5>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Hero