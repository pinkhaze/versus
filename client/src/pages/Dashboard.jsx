import { useMutation, useQuery } from "@apollo/client";
import { CREATE_VOTE } from "../utils/mutations";
import { QUERY_ALLPOSTS } from "../utils/queries";
import "../styles/profile.css";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ALLPOSTS);
  const [createVote, { error }] = useMutation(CREATE_VOTE);
  const posts = data?.allPosts || [];
  console.log(posts);
  const handleVote = (optionNum) => {
    console.log(optionNum);
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
                            onClick={() => handleVote(1)}
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
                            className="btn btn-info"
                            onClick={() => handleVote(2)}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="extra content">
                  {/* <button className="ui button">See Comments</button> */}
                  {/* <Button
                        className=" ui button right floated star"
                        onChange={handleChange}
                        value={formState.id}
                        input={post.id}
                      >
                        Delete Post
                      </Button> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
    // <div className>
    //   Dashboard
    //   {posts &&
    //     posts.map((post) => (
    //       <div className="card-body text-center mt-3" key={post._id}>
    //         <h2>
    //           {post.option1} vs. {post.option2}
    //         </h2>
    //         <h3>
    //           {post.option1_votes} : {post.option2_votes}
    //         </h3>
    //         <button className="btn btn-info" onClick={() => handleVote(1)}>
    //           Vote for {post.option1}
    //         </button>{" "}
    //         <button className="btn btn-info" onClick={() => handleVote(2)}>
    //           Vote for {post.option2}
    //         </button>
    //       </div>
    //     ))}
    // </div>
  );
};

export default Dashboard;
