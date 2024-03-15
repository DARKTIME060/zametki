import { FaTable,FaList, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useState } from "react"
import { useContext } from "react";
import { Context } from "../context/Context";

function Notes() {
    const [active,setActive] = useState(true)
    const {lang,data,deleteData,editData,value} = useContext(Context)

    
  return (
    <div>
        <div className="container">
            <div className="notes__top">
                <h2 className="notes__title">{lang.all}</h2>
                <button className="notes__btn" onClick={()=>setActive(!active)}>
                    {
                        active ? <>
                        <FaList />
                        <span>{lang.list}</span>
                        </> : <>
                        <FaTable />
                        <span>{lang.table}</span>
                        </>
                    }
                </button>
            </div>
            <div className={`notes__data ${active && 'active'}`}>
                {
                    data.filter(el =>{
                        if (value.trim() === '') {
                            return el
                        }else if (el.title.toString().toLowerCase().includes(value.toLowerCase())) {
                            return el
                        }
                    }).map((note)=>{
                       return <div key={note.id} className="note">
                        <div className="note__top">
                            <h3 className="note__title">{note.title}</h3>
                            <p className="note__date">{note.date}</p>
                        </div>
                        <p className="note__text">{note.text}</p>
                        <div className="note__button">
                            <button className="note__edit-btn" onClick={()=>editData(note)}>
                                <FaPencilAlt />
                                <span>{lang.edit}</span>
                            </button>
                            <button className="note__del-btn" onClick={()=>deleteData(note.id)}>
                                <FaTrashAlt />
                                <span>{lang.del}</span>
                            </button>
                        </div>
                       </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Notes