import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from './YouTubePlayer.module.css';

function YouTubePlayer({ url, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.playerOverlay} onClick={onClose}>
      <div className={styles.playerWrapper} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <ReactPlayer
          url={url}
          className={styles.reactPlayer}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default YouTubePlayer;
