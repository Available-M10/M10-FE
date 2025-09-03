// 회원가입 요청 타입
export interface SignupRequest {
  id: string; // 아이디
  password: string; // 비밀번호
}

// 회원가입 응답 타입
export interface SignupResponse {
  id: number; // 회원 고유 ID
  userId: string; // 사용자가 입력한 아이디
}

// 로그인 요청 타입
export interface SigninRequest {
  id: string; // 아이디
  password: string; // 비밀번호
}

// 로그인 응답 타입
export interface SigninResponse {
  accessToken: string; // 인증 토큰
}
