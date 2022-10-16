import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <img src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="Post" />
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;