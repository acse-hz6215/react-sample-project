/*
   For commenting:
   - Use "//" for regular JavaScript single-line comments.
   - Use "{/* *'/}" within JSX structure for comments.
*/

import "./ExpenseItem.css";

function ExpenseItem(props)
{
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()} </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
