import twitter from '../Img/Twitter Icon.png'
import facebook from '../Img/Facebook Icon.png'
import instagram from '../Img/Instagram Icon.png'
import github from '../Img/GitHub Icon.png'


export default function Footer() {
  return(
    <footer>
      <img src={twitter}/>
      <img src={facebook}/>
      <img src={instagram}/>
      <img src={github}/>
    </footer>
  )
}