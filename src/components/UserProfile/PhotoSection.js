import {
  Grid,
  Button,
  Image,
  Segment,
  Item,
  Icon,
  Header,
} from "semantic-ui-react";
import user from "../../assets/profile-1.jpeg";

export default function PhotoSection(props) {
  const getUserPics = () => {
    return props.posts.map((post, index) => (
      <Grid.Column style={{ padding: "1px" }} key={index}>
        <Image
          src={post.pic}
          postkey={post.id}
          className="photo-grid-photo"
          onClick={(e) => {
            e.preventDefault();
            props.handlePostClick(e.target.getAttribute("postkey"));
          }}
        ></Image>
      </Grid.Column>
    ));
  };
  const userPics = getUserPics();
  return (
    <Segment basic className="padding_0_0 photo_section">
      <Grid columns={3} textAlign="center">
        <Grid.Column>
          <Button basic icon className="boxShadow_0">
            <Icon name="grid layout" size="large" color="blue"></Icon>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button basic icon className="boxShadow_0">
            <Icon name="list" size="large"></Icon>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button basic icon className="boxShadow_0">
            <Icon name="user outline" size="large"></Icon>
          </Button>
        </Grid.Column>
      </Grid>
      <Grid columns={3} celled className="photo-grid">
        {userPics}
      </Grid>
    </Segment>
  );
}
