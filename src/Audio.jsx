import React, { useRef, useState } from 'react'
import './styles/Audio.css'

const Audio = () => {

    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause()
        }
        else{
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const skipTime = (seconds) => {
        audioRef.current.currentTime += seconds
    }

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    const handleProgressClick = (event) => {
        const { width, left } = event.target.getBoundingClientRect();
        const clickPosition = event.clientX - left;
        const clickPercentage = clickPosition / width;
        audioRef.current.currentTime = clickPercentage * audioRef.current.duration;
    }

    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    };

    const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.volume = isMuted ? volume : 0;
    };

    return (
        <div className='root'>
            <audio 
            controls
            src="./sounds/TheBattleofLife.mp3"
            ref={audioRef}
            onTimeUpdate={updateTime}
            onEnded={() => setIsPlaying(false)}
            />

            <button className='skipBack' onClick={() => skipTime(-10)}> ⏪ 10s </button>
            <button className='play' onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button className='skip' onClick={() => skipTime(10)}> ⏩ 10s </button>
            <div className='timer'>{currentTime.toFixed(1)}s</div>

            <div
                style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#e0e0e0",
                position: "relative",
                cursor: "pointer"
                }}
                onClick={handleProgressClick}
            >
            <div
                style={{
                 width: `${(currentTime / audioRef.current?.duration) * 100}%`,
                height: "100%",
                backgroundColor: "aquamarine"
                }}
            />
            </div>
            <input
                className='muteRange'
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                style={{ transition: "width 0.3s ease"}}
            />
            <button className='mute' onClick={toggleMute}>
            {isMuted ? "Unmute" : "Mute"}
            </button>
        </div>
    )
}

export default Audio
