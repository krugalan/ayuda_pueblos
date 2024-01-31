import { volunteer } from "../assets/img"
import { MainPicture } from "../components/MainPicture"


export const VolunteersPage = () => {
    return (
        <main className="main">
            <section className="promo-primary">
                <MainPicture imgURL={volunteer} title="Volvete" title2="Voluntario" />
            </section>
            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="img-box"><img className="img--layout" src="img/about_layout-reverse.png" alt="img" />
                                <div className="img-box__img"><img className="img--bg" src="img/img_box-1.jpg" alt="img" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 offset-xl-1">
                            <div className="heading heading--primary"><span className="heading__pre-title">What we Do</span>
                                <h2 className="heading__title"><span>We Need</span> <span>Your Help</span></h2>
                            </div>
                            <p>Burma danio black bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow. Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout; Chinook salmon bramble shark sand stargazer Steve fish. Scat zebra pleco graveldiver river shark tripod fish; flagtail bala shark warbonnet.</p>
                            <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet.</p>
                            <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section forms-section no-padding-top no-padding-bottom">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-lg-6">
                            <div className="heading heading--primary"><span className="heading__pre-title">Fill Form and Beacame Volonteer</span>
                                <h2 className="heading__title"><span>Complete</span> <span>the Form</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch		</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form className="form user-form" action="javascript:void(0);">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input className="form__field" type="text" name="first-name" placeholder="First Name" />
                                        <input className="form__field" type="email" name="email" placeholder="E-mail" />
                                        <input className="form__field" type="tel" name="phone-number" placeholder="Phone Number" />
                                        <input className="form__field" type="number" name="date-of-birth" placeholder="Date of Birth" />
                                        <input className="form__field" type="tel" name="adress" placeholder="Adress" />
                                    </div>
                                    <div className="col-lg-6">
                                        <textarea className="form__field form__message" name="message" placeholder="About Occupation"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button className="form__submit" type="submit">Submit	</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><img className="forms-section__bg" src="img/volunteer-2.png" alt="img" />
            </section>
        </main>
    )
}
