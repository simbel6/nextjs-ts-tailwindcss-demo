import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return <div>
    <form>
      <div>
        <label htmlFor="">用户名：</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">用户名：</label>
        <input type="text" />
      </div>
      <div>
        <button>登录</button>
      </div>
    </form>
  </div>
}

export default Login