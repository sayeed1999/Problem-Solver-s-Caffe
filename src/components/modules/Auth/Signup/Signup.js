import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppRoutes from "../../../../constants/AppRoutes";
import { AuthContext } from "../../../../contexts/AuthContext";
import Button from "../../../shared/Button/Button";
import ButtonGroup from "../../../shared/ButtonGroup/ButtonGroup";
import CheckBoxInput from "../../../shared/CheckBoxInput/CheckBoxInput";
import EmailInput from "../../../shared/EmailInput/EmailInput";
import Form from "../../../shared/Form/Form";
import PasswordInput from "../../../shared/PasswordInput/PasswordInput";
import TextInput from "../../../shared/TextInput/TextInput";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async () => {
    if (!username || !email || !password || !confirmPassword || !agree) {
      alert("Required fields empty");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password & confirm password don't match");
      return;
    }

    try {
      await signup(email, password, username);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h1 style={{ fontWeight: "400" }}> Create an account.. </h1>
      <Form className="signup">
        <TextInput name="Username" value={username} onChange={setUsername} />
        <EmailInput name="Email" value={email} onChange={setEmail} />
        <PasswordInput
          name="Password"
          value={password}
          onChange={setPassword}
        />
        <PasswordInput
          name="Confirm Password"
          value={confirmPassword}
          onChange={setConfirPassword}
        />
        <CheckBoxInput value={agree} onChange={setAgree}>
          I agree to the terms & conditions
        </CheckBoxInput>
        <ButtonGroup>
          <Button onClick={submit}>Submit</Button>
        </ButtonGroup>
        <p className="form-text text-center">
          Already have an account? <Link to={AppRoutes.Login}>Login</Link>{" "}
          instead.
        </p>
      </Form>
    </>
  );
};

export default Signup;
