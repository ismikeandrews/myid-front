import React from 'react';
import telaDoc from '../../assets/images/telaDoc.png'
import iconDoc from '../../assets/images/documentos.png'
import iconSeguranca from '../../assets/images/seguranca.png'
import iconAutenticidade from '../../assets/images/autenticidade.png'

export default function Welcome(){
    return(
        <div>
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
            
            <div className='topics'>
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
                            Autentifique seu documento
                            nos estabelecimentos sem
                            precisar pegar a carteira
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}