import PropTypes from "prop-types"


const Error = ({message}) => {
  return (
    <div>{message}</div>
  )
}

export default Error
Error.propTypes = {
    message:PropTypes.string
}