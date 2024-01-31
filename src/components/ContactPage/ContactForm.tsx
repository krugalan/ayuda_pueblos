import { useForm } from "../../hooks/useForm"

export const ContactForm = () => {

    const { onInputChange, name, lastName, email } = useForm({
        name: '',
        lastName: '',
        email: '',

    });


    return (
        <div className="col-xl-6">
            <form className="form message-form">
                <h6 className="form__title">Contactanos</h6><span className="form__text">* Los siguientes datos son necesarios.</span>
                <div className="row">
                    <div className="col-lg-6">
                        <input
                            className="form__field"
                            type="text"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            placeholder="Nombre *"
                            required
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            className="form__field"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={onInputChange}
                            placeholder="Apellido *"
                            required
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            className="form__field"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            placeholder="Email *"
                            required
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            className="form__field"
                            type="tel" name="phone-number"
                            placeholder="Teléfono"
                        />
                    </div>
                    <div className="col-12">
                        <textarea className="form__message form__field" name="message" placeholder="Mensaje"></textarea>
                    </div>
                    {(name && lastName && email) &&
                        <div className="col-12">
                            <button className="form__submit" type="submit">Enviar Mensaje</button>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}
