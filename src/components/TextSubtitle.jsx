

const TextSubtitle = ({icon, text, subtitle}) => {
  return (
    <div>
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <h2>{text}</h2>
        <small>{subtitle}</small>
      </div>
    </div>
  );
};

export default TextSubtitle;