import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/Header";

//Browser...
function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-28 px-14 text-center">
        <Image src="https://links.papareact.com/ocw" width={200} height={80} />
        <p className="font-xs italic">
          SignIn!
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}
              >
                Sing in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//Middle server
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
