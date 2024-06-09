function Age(props) {
    return <p>{props.age}</p>;
  }
  
  function Welcome(props) {
    const { age, name } = props;
    
    return (
      <div>
        {age > 18 && <Age age={age} />}
        {age !== undefined && <Age age={age} />}
        {age > 18 && age < 65 && <Age age={age} />}
        {age > 18 && age < 65 && name === "John" && <Age age={age} />}
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <Welcome key={index} age={25} name="John" />
        ))}
      </div>
    );
  }