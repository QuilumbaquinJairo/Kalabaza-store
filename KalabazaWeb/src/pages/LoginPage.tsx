import { useEffect, useState } from "react";
import logoimg from "../assets/Kalabazalogo.webp";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const { login, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (user) navigate('/');
    }, [user, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const ok = await login(username, password);
      if (ok) {
        navigate('/');
      } else {
        alert('Credenciales inválidas');
      }
    };

  return (
    <div className="container-sm d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="m-5">
            <img src={logoimg} width={400} alt="LogoKalabaza" />
        </div>
        
        <div className="w-25 border-brown p-4 ">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label text-brown fw-bold">User: </label>
                    <input 
                        type="text"
                        id="user"
                        value={username}
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-brown fw-bold">Password: </label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
            <button className="btn btn-primary w-100" onClick={(e) => { e.preventDefault(); handleSubmit(e as any); }}>
                Ingresar
            </button>
        </div>    
        
    </div>

  )
}
