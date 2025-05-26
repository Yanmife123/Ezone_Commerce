const TokenRetrive = () => {
  const token = localStorage.getItem("token") ?? null;
  return token;
};

export default TokenRetrive;
