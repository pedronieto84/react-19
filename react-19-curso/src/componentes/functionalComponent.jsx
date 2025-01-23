// Se le llama functional component porque es una función

const functionalComponent = (props) => {
    return (
        <>
            <h1>Functional Component</h1>
            <p>Props Variable: {props.propsFunctional1}</p>
            <p>Props String: {props.propsFunctional2String}</p>
            <p>Props Number: {props.propsFunctional3Number}</p>
            <p>Props Object: {props.propsFunctional4Object.nombre}</p>
        </>
    )
}

export default functionalComponent;