import { useEffect } from "react";
import { useState } from "react";

export const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://genius-car-server-eta.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isLoading];
};
