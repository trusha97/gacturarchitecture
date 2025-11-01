import React from 'react'
import "./SinglePostForm.css"

const SinglePostForm = () => {

  return (
    <>
    <div>
      <div className="comment-form-container">
      <h3 className="comment-title">LEAVE A COMMENT</h3>

      <textarea
        placeholder="Type your comment here ..."
        className="comment-textarea"
      ></textarea>

      <input type="text" placeholder="Name" className="comment-input" />
      <input type="email" placeholder="Email" className="comment-input" />
      <input type="url" placeholder="Website" className="comment-input" />

      <div className="comment-checkbox">
        <input type="checkbox" id="save-info" />
        <label htmlFor="save-info">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      <button className="comment-submit">Post Comment</button>
    </div>
      </div>
    </>
  )
}

export default SinglePostForm
