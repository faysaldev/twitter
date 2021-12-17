import React from 'react';
import './sidbar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidbarOption from './SidbarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidbar() {
    return (
        <div className="sidbar">
            <TwitterIcon key="0" className="twitter__icon" />
            <SidbarOption key="01" active Icon={HomeIcon} text="Home"/>
            <SidbarOption key="02" Icon={SearchIcon} text="Explore"/>
            <SidbarOption key="03" Icon={NotificationsNoneIcon} text="Notification"/>
            <SidbarOption key="04" Icon={MailOutlineIcon} text="Messages"/>
            <SidbarOption key="05" Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidbarOption key="06" Icon={ListAltIcon} text="Lists"/>
            <SidbarOption key="07" Icon={PersonOutlineIcon} text="Profile"/>
            <SidbarOption key="08" Icon={MoreHorizIcon} text="More"/>
            <Button variant='outlined' fullWidth className="twitter_btn">Tweet</Button>
        </div>
    )
}

export default Sidbar;
