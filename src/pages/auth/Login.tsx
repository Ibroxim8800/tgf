import { useContext, useState } from "react";
import styled from "styled-components";

// img background
import backFon from "../../assets/img/loginBackground.png";
import { ILogin, MyContext, IUser } from "../../context/Context";

export default function Login() {
  const { userLogin } = useContext<ILogin>(MyContext);

  const [user, setUser] = useState<any>({
    phoneNumber: "",
    password: "",
  });

  return (
    <StyledLogin backfon={backFon}>
      <form className="container" onSubmit={userLogin && (()=>userLogin(user))}>
        <img src={backFon} className="back" />
        <h1>Welcome back!</h1>
        <div className="information">
          <p>Phone number</p>
          <input
            type="text"
            value={user.phoneNumber}
            onChange={(e) =>
              setUser((p:any) => ({ ...p, phoneNumber: e.target.value }))
            }
          />
        </div>
        <div className="information">
          <p>Password</p>
          <input
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser((p:any) => ({ ...p, password: e.target.value }))
            }
          />
        </div>
        <button
          className="buttonLogin"
          type="submit"
          
        >
          Login
        </button>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.div<ILogin>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0;
    z-index: -1;
  }

  .container {
    max-width: 425px;
    margin: 0 auto;
    padding: 38px;
    background: #fff;
    box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
    border-radius: 16px;
  }
  h1 {
    margin-bottom: 21px;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    color: #181c25;
  }
  p {
    margin-bottom: 8px;
    width: max-content;
    font-size: 14px;
    color: #181c25;
  }
  input {
    padding: 0 20px;
    margin-bottom: 18px;
    width: 100% !important;
    height: 48px;
    background: #fdfdfd;
    border: 1px solid rgba(137, 146, 169, 0.2);
    border-radius: 16px;

    &:focus {
      outline: none;
    }
  }
  button {
    margin-top: 35px;
    cursor: pointer;
    width: 349px;
    height: 48px;
    background: #3b72ff;
    border-radius: 16px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    border: none;

    &:focus {
      outline: none;
    }
  }
  .buttonLogin {
    color: white;
  }

  @media (max-width: 455px) {
    padding: 0 17px;

    .container {
      width: 100%;
      padding: 30px 17px;


      button {
        width: 100%;
      }
    }
  }
`;
