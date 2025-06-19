import estilo from "./Cadastro.module.css"

export function Cadastro(){

    return(
        <main className={estilo.container}>
            <section>
                <h1>Cadastre-se</h1>
                <form action="submit">
                    <label htmlFor="username">Nome: </label>
                    <input type="text" name="username" placeholder="Digite seu nome"/>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" placeholder="Digite sua senha"/>
                    <label htmlFor="password2">Confirme sua senha: </label>
                    <input type="password" name="password2" placeholder="Confirme aqui sua senha"/>
                    <label htmlFor="categoria">Categoria de usuario: </label>
                    <select name="categoria">
                        <option value="C">Comum</option>
                        <option value="A">Admininstrador</option>
                    </select>
                    <button>Cadastrar</button>
                </form>

                
            </section>

        </main>
    )
}