import { Button ,Avatar } from '@material-ui/core'
import React, { useState,useContext } from 'react'
import db from '../firebase';


function TwittBox() {
    const [text,setText] =useState("");
    const [img,setImg] =useState("");

    const addDatabse =(e)=>{
        e.preventDefault();
       db.collection("post").add({
        displayName: "Faysal Mridha",
        img:img,
        text:text,
        userName:"faysalmridha",
        varified:false,
        avatar: "https://scontent.fbzl1-1.fna.fbcdn.net/v/t1.6435-0/c0.0.720.720a/s526x395/185973667_299084841712293_6542498808885585675_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=afGcvkEpcJ8AX-nw9QR&_nc_ht=scontent.fbzl1-1.fna&tp=28&oh=4a787b315e38a452810c8fb914353b1c&oe=60C6916C",
       });
       setText("");
       setImg("");
      
    }
    return (
        <div className="twittBox">
            <form>
                <div className="twitt_input">
                   <Avatar src="/avatar.jpg" />
                   <input value={text} onChange={e=> setText(e.target.value)} type="text" placeholder="What's happing?"  />      
                   </div>
                   <input value={img} onChange={e=> setImg(e.target.value)} className="img_input" type="text" placeholder="Optional Image url"  />       
                <Button type="submit" onClick={addDatabse} className="twitter_btn tw_button">Tweet</Button>
            </form>
        </div>
    )
}

export default TwittBox
