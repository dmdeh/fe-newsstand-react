import { styled } from "styled-components";
import { useState, useEffect } from "react";

export function Subscription() {
  const [isSubscribed, subscribed] = useState(false);

  useEffect(() => {
    console.log("구독", isSubscribed);
  }, [isSubscribed]);

  const handleSubscription = () => {
    subscribed(!isSubscribed);
  };

  return (
    <StyledButton onClick={handleSubscription}>
      {isSubscribed ? "+ 구독 취소" : "+ 구독 하기"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  font-size: 20px;
  color: #88939a;
  background: white;
  border: 2px solid #d3d9df;
  border-radius: 10px;
`;

export default Subscription;
