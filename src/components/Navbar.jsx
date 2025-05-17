import {
  Home,
  User,
  BriefcaseBusiness,
  FileChartColumnIncreasing,
  Mails,
} from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState("#hero");
  const isProgrammaticScrolling = useRef(false);
  const scrollingTimeout = useRef(null);
  const targetedSection = useRef(null);

  const handleClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);

    if (targetElement) {
      // Lưu section đích đang nhắm đến
      targetedSection.current = target;

      // Đánh dấu đang trong quá trình cuộn bằng code
      isProgrammaticScrolling.current = true;

      // Update isActive state ngay lập tức, không đợi cuộn
      setIsActive(target);

      // Tính toán thời gian cuộn dựa trên khoảng cách để cuộn
      const currentPos = window.scrollY;
      const targetPos = targetElement.offsetTop;
      const distance = Math.abs(currentPos - targetPos);
      // Thời gian cuộn tối thiểu 1s, tối đa 2.5s
      const scrollDuration = Math.min(2500, Math.max(1000, distance / 2));

      // Tạo hiệu ứng smooth scroll
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });

      // Sau khi cuộn hoàn tất (dựa vào thời gian), bỏ đánh dấu
      clearTimeout(scrollingTimeout.current);
      scrollingTimeout.current = setTimeout(() => {
        isProgrammaticScrolling.current = false;
        targetedSection.current = null;
      }, scrollDuration); // Thời gian dựa vào khoảng cách cuộn
    }
  };

  // Tự động cập nhật isActive dựa trên vị trí cuộn
  useEffect(() => {
    let throttleTimer;

    const handleScroll = () => {
      // Nếu đang cuộn bằng code, bỏ qua việc cập nhật isActive
      if (isProgrammaticScrolling.current) return;

      // Thêm throttle để tránh gọi quá nhiều lần
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        const sections = document.querySelectorAll("section[id], div[id]");
        const scrollPosition = window.scrollY + 100;

        // Tìm section phù hợp nhất
        let currentSection = null;
        let smallestDistance = Infinity;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionMiddle = sectionTop + sectionHeight / 2;
          const distance = Math.abs(scrollPosition - sectionMiddle);

          // Lấy section gần nhất với vị trí scroll hiện tại
          if()
          if (distance < smallestDistance) {
            smallestDistance = distance;
            currentSection = "#" + section.getAttribute("id");
          }
        });

        if (currentSection) {
          setIsActive(currentSection);
        }

        throttleTimer = null;
      }, 100);
    };

    // Thêm sự kiện scroll end để đảm bảo active state chính xác
    const handleScrollEnd = () => {
      let isScrolling;
      return function () {
        // Xóa timeout cũ
        clearTimeout(isScrolling);

        // Đặt một timeout mới
        isScrolling = setTimeout(function () {
          // Kết thúc cuộn, kiểm tra nếu là cuộn bằng click
          if (targetedSection.current) {
            // Đảm bảo active đúng section đã click
            setIsActive(targetedSection.current);
          }
        }, 150); // Thời gian ngắn sau khi kết thúc cuộn
      };
    };

    const scrollEndHandler = handleScrollEnd();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", scrollEndHandler);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", scrollEndHandler);
      clearTimeout(throttleTimer);
      clearTimeout(scrollingTimeout.current);
    };
  }, []);

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="w-full mx-auto bg-gray-600/20 backdrop-blur-xl rounded-full px-6 py-2 flex items-center justify-evenly gap-6 max-w-100 text-white/50">
        {/* Navbar inner */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className={`hover:text-indigo-400 size-10 center transition-all duration-1000 ${
            isActive === "#hero" ? "active" : ""
          }`}
        >
          <Home size={20} className="" />
        </a>
        <a
          href="#about"
          onClick={(e) => handleClick(e, "#about")}
          className={`hover:text-indigo-400 size-10 center transition-all duration-1000 ${
            isActive === "#about" ? "active" : ""
          }`}
        >
          <User size={20} className="" />
        </a>
        <a
          href="#skills"
          onClick={(e) => handleClick(e, "#skills")}
          className={`hover:text-indigo-400 size-10 center transition-all duration-1000 ${
            isActive === "#skills" ? "active" : ""
          }`}
        >
          <FileChartColumnIncreasing
            size={20}
            className=""
          />
        </a>
        <a
          href="#projects"
          onClick={(e) => handleClick(e, "#projects")}
          className={`hover:text-indigo-400 size-10 center transition-all duration-1000 ${
            isActive === "#projects" ? "active" : ""
          }`}
        >
          <BriefcaseBusiness
            size={20}
            className=""
          />
        </a>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className={`hover:text-indigo-400 size-10 center transition-all duration-1000 ${
            isActive === "#contact" ? "active" : ""
          }`}
        >
          <Mails size={20} className="" />
        </a>
      </div>
    </nav>
  );
}
