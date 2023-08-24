import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate, Outlet } from "react-router-dom";
import { List } from "@mui/material"; // Import other MUI components as needed
import axios from "axios";
// ... other imports

import DepartmentComponent from "../components/DepartmentComponent";
import departmentData from "../DepartmentData";
import type { Department } from "../types"; // Import types using `import type`

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function SecondPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (!userDetails) {
      // Redirect to the first page with a message
      navigate("/", {
        state: {
          message: "Please provide your details before accessing this page.",
        },
      });
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = response.data;
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>Second Page</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <List sx={{ width: "100%", background: "#FAFAD2" }}>
          {departmentData.map((dept: Department) => (
            <DepartmentComponent key={dept.id} department={dept} />
          ))}
        </List>

        {/* Render the nested routes */}
        <Outlet />
        <div>
          <div style={{ height: 500, backgroundColor: "#FAFAD2" }}>
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 25, page: 0 },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
