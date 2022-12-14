import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';


type TaskTextProps = {
    isCheck: boolean;
}


export const Container = styled.View`
    margin: 20px 24px 1px 24px;
    flex-direction: row;
    align-items: center;
    padding: 20px 8px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.Gray500};
    justify-content: space-between;
`;

export const TaskText = styled.Text<TaskTextProps> `
    font-size: 14px;    
    margin-left: 8px;
    margin-right: 8px;
    width: 235px;
    font-family: ${({ theme }) => theme.fonts.regular};    

    text-decoration: ${({ theme, isCheck }) => 
    isCheck ? 'line-through' : false
    };

    color: ${({ theme, isCheck }) => 
    isCheck ? theme.colors.Gray300 : theme.colors.Gray100
    };
        
`;

export const Icon = styled(AntDesign).attrs({
    name: 'delete'
})`

    color: ${({ theme }) => theme.colors.Gray300};
    font-size: 22px;
    
`;


export const Check = styled(Checkbox).attrs ( {  
    
     
    
})`
    border-radius: 500px;    
    margin-left: 12px;
    border: solid 2px #4EA8DE;   
`;

export const Button = styled(TouchableOpacity)`
    margin-right: 8px;
`;




export const ContainerEmpty = styled.View`
    margin: 20px 24px;
    align-items: center;    
    padding-top: 48px;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.Gray400};
    
`;


export const IconEmpty = styled(Feather).attrs({
    name: 'clipboard'
})`

    color: ${({ theme }) => theme.colors.Gray400};
    font-size: 56px;
    margin-bottom: 16px;
`;


export const TextTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.Gray300};
`;


export const TextSubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.Gray300};
`;
