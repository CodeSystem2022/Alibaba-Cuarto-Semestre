import  { forwardRef, useRef } from "react";

const InputText = forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    );
});
InputText.displayName = "InputText";

const ExampleRef = () => {
    const inputFocus = useRef(null);

    const handleButtonClick = () => {
        console.log("Diste Click al boton");
        inputFocus.current.focus();
    };

    return (
        <>
            <InputText ref={inputFocus} />
            <button onClick={handleButtonClick}>Click Ref</button>
        </>
    );
};

export default ExampleRef;