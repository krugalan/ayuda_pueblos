import { TeamMember } from '../TeamMember'
import { team_1, team_1png, team_2png, team_3png, team_4png, team_6png, team_8png } from '../../assets/img'
import { Link } from 'react-router-dom'

export const TeamSection = () => {
    return (
        <section className="section team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading heading--primary"><span className="heading__pre-title">Equipo</span>
                            <h2 className="heading__title no-margin-bottom"><span>Conoce a</span> <span>Nuestro Equipo</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row margin-bottom">
                    <TeamMember name='Adriana' position='Marketing' color={team_1png} profilePicture={team_1} />
                    <TeamMember name='Esteisy' position='Coordinadora' color={team_3png} profilePicture={team_1} />
                    <TeamMember name='Christian' position='Voluntario' color={team_4png} profilePicture={team_1} />
                    <TeamMember name='Gastón' position='Voluntario' color={team_2png} profilePicture={team_1} />
                    <TeamMember name='Florencia' position='Voluntaria' color={team_6png} profilePicture={team_1} />
                    <TeamMember name='Luciana' position='Voluntaria' color={team_8png} profilePicture={team_1} />
                </div>

                <div className="row">
                    <div className="col-12 text-center"><Link className="button button--primary" to="/voluntarios">Volvete voluntario</Link></div>
                </div>
            </div>
        </section>
    )
}
