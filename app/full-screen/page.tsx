'use client'

import React, { useState, useRef, useEffect } from 'react';
import './full-screen.css'; // 用于定义样式

function FullscreenComponent() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const fullscreenRef = useRef(null);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(
                document.fullscreenElement === fullscreenRef.current ||
                document.webkitFullscreenElement === fullscreenRef.current ||
                document.mozFullScreenElement === fullscreenRef.current ||
                document.msFullscreenElement === fullscreenRef.current
            );
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);

    const handleToggleFullscreen = () => {
        if (!isFullscreen) {
            // 启动全屏模式
            if (fullscreenRef.current) {
                if (fullscreenRef.current.requestFullscreen) {
                    fullscreenRef.current.requestFullscreen();
                } else if (fullscreenRef.current.mozRequestFullScreen) { // Firefox
                    fullscreenRef.current.mozRequestFullScreen();
                } else if (fullscreenRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    fullscreenRef.current.webkitRequestFullscreen();
                } else if (fullscreenRef.current.msRequestFullscreen) { // IE/Edge
                    fullscreenRef.current.msRequestFullscreen();
                }
            }
        } else {
            // 退出全屏模式
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    };

    return (
        <div>
            <button onClick={handleToggleFullscreen}>
                {isFullscreen ? '退出全屏' : '全屏'}
            </button>
            <div
                ref={fullscreenRef}
                className={`fullscreen-content ${isFullscreen ? 'fullscreen' : ''}`}
            >
                <h1>全屏内容</h1>
                <p>这里是全屏模式下的内容。</p>
            </div>
        </div>
    );
}

export default FullscreenComponent;
