import "./Style.css"
import { useState } from "react"
function Fram() {
    let [display, setDisplay] = useState(0)
    let [result, setResult] = useState(0)

    console.log(display)
    console.log(result + "result")
    return (
        <>
            <div className="mainDiv">
                <div className="display">
                    {display}
                    <h3>{result}</h3>
                </div>
                <div className="inputs" onClick={(e) => {
                    //console.log(display + "" + e.target.innerText)
                    if (e.target.innerText != '=' && e.target.innerText != 'CE') {
                        if (display === 0)
                            setDisplay(e.target.innerText)
                        //else if(e.target.innerText =='+'||e.target.innerText =='-')
                        else if (display[display.length - 1] == '+') {
                            console.log("ss")
                            setResult(result + (result === 0 ?
                                parseFloat(e.target.innerText) + parseFloat(display) : parseFloat(e.target.innerText)))
                            setDisplay(display + e.target.innerText + "")
                        }

                        else if (e.target.innerText == 'C') {
                            setDisplay(0);
                            setResult(0)
                        }


                        else if (display[display.length - 1] == '-') {
                            console.log("ss")
                            setResult(result - (result === 0 ?
                                parseInt(e.target.innerText, "10") - parseInt(display, "10") : parseInt(e.target.innerText, "10")))
                            setDisplay(display + e.target.innerText + "")
                        }


                        else if (display[display.length - 1] == 'x') {
                            console.log("ss")
                            setResult((result == 0 ? 1 : result) * (result === 0 ?
                                (parseFloat(e.target.innerText) * parseFloat(display)) : parseFloat(e.target.innerText)))
                            setDisplay(display + e.target.innerText + "")
                        }



                        else if (display[display.length - 1] == '/') {
                            console.log("ss")
                            setResult((result == 0 ? 1 : result) / (result === 0 ?
                                (parseFloat(e.target.innerText) / parseFloat(display)) : parseFloat(e.target.innerText)))
                            setDisplay(display + e.target.innerText + "")
                        }



                        else {
                            setDisplay(display + e.target.innerText + "")
                            let i = display.length - 1;
                            let no = "";
                            let count = 0;
                            while (i >= 0) {
                                if (display[i] == '+' || display[i] == '-' || display[i] == 'x') {
                                    count++;
                                    break;
                                }
                                no = no + display[i];

                                i--;
                            }
                            let ans = ""


                            ans = no + e.target.innerText;
                            console.log(ans + "ans")
                            if (e.target.innerText != '+' && e.target.innerText != '-' && e.target.innerText != 'x' && e.target.innerText != '/') {

                                if (count > 0) {
                                    //setResult(result-(parseInt(ans,"10"))%10)
                                    setResult(result + parseFloat(ans))
                                }
                            }
                        }
                    }
                }} >

                    <button className="btn">(</button>
                    <button className="btn">CE</button>
                    <button className="btn" >)</button>
                    <button className="btn">C</button>

                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn" >3</button>
                    <button className="btn">+</button>


                    <button className="btn">4</button>
                    <button className="btn">5</button>
                    <button className="btn" >6</button>
                    <button className="btn">-</button>


                    <button className="btn">7</button>
                    <button className="btn">8</button>
                    <button className="btn" >9</button>
                    <button className="btn">x</button>

                    <button className="btn">.</button>
                    <button className="btn">0</button>
                    <button className="btn" >=</button>
                    <button className="btn">/</button>


                </div>

            </div>


        </>
    )
}
export default Fram