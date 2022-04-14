const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			img: "https://starwars-visualguide.com/assets/img/characters/",
			next:"",
			previous: "",
			results: [],
			total_pages: 0,
			charactersInfo: {},
			charactersData: false
		},
		actions: {
			getData: () => {
				  fetch("https://www.swapi.tech/api/people", {
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
			},
			getCharactersInfo: async (id) => {
				await fetch(`https://www.swapi.tech/api/people/${id}`, {
				method: 'GET',
				redirect: 'follow'
				})
				.then(response => response.json())
				.then(result => {
						getStore(setStore({charactersInfo: result}))
					})
					.then(() => getStore(setStore({charactersData: true})))
				.catch(error => console.log('error', error));
				
			}
		}
	};
};

export default getState;
