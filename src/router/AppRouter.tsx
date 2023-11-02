import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { AboutPage } from '../pages/AboutPage';
import { Error404Page } from '../pages/Error404Page';

export const AppRouter = () => {
    return <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sobre-nosotros' element={<AboutPage />} />
            <Route path='/contacto' element={<ContactPage />} />


            <Route path='/*' element={<Error404Page />} />
        </Routes>
    </>

}
