import React,{ useState ,forwardRef } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Post = forwardRef(({displayName, userName,varified,text,img,avatar},ref) =>{
  const [like, setlike] = useState(false);
  const likes =()=>{
    if(like){
        setlike(false)
    }else{
        setlike(true)
    }
  }
    return (
        <div className="post" ref={ref}>
            <div className="post__avater">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="postheader__text">
                    <h3>
                        {displayName +" "} {varified && <VerifiedUserIcon className="verfied" />}
                        <span>@{userName}</span>
                    </h3>
                    </div>
                    <div className="postheader__description">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={img} onDoubleClick={likes} style={{cursor:"pointer"}}/>
                <div className="post__fotter">
                    <IconButton><ChatBubbleIcon cursor="pointer" fontSize="small"/></IconButton>
                   <IconButton>
                        <RepeatIcon cursor="pointer" fontSize="small"/>
                     </IconButton>

                    <IconButton onClick={likes}>
                    {like? <FavoriteIcon cursor="pointer" fontSize="small"/> : <FavoriteBorderIcon cursor="pointer" fontSize="small"/>}
                    </IconButton>
                    <IconButton>
                    <PublishIcon cursor="pointer" fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
})

export default Post
