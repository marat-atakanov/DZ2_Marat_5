import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


export default function Calculator() {
    const [valueOne, setValueOne] = useState("")
    const [valueTwo, setValueTwo] = useState("")
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const result = useSelector(state => state.result)

    const changeValueOne = (e) => {
        setValueOne(e.target.value)
        setError("");
    }

    const changeValueTwo = (e) => {
        setValueTwo(e.target.value)
        setError("")
    }


    const clearInput = () => {
        setValueOne("");
        setValueTwo("");
    }

    const plus = () => {
        if (valueTwo !== "" && valueOne !== "") {
            dispatch({
                type: "PLUS",
                payload: {
                    valueOne: valueOne,
                    valueTwo: valueTwo
                }
            })
            clearInput();
        } else {
            setError("Fill both inputs!")
        }
    }
    const minus = () => {
        if (valueTwo !== "" && valueOne !== "") {
            dispatch({
                type: "MINUS",
                payload: {
                    valueOne: valueOne,
                    valueTwo: valueTwo
                }
            })
            clearInput();
        } else {
            setError("Fill both inputs!")
        }
    }
    const multiply = () => {
        if (valueTwo !== "" && valueOne !== "") {
            dispatch({
                type: "MULTIPLY",
                payload: {
                    valueOne: valueOne,
                    valueTwo: valueTwo
                }
            })
            clearInput();
        } else {
            setError("Fill both inputs!")
        }
    }
    const divide = () => {
        if (valueTwo !== "" && valueOne !== "") {
            dispatch({
                type: "DIVIDE",
                payload: {
                    valueOne: valueOne,
                    valueTwo: valueTwo
                }
            })
            clearInput();
        } else {
            setError("Fill both inputs!")
        }
    }


    return (
        <>
            <div>
                <input type="number" onChange={changeValueOne} value={valueOne}/>
                <input type="number" onChange={changeValueTwo} value={valueTwo}/>
            </div>
            <div>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
            </div>
            <h1>{result}</h1>
            <h2>{error}</h2>
        </>
    )
}