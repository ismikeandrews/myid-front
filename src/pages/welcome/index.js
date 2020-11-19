import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import telaDoc from '../../assets/images/telaDoc.png'
import iconDoc from '../../assets/images/documentos.svg'
import iconSeguranca from '../../assets/images/seguranca.svg'
import iconAutenticidade from '../../assets/images/autenticidade.svg'
import iconAutenticar from '../../assets/images/autenticar.svg'
import celular from '../../assets/images/celular.png'
import telaInicio from '../../assets/images/telaInicio.png'
import appStore from '../../assets/images/appStore.png'
import playStore from '../../assets/images/playStore.png'

export default function Welcome(){
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
            
            <div className='banner'>
                <div className='banner__desc'>
                    <h1 className='banner__title'>Lorem Ipsum dolor sit amet</h1>
                    <p className='banner__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nunc quis mi condimentum congue.
                    </p>

                    <div className='banner__buttons'>
                        <div className='banner__button'>
                            Lorem
                        </div>
                        <div className='banner__button'>
                            Ipsum
                        </div>
                    </div>
                </div>

                <div className='banner__image'>
                    <img src={ telaDoc } alt="Tela de documentos no aplicativo" title="Tela de documentos no aplicativo" className="banner__img" />
                </div>
            </div>
            
            <div className='wrapper topics'>
                <h1 className='topics__title'>Conheça o MyId</h1>
                <p className='topics__text'>Tecnologia para identificação e documentação</p>
                
                <div className='topics__list'>
                    <div className='topics__item'>
                        <div className='topics__item-image'>
                            <img src={ iconDoc } alt="Praticidade" title="Praticidade" className="topics__item-icon" />
                        </div>

                        <div className='topics__item-title'>Praticidade</div>
                        
                        <div className='topics__item-text'>
                            Visualize todos os seus
                            documentos em um único 
                            lugar
                        </div>
                    </div>
                    <div className='topics__item'>
                        <div className='topics__item-image'>
                            <img src={ iconSeguranca } alt="Segurança" title="Segurança" className="topics__item-icon" />
                        </div>

                        <div className='topics__item-title'>Segurança</div>
                        
                        <div className='topics__item-text'>
                            Acesso apenas pela digital. 
                            Segurança, facilidade e confiabilidade
                        </div>
                    </div>
                    <div className='topics__item'>
                        <div className='topics__item-image'>
                            <img src={ iconAutenticidade } alt="Autenticidade" title="Autenticidade" className="topics__item-icon" />
                        </div>

                        <div className='topics__item-title'>Autenticidade</div>
                        
                        <div className='topics__item-text'>
                            Autentique seu documento
                            nos estabelecimentos sem
                            precisar pegar a carteira
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='wrapper practical'>
                <div className='practical__item'>
                    <img src={ celular } alt="Praticidade" title="Praticidade" className="practical__img" />
                </div>
                <div className='practical__item'>
                    <h1 className='practical__title'>Praticidade</h1>
                    <p className='practical__text'>
                        Já imaginou ter todos os seus documentos em um único lugar? 
                        Seria uma mão na roda, não é mesmo?
                    </p>
                    <p className='practical__text'>
                        Pois com nosso aplicativo, você tem essa possibilidade.<br/>
                        <span className='practical__text--bold'> Chega de papelada e burocracia.</span> Em um único lugar
                        tenha acesso à informações como: RG, CPF, Passaporte, certidões, tudo de forma rápida e fácil.
                    </p>
                </div>
            </div>
            
            <div className='wrapper security'>
                <h1 className='security__title'>Segurança</h1>
                <p className='security__text'>
                    Através do reconhecimento da digital seus dados estarão
                    <span className='security__text--bold'> protegidos e seguros </span>, evitando também
                    problemas de falsidade ideológica.
                </p>
            </div>
            
            <div className='wrapper autentic'>
                <div className='autentic__item'>
                    <h1 className='autentic__title'>Autentificação</h1>
                    <p className='autentic__text'>
                        Com o serviço de autenticação, você poderá transmitir
                         seu documento contactless para estabelecimentos, enviando
                          somente informações necessárias no momento e não
                           todos os seus dados.
                    </p>
                </div>
                <div className='autentic__item autentic__item--icon'>
                    <img src={ iconAutenticar } alt="Auntentificação" title="Auntentificação" className="autentic__icon" />
                </div>
            </div>
            
            <div className='wrapper news'>
                <h1 className='news__title'>Fique por dentro das novidades</h1>
                <div className='news__list'>
                    <div className='news__item'>
                        <input type='email' placeholder='Digite seu e-mail' className='news__input' />
                    </div>
                    <div className='news__item'>
                        <div className='news__button'>
                            Enviar
                        </div>                        
                    </div>
                </div>
            </div>
            
            <div className='wrapper download'>
                <h1 className='download__title'>Disponível para download</h1>
                
                <div className='download__list'>
                    <div className='download__image'>
                        <img src={ telaInicio } alt="Tela inicial do MyId" title="Tela inicial do MyId" className="download__image-img" />
                    </div>
                    <div className='download__desc'>
                        <h1 className='download__desc-title'>Lorem Ipsum dolor sit amet</h1>
                        <p className='download__desc-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nunc quis mi condimentum congue.
                        </p>

                        <div className='download__list'>
                            <div className='download__list-item'>
                                <img src={ appStore } alt="Disponível na App Store" title="Disponível na App Store" className="download__icon" />
                            </div>
                            <div className='download__list-item'>
                                <img src={ playStore } alt="Disponível na Play Store" title="Disponível na Play Store" className="download__icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}