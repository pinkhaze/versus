import { Form, Input, Button } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_USERPOSTS } from "../../utils/queries";
// import { REMOVE_POST } from "../../utils/mutations";
import { Link } from "react-router-dom";
import { CREATE_VOTE } from '../../utils/mutations';

import Auth from "../../utils/auth";
import "../../styles/profile.css";

const ProfileDashboard = () => {
  // getting the user's posts
  const { data } = useQuery(QUERY_USERPOSTS, {
    variables: {
      username: Auth.getProfile().data.username,
    },
  });
  const [createVote, { error }] = useMutation(CREATE_VOTE)
  const handleVote = (optionNum) => {
    console.log(optionNum);
  }

  const posts = data?.userPosts || [];
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
                        </div>
                      </div>
                      <div className="ui green segment">
                        <div className="content">
                          <div className="header">{post.option2}</div>
                          <div className="meta">{post.option2_votes} Votes</div>
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
export default ProfileDashboard;
