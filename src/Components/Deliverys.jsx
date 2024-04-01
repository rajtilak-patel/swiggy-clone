
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
const food = [
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "All-purpose flour",
      "Butter, softened",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla extract",
      "Baking soda",
      "Salt",
      "Chocolate chips",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 24,
    difficulty: "Easy",
    cuisine: "American",
    caloriesPerServing: 150,
    tags: ["Cookies", "Dessert", "Baking"],
    userId: 39,
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.9,
    reviewCount: 23,
    mealType: ["Snack", "Dessert"],
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    ingredients: [
      "Fettuccine pasta",
      "Chicken breast, sliced",
      "Heavy cream",
      "Parmesan cheese, grated",
      "Garlic, minced",
      "Butter",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Cook fettuccine pasta according to package instructions.",
      "In a pan, sauté sliced chicken in butter until fully cooked.",
      "Add minced garlic and cook until fragrant.",
      "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
      "Season with salt and pepper to taste.",
      "Combine the Alfredo sauce with cooked pasta.",
      "Garnish with fresh parsley before serving.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    caloriesPerServing: 500,
    tags: ["Pasta", "Chicken"],
    userId: 46,
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    rating: 4.9,
    reviewCount: 38,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 5,
    name: "Mango Salsa Chicken",
    ingredients: [
      "Chicken thighs",
      "Mango, diced",
      "Red onion, finely chopped",
      "Cilantro, chopped",
      "Lime juice",
      "Jalapeño, minced",
      "Salt and pepper to taste",
      "Cooked rice for serving",
    ],
    instructions: [
      "Season chicken thighs with salt and pepper.",
      "Grill or bake chicken until fully cooked.",
      "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
      "Dice the cooked chicken and mix it with the mango salsa.",
      "Serve over cooked rice.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 3,
    difficulty: "Easy",
    cuisine: "Mexican",
    caloriesPerServing: 380,
    tags: ["Chicken", "Salsa"],
    userId: 48,
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    rating: 4.9,
    reviewCount: 25,
    mealType: ["Dinner"],
  },
  {
    id: 6,
    name: "Quinoa Salad with Avocado",
    ingredients: [
      "Quinoa, cooked",
      "Avocado, diced",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red bell pepper, diced",
      "Feta cheese, crumbled",
      "Lemon vinaigrette dressing",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
      "Drizzle with lemon vinaigrette dressing and toss to combine.",
      "Season with salt and pepper to taste.",
      "Chill in the refrigerator before serving.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    caloriesPerServing: 280,
    tags: ["Salad", "Quinoa"],
    userId: 5,
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    rating: 4.4,
    reviewCount: 21,
    mealType: ["Lunch", "Side Dish"],
  },
  {
    id: 7,
    name: "Tomato Basil Bruschetta",
    ingredients: [
      "Baguette, sliced",
      "Tomatoes, diced",
      "Fresh basil, chopped",
      "Garlic cloves, minced",
      "Balsamic glaze",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
      "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
      "Season with salt and pepper to taste.",
      "Top each toasted baguette slice with the tomato-basil mixture.",
      "Drizzle with balsamic glaze before serving.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 6,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 120,
    tags: ["Bruschetta", "Italian"],
    userId: 50,
    image: "https://cdn.dummyjson.com/recipe-images/7.webp",
    rating: 4.7,
    reviewCount: 9,
    mealType: ["Appetizer"],
  },
  {
    id: 1,
    name: "Classic Margherita Pizza",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 45,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 3,
  },
  {
    id: 2,
    name: "Vegetarian Stir-Fry",
    ingredients: [
      "Tofu, cubed",
      "Broccoli florets",
      "Carrots, sliced",
      "Bell peppers, sliced",
      "Soy sauce",
      "Ginger, minced",
      "Garlic, minced",
      "Sesame oil",
      "Cooked rice for serving",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 3,
    difficulty: "Medium",
    cuisine: "Asian",
    caloriesPerServing: 250,
    tags: ["Vegetarian", "Stir-fry", "Asian"],
    userId: 58,
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    rating: 4.7,
    reviewCount: 36,
    mealType: ["Lunch"],
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "All-purpose flour",
      "Butter, softened",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla extract",
      "Baking soda",
      "Salt",
      "Chocolate chips",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 24,
    difficulty: "Easy",
    cuisine: "American",
    caloriesPerServing: 150,
    tags: ["Cookies", "Dessert", "Baking"],
    userId: 39,
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.9,
    reviewCount: 23,
    mealType: ["Snack", "Dessert"],
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    ingredients: [
      "Fettuccine pasta",
      "Chicken breast, sliced",
      "Heavy cream",
      "Parmesan cheese, grated",
      "Garlic, minced",
      "Butter",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Cook fettuccine pasta according to package instructions.",
      "In a pan, sauté sliced chicken in butter until fully cooked.",
      "Add minced garlic and cook until fragrant.",
      "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
      "Season with salt and pepper to taste.",
      "Combine the Alfredo sauce with cooked pasta.",
      "Garnish with fresh parsley before serving.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    caloriesPerServing: 500,
    tags: ["Pasta", "Chicken"],
    userId: 46,
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    rating: 4.9,
    reviewCount: 38,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 5,
    name: "Mango Salsa Chicken",
    ingredients: [
      "Chicken thighs",
      "Mango, diced",
      "Red onion, finely chopped",
      "Cilantro, chopped",
      "Lime juice",
      "Jalapeño, minced",
      "Salt and pepper to taste",
      "Cooked rice for serving",
    ],
    instructions: [
      "Season chicken thighs with salt and pepper.",
      "Grill or bake chicken until fully cooked.",
      "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
      "Dice the cooked chicken and mix it with the mango salsa.",
      "Serve over cooked rice.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 3,
    difficulty: "Easy",
    cuisine: "Mexican",
    caloriesPerServing: 380,
    tags: ["Chicken", "Salsa"],
    userId: 48,
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    rating: 4.9,
    reviewCount: 25,
    mealType: ["Dinner"],
  },
  {
    id: 6,
    name: "Quinoa Salad with Avocado",
    ingredients: [
      "Quinoa, cooked",
      "Avocado, diced",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red bell pepper, diced",
      "Feta cheese, crumbled",
      "Lemon vinaigrette dressing",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
      "Drizzle with lemon vinaigrette dressing and toss to combine.",
      "Season with salt and pepper to taste.",
      "Chill in the refrigerator before serving.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    caloriesPerServing: 280,
    tags: ["Salad", "Quinoa"],
    userId: 5,
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    rating: 4.4,
    reviewCount: 21,
    mealType: ["Lunch", "Side Dish"],
  },
  {
    id: 7,
    name: "Tomato Basil Bruschetta",
    ingredients: [
      "Baguette, sliced",
      "Tomatoes, diced",
      "Fresh basil, chopped",
      "Garlic cloves, minced",
      "Balsamic glaze",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
      "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
      "Season with salt and pepper to taste.",
      "Top each toasted baguette slice with the tomato-basil mixture.",
      "Drizzle with balsamic glaze before serving.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 6,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 120,
    tags: ["Bruschetta", "Italian"],
    userId: 50,
    image: "https://cdn.dummyjson.com/recipe-images/7.webp",
    rating: 4.7,
    reviewCount: 9,
    mealType: ["Appetizer"],
  },
  {
    id: 1,
    name: "Classic Margherita Pizza",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 45,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 3,
  },
  {
    id: 2,
    name: "Vegetarian Stir-Fry",
    ingredients: [
      "Tofu, cubed",
      "Broccoli florets",
      "Carrots, sliced",
      "Bell peppers, sliced",
      "Soy sauce",
      "Ginger, minced",
      "Garlic, minced",
      "Sesame oil",
      "Cooked rice for serving",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 3,
    difficulty: "Medium",
    cuisine: "Asian",
    caloriesPerServing: 250,
    tags: ["Vegetarian", "Stir-fry", "Asian"],
    userId: 58,
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    rating: 4.7,
    reviewCount: 36,
    mealType: ["Lunch"],
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "All-purpose flour",
      "Butter, softened",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla extract",
      "Baking soda",
      "Salt",
      "Chocolate chips",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 24,
    difficulty: "Easy",
    cuisine: "American",
    caloriesPerServing: 150,
    tags: ["Cookies", "Dessert", "Baking"],
    userId: 39,
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.9,
    reviewCount: 23,
    mealType: ["Snack", "Dessert"],
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    ingredients: [
      "Fettuccine pasta",
      "Chicken breast, sliced",
      "Heavy cream",
      "Parmesan cheese, grated",
      "Garlic, minced",
      "Butter",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Cook fettuccine pasta according to package instructions.",
      "In a pan, sauté sliced chicken in butter until fully cooked.",
      "Add minced garlic and cook until fragrant.",
      "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
      "Season with salt and pepper to taste.",
      "Combine the Alfredo sauce with cooked pasta.",
      "Garnish with fresh parsley before serving.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    caloriesPerServing: 500,
    tags: ["Pasta", "Chicken"],
    userId: 46,
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    rating: 4.9,
    reviewCount: 38,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 5,
    name: "Mango Salsa Chicken",
    ingredients: [
      "Chicken thighs",
      "Mango, diced",
      "Red onion, finely chopped",
      "Cilantro, chopped",
      "Lime juice",
      "Jalapeño, minced",
      "Salt and pepper to taste",
      "Cooked rice for serving",
    ],
    instructions: [
      "Season chicken thighs with salt and pepper.",
      "Grill or bake chicken until fully cooked.",
      "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
      "Dice the cooked chicken and mix it with the mango salsa.",
      "Serve over cooked rice.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 3,
    difficulty: "Easy",
    cuisine: "Mexican",
    caloriesPerServing: 380,
    tags: ["Chicken", "Salsa"],
    userId: 48,
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    rating: 4.9,
    reviewCount: 25,
    mealType: ["Dinner"],
  },
  {
    id: 6,
    name: "Quinoa Salad with Avocado",
    ingredients: [
      "Quinoa, cooked",
      "Avocado, diced",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red bell pepper, diced",
      "Feta cheese, crumbled",
      "Lemon vinaigrette dressing",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
      "Drizzle with lemon vinaigrette dressing and toss to combine.",
      "Season with salt and pepper to taste.",
      "Chill in the refrigerator before serving.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    caloriesPerServing: 280,
    tags: ["Salad", "Quinoa"],
    userId: 5,
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    rating: 4.4,
    reviewCount: 21,
    mealType: ["Lunch", "Side Dish"],
  },
];

const Deliverys = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-[75%] mx-auto mt-[20px]" ref={ref}>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            Restaurants with online food delivery in Raipur
          </div>
        </div>
        <div className={`${isSticky ? 'fixed top-0 z-[999999] bg-white w-full md:w-[80%] ml-[-20px] mx-5' : ''}`} > 
           <div className="mx-auto flex my-4 text-[14px] target-element"  >
             <div className="p-2 rounded-md shadow-2xl border border-[1px]-black mx-2">Filter</div>
             <div className="p-2 rounded-md shadow-2xl border border-[1px]-black mx-2">Sort</div>
             <div className="p-2 rounded-md shadow-2xl border border-[1px]-black mx-2">Fast Delivery</div>
             {/* <div className="p-2 rounded-md shadow-2xl border border-[1px]-black mx-2">New on Swiggy</div>
             <div className="p-2 rounded-md shadow-2xl border border-[1px]-black mx-2">Rating 4.0+</div>
             <div className="p-2 rounded-md shadow-2xl border border-[1px]-black mx-2">Pure Veg</div>
             <div className="p-2 rounded-md shadow-2xl border border-[1px]-black mx-2">Offer</div> */}

           </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 w-full">
          {food.map((data,index) => {
             return(
              <>
              <div key={index}>
              <div key={index} className="group flex shrink-0 p-2  md:h-[180px] md:w-[250px] relative">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="group-hover:scale-110 duration-100 mx-auto w-full h-full gap-2 rounded-[15px] object-cover"
                  />
                  <div className="image-overlay absolute w-full h-full top-0 rounded-[15px] flex items-end text-white font-bold text-[15px] md:text-[23px] tracking-tighter pl-2">
                    {data.cuisine} ₹{Math.floor(Math.random() * 100)} off
                  </div>
                </div>
                <div className="text-black text-[15px] mt-2">{data.name}</div>
                <div>
                  <FaStar className="text-[green] inline mr-2" />{" "}
                  <span className="text-[16px] font-semibold">
                    {data.rating}{" "}
                  </span>
                  <span className="ml-2 font-semibold">
                    {" "}
                    {data.cookTimeMinutes} - {data.prepTimeMinutes} mins{" "}
                  </span>
                </div>
                <div className="text-[12px]">
                  {data.difficulty} , {data.name}...
                </div>
                </div>
               </>
             )
          })}
        </div>
        <hr className="my-10 border-[1px]" />
      </div>
    </>
  );
};

export default Deliverys;
