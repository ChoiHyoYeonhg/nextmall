import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";
import { useContext, useEffect, useState } from "react";

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>{title ? title + "NextShop" : "NextShop"} </title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favocon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
            <Link href="/">
              <a className="text-lg font-bold text-red-500">NextShop</a>
            </Link>
            <div>
              <Link href="/contect">
                <a className="p-2 text-black">소개</a>
              </Link>
              <Link href="/cart">
                <a className="/p-2 text-black">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="/p-2 text-black"> Login </a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4"> {children} </main>

        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022 NextShop</p>
        </footer>
      </div>
    </>
  );
}
