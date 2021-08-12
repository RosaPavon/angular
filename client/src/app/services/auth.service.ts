import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url='https://www.googleapis.com/identitytoolkit/v3/relyingparty '

  private apikey = 'AIzaSyBJIgodeFqQNmSIYirir3UXU3KHVFANx1w'

  //Crear nuevo usuario

  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/singnupNewUser?key=[API_KEY]

  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor( private http: HttpClient) { }

  logout(){}

  login(usuario:UsuarioModel){}

  nuevoUsuario(usuario:UsuarioModel){

    const  authData = {
      /* email:usuario.email,
      password:usuario.password,
      esto es lo mismo pero menos limpio */
      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(
      `${this.url}/singnupNewUser?key=${this.apikey}`,
      authData
    )



  }

}
