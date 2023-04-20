const Message = ({ className, children }) => {
    return (
        <div className={ `message py-2.5 px-5 rounded-2xl ${ className }` }>
            <p className="text-center">{ children }</p>
        </div>
    )
}

export default Message;