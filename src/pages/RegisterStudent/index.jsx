import {useState} from "react";
import {Input} from '../../components/Input';
import * as BsIcons from 'react-icons/bs';
import {EtapaEnsino} from "./dataMock.js";

import axios from 'axios';

export const RegisterStudent = () => {

    const dataLocal = JSON.parse(localStorage.getItem('dataLocal')) || []

    const [data, setData] = useState({
        'matricula': dataLocal[dataLocal.length - 1].matricula + 1,
        'nomeCompleto': '',
        'etapaEnsino': '',
        'serie': '',
        'cep': '',
        'logradouro': '',
        'numero': '',
        'bairro': '',
        'uf': ''
    })


    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSaveStudent = () => {
        const prevData = JSON.parse(localStorage.getItem("dataLocal")) || [];
        const newData = [...prevData, data];
        localStorage.setItem("dataLocal", JSON.stringify(newData));
        alert("Dados adicionados com sucesso!");
    }

    const handleCEPSearch = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${data.cep}/json/`);
            setData(prevData => ({
                ...prevData,
                logradouro: response.data.logradouro,
                bairro: response.data.bairro,
                uf: response.data.uf,
            }));
        } catch (error) {
            console.error('Erro ao chamar a API:', error);
        }
    }


    return (
        <div className="mt-14 p-5 flex flex-col items-center">
            <div className="text-3xl">Cadastrar Aluno</div>
            <div className={'container'}>
                <form onSubmit={handleSaveStudent}>
                    <div
                        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">

                        <Input inputType={'text'}
                               inputWidth={'w-[5rem] text-center'}
                               isDisabled={true}
                               inputLabel={'Matricula'}
                               inputValue={data.matricula}/>

                        <Input inputType={'text'}
                               placeHolder={'Nome Completo'}
                               inputId={'nomeCompleto'}
                               inputName={'nomeCompleto'}
                               inputValue={data.nomeCompleto}
                               inputLabel={'Nome Completo'}
                               inputWidth={'sm:w-full'}
                               inputOnChange={handleInputChange}
                        />

                        <label className={'flex flex-col p-3'}>
                            Etapa de Ensino
                            <select
                                className={'mt-1 p-2 rounded-lg bg-white border-2 border-gray-400'}
                                name="etapaEnsino"
                                value={data.etapaEnsino}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                    Selecione uma Etapa de Ensino
                                </option>
                                {EtapaEnsino.map((etapa) => (
                                    <option key={etapa.order} value={etapa.etapa}>
                                        {etapa.etapa}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className={'flex flex-col p-3'}>
                            Série
                            <select className={'mt-1 p-2 rounded-lg bg-white border-2 border-gray-400'} name="serie"
                                    value={data.serie} onChange={handleInputChange}>
                                <option value="" disabled>
                                    Selecione uma Série
                                </option>
                                {data.etapaEnsino === ''
                                    ? 'Selecione uma Etapa de Ensino'
                                    : EtapaEnsino.find((etapa) => etapa.etapa === data.etapaEnsino)?.series.map((serie) => (
                                        <option key={serie.order}>
                                            {serie.serie}
                                        </option>
                                    ))}
                            </select>
                        </label>


                        <div className={'flex flex-col sm:flex-row'}>
                            <Input inputType={'text'}
                                   placeHolder={'Logradouro'}
                                   inputId={'logradouro'}
                                   isDisabled={true}
                                   inputName={'logradouro'}
                                   inputValue={data.logradouro}
                                   inputLabel={'Logradouro'}
                                   inputWidth={'md:w-[30rem]'}
                                   inputOnChange={handleInputChange}
                            />

                            <Input inputType={'text'}
                                   placeHolder={'Número'}
                                   inputId={'numero'}
                                   inputName={'numero'}
                                   inputValue={data.numero}
                                   inputLabel={'Número'}
                                   inputWidth={'md:w-[5rem] text-center'}
                                   inputOnChange={handleInputChange}
                            />

                            <Input inputType={'text'}
                                   placeHolder={'Bairro'}
                                   isDisabled={true}
                                   inputId={'bairro'}
                                   inputName={'bairro'}
                                   inputValue={data.bairro}
                                   inputLabel={'Bairro'}
                                   inputWidth={'md:w-[15rem] text-center'}
                                   inputOnChange={handleInputChange}
                            />

                            <Input inputType={'text'}
                                   placeHolder={'UF'}
                                   isDisabled={true}
                                   inputId={'uf'}
                                   inputName={'uf'}
                                   inputValue={data.uf}
                                   inputLabel={'UF'}
                                   inputWidth={'md:w-[5rem] text-center'}
                                   inputOnChange={handleInputChange}
                            />

                            <div className={'flex items-center'}>
                                <Input inputType={'text'}
                                       placeHolder={'CEP'}
                                       inputId={'cep'}
                                       inputName={'cep'}
                                       inputValue={data.cep}
                                       inputLabel={'CEP'}
                                       inputWidth={'md:w-[10rem] text-center'}
                                       inputOnChange={handleInputChange}
                                />
                                <span className={'mt-6 cursor-pointer'} title={'Pesquisar CEP'}
                                      onClick={handleCEPSearch}><BsIcons.BsSearch size={25}/></span>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-center'}>
                        <button type={'submit'}
                                className={'border-2 border-gray-500 p-2 rounded-lg mt-20 scale-150 bg-emerald-800 text-white'}>Cadastrar
                            Aluno
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};
