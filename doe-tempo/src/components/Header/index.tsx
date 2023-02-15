
import iconImg from '../../assets/icon_return.svg'
import { Container, Content } from './styles'

export function Header(){
    return (
    <Container>
        <Content>
        <button type="button">
            <img src={iconImg} alt="Return" />
            <p>Voltar</p>
        </button>
        </Content>
    </Container>
    )
}