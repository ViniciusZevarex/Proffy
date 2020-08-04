import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/41579743?s=400&u=a8f275cf15b06b58d3426d43648fafd5068fe3a6&v=4" alt="Vinicius Zevarex" />
            <div>
                <strong>Vinicius Zevarex</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>

            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contato
            </button>
        </footer>

    </article>
    );
}

export default TeacherItem;