import { Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  Contact,
  About,
  SignUP,
  MyAccount,
  Profile,
  AddressBook,
  PaymentMethod,
  Cart,
  NotFound,
  CartProductEdit,
  ProductDetail,
} from "../pages";
const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUP />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/cart/edit/:id" element={<CartProductEdit />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="myAccount" element={<MyAccount />}>
        <Route path="profile" element={<Profile />} />
        <Route path="addressBook" element={<AddressBook />} />
        <Route path="paymentMethod" element={<PaymentMethod />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteComponent;
