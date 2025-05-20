import { useEffect, useState } from "react";

export function useTheme() {
    // Khởi tạo state với giá trị lấy từ localStorage hoặc mặc định là 'light'
    const [theme, setTheme] = useState(() => {
        if(typeof window !== "undefined"){
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    })

    // Dùng effect để cập nhật clas và localStorage khi theme thay đổi
    useEffect(() => {
        const root = window.document.documentElement;

        // Xóa class cũ
        root.classList.remove("light", "dark");

        // Thêm class mới
        root.classList.add(theme);

        // Lưu vào storage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}