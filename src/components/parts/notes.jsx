import { useEffect, useRef, useState, createRef } from "react";

const MyNotes = () => {
	const [notes, setNotes] = useState("");
	const notefield = createRef();

	const saveNotes = () => {
		setNotes(notefield.current.value)

		window.localStorage.setItem("notes", notefield.current.value);
	}

	useEffect(() => {
		const notes = window.localStorage.getItem("notes");
		if (notes) {
			setNotes(notes);
		}
	}, [])

	return (
		<>
			<textarea ref={notefield} defaultValue={notes}></textarea>
			<button onClick={saveNotes}>Save</button>
		</>
	)
}

export default MyNotes