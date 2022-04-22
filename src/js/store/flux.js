const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			img: "https://starwars-visualguide.com/assets/img/characters/",
			next:"",
			previous: "",
			results: [],
			total_pages: 0,
			charactersInfo: {},
			favorites: []
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
				
			},
			addFavorites: (info) => {
				let favoritesList = getStore().favorites
				if(!favoritesList.includes(info)){
					favoritesList = [...favoritesList, info]
				}
				console.log(favoritesList)
				setStore({favorites: favoritesList})
			},
			deleteFavorites: (info) => {
				let favoritesList = getStore().favorites
				favoritesList = favoritesList.filter((item, index)=> item !== info)
				setStore({favorites: favoritesList})
			}
		}
	};
};

export default getState;
