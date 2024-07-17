import Container from 'react-bootstrap/Container';
import arrow from '../Images/arrow.png'
import { FaTwitter, FaWhatsapp, FaGithub, FaLinkedin, FaTelegram,  FaInstagram } from 'react-icons/fa'
import './Gptop.css';

export default function Footer() {


    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    const colorIcos = {
        color: 'white',
    }

    return (
        <div>
            <Container fluid>
                <div className='copyright'> &copy;2023 portfolio. All Right Reserved</div>
                <div>
                    <ul>

                        <a href='https://wa.me/+93790408842'><FaWhatsapp style={colorIcos} /></a>
                        <a href='https://github.com/lalehwalizadeh'> <FaGithub style={colorIcos} /></a>
                        <a href='https://www.linkedin.com/in/lalah-walizadah'><FaLinkedin style={colorIcos} /></a>
                        <a href='https://x.com/lwalizadeh?s=11&t=8mujEK_kxt7z7wytRsNxsg'><FaTwitter style={colorIcos} /></a>
                        <a href='https://t.me/Luna_Suk' style={colorIcos} ><FaTelegram /></a>
                        <a href='https://instagram.com/lalehwalizadeh?igshid=OGQ5ZDc2ODk2ZA== '><FaInstagram style={colorIcos} /></a>
                        {(  <img src={arrow} alt='icon' className='arrow' id='go-top' onClick={goTop} />)}
                    </ul>
                  

                </div>
            </Container>
        </div>
    )
}