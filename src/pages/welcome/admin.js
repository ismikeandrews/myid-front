import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Admin(){
    return(
        <div>
            <div className='menu'>
                <div className='menu__list'>
                    <Link className='menu__item'
                    to='banner'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Início
                    </Link>
                    <Link className='menu__item'
                    to='topics'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Sobre
                    </Link>
                    {/* <div className='menu__item'>
                        Praticidade
                    </div>
                    <div className='menu__item'>
                        Segurança
                    </div>
                    <div className='menu__item'>
                        Autentificação
                    </div> */}
                    <Link className='menu__item'
                    to='news'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Novidades
                    </Link>
                    {/* <div className='menu__item'>
                        Download
                    </div> */}
                </div>

                <div className='menu__admin menu__item'>Admin</div>
            </div>
        </div>
    )
}