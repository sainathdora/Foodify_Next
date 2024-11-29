// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const food_items = [
    "adhirasam",
    "aloo_gobi",
    "aloo_matar",
    "aloo_methi",
    "aloo_shimla_mirch",
    "aloo_tikki",
    "anarsa",
    "ariselu",
    "bandar_laddu",
    "basundi",
    "bhatura",
  ];
  const foodItems_info = {
    adhirasam: {
      calories: 120,
      protein: 2.5,
      carbohydrates: 25,
      fat: 3.5,
    },
    aloo_gobi: {
      calories: 150,
      protein: 4,
      carbohydrates: 30,
      fat: 4,
    },
    aloo_matar: {
      calories: 180,
      protein: 5,
      carbohydrates: 35,
      fat: 6,
    },
    aloo_methi: {
      calories: 160,
      protein: 3.5,
      carbohydrates: 28,
      fat: 5,
    },
    aloo_shimla_mirch: {
      calories: 140,
      protein: 3,
      carbohydrates: 32,
      fat: 4.5,
    },
    aloo_tikki: {
      calories: 200,
      protein: 3,
      carbohydrates: 40,
      fat: 6,
    },
    anarsa: {
      calories: 250,
      protein: 4,
      carbohydrates: 45,
      fat: 9,
    },
    ariselu: {
      calories: 230,
      protein: 3,
      carbohydrates: 48,
      fat: 8,
    },
    bandar_laddu: {
      calories: 280,
      protein: 5,
      carbohydrates: 50,
      fat: 12,
    },
    basundi: {
      calories: 180,
      protein: 5,
      carbohydrates: 25,
      fat: 7,
    },
    bhatura: {
      calories: 250,
      protein: 6,
      carbohydrates: 45,
      fat: 10,
    },
  };
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * food_items.length);
    const randomFood = food_items[randomIndex];
    res.status(200).json({
      prediction: randomFood,
      macros: foodItems_info[randomFood],
    });
  }, 2000);
}
