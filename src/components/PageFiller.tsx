import React from 'react'

export const PageFiller = () => {
    return (
        <div className="row no-gutters projects-masonry">

            <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                <div className="projects-masonry__img"></div>
                <div className="projects-masonry__text" >
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge">Medicine</span>
                        <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-1 projects-masonry__item--primary">
                <div className="projects-masonry__img">
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Food</span>
                        <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                <div className="projects-masonry__img">
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Education</span>
                        <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>

                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                <div className="projects-masonry__img"></div>
                <div className="projects-masonry__text" >
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Education</span>
                        <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>

                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                <div className="projects-masonry__img">
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge">Medicine</span>
                        {/* <h3 className="projects-masonry__title"> <a href="cause-details.html">Helpo for Help</a></h3> */}
                        <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
