import PropTypes from 'prop-types';

const BentoContent = ({ image, content }) => {
    return (
        <div className="heroSec2">
            <div className="heroSec2__image">
                <img src={image} alt="Hero Background" />
            </div>
            <div className="heroSec2__banner">
                <div className="heroSec2__banner--left">
                    <h1 className="heroSec2__banner--left--header">{content.title}</h1>
                    <div className="heroSec2__banner--left--tags">
                        {content.tags.map((tag, index) => (
                            <span key={index} className="heroSec2__banner--left--tags--tag">{tag}</span>
                        ))}
                    </div>
                    <p className="heroSec2__banner--left--text">{content.paragraph}</p>
                </div>
                <div className="heroSec2__banner--right">
                    <div className="heroSec2__banner--right--name">
                        <h3>Client</h3>
                        <p>{content.clientInfo.client}</p>
                    </div>
                    <div className="heroSec2__banner--right--name">
                        <h3>Date</h3>
                        <p>{content.clientInfo.date}</p>
                    </div>
                    <div className="heroSec2__banner--right--name">
                        <h3>Role</h3>
                        <p>{content.clientInfo.role}</p>
                    </div>
                    <div className="heroSec2__banner--right--name">
                        <h3>Type</h3>
                        <p>{content.clientInfo.type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

BentoContent.propTypes = {
    image: PropTypes.string.isRequired,
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        paragraph: PropTypes.string.isRequired,
        clientInfo: PropTypes.shape({
            client: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default BentoContent;