export type TestimonialComponentType = {
    title?: string;
    testimonial: string;
    author?: string;
    authorPosition?: string

}

export const TestimonialComponent = ({ title = "", testimonial, author = "Anónimo", authorPosition = "Voluntario/a" }: TestimonialComponentType) => {
    return (

        <div className="testimonials-slider__item">
            <div className="testimonials-slider__icon mt-4">“</div>
            <h3>{title}</h3>
            <div className="testimonials-slider__text">
                <p>{testimonial}</p>
                <div className="testimonials-slider__author"><span className="testimonials-slider__name">{author}, </span>
                    <span className="testimonials-slider__position">{authorPosition}</span></div>
            </div>
        </div>

    )
}
