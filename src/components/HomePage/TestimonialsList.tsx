import { testimonials } from '../../data/testimonials';
import { TestimonialComponent } from './TestimonialComponent';

export const TestimonialsList = () => {
    return (
        <>
            {
                testimonials.map((testimonial, index) => (
                    <TestimonialComponent {...testimonial} key={index} />

                ))
            }
        </>
    )
}

