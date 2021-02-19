import './Login.css';

function Login() {
  return (
    <div className="Login">
        <header>
            <title>Login</title>
            <meta charset="utf-8"/>
        </header>

        <body>
            <head>Login</head> 
            <div id="con_right">
                <main>
                    <form>
                        First Name:<input type="text" name="firstName" id="firstName"></input><br/>
                        Last Name:<input type="text" name="lastName" id="lastName"></input><br/>
                        Country:<input type="text" name="country" id="country"></input><br/>
                        E-mail:<input type="text" name="email" id="email"></input><br/>
                        Address:<input type="text" name="address" id="address"></input><br/>
                        City:<input type="text" name="city" id="city"></input><br/>
                        State:<input type="text" name="state" id="state"></input><br/>
                    </form>
                </main>
            </div>
        
            <footer>
                <small><i>Copyright &copy; 2020 UNL Computer Engineering</i></small><br/>
            </footer>

        </body>
    </div>
  );
}

export default Login;
