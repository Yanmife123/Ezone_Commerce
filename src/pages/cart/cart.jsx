import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavigationS, CartData } from "../../components";
import { CartContext } from "../../context/CartContext";
import { AppContext } from "../../context/AppContext";
import { Images } from "../../constant";
const Cart = () => {
  const redirect = useNavigate();
  const { userAccess, isloadingAccess } = useContext(AppContext);
  useEffect(() => {
    if (!isloadingAccess) {
      if (!userAccess) {
        redirect("/login");
      } // Wait until the user access state is determined
    }
  }, [isloadingAccess]);

  const { cartData, isLoading, shouldIfetch, setShouldFetch } =
    useContext(CartContext);

  const [total, setTotal] = useState(0);
  const navigatedir = [
    {
      id: 1,
      dir: "/",
      name: "Home",
    },
    {
      id: 2,
      dir: "/cart",
      name: "Cart",
    },
  ];
  useEffect(() => {
    let computedTotal = 0;
    cartData.map((cart) => {
      computedTotal += parseInt(cart.quantity) * parseInt(cart.product_price);
    });
    setTotal(computedTotal);
  }, [cartData]);

  return (
    <div className="flex__center paddingX">
      <div className="boxWidth my-12 h-auto">
        {/* Navigation Breadcrumbs */}
        <div className="flex gap-3 md:mb-4 mb-6">
          {navigatedir.map((link, index) => (
            <NavigationS
              key={link.id}
              link_dir={link.dir}
              name={link.name}
              color={
                index === navigatedir.length - 1 ? "text-black" : "text-grey"
              }
              hidden={index === navigatedir.length - 1 ? "hidden" : ""}
            />
          ))}
        </div>

        {!isLoading && (
          <div className="w-full">
            {cartData.length > 0 ? (
              <div className="w-full mt-[50px] flex flex-col lg:flex-row gap-7">
                {/* Cart Items */}
                <div className="flex gap-[40px] flex-col flex-1">
                  {/* Consider adding a header row for clarity */}
                  {/* <CartRow>
                    <p className="cartParagraph">Product</p>
                    <p className="cartParagraph flex justify-center">Price</p>
                    <p className="cartParagraph flex justify-center">Quantity</p>
                    <p className="cartParagraph flex justify-end">Subtotal</p>
                  </CartRow> */}

                  {cartData.map((cart) => (
                    <div key={cart["cart_Id"]}>
                      <CartData {...cart} />
                    </div>
                  ))}
                </div>
                {/* Cart Summary */}
                <div className="flex md:justify-end justify-center h-full">
                  <div className="border-2 border-black w-full max-w-[470px] h-auto px-7 py-6 rounded-[6px] shadow-lg bg-white">
                    <h3 className="leading-[28px] text-black text-[20px] capitalize font-alt font-medium tracking-tight mb-4">
                      Cart total
                    </h3>
                    <div className="flex flex-col gap-[20px]">
                      <div className="border-b border-black py-4 flex justify-between">
                        <div className="text-black text-base font-poppins">
                          Subtotal:
                        </div>
                        <div className="text-black text-base font-poppins">
                          {total}
                        </div>
                      </div>
                      <div className="border-b border-black py-4 flex justify-between">
                        <div className="text-black text-base font-poppins">
                          Shipping:
                        </div>
                        <div className="text-black text-base font-poppins">
                          free
                        </div>
                      </div>
                      <div className="py-4 flex justify-between">
                        <div className="text-black text-base font-poppins">
                          Total:
                        </div>
                        <div className="text-black text-base font-poppins">
                          {total}
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button className="bg-crimson py-4 px-12 text-white rounded-[4px] btn hover:bg-red-700 transition">
                          Proceed to Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Empty Cart State
              <div className="w-full h-[500px] flex flex-col justify-center items-center">
                <img
                  src={Images.iconNoCart}
                  alt="No items in cart"
                  className="h-[250px] w-[250px] rounded-[8px] mb-6"
                />
                <p className="text-lg text-gray-500 font-poppins">
                  Your cart is empty.{" "}
                  <Link to="/allProduct" className="text-crimson underline">
                    Continue shopping
                  </Link>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
