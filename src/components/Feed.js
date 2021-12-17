import React, { useEffect, useState } from 'react'
import db from '../firebase';
import './feed.css'
import Post from './Post'
import TwittBox from './TwittBox';
import FlipMove from 'react-flip-move';


function Feed() {
    const [post, setPost]=useState([]);
    useEffect(()=>{
        db.collection("post").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => doc.data()))
        })
    },[])
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* Header */}
            <TwittBox />
            {/* TwitBox */}
          <FlipMove>
          {post.map(post =>(
                <Post key={post.text} displayName={post.displayName} userName={post.userName} varified={post.varified} text={post.text} img={post.img} avatar={post.avatar} />
            ))}
          </FlipMove>

        
            {/* Post */}
        </div>
    )
}

export default Feed
