
export const SortBySection = () => {
    return (
        <div className="row align-items-baseline">
            <div className="col-7 text-right">
                <ul className="shop-filter">
                    <li className="shop-filter__item shop-filter__item--active"><span>Sort by latest</span>
                        <ul className="shop-filter__sub-list">
                            <li><button className="shop-filter__item shop-filter__item"><span>Sort by latest</span></button></li>
                            <li><button className="shop-filter__item shop-filter__item"><span>Sort by populirity</span></button></li>
                            <li><button className="shop-filter__item shop-filter__item"><span>Sort by price: low to high</span></button></li>
                            <li><button className="shop-filter__item shop-filter__item">Sort by price: high to low</button></li>
                            <li><button className="shop-filter__item shop-filter__item">Sort by adding</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
