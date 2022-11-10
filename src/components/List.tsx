import React from "react"
import {Sub} from '../types'

interface Props {
  subs: Array<Sub>
}

const List: React.FunctionComponent<Props> = ({subs}) => {

    return (
        <ul>
        {
          subs.map( sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={sub.nick} />
                <h4> {sub.nick} ( <small>{sub.subMonths}</small> ) </h4>
                <p> {sub.description?.toString().substring(0, 100)} </p>
              </li>
            )
          })
        }
      </ul>
    )
}
export default List