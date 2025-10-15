import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Smile from "@/assets/icon-smile.svg";
import Cat from "@/assets/icon-cat.svg";
import Person from "@/assets/icon-person.svg";
import Lock from "@/assets/icon-lock.svg";

export const Signup = () => {
  const [isId, setIsId] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");
  const navigate = useNavigate();

  const isIdValid = isId.length >= 3 && isId.length <= 10;
  const isPasswordValid = isPassword.length >= 6;

  const handleSignup = async () => {
    if (!isId.trim() || !isPassword.trim()) {
      alert("모든 항목을 입력해주세요");
      return;
    }
    if (!isIdValid) {
      alert("아이디가 3 ~ 10자여야합니다");
      return;
    }
    if (!isPasswordValid) {
      alert("비밀번호는 최소 6자 이상이어야 합니다");
      return;
    }

    try {
      const response = await axios.post("/auth/signup", {
        account_id: isId,
        password: isPassword,
      });

      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        switch (status) {
          case 400:
            alert("유효하지 않은 요청입니다");
            break;
          case 401:
            alert("로그인되지 않은 유저입니다");
            break;
          case 403:
            alert("권한이 없습니다");
            break;
          case 404:
            alert("요청한 정보가 존재하지 않습니다");
            break;
          case 409:
            alert("이미 존재하는 아이디입니다");
            break;
          case 500:
            alert("서버 오류입니다. 관리자에게 문의하세요");
            break;
          default:
            alert("알 수 없는 오류가 발생했습니다");
        }
      } else {
        alert("네트워크 오류가 발생했습니다");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-main-100 to-white flex flex-col items-center pt-20">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-10">
          <img
            className="w-20 h-20 mx-auto mb-8"
            src={Smile}
            alt="icon-smile"
          />
          <h1 className="text-[55px] font-semibold text-black mb-14">m10</h1>
          <p className="text-[30px] text-gray-400 whitespace-nowrap mt-1">
            ai를 사용해 자동 워크플로우를 만들어보세요!!
          </p>
        </div>

        <Card className="w-[749px] shadow-xl border-0 bg-white/80 rounded-[12px] p-8">
          <CardHeader className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-4 mb-4">
              <img className="w-13 h-13" src={Cat} alt="icon-cat" />
              <h2 className="text-[44px] font-semibold text-black">
                환영합니다!
              </h2>
            </div>
          </CardHeader>

          <CardContent className="w-full flex flex-col items-center gap-11">
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="w-full max-w-[449px] h-[69px] flex justify-center items-center mx-auto gap-2 rounded-[11px] bg-gray-0 p-2">
                <div
                  onClick={() => navigate("/")}
                  className="w-[204px] h-[52px] flex justify-center items-center cursor-pointer rounded-[11px] bg-gray-0 text-gray-600 hover:bg-gray-100 hover:text-black transition-all"
                >
                  로그인
                </div>
                <div className="w-[204px] h-[52px] flex justify-center items-center cursor-pointer rounded-[11px] bg-white text-[22px] font-semibold transition-all">
                  회원가입
                </div>
              </TabsList>

              <TabsContent
                value="signup"
                className="mt-12 w-full max-w-[650px] flex flex-col gap-11 flex-none"
              >
                <div className="space-y-11">
                  <div className="space-y-4">
                    <Label
                      htmlFor="signup-id"
                      className={`text-[20px] ${
                        isId && !isIdValid ? "text-red " : "text-gray-200"
                      }`}
                    >
                      {isId && !isIdValid
                        ? "아이디는 3~10글자 사이여야 합니다"
                        : "아이디"}
                    </Label>
                    <div className="relative">
                      <Input
                        autoComplete="off"
                        id="signup-id"
                        type="text"
                        value={isId}
                        onChange={(e) => {
                          setIsId(e.target.value);
                        }}
                        placeholder="아이디를 입력하세요"
                        className="pl-12 border border-[0.5px] border-brown rounded-[12px] w-full h-[65px] placeholder-gray-300 placeholder:text-[20px] placeholder:font-normal"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <img src={Person} alt="icon-person" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label
                      htmlFor="signup-password"
                      className={`text-[20px] ${
                        isPassword && !isPasswordValid
                          ? "text-red "
                          : "text-gray-200"
                      }`}
                    >
                      {isPassword && !isPasswordValid
                        ? "비밀번호는 6자 이상이어야 합니다"
                        : "비밀번호"}
                    </Label>
                    <div className="relative">
                      <Input
                        autoComplete="new-password"
                        id="signup-password"
                        type="password"
                        value={isPassword}
                        onChange={(e) => {
                          setIsPassword(e.target.value);
                        }}
                        placeholder="비밀번호를 입력하세요"
                        className="pl-12 border border-[0.5px] border-brown rounded-[12px] w-full h-[65px] placeholder-gray-300 placeholder:text-[20px] placeholder:font-normal"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <img src={Lock} alt="icon-lock" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  className="mt-12 w-full h-[81px] bg-main-0 text-white font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 text-[30px]"
                  onClick={handleSignup}
                >
                  회원가입
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
