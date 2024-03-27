const CardLink = (props) => {
  const href = props.href || "#";
  return (
    <a
      href={href}
      className="flex items-center justify-center rounded-lg bg-indigo-500 p-4 text-white shadow-lg hover:bg-indigo-800 dark:bg-gray dark:hover:bg-dark"
    >
      <span className="mr-4 text-3xl">{props.emoji}</span> {props.children}
    </a>
  );
};

export default CardLink;
