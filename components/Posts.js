import Post from "./Post";
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase/firebase";

//const posts = [
//  {
//    id: 123,
//    username: "angelhdz",
//    userImg:
//      "https://stargazed.net/wp-content/uploads/2019/07/Sabaton-The-Great-War.jpg",
//    img: "https://stargazed.net/wp-content/uploads/2019/07/Sabaton-The-Great-War.jpg",
//    caption: "Aaaaalaaaa!",
//  },
//  {
//    id: 12,
//    username: "dianaCab",
//    userImg:
//      "https://stargazed.net/wp-content/uploads/2019/07/Sabaton-The-Great-War.jpg",
//    img: "https://stargazed.net/wp-content/uploads/2019/07/Sabaton-The-Great-War.jpg",
//    caption: "Aaaaalaaaa!",
//  },
//  {
//    id: 13,
//    username: "Johana M.",
//    userImg:
//      "https://stargazed.net/wp-content/uploads/2019/07/Sabaton-The-Great-War.jpg",
//    img: "https://stargazed.net/wp-content/uploads/2019/07/Sabaton-The-Great-War.jpg",
//    caption: "Aaaaalaaaa!",
//  },
//];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      {
      const unsubscribe =
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
        );
        return () => {
          unsubscribe();
        };
        //return unsubscribe;
        },
      //),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
