import { CreditCard, Trash2 } from 'lucide-react';
import React from 'react'

const OrderSummary = () => {
  return (
    <div className=" lg:w-80 w-full h-full bg-primary bg-opacity-35 rounded">
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold text-dark">Order Summary</h1>
        <p className="text-sm text-dark mt-2">
          Selected Items : sdfsdf
        </p>
        <p className="text-sm text-dark mt-2">
          Total Price : 14000
        </p>
        <p className="text-sm text-dark mt-2">
          Tax 10
        </p>
        <h3 className="text-xl font-semibold text-dark mt-4">
          Grand Total : 100
        </h3>
      </div>
      <div className="px-4 pb-6">
        {" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            // handleClearCart();
          }}
          className="bg-red-500 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-green-600 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center"
        >
          <span>Proceed Checkout</span>
          <CreditCard className="inline" width={15} height={15} />
        </button>
      </div>
    </div>
  )
}

export default OrderSummary