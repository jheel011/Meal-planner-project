document.addEventListener("DOMContentLoaded",function(){
  const brkfstButton = document.getElementById('bf');
  const lunchButton = document.getElementById('l');
  const dinnerButton = document.getElementById('d');
  const genAllMealButton = document.getElementById('allBtn');












  const breakfast = [
    {
      name: "Poha",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Upma",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Idli",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Dosa",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Aloo Paratha",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Thepla",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Besan Chilla",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Pav Bhaji",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Vegetable Sandwich",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Sabudana Khichdi",
      veg: true,
      protein: false,
      fasting: true
    }
  ];
 


  const lunch = [
    {
      name:"Dal Rice",
        veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Rajma Chawal",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Chole Chawal",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Vegetable Pulao",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Khichdi",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Kadhi Khichdi",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Paneer Curry with Roti",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Bhindi Sabzi with Roti",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Aloo Matar with Roti",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Mixed Vegetable Curry with Roti",
      veg: true,
      protein: false,
      fasting: false
    }
  ];
  const dinner = [
    {
      name: "Paneer Bhurji with Roti",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Dal Tadka with Rice",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Vegetable Curry with Roti",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Palak Paneer with Roti",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Dal khichdi",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Stuffed Paratha",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Veg Biryani",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Kofta Curry with Roti",
      veg: true,
      protein: true,
      fasting: false
    },
    {
      name: "Methi Thepla with Curd",
      veg: true,
      protein: false,
      fasting: false
    },
    {
      name: "Moong Dal Khichdi",
      veg: true,
      protein: true,
      fasting: false
    }
  ];

  function getRandomMeal(mealsArray){
    const index = Math.floor(Math.random() * mealsArray.length);
    return mealsArray[index].name;
  }

  function generateBreakfast(){
  brkfstButton.textContent = `🍳 Breakfast: ${getRandomMeal(breakfast)}`;

  }

  function generateLunch(){
  lunchButton.textContent = `🍛 Lunch: ${getRandomMeal(lunch)}`;

  }

  function generateDinner(){
  dinnerButton.textContent = `🌙 Dinner: ${getRandomMeal(dinner)}`;

  }

  function generateFullDay(){
    generateBreakfast();
    generateLunch();
    generateDinner();

  }


  brkfstButton.addEventListener('click', generateBreakfast);
  lunchButton.addEventListener('click', generateLunch);
  dinnerButton.addEventListener('click', generateDinner);
  genAllMealButton.addEventListener('click',generateFullDay);
})
















