import React from 'react';
import axios from 'axios';

import { Profile, SearchProfile } from './components';

import './index.scss';

const API = 'https://api.github.com/users';

class App extends React.Component {
  state = {
    username: 'adrianhajdin',
    name: '',
    avatar: '',
    location: '',
    repos: '',
    followers: '',
    following: '',
    homeUrl: '',
    notFound: '',
  }
    
  fetchProfile = async (username) => { 
    const url = `${API}/${username}`;

    try {
      const { data: { login, name, avatar_url, location, public_repos, followers, following, html_url, message } } = await axios.get(url);
      
      this.setState({ username: login, name, avatar: avatar_url, location, repos: public_repos, followers, following, homeUrl: html_url, notFound: message });
    } catch (error) {
      console.log('Oops, an error has occured!');
    }
  }

  componentDidMount() {
    const { username } = this.state;

    this.fetchProfile(username);
  }

  render() {
    return (
      <div>
         <section id="card">
           <SearchProfile fetchProfile={this.fetchProfile}/>
           <Profile profile={this.state} />
         </section>
      </div>
    )
  }
}

export default App;