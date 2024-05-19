import { Helmet } from "react-helmet-async";
import React from 'react';

const Class = () => {
    // Define an array of YouTube video links
    const videoLinks = [
        "https://www.youtube.com/watch?v=e_5f0A-42ag",
        "https://www.youtube.com/watch?v=4CRHRUxIbmg",
        "https://www.youtube.com/watch?v=uXEy7uSNX0w",
        "https://www.youtube.com/watch?v=xPcs1CSwIGo",
        "https://www.youtube.com/watch?v=7HbwM_AsxY0",
    ];

    // Define an array of topics for each video
    const videoTopics = [
        "Eco System",
        "Products",
        "Sales Process Part 01",
        "Sales Process Part 02",
        "Road To Success",
    ];

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Class</title>
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

export default Class;
