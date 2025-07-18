const Toast = () => {
  return (
    <div className="fixed lg:top-20 right-5 z-[9999] space-y-3">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">Login Successful</p>
          <p className="text-sm text-gray-500">Welcome back, bro 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
