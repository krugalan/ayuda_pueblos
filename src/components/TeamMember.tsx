
type TeamMemberType = {
    name: string;
    position: string;
    //Color: team_1png , etc
    color: string;
    profilePicture: string;
}

export const TeamMember = ({ name, position, color, profilePicture }: TeamMemberType) => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="team-item team-item--rounded">
                <ul className="team-item__socials">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                </ul>
                <div className="team-item__img-holder"><img className="img--layout" src={color} alt="layout" />
                    <div className="team-item__img"><img className="img--bg" src={profilePicture} alt="teammate" /></div>
                </div>
                <div className="team-item__description">
                    <div className="team-item__name">{name}</div>
                    <div className="team-item__position">{position}</div>
                </div>
            </div>
        </div>
    )
}
