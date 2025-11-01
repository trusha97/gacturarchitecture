import React from 'react'
import "./SinglePosttab.css"
import { blogsingleimg1, blogsingleimg2 } from '../../utils/images'
import SinglePostForm from '../SinglePost/SinglePostForm'
import SinglePostSocial from './Singlepostsocial'

const Singleposttab = () => {
    return (
        <>
            <div className='single-post-tab-main-div'>
                <div className='singlepost-main-div-tab'>
                    <div className='single-post-tab-inner-div'>
                        <div className="post-header-container">
                            <div className="post-meta">
                                <a href="/author/wpuser" className="post-tag">By wpuser</a>
                                <a href="/category/uncategorized" className="post-tag">Uncategorized</a>
                            </div>

                            <div className="post-date-title">
                                <span className="post-date">16 Sep<br />2024</span>
                                <div className="divider1"></div>
                                <h2 className="post-title">
                                    Innovative Future Architecture
                                </h2>
                            </div>

                            {/* bottom full width line */}
                            <div className="bottom-line"></div>
                        </div>

                        <div className='main-div-inner-div1'>
                            <h2 className='themescamp-text1'>ThemesCamp</h2>
                            <div className='themes-camp-text'>
                                <p className='themes-div-text1'>Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion.</p>
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
                                <p className='themes-div-text1'>The short answer is yes. According to Kross,  when you think in yourself as another person, it’s allows you to lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>
                            </div>

                            <div className="mindfulness-container1">
                                <h2 className="mindfulness-title1">Defaulting to Mindfulness</h2>

                                <p className="mindfulness-paragraph1">
                                    Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they
                                    sold out blog photo booth Marfa semio tics Truffaut. Mustache Schlitz next
                                    level blog Williamsburg, deep v typewriter tote bag.
                                </p>

                                <ul className="mindfulness-list1">
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
                    </div>

                    <div className='single-post-inner-div'>
                        <SinglePostSocial />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleposttab
