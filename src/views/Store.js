import React from 'react'
import PropTypes from 'prop-types'
import StoreCard from '../components/StoreCard'
import { StyledStoreCardContainer } from '../styles/StyledCartCardContainer'

function Store({ store }) {
	const storeCards = store.map(
		({ id, author, image, quantity, price, quote }) => (
			<StoreCard
				id={id}
				author={author}
				image={image}
				quantity={quantity}
				price={price}
				quote={quote}
			/>
		)
	)
	return <StyledStoreCardContainer>{storeCards}</StyledStoreCardContainer>
}

export default Store

Store.propTypes = {
	store: PropTypes.array.isRequired
}
