const SalesHeader = (props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <div className="h-[40px] w-[20px] bg-crimson rounded-[5px]"></div>
        <h4 className="text-crimson md:text-[16px] text-[14px]  font-alt font-semibold">
          {props.title}
        </h4>
      </div>
      <h2 className="heading">{props.headText}</h2>
    </div>
  );
};

export default SalesHeader;
