import './LoginAndRegister.css'

export const Login = () => {
    return (
        <main id="login">
            <div className="login-side">
                <img className="side-img" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="login-wrap">
                <h2>Welcome back</h2>
                <form action="post" id="login-form">
                    <div className="username-wrap">
                        <label for="username"><i className="fa-solid fa-user-large"></i></label>
                            <input type="text" id="username" placeholder="Username" />
                            <div className="reject-accept">
                                <i className="fa-solid fa-circle-check accepted"></i>
                                <i className="fa-solid fa-ban rejected"></i>
                            </div>
                    </div>
                    <div className="password-wrap">      
                        <label for="password"><i class="fa-solid fa-unlock"></i></label>
                            <input type="password" id="password" placeholder="Password" />
                            <div className="reject-accept">
                                <i className="fa-solid fa-circle-check accepted"></i>
                                <i className="fa-solid fa-ban rejected"></i>
                            </div>
                    </div>
                    <button>Sign in</button>
                    <p>
                        Don't have an account?
                        <a href="#">Register</a>
                    </p>
                </form>
            </div>
        </main>
    );
}