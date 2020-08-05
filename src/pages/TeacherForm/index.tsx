import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './style.css'
import { BrowserRouter } from 'react-router-dom';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");

    const [scheduleItens, setScheduleItens] = useState([{
        week_day: 0,
        from: "",
        to: ""
    }]);

    function handleAddNewItemSchedule() {
        setScheduleItens([...scheduleItens, {
            week_day: 0,
            from: "",
            to: ""
        }])
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        api.post('class', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItens
        }).then(r => {
            alert("Cadastro Feito com Sucesso!");
            history.push('/');
        })
    }

    function handleSetScheduleItemValue(position: number, name: string, value: string) {
        const newArray = scheduleItens.map((item, index) => {
            if (index === position) {
                return { ...item, [name]: value }
            }

            return item;
        });

        setScheduleItens(newArray);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas."
                description="O primeiro passo e preencher esse formulario de inscrição"
            />

            <main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            id="name"
                            label="Nome Completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            id="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />
                        <Input
                            id="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />
                        <TextArea
                            id="bio"
                            label="Biografia"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select
                            id="subject"
                            label="Materia"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            options={[
                                { value: "Artes", label: "Artes" },
                                { value: "Matematica", label: "Matematica" },
                                { value: "Portugues", label: "Portugues" },
                                { value: "Quimica", label: "Quimica" },
                            ]}
                        />
                        <Input
                            id="cost"
                            label="Custo por aula"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horarios Disponiveis
                        <button
                                type="button"
                                onClick={handleAddNewItemSchedule}
                            >
                                + Novo Horario
                        </button>
                        </legend>
                        {scheduleItens.map((item, index) => {

                            return (
                                <div key={index} className="schedule-item">
                                    <Select
                                        id="week_day"
                                        label="Dia da Semana"
                                        value={item.week_day}
                                        onChange={e => handleSetScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: "0", label: "Domingo" },
                                            { value: "1", label: "Segunda-Feira" },
                                            { value: "2", label: "Terça-Feira" },
                                            { value: "3", label: "Quarta-feira" },
                                            { value: "4", label: "Quinta-Feira" },
                                            { value: "5", label: "Sexta-Feira" },
                                            { value: "6", label: "Sabado" },
                                        ]}
                                    />

                                    <Input
                                        id="from"
                                        label="Das"
                                        type="time"
                                        value={item.from}
                                        onChange={e => handleSetScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        id="to"
                                        label="Até"
                                        type="time"
                                        value={item.to}
                                        onChange={e => handleSetScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os campos.
                        </p>
                        <button type="submit">Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;