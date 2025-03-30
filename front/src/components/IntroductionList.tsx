import styles from "../styles/IntroductionList.module.css";
import IntroductionCard from "./IntroductionCard";
import num1 from "../assets/1.gif";
import num2 from "../assets/2.gif";
import num3 from "../assets/3.gif";
import num4 from "../assets/4.gif";
import num5 from "../assets/5.gif";
import num6 from "../assets/6.gif";

interface Introduction {
  image: string;
  title: string;
  description: string;
}

const IntroductionList: React.FC = () => {
  const introductions: Introduction[] = [
    {
      image: num1,
      title: "공유가 편리",
      description:
        "URL이 짧아져서 문자, 이메일, SNS 등에 쉽게 복사하고 붙여넣을 수 있습니다.",
    },
    {
      image: num2,
      title: "가독성 상승",
      description:
        "복잡한 링크 대신 짧고 깔끔한 URL을 사용하면 보기 좋고 신뢰도가 높아집니다.",
    },
    {
      image: num3,
      title: "클릭률이 증가",
      description:
        "긴 링크보다 짧은 링크가 사용자들에게 더 매력적으로 보여 더 많이 클릭될 가능성이 높습니다.",
    },
    {
      image: num4,
      title: "트래킹이 가능",
      description:
        "단축 URL 서비스는 클릭 수, 지역별 접속, 기기 종류 등 다양한 통계를 제공하여 마케팅에 활용할 수 있습니다.",
    },
    {
      image: num5,
      title: "브랜딩 효과 증대",
      description:
        "맞춤형 단축 URL을 사용하면 브랜드명을 포함할 수 있어 신뢰도를 높이고 인지도를 키울 수 있습니다.",
    },
    {
      image: num6,
      title: "오류 발생 가능성 감소",
      description:
        "긴 URL은 잘못 복사되거나 깨질 위험이 있지만, 짧은 URL은 그럴 가능성이 낮아 안정적으로 사용할 수 있습니다.",
    },
  ];
  return (
    <div className={styles.introductionCardWrapper}>
      {introductions.map((introduction, index) => (
        <IntroductionCard key={index} introduction={introduction} />
      ))}
    </div>
  );
};

export default IntroductionList;
