import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Smile from "@/assets/icon-smile.svg";
import Cat from "@/assets/icon-cat.svg";
import Person from "@/assets/icon-person.svg";
import Lock from "@/assets/icon-lock.svg";

export const Login = () => {
  const [isId, setIsId] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");
  const navigate = useNavigate();

  const dummyData = {
    id: "testuser",
    password: "12345678",
  };

  const handleLogin = () => {
    if (!isId.trim() || !isPassword.trim()) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (isId === dummyData.id && isPassword === dummyData.password) {
      console.log("로그인 성공");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log("로그인 요청:", { id: isId, password: isPassword });
      return;
    }

    console.log("로그인 요청:", { id: isId, password: isPassword });
    alert("로그인성공!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-main-100 to-white flex flex-col items-center pt-20">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* 여기 윗부분 */}
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
        {/* 여기서부터 카드 div */}
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
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full max-w-[449px] h-[69px] flex justify-center items-center mx-auto gap-2 rounded-[11px] bg-gray-0 p-2">
                {/* 로그인 */}
                <TabsTrigger
                  value="login"
                  className="w-[204px] h-[52px] rounded-[11px] data-[state=active]:bg-white data-[state=active]:text-[22px] data-[state=inactive]:bg-gray-0 data-[state=inactive]:text-gray-600 transition-all"
                >
                  로그인
                </TabsTrigger>
                {/* 회원가입 */}
                <div
                  onClick={() => navigate("/signup")}
                  className="w-[204px] h-[52px] rounded-[11px] flex justify-center items-center cursor-pointer bg-gray-0 text-gray-600 hover:bg-gray-100 hover:text-black transition-all"
                >
                  회원가입
                </div>
              </TabsList>
              {/* 로그인 냉용 */}
              <TabsContent
                value="login"
                className="mt-12 w-full max-w-[650px] flex flex-col gap-11 flex-none"
              >
                <div className="space-y-11">
                  <div className="space-y-4">
                    <Label
                      htmlFor="id"
                      className="text-[20px] font-regular text-gray-200"
                    >
                      아이디
                    </Label>
                    <div className="relative">
                      <Input
                        id="id"
                        type="text"
                        value={isId}
                        autoComplete="off"
                        onChange={(e) => {
                          setIsId(e.target.value);
                          console.log("입력한 아이디:", e.target.value);
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
                      htmlFor="password"
                      className="text-[20px] font-regular text-gray-200"
                    >
                      비밀번호
                    </Label>
                    <div className="relative">
                      <Input
                        autoComplete="new-password"
                        id="password"
                        type="password"
                        value={isPassword}
                        onChange={(e) => {
                          setIsPassword(e.target.value);
                          console.log("입력한 비밀번호:", e.target.value);
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
                  onClick={handleLogin}
                >
                  로그인
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
