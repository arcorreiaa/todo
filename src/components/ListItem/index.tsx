import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';
type Props = {
    item: Item,
    onChangeStatus: (taskid: number) => void,
    onDel: (taskid: number) => void,
}

export const ListItem = ({item, onChangeStatus, onDel}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);
    
    const handleChange = (e: any)=>{
        onChangeStatus(item.id);
        setIsChecked(e.target.checked)
    }
    
    const handleDelete = () => {
        onDel(item.id);
    }

    return (
        <C.Container done={isChecked}>
            
            <input type="checkbox" 
            checked={isChecked}
            onChange={handleChange}/>
            <label>{item.name}</label>
            
            <label className="delete" onClick={handleDelete}> Deletar</label>
        </C.Container>
    );
}