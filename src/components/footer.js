import { Grid, Button, Image, Segment } from "semantic-ui-react";
import homeIcon from "../assets/home.png";
import postIcon from "../assets/post.png";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.png";
import likeIcon from "../assets/love.png";

export default function Footer(props) {
  const { displayPic } = props;
  return (
    <Segment basic className="padding_0_0 footer">
      <Grid columns={5} textAlign="center" className="margin_0_0">
        <Grid.Column className="padding_bottom_0 padding_top_0">
          <Button icon basic className="boxShadow_0">
            <Image src={homeIcon} style={{ width: "25px" }} />
          </Button>
        </Grid.Column>
        <Grid.Column className="padding_bottom_0 padding_top_0">
          <Button icon basic className="boxShadow_0">
            <Image src={searchIcon} style={{ width: "25px" }} />
          </Button>
        </Grid.Column>
        <Grid.Column className="padding_bottom_0 padding_top_0">
          <Button icon basic className="boxShadow_0">
            <Image src={postIcon} style={{ width: "25px" }} />
          </Button>
        </Grid.Column>
        <Grid.Column className="padding_bottom_0 padding_top_0">
          <Button icon basic className="boxShadow_0">
            <Image src={likeIcon} style={{ width: "25px" }} />
          </Button>
        </Grid.Column>
        <Grid.Column className="padding_bottom_0 padding_top_0">
          <Button icon basic className="boxShadow_0">
            <Image src={userIcon} style={{ width: "25px" }} />
          </Button>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
