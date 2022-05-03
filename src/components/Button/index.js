import './Button.scss'

const Button = ({name, buttonSetter, id}) => {
    return (
        <>
            <button className='button' onClick={() => {buttonSetter(name, id)}}>{name}</button>
        </>
    )
}
export default Button
