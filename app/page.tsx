/**
 * 本人技术栈为原生react，nextjs和tailwindcss都没有项目经历，故使用原生css，望见谅
 * 下面代码有部分冗余耦合可做二次拆分重构，但由于时间关系不做进一步细致处理，望见谅
 * figma无法使用开发者模式故部分数据无法测量，精确度无法达到100%，望见谅
 */
'use client'

import './page.css';
import { useRef, useState } from 'react';

export default function Home() {
    const allArr = useRef<number[]>([1, 2, 3, 4])
    const [initArr, setInitArr] = useState<number[]>([1, 2, 3]);
    const innerBoxRef = useRef<HTMLDivElement | null>(null)

    const isLeftBtnDisabled = initArr[0] === allArr.current[0]
    const isRightBtnDisabled = initArr[initArr.length - 1] === allArr.current[allArr.current.length - 1]

    const move = (forward: number) => {
        const currentTransform = getComputedStyle(innerBoxRef!.current!, null).transform.split(',')[4];
        const distanceX = Number(currentTransform) || 0
        innerBoxRef!.current!.style.transform = `translateX(${-500 * forward + distanceX}px)`;
        const updatedArr = initArr.map(item => item + forward);
        setInitArr(updatedArr);
    }

    return (
        <>
            <div className="outerBox">
                <div className="innerBox" ref={innerBoxRef}>
                    <div className="box">
                        <svg width="416" height="279" viewBox="0 0 416 279" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'>
                            <path d="M32 0.000757482L384 6.31236e-05C401.673 2.82614e-05 416 14.3269 416 32.0001L416 163.027C416 168.42 414.637 173.726 412.037 178.451L410.141 181.897C404.656 191.869 404.879 204.003 410.727 213.767L411.451 214.975C414.428 219.944 416 225.628 416 231.42L416 246.366C416 264.039 401.673 278.366 384 278.366L32.0001 278.366C14.327 278.366 0.000171546 264.039 0.000141802 246.366L0.000111939 231.42C8.16747e-05 225.628 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.869 5.85879 181.897L3.96288 178.451C1.36321 173.726 8.41792e-05 168.42 8.44154e-05 163.027L9.01517e-05 32.0008C9.09255e-05 14.3277 14.3269 0.000792344 32 0.000757482Z" fill="#131313" />
                        </svg>
                        <svg width="416" height="279" viewBox="0 0 416 279" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-inside'>
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0.01%" stopColor="#38C1A5" />
                                    <stop offset="99.99%" stopColor="#0891D5" />
                                </linearGradient>
                            </defs>
                            <path d="M32 0.000757482L384 6.31236e-05C401.673 2.82614e-05 416 14.3269 416 32.0001L416 163.027C416 168.42 414.637 173.726 412.037 178.451L410.141 181.897C404.656 191.869 404.879 204.003 410.727 213.767L411.451 214.975C414.428 219.944 416 225.628 416 231.42L416 246.366C416 264.039 401.673 278.366 384 278.366L32.0001 278.366C14.327 278.366 0.000171546 264.039 0.000141802 246.366L0.000111939 231.42C8.16747e-05 225.628 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.869 5.85879 181.897L3.96288 178.451C1.36321 173.726 8.41792e-05 168.42 8.44154e-05 163.027L9.01517e-05 32.0008C9.09255e-05 14.3277 14.3269 0.000792344 32 0.000757482Z" fill="url(#gradient1)" />
                        </svg>
                        <div className="content">
                            <div className="content-top">
                                <div className='color-bar'></div>
                                <h3>Introduction to programming</h3>
                                <div className='tag'>Beginner</div>
                                <p>This course covers the most basic concepts in programming using Solidity as an example.</p>
                            </div>
                            <div className="content-bottom">
                                <div className='hour'>35 Hour</div>
                                <div className='course'>5 Course</div>
                                <div className='rate'>45% COMPLETED</div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'>
                            <path d="M31.9998 1.52588e-05L384.001 1.38701e-05C401.674 1.4637e-05 416.001 14.3269 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9997 278C14.3266 278 -0.000286267 263.673 -0.000254972 246L-6.76117e-05 149.369C-3.68142e-05 143.011 2.07818 136.828 5.91796 131.761C13.5451 121.696 13.8251 107.865 6.61148 97.5L5.64279 96.1081C1.96917 90.8295 -3.42403e-05 84.5527 -6.44748e-05 78.1216L-0.000215032 32.0001C-0.000275289 14.327 14.3267 1.52588e-05 31.9998 1.52588e-05Z" fill="#131313" />
                        </svg>
                        <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-inside'>
                            <defs>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0.01%" stopColor="#719BFF" />
                                    <stop offset="99.99%" stopColor="#DA8AFF" />
                                </linearGradient>
                            </defs>
                            <path d="M31.9998 1.52588e-05L384.001 1.38701e-05C401.674 1.4637e-05 416.001 14.3269 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9997 278C14.3266 278 -0.000286267 263.673 -0.000254972 246L-6.76117e-05 149.369C-3.68142e-05 143.011 2.07818 136.828 5.91796 131.761C13.5451 121.696 13.8251 107.865 6.61148 97.5L5.64279 96.1081C1.96917 90.8295 -3.42403e-05 84.5527 -6.44748e-05 78.1216L-0.000215032 32.0001C-0.000275289 14.327 14.3267 1.52588e-05 31.9998 1.52588e-05Z" fill="url(#gradient2)" />
                        </svg>
                        <div className="content">
                            <div className="content-top-another">
                                <h3>Moonshot 2023 Summer Hackathon</h3>
                                <div className='tags'>
                                    <div className='tag tag1'>All Tracks</div>
                                    <div className='tag tag2'>Solidity</div>
                                    <div className='tag tag3'>2k</div>
                                </div>
                            </div>
                            <div className="content-bottom-another">
                                <div className='form'>
                                    <div className='key'>Signup</div>
                                    <div className='value'>4/15 - 6/15</div>
                                </div>
                                <div className='form'>
                                    <div className='key'>Event</div>
                                    <div className='value'>6/15 - 7/15</div>
                                </div>
                                <div className='form'>
                                    <div className='key'>Grant size</div>
                                    <div className='value'>200K</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'>
                            <path d="M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="#131313" />
                        </svg>
                        <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-inside'>
                            <defs>
                                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0.01%" stopColor="#D9E313" />
                                    <stop offset="99.99%" stopColor="#3CBC34" />
                                </linearGradient>
                            </defs>
                            <path d="M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="url(#gradient3)" />
                        </svg>
                        <div className="content">
                            <div className="content-top">
                                <div className='color-bar color-bar-two'></div>
                                <h3>Web 3.0 Programming Basics</h3>
                                <div className='tag'>Beginner</div>
                                <p>Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</p>
                            </div>
                            <div className="content-bottom">
                                <div className='hour'>35 Hour</div>
                                <div className='course'>5 Course</div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'>
                            <rect width="416" height="278" rx="36" fill="#111111" />
                        </svg>
                        <svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-inside'>
                            <defs>
                                <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0.01%" stopColor="#E0AD38" />
                                    <stop offset="99.99%" stopColor="#EB3E1C" />
                                </linearGradient>
                            </defs>
                            <rect width="416" height="278" rx="36" fill="url(#gradient4)" />
                        </svg>
                        <div className="content pic"></div>
                    </div>
                </div>
                <button onClick={() => { move(-1) }} disabled={isLeftBtnDisabled} className='leftBtn btn'>&lt;</button>
                <button onClick={() => { move(1) }} disabled={isRightBtnDisabled} className='rightBtn btn'>&gt;</button>
            </div>
        </>
    );
};




