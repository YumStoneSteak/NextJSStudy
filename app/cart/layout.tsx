import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Banner cardVender="현대카드" date="2400" />
      {children}
    </div>
  );
}

function Banner(props: { [key: string]: string }) {
  return (
    <p className="banner">{`${props.cardVender} 무이자 ${props.date}개월 이벤트 중`}</p>
  );
}

export default Layout;
