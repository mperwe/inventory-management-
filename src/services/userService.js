export const fetchUsers = async () => {
    // Simulate fetching users
    return [
      { id: 1, name: "Admin", role: "admin" },
      { id: 2, name: "Manager", role: "manager" },
    ];
  };
  
  export const updateUserRole = async (id, role) => {
    console.log(`User with ID ${id} updated to role: ${role}`);
    return { id, role };
  };
  