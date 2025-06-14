import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchUser = createAsyncThunk("searchUser", async (search) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `http://localhost:4000/searchUser?search=${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
