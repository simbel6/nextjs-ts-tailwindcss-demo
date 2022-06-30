import type { NextPage } from "next";
import { useRouter } from "next/router";
import type { CardItem } from "../api/list";

type Props = {
  data: CardItem;
};

const Detail: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="flex justify-center align-middle">Loading...</div>;
  }
  return (
    <div className="mx-auto my-3 max-w-4xl">
      <h2>{data?.title}</h2>
      <p className="text-red-400 text-xl my-2">${data?.price}</p>
      <p className="text-gray-500">{data?.desc}</p>
      <button className="mt-2 rounded-sm text-green-400">添加到购物车</button>
    </div>
  );
};

// 获取动态请求参数
export async function getStaticPaths() {
  const res = await fetch(
    "http://112.126.60.46:7300/mock/62bbc1a90dc647002044a6f4/fantuan/ids"
  );
  const { data } = await res.json();
  console.log("ids", data);
  return {
    paths: data.map((id: number) => ({
      params: {
        id: `${id}`,
      },
    })),
    fallback: true, // false or 'blocking'
  };
}

type ParamsType = {
  params: {
    id: string;
  };
};

// 使用请求参数获取数据
export async function getStaticProps({ params }: ParamsType) {
  console.log('getStaticProps detail id', params.id)
  const res = await fetch(
    `http://112.126.60.46:7300/mock/62bbc1a90dc647002044a6f4/fantuan/detail?id=${params.id}`
  );
  const { data } = await res.json();
  console.log("data", data);
  return {
    props: {
      data,
    },
  };
}

export default Detail;
