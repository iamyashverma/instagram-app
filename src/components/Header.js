import { Segment, Icon, Header, Grid } from "semantic-ui-react";

export default function HeaderTile(props) {
  return (
    <Segment basic className="margin_0_0 insta_header">
      <Grid columns={3}>
        <Grid.Column width={1} className="padding_0_0" verticalAlign="middle">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.goBackHandler();
            }}
          >
            <Icon name="angle left" size="big" color="black"></Icon>
          </a>
        </Grid.Column>
        <Grid.Column width={14} style={{ textAlign: "center" }}>
          <Header as="h3">{props.title}</Header>
        </Grid.Column>
        <Grid.Column width={1} className="padding_bottom_0"></Grid.Column>
      </Grid>
    </Segment>
  );
}
