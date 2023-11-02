import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { AboutPage } from '../pages/AboutPage';
import { Error404Page } from '../pages/Error404Page';
import { DonorsPage } from '../pages/DonorsPage';
import { VolunteersPage } from '../pages/VolunteersPage';
import { EventsPage } from '../pages/EventsPage';
import { StoriesPage } from '../pages/StoriesPage';
import { BlogPage } from '../pages/BlogPage';
import { GalleryPage } from '../pages/GalleryPage';
import { FAQPage } from '../pages/FAQPage';
import { ShopPage } from '../pages/ShopPage';

export const AppRouter = () => {
    return <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sobre-nosotros' element={<AboutPage />} />
            <Route path='/contacto' element={<ContactPage />} />
            <Route path='/donantes-y-colaboradores' element={<DonorsPage />} />
            <Route path='/shop-solidario' element={<ShopPage />} />
            <Route path='/voluntarios' element={<VolunteersPage />} />
            <Route path='/eventos' element={<EventsPage />} />
            <Route path='/historias-de-vida' element={<StoriesPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/galeria' element={<GalleryPage />} />
            <Route path='/preguntas-frecuentes' element={<FAQPage />} />



            <Route path='/*' element={<Error404Page />} />
        </Routes>
    </>

}
