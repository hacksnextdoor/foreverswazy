import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { fetchMockUser } from '../actions';
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'


/*
  connect(a,b)
  - a is for getting store values as prop (store >> props for this component)
  - b
*/
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    rides: {}
  }
})

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchMockUser())
  }

  render() {
    const { user, rides } = this.props
    const opts = {
      height: '600',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0
      },

    }
    return (
     <div style={{textAlign: 'center'}}>
       <div style={{fontFamily: 'Helvetica', fontSize:32, padding: '25px 0px', fontWeight:'bold'}}>
         foreverswazy.com
       </div>
       <YouTube
         videoId={'j1gD-AlTevY'}
         opts={opts}
       />
       <div style={{padding:'25px 0px'}}>
         <img style={{marginRight:40, height:35}} src={Twitter} href={''}></img>
         <a href={'https://www.instagram.com/shillaswazy/'}>
           <img style={{marginLeft:40, height:40}} src={Instagram} href={'https://www.instagram.com/shillaswazy/'}></img>
         </a>
       </div>
      </div>
    );
  }
}
