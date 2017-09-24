import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { fetchMockUser } from '../actions';
import img from '../../assets/$@2x.png'


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
       <img src={img} height={50} width={50} style={{paddingBottom: 10}}/>
       <YouTube
         videoId={'j1gD-AlTevY'}
         opts={opts}
       />
      </div>
    );
  }
}
