
const menuData = [

  // Paneer
  {
    id:33, name:"Paneer Butter Masala",
    desc:"Soft paneer cubes in a rich tomato and butter gravy",
    price:229, category:"paneer", emoji:"🧀", type:"veg", rating:"4.8",
    img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/09/instant-pot-paneer-butter-masala-featured.jpg"
  },
  {
    id:34, name:"Shahi Paneer",
    desc:"Creamy paneer curry with a blend of aromatic spices",
    price:249, category:"paneer", emoji:"🧀", type:"veg", rating:"4.7",
    img:"https://www.travelbook.de/data/uploads/2021/03/gettyimages-670906895-1024x683.jpg"
  },
  {
    id:35, name:"Paneer Tikka Masala",
    desc:"Grilled paneer tikka in a spicy tomato-based gravy",
    price:239, category:"paneer", emoji:"🧀", type:"veg", rating:"4.6",
    img:"https://healthynibblesandbits.com/wp-content/uploads/2019/07/Paneer-Tikka-Masala-2.jpg",
  },
  {
    id:36, name:"Kadai Paneer",
    desc:"Paneer cubes cooked with bell peppers and onions in a spicy gravy",
    price:219, category:"paneer", emoji:"🧀", type:"veg", rating:"4.5",
    img:"https://therecipemaster.com/wp-content/uploads/2025/01/Kadai-Paneer-Recipe4.webp"
  },
  {
    id:37, name:"Matar Paneer",
    desc:"Paneer and green peas in a mildly spiced tomato gravy",
    price:209, category:"paneer", emoji:"🧀", type:"veg", rating:"4.4",
    img:"https://www.indianveggiedelight.com/wp-content/uploads/2019/12/matar-paneer-instant-pot-featured.jpg"
  },
  {
    id:38, name:"Paneer Do Pyaza",
    desc:"Paneer cooked with double the onions and a blend of spices",
    price:229, category:"paneer", emoji:"🧀", type:"veg", rating:"4.5",
    img:"https://rakskitchen.net/wp-content/uploads/2021/11/paneer-do-pyaza-youtube.jpg"
  },
  {
    id:39, name:"Palak Paneer",
    desc:"Paneer cubes in a creamy spinach gravy with mild spices",
    price:219, category:"paneer", emoji:"🧀", type:"veg", rating:"4.7",
    img:"https://www.indianhealthyrecipe.com/wp-content/uploads/2023/12/palak-paneer-recipe-featured.webp"
  },
  {
    id:40, name:"Paneer Lababdar",
    desc:"Rich and creamy paneer curry with a blend of spices and cream",
    price:249, category:"paneer", emoji:"🧀", type:"veg", rating:"4.6",
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/paneer-lababdar-recipe.jpg"
  },
  {
    id:41, name:"Paneer Pasanda",
    desc:"Paneer stuffed with nuts and cooked in a creamy gravy",
    price:259, category:"paneer", emoji:"🧀", type:"veg", rating:"4.5",
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/paneer-pasanda-recipe.webp"
  },
  {
    id:42, name:"Paneer Bhurji",
    desc:"Scrambled paneer cooked with onions, tomatoes and spices",
    price:199, category:"paneer", emoji:"🧀", type:"veg", rating:"4.4",
    img:"https://pepkitchen.com/wp-content/uploads/2018/05/Paneer_bhurji.jpg"
  },

  // Sandwiches

  {
    id:43, name:"Grilled Cheese Sandwich",
    desc:"Melted cheese between buttery grilled bread slices",
    price:129, category:"sandwich", emoji:"🧀", type:"veg", rating:"4.5",
    img:"https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg"
  },
  {
    id:44, name:"Chicken Club Sandwich",
    desc:"Grilled chicken, bacon, lettuce, tomato & mayo on toasted bread",
    price:179, category:"sandwich", emoji:"🍗", type:"non-veg", rating:"4.6",
    img:"https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg"
  },
  {
    id:45, name:"Veggie Sandwich",
    desc:"Cucumber, tomato, lettuce, cheese & green chutney on whole wheat",
    price:119, category:"sandwich", emoji:"🥗", type:"veg", rating:"4.4",
    img:"https://www.themediterraneandish.com/wp-content/uploads/2024/03/TMD-Vegetable-Sandwich-Leads-02-Horizontal.jpg"
  },
  {
    id:46, name:"Egg Salad Sandwich",
    desc:"Creamy egg salad with lettuce and mayo on soft bread",
    price:139, category:"sandwich", emoji:"🥚", type:"non-veg", rating:"4.5",
    img:"https://insanelygoodrecipes.com/wp-content/uploads/2024/02/An-Egg-Salad-Sandwich-on-a-Wooden-Cutting-Board.jpg"
  },
  {
    id:47, name:"Paneer Sandwich",
    desc:"Grilled paneer, mint chutney, onions & lettuce on toasted bread",
    price:149, category:"sandwich", emoji:"🧀", type:"veg", rating:"4.6",
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/paneer-sandwich-recipe.jpg"
  },
  // Burgers
  {
    id:1, name:"Classic Beef Burger",
    desc:"Juicy beef patty, cheddar, lettuce, tomato & special sauce",
    price:199, category:"burger", emoji:"🍔", type:"non-veg", rating:"4.5",
    img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
  },
  {
    id:2, name:"Veggie Delight Burger",
    desc:"Crispy veggie patty with avocado, fresh greens & garlic mayo",
    price:149, category:"burger", emoji:"🥗", type:"veg", rating:"4.3",
    img:"https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400&q=80"
  },
  {
    id:3, name:"Spicy Chicken Burger",
    desc:"Fried chicken breast, jalapeños, coleslaw & chipotle sauce",
    price:179, category:"burger", emoji:"🍔", type:"non-veg", rating:"4.6",
    img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80"
  },
  {
    id:4, name:"Paneer Tikka Burger",
    desc:"Grilled paneer tikka, mint chutney, onions & lettuce",
    price:169, category:"burger", emoji:"🧀", type:"veg", rating:"4.4",
    img:"https://i.ytimg.com/vi/rhjw9KwqvNU/maxresdefault.jpg"
  },
  {
    id:24, name:"Double Cheese Burger",
    desc:"Two layers of cheese, lettuce & special sauce",
    price:189, category:"burger", emoji:"🍔", type:"veg", rating:"4.2",
    img:"https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e-500x500.jpeg"
  },

  // Pizza
  {
    id:5, name:"Margherita Pizza",
    desc:"Classic tomato sauce, fresh mozzarella & basil leaves",
    price:299, category:"pizza", emoji:"🍕", type:"veg", rating:"4.7",
    img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80"
  },
  {
    id:6, name:"Pepperoni Pizza",
    desc:"Loaded with pepperoni, mozzarella & tangy tomato sauce",
    price:349, category:"pizza", emoji:"🍕", type:"non-veg", rating:"4.8",
    img:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80"
  },
  {
    id:7, name:"BBQ Paneer Pizza",
    desc:"Smoky BBQ sauce, paneer, bell peppers & onions",
    price:329, category:"pizza", emoji:"🍕", type:"veg", rating:"4.5",
    img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
  },
  {
    id:23, name:"Veggie Supreme Pizza",
    desc:"Tomato sauce, mozzarella, olives, bell peppers & onions",
    price:319, category:"pizza", emoji:"🍕", type:"veg", rating:"4.4" ,
    img:"https://tastyoven.com/wp-content/uploads/2025/06/veggie-supreme-pizza-image-720x720.jpg"
  },
  {
    id:24, name:"Chicken Sausage Pizza",
    desc:"Tomato sauce, mozzarella, chicken sausage & herbs",
    price:359, category:"pizza", emoji:"🍕", type:"non-veg", rating:"4.6",
    img:"https://grumpyshoneybunch.com/wp-content/uploads/2008/03/Chicken-Sausage-Pizza-7.jpg"
  },

  // Biryani
  {
    id:8, name:"Chicken Biryani",
    desc:"Fragrant basmati, tender chicken & whole aromatic spices",
    price:249, category:"biryani", emoji:"🍛", type:"non-veg", rating:"4.9",
    img:"https://static.vecteezy.com/system/resources/previews/035/375/552/large_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg"
  },
  {
    id:9, name:"Veg Biryani",
    desc:"Aromatic basmati with mixed vegetables & saffron",
    price:199, category:"biryani", emoji:"🍛", type:"veg", rating:"4.4",
    img:"https://images.unsplash.com/photo-1630409351217-bc4fa6422075?w=400&q=80"
  },
  {
    id:10, name:"Mutton Biryani",
    desc:"Slow-cooked mutton dum biryani with caramelised onions",
    price:299, category:"biryani", emoji:"🍛", type:"non-veg", rating:"4.8",
    img:"https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230743.jpg"
  },
  {
    id:25, name:"Prawn Biryani",
    desc:"Fragrant basmati with succulent prawns & aromatic spices",
    price:279, category:"biryani", emoji:"🍛", type:"non-veg", rating:"4.7",
    img:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg",
  },
  {
    id:26, name:"Egg Biryani",
    desc:"Flavourful basmati with boiled eggs, spices & herbs",
    price:229, category:"biryani", emoji:"🍛", type:"non-veg", rating:"4.5",
    img:"https://spicecravings.com/wp-content/uploads/2020/10/Egg-Biryani-Featured-1-1024x1024.jpg"
  },

  // Pasta
  {
    id:11, name:"Pasta Arrabbiata",
    desc:"Spicy tomato sauce, garlic, capers & fresh herbs",
    price:219, category:"pasta", emoji:"🍝", type:"veg", rating:"4.4",
    img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80"
  },
  {
    id:12, name:"Creamy Mushroom Pasta",
    desc:"Rich Alfredo sauce with sautéed mushrooms & parmesan",
    price:239, category:"pasta", emoji:"🍝", type:"veg", rating:"4.6",
    img:"https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80"
  },
  {
    id:13, name:"Chicken Pesto Pasta",
    desc:"Grilled chicken strips tossed in fresh basil pesto",
    price:279, category:"pasta", emoji:"🍝", type:"non-veg", rating:"4.5",
    img:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80"
  },
  {
    id:26, name:"Veg Alfredo Pasta",
    desc:"Creamy Alfredo sauce with fresh vegetables & herbs",
    price:249, category:"pasta", emoji:"🍝", type:"veg", rating:"4.5",
    img:"https://www.sharethespice.com/wp-content/uploads/2022/02/Featured-Creamy-Vegan-Alfredo-Pasta.jpg"
  },
  {
    id:27, name:"Spaghetti Pasta", 
    desc:"Classic Italian meat sauce with spaghetti pasta",
    price:279, category:"pasta", emoji:"🍝", type:"non-veg", rating:"4.7",
    img:"https://images.eatsmarter.de/sites/default/files/styles/max_size/public/spaghetti-bolognese-original-59303.jpg"
  },
  {
    id:28, name:"Penne Pasta",
    desc:"Penne pasta in a spicy tomato and garlic sauce",
    price:229, category:"pasta", emoji:"🍝", type:"veg", rating:"4.4",
    img:"https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
  },
  {
    id:29, name:"Chicken Alfredo Pasta",
    desc:"Grilled chicken in a creamy Alfredo sauce with fettuccine",
    price:299, category:"pasta", emoji:"🍝", type:"non-veg", rating:"4.6",
    img:"https://thecookingjar.com/wp-content/uploads/2023/08/creamy-cajun-chicken-pasta-1.jpg",
  },
  {
    id:30, name:"Veg Pesto Pasta",
    desc:"Fresh basil pesto with vegetables and parmesan",
    price:249, category:"pasta", emoji:"🍝", type:"veg", rating:"4.5",
    img:"https://pickyeaterblog.com/wp-content/uploads/2022/01/vegetarian-pesto-pasta-recipe-with-spinach-and-basil-and-pine-nuts.jpg"
  },
  {
    id:31, name:"Baked Pasta",
    desc:"Pasta with prawns, mussels, and a rich seafood sauce",
    price:329, category:"pasta", emoji:"🍝", type:"non-veg", rating:"4.7",
    img:"https://www.spendwithpennies.com/wp-content/uploads/2013/10/Creamy-Tomato-Pasta-SpendWithPennies-6.jpg"
  },
  {
    id:32, name:"Mushroom  Pasta",
    desc:"Sautéed mushrooms in a creamy stroganoff sauce with pasta",
    price:259, category:"pasta", emoji:"🍝", type:"veg", rating:"4.6",
    img:"https://www.cucinabyelena.com/wp-content/uploads/2025/01/Creamy-Mushroom-Pasta-Recipe-10-scaled.jpg"
  },

  // Desserts
  {
    id:14, name:"Chocolate Lava Cake",
    desc:"Warm chocolate cake with a gooey molten center",
    price:129, category:"dessert", emoji:"🍫", type:"veg", rating:"4.9",
    img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80"
  },
  {
    id:15, name:"Gulab Jamun (4 pcs)",
    desc:"Soft khoya balls soaked in rose-flavoured sugar syrup",
    price:79, category:"dessert", emoji:"🍮", type:"veg", rating:"4.7",
    img:"https://theartisticcook.com/wp-content/uploads/2024/10/Gulab-Jamun-with-Milk-Powder.jpg"
  },
  {
    id:16, name:"Ice Cream Sundae",
    desc:"3 scoops with hot fudge, nuts & whipped cream",
    price:149, category:"dessert", emoji:"🍨", type:"veg", rating:"4.6",
    img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80"
  },
  {
    id:27, name:"Rasmalai (4 pcs)",
    desc:"Soft paneer discs in sweetened, cardamom-flavoured milk",
    price:89, category:"dessert", emoji:"🍮", type:"veg", rating:"4.8",
    img:"https://platinitwithwendy.com/wp-content/uploads/2023/03/DSC_0355-1320x900.jpeg"
  },
  {
    id:28, name:"Strawberry Cheesecake",
    desc:"Classic Italian dessert with layers of strawberry and mascarpone cream",
    price:159, category:"dessert", emoji:"🍰", type:"veg", rating:"4.7",
    img:"https://rome-tourism.org/wp-content/uploads/2023/11/gateau-tiramisu-italien-2048x2048.jpg"
  },
  {
    id:29, name:"Mango Kulfi",
    desc:"Traditional Indian ice cream made with mango pulp and cardamom",
    price:99, category:"dessert", emoji:"🍦", type:"veg", rating:"4.5",
    img:"https://i.ytimg.com/vi/nHUaSlf18CA/maxresdefault.jpg"
  },
  {
    id:30, name:"Banana cake",
    desc:"Delicious pie with bananas, toffee, and whipped cream",
    price:129, category:"dessert", emoji:"🥧", type:"veg", rating:"4.6",
    img:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://foodieefairy.com/wp-content/uploads/2025/09/mrgv15xssbuirxdtdvcy.webp",
  },
  {
    id:31, name:"Carrot Halwa",
    desc:"Warm Indian dessert made with grated carrots, milk, and nuts",
    price:109, category:"dessert", emoji:"🥕", type:"veg", rating:"4.7",
    img:"https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/06/gajar-halwa-recipe-step-by-step-instructions.jpg?resize=1024%2C766&quality=65&strip=all&ssl=1",
  },
  {
    id:32, name:"Chocolate Brownie",
    desc:"Rich and fudgy chocolate brownie with a crackly top",
    price:139, category:"dessert", emoji:"🍫", type:"veg", rating:"4.8",
    img:"https://images.alphacoders.com/838/thumb-1920-838946.jpg",
  },
  {
    id:33, name:"Pistachio Ice Cream",
    desc:"Creamy ice cream with crunchy pistachio nuts",
    price:119, category:"dessert", emoji:"🍦", type:"veg", rating:"4.6",
    img:"https://recipes.net/wp-content/uploads/2023/07/pistachio-ice-cream_e9179e5fd52e49ebdd4a3f94d15837bf.jpeg",
  },

  // Drinks
  {
    id:17, name:"Fresh Lime Soda",
    desc:"Chilled lime soda, your choice of sweet or salted",
    price:59, category:"drinks", emoji:"🍋", type:"veg", rating:"4.3",
    img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80"
  },
  {
    id:18, name:"Mango Lassi",
    desc:"Thick, creamy yogurt mango drink with a hint of cardamom",
    price:89, category:"drinks", emoji:"🥭", type:"veg", rating:"4.8",
    img:"https://i.pinimg.com/originals/34/09/9d/34099d3b61e04f41b9aac36b873dd0d4.webp"
  },
  {
    id:19, name:"Cold Coffee",
    desc:"Frothy cold coffee with milk, espresso & caramel drizzle",
    price:99, category:"drinks", emoji:"☕", type:"veg", rating:"4.7",
    img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
  },
  {
    id:20, name:"Masala Chai",
    desc:"Spiced Indian tea brewed with milk, tea leaves & masala",
    price:49, category:"drinks", emoji:"🍵", type:"veg", rating:"4.5",
    img:"https://goqii.com/blog/wp-content/uploads/Masala-Chai-2.jpg"
  },
  {
    id:21, name:"Strawberry Smoothie",
    desc:"Blended strawberries with yogurt and a touch of honey",
    price:109, category:"drinks", emoji:"🍓", type:"veg", rating:"4.6",
    img:"https://www.thespruceeats.com/thmb/NN__HoYeaf66u46Pnd9lISywfwQ=/5472x3648/filters:fill(auto,1)/strawberry-breakfast-smoothie-recipe-2097149-hero-02-5c1d4b2a46e0fb00014bf2ec.jpg"
  },
  {
    id:22, name:"Cold Pressed Juice",
    desc:"Freshly cold-pressed juice with seasonal fruits & veggies",
    price:129, category:"drinks", emoji:"🧃", type:"veg", rating:"4.7",
    img:"https://1.bp.blogspot.com/-AfBCD8_AF6c/Wmh_8OJoksI/AAAAAAAA72U/LNznRFp26qwIxx5M10eAjQeVG3imUEuiwCLcBGAs/s1600/7-eleven-cold-pressed-juices.jpg"
  },
  {
    id:23, name:"Lemon Iced Tea",
    desc:"Refreshing iced tea brewed with real lemon and a hint of mint",
    price:69, category:"drinks", emoji:"🍋", type:"veg", rating:"4.4",
    img:"https://img.freepik.com/premium-photo/iced-lemon-tea-isolated-white-background_881868-3140.jpg?w=2000"
  },
  {
    id:24, name:"Watermelon Agua Fresca",
    desc:"Light and refreshing watermelon drink with a touch of lime",
    price:89, category:"drinks", emoji:"🍉", type:"veg", rating:"4.5",
    img:"https://img.freepik.com/premium-photo/fresh-mexican-watermelon-agua-fresca_974629-503859.jpg"
  },
  {
    id:25, name:"Cucumber Mint Cooler",
    desc:"Cooling cucumber and mint drink with a splash of lemon",
    price:79, category:"drinks", emoji:"🥒", type:"veg", rating:"4.6",
    img:"https://i.ytimg.com/vi/XsG5h70rSSI/maxresdefault.jpg"
  },
  {
    id:26, name:"Pineapple Ginger Juice",
    desc:"Tropical pineapple juice with a zesty ginger kick",
    price:109, category:"drinks", emoji:"🍍", type:"veg", rating:"4.7",
    img:"https://thumbs.dreamstime.com/b/fresh-pineapple-ginger-juice-glass-pineapple-slices-small-piece-fresh-ginger-side-served-347802618.jpg"
  },
  
  // Wraps & Rolls
  {
    id:27, name:"Chicken Shawarma Wrap",
    desc:"Marinated chicken, garlic sauce, pickles & veggies in a flatbread",
    price:179, category:"wraps", emoji:"🍗", type:"non-veg", rating:"4.6",
    img:"https://tastytreatideas.com/wp-content/uploads/2025/07/Chicken_shawarma_wrap_sandwich_2.png"
  },
  {
    id:28, name:"Falafel Wrap",
    desc:"Crispy falafel balls, tahini sauce, lettuce & tomato in a flatbread",
    price:149, category:"wraps", emoji:"🌯", type:"veg", rating:"4.5",
    img:"https://mkeed.com/wp-content/uploads/2025/05/falafel-wraps-with-tahini-sauce-featured.png"
  },
  {
    id:29, name:"Paneer Kathi Roll",
    desc:"Spicy paneer, onions, bell peppers & chutney in a paratha wrap",
    price:159, category:"wraps", emoji:"🧀", type:"veg", rating:"4.7",
    img:"https://madhurasrecipe.com/wp-content/uploads/2020/10/Paneer-Kathi-Roll.jpg"
  },
  {
    id:30, name:"Veggie Hummus Wrap",
    desc:"Roasted vegetables, hummus, lettuce & tomato in a flatbread",
    price:139, category:"wraps", emoji:"🌯", type:"veg", rating:"4.4",
    img:"https://www.bowlofdelicious.com/wp-content/uploads/2014/01/Veggie-Wraps-square-1024x1024.jpg",
  },
  {
    id:31, name:"malai Roll",
    desc:"Creamy malai (heavy cream) based roll with spices",
    price:169, category:"wraps", emoji:"🧀", type:"veg", rating:"4.6",
    img:"https://www.spicebangla.com/wp-content/uploads/2024/07/Malai-Roll-Recipe.jpg"
  },

  //Street Food
  {
    id:32, name:"Pani Puri",
    desc:"Crispy puris filled with spicy tamarind water and chickpeas",
    price:99, category:"street", emoji:"🥳", type:"veg", rating:"4.8",
    img:"https://i.pinimg.com/736x/76/6d/bc/766dbcfc1f56e167ee1f9103242f9f08.jpg"
  },
  {
    id:33, name:"Vada Pav",
    desc:"Spicy potato fritter in a bun with garlic chutney",
    price:79, category:"street", emoji:"🍔", type:"veg", rating:"4.7",
    img:"https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav.png"
  },
  {
    id:34, name:"Pav Bhaji",
    desc:"Spiced vegetable mash served with buttered buns",
    price:129, category:"street", emoji:"🍛", type:"veg", rating:"4.6",
    img:"https://www.thestatesman.com/wp-content/uploads/2019/07/pav-bhaji.jpg"
  },
  {
    id:35, name:"Dosa",
    desc:"Crispy fermented rice and lentil crepe with chutney",
    price:149, category:"street", emoji:"🥞", type:"veg", rating:"4.7",
    img:"https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_1280.jpg"
  },
  {
    id:36, name:"Chole Bhature",
    desc:"Spicy chickpea curry with deep-fried fluffy bread",
    price:139, category:"street", emoji:"🍛", type:"veg", rating:"4.5",
    img:"https://i0.wp.com/bakaasur.com/wp-content/uploads/2022/12/chole-bhature.jpg?w=1200&ssl=1"
  },
  {
    id:37, name:"Aloo Tikki",
    desc:"Spiced potato patties served with chutney",
    price:89, category:"street", emoji:"🥔", type:"veg", rating:"4.6",
    img:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Crispy-Aloo-Tikki-Recipe.jpg"
  },
  {
    id:38, name:" Paneer Samosa",
    desc:"Deep-fried pastry filled with spiced paneer and peas",
    price:99, category:"street", emoji:"🥟", type:"veg", rating:"4.7",
    img:"https://desifreshfoods.com/wp-content/uploads/2021/06/paneer-samosa-m.jpg"
  },
  {
    id:39, name:"Kachori",
    desc:"Flaky pastry filled with spiced lentils or onions",
    price:89, category:"street", emoji:"🥟", type:"veg", rating:"4.5",
    img:"http://capecrystalrecipes.com/mt-content/uploads/2019/02/kachori-and-chutney.jpg"
  },
  {
    id:40, name:"Manchurian",
    desc:"Crispy puris topped with diced potatoes, onions, chutneys & sev",
    price:109, category:"street", emoji:"🥳", type:"veg", rating:"4.6",
    img:"https://static.vecteezy.com/system/resources/previews/027/905/426/non_2x/gourmet-lunch-fresh-meat-grilled-vegetable-homemade-sauce-savory-appetizer-generated-by-ai-free-photo.jpg"
  },
  {
    id:41, name:"Dabeli",
    desc:"Spiced mashed potatoes in a bun with pomegranate and peanuts",
    price:99, category:"street", emoji:"🍔", type:"veg", rating:"4.7",
    img:"https://1.bp.blogspot.com/-5XKtZNYPIDU/X7h1L12WYII/AAAAAAAApiI/LTZejs3CvTAcPgZBAl9KDdU9umyY7WiSACLcBGAsYHQ/s2048/1-20201120_182822.jpg"
  },

  // Desi Food
  {
    id:42, name:"Veg Fried Rice",
    desc:"Stir-fried rice with mixed vegetables, soy sauce & spices",
    price:179, category:"village", emoji:"🍚", type:"veg", rating:"4.5",
    img:"https://www.scrumptiously.com/wp-content/uploads/2023/02/VegetableFriedRice.webp"
  },
  {
    id:43, name: "Thali Meal",
    desc: "A traditional platter with rice, dal, vegetables, roti & dessert",
    price:249, category:"village", emoji:"🍽️", type:"veg", rating:"4.7",
    img:"https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9137.jpg?w=2000"
  },
  {
    id:44, name:"Rajma Chawal",
    desc:"Red kidney beans curry served with steamed basmati rice",
    price:199, category:"village", emoji:"🍛", type:"veg", rating:"4.6",
    img:"https://images.slurrp.com/prod/articles/r59d6osh0b.webp"
  },
  {
    id:45, name:"Shahi Thali",
    desc:"Royal platter with rich curries, biryani, naan & dessert",
    price:349, category:"village", emoji:"🍽️", type:"non-veg", rating:"4.8",
    img:"https://www.masala.com/cloud/2021/08/01/y7zDuvG8-Amala-Thali.jpg-1200x800.jpg"
  },
  {
    id:46, name:"Rice flour Sweet",
    desc:"Traditional sweet made from rice flour, jaggery & coconut",
    price:129, category:"village", emoji:"🍚", type:"veg", rating:"4.5",
     img:"https://i.ytimg.com/vi/YiltnWPn6II/maxresdefault.jpg"
  }

];

