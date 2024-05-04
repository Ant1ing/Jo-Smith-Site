import { useState } from 'react';
import BentoContent from './BentoContent';

const BentoPort = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);

    const handleClick = (image, content) => {
        if (selectedImage === image) {
            setSelectedImage(null);
            setSelectedContent(null);
        } else {
            setSelectedImage(image);
            setSelectedContent(content);
        }
    };

    const imageContent = {
        "../images/bento1.jpg": { 
            title: "The Misty Woods", 
            tags: ["Photography", "Landscape", "Nature"],
            paragraph: "The Misty Woods was taken high up north in the Scottish Highlands, the remote views untouched by humanity makes for an amazing opportunity for capturing beauty.",
            clientInfo: {
                client: "Passion Project",
                date: "March 2023",
                role: "Photographer",
                type: "Landscapes"
            }
        },
        "../images/bento2.jpg": { 
            title: "House In The Hills", 
            tags: ["Photography", "Architecture", "Nature"],
            paragraph: "House In The Hills was taken in the Scottish Highlands, the modern architecture of the house in the middle of nowhere makes for a great contrast with the natural surroundings.",
            clientInfo: {
                client: "Passion Project",
                date: "April 2020",
                role: "Photographer",
                type: "Architecture"
            }
        },
        "../images/bento3.jpg": { 
            title: "The Darkness Of Life", 
            tags: ["Photography", "Landscape", "Nature", "Monochromatic"],
            paragraph: "The Darkness Of Life was taken in the Scottish Highlands, the dark and moody atmosphere of the image makes for a great contrast with the natural beauty of the landscape.",
            clientInfo: {
                client: "Passion Project",
                date: "February 2021",
                role: "Photographer",
                type: "Wide Angle"
            }
        },
        "../images/bento4.jpg": { 
            title: "Castle On The Water", 
            tags: ["Photography", "Architecture", "Nature"],
            paragraph: "Castle On The Water was taken in the Scottish Highlands, the ancient castle on the water makes for a great contrast with the natural beauty of the landscape.",
            clientInfo: {
                client: "Kingsman Productions",
                date: "June 2019",
                role: "Photographer",
                type: "Architecture"
            }
        },
        "../images/bento5.jpg": { 
            title: "Tri Peaks", 
            tags: ["Photography", "Landscape", "Nature"],
            paragraph: "Tri Peaks was taken in the Scottish Highlands, the three peaks in the distance make for a great contrast with the natural beauty of the landscape.",
            clientInfo: {
                client: "Dan Olderman",
                date: "September 2022",
                role: "Photographer",
                type: "Landscapes"
            }
        },
        "../images/bento6.jpg": { 
            title: "Snowy Mountain Tips", 
            tags: ["Photography", "Landscape", "Nature"],
            paragraph: "Snowy Mountain Tips was taken in the Scottish Highlands, the snowy mountain tips in the distance make for a great contrast with the natural beauty of the landscape.",
            clientInfo: {
                client: "Passion Project",
                date: "July 2018",
                role: "Photographer",
                type: "Landscapes"
            }
        }
    };

    return (
        <section className="bentoPort">
            <article className="bentoPort__header">
                <h1 className="bentoPort__header--title"><span className="highlight">Peer</span> Into My Work</h1>
                <p className="bentoPort__header--text">Here you can view some of my best work, click on an image to view more details about the project.</p>
            </article>

            <div className="gallery">
                {Object.entries(imageContent).map(([image, content]) => (
                    <div key={image} className="card" onClick={() => handleClick(image, content)}>
                        <img src={image} />
                    </div>
                ))}
            </div>
            <div className="galleryImage">
                {selectedImage && selectedContent && <BentoContent image={selectedImage} content={selectedContent} />}
            </div>
        </section>
    );
};

export default BentoPort;