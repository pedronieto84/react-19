// Se le llama functional component porque es una función

const functionalComponent = ({childToParent}) => {
    const data = "Info del fill al pare"
    return (
        <>
            <h1>Functional Component</h1>
            <button onClick={()=> childToParent(data)}>
                Pasarle data al padre
            </button>
      
        </>
    )
}

export default functionalComponent;