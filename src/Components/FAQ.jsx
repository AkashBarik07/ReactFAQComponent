import { useState } from "react";
import QnA from "./QnA";

export default function FAQ({ data }) {
  const [showIndex, setShowIndex] = useState(-1);
  const handleQnA = (index) => {
    setShowIndex((prevIndex) => {
      if (prevIndex === index) {
        return -1;
      } else return index;
    });
  };
  return (
    <div>
      {data.faqs.map((item, index) => {
        return (
          <QnA
            item={item}
            isShow={index === showIndex}
            handleQnA={() => handleQnA(index)}
          />
        );
      })}
    </div>
  );
}
