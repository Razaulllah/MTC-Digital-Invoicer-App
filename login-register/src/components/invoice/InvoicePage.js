import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./in.css"
import React from "react";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";

function InvoicePage() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  const PostData = async (e) => {
    e.preventDefault();

    // If you fill the above place write the name of that places in below area
    const res = await fetch("http://localhost:9002/saveinvoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        phone,
        clientName,
        clientAddress,
        clientPhone,
        invoiceNumber,
        invoiceDate,
        notes,
        description,
        quantity,
        price,
        amount,
        list,
        total,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Data");
      console.log("Invalid Data");
    } else {
      window.alert("Successful Data sent");
      console.log("Successful Data sent");
    }
  };

  return (
    <>
      <main className="invoicepage">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button
                  className="bg-blue-500 ml-5 text-white
            font-bold py-2 px-8 rounded shadow border-blue-500
            hover:bg-transparent hover:text-blue-500 transition-all
            duration-300"
                >
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />

            <div ref={componentRef} className="p-5">
              <Header handlePrint={handlePrint} />
              <MainDetails name={name} address={address} />

              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
                clientPhone={clientPhone}
              />

              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} />

              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />

              <Notes notes={notes} />

              <Footer name={name} address={address} phone={phone} />
            </div>
            <article className="md:grid grid-cols-3 gap-10">
              <button
                onClick={() => setShowInvoice(false)}
                className="mt-5 bg-blue-500 text-white font-bold py-2 px-8
          rounded shadow border-blue-500 hover:bg-transparent
          hover:text-blue-500 transition-all duration-300"
              >
                Edit information
              </button>

              <button
                onClick={PostData}
                className="bg-blue-500 ml-5 text-white
           font-bold py-2 px-8 rounded shadow border-blue-500
           hover:bg-transparent hover:text-blue-500 transition-all
           duration-300"
              >
                Submit
              </button>
            </article>
          </>
        ) : (
          <>
            {/* name, address, email, phone, bank name, bank account number, website, client name, client address, invoic number, invoice date, due date, notes  */}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Name</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Apka Nam"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-2">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Shop ka Patta"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Mobile ka Number"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-10">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your Client's Name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Client ka Nam"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your Client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Client Ki Shop Ka Patta"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-5">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your Client's phone</label>
                  <input
                    type="text"
                    name="clientPhone"
                    id="clientPhone"
                    placeholder="Client Ka Mobile Number"
                    autoComplete="off"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 md:mt-5">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
              </article>

              {/* Table form */}

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Additonal Notes</label>
              <textarea class="form-control"
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Addtional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 text-white
              font-bold py-8 px-12 rounded shadow border-blue-500
              hover:bg-transparent hover:text-blue-500 transition-all
              duration-300 md:mt-5"
            >
              Preview Invoice
            </button>
          </>
        )}
      </main>
    </>
  );
}

export default InvoicePage;
