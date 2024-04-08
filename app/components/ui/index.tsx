'use client'
import { useEffect, useState } from 'react';
import s from './ui.module.scss'
import useStore from '../../lib/store'

interface TitleProps {
    text1: string;
    text2: string;
    text3: string;
}

export default function UI ({text1, text2, text3}: TitleProps) {

    return <>
        <div className={s.ui_container}>
            <div className={s.grid}>
                <div className={s.top}>
                    <div className={`${s.left} ${s.rotate90}`}>
                        <div className={`fw-bold align-left ${s.left_text}`}>
                                <div className={s.variable_width}>
                                    <div className={s.text}>{text1}</div >
                                    <div className={s.line}></div>
                                </div>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={`fw-bold align-right ${s.right_text}`}>
                                <div className={`${s.variable_width} ${s.right}`}>
                                    <div className={s.text}>{text1}</div >
                                    <div className={s.line}></div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={s.center}>
                    {/* <h1>MUG</h1> */}
                </div>
                <div className={s.bottom}>
                    <div className={s.left}>
                        <div className={`fw-bold align-left ${s.left_text}`}>
                                <div className={s.variable_width}>
                                    <div className={s.text}>{text1}</div >
                                    <div className={s.line}></div>
                                </div>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.circle}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enableBackground="new 0 0 200 200" xmlSpace="preserve">
                            <defs>
                                <path id="circlePath" d=" M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none"/>
                            <g>
                                <use xlinkHref="#circlePath" fill="none"/>
                                <text fill="#fff">
                                    {/* <textPath xlinkHref="#circlePath">Esta es la web del MUG La web del MUG  + + + + </textPath> */}
                                    <textPath xlinkHref="#circlePath">La unión es Movimiento y el Movimiento es groove +</textPath>
                                </text>
                            </g>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}