import {Link} from 'react-router-dom';
import {Menu as menu} from './dataMock.js';

export const Header = () => {
    return (
        <header
            className={'w-full block text-center md:flex bg-[#5A707C] p-4 md:p-6 justify-between border-b-2 border-solid border-black shadow-box-shadow'}>
            <div key={menu[0].order} className={'mb-5 md:mb-0'}>
                <Link title={menu[0].title} to={menu[0].link}
                      className="text-2xl text-[#FFA500] hover:bg-gray-700 px-3 py-2 rounded-md">
                    {menu[0].text}
                </Link>
            </div>

            <div className={'block md:flex space-x-4 md:space-x-8'}>
                {menu.slice(1).map((menuItem) => (
                    <div key={menuItem.order} className={`${menuItem.className}`}>
                        <Link title={menuItem.title} to={menuItem.link}
                              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
                            {menuItem.text}
                        </Link>
                    </div>
                ))}
            </div>
        </header>
    )
}
