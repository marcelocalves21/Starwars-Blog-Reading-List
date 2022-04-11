const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data:{},
			previous:"",
			results: [],
			total_pages: 0,
			favorites:[],
			charactersInfo:[]
		},
		actions: {
			getData: (params="") => {
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
						characterId:[]
					}))
					.catch(error => console.log('error', error));
			},
			getCharactersInfo: () => {
				const characterId = getStore().results
				for (let i of characterId){
					console.log(i.uid)
					fetch(`https://www.swapi.tech/api/people/${i.uid}`, {
					method: 'GET',
					redirect: 'follow'
				  })
					.then(response => response.json())
					.then(result => setStore({charactersInfo: [...charactersInfo, result]}))
					.catch(error => console.log('error', error));
				}
				
			}
		}
	};
};

export default getState;
