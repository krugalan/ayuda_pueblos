import React from 'react'
import { SliderItem } from './SliderItem'
import { blog_1, blog_2, blog_3 } from '../../assets/img'

export const SliderItems = () => {
    return (
        <div className="carousel-inner">
            <SliderItem actived img={blog_1} date='15 Feb. 2023' />
            <SliderItem img={blog_2} date='15 Feb. 2023' />
            <SliderItem img={blog_3} date='15 Feb. 2023' />
        </div>
    )
}
