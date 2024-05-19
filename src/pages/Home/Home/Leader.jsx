import React from 'react';

const Leader = () => {
    // Define arrays of images, titles, positions, and facebook IDs
    const leaders = [
        {
            name: "Mehedi Hasan Hira",
            position: "General Manager",
            image: "https://imgur.com/Lwk3dOh.jpg",
            facebookId: "profile.php?id=100087167029370"
        },
        {
            name: "Akash Kanti Das",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/RVo1bqW.jpg",
            facebookId: "akashenterpreneurfamily"
        },
        {
            name: "Sajal Islam Rabbi",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/aCkQYlZ.jpg",
            facebookId: "sajalislamrabbi"
        },
        {
            name: "Asad Nadim",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/YUZvIF4.jpg",
            facebookId: "nadim015"
        },
        {
            name: "Tajul Islam",
            position: "Senior Sales Officer",
            image: "https://imgur.com/bU5jPNG.jpg",
            facebookId: "MdTajulIslam745"
        },
        {
            name: "MD. Zihad",
            position: "Senior Sales Officer",
            image: "https://imgur.com/5Dou4EM.jpg",
            facebookId: "azzihad.07"
        },
        {
            name: "Anika Khanam",
            position: "Senior Sales Officer",
            image: "https://imgur.com/wzHsryU.jpg",
            facebookId: "entrepreneuranika09"
        },
        {
            name: "Farhana Begum",
            position: "Senior Sales Officer",
            image: "https://imgur.com/OeSKmSC.jpg",
            facebookId: "FARHANA2.Net"
        },
        {
            name: "Sakhawat Hossain",
            position: "Senior Sales Officer",
            image: "https://imgur.com/8Km40Py.jpg",
            facebookId: "Sakhawathossain6"
        }
        ,
        {
            name: "রোকাইয়া জাহান",
            position: "Senior Sales Officer",
            image: "https://imgur.com/16szPOK.jpg",
            facebookId: "Rukiajahan0"
        }
        ,
        {
            name: "Abdul Malek",
            position: "Sales Officer",
            image: "https://imgur.com/7iLyp5m.jpg",
            facebookId: "abdulmalek2024"
        }
        ,
        {
            name: "Mohammad Morshedul Alam",
            position: "Sales Officer",
            image: "https://imgur.com/Z33snu2.jpg",
            facebookId: "nbmorshed"
        }
        ,
        {
            name: "Mohammad Nazim Uddin",
            position: "Sales Officer",
            image: "https://imgur.com/BwUW8iZ.jpg",
            facebookId: "profile.php?id=100069573125851"
        }
        ,
        {
            name: "Ali Jubair",
            position: "Sales Officer",
            image: "https://imgur.com/Z2hZ68P.jpg",
            facebookId: "profile.php?id=100082329159496"
        }
        ,
        {
            name: "Omar Mahabub",
            position: "Sales Officer",
            image: "https://imgur.com/3YA2xsi.jpg",
            facebookId: "omar.mahabub.5"
        }
        ,
        {
            name: "Habibul Islam Sayem",
            position: "Sales Officer",
            image: "https://imgur.com/83UmDRz.jpg",
            facebookId: "habibulislamsayem"
        }
        ,
        {
            name: "Jannatul Nayem",
            position: "Sales Officer",
            image: "https://imgur.com/O3uTaz5.jpg",
            facebookId: "NayemJRitu"
        }
        ,
        {
            name: "Jannatul Naima",
            position: "Sales Officer",
            image: "https://imgur.com/lvFDpE8.jpg",
            facebookId: "profile.php?id=61553987452207"
        }
        ,
        {
            name: "Md Md Imran",
            position: "Sales Officer",
            image: "https://imgur.com/mRiGqSk.jpg",
            facebookId: "mdImran38"
        }
        ,
        {
            name: "Shajidul Ridoy",
            position: "Sales Officer",
            image: "https://imgur.com/Fmocf0c.jpg",
            facebookId: "profile.php?id=100083633741342"
        }
        ,
        {
            name: "Rafidul Islam",
            position: "Sales Officer",
            image: "https://imgur.com/qxJn96W.jpg",
            facebookId: "rafidul.islam.7545"
        }
        ,
        {
            name: "MD Sajidul Islam",
            position: "Sales Officer",
            image: "https://imgur.com/qRAz1YW.jpg",
            facebookId: "sajidulislam2006"
        }
        ,
        {
            name: "Md Sultanul Arifin",
            position: "Sales Officer",
            image: "https://imgur.com/r2UpSLR.jpg",
            facebookId: "mdsultanularifin2"
        }
        ,
        {
            name: "MD Omar Ohin Bhuiyan",
            position: "Sales Officer",
            image: "https://imgur.com/TbxtIMi.jpg",
            facebookId: "mdomarohin.bhuiyan"
        }
        ,
        {
            name: "Meherin Akter Meem",
            position: "Sales Officer",
            image: "https://imgur.com/2HkJ7XK.jpg",
            facebookId: "meherinnurshaiba"
        }
        // Add more leaders as needed
    ];

    // Function to generate Facebook link with user ID
    const generateFacebookLink = (facebookId) => {
        return `https://www.facebook.com/${facebookId}`;
    };

    const openFacebook = (facebookId) => {
        window.open(generateFacebookLink(facebookId), '_blank');
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-violet-800 text-white col-span-full flex justify-center">
                <h1 className="text-5xl font-bold my-8">Our Team</h1>
            </div>
            {leaders.map((leader, index) => (
                <div key={index} className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={leader.image} alt={leader.name} className="rounded-xl w-full h-auto" style={{ aspectRatio: '1 / 1' }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{leader.name}</h2>
                        <p>{leader.position}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={() => openFacebook(leader.facebookId)}>Facebook</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leader;