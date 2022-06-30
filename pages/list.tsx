import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import type { CardItem } from "./api/list";

type Props = {
  list: CardItem[];
};

const List: NextPage<Props> = ({ list = [] }) => {
  return (
    <div>
      <Head>
        <title>点餐</title>
      </Head>
      <div className="box">
        {list.map((item) => <Card key={item.id} data={item} />)}
      </div>
      <style jsx>{`
        .box {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          width: 640px;
          margin: 30px auto;
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://112.126.60.46:7300/mock/62bbc1a90dc647002044a6f4/fantuan/list");
  const { list } = await res.json();
  console.log('list', list)

  // By returning { props: { list } }, the Blog component
  // will receive `list` as a prop at build time
  return {
    props: {
      list,
    },
    revalidate: 30,
  };
}

export default List;
