import React, { useState } from "react";
import styled from "styled-components";
import Flag from "react-world-flags";
import { useLanguage } from "./LanguageContext";

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
    display: ${({ $show }) => ($show ? "block" : "none")};
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
    const { language, toggleLanguage } = useLanguage();

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const handleSelect = (lang) => {
        toggleLanguage(lang);
        setShowDropdown(false);
    };

    return (
        <TranslateContainer>
            <CustomSelect onClick={toggleDropdown}>
                <Flag code={language === "pt" ? "BR" : "US"} style={{ width: 20, marginRight: 8 }} />
                {language === "pt" ? "Português" : "English"}
            </CustomSelect>
            <Dropdown $show={showDropdown}>
                <Option onClick={() => handleSelect("pt")}>
                    <Flag code="BR" style={{ width: 20, marginRight: 8 }} />
                    Português
                </Option>
                <Option onClick={() => handleSelect("en")}>
                    <Flag code="US" style={{ width: 20, marginRight: 8 }} />
                    English
                </Option>
            </Dropdown>
        </TranslateContainer>
    );
};

export default Translate;
