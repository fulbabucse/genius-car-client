import { useEffect, useState } from "react";

export const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (user) {
      fetch("https://genius-car-server-eta.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("genius-token", data.token);
          setToken(data.token);
        });
    }
  }, [user]);
  return [token];
};
