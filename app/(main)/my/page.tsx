"use client";

import { UserAvatarWithLabel } from "@/components/my";
import { useRouter } from "next/navigation";
import React from "react";
import Calendar from "react-calendar";
import "@/lib/react-calendar/Calendar.css";
import { RootState } from "@/store"; // Adjust the import path according to your project structure
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "@/store/slices/dairy/diarySlice";
import path from "@/routes";

const page: React.FC = () => {
  const date = useSelector((state: RootState) => state.diary.date);
  const router = useRouter();
  const dispatch = useDispatch();

  const onChange = (newDate: any) => {
    if (newDate instanceof Date) {
      dispatch(setDate(newDate));
    }
  };

  return (
    <div className="w-full h-screen justify-center">
      <div className="flex">
        <div className="flex w-full items-center justify-between mt-14">
          <UserAvatarWithLabel
            imageUrl={"/cat.png"}
            nickname={"user"}
            description="name@email.com"
          />
          <svg
            className="mr-4 text-gray-500"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => router.push(path.SETTING)}
          >
            <path
              d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Calendar
          prev2Label={null} // 연도 앞으로 이동
          next2Label={null} // 연도 뒤로 이동
          showNeighboringMonth={false} // 이전 달, 다음 달 보이기
          value={date}
          onChange={onChange}
          className="w-full max-w-md space-y-2 bg-white border border-gray-200 rounded-md shadow"
          tileClassName="flex text-center p-4 border border-gray-100 hover:bg-cyan-500 rounded-sm text-gray-700"
          tileContent={({ date }) => (
            <span className="flex justify-center items-center w-1 h-1 rounded-full bg-cyan-500 text-white"></span>
          )}
          navigationLabel={({ date }) => (
            <span className="flex text-lg font-semibold p-2">
              {date.toLocaleString("ko-KR", {
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        />
      </div>
      <p className="mt-4 text-lg text-gray-700">
        선택된 날짜:{" "}
        {date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default page;
