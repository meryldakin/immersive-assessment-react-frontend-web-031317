import React from 'react'
import Transaction from './Transaction.js'

const TransactionsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {props.transactions.map(transaction => <Transaction posted_at={transaction.posted_at} id={transaction.id} description={transaction.description} category={transaction.category} amount={transaction.amount}/>)}

      </tbody>
    </table>
  )
}

export default TransactionsList
