
export const ShopFilterForm = () => {
    return (
        <form className="form filter-form" >
            <div className="shop-aside__price-block">
                <h6 className="shop-aside__title">Precio</h6>
                <div className="range-slider">
                    <input className="range-slider__bar" type="text" name="precio" />
                    <div className="range-slider__values">
                        <input className="range-slider__input range-slider__min" type="text" name="min-price" value="$50" readOnly />
                        <input className="range-slider__input range-slider__max" type="text" name="max-price" value="$900" readOnly />
                    </div>
                </div>
            </div>
            <div className="shop-aside__checkbox-block">
                <h6 className="shop-aside__title">Filtrar por talle</h6>
                <label className="form__checkbox-label"><span className="form__label-text">XL</span>
                    <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size XXL" checked={true} /><span className="form__checkbox-mask"></span>
                </label>
                <label className="form__checkbox-label"><span className="form__label-text">L</span>
                    <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size L" /><span className="form__checkbox-mask"></span>
                </label>
                <label className="form__checkbox-label"><span className="form__label-text">M</span>
                    <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size M" /><span className="form__checkbox-mask"></span>
                </label>
                <label className="form__checkbox-label"><span className="form__label-text">S</span>
                    <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size S" /><span className="form__checkbox-mask"></span>
                </label>
            </div>
            <div className="shop-aside__option-block">
                <h6 className="shop-aside__title">Filter by option</h6>
                <label className="form__radio-label"><span className="form__label-text">Option 1</span>
                    <input className="form__input-radio" type="radio" name="option-select" value="option-1" checked={true} /><span className="form__radio-mask"></span>
                </label>
                <label className="form__radio-label"><span className="form__label-text">Option 2</span>
                    <input className="form__input-radio" type="radio" name="option-select" value="option-2" /><span className="form__radio-mask"></span>
                </label>
                <label className="form__radio-label"><span className="form__label-text">Option 3</span>
                    <input className="form__input-radio" type="radio" name="option-select" value="option-3" /><span className="form__radio-mask"></span>
                </label>
            </div>
            <div className="shop-aside__tags-block">
                <h6 className="shop-aside__title">Tags</h6>
                <div className="tags"><a className="tags__item" href="#">Charity</a><a className="tags__item" href="#">Help</a><a className="tags__item" href="#">Freedom</a><a className="tags__item" href="#">Fundraising</a><a className="tags__item" href="#">Donate</a><a className="tags__item" href="#">Water</a></div>
            </div>
            <div className="shop-aside__buttons-block">
                <button className="form__submit" type="submit">Filter</button><span className="form__clear">Clear</span>
            </div>
        </form>
    )
}
