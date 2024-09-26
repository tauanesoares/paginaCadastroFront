import React from "react" 
import styled from "styled-components"

const ModeloFormulario = styled.form`
    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    width: 420px;
`


export default function Inicio() {
    return <ModeloFormulario> 
    <input
        type="text" name="nome"
        placeholder="Nome" required/> 
    <input
        type="email" name="email"
        placeholder="Email@mail.com" required/>
    <input
        type="password" name="senha" 
        placeholder="******" required/> 
    <input
        type="date" name="nascimento" 
        required/>
    <input type="submit" value="Cadastrar"/> 

</ModeloFormulario>
}