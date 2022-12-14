import { Container, TaskText, Check, Icon, Button, ContainerEmpty, IconEmpty, TextTitle, TextSubTitle } from './styles';
import { FlatList, Text } from 'react-native';


export interface Task {
    id: number;
    name: string;
    done: boolean;
}


interface TaskListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}




export function TaskList({tasks, toggleTaskDone, removeTask } : TaskListProps ) {    
 
    return (

        <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
            return (
                <Container>
                    <Check
                        value={item.done}
                        onValueChange={() => toggleTaskDone(item.id)}                                               
                        color={item.done ? '#5E60CE' : undefined}                   
                    
                    />

                    <TaskText                        
                        isCheck={item.done}
                    >
                        {String(item.name)} 
                    </TaskText>

                    
                    <Button onPress={() => removeTask(item.id)}>
                        <Icon />
                    </Button>
                    
                </Container>
            )
            
        }}
        ListEmptyComponent={() => (
            <ContainerEmpty>
                <IconEmpty />

                <TextTitle>
                    Você ainda não tem tarefas cadastradas
                </TextTitle>
                <TextSubTitle>
                    Crie tarefas e organize seus itens a fazer
                </TextSubTitle>
            </ContainerEmpty>
        )}
      
    />
        
        
    )
}





