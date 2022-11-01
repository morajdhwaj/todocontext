import React, { useEffect, useState } from "react";
import { db, getToDB } from "./PuochDb";

const TODOList = (task, taskId ) => {
  const [list, setList] = useState([]); 
  console.log("THis is list  ", list);
  
  useEffect(() => {
    getToDBFun();
  }, []);
  
  async function getToDBFun() {
    const dataList = await getToDB();
    console.log("THis is Datalist  ", dataList);

    setList(dataList?.rows);
  }

  const removeTodo = async () =>{
    await removeTodo(taskId)
    await getToDBFun();
  }

   

  useEffect(() => {
    db.changes({
      since: "now",
      live: true,
    }).on("change", function (doc) {
      console.log("doc ==> ", doc);
      db.allDocs(
        { include_docs: true, descending: false },
        function (err, doc) {
          console.log("doc ==> ", doc);
          setList(doc.rows);
        }
      );
    });
  }, []);

 
  return (
    <div>
      {list.map((item,id) => {
        return (
          <ol key={id}>
            <li>{item.doc.task}</li>
            <button type="button" onClick={removeTodo} >Delete</button>
          </ol>
        );
      })}
    </div>
  );
};

export default TODOList;

