import Image from "next/image";

function Story({ img, username }) {
  return (
    <div>
      <div className="!h-14 !w-14 !rounded-full !p-[1.5px] 
                  !border-red-500 !border-2
                   cursor-pointer 
                  hover:scale-110 transition 
                  transform duration-200 ease-out overflow-hidden">
        <Image
          className="m-auto rounded-full"
          objectFit="contain"
          src={img}
          //referrerPolicy="no-referrer"
          alt=""
          color="red"
          height={56}
          width={56}
        />
      </div>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
