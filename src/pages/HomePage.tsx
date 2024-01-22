
import { HeroSection } from '../components/HomePage/HeroSection'
import { AboutSection } from '../components/HomePage/AboutSection'
import { CausesHeaderList } from '../components/HomePage/CausesHeaederList'
import { HelpSection } from '../components/HomePage/HelpSection'
import { TestimonialsSection } from '../components/HomePage/TestimonialsSection'
import { BlogHelpSection } from '../components/HomePage/BlogHelpSection'
import { DonorsSection } from '../components/HomePage/DonorsSection'
import { SocialsSection } from '../components/HomePage/SocialsSection'

export const HomePage = () => {

    return (
        <div>
            <div className="page-wrapper">
                {/* <NavBar /> */}
                <HeroSection />
                <AboutSection />
                <CausesHeaderList />
                <HelpSection />
                {/* <VolunteersSection /> */}
                <TestimonialsSection />
                <BlogHelpSection />
                <DonorsSection />
                <SocialsSection />

            </div>
        </div>
    )
}
