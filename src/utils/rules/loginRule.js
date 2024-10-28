export const loginRule = {
  userRule: [
    {
      required: true,
      message: 'アカウント入力ください。',
    },
    {
      max: 14,
      message: '最大14桁',
    },
    {
      min: 4,
      message: '最小6桁',
    },
  ],
  passwordRule: [
    {
      required: true,
      message: 'パスワード入力ください。',
    },
    {
      max: 14,
      message: '最大14桁',
    },
    {
      min: 4,
      message: '最小6桁',
    },
  ],
  mobileRule: [
    {
      validator: (rule, val, callback) => {
        const mobileReg = /^(070|080|090)\d{8}$/;
        switch (true) {
          case !Boolean(val):
            return Promise.reject('携帯電話を入力してください。');
          case !mobileReg.test(val):
            return Promise.reject('携帯電話フォーム違う。');
          default:
            return Promise.resolve();
        }
      },
    },
  ],
  codeRule: [
    {
      required: true,
      message: '認証コード入力ください。',
    },
    {
      max: 6,
      message: '最大6桁',
    },
    {
      min: 6,
      message: '最小6桁',
    },
  ],
};
