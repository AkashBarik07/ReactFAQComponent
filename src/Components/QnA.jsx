export default function QnA({ item, isShow, handleQnA }) {
  return (
    <div className="qna">
      {item.question}
      <span onClick={handleQnA}>{isShow ? "-" : "+"}</span>
      {isShow && <hr />}
      {isShow && item.answer}
    </div>
  );
}
