import React, { useState, useEffect } from "react";



let AtmComponent = (props)=>{

    const [inputNumber, setInputNumber] = useState(0);
    const [bankNotes, setBankNotes] = useState(0);
    const [bankNotesCount, setBankNotesCount] = useState(0);

    const handleInputChange = (event) => {
        setInputNumber(event.target.value);
      };

    const handleClick = () => {
        let num = inputNumber;
        let totalNoteCount = 0;
        let noteValues = {
                rs2000: 2000,
                rs1000: 1000,
                rs500: 500,
                rs200: 200,
                rs100: 100,
                rs50: 50,
                rs20: 20,
                rs10: 10,
                rs5: 5,
                rs2: 2,
                rs1: 1
            }
        let notes = {
            rs2000: 0,
            rs1000: 0,
            rs500: 0,
            rs200: 0,
            rs100: 0,
            rs50: 0,
            rs20: 0,
            rs10: 0,
            rs5: 0,
            rs2: 0,
            rs1: 0
        }

        for (let value in noteValues) {
            notes[value] = Math.floor(num / noteValues[value]);
            num = num % noteValues[value];
            console.log(value + ": " + notes[value])
        }

        for (let noteCount in notes) {
            totalNoteCount += notes[noteCount]
        }

        console.log(totalNoteCount);

        setBankNotesCount(totalNoteCount);
        setBankNotes(notes);       
    }




    return(

        <>
        <div class="container">
            <h1> ATM </h1>
            <input className="form-control" type="number" value={inputNumber} onChange={handleInputChange}></input>
            <button className="btn btn-primary" onClick={handleClick}> Withdraw </button>

            <p> clicked Num {Object.entries(bankNotes).map(([bankNote, count]) =>
                <p> {bankNote} : {count} </p>
            )} </p>
            <p> Total Bank notes: {bankNotesCount}</p>
            </div>
        </>
    )

}

export default AtmComponent;