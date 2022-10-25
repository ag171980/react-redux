import './notask.css'

export default function notask({ word = [] }) {
    return (
        <div className="notask">
            <span>😄</span>
            <p>You don't have any tasks called to: <b>{word}</b></p>
        </div>
    )
}