/*
   For commenting:
   - Use "//" for regular JavaScript single-line comments.
   - Use "{/* *'/}" within JSX structure for comments.
   */


import "./ExpenseItem.css";

function ExpenseItem()
{
    const expenseTitle = 'Car Insurance';

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()} </div>  {/* toISOString() method is a built-in method of the Date object*/}
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">20.0</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
