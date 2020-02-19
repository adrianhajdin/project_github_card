import React from 'react';

const Profile = ({ profile }) => {
  const followers = `${profile.homeUrl}/followers`;
  const repositories = `${profile.homeUrl}?tab=repositories`;
  const following = `${profile.homeUrl}/following`;

  if (profile.notFound === 'Not Found') {
    return (
      <div className="notfound">
        <h2>Oops!!!</h2>
        <p>The Component Couldn't Find The You Were Looking For. Try Again </p>
      </div>
    );
  } else {
    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a href={profile.homeUrl} target="_blank" rel="noopener noreferrer" title={profile.name || profile.username}><img src={profile.avatar} alt={profile.username}/></a>
          <h2><a href={profile.homeUrl} title={profile.username} target="_blank" rel="noopener noreferrer">{profile.name || profile.username}</a></h2>
          <h3>{profile.location || 'I Live In My Mind'}</h3>
        </div>
        <div className="github--profile__state">
          <ul>
             <li>
                <a href={followers} target="_blank" rel="noopener noreferrer" title="Number Of Followers"><i>{profile.followers}</i><span>Followers</span></a>
             </li>
             <li>
                <a href={repositories} target="_blank" rel="noopener noreferrer" title="Number Of Repositoriy"><i>{profile.repos}</i><span>Repositoriy</span></a>
             </li>
             <li>
                <a href={following} target="_blank" rel="noopener noreferrer" title="Number Of Following"><i>{profile.following}</i><span>Following</span></a>
             </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Profile;