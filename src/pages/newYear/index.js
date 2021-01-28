import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-web'
import animationData from './data.json'
let count = 0;
const BMP = () => {
    const lottieRef = useRef()
    useEffect(() => {
        window.lottie = Lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
        });
        window.lottie.setSubframe(false);
        // window.lottie = Lottie.registerAnimation(lottieRef.current, animationData)
        window.lottie.addEventListener('complete', complete);
        window.lottie.addEventListener('loaded_images', loadedImage);
        window.lottie.addEventListener('data_ready', dataReady);
        window.lottie.addEventListener('config_ready', configReady);
        window.lottie.addEventListener('DOMLoaded', DOMLoaded);
        window.lottie.addEventListener('enterFrame', enterFrame);
        window.lottie.addEventListener('segmentStart', segmentStart);
    }, [])
    const buttonStyle = {
        display: 'inline-block',
        margin: '10px auto',
        marginRight: '10px',
        border: 'none',
        color: 'white',
        backgroundColor: '#647DFF',
        borderRadius: '2px',
        fontSize: '15px'

    };
    // 某个片段开始播放时触发
    const segmentStart = () => {
        console.log('segmentStart');
    }
    // 播放每一帧时触发
    const enterFrame = (o) => {
        console.log(o, 'enterFrame');
    }
    // 从某一帧开始播放
    const goToAndPlay = () => {
        window.lottie.goToAndPlay(40, true);
    }
    // 从某一帧暂停
    const goToAndStop = () => {
        window.lottie.goToAndStop(40, true);
    }
    // 将元素添加到DOM时
    const DOMLoaded = () => {
        console.log('DOMLoaded');
    }
    // 完成初始配置后
    const configReady = () => {
        console.log('config_ready');
    }
    // 已加载动画的所有部分时
    const dataReady = () => {
        console.log('dataReady');
    }
    // 动画播放完成时
    const complete = () => {
        console.log('complete');
    }
    // loadedImage
    const loadedImage = (data) => {
        console.log(data, 'loadedImage');
    }
    // 暂停
    const pause = () => {
        window.lottie.pause();
    }
    // 播放
    const play = () => {
        window.lottie.play();
    }
    // 停止
    const stop = () => {
        window.lottie.stop();
    }
    // 播放片段
    const playSegments = () => {
        window.lottie.playSegments([20, 45], true);

    }
    return (
        <>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <button style={buttonStyle} onClick={goToAndPlay}>跳到某一帧播放</button>
                <button style={buttonStyle} onClick={goToAndStop}>跳到某一帧暂停</button>
                <button onClick={playSegments} style={buttonStyle}>播放片段</button>
                <button onClick={play} style={buttonStyle}>播放</button>
                <button onClick={pause} style={buttonStyle}>暂停</button>
                <button onClick={stop} style={buttonStyle}>停止</button>
            </div>
            <div className="controlled" ref={lottieRef} style={{ width: '100%', height: 800 }}>
            </div>


        </>
    )
}

export default BMP