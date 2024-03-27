const CardLink = (props) => {
  const href = props.href || "#";
  return (
    <a
      href={href}
      className="dark:bg-grey dark:hover:bg-neon-green bg-grey hover:text-neon-green flex items-center justify-center rounded-lg p-3 font-bold text-white shadow-lg hover:bg-black dark:hover:text-black"
    >
      {props.children}
    </a>
  );
};

export default CardLink;
