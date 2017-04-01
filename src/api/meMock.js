export const get = (token) => {
  return new Promise((resolve, reject) => {
    const respData = {
      data: {
        me: {
          id: "3aa4d349-a31c-4788-a679-5cb506d839b4",
          username: "test",
          profile: {
            email: "test@test.com",
            first_name: "John",
            last_name: "Doe",
            picture: "http://avatarmaker.com/svgavatars/temp-avatars/svgA4607216406771837.png",
          },
        },
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
export const getUnauthorized = (token) => {
  return new Promise((resolve, reject) => {
    const respData = {
      code: 777,
      message: "Session has expired or invalid",
    };
    const respDataJson = JSON.stringify(respData);
    const resp = {
      ok: false,
      status: 401,
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