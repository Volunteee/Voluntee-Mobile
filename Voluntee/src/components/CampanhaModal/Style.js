import styled from "styled-components";

export const PatientModal = styled.View`
    flex: 1;
    align-items:center ;
    justify-content: center ;
    background-color: rgba(0, 0, 0, 0.6) ;
`

export const ModalContent = styled.View`
    width: 90% ;
    padding: 30px 30px 10px ;
    border-radius: 10px ;
    background-color: #fff ;
    align-items:center ;
`

export const ModalText = styled.Text`
    width: 270px ;
    font-size: 16px ;
    line-height: 22px ;
    text-align: center ;
    margin-top: 10px ;
    font-Family: "Lexend_600SemiBold";
`

export const RecordImage = styled.Image`
    width: 40% ;
    height: 48px;
    border-radius: 10px ;
`

export const ButtonClose = styled.TouchableOpacity `
    position: 'absolute';
    left: 150;
    bottom: 15;
    
    z-Index: 1;
    
`