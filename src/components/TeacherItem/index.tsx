import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://api.adorable.io/avatars/252/1.png"
                    alt="Foto Perfil" />
                <div>
                    <strong>Rafael</strong>
                    <span>Matematica</span>
                </div>
            </header>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;