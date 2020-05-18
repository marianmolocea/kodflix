import React from 'react';
import './Play.css';

export default function Play({ trailer, title }) {
  return (
    <div className="Play">
      <iframe
        id="ytplayer"
        type="text/html"
        src={`${trailer}?autoplay=1&cc_load_policy=1&iv_load_policy=1&SameSite=None&Secure`}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
}
