import React, { useState } from 'react';
import { Alert } from 'react-native';
import { 
    Container, 
    Header, 
    Image, 
    InputForm, 
    Input, 
    ButtonAdd, 
    Icon,
    ContainerTasks,
    TasksMaids,
    TasksCompleted,
    TextCount,
    ContainerInfoMaids,
    ContainerInfoCompleted,
    TextCompleted,
    
} from './styles';

import { Task, TaskList } from '../../components/TaskList';






export function Home(){

    
    const [isFocused, setIsFocused] = useState(false);
    

    const [Tasks, setTasks] = useState<Task[]>([]);


    const [TaskName, setTaskName] = useState('');

    const taskCompleted = Tasks.filter(item => item.done === true);
    
    const taskCounter = Tasks.length;

    

    function handleTaskAdd(){
        
        if(TaskName === ''){
            return Alert.alert(`Aviso`,`Digite uma terefa`);
        }

        const newTask = {
            id: new Date().getTime(),
            name: TaskName,
            done: false
        }       
        
        setTasks(prevState => [...prevState, newTask]);
        setTaskName('');
    }


    function handleTaskRemove(id: number){    
        
        Alert.alert(`Remover`,`Deseja remover esta tarefa? `,[
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(Tasks => Tasks.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);

    }


    function handleTaskDone(id: number){
        
        const updateTasks = Tasks.map(Tasks => ({ ...Tasks}))
        const foundItem = updateTasks.find(item => item.id === id);

        if (!foundItem)
         return;
        foundItem.done = !foundItem.done;
        setTasks(updateTasks);       
        
    }


    return (
        <>
        <Container>
            <Header>
                
                <Image />            
                

            </Header>
            <InputForm>
                <Input 
                    isFocused={isFocused}                    
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    onChangeText={text => setTaskName(text)}
                    value={TaskName}
                    
                />

                <ButtonAdd onPress={handleTaskAdd}>
                    <Icon />                   
                </ButtonAdd>
                
            </InputForm>
            <ContainerTasks>
                <ContainerInfoMaids>
                    <TasksMaids>
                        Criadas                        
                    </TasksMaids>

                    <TextCount>
                        {taskCounter}
                    </TextCount>
                </ContainerInfoMaids>

                <ContainerInfoCompleted>
                    <TasksCompleted>
                        Concluídas
                    </TasksCompleted>

                    <TextCompleted>
                        {taskCompleted.length}
                    </TextCompleted>
                </ContainerInfoCompleted>
                

            </ContainerTasks>


            
            <TaskList 
                tasks={Tasks}
                removeTask={handleTaskRemove}
                toggleTaskDone={handleTaskDone}
            />
            
        </Container>
        </>
    )
    
}

