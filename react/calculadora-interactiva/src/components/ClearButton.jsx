const ClearButton = (props) => {
  return (
    <button 
      className="boton-clear"
      onClick={props.manejarClear}
      >
			{props.children}
    </button>
  )
}

export default ClearButton