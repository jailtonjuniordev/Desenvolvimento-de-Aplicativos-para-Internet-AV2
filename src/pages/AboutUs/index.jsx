import {Data as data} from './dataMock.js';

export const AboutUs = () => {
    return (
        <>
            <div className={'text-5xl text-center mt-[20px] mb-[20px]'}>
                Sobre Nós
            </div>

            <div className={'text-justify p-[20px] mt-[-20px]'}>
                {data.map((data) => (
                    <p key={data.order} className={'mb-[15px]'}>
                        {data.content}
                    </p>
                ))}
            </div>
        </>
    )
}
