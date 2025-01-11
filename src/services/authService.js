const authService = {
    login: async (email, password) => {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "admin@example.com" && password === "password") {
            localStorage.setItem("token", "sample-token");
            resolve();
          } else {
            reject("Invalid credentials");
          }
        }, 1000);
      });
    },
    logout: () => {
      localStorage.removeItem("token");
    },
    isAuthenticated: () => {
      return !!localStorage.getItem("token");
    },
  };
  
  export default authService;
  