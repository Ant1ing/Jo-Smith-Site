import { useState, useEffect } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

    const imageGroups = [
        {
            title: "Wedding Photos",
            images: [
                {
                    src: "../images/image1.jpg",
                    title: "Beautiful Wedding Shot",
                    description: "A beautiful woman"
                },
                {
                    src: "../images/image2.jpg",
                    title: "Etheral Wedding Shot",
                    description: "A beautiful woman"
                },
                {
                    src: "../images/image3.jpg",
                    title: "Wedding Shot",
                    description: "A beautiful couple"
                },
            ]
        },
        {
            title: "Nature Photos",
            images: [
                {
                    src: "../images/image4.jpg",
                    title: "Close Ups",
                    description: "Expertise in capturing close up shots"
                },
                {
                    src: "../images/image5.jpg",
                    title: "Man",
                    description: "A handsome man"
                },
                {
                    src: "../images/image6.jpg",
                    title: "Child",
                    description: "A cute child"
                }
            ]
        },
        {
            title: "Third Group",
            images: [
                {
                    src: "../images/image7.jpg",
                    title: "Woman",
                    description: "A beautiful woman"
                },
                {
                    src: "../images/image8.jpg",
                    title: "Man",
                    description: "A handsome man"
                },
                {
                    src: "../images/image9.jpg",
                    title: "Child",
                    description: "A cute child"
                }
            ]
        }
    ];

    useEffect(() => {
        imageGroups.forEach(group => {
            group.images.forEach(image => {
                const img = new Image();
                img.src = image.src;
            });
        });
    }, []);

    const handleImageClick = (image) => {
        console.log('Image clicked', image);
        setSelectedImage(image);
    };

    const handlePreviousGroup = () => {
        setCurrentGroupIndex((prevIndex) => (prevIndex === 0 ? imageGroups.length - 1 : prevIndex - 1));
    };

    const handleNextGroup = () => {
        setCurrentGroupIndex((prevIndex) => (prevIndex === imageGroups.length - 1 ? 0 : prevIndex + 1));
    };

    return (
    <div className="gallery-container">
        <h2 className='image-title-overlay'><span className="highlight2">{imageGroups[currentGroupIndex].title}</span></h2>
            
        
        <div className={`triple-image-display`}>
            {imageGroups[currentGroupIndex].images.map((image, index) => (
                <div key={index} className="image-container">
                    <img
                        src={image.src}
                        alt={`Image ${currentGroupIndex * 3 + index + 1}`}
                    />
                    <div className="image-icon" onClick={() => handleImageClick(image)}>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            ))}
        </div>

        <div className="gallery-buttons">
            <button onClick={handlePreviousGroup}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={handleNextGroup}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
        {selectedImage && (
            <div className="image-modal">
                <img src={selectedImage.src} alt="Selected Image" />
                <button onClick={() => setSelectedImage(null)}>X</button>
                <div className="image-details">
                    <h3 className='image-title'>{selectedImage.title}</h3>
                    <div className="feature1-decorators">
                        <div className="feature1-decorator"></div>
                            <div className="feature1-decorated-text">Jo Smith</div>
                        <div className="feature1-decorator"></div>
                    </div>
                    <p className='image-text'>{selectedImage.description}</p>
                </div>
            </div>
        )}
        <div className="gallery-dots">
            {imageGroups.map((group, index) => (
                <span
                    key={index}
                    className={`dot ${currentGroupIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentGroupIndex(index)}
                ></span>
            ))}
        </div>
    </div>
);
}
 
// Move the export statement outside of the function component
export default Gallery;

