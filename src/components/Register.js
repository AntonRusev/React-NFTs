import './LoginAndRegister.css'

export const Register = () => {
    return (
        <main id="register">
        <div className="register-side">
            <img className="side-img" src="https://images.unsplash.com/photo-1646758489059-cddff648a193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className="register-wrap">
            <h2>Join us</h2>
            <form action="post" id="register-form">
                <div className="username-wrap">
                    <label for="username"><i className="fa-solid fa-user-large"></i></label>
                        <input type="text" id="username" placeholder="Username" />
                        <div className="reject-accept">
                            <i className="fa-solid fa-circle-check accepted"></i>
                            <i className="fa-solid fa-ban rejected"></i>
                        </div>
                </div>
                <div className="email-wrap">
                    <label for="email"><i className="fa-solid fa-at"></i></label>
                        <input type="text" id="email" placeholder="Email" />
                        <div className="reject-accept">
                            <i className="fa-solid fa-circle-check accepted"></i>
                            <i className="fa-solid fa-ban rejected"></i>
                        </div>
                </div>
                <div className="password-wrap">      
                    <label for="password"><i className="fa-solid fa-unlock"></i></label>
                        <input type="password" id="password" placeholder="Password" />
                        <div className="reject-accept">
                            <i className="fa-solid fa-circle-check accepted"></i>
                            <i className="fa-solid fa-ban rejected"></i>
                        </div>
                </div>
                <div className="repass-wrap">      
                    <label for="repass"><i className="fa-solid fa-unlock-keyhole"></i></label>
                        <input type="password" id="repass" placeholder="Repeat password" />
                        <div className="reject-accept">
                            <i className="fa-solid fa-circle-check accepted"></i>
                            <i className="fa-solid fa-ban rejected"></i>
                        </div>
                </div>
                <button>Sign up</button>
                <p>
                    Already have an account?
                    <a href="#">Login</a>
                </p>
            </form>
        </div>
    </main>
    );
}