import React from 'react';
import DateTime from "./dateTime";

const Video = (props) => {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTime date={props.date}/>
        </div>
    );
};

export default Video;