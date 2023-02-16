import peoplesImg from '../../assets/peoples.png'
import { Container, Content } from './styles'

export function Pessoas(){
    return (
    <Container>
        <Content>
        <img className='peoples' src={peoplesImg} alt="Pessoas" />
        </Content>
    </Container>
    )
}