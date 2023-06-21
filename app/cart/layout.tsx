import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="hyundaiCardEvent">현대카드 무이자 2400개월 이벤트 중</p>
      {children}
    </div>
  );
}

export default Layout;
