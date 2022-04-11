const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fullData: {}
		},
		actions: {
			getData: (params="") => {
				  fetch("https://www.swapi.tech/api/people?", {
					method: 'GET',
					redirect: 'follow'
				  })
					.then(response => response.json())
					.then(result => setStore({
						next: result.next,
						previous: result.previous,
						results: result.results,
						total_pages: result.total_pages
					}))
					.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;
