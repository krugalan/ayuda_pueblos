
import { shop } from '../assets/img'
import { PaginationSection } from '../components/EventsPage/PaginationSection'
import { MainPicture } from '../components/MainPicture'
import { FilterByCategory } from '../components/ShopPage/FilterByCategory'
import { ProductList } from '../components/ShopPage/ProductList'
import { ProductosDestacadosSection } from '../components/ShopPage/ProductosDestacadosSection'
import { ShopFilterForm } from '../components/ShopPage/ShopFilterForm'
import { SortBySection } from '../components/ShopPage/SortBySection'

export const ShopPage = () => {


    return (
        <div>
            <div className="page-wrapper">
                <main className="main">
                    <section className="promo-primary promo-primary--shop">
                        <MainPicture imgURL={shop} title='Shop' title2='Solidario' />
                    </section>
                    <section className="section shop">
                        <div className="container">
                            <SortBySection />
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="aside-holder"><span className="shop__aside-close">
                                        <svg className="icon">
                                            <use xlinkHref="#close"></use>
                                        </svg></span>
                                        <div className="shop-aside">
                                            <FilterByCategory />
                                            <ShopFilterForm />
                                        </div>
                                        <ProductosDestacadosSection />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <ProductList />
                                    <PaginationSection />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div className="shop__backdrop"></div>
            </div>
        </div>
    )
}
