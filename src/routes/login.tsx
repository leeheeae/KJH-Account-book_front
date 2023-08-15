import {
    ChangeEvent,
    Dispatch,
    FormEvent,
    SetStateAction,
    useState,
} from 'react';
import axios, { AxiosError } from 'axios';
import { useAtomValue, useSetAtom } from 'jotai';
import { signIn } from '../api/auth';
import { ResponseDataType } from '../api/client';
import { addAlert, alertAtom } from '../atoms/alertAtom';
import Alert from '../components/common/alert/alert.component';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const alertList = useAtomValue(alertAtom);
    const setAlert = useSetAtom(addAlert);

    /**
     * @title input에 입력한 값 업데이트 시키기
     * @returns
     */
    const handleSetInput =
        (set: Dispatch<SetStateAction<string>>) =>
        (event: ChangeEvent<HTMLInputElement>) =>
            set(event.target.value);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const payload = { email, password };
            const response = await signIn(payload);

            console.log('response', response);
        } catch (error) {
            const { response } = error as Error as AxiosError<ResponseDataType>;
            const errorCode = response?.data.statusCode;
            if (axios.isAxiosError(error) && errorCode) {
                switch (errorCode) {
                    case 400:
                        setAlert({
                            severity: 'error',
                            message: '이메일 형식이 아닙니다.',
                        });
                        return;
                    case 401:
                        setAlert({
                            severity: 'error',
                            message: '비밀번호가 일치하지 않습니다.',
                        });
                        return;
                    default:
                }
            }

            setAlert({
                severity: 'error',
                message: '서버와의 연결을 확인해주세요.',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">이메일</label>
                <input
                    id="id"
                    value={email}
                    onChange={handleSetInput(setEmail)}
                />
            </div>

            <div>
                <label htmlFor="password">비밀번호</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handleSetInput(setPassword)}
                />
            </div>

            <button type="submit">로그인</button>

            {alertList.map((alert, index) => (
                <Alert
                    key={`alert-${index.toString()}`}
                    severity={alert.severity}
                    message={alert.message}
                />
            ))}
        </form>
    );
}
