import UserSection from "./UserSection";
import PhotoSection from "./PhotoSection";
import HeaderTile from "../Header";
import profile1 from "../../assets/profile-1.jpeg";

export default function UserProfile(props) {
  const { name, displayPic, category, bio, site, posts, followers, following } =
    props;
  return (
    <div className="user-profile">
      <HeaderTile
        title={props.title}
        goBackHandler={props.goBackHandler}
      ></HeaderTile>
      <UserSection
        userInfo={[
          { number: posts.length, title: "posts" },
          { number: followers, title: "followers" },
          { number: following, title: "following" },
        ]}
        displayPic={profile1}
        userName={"Yash Verma"}
        user={{
          displayPic: displayPic,
          name: name,
          category: category,
          bio: bio,
          site: site,
        }}
      ></UserSection>
      <PhotoSection
        posts={posts}
        handlePicClick={props.handlePicClick}
      ></PhotoSection>
    </div>
  );
}
