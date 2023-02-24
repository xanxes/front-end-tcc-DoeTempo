// @ts-nocheck
import { Content } from './styles'
import iconImg from '../../assets/logo-login.png'
import authImg from '../../assets/autenticathor.png'


export function Login(){
    return (
      <Content>
        <div class="content">
        <div class="container">
          <div class="row flex-row-reverse">
          <div class="col-md-6 order-md-2" id='curve'>
              <img src={authImg} alt="Image" class="img-fluid" />
              </div>
            <div class="col-md-6 contents">
              <div class="row">
                <div class="col-md-8">
                  <div class="mb-4">
                  <img src={iconImg} alt="Image" class="img-fluid" />
                </div>
                <form action="#" method="post">
                  <div class="form-group first">
                    <label for="username">Login / email</label>
                    <input type="text" class="form-control" id="username" />
    
                  </div>
                  <div class="form-group last mb-4">
                    <label for="password">Senha</label>
                    <input type="password" class="form-control" id="password" />  
                  </div>
                  <input type="submit" value="Entrar" class="rounded-pill btn btn-primary" />

                </form>
                </div>
              </div> 
              
            </div>
          </div>

        </div>
        
      </div>
      </Content>
    )
}