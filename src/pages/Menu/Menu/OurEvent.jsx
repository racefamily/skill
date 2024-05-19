import { Helmet } from 'react-helmet-async';


const OurEvent = () => {
    // Define an array of images
    const imageSources = [
        "https://imgur.com/3p0ZMvH.jpg",
        "https://imgur.com/8oTEwiF.jpg",
        "https://imgur.com/OSalnXg.jpg",
        "https://imgur.com/BnKfLsS.jpg",
        "https://imgur.com/y9lKDrv.jpg",
        "https://imgur.com/PGgfvd8.jpg",
        "https://imgur.com/LYzgCQM.jpg",
        "https://imgur.com/vUJYLHV.jpg",
        "https://imgur.com/CnsOq6c.jpg",
        "https://imgur.com/QEuevdu.jpg",
        "https://imgur.com/cn0ZM1O.jpg",
        "https://imgur.com/afGc6Ql.jpg",
        "https://imgur.com/NcBFPlv.jpg",
        "https://imgur.com/9JaLmWe.jpg",
        "https://imgur.com/i0wv0pF.jpg",
        "https://imgur.com/dpiD23a.jpg",
        "https://imgur.com/3cXBcoL.jpg",
        "https://imgur.com/burAgt4.jpg",
        "https://imgur.com/q3JbOQv.jpg",
    ];

    // Define an array of topics for each image
    const imageTopics = [
        "সেন্টমার্টিন ট্যুর",
        "কক্সবাজার ট্যুর",
        "বান্দরবান ট্যুর",
        "ফয়েজলেক ট্যুর",
        "মিটিং",
        "মিটিং",
        "মিটিং",
        "ইফতার পার্টি",
        "ইফতার পার্টি",
        "গেট টুগেদার",
        "গেট টুগেদার",
        "সেলিব্রেশন",
        "সেলিব্রেশন",
        "সেলিব্রেশন",
        "কক্সবাজার",
        "কক্সবাজার",
        "কক্সবাজার",
        "কক্সবাজার",
        "এম্বোসিয়া হোটেল",
        
    ];

    return (
        <>
            <Helmet>
                <title>Bistro Boss | OurEvent</title>
            </Helmet>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Map through the image sources array and render each image */}
                {imageSources.map((src, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg">
                        {/* Display image */}
                        <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" style={{ aspectRatio: '16 / 9' }} />
                        {/* Image Topic */}
                        <p className="mt-2 text-xl font-semibold">{imageTopics[index]}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default OurEvent;