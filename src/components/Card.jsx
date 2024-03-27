const Card = (props) => {
  return (
    <div className=" shadow-x  dark:bg-dark-grey flex w-[327px] flex-col items-center rounded-xl bg-white p-8 text-black ring-1 ring-slate-900/5 sm:w-[384px] sm:p-10 dark:text-white">
      {props.children}
    </div>
  );
};

export default Card;
