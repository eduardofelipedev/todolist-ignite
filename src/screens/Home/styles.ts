import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TextInput, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';


type Props = {
    isFocused: boolean;
}


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.Gray600};
    flex: 1;
       
`;

export const Header = styled.View`
    height: 150px;
    background-color: black;
    margin-top: ${getStatusBarHeight()}px;    
    align-items: center;
    padding-top: 24px;   

`;

export const Image = styled.Image.attrs({
    source: require('../../assets/images/logo/logo.png')
})`
    width: 100px;
    height: 32px;    
`;

export const InputForm = styled.View`
    flex-direction: row;
    padding: 0px 24px;
    margin-top: -30px;   
`;

export const Input = styled(TextInput).attrs({
    placeholder: 'Adicione uma nova tarefa',
    placeholderTextColor: '#808080',
    
    
})<Props>`
    height: 54px;
    flex: 1;
    font-size: 16px;
    margin-right: 8px;    
    background-color: ${({ theme }) => theme.colors.Gray500};
    border-radius: 6px;
    border: solid 1px ${({ theme }) => theme.colors.Gray700};
    padding: 16px;
    color: ${({ theme }) => theme.colors.Gray100};
    
    

    border: ${({ theme, isFocused }) => 
    isFocused ? theme.colors.PurpleDark : theme.colors.Gray700
    };
    
    
`;

export const ButtonAdd = styled(TouchableOpacity).attrs({
    activeOpacity: 0.9
})`
    background-color: ${({ theme }) => theme.colors.BlueDark};
    height: 54px;
    width: 54px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`; 

export const Icon = styled(Feather).attrs({
    name: "plus-circle"
})`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.Gray100};
`;

export const ContainerTasks = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 33px;
    padding: 0 24px;
    
`;


export const TasksMaids = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.Blue};
`;


export const TasksCompleted = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.Purple};
`;

export const TextCount = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.Gray200};
    margin-left: 8px;    
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.Gray400};
    width: 25px;
    height: 19px;
    padding: 2px 8px;
    font-family: ${({ theme }) => theme.fonts.bold};  

`;

export const ContainerInfoMaids = styled.View`
    flex-direction: row; 
    
`;


export const TextCompleted = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.Gray200};
    margin-left: 8px;    
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.Gray400};
    width: 25px;
    height: 19px;
    padding: 2px 8px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;



export const ContainerInfoCompleted = styled.View`
    flex-direction: row;
   
`;


