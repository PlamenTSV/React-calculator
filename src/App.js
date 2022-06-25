
import './App.css';
import {useState/*, useEffect*/} from "react";
/* eslint no-eval: 0 */

//Component to add the clicked button to the input field and to the expression to be solver
function NumberButton({name, changeValue}) {
  return <td><button onClick={() => changeValue(name)}>{name}</button></td>;
}

//Component to add the clicked operation symbol to the expression and clear the input field
function OperationButton({operation, setOperation}){
  return <td><button onClick={() => setOperation(operation)}>{operation}</button></td>;
}

//Component to clear both the expression and the input field and calculate the expression
function SolveButton({expression, resetFields}){
    //console.log(eval(expression));
    return <td><button onClick={() => resetFields(getAnswer(expression))}>=</button></td>;
}

//Component to clear both fields
function ClearButton({clearFields}){
  return <td><button onClick={() => clearFields()}>C</button></td>;
}

const getAnswer = (toSolve) => {
  return eval(toSolve)
}

export default function App(){
  let [expression, setExpression] = useState("");
  let [inputValue, setInputValue] = useState("");

  function changeValue(newValue){
    setInputValue(oldValue => oldValue + newValue);
    setExpression(oldValue => oldValue + newValue);
  }

  function changeCurrentOperation(_operation){
    if(_operation === "x")_operation = "*";
    if(_operation === "%")_operation = "*0.01"
    if(_operation === "a²"){
      setExpression(oldValue => "(" + oldValue + ")");
      _operation = "*(" + expression +")";
    }
    setExpression(oldValue => oldValue + _operation);
    setInputValue("");
  }

  function resetFields(answer){
    setExpression("");
    setInputValue(answer);
  }
  
  function clearFields(){
    setExpression("");
    setInputValue("");
  }

  return (
    <div>
      <div className="calc-body">
        <input type="text" className="expression-holder" value={expression} onChange={()=>{}}></input>
        <input type="text" className="calc-input" value = {inputValue} onChange={() => {}}></input>

           <div className = "buttons">
                <ClearButton operation="C" clearFields={clearFields}/>
                <OperationButton operation="/" setOperation={changeCurrentOperation}/>
                <OperationButton operation="x" setOperation={changeCurrentOperation}/>
                <OperationButton operation="a²" setOperation={changeCurrentOperation}/>
                
                <NumberButton name="1" changeValue={changeValue}/>
                <NumberButton name="2" changeValue={changeValue}/>
                <NumberButton name="3" changeValue={changeValue}/>
                <OperationButton operation="-" setOperation={changeCurrentOperation}/>
                
                <NumberButton name="4" changeValue={changeValue}/>
                <NumberButton name="5" changeValue={changeValue}/>
                <NumberButton name="6" changeValue={changeValue}/>
                <OperationButton operation="+" setOperation={changeCurrentOperation}/>
                
                <NumberButton name="7" changeValue={changeValue}/>
                <NumberButton name="8" changeValue={changeValue}/>
                <NumberButton name="9" changeValue={changeValue}/>
                <SolveButton operation="=" expression={expression} resetFields={resetFields}/>
                
                <OperationButton operation="%" setOperation={changeCurrentOperation}/>
                <NumberButton name="0" changeValue={changeValue}/>
                <NumberButton name="." changeValue={changeValue}/>
                <OperationButton operation="<=" setOperation={changeCurrentOperation}/>
                
          </div>

      </div>
    </div>
  );
};
