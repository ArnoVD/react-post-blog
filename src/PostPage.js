import { useParams, Link, useHistory } from 'react-router-dom';
import { useContext } from 'react'
import DataContext from "./context/DataContext";
import api from "./api/posts";

const PostPage = () => {
    const { posts, setPosts  } = useContext(DataContext)
    const history = useHistory()

    // Get the id parameter from post/id
    const { id } = useParams();
    // To use triple equal sings the post.id needs to be a string
    const post = posts.find(post => (post.id).toString() === id);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`)
            const postList = posts.filter(post => post.id !== id);
            setPosts(postList);
            // Use the history to go back to the home page
            history.push('/');
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }

    }

    return (
        <main className='PostPage'>
            <article className='post'>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button className='editButton'>Edit post</button>
                        </Link>
                        <button className='deleteButton' onClick={() => handleDelete(post.id)}>Delete Post</button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage;