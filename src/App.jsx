import { Form } from "./components/Form";
import { Extract } from "./components/Extract"
import { useState } from "react"
import { CardSection } from "./components/CardSection";
import { Header } from "./components/Header";
import Logo from "./assets/Logo.svg"
import Icon from "./assets/icon.svg"
import LogoDark from "./assets/logo-dark.svg"
import "./styles/index.scss"

function App() {
    const[noteList, setNoteList] = useState([]);
    const[modeState, setModeState] = useState(false);

    const changeMode = ()=>{setModeState(!modeState)};

    const addNote = (cardData)=>{
        setNoteList([...noteList, cardData])
    }

    const removeNote = (id)=>{
        const newNotesList = noteList.filter((note)=>{
            return note.id != id;
        });

        setNoteList(newNotesList);

    }

    const valueSum = noteList.reduce((accumulator, currentNote)=>{
        return currentNote.type === "income" ? accumulator + parseInt(currentNote.value):
        accumulator - parseInt(currentNote.value)
    }, 0)

  return (
    <div className={modeState === true ? "dark" : ""}>
        <Header logo={Logo} icon={Icon} changeMode={changeMode} logoDark={LogoDark} darkState={modeState}/>
        <div className="main-div">
            <Form addNote={addNote}/>
            <Extract valueSum={valueSum}/>
            <CardSection noteList={noteList} removeNote={removeNote}/>
        </div>
    </div>
  )
}

export default App
