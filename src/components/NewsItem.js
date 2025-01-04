import React, { Component } from 'react' 
import PropTypes from 'prop-types';

export class NewsItem extends Component {
    render() {
               // Destructure props
        let { title, description, imageUrl, date, author, newsUrl, source } = this.props;
 
        return (
            <div className="my-3"> 
                <div className="card ">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...
                            <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'
                                style={
                                    {
                                        left: '90%',
                                        zIndex: '1'
                                    }
                                }>
                                {source}</span>
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author}  on  {new Date(date).toGMTString()} </small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm  btn-dark">Read more info </a>
                    </div>
                </div> 
            </div>
        );
    }
}

// Prop validations to enforce prop types
NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    date: PropTypes.string.isRequired,
    author: PropTypes.string,
    newsUrl: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
};
export default NewsItem
