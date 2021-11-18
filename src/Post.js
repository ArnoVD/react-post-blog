import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className='post'>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className='postDate'>{post.dateTime}</p>
            </Link>
            {/*If the body length is greater than 25, slice the body to a length of 25 (the dots are strings)*/}
            <p className='postBody'>{
                (post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)}...`
            }
            </p>
        </article>
    )
}

export default Post