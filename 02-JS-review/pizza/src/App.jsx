function Pizza({name, text}) {
  return(
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <Pizza name={'hi'} text={'hello world'} />
    </div>
  )
};

export default App;