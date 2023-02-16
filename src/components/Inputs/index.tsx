import {Container, Content} from './styles'



export function Campos() {

    return (
        <Container>
            <Content>
                <form name={"Cadastro"}>
                    <div className={"principal"}>
                        <h1>Voluntário</h1>
                        <input id="nome" type="text" className="nome" placeholder="Nome Completo"/>
                        <input id="cpf" type="Number" className="cpf" placeholder="CPF"/>
                        <input id="cep" type="Number" className="cep" placeholder="CEP"/>
                        <input id="email" type="email" className="email" placeholder="E-mail"/>
                        <input id="senha" type="password" className="senha" placeholder="Senha"/>
                        <input id="nascimento" type="date" className="nascimento" placeholder="Data de Nascimento"/>
                        <input id="cidade" type="text" className="cidade" placeholder="Cidade"/>
                        <input id="bairro" type="text" className="bairro" placeholder="Bairro"/>
                        <input id="rua" type="text" className="rua" placeholder="Rua"/>
                        <input id="numero" type="text" className="numero" placeholder="Número"/>
                        <button className={"submit"} type="submit"><p>Enviar</p></button>
                        <button className={"ong"} type="submit"><p>Sou uma ONG</p></button>
                    </div>
                </form>
            </Content>
        </Container>
    )
}