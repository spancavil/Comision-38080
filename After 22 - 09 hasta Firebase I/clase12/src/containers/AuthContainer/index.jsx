import React, { useEffect, useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import "./styles.scss";

const AuthContainer = ({ handleClose, login, signUp }) => {
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [dismounting, setDismounting] = useState(false);

    useEffect(()=> {
        if(dismounting) {
            setTimeout(()=> {
                handleClose();
            }, 300)
        }
    }, [dismounting, handleClose])

    console.log(email, password);

    const handleLogin = () => {
        if (login) {
            //Login logic
            if (email === "") {
                setErrorEmail("Required field");
                return;
            }
            if (password === "") {
                setErrorPassword("Required field");
                return;
            }
            setErrorEmail("");
            setErrorPassword("");
        } else {
            //Signup logic

            if (email === "") {
                setErrorEmail("Required field");
                return;
            }
            if (password === "") {
                setErrorPassword("Required field");
                return;
            }
            if (confirmPassword !== password) {
                setErrorConfirmPassword("Passwords must match");
                return;
            }
            setErrorEmail("");
            setErrorPassword("");
            setErrorConfirmPassword("");
        }
    };

    return (
        <div className="form-container">
            <div className={!dismounting ? "form": "form-dismount"}>
                <h2>{login ? "Login" : "Signup"}</h2>
                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        <TextField
                            color="primary"
                            onChange={(e) => setEmail(e.target.value)}
                            error={errorEmail !== ""}
                            helperText={errorEmail}
                            value={email}
                            type="email"
                            required={true}
                            placeholder="Ingrese e-mail"
                        />
                        <TextField
                            color="primary"
                            onChange={(e) => setPassword(e.target.value)}
                            error={errorPassword !== ""}
                            value={password}
                            helperText={errorPassword}
                            type="password"
                            placeholder="Ingrese contraseña"
                            required={true}
                        />
                        {signUp && (
                            <TextField
                                color="primary"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                error={errorConfirmPassword !== ""}
                                value={confirmPassword}
                                helperText={errorConfirmPassword}
                                type="password"
                                placeholder="Confirme la contraseña"
                                required={true}
                            />
                        )}
                        <div className="buttons-login-container">
                            <Button onClick={handleLogin} variant="contained">
                                {login ? "Login" : "Signup"}
                            </Button>
                            <Button onClick={()=>setDismounting(true)} variant="outline">
                                Close
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthContainer;
