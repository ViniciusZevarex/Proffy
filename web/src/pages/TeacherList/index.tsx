import React from 'react';
import './style.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input id="subject" type="text"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input id="week_day" type="text"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input id="time" type="text"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </main>
        </div>
    );
}

export default TeacherList;