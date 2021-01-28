import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-web'
import animationData from './data.json'
import lottieApi from 'lottie-api'
const BMP = () => {
    const lottieRef = useRef()
    useEffect(() => {
        const newJSON = JSON.stringify(animationData).replace('文本123', '文本一');
        window.lottie = Lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: JSON.parse(newJSON),
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
        });
        window.lottie.setSubframe(false);
        // window.lottie = Lottie.registerAnimation(lottieRef.current, animationData)
        window.lottie.addEventListener('complete', complete);
        window.lottie.addEventListener('data_ready', dataReady);
        window.lottie.addEventListener('config_ready', configReady);
        window.lottie.addEventListener('DOMLoaded', DOMLoaded);
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
    // 播放片段
    const replaceText = () => {
        // 方式一
        // window.lottie.renderer.elements[0].elements[0].updateDocumentData({t:'替换了'},0);
        // 方式二
        const api = lottieApi.createAnimationApi(window.lottie);
        const elements = api.getKeyPath("comp1,textnode");  // 查找对象
        elements.getElements()[0].setText("替换文本");
    }
    return (
        <>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <button style={buttonStyle} onClick={replaceText}>替换文本</button>
            </div>
            <div className="controlled" ref={lottieRef} style={{ width: '100%', height: 800 }}>
            </div>


        </>
    )
}

export default BMP