const Card = (props) => {
  return (
    <div className=" shadow-x  flex flex-col items-center rounded-xl bg-white p-8 text-black ring-1 ring-slate-900/5 dark:bg-gray-dark dark:text-white">
      {props.children}
    </div>
  );
};

export default Card;
