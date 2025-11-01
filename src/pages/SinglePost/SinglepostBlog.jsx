import React from 'react'
import "./SinglepostBlog.css"
import { blog1, blog2, blog3, facebook, instagram, linkdin, searchgold, twitter } from '../../utils/images';


const blogPosts = [
    {
        id: 1,
        img: blog1,
        title: "The Intersection of Art and Function Exploring",
        date: "October 2, 2024",
    },
    {
        id: 2,
        img: blog2,
        title: "The Intersection of Art and Function Exploring",
        date: "October 2, 2024",
    },
    {
        id: 3,
        img: blog3,
        title: "The Intersection of Art and Function Exploring",
        date: "October 2, 2024",
    },
];

const SinglepostBlog = () => {

    return (
        <>
            <div className='singlepost-main-div'>
                <div className='single-main-div-container'>
                    <div className='single-post-right-side-div'>
                    </div>
                    <div className='single-post-left-side-div'>
                        <div className="sidebar-container">
                            <div className="search-box">
                                <input type="text" placeholder="Type search keyword..." />
                                <button className="search-btn"><img src={searchgold} alt="" /></button>
                            </div>

                            <div className="blog-posts">
                                <h3 className="section-title">Blog Posts</h3>
                                <span className="underline"></span>
                                {blogPosts.map((post) => (
                                    <div className="blog-item" key={post.id}>
                                        <img src={post.img} alt={post.title} />
                                        <div className="blog-text">
                                            <p className="blog-title">{post.title}</p>
                                            <span className="blog-date">{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="social-section">
                                <h3 className="section-title">Social</h3>
                                <span className="underline"></span>
                                <div className="blog-post-social-main-div">
                                    <div className='blog-social-icon-inner-div'>
                                        <a className='blog-social-image' href="">
                                            <i className="fab fa-facebook-f facbook-icon"></i>
                                        </a>
                                        <a className='blog-social-image' href="">
                                            <i className="fab fa-x-twitter"></i>
                                        </a>
                                        <a className='blog-social-image' href="">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a className='blog-social-image' href="">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglepostBlog
