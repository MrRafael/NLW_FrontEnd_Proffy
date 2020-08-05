import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './style.css';
import api from '../../services/api';

function TeacherList() {
    const [subject, setSubject] = useState('');
    const [week_day, setweek_day] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        handleSubmit();
    }, [subject, week_day, time])

    function handleSubmit() {

        if (subject === '' || week_day === '' || time === '') {
            return;
        } else {
            api.get('class', {
                params: {
                    subject,
                    week_day,
                    time
                }
            }).then(r => {
                setTeachers(r.data)
            });
        }
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form
                    id="search-teachers"
                    onSubmit={handleSubmit}
                >
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
                    <Select
                        id="week_day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={e => setweek_day(e.target.value)}
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
                        id="time"
                        label="Hora"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </form>
            </PageHeader>

            <main>
                {teachers.map((item, index) => {
                    return (
                        <TeacherItem
                            key={index}
                            teacher={item}
                        />);
                })}
            </main>
        </div>
    );
}

export default TeacherList;