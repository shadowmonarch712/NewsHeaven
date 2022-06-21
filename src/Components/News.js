import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class New extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=637eee7bd8ff423f840e04aa64adae0e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=637eee7bd8ff423f840e04aa64adae0e&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);  
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=637eee7bd8ff423f840e04aa64adae0e&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({ page: this.state.page - 1 })
    this.updateNews();
  };
  
  handleNextClick = async () => {
    // if (
      //   !(
        //     this.state.page + 1 >
        //     Math.ceil(this.state.totalResults / this.props.pageSize)
        //   )
        // ) {
          //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=637eee7bd8ff423f840e04aa64adae0e&page=${
            //     this.state.page + 1
            //     }&pageSize=${this.props.pageSize}`;
            //   this.setState({loading:true})
            //   let data = await fetch(url);
            //   let parsedData = await data.json();
            //   console.log(parsedData);
            
            //   this.setState({
              //     page: this.state.page + 1,
              //     articles: parsedData.articles,
              //     loading: false
              //   });
              // }
              this.setState({page: this.state.page + 1})
              this.updateNews();
            };
            
            render() {
              return (
      <div className="container">
        <h1>Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
            
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default New;
