import React from "react";
import visaLogo from "./assets/visa.png"; // Ensure you have the images
import mastercardLogo from "./assets/mastercard.png";
import amexLogo from "./assets/amex.png";
import "./styles.css"; // Import custom CSS

const transactions = [
  { card: "*4920", type: "Credit", date: "Jun 24, 2023", time: "10:00 am", status: "Verified", amount: "2890.00" },
  { card: "*4230", type: "Debit", date: "Jun 20, 2023", time: "11:00 am", status: "Rejected", amount: "-49.00" },
  { card: "*5510", type: "Credit", date: "Jun 19, 2023", time: "2:00 pm", status: "Pending", amount: "-80.00" },
  { card: "*0983", type: "Debit", date: "Jun 18, 2023", time: "11:00 am", status: "Verified", amount: "-30.00" },
  { card: "*4443", type: "Credit", date: "Jun 17, 2023", time: "10:00 am", status: "Verified", amount: "1500.00" },
  { card: "*7635", type: "Debit", date: "Jun 14, 2023", time: "9:00 am", status: "Rejected", amount: "-200.00" }
];

// Function to assign random card icons
const getRandomCardLogo = () => {
  const logos = [visaLogo, mastercardLogo, amexLogo];
  return logos[Math.floor(Math.random() * logos.length)];
};

const TransactionTable = () => {
  return (
    <div className="transaction-container">
      <h2 className="title">Recent Transactions</h2>
      <p>Card Overview</p>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>
                <img src={getRandomCardLogo()} alt="Card Logo" className="card-logo" />
                {tx.card} <span className="card-type">{tx.type}</span>
              </td>
              <td>{tx.date} <span className="time">{tx.time}</span></td>
              <td className={`status-${tx.status.toLowerCase()}`}>{tx.status}</td>
              <td>{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
