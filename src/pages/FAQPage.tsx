import { volunteer } from "../assets/img"
import { FaqItemQuestion } from "../components/FAQPage/FaqItemQuestion"
import { MainPicture } from "../components/MainPicture"


export const FAQPage = () => {
    return (
        <main className="main">
            <section className="promo-primary">
                <MainPicture imgURL={volunteer} title="Preguntas" title2="Frecuentes" />
            </section>

            <section className="section faq">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary"><span className="heading__pre-title">Preguntas Frecuentes</span>
                                <h2 className="heading__title no-margin-bottom"><span>Preguntas</span> <span>Frecuentes</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <FaqItemQuestion questionName="agua" questionTitle="This is a test for an accordion Item" hiddenAnswer='ijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjfijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjf' />
                            {/* <FaqItemQuestion questionTitle="This is a test for an accordion Item" hiddenAnswer='ijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjf' />
                            <FaqItemQuestion questionTitle="This is a test for an accordion Item" hiddenAnswer='ijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjf' />
                            <FaqItemQuestion questionTitle="This is a test for an accordion Item" hiddenAnswer='ijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjf' />
                            <FaqItemQuestion questionTitle="This is a test for an accordion Item" hiddenAnswer='ijdaiopjdiojfeisahjfoisejfojseiofjsiofjsidojfioejfiosjf' /> */}

                            {/* <div className="accordion accordion--primary">
                                <div className="accordion__title-block">
                                    <h6 className="accordion__title">Water Delivery in Africa?</h6><span className="accordion__close"></span>
                                </div>
                                <div className="accordion__text-block">
                                    <p>Burma danio black bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow. Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout; Chinook salmon bramble shark sand stargazer Steve fish. Scat zebra pleco graveldiver river shark tripod fish; flagtail bala shark warbonnet.</p>
                                </div>
                            </div>
                            <div className="accordion accordion--primary">
                                <div className="accordion__title-block">
                                    <h6 className="accordion__title">We Build and Create?</h6><span className="accordion__close"></span>
                                </div>
                                <div className="accordion__text-block">
                                    <p>Burma danio black bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow. Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout; Chinook salmon bramble shark sand stargazer Steve fish. Scat zebra pleco graveldiver river shark tripod fish; flagtail bala shark warbonnet.</p>
                                </div>
                            </div>
                            <div className="accordion accordion--primary">
                                <div className="accordion__title-block">
                                    <h6 className="accordion__title">How to became a volounteer?</h6><span className="accordion__close"></span>
                                </div>
                                <div className="accordion__text-block">
                                    <p>Burma danio black bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow. Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout; Chinook salmon bramble shark sand stargazer Steve fish. Scat zebra pleco graveldiver river shark tripod fish; flagtail bala shark warbonnet.</p>
                                </div>
                            </div>
                            <div className="accordion accordion--primary">
                                <div className="accordion__title-block">
                                    <h6 className="accordion__title">Health in other Countries?</h6><span className="accordion__close"></span>
                                </div>
                                <div className="accordion__text-block">
                                    <p>Burma danio black bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow. Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout; Chinook salmon bramble shark sand stargazer Steve fish. Scat zebra pleco graveldiver river shark tripod fish; flagtail bala shark warbonnet.</p>
                                </div>
                            </div>
                            <div className="accordion accordion--primary">
                                <div className="accordion__title-block">
                                    <h6 className="accordion__title">We Build and Create?</h6><span className="accordion__close"></span>
                                </div>
                                <div className="accordion__text-block">
                                    <p>Burma danio black bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow. Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout; Chinook salmon bramble shark sand stargazer Steve fish. Scat zebra pleco graveldiver river shark tripod fish; flagtail bala shark warbonnet.</p>
                                </div>
                            </div>
                            <div className="accordion accordion--primary">
                                <div className="accordion__title-block">
                                    <h6 className="accordion__title">How to became a volounteer?</h6><span className="accordion__close"></span>
                                </div>
                                <div className="accordion__text-block">
                                    <p>Burma danio black bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow. Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout; Chinook salmon bramble shark sand stargazer Steve fish. Scat zebra pleco graveldiver river shark tripod fish; flagtail bala shark warbonnet.</p>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
