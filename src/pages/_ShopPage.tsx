
// import { shop } from '../assets/img'
// import { MainPicture } from '../components/MainPicture'

// export const ShopPage = () => {


//     return (
//         <div>
//             <div className="page-wrapper">
//                 <main className="main">
//                     <section className="promo-primary promo-primary--shop">
//                         <MainPicture imgURL={shop} title='Shop' />
//                     </section>
//                     <section className="section shop">
//                         <div className="container">
//                             <div className="row align-items-baseline">
//                                 <div className="col-7 text-right">
//                                     <ul className="shop-filter">
//                                         <li className="shop-filter__item shop-filter__item--active"><span>Sort by latest</span>
//                                             <ul className="shop-filter__sub-list">
//                                                 <li><button className="shop-filter__item shop-filter__item"><span>Sort by latest</span></button></li>
//                                                 <li><button className="shop-filter__item shop-filter__item"><span>Sort by populirity</span></button></li>
//                                                 <li><button className="shop-filter__item shop-filter__item"><span>Sort by price: low to high</span></button></li>
//                                                 <li><button className="shop-filter__item shop-filter__item">Sort by price: high to low</button></li>
//                                                 <li><button className="shop-filter__item shop-filter__item">Sort by adding</button></li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-lg-3">
//                                     <div className="aside-holder"><span className="shop__aside-close">
//                                         <svg className="icon">
//                                             <use xlinkHref="#close"></use>
//                                         </svg></span>
//                                         <div className="shop-aside">
//                                             <div className="shop-aside__filter-block">
//                                                 <ul className="brand-filter">
//                                                     <li className="brand-filter__item"><span className="brand-filter__brand">Education</span><span className="brand-filter__count">25</span></li>
//                                                     <li className="brand-filter__item"><span className="brand-filter__brand">Clothes</span><span className="brand-filter__count">5</span></li>
//                                                     <li className="brand-filter__item"><span className="brand-filter__brand">Food</span><span className="brand-filter__count">17</span></li>
//                                                     <li className="brand-filter__item"><span className="brand-filter__brand">Medcine</span><span className="brand-filter__count">31</span></li>
//                                                     <li className="brand-filter__item"><span className="brand-filter__brand">Helpo</span><span className="brand-filter__count">6</span></li>
//                                                 </ul>
//                                             </div>
//                                             <form className="form filter-form" action="javascript:void(0);" >
//                                                 <div className="shop-aside__price-block">
//                                                     <h6 className="shop-aside__title">Price</h6>
//                                                     <div className="range-slider">
//                                                         <input className="range-slider__bar" type="text" name="price" />
//                                                         <div className="range-slider__values">
//                                                             <input className="range-slider__input range-slider__min" type="text" name="min-price" value="50" readOnly={true} />
//                                                             <input className="range-slider__input range-slider__max" type="text" name="max-price" value="900" readOnly={true} />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-aside__checkbox-block">
//                                                     <h6 className="shop-aside__title">Filter by size</h6>
//                                                     <label className="form__checkbox-label"><span className="form__label-text">Size XXL</span>
//                                                         <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size XXL" checked={true} /><span className="form__checkbox-mask"></span>
//                                                     </label>
//                                                     <label className="form__checkbox-label"><span className="form__label-text">Size L</span>
//                                                         <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size L" /><span className="form__checkbox-mask"></span>
//                                                     </label>
//                                                     <label className="form__checkbox-label"><span className="form__label-text">Size S</span>
//                                                         <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size S" /><span className="form__checkbox-mask"></span>
//                                                     </label>
//                                                 </div>
//                                                 <div className="shop-aside__option-block">
//                                                     <h6 className="shop-aside__title">Filter by option</h6>
//                                                     <label className="form__radio-label"><span className="form__label-text">Option 1</span>
//                                                         <input className="form__input-radio" type="radio" name="option-select" value="option-1" checked={true} /><span className="form__radio-mask"></span>
//                                                     </label>
//                                                     <label className="form__radio-label"><span className="form__label-text">Option 2</span>
//                                                         <input className="form__input-radio" type="radio" name="option-select" value="option-2" /><span className="form__radio-mask"></span>
//                                                     </label>
//                                                     <label className="form__radio-label"><span className="form__label-text">Option 3</span>
//                                                         <input className="form__input-radio" type="radio" name="option-select" value="option-3" /><span className="form__radio-mask"></span>
//                                                     </label>
//                                                 </div>
//                                                 <div className="shop-aside__tags-block">
//                                                     <h6 className="shop-aside__title">Tags</h6>
//                                                     <div className="tags"><a className="tags__item" href="#">Charity</a><a className="tags__item" href="#">Help</a><a className="tags__item" href="#">Freedom</a><a className="tags__item" href="#">Fundraising</a><a className="tags__item" href="#">Donate</a><a className="tags__item" href="#">Water</a></div>
//                                                 </div>
//                                                 <div className="shop-aside__buttons-block">
//                                                     <button className="form__submit" type="submit">Filter</button><span className="form__clear">Clear</span>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                         <div className="recent-posts">
//                                             <h6 className="shop-aside__title">Top Rated Products</h6>
//                                             <div className="recent-posts__item">
//                                                 <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_7.jpg" alt="img" /></div>
//                                                 <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Awesome Jacket</a><span className="recent-posts__item-value">$32.00 $18.00</span></div>
//                                             </div>
//                                             <div className="recent-posts__item">
//                                                 <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_8.jpg" alt="img" /></div>
//                                                 <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Black & White Cap</a><span className="recent-posts__item-value">$18.00</span></div>
//                                             </div>
//                                             <div className="recent-posts__item">
//                                                 <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_9.jpg" alt="img" /></div>
//                                                 <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Sports Sport Suit</a><span className="recent-posts__item-value">$32.00</span></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-9">
//                                     <div className="row offset-30">
//                                         {/* <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><span className="shop-item__badge shop-item__badge--sale">Sale - 50%</span><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_1.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Classic Jeans</a></h6><span className="shop-item__price">15.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><span className="shop-item__badge shop-item__badge--new">New</span><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_2.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Women Jacket</a></h6><span className="shop-item__price">25.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><span className="shop-item__badge shop-item__badge--hot">Hot</span><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_3.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Man Cap</a></h6><span className="shop-item__price">20.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div> */}
//                                         {/* <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_5.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Man Cap</a></h6><span className="shop-item__price">25.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_6.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Sport Suite</a></h6><span className="shop-item__price">20.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_1.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Classic Jeans</a></h6><span className="shop-item__price">15.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_2.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Women Jacket</a></h6><span className="shop-item__price">25.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_3.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Man Cap</a></h6><span className="shop-item__price">20.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_4.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Women Dress</a></h6><span className="shop-item__price">15.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_5.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Man Cap</a></h6><span className="shop-item__price">25.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-sm-6 col-md-4">
//                                             <div className="shop-item">
//                                                 <div className="shop-item__img"><a className="shop-item__add" href="#">
//                                                     <svg className="icon">
//                                                         <use xlinkHref="#bag"></use>
//                                                     </svg><span>Add to cart</span></a><img className="img--contain" src="../src/assets/img/shop_6.png" alt="img" /></div>
//                                                 <div className="shop-item__details">
//                                                     <h6 className="shop-item__name"><a href="shop-product.html">Sport Suite</a></h6><span className="shop-item__price">20.00$</span>
//                                                 </div>
//                                             </div>
//                                         </div> */}
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-12">
//                                             <ul className="pagination">
//                                                 <li className="pagination__item pagination__item--prev"><i className="fa fa-angle-left" aria-hidden="true"></i><span>Back</span>
//                                                 </li>
//                                                 <li className="pagination__item"><span>1</span></li>
//                                                 <li className="pagination__item pagination__item--active"><span>2</span></li>
//                                                 <li className="pagination__item"><span>3</span></li>
//                                                 <li className="pagination__item"><span>4</span></li>
//                                                 <li className="pagination__item"><span>5</span></li>
//                                                 <li className="pagination__item pagination__item--disabled">...</li>
//                                                 <li className="pagination__item"><span>12</span></li>
//                                                 <li className="pagination__item pagination__item--next"><span>Next</span><i className="fa fa-angle-right" aria-hidden="true"></i>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </main>

//                 <div className="shop__backdrop"></div>
//             </div>
//         </div>
//     )
// }
