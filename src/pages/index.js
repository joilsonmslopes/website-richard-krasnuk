import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet'

import facebookIcon from '../assets/facebookIcon.png';
import instagramIcon from '../assets/instagramIcon.png';
import imgMain from '../assets/imgMain.png';
import btnWhatsapp from '../assets/btn-Whatsapp.png'

import Logo from '../components/Logo';
import MenuPrincipal from '../components/MenuPrinicipal';

const Header = ({ children }) => {
  return (
    <div className='p-2 bg-black flex justify-between items-center'>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className='px-2 py-6 bg-black flex justify-between items-center'>
      <div>
        <p className='text-sm text-white'>Produtor: Richard Krasnuk</p>
        <p className='text-sm text-white'>E-mail: richardkransuk@gmail.com</p>
      </div>
      <div className='flex flex-row justify-around'>
        <a href="https://www.facebook.com/rkrasnuk" target='_blank'>
          <img src={facebookIcon} alt="Ícone do facebook" className='mr-2 sm:mr-6' />
        </a>
        <a href="https://www.instagram.com/richardkrasnuk" target='_blank'>
          <img src={instagramIcon} alt="Ícone do instagram" className='mr-2 sm:mr-6' />
        </a>
      </div>
    </div>
  );
};


const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Richard Krasnuk</title>
      </Helmet>
      <Header>
        <Logo />
        <MenuPrincipal />
      </Header>
      <div className='sm:p-8 sm:py-20 bg-black bg-opacity-75 flex flex-col sm:flex-row justify-around'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl text-yellow-500 font-bold'>Richard Krasnuk</h1>
          <p className='text-lg text-gray-400 mb-6'>Músico e Produtor</p>
          <p className='text-base text-white'>
            Temos as melhores <strong className='text-yellow-500'>OFERTAS</strong><br />
            para <strong className='text-yellow-500'>PRODUZIR</strong> o seu <strong className='text-yellow-500'>SONHO</strong>!
          </p>
          <p className='mt-6 text-base text-gray-400'>Faça o seu orçamento pelo whatsapp!</p>
          <div className='p-2 rounded bg-gray-300 flex items-center mt-6 mb-6 sm:mt-6'>
            <a href="https://wa.me/5511985983282?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento.">
              <img src={btnWhatsapp} alt="Botão do whatsapp" className='mr-2' />
            </a>
            <p className='text-2xl font-bold'>(11) 985983283</p>
          </div>
        </div>
        <div className='mb-6'>
          <img src={imgMain} alt="Imagem de Richard Krasnuk gravando teclado"  className='rounded shadow' />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Index;