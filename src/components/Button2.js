function handleClick() {
    alert('Button 2 was clicked!');
}

function Button2({label, bgColor, name}) {
    return (
        <button onClick={handleClick} className={`btn btn-${bgColor}`} name={name}>{label}</button>
    );
}

export default Button2;