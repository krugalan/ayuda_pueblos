import { video_block } from '../../assets/img'
import { contactEmail, phoneNumber } from '../../constants'

export const VideoSectionBlock = () => {
    return (
        <div className="promo-pannel">
            <a className="anchor promo-pannel__anchor" href="#about">
                <span>Acerca De</span>
            </a>
            <div className="promo-pannel__video">
                <img className="img--bg" src={video_block} alt="image" />
                <a className="video-trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
                    <span>Mirá nuestros videos</span>
                    <i className="fa fa-play" aria-hidden="true">
                    </i>
                </a>
            </div>
            <div className="promo-pannel__phones">
                <p className="promo-pannel__title">Teléfono:</p>
                <a className="promo-pannel__link" href={`tel:${phoneNumber}`}>
                    {phoneNumber}
                </a>
                <a className="promo-pannel__link" href={`tel:${phoneNumber}`}>
                    {phoneNumber}
                </a>
            </div>
            <div className="promo-pannel__email">
                <p className="promo-pannel__title">
                    Email
                </p>
                <a className="promo-pannel__link" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                </a>
            </div>
        </div>
    )
}
