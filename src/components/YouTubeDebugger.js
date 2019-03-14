// Code YouTubeDebugger Component Here

import React from 'react';


class YouTubeDebugger extends React.Component{

  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBit = (e) => {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    }, () => console.log(this.state.settings.bitrate))
  }

  handleRes = (e) => {
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}}
    }, () => console.log(this.state.settings.video.resolution))
  }

  render(){
    return(
      <div>
        <button onClick={this.handleBit} className='bitrate'>BitRate</button>
        <button onClick={this.handleRes} className='resolution'>resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
