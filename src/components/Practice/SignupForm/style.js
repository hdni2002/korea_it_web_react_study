/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

// ===== Emotion CSS =====
const container = css`
  max-width: 350px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: "Arial", sans-serif;
`;

const title = css`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const inputGroup = css`
  position: relative;
  margin-bottom: 20px;
`;

const inputIcon = css`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #888;
`;

const inputStyle = css`
  width: 100%;
  padding: 10px 10px 10px 35px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 0.9rem;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

const errorText = css`
  font-size: 0.8rem;
  color: red;
  margin-top: 5px;
`;

const buttonStyle = (disabled) => css`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${disabled ? "#ccc" : "#007bff"};
  color: white;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${disabled ? "#ccc" : "#0056b3"};
  }
`;

// ===== Component =====
function SignupForm() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickHandler = () => {
    alert("가입이 완료되었습니다.");
  };

  useEffect(() => {
    setIsDisabled(true);
    const newErrors = {};

    if (!formValues.email.includes("@") && formValues.email.length > 0) {
      newErrors.email = "이메일 형식에 맞게 입력해주세요";
    }
    if (formValues.password.length > 0 && formValues.password.length < 8) {
      newErrors.password = "비밀번호를 8자리 이상 입력해주세요";
    }

    setError(newErrors);

    if (
      Object.keys(newErrors).length === 0 &&
      formValues.email &&
      formValues.password
    ) {
      setIsDisabled(false);
    }
  }, [formValues]);

  return (
    <div css={container}>
      <h2 css={title}>회원가입</h2>

      {/* 이메일 입력 */}
      <div css={inputGroup}>
        <FaUser css={inputIcon} />
        <input
          type="text"
          name="email"
          placeholder="이메일 입력"
          value={formValues.email}
          onChange={onChangeHandler}
          css={inputStyle}
        />
        {!!error.email && <p css={errorText}>{error.email}</p>}
      </div>

      {/* 비밀번호 입력 */}
      <div css={inputGroup}>
        <FaLock css={inputIcon} />
        <input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          value={formValues.password}
          onChange={onChangeHandler}
          css={inputStyle}
        />
        {!!error.password && <p css={errorText}>{error.password}</p>}
      </div>

      <button
        disabled={isDisabled}
        onClick={onClickHandler}
        css={buttonStyle(isDisabled)}
      >
        가입하기
      </button>
    </div>
  );
}

export default SignupForm;
