import style from "./Tag.module.css";

const Tag = ({ tag }) => {
  return (
    <div className={style.containerTag}>
      <span>{tag}</span>
    </div>
  );
};

export default Tag;
