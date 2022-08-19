import { useEffect, useState } from "react";
import Image from "next/image";
import faker from "faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: 1,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.avatar}
          className="flex items-center justify-between mt-5"
        >
          <Image
            src={faker.random.image()}
            //src="https://stargazed.net/wp-content/uploads/2019/07/Sabaton-The-Great-War.jpg"
            className="rounded-full border p-[2px]"
            alt=""
            height={40}
            width={40}
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
