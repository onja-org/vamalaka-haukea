import axios from 'axios'

export const sendQuery = (query: any, variables?: any): Promise<any> => {
	return axios.post('http://localhost:4000/graphql?', {
		query,
	})
}

export const getOffersQuery = () => {
	return `{
          ads{title, createdAt, id, body, user{username, firstName, lastName, city, country, id}, price, unit, amountOfProduct, currency}
      }`
}

export const getCategoriesQuery = () => {
	return `{
        categories{id, description, title}
      }`
}
