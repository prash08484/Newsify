import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Coming from './Coming';
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        console.log("Hello this part of news component ");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c149185b90e54d2289f6f6feda1b615a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let praseData = await data.json()
        // console.log(data);
        this.setState({
            articles: praseData.articles,
            totalResults: praseData.totalResults,
            loading: false,

        })
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c149185b90e54d2289f6f6feda1b615a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let praseData = await data.json()
        // console.log(data);
        this.setState({
            articles: praseData.articles,
            totalResults: praseData.totalResults,
            loading: false,

        })
    }

    handlePrevClick = async () => {
        // console.log("next")

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c149185b90e54d2289f6f6feda1b615a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let praseData = await data.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: praseData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }


    // handleNextClick = async () => {
    //     // if ((this.state.page + 1) <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
    //     //     console.log("next")
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c149185b90e54d2289f6f6feda1b615a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     //     this.setState({ loading: true })
    //     //     let data = await fetch(url);
    //     //     let praseData = await data.json()
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: praseData.articles,
    //     //         loading: false
    //     //     })
    //     // }
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }

    handleNextClick = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.setState({ page: this.state.page + 1 }, () => this.updateNews());
        }
    }



    render() {

        return (
            <div className="container my-3">
                <h3 className='text-center'>Top Headlines </h3>
                {this.state.loading && <Coming />}
                {/* <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 88) : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : `https://media.licdn.com/dms/image/v2/D5603AQF_nNWIqc1y8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709993698573?e=1736380800&v=beta&t=9CxY4oA_9nuttsFObKZsmi94hdslsSMyNWwKW-2v-do`}
                                date={element.publishedAt}
                                author={element.author ? element.author : "Unkown"}
                                newsUrl={element.url}
                                source={element.source.name}
                            />
                        </div>
                    })}
                </div> */}
                
                {/* <div className="row">
                    {!this.state.loading && this.state.articles && this.state.articles.length > 0 && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    imageUrl={element.urlToImage ? element.urlToImage : 'default-image-url.jpg'}
                                    date={element.publishedAt}
                                    author={element.author ? element.author : "Unknown"}
                                    newsUrl={element.url}
                                    source={element.source.name}
                                />
                            </div>
                        );
                    })}
                </div> */}


<div className="row">
    {!this.state.loading && this.state.articles && this.state.articles.length > 0 ? (
        this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
                <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={element.urlToImage || 'default-image-url.jpg'}
                    date={element.publishedAt}
                    author={element.author || "Unknown"}
                    newsUrl={element.url}
                    source={element.source.name}
                />
            </div>
        ))
    ) : (
        // Show a loading or fallback message when there are no articles
        <p>No news articles available at the moment.</p>
    )}
</div>


                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-lg" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary btn-lg" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News 
