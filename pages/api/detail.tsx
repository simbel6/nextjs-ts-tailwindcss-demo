// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function detail(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id)
  const list = [
    { id: 1, title: "糯米小饭团", price: 3, desc: "小饭团小饭团小饭团" },
    { id: 2, title: "Yifang Taiwan Fruit Tea", price: 30, desc: "Yifang Taiwan Fruit TeaYifang Taiwan Fruit Tea" },
    { id: 3, title: "Green Tea Latte", price: 29, desc: "Green Tea LatteGreen Tea Latte" },
    { id: 4, title: "Oolong Tea Latte", price: 3, desc: "Oolong Tea LatteOolong Tea Latte" },
  ]
  res.status(200).json(list.find(item => item.id === id));
}
