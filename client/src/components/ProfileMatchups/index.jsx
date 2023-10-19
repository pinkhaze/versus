import { Form, Input, Button } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_USERPOSTS } from "../../utils/queries";
// import { REMOVE_POST } from "../../utils/mutations";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import "../../styles/profile.css";

const ProfileDashboard = () => {
  // getting the user's posts
  const { data } = useQuery(QUERY_USERPOSTS, {
    variables: {
      username: Auth.getProfile().data.username,
    },
  });
  // //deleting the user's posts
  // const [formState, setFormState] = useState({
  //   _id: "",
  // });
  // const [removePost] = useMutation(REMOVE_POST);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const { data: mutationData } = await removePost({
  //       variables: {
  //         _id: formState.id,
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

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
                      <div className="ui teal segment">
                        <div className="content">
                          <div className="header">{post.option1}</div>
                          <div className="meta">{post.option1_votes} Votes</div>
                        </div>
                      </div>
                      <div className="ui purple segment">
                        <div className="content">
                          <div className="header">{post.option2}</div>
                          <div className="meta">{post.option2_votes} Votes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="extra content">
                  <button className="ui button">See Comments</button>
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
  );
};
export default ProfileDashboard;
