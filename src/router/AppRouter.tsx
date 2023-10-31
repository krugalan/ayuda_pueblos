import { Routes, Route } from 'react-router-dom';
import { Error404Page, HomePage, ContactPage, AboutPage } from '../pages';
import { ShopPage } from '../pages/ShopPage';

export const AppRouter = () => {
    return <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sobre-nosotros' element={<AboutPage />} />
            <Route path='/contacto' element={<ContactPage />} />
            <Route path='/shop-solidario' element={<ShopPage />} />
            <Route path='/preguntas-frecuentes' element={<ShopPage />} />
            <Route path='/donantes-y-colaboradores' element={<ShopPage />} />
            <Route path='/historias' element={<ShopPage />} />
            <Route path='/voluntarios' element={<ShopPage />} />
            <Route path='/blog' element={<ShopPage />} />
            <Route path='/galeria' element={<ShopPage />} />



            <Route path='/*' element={<Error404Page />} />
        </Routes>
    </>

}
