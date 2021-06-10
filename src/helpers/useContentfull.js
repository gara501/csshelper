import * as contentful from 'contentful';
import { useState, useEffect } from 'react'

const useContentful = () => {
	const [data, setData] = useState([]);
	
	useEffect(() => {
    getData();
  }, [])

	const client = contentful.createClient({
		space: '88oez7ymnho5',
		environment: 'master',
		accessToken: '-h2Po1jqj5qHph9ZJKW9oV74kDtsexDrWo90xwgHckM'
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