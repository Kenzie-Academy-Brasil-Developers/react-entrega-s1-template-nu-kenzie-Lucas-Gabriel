import { Form } from "./components/Form";
import { Extract } from "./components/Extract"
import { useContext, useState } from "react"
import { CardSection } from "./components/CardSection";
import { Header } from "./components/Header";
import "./styles/index.scss"
import style from "./styles/modules/page.module.scss"
import { ThemeContext } from "./providers/ThemeContext";

function App() {
    const[noteList, setNoteList] = useState([]);

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

    const {
        isDark
    } = useContext(ThemeContext)

    const mainDivClass = isDark ? style.mainDivDark : style.mainDivLight

  return (
    <div className={mainDivClass}>
        <Header/>
        <div className="main-div">
            <Form addNote={addNote}/>
            <Extract valueSum={valueSum}/>
            <CardSection noteList={noteList} removeNote={removeNote}/>
        </div>
    </div>
  )
}

export default App
