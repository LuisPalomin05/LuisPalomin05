

const TextSubtitle = ({icon, text, subtitle}) => {
  return (
    <div className="text-subtitle">
      <div className="subtitle-icon">
        {icon}
      </div>
      <div className="subtitle-legend">
        <p>{text}</p>
        <small>{subtitle}</small>
      </div>
    </div>
  );
};

export default TextSubtitle;