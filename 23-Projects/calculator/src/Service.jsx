function Service({text, percentage, onSetPercentage}) {
    
    return (
      <div>
        <h4>{text}</h4>
        <select value={percentage} onChange={(e) => onSetPercentage(Number(e.target.value))} name="" id="">
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutle amazing! (20%)</option>
        </select>
      </div>
    )
  }
  
  export default Service