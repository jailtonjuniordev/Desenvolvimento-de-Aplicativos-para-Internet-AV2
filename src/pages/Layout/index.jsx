import {Outlet} from 'react-router-dom';
import {Header} from "../../components/Header/index.jsx";
import {Footer} from "../../components/Footer/index.jsx";

function Layout() {
    return (
        <div className={'flex flex-col min-h-screen'}>
            <Header/>
            <div className={'flex-grow'}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}


export {Layout}
