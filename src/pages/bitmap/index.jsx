import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-web'
import animationData from './data.json'
import lottieApi from 'lottie-api'
import img0 from '../../assets/images/img_0.png'
import img1 from '../../assets/images/img_1.png'
import img2 from '../../assets/images/img_2.png'
import img3 from '../../assets/images/img_3.png'
const BMP = () => {
    const lottieRef = useRef();
    const canvasRef = useRef();
    useEffect(() => {
        animationData.assets = [
            {
                "id": "image_0",
                "w": 236,
                "h": 392,
                "p": img0
            },
            {
                "id": "image_1",
                "w": 307,
                "h": 467,
                "p": img1
            },
            {
                "id": "image_2",
                "w": 541,
                "h": 542,
                "p": img2
            }
        ]
        window.lottie = Lottie.loadAnimation({
            container: lottieRef.current,
            // renderer: 'cavans',
            renderer: 'svg',
            loop: false,
            autoplay: true,
            // path: 'https://gw.alipayobjects.com/os/sage/10726a69-0e6a-484f-a784-d57a812af9a6/lottie.json',
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
            // rendererSettings: {
            //     // 指定canvasContext
            //     context: canvasRef.current,
            //     // 是否先清除canvas画布，canvas模式独占，默认false。
            //     clearCanvas: true,
            //     // 是否开启渐进式加载，只有在需要的时候才加载dom元素，在有大量动画的时候会提升初始化性能，但动画显示可能有一些延迟，svg模式独占，默认为false。
            //     progressiveLoad: true,
            //     // 当元素opacity为0时隐藏元素，svg模式独占，默认为true。
            //     hideOnTransparent: true,
            //     // 容器追加class，默认为''
            //     className: 'cas'
            // }
        });
    }, [])
    const buttonStyle = {
        display: 'inline-block',
        margin: '10px auto',
        marginRight: '10px',
        border: 'none',
        color: 'white',
        backgroundColor: '#647DFF',
        borderRadius: '2px',
        fontSize: '15px',
        cursor: 'pointer'

    };
    // playSegments
    const playSegments = (segments, flag) => {
        // document.querySelectorAll('img')[1].src = img3;
        window.lottie.renderer.elements[1].innerElem.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'href',
            img3
        )
        window.lottie.playSegments(segments, flag);
       
    }
    const playEndSegments = () => {
        // html、cavans模式下
        // window.lottie.renderer.elements[1].baseElement.querySelector('img').src = img3;
        // svg模式
        window.lottie.renderer.elements[1].innerElem.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'href',
            img3
        )
        // 替换后马上播放片段
        playSegments([0, 60], true);
    }
    return (
        <>
            <div style={{textAlign: 'center', position: 'relative', zIndex: 10}}>
                <button onClick={playEndSegments} style={buttonStyle}>替换图片从头播放</button>
                <button onClick={() => playSegments([13, 60], true)} style={buttonStyle}>替换图片播放片段</button>
            </div>
            <div className="controlled" ref={lottieRef} style={{width: '100%', height: 800}}>
                <canvas ref={canvasRef}></canvas>
            </div>
        </>
    )
}

export default BMP