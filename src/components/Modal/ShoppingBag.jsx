import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ShoppingBag = ({
  setOpenCart,
  addedItems,
  setNavbarCount,
  setAddedItems,
}) => {
  const [items, setItems] = useState(addedItems);

  const subtotal = items.reduce((total, item) => {
    return total + item.productPrice * item.count;
  }, 0);

  const deleteItem = (index) => {
    const deletedItem = items[index];
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    const updatedAddedItems = addedItems.filter(
      (item) => item.productName !== deletedItem.productName
    );
    setAddedItems(updatedAddedItems);

    setNavbarCount((prevCount) => prevCount - deletedItem.count);
  };

  const handleDecrease = (index) => {
    const updatedItems = [...items];
    const item = updatedItems[index];
    if (item.count > 1) {
      item.count--;
      setItems(updatedItems);
      setNavbarCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncrease = (index) => {
    const updatedItems = [...items];
    const item = updatedItems[index];
    item.count++;
    setItems(updatedItems);
    setNavbarCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="absolute top-0 flex justify-end w-full h-screen bg-black bg-opacity-30 z-[100] overflow-x-hidden">
      <motion.div
        className="relative w-full overflow-y-scroll bg-white lg:w-1/3 xl:w-1/5"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 500 }}
      >
        <div className="flex flex-col justify-between h-full px-4 pt-8 sm:8 xl:px-5">
          <button
            className="absolute top-4 right-5"
            onClick={() => setOpenCart(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div>
            {items.length >= 1 && (
              <h6 className="pt-4 pb-4 border-b h6-style">Shopping bag</h6>
            )}
            <div>
              {items.length === 0 ? (
                <h6 className="text-center h6-style mt-36">
                  Shopping bag is empty.
                </h6>
              ) : (
                items.map((item, i) => (
                  <div key={i} className="flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-5 py-4 border-b">
                      <div className="flex items-start gap-5">
                        <img
                          src={item.productImage}
                          alt={item.productName}
                          className="w-[90px]"
                        />
                        <div className="flex flex-col">
                          <p className="text-lg">{item.productName}</p>
                          {item.productType === "tshirt" && (
                            <span>{item.selectedSize}</span>
                          )}
                          {item.isNew && (
                            <span className="pr-3 line-through opacity-30">
                              $30.00
                            </span>
                          )}
                          <span className="pb-4">
                            ${item.productPrice * item.count}.00
                          </span>
                          <div className="flex items-center gap-2">
                            <span>Qty: </span>
                            <div className="flex items-center text-black bg-white border">
                              <button
                                className="w-7 py-0.5"
                                onClick={() => handleDecrease(i)}
                              >
                                -
                              </button>
                              <span className="w-7 text-center py-0.5 text-xs">
                                {item.count}
                              </span>
                              <button
                                className="w-7 py-0.5"
                                onClick={() => handleIncrease(i)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => deleteItem(i)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          {items.length >= 1 && (
            <div className="pb-8 border-t ">
              <div className="flex justify-between py-4 text-lg font-bold">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <button className="w-full text-white bg-blue-600 rounded-md xs:w-1/3 lg:w-full h-11">
                Checkout
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ShoppingBag;
