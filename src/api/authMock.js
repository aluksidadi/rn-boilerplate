export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    const respData = {
      data: {
        token: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
      },
    };
    const respDataJson = JSON.stringify(respData);
    const resp = {
      ok: true,
      status: 200,
      body: respDataJson,
      json: () => {
        return new Promise((resolve, reject) => {
          try {
            const value = JSON.parse(respDataJson);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      },
    };

    // simulate network delay
    setTimeout(() => {
      resolve(resp);
    }, 2000);
  });
}
export const loginBadRequest = (username, password) => {
  return new Promise((resolve, reject) => {
    const respData = {
      code: 888,
      message: "Invalid username/password",
    };
    const respDataJson = JSON.stringify(respData);
    const resp = {
      ok: false,
      status: 400,
      body: respDataJson,
      json: () => {
        return new Promise((resolve, reject) => {
          try {
            const value = JSON.parse(respDataJson);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      },
    };

    // simulate network delay
    setTimeout(() => {
      resolve(resp);
    }, 2000);
  });
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    const respData = {
      data: null,
    };
    const respDataJson = JSON.stringify(respData);
    const resp = {
      ok: true,
      status: 200,
      body: respDataJson,
      json: () => {
        return new Promise((resolve, reject) => {
          try {
            const value = JSON.parse(respDataJson);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      },
    };

    // simulate network delay
    setTimeout(() => {
      resolve(resp);
    }, 2000);
  });
}