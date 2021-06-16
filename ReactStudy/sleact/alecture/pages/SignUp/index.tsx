import React, {useCallback, useState} from "react";
import useInput from "@hooks/useInput";
import {Header,Form,Label,Input,LinkContainer,Button,Error} from "./styles";


const SignUp = () =>{
    const [email ,onChangeEmail] = useInput('');
    const[nickname, onChangeNickname] = useInput('');
    const[password, ,setPassword] = useInput('');
    const[passwordCheck,,setPasswordCheck] = useInput('');
    const [mismatchError,setMismatchError] = useState(false);

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
        setMismatchError(e.target.value!==passwordCheck);
    },[passwordCheck]);
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setMismatchError(e.target.value!==password);
    },[password]);

    const onSubmit = useCallback((e)=>{ // useCallback 은 deps에 넣어놧떤 값을 기억하라는 것
        // useCallback으로 감싸지 않으면 다시 재생성됨 => 리렌더링이 많이 일어남, 디버깅하기 어려워짐
        e.preventDefault();
        console.log(email,nickname,password,passwordCheck);
        if (!mismatchError){
            console.log('서버로 회원가입하기');
        }
    },[email,nickname,password,passwordCheck]);
    return (
        <div id="container">
            <Header>Sleact</Header>
            <Form onSubmit={onSubmit}>
                <Label id="email-label">
                    <span>이메일 주소</span>
                    <div>
                        <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
                    </div>
                </Label>
                <Label id="nickname-label">
                    <span>닉네임</span>
                    <div>
                        <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
                    </div>
                </Label>
                <Label id="password-label">
                    <span>비밀번호</span>
                    <div>
                        <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
                    </div>
                </Label>
                <Label id="password-check-label">
                    <span>비밀번호 확인</span>
                    <div>
                        <Input
                            type="password"
                            id="password-check"
                            name="password-check"
                            value={passwordCheck}
                            onChange={onChangePasswordCheck}
                        />
                    </div>
                    {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                    {!nickname && <Error>닉네임을 입력해주세요.</Error>}
                    {/*{signUpError && <Error>{signUpError}</Error>}*/}
                    {/*{signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}*/}
                </Label>
                <Button type="submit">회원가입</Button>
            </Form>
            <LinkContainer>
                이미 회원이신가요?&nbsp;
                <a href="/login">로그인 하러가기</a>
            </LinkContainer>
        </div>
    );
};

export default SignUp;