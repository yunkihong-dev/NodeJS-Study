import React from "react";
import {useParams} from "react-router-dom";
import BasicButton from "../../components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import TodoAddModal from "./components/Modal/add-modal";
import TodoList from "./components/List/todo-list";
const TodoPage = () =>{
    const params = useParams();
    console.log(params);
    
    return (
    <>
        <TodoAddModal/>
        <S.Wrapper>
            <S.Container>
                <S.Title>List</S.Title>
                <S.Content>
                    <TodoList/>
                </S.Content>
                <S.ButtonBox>
                    <BasicButton variant = {"primary"} size={"full"}>
                        추가
                    </BasicButton>
                </S.ButtonBox>
            </S.Container>
        </S.Wrapper>
    </>
    );
};
export default TodoPage;
 
const Wrapper = styled.div`
    height: calc(100vh - 60px); 
    padding-bottom: 60px;
    ${flexCenter};
`;
const Container = styled.div`
    width: 420px;
    height: 100%;
    background-color: ${({ theme }) => theme.PALETTE.white}; 
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); 
    position: relative;
`;
const Title = styled.h1`
    background-color: ${({ theme }) => theme.PALETTE.primary[300]}; 
    color: ${({ theme }) => theme.PALETTE.fontColor};
    padding-left: 32px;
    height: 32px;
    ${flexAlignCenter};
`;

const Content = styled.div`
    width: 100%;
    height: calc(100% - 32px); 
    padding-bottom: 64px; 
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const ButtonBox = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    `;

const S = {
    Wrapper, 
    Container, 
    Title, 
    ButtonBox,
    Content
};