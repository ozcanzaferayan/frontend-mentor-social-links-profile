const Avatar = (props) => {
  const sizeClass = props.size === "small" ? "h-8 w-8" : "h-[88px] w-[88px]";

  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`${sizeClass} w- rounded-full`}
    />
  );
};

export default Avatar;
