import { createContext, useState } from "react"
import { ru, uz } from "../language"
import { useEffect } from "react"

export const Context = createContext()

function ContextProvider({ children }) {
  function getStorage() {
    let data = localStorage.getItem("notes")
    if (data) {
      return JSON.parse(localStorage.getItem("notes"))
    }else{
      return []
    }
  }
  const [flag, setFlag] = useState(false)
  const [lang, setLang] = useState(ru)
  const [value, setValue] = useState('')
  const [data, setData] = useState(getStorage)
  const [dataEdit,setDataEdit] = useState({item:{},edit:false})
  const [active,setActive] = useState(false)    
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')


  function changeLang(til) {
    til == 'ru' ? setLang(ru) : setLang(uz)
    setFlag(!flag)
  }


  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(data))
  },[data])

  function addData(newData) {
    setData([newData,...data])
  }

  function deleteData(id) {
    setData(data.filter(item => item.id != id))
  }

  function updateData(id,el) {
    setData(data.map(item => item.id == id ? el : item))
    setDataEdit({
      item:{},
      edit:false
    })
  }

  function editData(el) {
    setActive(true)
    setDataEdit({
      item:el,
      edit:true
    })
    setTitle(el.title)
    setContent(el.text)
  }

  return (
    <Context.Provider value={{ flag, lang, changeLang, value, setValue, data, addData, deleteData,active,setActive,editData,updateData,dataEdit,setDataEdit,title,setTitle,content,setContent }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider