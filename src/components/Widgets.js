import React from 'react';
import './widgets.css';
import { TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
import TwittBox from './TwittBox';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon />
                <input type="text" placeholder="Widgets" />
            </div>

            <div className="widgets__widgetcContainer">
                <h2>What's Happendings</h2>
                <TwittBox tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="cleverqazi" options={{height:700}} />
                <TwitterShareButton url={"https://www.facebook.com/faysalahmed.munna.758/"} options={{text:"#reactjs is awesome", vial:"claverqazi"}} />
            </div>
        </div>
    )
}

export default Widgets;