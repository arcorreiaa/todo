import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    /*
    perguntas
    {id: 1, name: 'Comprar pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: false},
  
    */
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length+1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  
  const handleTaskStatus = (taskid: number) => {
    let newList = [...list];
    const listCrowd = newList.map((item) => {
      if(item.id === taskid){
        item.done = !item.done;
      }
      return item;
    });
    setList(listCrowd);
  }

  const handleTaskdelete = (taskid: number) => {
    let newList = [...list];
    const listCrowd = newList.filter((item, index, newList) => {
      return item.id !== taskid;
    });
    setList(listCrowd);
  }


  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        
        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item} 
            onChangeStatus={handleTaskStatus}
            onDel={handleTaskdelete}/>
        ))}

      </C.Area>
    </C.Container>
  )
} 

export default App;