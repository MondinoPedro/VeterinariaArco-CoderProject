
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
 

export default function Footer (){

    return(
        <div className="footer-container">
            <div className="footer-link">
                <a href='https://www.instagram.com/veterinariaarco/'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className="footer-link">
                <a ><FontAwesomeIcon icon={faFacebookF}/></a>
            </div>
            <div className="footer-link">
                <a ><FontAwesomeIcon icon={faWhatsapp}/></a>
            </div>
            <div className="footer-copyright">
                <FontAwesomeIcon icon={faCopyright} />
                <b>Veterinaria Arco, Inc.</b>
            </div>
        </div>
    )
}