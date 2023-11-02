import React from 'react'

export const CauseComponent = () => {
  return (
    <div>
      <section className="section icons-section no-padding-top">
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-12">
              <div className="heading heading--center"><span className="heading__pre-title">Services</span>
                <h2 className="heading__title"><span>What we do</span> <span>for all people</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="icon-item">
                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_1-1.png" alt="img" />
                  <svg className="icon icon-item__icon icon--red">
                    <use xlinkHref="#donation"></use>
                  </svg>
                </div>
                <div className="icon-item__text">
                  <p>Medicine Help</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="icon-item">
                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_2-2.png" alt="img" />
                  <svg className="icon icon-item__icon icon--orange">
                    <use xlinkHref="#church"></use>
                  </svg>
                </div>
                <div className="icon-item__text">
                  <p>We Build and Create</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="icon-item">
                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_3-3.png" alt="img" />
                  <svg className="icon icon-item__icon icon--green">
                    <use xlinkHref="#blood"></use>
                  </svg>
                </div>
                <div className="icon-item__text">
                  <p>Water Delivery</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="icon-item">
                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_4-4.png" alt="img" />
                  <svg className="icon icon-item__icon icon--blue">
                    <use xlinkHref="#charity"></use>
                  </svg>
                </div>
                <div className="icon-item__text">
                  <p>We Care About</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
