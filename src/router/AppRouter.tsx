import { Routes, Route } from 'react-router-dom';
import { Error404Page, HomePage, ContactPage, AboutPage } from '../pages';

export const AppRouter = () => {
    return <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/*' element={<Error404Page />} />


        </Routes>
    </>

}
