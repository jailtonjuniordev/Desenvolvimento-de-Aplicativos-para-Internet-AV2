import {useState} from "react";
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import {EtapaEnsino} from '../../pages/RegisterStudent/dataMock.js'


export const Input = ({
                          inputLabel = 'label',
                          placeHolder = 'text',
                          inputType = 'text',
                          inputValue,
                          inputId,
                          inputName,
                          isDisabled = false,
                          inputWidth = 'w-[16rem]',
                          inputOnChange,
                          isRequired = true,
                          isSelect = false,

                      }) => {



    return (
        <div className={'p-3 flex flex-col gap-y-1'}>
            <label>
                {inputLabel}
            </label>
            <input
                disabled={isDisabled}
                id={inputId}
                name={inputName}
                className={`h-10 ${inputWidth} border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-red-500 transition duration-200`}
                placeholder={placeHolder}
                type={inputType}
                value={inputValue}
                onChange={inputOnChange}
                required={isRequired}/>

        </div>
    )
}

