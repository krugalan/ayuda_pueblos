import { ProductComponent } from './ProductComponent'
import { products } from '../../data/products'

export const ProductList = () => {


    return (
        <div className="row offset-30">
            {
                products.map((product) => (
                    <ProductComponent key={product.id}
                        {...product} />
                ))
            }
        </div>
    )
}
