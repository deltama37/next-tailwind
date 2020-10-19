import { NextPage, GetStaticProps } from "next";
import { db } from "@/firebasae";
import { Message } from "@/types";

type Props = {
  message: Message;
};

const IndexPage: NextPage<Props> = ({ message }: Props) => {
  return (
    <>
      <h1>{message.title}</h1>
      <span>{message.body}</span>
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const messageRefDoc = db.collection("messages").doc("message1");
  const message = (await messageRefDoc.get()).data();
  return { props: { message } };
};
