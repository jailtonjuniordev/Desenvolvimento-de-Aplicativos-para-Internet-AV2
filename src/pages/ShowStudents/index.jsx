import React, {useState, useEffect} from 'react';
import {Card} from '../../components/Card';
import {Data as data} from './dataMock.js';

export const ShowStudents = () => {

    // localStorage.setItem('dataLocal', JSON.stringify(data)); // Utilizado para dar um ponta pé inicial no Mock dos dados se não quiser inserir!

    const [dataLocal, setDataLocal] = useState([]);

    useEffect(() => {
        const storedDataLocal = JSON.parse(localStorage.getItem('dataLocal')) || [];
        setDataLocal(storedDataLocal);
    }, []);

    const onDataChange = () => {
        const storedDataLocal = JSON.parse(localStorage.getItem('dataLocal')) || [];
        setDataLocal(storedDataLocal);
    };

    return (
        <div className={'p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'}>
            {dataLocal.map((dataItem) => (
                <div key={dataItem.matricula}>
                    <Card
                        matricula={dataItem.matricula}
                        nomeCompleto={dataItem.nomeCompleto}
                        cep={dataItem.cep}
                        serie={dataItem.serie}
                        etapaEnsino={dataItem.etapaEnsino}
                        onDataChange={onDataChange}
                    />
                </div>
            ))}
        </div>
    );
};
