import React from "react";

function Video({ videoId }) {
    if (!videoId) return null;

    return (
        <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Matchup Video"
        allowFullScreen
        ></iframe>
    );
}

export default Video 