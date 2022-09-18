import dp from "./assets/bh-dp.jpeg";
import post1 from "./assets/post1.jpeg";
import post2 from "./assets/post2.webp";
import post3 from "./assets/post3.jpeg";
import post4 from "./assets/post4.jpeg";
import post5 from "./assets/post5.jpeg";
import profile1 from "./assets/profile-1.jpeg";
import profile2 from "./assets/profile2.jpeg";
import profile3 from "./assets/profile3.jpeg";
import profile4 from "./assets/profile4.jpeg";
import profile5 from "./assets/profile5.jpeg";
import profile6 from "./assets/profile6.jpeg";
import profile7 from "./assets/user.png";
import user1 from "./assets/user1.jpeg";

const data = {
  profile: {
    userid: "beautifulhotels",
    name: "Beautiful Hotels",
    bio: "Celebrating #BeautifulHotels from all over the world. Discover the most unique, experiential, and finest stays with us. 🌎",
    site: "www.beautifuldestinations.com",
    category: "Business",
    followers: 5300000,
    following: 18,
    displayPic: dp,
    posts: [
      {
        id: 1,
        pic: post1,
        likes: 33805,
        location: "Bali",
        caption:
          "Stunning ocean views day & night at @sixsenses Uluwatu.🌅 Nestled on the cliffs of Bali, you’ll be greeted daily by the sight of the beach, surfers, and beautiful sunsets. 🌊",
        isLiked: false,
        postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 12),
        comments: [
          {
            userid: "ammalssmohammed",
            text: "Wow 😍 so many beautiful views out there in this place , perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile1,
            postedOn: new Date(Date.now() - 3600 * 100),
          },
          {
            userid: "gibsel01",
            text: "Wow 😍",
            userDp: profile2,
            postedOn: new Date(Date.now() - 3600 * 1000 * 4),
          },
          {
            userid: "campsbaygirl",
            text: "Perfection",
            userDp: profile3,
            postedOn: new Date(Date.now() - 3600 * 1000 * 10),
          },
          {
            userid: "alexwassy",
            text: "Must visit in Israel too",
            userDp: profile4,
            postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 1),
          },
          {
            userid: "demety_",
            text: "Perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile5,
            postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 3),
          },
          {
            userid: "the nexttrip",
            text: "Love this pool! The sunsets here were next level!",
            userDp: profile6,
            postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 7),
          },
          {
            userid: "suvarnaarora",
            text: "Loved visiting Dead Sea 😍",
            userDp: profile7,
            postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 10),
          },
        ],
      },
      {
        id: 2,
        pic: post2,
        likes: 33805,
        location: "Bali",
        caption:
          "What's your idea for a refreshing dip? 🏊 Go swim around or float all day in this two-tiered river stone pool at AYANA Resort and Spa in Bali!",
        isLiked: false,
        postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 7),
        comments: [
          {
            userid: "ammalssmohammed",
            text: "Wow 😍 so many beautiful views out there in this place , perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile5,
            postedOn: new Date(Date.now() - 2400 * 1000),
          },
          {
            userid: "alexwassy",
            text: "Must visit in Israel too",
            userDp: profile4,
            postedOn: new Date(Date.now() - 3600 * 1000 * 10),
          },
          {
            userid: "suvarnaarora",
            text: "Love to visit here such a lovely place",
            userDp: profile3,
            postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 3),
          },
        ],
      },
      {
        id: 3,
        pic: post3,
        likes: 33805,
        location: "Los Cabos",
        caption:
          "Who's traveling to Mexico soon? 🇲🇽 Come and indulge in oceanfront comfort at Solaz Luxury Collection Resort, Los Cabos. 🌊",
        isLiked: false,
        postedOn: new Date(2021, 10, 3, 18, 10),
        comments: [
          {
            userid: "ammalssmohammed",
            text: "Wow 😍 so many beautiful views out there in this place , perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile1,
            postedOn: new Date(Date.now() - 3600 * 1000),
          },
          {
            userid: "alexwassy",
            text: "Must visit in Israel too",
            userDp: profile4,
            postedOn: new Date(Date.now() - 3600 * 1000 * 3),
          },
          {
            userid: "demety_",
            text: "Perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile5,
            postedOn: new Date(Date.now() - 3600 * 1000 * 20),
          },
          {
            userid: "the nexttrip",
            text: "Love this pool! The sunsets here were next level!",
            userDp: profile6,
            postedOn: new Date(Date.now() - 3600 * 1000 * 24 * 4),
          },
        ],
      },
      {
        id: 4,
        pic: post4,
        likes: 33805,
        location: "Seychelles",
        caption:
          "Wow sweet is this view? 🌿 Discover @sixsenses Zil Pasyon–the ecological jewel of Seychelles. 🇸🇨 Enjoy life as nature intended and wash all your worries away!",
        isLiked: false,
        postedOn: new Date(2021, 9, 15, 15, 20),
        comments: [
          {
            userid: "demety_",
            text: "Perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile2,
            postedOn: new Date(Date.now() - 3600 * 1000 * 20),
          },
        ],
      },
      {
        id: 5,
        pic: post5,
        likes: 33805,
        caption:
          "This week we're exploring the beautiful country of Mauritius! 🇲🇺 Come experience a glorious beachside living with us at @luxgrandbaie. Stay tuned on our stories! 🏝️",
        location: "Mauritius",
        isLiked: false,
        postedOn: new Date(2021, 7, 22, 15, 10),
        comments: [
          {
            userid: "alexwassy",
            text: "Must visit in Israel too",
            userDp: profile4,
            postedOn: new Date(Date.now() - 3600 * 1000 * 20),
          },
          {
            userid: "demety_",
            text: "Perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile2,
            postedOn: new Date(Date.now() - 3600 * 1000 * 23),
          },
          {
            userid: "the nexttrip",
            text: "Love this pool! The sunsets here were next level!",
            userDp: profile3,
            postedOn: new Date(Date.now() - 3600 * 1000 * 20 * 2),
          },
          {
            userid: "ammalssmohammed",
            text: "Wow 😍 so many beautiful views out there in this place , perfect for a private vacation with my person 🇮🇩✨❤️",
            userDp: profile1,
            postedOn: new Date(Date.now() - 3600 * 1000 * 20 * 7),
          },
        ],
      },
    ],
  },
  currentUser: {
    userid: "yashv",
    displayPic: user1,
  },
};

export default data;
