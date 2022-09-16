interface User {
  nickname: string;
  avatar: string;
}

interface IData {
  user: User;
  image: string;
  description?: string;
  storySeen: boolean;
}

const data: IData[] = [
  {
    user: {
      nickname: "eggsy_dev",
      avatar: "https://i.imgur.com/7OXeSik.jpg",
    },
    image: "https://i.imgur.com/XIe1ewy.jpg",
    description: "🌸 Really cool flower.",
  },
  {
    user: {
      nickname: "johndoe",
      avatar: "https://i.imgur.com/Wt8z8Oz.jpg",
    },
    image: "https://i.imgur.com/6KNoPdQ.jpg",
    description: "A random user",
  },
  {
    user: {
      nickname: "jane",
      avatar: "https://i.imgur.com/ymPNhzP.jpg",
    },
    image: "https://i.imgur.com/2XyTWVL.jpg",
    description: "I love football!",
  },
  {
    user: {
      nickname: "joanna",
      avatar: "https://i.imgur.com/mDSO281.jpg",
    },
    image: "https://i.imgur.com/3FQ7zCC.jpg",
    description: "Would you like to live in a house in the woods like this?",
  },
  {
    user: {
      nickname: "michelle",
      avatar: "https://i.imgur.com/5YXGQUD.jpg",
    },
    image: "https://i.imgur.com/z0FKM8i.jpg",
    description: "Who's up for a morning coding session? ME! 🛠",
  },
  {
    user: {
      nickname: "barisgoktepe",
      avatar: "https://i.imgur.com/nfaUp9a.jpg",
    },
    image: "https://i.imgur.com/ou5kQHK.jpg",
    description: "Love this view outside my window!",
  },
  {
    user: {
      nickname: "slendershout",
      avatar: "https://i.imgur.com/nkigHmz.jpg",
    },
    image: "https://i.imgur.com/3IdjpQY.jpg",
    description: "What an amazing bird!",
  },
  {
    user: {
      nickname: "berkfelix",
      avatar: "https://i.imgur.com/bvVMwCM.jpg",
    },
    image: "https://i.imgur.com/7cjkCSU.jpg",
  },
  {
    user: {
      nickname: "alaz02",
      avatar: "https://i.imgur.com/gqYl1Y5.jpg",
    },
    image: "https://i.imgur.com/80raNDC.jpg",
  },
  {
    user: {
      nickname: "bas950",
      avatar: "https://i.imgur.com/sYiKuPU.jpg",
    },
    image: "https://i.imgur.com/HUrDmbc.jpg",
  },
].map(
  (item, index) =>
    ({
      ...item,
      image: `https://proxy.duckduckgo.com/iu/?u=${item.image}`,
      storySeen: !index,
    } as IData)
);

export default data;
