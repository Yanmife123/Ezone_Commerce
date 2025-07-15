const CartRow = ({ children }) => {
  return (
    <div className="w-full rounded-[4px] black__shadow flex flex-col md:flex-row justify-between px-4 md:px-8 py-4 md:py-5 items-center gap-4 md:gap-0">
      {children}
    </div>
  );
};

export default CartRow;
