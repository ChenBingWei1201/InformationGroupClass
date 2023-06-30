import { useState } from "react";
interface Props {
    items: string[];
    heading: string;
    onSlectItem: (item: string) => void;
}   

function ListGroup({items, heading, onSlectItem} : Props) {
    const countries = items;
    
    const [selectItem, setSlectItem] = useState(-1);
    
    const changeSlect = (id: number) => {
        setSlectItem(id);
    };
    return (
    <> 
        <h1>{heading}</h1>
        {countries.length === 0 && <p>no item found</p>}
        <ul className="list-group">
            {countries.map((item, index) => (
            <li className={selectItem === index ? "list-group-item active" : "list-group-item"}
            key={item} onClick={() => {
                changeSlect(index); 
                onSlectItem(item);
            }}>{item}</li>
        ))}
        </ul>
    </>
  );
}

export default ListGroup;
