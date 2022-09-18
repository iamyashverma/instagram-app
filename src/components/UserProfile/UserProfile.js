import UserSection from "./UserSection";
import PhotoSection from "./PhotoSection";

export default function UserProfile(props) {
  const { name, displayPic, category, bio, site, posts, followers, following } =
    props;
  return (
    <div className="user-profile">
      <UserSection
        userInfo={[
          { number: posts.length, title: "posts" },
          { number: followers, title: "followers" },
          { number: following, title: "following" },
        ]}
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
        handlePostClick={props.handlePostClick}
      ></PhotoSection>
    </div>
  );
}
