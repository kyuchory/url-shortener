import styles from "../styles/IntroductionCard.module.css";

interface Introduction {
  image: string;
  title: string;
  description: string;
}

interface IntroductionProps {
  introduction: Introduction;
}

const IntroductionCard: React.FC<IntroductionProps> = ({ introduction }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.titleWrapper}>
        <img src={introduction.image} alt="소개 이미지" loading="lazy" />
        <h2>{introduction.title}</h2>
      </div>
      <p>{introduction.description}</p>
    </div>
  );
};

export default IntroductionCard;
