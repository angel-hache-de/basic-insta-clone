import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  //Para solo leer un valor
  //const open = useRecoilValue(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6x1 mx-10">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
        >
          {/* Imagenes comprimidas con otra extension pero con misma calidad */}
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden flex-shrink-0"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle - Search Input field */}
        <div className="relative mt-1 p-3 rounded-md">
          <div
            className="absolute inset-y-0 pl-3 flex items-center
                                    pointer-events-none"
          >
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm rounded-md
                            border-gray-300 focus:ring-black focus:border-black"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => router.push("/")}
            className="navButton"
          />
          <MenuIcon className="h-6 md:hidden curson-pointer" />

          {session ? (
            <>
              <div className="relative navButton">
                <PaperAirplaneIcon className="navButton rotate-45" />
                <div
                  className="absoulte -top-1 -right-2 text-xs w-5 h-5
                             bg-red-500 rounded-full flex items-center 
                             justify-center animate-pulse text-white"
                >
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navButton"
              />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton !mr-2" />
              <Image
                onClick={signOut}
                //referrerPolicy="no-referrer"
                src={session?.user?.image}
                alt="profile pic"
                className="rounded-full cursor-pointer ml-1"
                height={35}
                width={35}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