// ================================================
//   STATE
// ================================================
let users           = JSON.parse(localStorage.getItem("fh_users"))   || [];
let currentUser     = JSON.parse(localStorage.getItem("fh_current")) || null;
let cart            = [];
let orders          = [];
let activeCategory  = "all";
let searchQuery     = "";
let orderIdCounter  = parseInt(localStorage.getItem("fh_oid") || "100");
let userLocation    = null;   // { lat, lng, address }
let pendingOrder    = false;  // user tried to order → trigger auth flow

// ================================================
//   INIT
// ================================================
window.onload = function () {
  renderMenu();         // always show menu publicly
  if (currentUser) {
    loadUserSession();
    updateNavLoggedIn();
  }
};

// ================================================
//   MENU RENDERING
// ================================================
function renderMenu() {
  const grid = document.getElementById("menu-grid");
  let list = menuData;

  if (activeCategory !== "all") {
    list = list.filter(i => i.category === activeCategory);
  }
  if (searchQuery) {
    list = list.filter(i =>
      i.name.toLowerCase().includes(searchQuery) ||
      i.desc.toLowerCase().includes(searchQuery) ||
      i.category.toLowerCase().includes(searchQuery)
    );
  }

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#bbb;font-size:1rem;">😕 No items found. Try a different search or category.</div>`;
    return;
  }

  grid.innerHTML = list.map(item => {
    const inCart    = cart.find(c => c.id === item.id);
    const inCartQty = inCart ? inCart.qty : 0;
    return `
    <div class="menu-card">
      <div class="menu-img-box">
        <img
          src="${item.img}"
          alt="${item.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
          loading="lazy"
        />
        <span class="food-emoji" style="display:none">${item.emoji}</span>
        <span class="menu-rating">⭐ ${item.rating}</span>
      </div>
      <div class="menu-info">
        <div class="menu-name">${item.name}</div>
        <div class="menu-desc">${item.desc}</div>
        <div class="menu-footer">
          <div class="menu-left">
            <div class="menu-price">₹${item.price}</div>
            <span class="veg-tag ${item.type}">${item.type === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}</span>
          </div>
          ${inCartQty > 0
            ? `<div class="qty-controls">
                 <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
                 <span class="qty-val">${inCartQty}</span>
                 <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
               </div>`
            : `<button class="add-btn" onclick="addToCart(${item.id})">Add +</button>`
          }
        </div>
      </div>
    </div>
    `;
  }).join("");
}

