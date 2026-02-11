
function InputErrorMsg({msg}: {msg?:string}) {
    return (
        <p className="text-red-600 block text-start mb-5">{msg}</p>
    )
}

export default InputErrorMsg
