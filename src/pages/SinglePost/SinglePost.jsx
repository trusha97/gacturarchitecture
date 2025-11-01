import React from 'react'
import "./SinglePost.css"
import ThemesCampsinglePost from './ThemesCampsinglePost'
import SinglePostForm from './SinglePostForm'
import SinglepostBlog from './singlepostBlog'
import { blogsingleimg1, blogsingleimg2, rightaerrow } from '../../utils/images'
import SingleBanner from './singlebanner'



const SinglePost = () => {

  return (
    <>
      <div className='themes-camp-main-div'>
        <div className='thems-camp-div'>
          <div className='main-thems-div-div'>
            <div className='main-themscamp-div-main'>
              <SingleBanner />
              <div className='main-div-inner-div'>
                <h2 className='themescamp-text'>ThemesCamp</h2>
                <div className='themes-camp-text'>
                  <p className='themes-div-text'>Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion.</p>
                  <p className='themes-div-text1'>Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire</p>
                </div>
                <div className='themes-div-main-div-img'>
                  <div className='theme-div-image-inner'>
                    <div className='image-div-themes'>
                      <img className='image-blog-single-div' src={blogsingleimg1} alt="" />
                      <h3 className='blog-image-sample-div'>Images by <a className='blog-image-sample-div2' href="#">@sample</a></h3>
                    </div>
                    <div className='image-div-themes'>
                      <img className='image-blog-single-div' src={blogsingleimg2} alt="" />
                      <h3 className='blog-image-sample-div'>Images by <a className='blog-image-sample-div2' href="#">@sample</a></h3>
                    </div>
                  </div>
                </div>
                <div className='theme-div-short'>
                  <p className='themes-div-text'>The short answer is yes. According to Kross,  when you think in yourself as another person, it’s allows you to lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>
                </div>

                <div className="mindfulness-container">
                  <h2 className="mindfulness-title">Defaulting to Mindfulness</h2>

                  <p className="mindfulness-paragraph">
                    Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they
                    sold out blog photo booth Marfa semio tics Truffaut. Mustache Schlitz next
                    level blog Williamsburg, deep v typewriter tote bag.
                  </p>

                  <ul className="mindfulness-list">
                    <li>
                      Welsh novelist Sarah Waters sums it up eloquently.
                    </li>
                    <li>
                      In their classic book, Creativity in Business, based on a popular course.
                    </li>
                    <li>
                      Novelist and screenwriter Steven Pressfield.
                    </li>
                  </ul>

                  <p className="mindfulness-muted">
                    That immediately brought to mind one of{" "}
                    <a href="#" className="mindfulness-link">my fondest</a> memories, involving my daughter
                    when she was just a toddler of one.
                  </p>
                </div>
              </div>
              <div className='main-div-inner-div'>
                <h2 className='themescamp-text'>ThemesCamp</h2>
                <div className='themes-camp-text'>
                  <p className='themes-div-text'>Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion.</p>
                  <p className='themes-div-text1'>Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire</p>
                </div>
                <div className='themes-div-main-div-img'>
                  <div className='theme-div-image-inner'>
                    <div className='image-div-themes'>
                      <img className='image-blog-single-div' src={blogsingleimg1} alt="" />
                      <h3 className='blog-image-sample-div'>Images by <a className='blog-image-sample-div2' href="#">@sample</a></h3>
                    </div>
                    <div className='image-div-themes'>
                      <img className='image-blog-single-div' src={blogsingleimg2} alt="" />
                      <h3 className='blog-image-sample-div'>Images by <a className='blog-image-sample-div2' href="#">@sample</a></h3>
                    </div>
                  </div>
                </div>
                <div className='theme-div-short'>
                  <p className='themes-div-text'>The short answer is yes. According to Kross,  when you think in yourself as another person, it’s allows you to lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>
                </div>

                <div className="mindfulness-container">
                  <h2 className="mindfulness-title">Defaulting to Mindfulness</h2>

                  <p className="mindfulness-paragraph">
                    Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they
                    sold out blog photo booth Marfa semio tics Truffaut. Mustache Schlitz next
                    level blog Williamsburg, deep v typewriter tote bag.
                  </p>

                  <ul className="mindfulness-list">
                    <li>
                      Welsh novelist Sarah Waters sums it up eloquently.
                    </li>
                    <li>
                      In their classic book, Creativity in Business, based on a popular course.
                    </li>
                    <li>
                      Novelist and screenwriter Steven Pressfield.
                    </li>
                  </ul>

                  <p className="mindfulness-muted">
                    That immediately brought to mind one of{" "}
                    <a href="#" className="mindfulness-link">my fondest</a> memories, involving my daughter
                    when she was just a toddler of one.
                  </p>
                </div>
              </div>
              <SinglePostForm />
              <div className="next-post-container1">
                <div className='next-aerrow-div1'>
                  <div className="next-post-arrow1">
                    <span className=" arrow-left-icon"><img src={rightaerrow} alt="rightaerror img" /></span>
                  </div>
                  <div className="next-post-text">
                    <span className="next-post-label">NEXT POST</span>
                    <h3 className="next-post-title">
                      The Intersection of Art and Function E
                    </h3>
                  </div>
                </div>



                <div className='next-aerrow-div2'>
                  <div className="next-post-text">
                    <span className="next-post-label">NEXT POST</span>
                    <h3 className="next-post-title">
                      The Intersection of Art and Function E
                    </h3>
                  </div>
                  <div className="next-post-arrow1">
                    <span className="arrow-icon"><img src={rightaerrow} alt="rightaerror img" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='single-post-blog-main-div'>
              <SinglepostBlog />
            </div>
          </div>
        </div>
      </div>
      {/* <ThemesCampsinglePost/> */}
    </>
  )
}

export default SinglePost
