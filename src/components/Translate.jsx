import React, { useState } from 'react';
import styled from "styled-components";
import Flag from 'react-world-flags';

// Criação do componente com o uso de props transitórias
const TranslateContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    justify-content: right;
    width: 100%;
    bottom: 10vh;
`;

const CustomSelect = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
`;

const Dropdown = styled.div`
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    top: 40px;
    right: 10px;
    z-index: 1001;
    width: 120px;
    display: ${({ $show }) => ($show ? 'block' : 'none')}; /* Usando prop transitória $show */
`;

const Option = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const Translate = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Português');

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const handleSelect = (language, code) => {
        setSelectedLanguage(language);
        setShowDropdown(false);
    };

    return (
        <TranslateContainer>
            <CustomSelect onClick={toggleDropdown}>
                <Flag code={selectedLanguage === 'Português' ? 'BR' : 'US'} style={{ width: 20, marginRight: 8 }} />
                {selectedLanguage}
            </CustomSelect>
            {/* Usando $show para evitar passar a prop show para o DOM */}
            <Dropdown $show={showDropdown}>
                <Option onClick={() => handleSelect('Português', 'BR')}>
                    <Flag code="BR" style={{ width: 20, marginRight: 8 }} />
                    Português
                </Option>
                <Option onClick={() => handleSelect('English', 'US')}>
                    <Flag code="US" style={{ width: 20, marginRight: 8 }} />
                    English
                </Option>
            </Dropdown>
        </TranslateContainer>
    );
}

export default Translate;
