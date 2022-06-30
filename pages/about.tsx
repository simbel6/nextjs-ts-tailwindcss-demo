import type { NextPage } from "next";
import Head from "next/head";

type Props = {
  data: {
    compony: string;
    address: string;
    slogan: string;
  };
};

const About: NextPage<Props> = ({ data }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>About Fantuan</title>
      </Head>
      <h3>{data.compony}</h3>
      <p>{data.slogan}</p>
      <p>{data.address}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "http://112.126.60.46:7300/mock/62bbc1a90dc647002044a6f4/fantuan/about"
  );
  const { data } = await res.json();
  console.log('get about data', data)
  return {
    props: {
      data,
    },
  };
}

export default About;
