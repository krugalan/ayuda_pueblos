
export const ProductosDestacadosSection = () => {
    return (
        <div className="recent-posts">
            <h6 className="shop-aside__title">Productos destacados</h6>
            <div className="recent-posts__item">
                <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_7.jpg" alt="img" /></div>
                <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Awesome Jacket</a><span className="recent-posts__item-value">$32.00 $18.00</span></div>
            </div>
            <div className="recent-posts__item">
                <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_8.jpg" alt="img" /></div>
                <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Black & White Cap</a><span className="recent-posts__item-value">$18.00</span></div>
            </div>
            <div className="recent-posts__item">
                <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_9.jpg" alt="img" /></div>
                <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Sports Sport Suit</a><span className="recent-posts__item-value">$32.00</span></div>
            </div>
        </div>
    )
}
