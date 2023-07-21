import { styled } from "styled-components";

const Container = styled.div`
    position: relative;
    max-width: 1180px;
    width: 100%;
    margin: auto;
    @media screen and (max-width: 375px) {
        width: 343px;
        height: 142px;
        margin-top: 508px;
        padding: 24px;
        border-radius: 3px;
        background: #FFF;
    }
    @media screen and (max-width: 425px) {
        width: 343px;
        height: 142px;
        margin-top: 508px;
        padding: 24px;
        border-radius: 3px;
        background: #FFF;
    }
    @media screen and (max-width: 525px) {
        width: 343px;
        height: 142px;
        margin-top: 508px;
        padding: 24px;
        border-radius: 3px;
        background: #FFF;
    }
    @media screen and (max-width: 768px) {
        width: 343px;
        height: 142px;
        margin-top: 508px;
        padding: 12px;
        border-radius: 3px;
        background: #FFF;
    }
    @media screen and (max-width: 1180px) {
        border-radius: 3px;
        background: #FFF;
        padding-left: 15px;
        padding-right: 15px;
    }
`
const Wrap = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 375px) {
        width: 343px;
        row-gap: 20px;
        flex-direction: column;
    }
    @media screen and (max-width: 425px) {
        width: 343px;
        row-gap: 20px;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 525px) {
        width: 343px;
        row-gap: 20px;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 768px) {
        width: 343px;
        row-gap: 20px;
        flex-wrap: wrap;
    }
`
const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px
`
const Demographics = styled.input`
    color: var(--text-1, #0D263B);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    border: none;
    outline: none;
    width: 100%;
`
const Buttons = styled.button`
    width: ${ (props) => ( props.large ? "180px": "130px" ) };
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;    
    padding: 12px 16px;
    border: 1px solid ${ (props) => (props.large ? "#0061DF" : "#E6E9EC") };
    background: ${ (props) => ( props.large ? "#0061DF" : "transparent" ) };
    color: ${ (props) => ( props.large ? "#fff" : "#0D263B" ) };
    @media screen and (max-width: 375px) {
        display: flex;
        align-items: center;
        width: 137px;
        padding: 12px 40px;
        align-items: center;
        gap: 8px;
    }
    @media screen and (max-width: 425px) {
        display: flex;
        align-items: center;
        width: 137px;
        padding: 12px 40px;
        align-items: center;
        gap: 8px;
    }
    @media screen and (max-width: 525px) {
        display: flex;
        align-items: center;
        width: 145px;
        padding: 12px 40px;
        align-items: center;
        gap: 8px;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        padding: 12px 40px;
        align-items: center;
        gap: 8px;
    }
    @media screen and (max-width: 1180px) {
        display: flex;
        align-items: center;
        width: 160px;
        padding: 12px 40px;
        align-items: center;
        gap: 8px;
    }
`
const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 2px;
    border: 1px solid var(--border, #E6E9EC);
    @media screen and (max-width: 375px) {
        width: 343px;
        padding: 6px 0;
        border-bottom: 2px solid #E6E9EC;
        border-left: transparent;
        border-top: transparent;
        border-right: transparent;
    }
    @media screen and (max-width: 425px) {
        width: 343px;
        padding: 6px 0;
        border-bottom: 2px solid #E6E9EC;
        border-left: transparent;
        border-top: transparent;
        border-right: transparent;
    }
    @media screen and (max-width: 525px) {
        width: 343px;
        padding: 6px 0;
        border-bottom: 2px solid #E6E9EC;
        border-left: transparent;
        border-top: transparent;
        border-right: transparent;
    }
    @media screen and (max-width: 768px) {
        width: 343px;
        padding: 6px 0;
        border-bottom: 2px solid #E6E9EC;
        border-left: transparent;
        border-top: transparent;
        border-right: transparent;
    }
`
const FilterContainer = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    max-width: 920px;
    width: 100%
    height: 409px;
    border-radius: 5px;
    background: red;
    @media screen and (max-width: 525px) {
        width: 350px;
        position: inherit;
        margin-top: -95px;
    }
`
const Details = styled.div`
    height: 325px;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 525px) {
        padding: 10px;
    }
`
const Datas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    justify-content: flex-start;
`
const InputLines = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 525px) {
        flex-wrap: wrap;
    }
` 
const Title = styled.p`
    color: #0D263B;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`
const InputFilters = styled.input`
    width: 200px;
    height: 44px;
    padding: 12px 16px;
    border-radius: 2px;
    border: 1px solid #E6E9EC;
    outline: none;
    @media screen and (max-width: 525px) {
        width: 90px;
        height: 25px;
        padding: 5px;
    }
`
const ButtonFilter = styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    padding: 20px 30px;
    border-radius: 0px 0px 5px 5px;
    background: var(--bg-1, #F6F8F9);
    @media screen and (max-width: 525px) {
        justify-content: center;
        height: 70px;
    }
`
const getBackColor = (Color)=>{
    switch (Color) {
        case "sky": return  "#0061DF"; 
        case "white": return "#fff";
        case "dim": return "#0D263B";   
        default: return "#0061DF";
}
};
const getBorderColor = (Color)=>{
    switch (Color) {
        case "sky": return "none";
        case "white": return "1px solid var(--text-1, #0D263B)";
        default: return "none";
    }
};
const getColor = (Color)=>{
    switch (Color) {
        case "sky": return "#fff";
        case "white": return "#0D263B";
        default: return "none";
    }
};
const ActionButtons = styled.button`
    background: ${({Color})=>getBackColor(Color)};
    display: flex;
    width: 128px;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 2px;
    color: ${({Color})=>getColor(Color)};
    border: ${({Color})=>getBorderColor(Color)};
    @media screen and (max-width: 525px) {
        width: 100px;
        height: 35px;
        padding: 5px;
    }    
`

export {
    Container, 
    Wrap, Demographics, 
    Buttons, InputContainer, 
    ButtonWrap, FilterContainer,
    Details, InputFilters,
    Datas, ButtonFilter,
    ActionButtons,
    InputLines, Title
}