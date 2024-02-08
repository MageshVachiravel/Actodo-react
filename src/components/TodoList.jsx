import { useState } from "react"
import ListItem from "./ListItem"

function TodoList(){

    const [listArr,setListArr] = useState([
        {
            id:1,
            todo:"Go to gym"
        },
        {
            id:2,
            todo:"Read book 10 Pages"
        },
        {
            id:3,
            todo:"Eat heathly food"
        }
    ])

    return(
        <div className="bg-[#8770e1b9] px-5 py-2.5 border rounded flex-grow">
                <h1 className="text-2xl font-medium mb-1">Today's Activity</h1>
                {
                    listArr.length === 0? <p className="text-center p-5 text-xl text-zinc-900">You haven't added any activity yet</p>:""
                }
                {
                    listArr.map((item,index)=>{
                        return <ListItem todo={item.todo} index={index} id={item.id} listArr={listArr} setListArr={setListArr}></ListItem>
                    })
                }
        </div>
    )

}

export default TodoList 