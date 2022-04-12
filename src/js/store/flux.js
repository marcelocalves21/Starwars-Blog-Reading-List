const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: false,
			next:"",
			previous: "",
			results: [],
			total_pages: 0,
			charactersInfo: []
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
						total_pages: result.total_pages,
						data:false
					}))
					.then(() => getActions().getCharactersInfo())
					.catch(error => console.log('error', error));
			},
			getCharactersInfo: async () => {
				const characterId = getStore().results
				for (let i of characterId){
					await fetch(`https://www.swapi.tech/api/people/${i.uid}`, {
					method: 'GET',
					redirect: 'follow'
				  })
					.then(response => response.json())
					.then(result => getStore(setStore({charactersInfo: [...charactersInfo, result]})))
					.catch(error => console.log('error', error));
				}
				
			}
		}
	};
};

export default getState;
