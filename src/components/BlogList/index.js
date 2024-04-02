import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  /** add async to the function */
  getBlogsData = async () => {
    /** correct the fetch spelling */
    const response = await fetch('https://apis.ccbp.in/blogs')
    /** convert response to json */
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    /** asign formatted data to blogsdata */
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    this.getBlogsData()

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map(eachBlogItem => (
              <BlogItem blogItemDetails={eachBlogItem} key={eachBlogItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
