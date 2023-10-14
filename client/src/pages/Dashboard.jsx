import { useMutation, useQuery } from '@apollo/client';
import { CREATE_VOTE } from '../utils/mutations';
import { QUERY_ALLPOSTS } from '../utils/queries';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ALLPOSTS);
  const [createVote, {error}] = useMutation(CREATE_VOTE)
  const posts = data?.allPosts || [];
  console.log(posts);
  const handleVote = (optionNum) => {
  console.log(optionNum);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <div className>
      Dashboard
      {posts &&
        posts.map((post) => (
          <div className="card-body text-center mt-3" key={post._id}>
            <h2>
              {post.option1} vs. {post.option2}
            </h2>
            <h3>
              {post.option1_votes} : {post.option2_votes}
            </h3>
            <button className="btn btn-info" onClick={() => handleVote(1)}>
              Vote for {post.option1}
            </button>{' '}
            <button className="btn btn-info" onClick={() => handleVote(2)}>
              Vote for {post.option2}
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default Dashboard;
