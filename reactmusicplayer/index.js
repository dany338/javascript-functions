class PlayerBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  clickPlayButton() {
    // TODO: implement
    this.setState((prevState) => ({playing: !prevState.playing}));
  }

  renderPlayButton() {
    let buttonUrl = '';
    if (this.state.playing) {
      buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557137524244/rounded-pause-button.svg';
    } else {
      buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557136695174/play-right-arrow-circular-button.svg';
    }
    return (
      <input
        id="playPause"
        className="play-button"
        type="image"
        src={buttonUrl}
        onClick={this.clickPlayButton}
      />
    );
  }

  renderNextButton() {
    let buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557137539567/next-button.svg';
    return (
      <input
        id="next"
        className="play-button" 
        type="image" 
        src={buttonUrl} 
        // TODO: implement onClick event
        onClick={this.props.clickNextButton}
      />
    );
  }

  renderPrevButton() {
    let buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557138446191/previous-button.svg';
    return (
      <input
        id="prev"
        className="play-button" 
        type="image"  
        src={buttonUrl} 
        // TODO: implement onClick event
        onClick={this.props.clickPrevButton}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderPlayButton()}
        {this.renderPrevButton()}
        {this.renderNextButton()}
        
        <div className="song-descr">
          <span className="song-artist song-span">Artist of the selected song</span>
          <span className="song-name song-span">Selected song name</span>
        </div>
      </div>
    );
  }
}

class Marc extends React.Component {
  render() {
    return (<span>yea</span>); 
  }
}

  // function Marc() {
  //   return (<span>yea</span>); 
  // }

class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO: implement missing parts of the constructor

    const playlist = [
        {
          id: 1,
          name: 'Yesterday',
          artist: 'Beatles'
        },
        {
          id: 2,
          name: 'Nothing else matters',
          artist: 'Metallica'
        },
        {
          id: 3,
          name: 'Always',
          artist: 'Bon Jovi'
        },
        {
          id: 4,
          name: 'Waka Waka',
          artist: 'Shakira'
        } 
    ];

    this.state = {
      playlist: playlist,
      curItemIndex: 0
    };
  }

  getSongClass(index) {
    let className = 'list-group-song song row';
    if (index === this.state.curItemIndex) {
      className += ' selected';
    }
    return className;
  }

  renderItems() {
    // TODO: implement
    return this.state.playlist.map((play, index) => (
          <li key={play.id} className={this.getSongClass(index)}>
            <span className="song-artist song-span">{play.artist}</span>
            <span className="song-name song-span">{play.name}</span>
          </li>))
  } 

  clickNextButton() {
    // TODO: implement
    this.setState((prevState) => ({curItemIndex: ((prevState.curItemIndex + 1) > prevState.playlist.length - 1) ? 0 : prevState.curItemIndex + 1 }))
  }

  clickPrevButton() {
    // TODO: implement
    this.setState((prevState) => ({curItemIndex: (prevState.curItemIndex - 1) < 0 ? prevState.playlist.length - 1 : (prevState.curItemIndex - 1) }))
  }

  render() {
    return (
      <div>
        <ul className="song-list container">
          {this.renderItems()}
        </ul>
        <hr />
        <Marc />
        <div className="player-bar"> 
          <PlayerBar
            // TODO: provide corresponding parameters
            clickPrevButton={this.clickPrevButton.bind(this)}
            clickNextButton={this.clickNextButton.bind(this)}
          />
        </div>
      </div>
    );
  }
}



React.render(
  <App />,
  document.getElementById('app')
);