function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderMenu();
}

function filterMenu() {
  searchQuery = document.getElementById("search-input").value.trim().toLowerCase();
  renderMenu();
}

function scrollToMenu() {
  document.getElementById("menu-section").scrollIntoView({ behavior:"smooth" });
}

// ================================================
//   CART
// ================================================
function addToCart(id) {
  const item = menuData.find(m => m.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartBadge();
  renderMenu();
  showToast(item.emoji + " " + item.name + " added to cart!");
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartBadge();
  renderMenu();
  renderCartSidebar();
}

function updateCartBadge() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById("cart-count").innerText = count;
}

function renderCartSidebar() {
  const itemsEl   = document.getElementById("cart-items");
  const footerEl  = document.getElementById("cart-footer");
  const emptyEl   = document.getElementById("cart-empty");

  if (cart.length === 0) {
    itemsEl.innerHTML = "";
    footerEl.classList.add("hidden");
    emptyEl.style.display = "flex";
    return;
  }

  emptyEl.style.display = "none";
  footerEl.classList.remove("hidden");

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
      </div>
    </div>
  `).join("");

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const delivery = subtotal >= 299 ? 0 : 30;
  document.getElementById("cart-total").innerText   = "₹" + subtotal;
  document.getElementById("cart-delivery").innerText = delivery === 0 ? "FREE 🎉" : "₹" + delivery;

  // Location display inside cart
  const locEl = document.getElementById("cart-loc-text");
  if (userLocation) {
    locEl.innerText = userLocation.address;
  } else {
    locEl.innerText = currentUser ? "Fetching location…" : "Login to set delivery location";
  }
}

function handleCartClick() {
  if (!currentUser) {
    // Not logged in – open auth first, remember they tried to open cart
    pendingOrder = true;
    openAuthModal("login");
    return;
  }
  toggleCart();
}

function toggleCart() {
  const sidebar  = document.getElementById("cart-sidebar");
  const overlay  = document.getElementById("cart-overlay");
  const isHidden = sidebar.classList.contains("hidden");
  if (isHidden) {
    renderCartSidebar();
    sidebar.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    sidebar.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

// ================================================
//   AUTH MODAL
// ================================================
function openAuthModal(tab) {
  document.getElementById("auth-overlay").classList.remove("hidden");
  showTab(tab || "login");
  document.getElementById("login-error").innerText   = "";
  document.getElementById("signup-error").innerText  = "";
}

function closeAuthModal() {
  document.getElementById("auth-overlay").classList.add("hidden");
  pendingOrder = false;
}

// Close when clicking overlay background
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("auth-overlay").addEventListener("click", function (e) {
    if (e.target === this) closeAuthModal();
  });
  document.getElementById("loc-overlay").addEventListener("click", function (e) {
    if (e.target === this) {
      // don't close location modal easily – user must choose an option
    }
  });
});

function showTab(tab) {
  document.getElementById("login-form").classList.toggle("active",   tab === "login");
  document.getElementById("signup-form").classList.toggle("active",  tab === "signup");
  document.getElementById("tab-login").classList.toggle("active",    tab === "login");
  document.getElementById("tab-signup").classList.toggle("active",   tab === "signup");
}

function togglePass(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// ================================================
//   AUTH LOGIC
// ================================================
function signupUser() {
  const name  = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim().toLowerCase();
  const phone = document.getElementById("signup-phone").value.trim();
  const pass  = document.getElementById("signup-pass").value;
  const errEl = document.getElementById("signup-error");

  if (!name)                        { errEl.innerText = "Please enter your full name."; return; }
  if (!/\S+@\S+\.\S+/.test(email)) { errEl.innerText = "Please enter a valid email."; return; }
  if (!/^\d{10}$/.test(phone))      { errEl.innerText = "Enter a valid 10-digit phone number."; return; }
  if (pass.length < 6)              { errEl.innerText = "Password must be at least 6 characters."; return; }

  const exists = users.find(u => u.email === email || u.phone === phone);
  if (exists) { errEl.innerText = "Account with this email/phone already exists."; return; }

  const newUser = { name, email, phone, pass };
  users.push(newUser);
  localStorage.setItem("fh_users", JSON.stringify(users));

  // Auto-login
  currentUser = newUser;
  localStorage.setItem("fh_current", JSON.stringify(currentUser));
  loadUserSession();
  updateNavLoggedIn();

  document.getElementById("auth-overlay").classList.add("hidden");
  showToast("🎉 Account created! Welcome, " + name.split(" ")[0] + "!");
  afterAuth();
}

function loginUser() {
  const identifier = document.getElementById("login-email").value.trim().toLowerCase();
  const pass       = document.getElementById("login-pass").value;
  const errEl      = document.getElementById("login-error");

  if (!identifier) { errEl.innerText = "Please enter your email or phone."; return; }
  if (!pass)        { errEl.innerText = "Please enter your password."; return; }

  const user = users.find(u =>
    (u.email === identifier || u.phone === identifier) && u.pass === pass
  );
  if (!user) { errEl.innerText = "Invalid email/phone or password."; return; }

  currentUser = user;
  localStorage.setItem("fh_current", JSON.stringify(currentUser));
  loadUserSession();
  updateNavLoggedIn();

  document.getElementById("auth-overlay").classList.add("hidden");
  showToast("👋 Welcome back, " + user.name.split(" ")[0] + "!");
  afterAuth();
}

// Called after successful auth
function afterAuth() {
  // Ask for location
  openLocationModal();
}

function logoutUser() {
  saveUserData();
  currentUser  = null;
  cart         = [];
  orders       = [];
  userLocation = null;
  localStorage.removeItem("fh_current");

  // Update UI
  document.getElementById("user-greeting").classList.add("hidden");
  document.getElementById("location-display").classList.add("hidden");
  document.getElementById("nav-login-btn").classList.remove("hidden");
  document.getElementById("nav-logout-btn").classList.add("hidden");
  document.getElementById("orders-title").classList.add("hidden");
  document.getElementById("orders-list").innerHTML = "";
  updateCartBadge();
  renderMenu();
  showToast("Logged out. See you soon!");
}

function updateNavLoggedIn() {
  document.getElementById("user-greeting").innerText = "Hi, " + currentUser.name.split(" ")[0] + " 👋";
  document.getElementById("user-greeting").classList.remove("hidden");
  document.getElementById("nav-login-btn").classList.add("hidden");
  document.getElementById("nav-logout-btn").classList.remove("hidden");
}

function loadUserSession() {
  cart   = JSON.parse(localStorage.getItem("fh_cart_"   + currentUser.email)) || [];
  orders = JSON.parse(localStorage.getItem("fh_orders_" + currentUser.email)) || [];
  const savedLoc = localStorage.getItem("fh_loc_" + currentUser.email);
  if (savedLoc) {
    userLocation = JSON.parse(savedLoc);
    showLocationInNav();
  }
  updateCartBadge();
  renderOrders();
  renderMenu();
}

function saveUserData() {
  if (!currentUser) return;
  localStorage.setItem("fh_cart_"   + currentUser.email, JSON.stringify(cart));
  localStorage.setItem("fh_orders_" + currentUser.email, JSON.stringify(orders));
  localStorage.setItem("fh_oid", orderIdCounter.toString());
  if (userLocation) {
    localStorage.setItem("fh_loc_" + currentUser.email, JSON.stringify(userLocation));
  }
}

// ================================================
//   LOCATION
// ================================================
function openLocationModal() {
  document.getElementById("loc-overlay").classList.remove("hidden");
  document.getElementById("loc-status").innerText = "";
  document.getElementById("manual-addr-wrap").classList.add("hidden");
}

function closeLocationModal() {
  document.getElementById("loc-overlay").classList.add("hidden");
}

function fetchLocation() {
  const statusEl = document.getElementById("loc-status");
  statusEl.innerText = "⏳ Fetching your location…";

  if (!navigator.geolocation) {
    statusEl.innerText = "⚠️ Geolocation not supported. Please enter address manually.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      statusEl.innerText = "✅ Location fetched! Getting address…";

      // Try reverse-geocoding via open API (no key needed)
      let address = `Lat ${latitude.toFixed(4)}, Lng ${longitude.toFixed(4)}`;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        if (res.ok) {
          const data = await res.json();
          address = data.display_name || address;
          // Shorten
          const parts = address.split(",");
          address = parts.slice(0, 4).join(",").trim();
        }
      } catch (_) { /* use coords fallback */ }

      userLocation = { lat: latitude, lng: longitude, address };
      saveUserData();
      showLocationInNav();
      statusEl.innerText = "📍 " + address;

      setTimeout(() => {
        closeLocationModal();
        if (pendingOrder) {
          pendingOrder = false;
          toggleCart();
        }
        showToast("📍 Delivery location set!");
      }, 1400);
    },
    (err) => {
      let msg = "Could not fetch location.";
      if (err.code === 1) msg = "❌ Location permission denied. Enter address manually.";
      if (err.code === 2) msg = "❌ Location unavailable. Enter address manually.";
      statusEl.innerText = msg;
    },
    { timeout: 10000 }
  );
}

function showManualAddr() {
  document.getElementById("manual-addr-wrap").classList.remove("hidden");
  document.getElementById("manual-addr").focus();
}

function saveManualAddress() {
  const addr = document.getElementById("manual-addr").value.trim();
  if (!addr) {
    document.getElementById("loc-status").innerText = "⚠️ Please enter your delivery address.";
    return;
  }
  userLocation = { lat: null, lng: null, address: addr };
  saveUserData();
  showLocationInNav();
  closeLocationModal();
  if (pendingOrder) {
    pendingOrder = false;
    toggleCart();
  }
  showToast("📍 Delivery address saved!");
}

function skipLocation() {
  showManualAddr();
}

function showLocationInNav() {
  if (!userLocation) return;
  const locEl = document.getElementById("location-display");
  const textEl = document.getElementById("loc-text");
  // Truncate for display
  const short = userLocation.address.length > 30
    ? userLocation.address.substring(0, 30) + "…"
    : userLocation.address;
  textEl.innerText = short;
  locEl.classList.remove("hidden");
}

// ================================================
//   PLACE ORDER
// ================================================
function placeOrder() {
  if (!currentUser) {
    pendingOrder = true;
    openAuthModal("login");
    return;
  }
  if (!userLocation) {
    openLocationModal();
    return;
  }
  if (cart.length === 0) return;

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const delivery = subtotal >= 299 ? 0 : 30;
  const total    = subtotal + delivery;
  const itemNames = cart.map(c => c.emoji + " " + c.name + " ×" + c.qty).join(", ");
  orderIdCounter++;

  const order = {
    id:       "#ORD" + orderIdCounter,
    items:    itemNames,
    subtotal, delivery, total,
    address:  userLocation.address,
    status:   "preparing",
    time:     new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" })
  };

  orders.unshift(order);
  cart = [];
  saveUserData();
  updateCartBadge();
  renderMenu();
  renderCartSidebar();
  toggleCart();
  renderOrders();
  showToast("🎉 Order placed! Preparing your food…");

  // Simulate delivery in 30s
  setTimeout(() => {
    const o = orders.find(x => x.id === order.id);
    if (o && o.status === "preparing") {
      o.status = "delivered";
      saveUserData();
      renderOrders();
      showToast("✅ " + order.id + " has been delivered!");
    }
  }, 30000);
}

// ================================================
//   CANCEL ORDER
// ================================================
function cancelOrder(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  if (order.status === "delivered")  { showToast("Cannot cancel a delivered order."); return; }
  if (order.status === "cancelled")  { showToast("Already cancelled."); return; }
  order.status = "cancelled";
  saveUserData();
  renderOrders();
  showToast("❌ Order " + orderId + " cancelled.");
}

// ================================================
//   RENDER ORDERS
// ================================================
function renderOrders() {
  const listEl  = document.getElementById("orders-list");
  const titleEl = document.getElementById("orders-title");
  if (!currentUser || orders.length === 0) {
    titleEl.classList.add("hidden");
    listEl.innerHTML = "";
    return;
  }
  titleEl.classList.remove("hidden");
  listEl.innerHTML = orders.map(o => {
    const statusLabel = o.status === "preparing" ? "⏳ Preparing"
                      : o.status === "delivered"  ? "✅ Delivered"
                      : "❌ Cancelled";
    const canCancel = o.status === "preparing";
    return `
    <div class="order-card">
      <div class="order-info">
        <h4>${o.id} &nbsp;·&nbsp; ₹${o.total} ${o.delivery === 0 ? '<span style="font-size:.72rem;color:#27ae60">(Free Delivery)</span>' : ""}</h4>
        <p>${o.items}</p>
        <p style="margin-top:4px;font-size:.76rem;color:#bbb">
          📍 ${o.address.substring(0,40)}${o.address.length>40?"…":""}
          &nbsp;·&nbsp; 🕐 ${o.time}
        </p>
      </div>
      <div class="order-meta">
        <span class="status-badge status-${o.status}">${statusLabel}</span>
        ${canCancel ? `<button class="cancel-btn" onclick="cancelOrder('${o.id}')">Cancel</button>` : ""}
      </div>
    </div>
    `;
  }).join("");
}

// ================================================
//   TOAST
// ================================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}
