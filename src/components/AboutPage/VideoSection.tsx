import React from 'react'
import { video_frame, video_frame_layout } from '../../assets/img'

export const VideoSection = () => {
    return (
        <section className="section video-block no-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="video-frame"><img className="img--bg" src={video_frame} alt="frame" />
                            <a className="video-trigger video-frame__trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
                                <span className="video-frame__icon"><i className="fa fa-play" aria-hidden="true"></i></span>
                                <span className="video-frame__text">Watch our video</span></a>
                            <img className="video-frame__img-layout" src={video_frame_layout} alt="layout" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
