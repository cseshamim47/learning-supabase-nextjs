export default function Login(){


    return <form action="/auth/login" method="post" className="m-5">
        <label htmlFor="email">Email</label>
        <input name="email" className="border border-blue-700"/>
        <label htmlFor="password">Password</label>
        <input name="password" className="border border-blue-700" type="password"/>
        <button>Sign in</button>
    </form>
}