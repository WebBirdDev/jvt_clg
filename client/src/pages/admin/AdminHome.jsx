import { useEffect, useState } from "react";

const AdminHome = () => {
  const [currentDT, setCurrentDT] = useState("");

  useEffect(() => {
    const updateDT = () => {
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setCurrentDT(formattedDate);
    };
    updateDT();

    const intervalId = setInterval(updateDT, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <h1 className="font-bold">Dashboard</h1>
      <p className="text-sm">{currentDT}</p>
    </main>
  );
};

export default AdminHome;
