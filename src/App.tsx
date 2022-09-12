interface ButtonProps {
  title: string;
}

function Button({ title } : ButtonProps) {
  return (
    <button>
      {title}
    </button>
  );
}


function App() {
  return(
    <Button title={'ABOA'} />
  );
}

export default App;
