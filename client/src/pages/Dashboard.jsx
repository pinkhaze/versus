import { useMutation, useQuery } from "@apollo/client";
import { CREATE_VOTE } from "../utils/mutations";
import { QUERY_ALLPOSTS } from "../utils/queries";
import "../styles/profile.css";

const Dashboard = () => {

  const { loading, data } = useQuery(QUERY_ALLPOSTS);

  const posts = data?.allPosts || [];
  const [createVote, { error }] = useMutation(CREATE_VOTE);
  const handleVote = async(event) => {
    try {
      await createVote({
        variables: { _id: event.target.dataset.id, optionNum: event.target.dataset.num },
      });
      event.target.disabled = true;
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container-flex">
        <div className="ui cards">
          {posts &&
            posts.map((post) => (
              <div className="card" key={post._id}>
                <div className="content">
                  <div className="header">Matchup</div>
                </div>
                <div className="content">
                  <div className="container">
                    <div className="ui horizontal segments">
                      <div className="ui red segment">
                        <div className="content">
                          <div className="header">{post.option1}</div>
                          <div className="meta">{post.option1_votes} Votes</div>
                          <button
                            className="btn btn-info"
                            data-id = {post._id}
                            data-num = "option1_votes"
                            onClick={handleVote}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                      <div className="ui green segment">
                        <div className="content">
                          <div className="header">{post.option2}</div>
                          <div className="meta">{post.option2_votes} Votes</div>
                          <button
                            data-id = {post._id}
                            data-num = "option2_votes"
                            className="btn btn-info"
                            onClick={ handleVote}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
