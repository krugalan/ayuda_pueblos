import { PageFiller } from '../components/PageFiller'
import { MainPicture } from '../components/MainPicture'
import { about } from '../assets/img'
import { AboutSection } from '../components/HomePage/AboutSection'
import { MissionSection } from '../components/AboutPage/MissionSection'
import { VideoSection } from '../components/AboutPage/VideoSection'
import { StatisticsSection } from '../components/AboutPage/StatisticsSection'
import { TeamSection } from '../components/AboutPage/TeamSection'
import { DonorsSection } from '../components/HomePage/DonorsSection'

export const AboutPage = () => {
    return (<>
        <section className="promo-primary">
            <MainPicture imgURL={about} title="Sobre" title2='Nosotros' />
        </section>
        <AboutSection inverted />
        <MissionSection />
        <VideoSection />
        <StatisticsSection />
        <TeamSection />
        <DonorsSection />
        <PageFiller />


    </>


    )
}
