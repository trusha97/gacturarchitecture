import React, { useState } from 'react';
import "./DetailsBlogMainpage.css"
import { blogsimg1, blogsimg2, blogsimg3, blogsimg4, blogsimg5, blogsimg6 } from '../../utils/images';

const DetailsBlogMainpage = () => {

    const blogPages = [
        [
          {
            id: 1,
            image: blogsimg1,
            date: "Oct 2, 2024",
            title: "The Intersection of Art and Function Exploring - Page 1",
            link: "#",
          },
          {
            id: 2,
            image: blogsimg2,
            date: "Oct 2, 2024",
            title: "The Intersection of Art and Function Exploring - Page 1",
            link: "#",
          },
          {
            id: 3,
            image: blogsimg3,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
          {
            id: 4,
            image: blogsimg4,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
          {
            id: 5,
            image: blogsimg5,
            date: "Oct 4, 2024",
            title: "The Intersection of Art and Function Exploring - Page 3",
            link: "#",
          },
          {
            id: 6,
            image: blogsimg6,
            date: "Oct 4, 2024",
            title: "The Intersection of Art and Function Exploring - Page 3",
            link: "#",
          },
           {
            id: 7,
            image: blogsimg2,
            date: "Oct 2, 2024",
            title: "The Intersection of Art and Function Exploring - Page 1",
            link: "#",
          },
          {
            id: 8,
            image: blogsimg3,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
          {
            id: 9,
            image: blogsimg4,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
        ],
        [
          {
            id: 1,
            image: blogsimg2,
            date: "Oct 2, 2024",
            title: "The Intersection of Art and Function Exploring - Page 1",
            link: "#",
          },
          {
            id: 2,
            image: blogsimg3,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
          {
            id: 3,
            image: blogsimg4,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
        ],
        [
          {
            id: 1,
            image: blogsimg4,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
          {
            id: 2,
            image: blogsimg5,
            date: "Oct 4, 2024",
            title: "The Intersection of Art and Function Exploring - Page 3",
            link: "#",
          },
          {
            id: 3,
            image: blogsimg6,
            date: "Oct 4, 2024",
            title: "The Intersection of Art and Function Exploring - Page 3",
            link: "#",
          },
          {
            id: 4,
            image: blogsimg2,
            date: "Oct 2, 2024",
            title: "The Intersection of Art and Function Exploring - Page 1",
            link: "#",
          }
        ],
        [
          {
            id: 1,
            image: blogsimg2,
            date: "Oct 2, 2024",
            title: "The Intersection of Art and Function Exploring - Page 1",
            link: "#",
          },
          {
            id: 2,
            image: blogsimg3,
            date: "Oct 3, 2024",
            title: "The Intersection of Art and Function Exploring - Page 2",
            link: "#",
          },
        ],
      ];

      const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className='blogmain-divin-detail1'>
      <div className='blog-detail-main-div1'>
        <div className='blog-detail-div-inner1'>
          <div className="blog-list">
            {/* Show current page blogs */}
            {blogPages[currentPage].map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image-container">
                  <img src={blog.image} alt={blog.title} className="blog-image" />
                  <div className="blog-date1">{blog.date}</div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title23">
                    <a href={blog.link} className="blog-link1">{blog.title}</a>
                  </h3>
                  <a href={blog.link} className="blog-link">
                    More Details <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"className="blog-link-icon" ><path d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"></path></svg>
                  </a>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="pagination">
              {blogPages.map((_, index) => (
                <span
                  key={index}
                  className={`page ${currentPage === index ? "active" : ""}`}
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsBlogMainpage
