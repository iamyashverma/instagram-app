import {
  Grid,
  Button,
  Image,
  Segment,
  Item,
  Icon,
  Header,
} from "semantic-ui-react";
import user from "../../assets/user.png";

export default function UserSection(props) {
  const nFormatter = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  const getUserInfo = () => {
    return props.userInfo.map((info) => {
      return (
        <Item>
          <Item.Content>
            <Item.Header>{nFormatter(info.number)}</Item.Header>
            <Item.Meta className="margin_top_0">{info.title}</Item.Meta>
          </Item.Content>
        </Item>
      );
    });
  };
  const userInfo = getUserInfo();
  const { user } = props;
  return (
    <Segment basic className="padding_0_0 margin_0_0 user_info_container">
      <Segment basic className="padding_0_0 margin_0_0">
        <Grid>
          <Grid.Column width={3} className="flex_center">
            <Image src={user.displayPic} className="display_pic"></Image>
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid.Row>
              <Item.Group className="user_info_items">{userInfo}</Item.Group>
            </Grid.Row>
            <Grid.Row>
              <Grid columns={3}>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={13}>
                  <Button primary fluid>
                    Follow
                  </Button>
                </Grid.Column>
                <Grid.Column width={2} className="padding_left_0">
                  <Button primary icon>
                    <Icon name="caret down"></Icon>
                  </Button>
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment
        basic
        className="padding_left_0 margin_0_0 user_info_description"
      >
        <Header as="h3" className="margin_0_0">
          {user.name}
        </Header>
        {user.category && (
          <Segment
            basic
            className="padding_0_0 margin_0_0 category"
            style={{ color: "grey" }}
          >
            {user.category}
          </Segment>
        )}
        {user.bio && (
          <Segment basic className="padding_0_0 margin_0_0 bio">
            {user.bio}
          </Segment>
        )}
        {user.site && (
          <Segment
            as="a"
            basic
            className="padding_0_0 margin_0_0 site"
            href={"https://" + user.site}
            target="_blank"
          >
            {user.site}
          </Segment>
        )}
      </Segment>
      <Segment basic>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            console.log("call");
          }}
        >
          {" "}
          Call
        </a>
      </Segment>
    </Segment>
  );
}
