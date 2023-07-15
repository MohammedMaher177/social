

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getPosts } from '../../Redux/postsSlice.js'
import CreatePost from './CreatePost.jsx'




export default function Posts() {
  const dispatch = useDispatch()
  const getAllPosts = async () => {
    let posts = await dispatch(getPosts())
    //  console.log(posts);
  }
  let { posts } = useSelector(state => state.posts)

  // console.log(posts);
  useEffect(() => {
    getAllPosts()
  })
  function getDateInDays(createdAt) {
    const diff = new Date(Date.now()).getTime() - new Date(createdAt).getTime();
    return Math.floor(diff / 1000 / 3600 / 24)
  }
  return (<>
    <CreatePost />
    {posts?.map(post => <div className='border text-start p-3' key={post._id}>
      <h2>{post.title}</h2>
      <div className='d-flex'>

        <i className="fa-regular fa-user"></i>
        <span className=''>{getDateInDays(post.createdAt)} Dayes Ago</span>
      </div>

      <p>{post.content}</p>
    </div>)}
  </>
  )
}
