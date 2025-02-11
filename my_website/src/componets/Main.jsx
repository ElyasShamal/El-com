
import backgroundImage from '../assets/7.jpg'
import About from './About';


export default function Main() {
  const title = "Front-End Software Developer";
  
  return (
    <main id='home'>
      <div className='main_container'>
      <div className="description">
            <h1 className="title">
            {title.split("").map((letter, index) => (
          <span key={index} className="letter-span">
            {letter}
          </span>
        ))}
        </h1>
        
        <p>Solving complex design challenges, creating intuitive user interfaces, and delivering seamless web experiences are the foundation of rich and engaging web applications that prioritize functionality and user satisfaction.</p>
        <a href='#about'>About Me ? </a>
        <span className='scroll_down'><i className="fa fa-angle-down"></i> Scroll Down </span>
        </div>    
        <div className="background_image">
        <img src={backgroundImage} alt="Background" className="background__image_img" />
        </div>
        </div>
        
        <About />
    </main>
  )
}
