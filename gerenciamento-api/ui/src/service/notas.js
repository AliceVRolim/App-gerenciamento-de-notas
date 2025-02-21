import {http} from './config'


export default{

    listar: () =>{
       return http.get('')
    },

salvar: (notas) =>{
    return http.post('/inserir',notas)

    } 
}