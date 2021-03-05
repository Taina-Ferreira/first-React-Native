
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from '../screens/Login'
import Lista from '../screens/Lista'

const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
    Lista: {
        nome: "Lista",
        screen: Lista
    }
}

const Navegacao = createSwitchNavigator(Rotas)

export default createAppContainer(Navegacao)