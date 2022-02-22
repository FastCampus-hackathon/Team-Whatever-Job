import axios from 'axios';

// 회원가입
export async function requestSignUp(userId: string, password: string) {
  try {
    const { data } = await axios.post('/auth/join', {
      userId,
      password,
    },
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}

// 로그인
export async function requestSignIn(userId: string, password: string) {
  try {
    const { data, headers } = await axios.post('/auth/login', {
      userId,
      password,
    },
    );

    localStorage.setItem('authToken', headers['x-auth-token']);

    return data;
  } catch (e) {
    console.log(e);
  }
}
