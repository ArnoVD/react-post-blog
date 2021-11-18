import { createContext, useState, useEffect } from "react";
import api from '../api/posts';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // This useEffects renders at the beginning and gets the posts from the db
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // This is how a get is written with the axios api (instead of fetch)
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (err) {
                if (err.response) {
                    // Not in the 200 response range
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else {
                    // Possibly we did not get a response
                    console.log(`Error: ${err.message}`)
                }

            }
        }

        // Call the async function
        fetchPosts();
    }, [])

    useEffect(() => {
        const filteredResults = posts.filter(post => (
                (post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;