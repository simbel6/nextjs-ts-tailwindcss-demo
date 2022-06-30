import { useRouter } from 'next/router'
import styles from "./index.module.scss";

interface CardItem {
  id: number,
  title: string;
  price: number;
  desc: string;
}

interface Props {
  data: CardItem;
}

const Card: React.FC<Props> = ({ data }) => {
  const router = useRouter()

  const onClick = (id: number) => {
    router.push({
      pathname: '/detail/[id]',
      query: { id: `${id}` }
    })
  }

  return (
    <div className={styles.card} onClick={() => onClick(data.id)}>
      <h4 className={styles.title}>{data.title}</h4>
      <p className={styles.price}>${data.price}</p>
      <p className={styles.desc}>{data.desc}</p>
    </div>
  );
};

export default Card;
