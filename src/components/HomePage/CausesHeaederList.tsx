import { icon_1_1, icon_2_2, icon_3_3, icon_4_4 } from "../../assets/img"
import { CauseHeader } from "./CauseHeader"


export const CausesHeaderList = () => {
  return (
    <div>
      <section className="section icons-section no-padding-top">
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-12">
              <div className="heading heading--center"><span className="heading__pre-title">Servicios</span>
                <h2 className="heading__title"><span>¿Qué hacemos</span> <span>por las personas?</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <CauseHeader title="Servicio Medico" color="red" imgURL={icon_1_1} icon="donation" />
            <CauseHeader title="Creamos y Construimos" color="orange" imgURL={icon_2_2} icon="church" />
            <CauseHeader title="Servicio de Agua" color="green" imgURL={icon_3_3} icon="blood" />
            <CauseHeader title="Nos Importa" color="blue" imgURL={icon_4_4} icon="charity" />
          </div>
        </div>
      </section>
    </div>
  )
}
