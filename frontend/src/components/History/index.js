import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ConfirmModal from '../Modal'
const History = () => {
    const [savedCalc, setSavedCalc] = useState([])
    const [dupData, setDupdata] = useState([])
    const [verify, setVerify] = useState(false)



    // Getting calculator history from Backend by using axios get api
    useEffect(() => {
        axios.get("http://localhost:3001/history")
            .then((res) => {
                setDupdata(res.data)
                return setSavedCalc(res.data)

            })
    }, [])

    // Performing the axios delete api for  deleting single calculator history user want
    function onSingleDelete(id) {
        axios.delete("http://localhost:3001/history/" + id)
            .then((res) => {
                console.log(res)
                const filteredData = dupData.filter((each) => {
                    return each._id !== id
                })
                setDupdata(filteredData)
                setSavedCalc(filteredData)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // Performing the axios delete api for  deleting all calculator history 
    function onDeleteHistory() {
        setVerify(true)
    }

    function onVerifyClose(result) {
        if (!result) {
          setVerify(false)
          return
        }
        axios.delete("http://localhost:3001/history/")
            .then((res) => {
                setSavedCalc([])
                window.location.reload()
            })
            
            .catch((err) => {
                console.log(err)
            })
      }

    return (
        <>
            <div className='d-flex justify-content-between w-50 mt-3'>

                <span className="display-6 mx-5">Calculator History</span>
                <button type="button" className="btn btn-danger float-middle  my-1" onClick={onDeleteHistory}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                    </svg>
                    Delete All
                </button>
            </div>
            <div className='mt-5'>

                <ul style={{ listStyleType: "none" }}>
                    {savedCalc.map((each) => {
                        return <li key={each._id} className='mt-3 shadow-lg rounded p-3 mb-3 bg-body w-50'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span className='display-6 ' style={{ fontSize: 26 }}>InputGiven: {each.inputVal} Result: {each.result} </span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" color='red' className="bi bi-trash mt-1" viewBox="0 0 16 16" onClick={(e) => onSingleDelete(each._id)}>
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </div>
                            </div>

                        </li>
                    })}
                </ul>
            </div>
            {verify?<ConfirmModal onClose={onVerifyClose}/>:""}
        </>
    )
}

export default History