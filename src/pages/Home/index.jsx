import {Data as features} from './dataMock.js';

export const Home = () => {
    return (
        <div>
            <div className={'text-[40px] mt-[20px] mb-[20px] text-center'}>
                Bem-vindo à Academia Jovem Futuro
            </div>

            <div>
                {features.map((featureItem) => (
                        <div key={featureItem.order} className={`flex-col ${featureItem.className}`}>
                            <div className={featureItem.classNameTitle}>
                                {featureItem.title}
                            </div>
                            <div className={``}>
                                {featureItem.text}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
