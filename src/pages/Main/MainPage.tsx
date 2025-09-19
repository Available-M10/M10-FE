import React, { useState, useEffect } from "react";
import LeftArrow from "@/assets/icon-left_arrow.svg";
import RightArrow from "@/assets/icon-right_arrow.svg";
import Plus from "@/assets/icon-plus.svg";
import Edit from "@/assets/icon-modify.svg";
import Trash from "@/assets/icon-trash.svg";
import Delete from "@/assets/icon-delete_face.svg";
import Smile from "@/assets/icon-smile.svg";
import Target from "@/assets/icon-targer.svg";
import Note from "@/assets/icon-note.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { createProject } from "./api/createProject";
import { updateProject } from "./api/updateProject";
import { deleteProject } from "./api/deleteProject";

export const MainPage = () => {
  // 상태 선언
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "이메일 자동화",
      status: "활성",
      description: "신규 고객에게 환영 이메일을 자동으로 발송합니다.",
    },
    {
      id: 2,
      title: "딥솔림 자동화",
      status: "활성",
      description: "신규 고객에게 환영 이메일을 자동으로 발송합니다.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [openModal, setOpenModal] = useState<"trash" | "edit" | "plus" | null>(
    null
  );
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {}, []);

  // 프로젝트 생성
  const handleAddProject = async () => {
    if (!inputValue.trim()) {
      alert("프로젝트명을 입력해주세요.");
      return;
    }
    try {
      const newProject = await createProject(inputValue);
      setProjects([
        ...projects,
        {
          id: newProject.id,
          title: newProject.name,
          status: newProject.active ? "활성" : "비활성",
          description: "새 프로젝트 설명",
        },
      ]);
      setInputValue("");
      setOpenModal(null);
    } catch (error: any) {
      console.error("프로젝트 생성 실패:", error);
      alert("프로젝트 생성 중 오류가 발생했습니다.");
    }
  };

  // 프로젝트 수정

  const handleEditProject = async () => {
    if (!inputValue.trim() || selectedId === null) {
      alert("프로젝트명을 입력해주세요.");
      return;
    }

    try {
      const result = await updateProject(selectedId, inputValue);

      setProjects(
        projects.map((p) =>
          p.id === selectedId ? { ...p, title: inputValue } : p
        )
      );
      setInputValue("");
      setSelectedId(null);
      setOpenModal(null);

      alert(`프로젝트 수정 성공!\n수정된 이름: ${result.name || inputValue}`);
    } catch (error: any) {
      console.error(error);

      let message = "알 수 없는 오류";
      if (error.response) {
        switch (error.response.status) {
          case 400:
            message = "유효하지 않은 요청입니다.";
            break;
          case 401:
            message = "로그인되지 않은 사용자입니다.";
            break;
          case 403:
            message = "권한이 없습니다.";
            break;
          case 404:
            message = "요청한 정보가 존재하지 않습니다.";
            break;
          case 409:
            message = "허용되지 않는 요청입니다.";
            break;
          case 500:
            message = "서버 오류입니다. 백엔드에 문의하세요.";
            break;
        }
      }
      alert(`프로젝트 수정 실패\n${message}`);
    }
  };

  // 프로젝트 삭제
  const handleDeleteProject = async () => {
    if (selectedId === null) return;
    try {
      await deleteProject(selectedId);
      setProjects((prev) => prev.filter((p) => p.id !== selectedId));
      setSelectedId(null);
      setOpenModal(null);
    } catch (error: any) {
      alert("프로젝트 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="h-[56px] bg-white"></div>

      {/* 배너 */}
      <div className="relative bg-main-200 px-8 py-16 overflow-visible">
        <button className="absolute left-[60px] top-1/2 transform -translate-y-1/2 z-10">
          <img src={LeftArrow} alt="icon-leftArrow" />
        </button>
        <button className="absolute right-[60px] top-1/2 transform -translate-y-1/2 z-10">
          <img src={RightArrow} alt="icon-rightArrow" />
        </button>

        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-white max-w-xl">
            <h1 className="text-[50px] font-extrabold mb-6 leading-[1.1]">
              AI 자동화의, <br /> 새로운 시작.
            </h1>
            <p className="text-[22px] font-medium mb-1 leading-relaxed">
              복잡한 작업을 간단한 드래그 앤 드롭으로 자동화하세요.
            </p>
            <p className="text-[22px] font-medium leading-relaxed">
              AI의 힘으로 더 스마트한 워크플로우를 만들어보세요.
            </p>
          </div>

          <div className="hidden lg:flex flex-col gap-3 relative h-[250px]">
            <div className="flex gap-3 h-full">
              <div className="overflow-hidden w-24 h-full">
                <img
                  src={Delete}
                  alt="sample-2"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="overflow-hidden w-24 h-full">
                <img
                  src={Smile}
                  alt="sample-3"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 목록 */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-[35px] font-semibold text-gray-400 mb-8">
          프로젝트 목록
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[39px]">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              status={p.status}
              statusColor="green"
              description={p.description}
              onTrash={() => {
                setOpenModal("trash");
                setSelectedId(p.id);
              }}
              onEdit={() => {
                setOpenModal("edit");
                setSelectedId(p.id);
                setInputValue(p.title);
              }}
            />
          ))}
        </div>
      </div>

      {/* 생성 버튼 */}
      <button
        className="fixed bottom-8 right-8 bg-main-200 text-white rounded-full p-4 shadow-lg"
        onClick={() => {
          setOpenModal("plus");
          setInputValue("");
        }}
      >
        <img src={Plus} alt="" />
      </button>

      {/* 다이얼로그 */}
      <Dialog open={!!openModal} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-[500px] rounded-[20px] bg-white p-8 text-center gap-6">
          {/* 삭제 */}
          {openModal === "trash" && (
            <>
              <img src={Delete} className="w-[70px] h-[70px] mx-auto" alt="" />
              <DialogTitle className="text-[30px] font-semibold">
                프로젝트 삭제
              </DialogTitle>
              <DialogDescription className="text-[20px]">
                정말 이 프로젝트를 삭제하시겠습니까?
              </DialogDescription>
              <div className="flex gap-4 mt-6 justify-center">
                <Button
                  className="w-[120px] h-[45px] rounded-[15px] bg-main-300 text-[20px] text-white"
                  onClick={handleDeleteProject}
                >
                  삭제
                </Button>
              </div>
            </>
          )}

          {/* 수정 */}
          {openModal === "edit" && (
            <>
              <img src={Target} className="w-[70px] h-[70px] mx-auto" alt="" />
              <DialogTitle className="text-[25px] font-semibold">
                프로젝트 정보 수정
              </DialogTitle>
              <DialogDescription className="text-[20px] mb-6">
                프로젝트 이름을 수정해주세요.
              </DialogDescription>
              <div className="w-full mb-6 text-left">
                <Label className="text-[18px] block mb-2">프로젝트 이름</Label>
                <div className="relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="프로젝트 이름을 입력하세요"
                    className="pl-12 border border-[0.5px] border-brown rounded-[12px] h-[50px]"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <img src={Note} alt="icon-target" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6 justify-center">
                <Button
                  className="w-[120px] h-[45px] rounded-[15px] bg-main-300 text-[20px] text-white"
                  onClick={handleEditProject}
                >
                  저장
                </Button>
              </div>
            </>
          )}

          {/* 생성 */}
          {openModal === "plus" && (
            <>
              <img src={Target} className="w-[70px] h-[70px] mx-auto" alt="" />
              <DialogTitle className="text-[25px] font-semibold">
                새 프로젝트 생성
              </DialogTitle>
              <DialogDescription className="text-[20px] mb-6">
                프로젝트 이름을 입력해주세요.
              </DialogDescription>
              <div className="w-full mb-6 text-left">
                <Label className="text-[18px] block mb-2">프로젝트 이름</Label>
                <div className="relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="프로젝트명을 입력하세요"
                    className="pl-12 border border-[0.5px] border-brown rounded-[12px] h-[50px]"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <img src={Note} alt="icon-target" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6 justify-center">
                <Button
                  className="w-[120px] h-[45px] rounded-[15px] bg-main-300 text-[18px] text-white"
                  onClick={handleAddProject}
                >
                  프로젝트 생성
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// 프로젝트 카드 컴포넌트
const ProjectCard = ({
  title,
  status,
  statusColor,
  description,
  onTrash,
  onEdit,
}: {
  title: string;
  status: string;
  statusColor: string;
  description: string;
  onTrash: () => void;
  onEdit: () => void;
}) => {
  const getStatusBadgeStyle = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green border-green";
      case "red":
        return "bg-red border-red";
      default:
        return "bg-black text-gray-800 border-black";
    }
  };

  return (
    <div className="bg-white w-full h-[163px] rounded-[20px] border border-gray-200 shadow-sm hover:shadow-md">
      <div className="flex flex-col justify-center h-full px-6">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center gap-3">
            <h3 className="text-[30px] font-semibold text-gray-900">{title}</h3>
            <span
              className={`px-3 py-1 text-white rounded-full text-[17px] border ${getStatusBadgeStyle(
                statusColor
              )}`}
            >
              {status}
            </span>
          </div>
          <div className="flex gap-2">
            <button onClick={onTrash}>
              <img src={Trash} alt="delete" />
            </button>
            <button onClick={onEdit}>
              <img src={Edit} alt="edit" />
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-[22px] leading-relaxed w-full">
          {description}
        </p>
      </div>
    </div>
  );
};
