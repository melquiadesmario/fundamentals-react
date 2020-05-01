import React from 'react'

import products from '../data/products'

const RepetitionComponent = () => {
    const getProductListItem = () => {
        return products.map(product => {
            return(
                <li key={ product.id }>
                    id: { product.id} - Product: { product.name } R$ { product.price }
                </li>
            )
        })
    }

    return(
        <div>
            <h2>Repetition Component</h2>
            <ul>
                { getProductListItem() }
            </ul>
        </div>
    )
}

export default RepetitionComponent
