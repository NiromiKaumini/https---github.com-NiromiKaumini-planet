// app/login/page.tsx
import React from 'react';

const LoginPage = () => {
    return (
    
        <section className="Log">
            <div className="wap">
                <form action="">
                    <h1>Login</h1>
                    <div className="inputb">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="inputb">
                        <input type="password" placeholder="Password" required />
                        <i className='bx bxs-lock'></i>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot password</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register">
                        <p>Do not have an account?<a href="#">Register</a></p>
                    </div>
                </form>
            </div>
            
        </section>
    );
};

export default LoginPage;
