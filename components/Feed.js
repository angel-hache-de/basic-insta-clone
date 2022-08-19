import React from "react";
import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      md:max-w-3xl
      lg:max-w-4xl
      xl:max-w-6xl
      mx-auto
      ${!session && "!grid-cols-1 !max-w-3xl"}
      `}
    >
      <section className="col-span-2 lg:-ml-12 xl:-ml-5 max-w-full">
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      {session && (
        <section className="hidden lg:inline-grid md:col-span-1 lg:-ml-9 xl:-ml-3">
          {/* Mini profile */}
          <div className="fixed bg-white">
            <MiniProfile />
            <Suggestions />
          </div>
          {/* Suggestions */}
        </section>
      )}
    </main>
  );
}

export default Feed;
