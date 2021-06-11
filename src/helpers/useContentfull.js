import * as contentful from 'contentful';
import { useState, useEffect } from 'react'


const useContentful = () => {
	const [data, setData] = useState([]);
	
	useEffect(() => {
    getData();
  }, [])

	console.log(process.env.ACCESS_TOKEN)

	const client = contentful.createClient({
		space: process.env.REACT_APP_SPACE,
		environment: process.env.REACT_APP_ENVIRONMENT,
		accessToken: process.env.REACT_APP_ACCESS_TOKEN
	})

	const getData = () => {
    client.getEntries({
			content_type: 'blogPost'
		})
    .then((response) => setData(response.items))
    .catch(console.error)
  }

	return {
		data
	}
}

export default useContentful;
