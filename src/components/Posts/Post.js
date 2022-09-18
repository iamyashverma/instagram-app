import {
  Segment,
  Image,
  Header,
  Icon,
  Button,
  Grid,
  Input,
  Comment,
  Divider,
} from "semantic-ui-react";
import { useState } from "react";
import moment from "moment";

export default function Post(props) {
  const formatLikes = () => {
    let jsx = [];
    if (post.isLiked) jsx.push(<b>{"You and "}</b>);
    jsx.push(<b>{post.likes.toLocaleString("en-IN")}</b>);
    if (post.isLiked) jsx.push(<b>{" others"}</b>);
    return jsx;
  };

  const [commentInput, setCommentInput] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const lastCommentByUser = () => {
    let userComments = post.comments.filter(
      (comment) => comment.userid === currentUser.userid
    );
    let jsx = [];
    if (userComments.length > 0) {
      jsx.push(
        <Comment.Group>
          <Comment>
            <Comment.Avatar
              src={userComments[userComments.length - 1].userDp}
            />
            <Comment.Content>
              <Comment.Text>
                <b>{userComments[userComments.length - 1].userid + " "}</b>
                {userComments[userComments.length - 1].text}
              </Comment.Text>
              <Comment.Actions>
                <span
                  style={{ marginRight: "0.75em", color: "rgba(0,0,0,.4)" }}
                >
                  {moment(
                    userComments[userComments.length - 1].postedOn
                  ).fromNow()}
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
        </Comment.Group>
      );
    }
    return jsx;
  };

  const { userid, displayPic, post, currentUser } = props;
  return (
    <Segment basic className="margin_0_0 padding_0_0 post_container">
      <Segment basic className="margin_0_0 padding_0_0 user_tile_strip">
        <Image src={displayPic} avatar />{" "}
        <div>
          <Header as="h5" className="margin_bottom_0">
            {userid}
          </Header>
          <p style={{ fontSize: "0.8rem" }}>{post.location}</p>
        </div>
      </Segment>
      <Segment basic className="margin_0_0 padding_0_0">
        <Image src={post.pic} fluid className="post-pic" />
      </Segment>
      <Segment basic className="margin_0_0 padding_0_0 like-comment-strip">
        <Button
          icon
          basic
          className="boxShadow_0"
          onClick={(e) => {
            e.preventDefault();
            props.handleLike();
          }}
        >
          {post.isLiked ? (
            <Icon size="big" name="heart" color="red"></Icon>
          ) : (
            <Icon size="big" name="heart outline"></Icon>
          )}
        </Button>
        <Button icon basic className="boxShadow_0">
          <Icon
            size="big"
            name="comment outline"
            onClick={(e) => {
              e.preventDefault();
              if (!showCommentBox) {
                setShowCommentBox(true);
              }
            }}
          ></Icon>
        </Button>
        <Button icon basic className="boxShadow_0">
          <Icon size="big" name="paper plane outline"></Icon>
        </Button>
        <Button icon basic floated="right" className="boxShadow_0">
          <Icon size="big" name="bookmark outline"></Icon>
        </Button>
      </Segment>
      <Segment basic className="margin_0_0 padding_0_0 likedby-strip">
        Liked by {formatLikes()}
      </Segment>
      <Segment basic className="margin_0_0 padding_0_0 caption-container">
        <b>{userid + " "}</b>
        {post.caption}
      </Segment>
      <Segment basic className="margin_left_0 padding_0_0">
        <Button
          basic
          className="boxShadow_0 padding_0_0"
          onClick={(e) => {
            e.preventDefault();
            props.showAllComments();
          }}
        >
          View all {post.comments.length} comments
        </Button>
      </Segment>
      {lastCommentByUser()}
      {showCommentBox && (
        <Segment basic className="margin_left_0 padding_0_0">
          <Grid columns="2" className="margin_0_0 padding_0_0">
            <Grid.Column width="14" className="margin_0_0 padding_0_0">
              <Input
                type="text"
                fluid
                placeholder={"Add comment as " + currentUser.userid + " ..."}
                className="comment_input_inpost"
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
                    props.addNewCommentHandler(newComment);
                    setCommentInput("");
                  }
                }}
              >
                Post
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      )}
      <div className="posted-on">{moment(post.postedOn).fromNow()}</div>
    </Segment>
  );
}
