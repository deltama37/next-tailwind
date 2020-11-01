import { NextPage, GetServerSideProps } from "next";
import { db } from "@/firebasae";
import { Message } from "@/types";
import { useUser } from "@/contexts/userContext";
import firebase from "@/firebasae";

type Props = {
  message: Message;
};

const IndexPage: NextPage<Props> = ({ message }: Props) => {
  const { user, loadingUser } = useUser();

  const login = () => {
    firebase.auth().signInAnonymously();
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  if (loadingUser) {
    return (
      <>
        <span>loading now...</span>
      </>
    );
  }
  return (
    <>
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="ml-6 pt-1">
          <h1 className="text-xl text-gray-900 leading-tight">
            {message.title}
          </h1>
          <p className="text-base text-gray-600 leading-normal">
            {message.body}
          </p>
        </div>
      </div>
      {user ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
      {user && <>{user.uid}</>}
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const messageRefDoc = db.collection("messages").doc("message1");
  const message = (await messageRefDoc.get()).data();
  return { props: { message } };
};
