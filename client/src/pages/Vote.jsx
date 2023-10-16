import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { CREATE_VOTE } from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";
import "../styles/vote.css";

const Vote = () => {
  //   const { data } = useQuery(QUERY_POSTS);

  //   const postList = data?.post || [];
  //   const [formData, setFormData] = useState({
  //     option1: "",
  //     option2: "",
  //   });
  let { id } = useParams();
  const { data } = useQuery(QUERY_POSTS, {
    variables: { _id: id },
  });

  const post = data?.posts || [];

  const [createVote, { error }] = useMutation(CREATE_VOTE);

  const handleVote = async (optionNum) => {
    try {
      await createVote({
        variables: { _id: id, optionNum: optionNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ui vertical segment ">
      <div className="ui main vote-container">
        <div className="container">
          <h1 className="ui pick">Pick Your Choice</h1>
        </div>
        <div className="container choices">
          <div>
            <div className="ui raised card opt1">
              <div className="content">
                <div className="center aligned header"></div>
              </div>
              <div className="extra content">
                <div className="center aligned author">
                  <button className="ui basic green button" type="submit ">
                    Vote
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="ui raised card opt2">
              <div className="content">
                <div className="center aligned header"></div>
              </div>
              <div className="extra content">
                <div className="center aligned author">
                  <button className="ui basic green button" type="submit ">
                    Vote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
