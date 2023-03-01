import React, {useState} from "react"
import DocReader from "./DocumentReader"
import Rubric from "./RubricBox"
import XLSX from "xlsx"
import Hierarchy from "./Dropdown_Gen"

export default function MainBody() {
    const[jsonData, setData] = useState([]);
    const handleFile = async(e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.readFile(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[3]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1, blankrows:false})
        setData(jsonData)
    }
    
    const Hierarchies= [];
    const HierarchyMap = new Map();

    for(let data in jsonData){
        if(data == 0){
            continue;
        }
        if(HierarchyMap.has(jsonData[data][2])){
            HierarchyMap.get(jsonData[data][2]).addItem(jsonData[data]);
        }
        else{
            HierarchyMap.set(jsonData[data][2], new Hierarchy(jsonData[data], false));
            Hierarchies.push(HierarchyMap.get(jsonData[data][2]));
        }
    }

    return (
        <div>
        <input type="file" onChange={(e) => handleFile(e)}/>
        <div className="mainBody">
            <DocReader />
            <Rubric />
        </div>
        </div>
    )
}