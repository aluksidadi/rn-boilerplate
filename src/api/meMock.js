export const get = (token) => {
  const promise = new Promise((resolve, reject) => {
    resolve({
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
    });
  });
  return promise;
}