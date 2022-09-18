import {
  Segment,
  Image,
  Header,
  Icon,
  Button,
  Comment,
  Divider,
  Form,
  Input,
  Grid,
} from "semantic-ui-react";
import { useState } from "react";
import profile1 from "../../assets/profile-1.jpeg";
import moment from "moment";

import HeaderTile from "../Header";

export default function Comments(props) {
  function getComments(comments) {
    return comments.map((comment, index) => (
      <Comment key={index}>
        <Comment.Avatar src={comment.userDp} />
        <Comment.Content>
          <Comment.Text>
            <b>{comment.userid + " "}</b>
            {comment.text}
          </Comment.Text>
          <Comment.Actions>
            <span style={{ marginRight: "0.75em", color: "rgba(0,0,0,.4)" }}>
              {moment(comment.postedOn).fromNow()}
            </span>
            <Comment.Action>
              <b>Like</b>
            </Comment.Action>
            <Comment.Action>
              <b>Reply</b>
            </Comment.Action>
          </Comment.Actions>
          <Divider />
        </Comment.Content>
      </Comment>
    ));
  }

  const { currentProfile, currentPost, currentUser } = props;
  const userid = currentProfile.userid;
  const caption = currentPost.caption;
  const [commentInput, setCommentInput] = useState("");
  const comments = getComments(currentPost.comments);
  return (
    <Segment basic className="margin_0_0 padding_0_0">
      <HeaderTile
        title={props.title}
        goBackHandler={props.goBackHandler}
      ></HeaderTile>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={currentProfile.displayPic} />
          <Comment.Content>
            <Comment.Text>
              <b>{userid + " "}</b>
              {caption}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      <Divider />
      <Comment.Group className="margin_0_0">
        <Comment>
          <Comment.Avatar />
          <Comment.Content>
            <Comment.Text>
              <Button basic className="boxShadow_0 padding_0_0">
                Load more comments
              </Button>
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      <Divider />
      <Comment.Group>
        {comments}
        <Grid columns="2" className="margin_0_0 padding_0_0">
          <Grid.Column width="14" className="margin_0_0 padding_0_0">
            <Input
              type="text"
              fluid
              placeholder="Add comment"
              className="comment_input"
              value={commentInput}
              onChange={(e) => {
                setCommentInput(e.target.value);
              }}
            ></Input>
          </Grid.Column>
          <Grid.Column width="2" className="margin_0_0 padding_0_0">
            <Button
              basic
              className="boxShadow_0"
              onClick={() => {
                if (commentInput.length > 0) {
                  let newComment = {
                    userid: currentUser.userid,
                    userDp: currentUser.displayPic,
                    text: commentInput,
                    postedOn: new Date(),
                  };
                  props.addNewComment(newComment);
                  setCommentInput("");
                }
              }}
            >
              Post
            </Button>
          </Grid.Column>
        </Grid>
      </Comment.Group>
    </Segment>
  );
}
