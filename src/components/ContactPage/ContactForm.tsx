import React from 'react'

export const ContactForm = () => {
    return (
        <div className="col-xl-6">
            <form className="form message-form" action="javascript:void(0);">
                <h6 className="form__title">Send Message</h6><span className="form__text">* The following info is required</span>
                <div className="row">
                    <div className="col-lg-6">
                        <input className="form__field" type="text" name="first-name" placeholder="First Name *" required />
                    </div>
                    <div className="col-lg-6">
                        <input className="form__field" type="text" name="last-name" placeholder="Last Name *" required />
                    </div>
                    <div className="col-lg-6">
                        <input className="form__field" type="email" name="email" placeholder="Email *" required />
                    </div>
                    <div className="col-lg-6">
                        <input className="form__field" type="tel" name="phone-number" placeholder="Phone" />
                    </div>
                    <div className="col-12">
                        <textarea className="form__message form__field" name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="form__submit" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
