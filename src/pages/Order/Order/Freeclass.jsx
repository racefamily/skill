import { Helmet } from "react-helmet-async";
import React from 'react';

const Freeclass = () => {
    // Define an array of YouTube video links
    const videoLinks = [
        "https://www.youtube.com/watch?v=eNszgsxEj14",
        "https://www.youtube.com/watch?v=meOWV1w2GE8",
        "https://www.youtube.com/watch?v=bZNsHugQgz4",
        "https://www.youtube.com/watch?v=xxeN40KQyZY",
        "https://www.youtube.com/watch?v=foWu5HFFn4M",
    ];

    // Define an array of topics for each video
    const videoTopics = [
        "Job",
        "Iron Lady of Pakistan",
        "Free Class",
        "Tajul Vhi",
        "Sonu Sharma Attitude",
    ];

    return (
        <>
            <Helmet>
                <title>Race Family | FreeClass</title>
            </Helmet>
        <div>
            <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Map through the video links array and render each video */}
            {videoLinks.map((link, index) => (
                <div key={index} className={`p-4 bg-gray-100 rounded-lg video-${index + 1}`}>
                    {/* Embed YouTube video using iframe */}
                    <iframe
                        title={`Video ${index + 1}`}
                        width="100%"
                        height="315"
                        src={link.replace("watch?v=", "embed/")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/* Heading */}
                    <h2 className="mt-2 text-xl font-semibold">{`Class ${index + 1}`}</h2>
                    {/* Video Topic */}
                    <p>{videoTopics[index]}</p>
                </div>
            ))}
        </div>
        </div>
        </div>
        </>
    );
};

export default Freeclass;
