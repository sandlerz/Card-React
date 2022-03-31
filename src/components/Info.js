import profileImg from '../Img/IMG_20210331_134131.jpg'
import email from '../Img/Mail.png'
import linkedin from '../Img/linkedin.png'

export default function Info(){
  return(
    <header>
      <div className='header_profileImg'>
        <img src={profileImg  }/>
      </div>
      <h1 className='header_name'>Sebastian Mesa</h1>
      <p className='header_career'>Frontend Developer</p>
      <p className='header_site'>Sebastian.website</p>
      <div className='header_buttons'>
        <a className='email' href='#'><img src={email}/>Email</a>
        <a className='linkedin' href='#'><img src={linkedin}/>Linkedin</a>
      </div>
    </header>
  )
}
