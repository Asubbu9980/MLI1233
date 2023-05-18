import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const btnValues = [
  ["C", "-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];



const Calculator = () => {

  const [inputVal, setInputValue] = useState('')
  const [firstVal, setFirstVal] = useState('')
  const [secVal, setSecVal] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')
  const [isB, setB] = useState(false)
  


  //Convert our inputs into float values and done arithematic operations
  function getAnswer() {
    switch (operator) {
      case "+":
        const addres = parseFloat(firstVal) + parseFloat(secVal)
        setResult(addres)
        break;
      case "-":
        const subres = parseFloat(firstVal) - parseFloat(secVal)
        setResult(subres)
        break;
      case "X":
        const multires = (parseFloat(firstVal) * parseFloat(secVal)).toFixed(2)
        setResult(multires)
        break;
      case "/":
        const divres = (parseFloat(firstVal) / parseFloat(secVal)).toFixed(4)
        setResult(divres)
        break;
      case "%":
        const percentres = (((parseFloat(firstVal) / 100) * secVal)).toFixed(4)
        setResult(percentres)
        break;
      default:
        break;
    }
  }

  // Just for getting numpad inputs further use for functionalities
  function handleOnchange(e) {
    e.preventDefault()
  }
  // Here organizing the inputs into first value ,second value and operator  
  function handleClick(e) {
    e.preventDefault()
    const value = e.target.value
    if (value === "C") {
      if (inputVal && result) {
        axios.post("http://localhost:3001/history", { inputVal, result })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        console.log("empty")
      }
      setFirstVal("")
      setSecVal("")
      setInputValue("")
      setOperator("")
      setResult("")

    }
    else if (value === "=") {
      setB(false)
      getAnswer()
    }
    else {

      if (value == parseInt(value) && (isB == false)) {
        setFirstVal((prev) => prev + value)

      }
      else if (value == parseInt(value) && (isB)) {
        setSecVal((prev) => prev + value)


      }
      else if (value != parseInt(value)) {
        if (value === "." && isB) {
          setSecVal((prev) => prev + value)
        } else if (value === "." && isB == false) {
          setFirstVal((prev) => prev + value)
        }

        else {
          setOperator(value)
          setB(true)
        }


      }
      setInputValue((prev) => prev + value)
    }
  }
  return (
    <>
      <div className='container d-flex justify-content-center mt-3'>
        <div className="card shadow-lg bg-body rounded">
          <div className="card-body position-relative">
            <input className='fs-5 w-100 form-control-lg' type='text' name='userinput' value={inputVal} onChange={(e) => handleOnchange(e)}></input>
            <p className='position-absolute top-50 end-0 translate-middle fw-semibold'>{result}</p>
          </div>

          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush ">
                <li className="list-group-item gap-2">{btnValues[0].map((values) => {
                  return <button value={values} key={values} name={values} type="button" onClick={(e) => handleClick(e)} className="btn btn-dark btn-lg m-3">{values}</button>
                })}</li>
                <li className="list-group-item">{btnValues[1].map((values) => {
                  return <button value={values} key={values} name={values} type="button" onClick={(e) => handleClick(e)} className="btn btn-dark btn-lg m-3">{values}</button>
                })}</li>
                <li className="list-group-item"> {btnValues[2].map((values) => {
                  return <button value={values} key={values} name={values} type="button" onClick={(e) => handleClick(e)} className="btn btn-dark btn-lg m-3 ">{values}</button>
                })}</li>

                <li className="list-group-item"> {btnValues[3].map((values) => {
                  return <button value={values} key={values} name={values} type="button" onClick={(e) => handleClick(e)} className="btn btn-dark  btn-lg m-3">{values}</button>
                })}</li>
                <li className="list-group-item"> {btnValues[4].map((values) => {
                  if (values === "=") {
                    return <button value={values} key={values} name={values} type="button" onClick={(e) => handleClick(e)} className="btn btn-danger w-50 btn-lg">{values}/Ans</button>
                  }

                  else {
                    return <button value={values} key={values} name={values} type="button" onClick={(e) => handleClick(e)} className="btn btn-dark btn-lg m-3">{values}</button>
                  }

                })}</li>
              </ul>







            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator