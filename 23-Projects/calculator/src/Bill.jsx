function Bill({sendBill, onSetBill}) {
  return (
    <div>
      <h4>How much was the bill?</h4>
      <input value={sendBill} onChange={(e) => onSetBill(Number(e.target.value))} type="text" />
    </div>
  );
}

export default Bill;
