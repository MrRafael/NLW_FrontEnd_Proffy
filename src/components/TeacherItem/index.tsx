import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';

interface TeacheItem {
    teacher: {
        id: number,
        avatar: string,
        bio: string,
        cost: number,
        name: string,
        subject: string,
        whatsapp: string,
    };
}

const TeacherItem: React.FC<TeacheItem> = ({ teacher }) => {
    function handleAddConnection() {
        api.post('connection', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://api.adorable.io/avatars/252/1.png"
                    alt="Foto Perfil" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                    onClick={handleAddConnection}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;