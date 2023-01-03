import './style.scss'


function Login() {
   return (
      <>
         <div className="login-container container-main">
            <div className='login-card'>

               {/* init from */}
               <form className="">
                  <div className='my-20'>
                     <h1>
                        BEM VINDO
                     </h1>
                  </div>




                  <div className="login-group">
                     <input required type="" className="login-input" />
                     <span className="login-highlight" />
                     <span className="login-bar" />
                     <label className='login-label'>Conta</label>
                  </div>
                  <div className="login-group">
                     <input required type="" className="login-input" />
                     <span className="login-highlight" />
                     <span className="login-bar" />
                     <label className='login-label'>Senha</label>
                  </div>

                  <div className='mt-30'>
                     <button className='login-btn'>
                        <div className="svg-wrapper-1">
                           <div className="svg-wrapper">

                             {/* icon ou img para animação*/}

                           </div>
                        </div>
                        <span>Entrar</span>
                     </button>
                  </div>
               </form>
            </div>

         </div>
      </>
   );
}

export default Login;