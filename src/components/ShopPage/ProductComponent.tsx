
type ProductComponentType = {
    productName: string;
    productPrice: string | number;
    imgURL: string;
}

export const ProductComponent = ({ productName, productPrice, imgURL }: ProductComponentType) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="shop-item">
                <div className="shop-item__img">
                    <a className="shop-item__add" href="#">
                        <svg className="icon">
                            <use xlinkHref="#bag"></use>
                        </svg><span>Añadir al Carrito</span>
                    </a>
                    <img className="img--contain" src={imgURL} alt="img" /></div>
                <div className="shop-item__details">
                    <h6 className="shop-item__name">
                        <a href="shop-product.html">{productName}</a>
                    </h6>
                    <span className="shop-item__price">{`$${productPrice.toString()}.00`}</span>
                </div>
            </div>
        </div>
    )
}
