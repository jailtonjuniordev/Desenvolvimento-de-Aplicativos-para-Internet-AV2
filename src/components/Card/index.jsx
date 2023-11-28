import * as CiIcon from 'react-icons/ci';
import * as IoIcon from 'react-icons/io';
import React, {useEffect, useState} from 'react';

export const Card = ({
                         matricula = "matricula",
                         nomeCompleto = "nomeCompleto",
                         etapaEnsino = "etapaEnsino",
                         serie = "serie",
                         cep = "cep",
                         onDataChange
                     }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const onClickDelete = () => {
        const storedDataMockString = localStorage.getItem('dataLocal');
        const storedDataMock = JSON.parse(storedDataMockString) || [];
        const updatedDataMock = storedDataMock.filter(item => item.matricula !== matricula);
        localStorage.setItem('dataLocal', JSON.stringify(updatedDataMock));
        onDataChange();
    };

    useEffect(() => {
        // Utilizado para atualizar sempre os registros ao serem deletados, evitando o reload da página.
    }, [matricula, onDataChange]);


    return (
        <div
            className={'select-none shadow-inner shadow-red-600 duration-700  w-64 h-64 flex flex-col border-2 border-black items-center rounded-lg p-4'}>
            <div onClick={toggleDropdown} className={'flex w-full justify-end'}>
                <div className={'duration-700 text-xl hover:cursor-pointer'}>
                    {isDropdownOpen ?
                        <IoIcon.IoMdClose/> :
                        <CiIcon.CiMenuKebab/>
                    }
                </div>
                {isDropdownOpen && (
                    <div className="absolute mt-5 bg-white border rounded shadow-lg">
                        <ul>
                            <li className="text-2xl px-4 py-2 hover:bg-gray-200 hover:cursor-pointer" title={'Deletar'}
                                onClick={onClickDelete}>
                                <CiIcon.CiTrash/>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className={'flex flex-col justify-center items-center h-full w-full'}>
                <div>{matricula}</div>
                <div>{nomeCompleto}</div>
                <div>{etapaEnsino}</div>
                <div>{serie}</div>
                <div>{cep}</div>
            </div>
        </div>
    );
};
