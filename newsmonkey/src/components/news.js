import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './newsItem'
import axios from 'axios';
import { Button } from 'react-bootstrap';
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 5,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor() {
        super();
        console.log("Hello i am constructor from news.js");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async updateNews(){
        //console.log('cdm');
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cce1f18f0a4c47c0a276b4cb1793d2be&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        axios.get(url).then((data) => {
            //console.log(data.data);
            this.setState({
                articles: data.data.articles,
                totalResults: data.data.totalResults,
            })
        }).catch((error) => {
            console.log(error);
        }) 
    }
    componentDidMount() {
        //console.log('cdm');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cce1f18f0a4c47c0a276b4cb1793d2be&page=1&pagesize=${this.props.pagesize}`;
        axios.get(url).then((data) => {
           // console.log(data.data);
            this.setState({
                articles: data.data.articles,
                totalResults: data.data.totalResults,
            })
        }).catch((error) => {
            console.log(error);
        })

    }
    handlePrev = () => {
        this.setState({
            page:this.state.page-1
        })
        this.updateNews();

    }
    handleNext = () => {
        this.setState({
            page:this.state.page+1
        })
        this.updateNews();
    }
    render() {
        return (
            <>
                <div className='container my-3'>
                    <h2 className='text-center'>NewsMonkey - Top headlines</h2>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return (
                                <div className='col-md-4' key={element.url} >
                                    <Newsitem title={element.title} description={element.description} imageURL={element.urlToImage ? element.urlToImage : 'https://media2.gmgroup.be/00_nm_logo.png'} newsURL={element.url} author={element.author} date={element.publishedAt}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='container d-flex justify-content-between '>
                    <Button disabled={this.state.page <= 1} onClick={this.handlePrev} variant='dark'>&larr; Previous</Button>
                    <Button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} variant='dark' onClick={this.handleNext}>Next &rarr;</Button>
                </div>
            </>
        )
    }
}

export default News