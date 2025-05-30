
import { Recipe, FrequentPhrase, Restaurant } from './types';

export const APP_NAME = "Jeenu's Taiwan Assitant";

export const PREDEFINED_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'One-Pot Paneer Butter Masala',
    description: 'Creamy and delicious paneer curry, simplified.',
    image: 'https://picsum.photos/seed/paneer/400/300',
    cuisine: 'North Indian',
    prepTime: '15 mins',
    cookTime: '25 mins',
    ingredients: [
      '100g Paneer, cubed',
      '1 medium Onion, chopped',
      '2 medium Tomatoes, pureed',
      '1 tsp Ginger-garlic paste',
      '8-10 Cashews, soaked',
      '1/2 tsp Turmeric powder',
      '1 tsp Red chili powder',
      '1 tsp Coriander powder',
      '1/2 tsp Garam masala',
      '1/4 tsp Kasuri Methi (dried fenugreek leaves)',
      '1 tbsp Butter/Oil',
      'Salt to taste',
      '1/4 cup Water'
    ],
    instructions: [
      'In a pot, heat butter/oil. Add chopped onion and sauté until golden. Add ginger-garlic paste and sauté for 1 minute.',
      'Add tomato puree, turmeric, red chili, and coriander powder. Cook until oil separates.',
      'Add soaked cashews and 1/4 cup water. Simmer for 5 minutes. Let it cool slightly, then blend into a smooth paste.',
      'Return the paste to the pot. Add paneer cubes, garam masala, kasuri methi, and salt. Add a little water if needed for desired consistency.',
      'Simmer for 5-7 minutes, stirring occasionally, until paneer is cooked through and the curry thickens. Serve hot.'
    ]
  },
  {
    id: '2',
    name: 'Vegetable Pulao',
    description: 'Aromatic rice dish with mixed vegetables.',
    image: 'https://picsum.photos/seed/pulao/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1/2 cup Basmati rice, soaked for 20 mins',
      '1/2 cup Mixed vegetables (carrots, peas, beans), chopped',
      '1/4 medium Onion, thinly sliced',
      '2 Green cardamom pods',
      '2 Cloves',
      '1 inch Cinnamon stick',
      '1 Bay leaf',
      '1 tsp Ghee/Oil',
      '1.25 cups Water',
      'Salt to taste'
    ],
    instructions: [
      'Heat ghee/oil in a pot. Add whole spices (cardamom, cloves, cinnamon, bay leaf) and sauté for 30 seconds until fragrant.',
      'Add thinly sliced onion and sauté until translucent. Add mixed vegetables and sauté for 2-3 minutes.',
      'Drain the soaked basmati rice and add it to the pot. Gently mix for 1 minute.',
      'Add 1.25 cups of water and salt to taste. Bring to a boil, then reduce heat to low, cover, and cook for 15-18 minutes until all water is absorbed and rice is cooked.',
      'Turn off the heat and let it rest for 5 minutes before fluffing with a fork. Serve hot.'
    ]
  },
  {
    id: '3',
    name: 'Dal Tadka (One Pot)',
    description: 'Flavorful lentil curry with a tempered spice topping.',
    image: 'https://picsum.photos/seed/dal/400/300',
    cuisine: 'North Indian',
    prepTime: '5 mins',
    cookTime: '30 mins',
    ingredients: [
      '1/2 cup Toor dal/Masoor dal, rinsed',
      '1/4 medium Onion, finely chopped',
      '1 small Tomato, finely chopped',
      '1/2 inch Ginger, grated',
      '1-2 cloves Garlic, minced',
      '1/2 tsp Turmeric powder',
      '1/2 tsp Red chili powder (optional)',
      '1 tsp Ghee/Oil',
      '1/2 tsp Cumin seeds',
      'A pinch of Asafoetida (hing)',
      '2-3 Curry leaves (optional)',
      '1 Green chili, slit (optional)',
      'Coriander leaves for garnish',
      '2 cups Water',
      'Salt to taste'
    ],
    instructions: [
      'In a pressure cooker, combine rinsed dal, chopped onion, tomato, grated ginger, minced garlic, turmeric powder, red chili powder (if using), and 2 cups of water. Add salt to taste.',
      'Pressure cook for 3-4 whistles (or until dal is tender). Let the pressure release naturally.',
      'For the tadka: In a small pan, heat ghee/oil. Add cumin seeds and let them splutter. Add asafoetida, curry leaves (if using), and slit green chili (if using). Sauté for 30 seconds.',
      'Pour the hot tadka over the cooked dal. Mix well. Garnish with fresh coriander leaves. Serve hot.'
    ]
  },
  {
    id: '4',
    name: 'Mushroom Risotto',
    description: 'Creamy Italian rice dish with mushrooms.',
    image: 'https://picsum.photos/seed/risotto/400/300',
    cuisine: 'Italian',
    prepTime: '10 mins',
    cookTime: '30 mins',
    ingredients: [
      '1/2 cup Arborio rice',
      '100g Mushrooms, sliced',
      '3-4 cups Vegetable broth, warm',
      '1/4 medium Onion, finely chopped',
      '1 clove Garlic, minced',
      '1 tbsp Olive oil',
      '2 tbsp Parmesan cheese, grated (ensure vegetarian if needed)',
      '1/4 cup Dry white wine (optional)',
      '1 tbsp Butter (optional)',
      'Fresh parsley, chopped, for garnish',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'In a large saucepan, heat olive oil over medium heat. Add chopped onion and sauté until softened (about 3-4 minutes). Add minced garlic and cook for another minute until fragrant.',
      'Add sliced mushrooms and cook until they release their liquid and brown (about 5-7 minutes).',
      'Add Arborio rice and stir for 1-2 minutes until the edges of the grains become translucent.',
      'If using white wine, add it now and stir until it\'s completely absorbed.',
      'Begin adding warm vegetable broth, one ladleful at a time, stirring constantly. Wait for each ladleful to be almost completely absorbed before adding the next.',
      'Continue this process for about 20-25 minutes, or until the rice is creamy and al dente (cooked through but still firm to the bite). You may not need all the broth.',
      'Remove from heat. Stir in grated Parmesan cheese and butter (if using). Season with salt and black pepper to taste. Garnish with fresh parsley before serving.'
    ]
  },
  {
    id: '5',
    name: 'Lemon Rice',
    description: 'Tangy and flavorful South Indian rice.',
    image: 'https://picsum.photos/seed/lemonrice/400/300',
    cuisine: 'South Indian',
    prepTime: '5 mins',
    cookTime: '15 mins',
    ingredients: [
      '1 cup Cooked rice (preferably cooled leftover rice)',
      '1 tbsp Lemon juice',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Urad dal (split black lentils)',
      '1/2 tsp Chana dal (split chickpeas)',
      '1 tbsp Peanuts',
      '5-6 Curry leaves',
      '1/4 tsp Turmeric powder',
      '1 Green chili, slit (optional)',
      '1 tbsp Oil',
      'A pinch of Asafoetida (hing)',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan. Add mustard seeds and let them splutter. Add urad dal, chana dal, and peanuts. Sauté until the dals turn light golden and peanuts are roasted.',
      'Add curry leaves, green chili (if using), and asafoetida. Sauté for 30 seconds.',
      'Add turmeric powder and quickly stir. Immediately add the cooked rice and salt to taste. Mix gently to combine, ensuring rice grains don\'t break.',
      'Turn off the heat and stir in the lemon juice. Mix well. Serve hot or warm.'
    ]
  },
  {
    id: '6',
    name: 'Aloo Gobi (One Pot)',
    description: 'Simple potato and cauliflower stir-fry.',
    image: 'https://picsum.photos/seed/aloogobi/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '25 mins',
    ingredients: [
      '1 medium Potato, peeled and diced (about 1 cup)',
      '1 cup Cauliflower florets',
      '1/4 medium Onion, chopped',
      '1 small Tomato, chopped',
      '1/2 inch Ginger, grated',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Red chili powder',
      '1/4 tsp Garam masala',
      '1 tbsp Oil',
      '2 tbsp Water',
      'Coriander leaves for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a heavy-bottomed pan or pot. Add cumin seeds and let them splutter. Add chopped onion and grated ginger. Sauté until onion is translucent.',
      'Add diced potatoes and cauliflower florets. Sauté for 5-7 minutes on medium heat, stirring occasionally.',
      'Add turmeric powder, coriander powder, red chili powder, and salt. Mix well to coat the vegetables.',
      'Add 2 tablespoons of water, cover the pan, and cook on low heat for 10-12 minutes, or until potatoes and cauliflower are tender. Stir occasionally to prevent sticking.',
      'Once vegetables are almost cooked, add chopped tomato and garam masala. Mix well and cook uncovered for another 3-5 minutes, allowing any excess moisture to evaporate.',
      'Garnish with fresh coriander leaves and serve hot.'
    ]
  },
  {
    id: '7',
    name: 'One-Pot Pasta Primavera',
    description: 'Pasta with fresh spring vegetables.',
    image: 'https://picsum.photos/seed/pasta/400/300',
    cuisine: 'Italian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    ingredients: [
      '100g Pasta (penne, fusilli, or spaghetti broken in half)',
      '1/2 cup Assorted vegetables (broccoli florets, sliced carrots, peas, diced bell peppers)',
      '2 cloves Garlic, minced',
      '1 tbsp Olive oil',
      '2 cups Vegetable broth',
      '2 tbsp Parmesan cheese, grated (ensure vegetarian if needed)',
      'Fresh basil or parsley for garnish',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'In a large pot or deep pan, combine uncooked pasta, assorted vegetables, minced garlic, olive oil, and vegetable broth. Season with salt and black pepper.',
      'Bring the mixture to a boil over medium-high heat, stirring occasionally to prevent pasta from sticking.',
      'Once boiling, reduce heat to medium-low, cover, and simmer for 12-15 minutes, or until pasta is al dente and most of the liquid has been absorbed. Stir occasionally.',
      'Remove from heat. Stir in grated Parmesan cheese. If the sauce is too thick, add a splash of warm water or broth. If too thin, simmer uncovered for a few more minutes.',
      'Garnish with fresh basil or parsley and serve immediately.'
    ]
  },
  {
    id: '8',
    name: 'Rajma Masala (Kidney Bean Curry)',
    description: 'Hearty kidney bean curry.',
    image: 'https://picsum.photos/seed/rajma/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins (plus soaking)',
    cookTime: '40 mins',
    ingredients: [
      '1/2 cup Kidney beans (rajma), soaked overnight',
      '1/2 medium Onion, finely chopped',
      '1 medium Tomato, pureed',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1/2 tsp Garam masala',
      '1 tbsp Oil',
      '3 cups Water for cooking beans',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Drain the soaked rajma and pressure cook with 3 cups of fresh water and a pinch of salt for 6-8 whistles, or until very tender. Let the pressure release naturally.',
      'Heat oil in a separate pot. Add cumin seeds and let them splutter. Add finely chopped onion and sauté until golden brown.',
      'Add ginger-garlic paste and sauté for 1 minute until fragrant.',
      'Add tomato puree, turmeric powder, coriander powder, and red chili powder. Cook, stirring occasionally, until the oil separates from the masala.',
      'Add the cooked rajma (along with its cooking liquid) to the masala. Bring to a boil, then reduce heat to low and simmer for 15-20 minutes, allowing the flavors to meld and the curry to thicken. Mash a few beans with the back of your spoon to thicken the gravy.',
      'Stir in garam masala. Garnish with fresh coriander leaves. Serve hot with rice or roti.'
    ]
  },
  {
    id: '9',
    name: 'Masoor Dal (Red Lentil Curry)',
    description: 'Quick and easy red lentil curry, perfect for a weeknight meal.',
    image: 'https://picsum.photos/seed/masoordal/400/300',
    cuisine: 'North Indian',
    prepTime: '5 mins',
    cookTime: '20 mins',
    ingredients: [
      '1/2 cup Masoor Dal (Red Lentils), rinsed',
      '1/4 medium Onion, chopped',
      '1 small Tomato, chopped',
      '1/2 tsp Ginger, grated',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Red chili powder (optional)',
      '1/2 tsp Cumin seeds',
      'A pinch of Asafoetida (hing)',
      '1 tbsp Ghee/Oil',
      '2 cups Water',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'In a pressure cooker, combine rinsed masoor dal, chopped onion, tomato, grated ginger, turmeric powder, coriander powder, red chili powder (if using), and 2 cups of water. Add salt to taste.',
      'Pressure cook for 2-3 whistles, or until the dal is soft and mushy. Let the pressure release naturally.',
      'For the tadka: In a small pan, heat ghee/oil. Add cumin seeds and let them splutter. Add asafoetida. Sauté for 10 seconds.',
      'Pour the hot tadka over the cooked dal. Mix well. Garnish with fresh coriander leaves. Serve hot with rice or roti.'
    ]
  },
  {
    id: '10',
    name: 'Palak Paneer (Spinach and Cheese Curry)',
    description: 'A nutritious and flavorful curry with spinach and Indian cheese.',
    image: 'https://picsum.photos/seed/palakpaneer/400/300',
    cuisine: 'North Indian',
    prepTime: '15 mins',
    cookTime: '25 mins',
    ingredients: [
      '150g Fresh Spinach, blanched and pureed',
      '100g Paneer, cubed',
      '1/4 medium Onion, finely chopped',
      '1 tsp Ginger-garlic paste',
      '1 small Tomato, pureed (optional)',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Garam masala',
      '1 tbsp Oil/Ghee',
      '2 tbsp Cream (optional, for richness)',
      'Salt to taste'
    ],
    instructions: [
      'Blanch the spinach in hot water for 2-3 minutes, then immediately transfer to ice water to retain its color. Drain and blend into a smooth puree with a little water if needed.',
      'Heat oil/ghee in a pan. Add cumin seeds and let them splutter. Add finely chopped onion and sauté until translucent. Add ginger-garlic paste and sauté for 1 minute.',
      'If using, add tomato puree and cook until oil separates. Add turmeric powder and coriander powder, mix well.',
      'Add the spinach puree and salt to taste. Bring to a gentle simmer and cook for 5-7 minutes, stirring occasionally.',
      'Add paneer cubes and garam masala. Simmer for another 3-5 minutes. Stir in cream if desired. Serve hot.'
    ]
  },
  {
    id: '11',
    name: 'Chana Masala (Chickpea Curry)',
    description: 'Spicy and tangy chickpea curry, a staple in North Indian cuisine.',
    image: 'https://picsum.photos/seed/chanamasala/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins (plus soaking)',
    cookTime: '30 mins',
    ingredients: [
      '1/2 cup Chickpeas (Chana), soaked overnight and boiled until tender',
      '1/2 medium Onion, finely chopped',
      '1 medium Tomato, pureed',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1 tsp Chana Masala powder',
      '1/2 tsp Amchur (dry mango powder) (optional)',
      '1 tbsp Oil',
      '1/2 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pot. Add cumin seeds and let them splutter. Add finely chopped onion and sauté until golden brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add tomato puree, turmeric powder, coriander powder, and red chili powder. Cook, stirring occasionally, until the oil separates from the masala.',
      'Add the boiled chickpeas and mix well. Add chana masala powder, amchur (if using), and 1/2 cup water. Bring to a boil, then reduce heat and simmer for 10-15 minutes, allowing the flavors to meld and the curry to thicken.',
      'Mash a few chickpeas with the back of your spoon to thicken the gravy. Garnish with fresh coriander leaves. Serve hot.'
    ]
  },
  {
    id: '12',
    name: 'Vegetable Biryani (Quick)',
    description: 'A simplified version of fragrant layered rice and vegetable dish.',
    image: 'https://picsum.photos/seed/vegbiryani/400/300',
    cuisine: 'North Indian',
    prepTime: '15 mins',
    cookTime: '30 mins',
    ingredients: [
      '1/2 cup Basmati rice, soaked for 20 mins',
      '1 cup Mixed vegetables (potatoes, carrots, peas, beans), diced',
      '1/4 medium Onion, thinly sliced',
      '1/2 tsp Ginger-garlic paste',
      '1/4 cup Yogurt (dairy or non-dairy)',
      '1/2 tsp Biryani masala',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Red chili powder (optional)',
      '2 Green cardamom pods',
      '2 Cloves',
      '1 inch Cinnamon stick',
      '1 Bay leaf',
      '1 tbsp Ghee/Oil',
      '1.25 cups Water',
      'Fresh mint and coriander leaves for garnish',
      'Fried onions for garnish (optional)',
      'Salt to taste'
    ],
    instructions: [
      'Heat ghee/oil in a heavy-bottomed pot. Add whole spices (cardamom, cloves, cinnamon, bay leaf) and sauté for 30 seconds. Add thinly sliced onion and sauté until golden brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add diced mixed vegetables, turmeric powder, red chili powder, biryani masala, and salt. Sauté for 5-7 minutes.',
      'Whisk yogurt and add it to the vegetables. Cook for 2-3 minutes until the yogurt blends well with the masala.',
      'Drain the soaked basmati rice and layer it over the vegetables. Gently pour 1.25 cups of water over the rice. Sprinkle some fresh mint and coriander leaves.',
      'Bring to a boil, then reduce heat to low, cover tightly (you can seal the lid with dough for authentic dum), and cook for 15-20 minutes until rice is cooked and water is absorbed.',
      'Turn off the heat and let it rest for 10 minutes. Gently fluff with a fork. Garnish with fried onions (if using) and more fresh herbs before serving.'
    ]
  },
  {
    id: '13',
    name: 'Baingan Bharta (Roasted Eggplant Mash)',
    description: 'Smoky and flavorful roasted eggplant mash, a North Indian specialty.',
    image: 'https://picsum.photos/seed/bainganbharta/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '30 mins',
    ingredients: [
      '1 large Eggplant (Baingan)',
      '1/4 medium Onion, finely chopped',
      '1 small Tomato, finely chopped',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Red chili powder',
      '1/4 tsp Garam masala',
      '1 tbsp Oil',
      'Fresh coriander leaves for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Wash the eggplant and apply a little oil all over it. Roast the eggplant directly over an open flame (or in an oven/air fryer) until it\'s charred and soft. Let it cool, then peel the skin and mash the pulp thoroughly. Remove any large seeds.',
      'Heat oil in a pan. Add cumin seeds and let them splutter. Add finely chopped onion and sauté until golden brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add finely chopped tomato and cook until it softens and the oil separates. Add turmeric powder, coriander powder, and red chili powder. Cook for 1-2 minutes.',
      'Add the mashed eggplant and salt to taste. Mix well and cook on medium heat for 8-10 minutes, stirring occasionally, until all the moisture evaporates and the bharta thickens.',
      'Stir in garam masala. Garnish with fresh coriander leaves. Serve hot with roti or paratha.'
    ]
  },
  {
    id: '14',
    name: 'Gobi Matar (Cauliflower and Peas Curry)',
    description: 'A simple and comforting curry featuring cauliflower and green peas.',
    image: 'https://picsum.photos/seed/gobimatar/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 cup Cauliflower florets',
      '1/2 cup Green peas (fresh or frozen)',
      '1/4 medium Onion, chopped',
      '1 small Tomato, chopped',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Red chili powder',
      '1/4 tsp Garam masala',
      '1 tbsp Oil',
      '1/4 cup Water',
      'Fresh coriander leaves for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan. Add cumin seeds and let them splutter. Add chopped onion and sauté until translucent. Add ginger-garlic paste and sauté for 1 minute.',
      'Add chopped tomato and cook until it softens and the oil separates. Add turmeric powder, coriander powder, and red chili powder. Mix well.',
      'Add cauliflower florets and green peas. Sauté for 3-5 minutes. Add 1/4 cup water and salt to taste. Cover the pan and cook on low heat for 10-12 minutes, or until vegetables are tender.',
      'Remove lid, increase heat slightly, and cook for another 2-3 minutes to evaporate any excess moisture. Stir in garam masala. Garnish with fresh coriander leaves. Serve hot.'
    ]
  },
  {
    id: '15',
    name: 'Vegetable Kofta Curry (Simplified)',
    description: 'Vegetable dumplings in a rich and creamy gravy (simplified recipe).',
    image: 'https://picsum.photos/seed/kofta/400/300',
    cuisine: 'North Indian',
    prepTime: '20 mins',
    cookTime: '30 mins',
    ingredients: [
      'For Kofta:',
      '1/2 cup Mixed grated vegetables (carrot, potato, cabbage)',
      '2 tbsp Besan (gram flour)',
      '1/4 tsp Red chili powder',
      'Pinch of Turmeric powder',
      'Salt to taste',
      'Oil for shallow frying',
      'For Gravy:',
      '1/4 medium Onion, pureed',
      '1 small Tomato, pureed',
      '1 tsp Ginger-garlic paste',
      '8-10 Cashews, soaked',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Garam masala',
      '1 tbsp Oil/Ghee',
      '1/2 cup Water',
      '2 tbsp Cream (optional)',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'For Kofta: Squeeze excess water from grated vegetables. Mix with besan, red chili powder, turmeric, and salt. Form into small balls. Shallow fry until golden brown and cooked through. Set aside.',
      'For Gravy: Heat oil/ghee in a pan. Add cumin seeds. Add onion puree and sauté until light brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add tomato puree and cook until oil separates. Blend soaked cashews with a little water to a smooth paste and add to the pan. Cook for 2-3 minutes.',
      'Add turmeric, coriander, garam masala, and salt. Add 1/2 cup water and bring to a simmer. Cook for 5-7 minutes until gravy thickens.',
      'Just before serving, add the fried koftas to the gravy and simmer for 2-3 minutes. Stir in cream if desired. Garnish with fresh coriander.'
    ]
  },
  {
    id: '16',
    name: 'Vegetable Korma (North Indian Style)',
    description: 'Rich and creamy mixed vegetable curry with nuts and mild spices.',
    image: 'https://picsum.photos/seed/veggiekorma/400/300',
    cuisine: 'North Indian',
    prepTime: '15 mins',
    cookTime: '30 mins',
    ingredients: [
      '1.5 cups Mixed vegetables (potatoes, carrots, beans, peas, cauliflower), diced',
      '1/4 medium Onion, pureed',
      '1 tsp Ginger-garlic paste',
      '10-12 Cashews, soaked',
      '2 tbsp Yogurt (dairy or non-dairy)',
      '1/2 tsp Cumin seeds',
      '2 Green cardamom pods',
      '2 Cloves',
      '1 inch Cinnamon stick',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/4 tsp White pepper powder',
      '1/4 tsp Garam masala',
      '1 tbsp Oil/Ghee',
      '1/2 cup Water',
      '2 tbsp Cream (optional)',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil/ghee in a pot. Add whole spices (cardamom, cloves, cinnamon). Add onion puree and sauté until light brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Blend soaked cashews with a little water to a smooth paste and add to the pan. Cook for 2-3 minutes. Whisk yogurt and add it, stirring continuously to prevent curdling. Cook until oil separates.',
      'Add turmeric, coriander, white pepper, and salt. Add mixed vegetables and sauté for 5 minutes. Add 1/2 cup water, cover, and simmer for 15-20 minutes until vegetables are tender.',
      'Stir in garam masala and cream (if using). Cook for another 2-3 minutes. Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '17',
    name: 'Mattar Paneer (Peas and Paneer Curry)',
    description: 'A classic North Indian curry with paneer and green peas in a tomato-based gravy.',
    image: 'https://picsum.photos/seed/mattarpaneer/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '25 mins',
    ingredients: [
      '100g Paneer, cubed',
      '1/2 cup Green peas (fresh or frozen)',
      '1/4 medium Onion, pureed',
      '1 medium Tomato, pureed',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1/2 tsp Garam masala',
      '1 tbsp Oil/Ghee',
      '1/2 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil/ghee in a pan. Add cumin seeds and let them splutter. Add onion puree and sauté until light brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add tomato puree and cook until oil separates. Add turmeric, coriander, red chili powder, and salt. Cook for 2-3 minutes.',
      'Add green peas and 1/2 cup water. Bring to a simmer, cover, and cook for 5-7 minutes until peas are tender.',
      'Add paneer cubes and garam masala. Simmer for another 5 minutes. Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '18',
    name: 'Mushroom Do Pyaza (Mushroom with Double Onion)',
    description: 'A flavorful North Indian dish with mushrooms cooked with plenty of onions.',
    image: 'https://picsum.photos/seed/mushroomdopyaza/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '150g Mushrooms, sliced',
      '1/2 medium Onion, finely chopped (first addition)',
      '1/2 medium Onion, diced into large pieces (second addition)',
      '1 small Tomato, chopped',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1/2 tsp Garam masala',
      '1 tbsp Oil',
      '1/4 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan. Add cumin seeds and let them splutter. Add finely chopped onion (first addition) and sauté until golden brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add chopped tomato and cook until it softens and the oil separates. Add turmeric, coriander, red chili powder, and salt. Mix well.',
      'Add sliced mushrooms and diced onion (second addition). Sauté for 5-7 minutes until mushrooms are tender and onions are slightly caramelized but still retain their crunch.',
      'Add 1/4 cup water, bring to a simmer, and cook for 3-5 minutes until the gravy thickens slightly. Stir in garam masala. Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '19',
    name: 'Besan Cheela (Savory Gram Flour Pancakes)',
    description: 'Quick and healthy savory pancakes made from gram flour, often served for breakfast or a light meal.',
    image: 'https://picsum.photos/seed/besancheela/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '15 mins',
    ingredients: [
      '1/2 cup Besan (Gram flour)',
      '1/4 cup Water (or as needed)',
      '1/4 medium Onion, finely chopped',
      '1 small Green chili, minced (optional)',
      '1 tbsp Grated carrot (optional)',
      '1 tbsp Chopped coriander leaves',
      '1/4 tsp Turmeric powder',
      '1/4 tsp Red chili powder (optional)',
      '1/4 tsp Cumin powder (optional)',
      'Oil for cooking',
      'Salt to taste'
    ],
    instructions: [
      'In a bowl, combine besan, chopped onion, green chili (if using), grated carrot (if using), chopped coriander, turmeric powder, red chili powder (if using), cumin powder (if using), and salt.',
      'Gradually add water, whisking continuously to form a smooth, lump-free batter of pouring consistency (similar to dosa batter).',
      'Heat a non-stick tawa or griddle over medium heat. Lightly grease it with oil. Pour a ladleful of batter onto the tawa and spread it in a circular motion to form a thin pancake.',
      'Drizzle a little oil around the edges and cook until the edges start to crisp and the top looks cooked (about 2-3 minutes).',
      'Flip the cheela and cook on the other side until golden brown spots appear (about 1-2 minutes).',
      'Repeat with the remaining batter. Serve hot with chutney or yogurt.'
    ]
  },
  {
    id: '20',
    name: 'Vegetable Cutlets (Pan-Fried)',
    description: 'Crispy and flavorful mixed vegetable patties, a popular snack or appetizer.',
    image: 'https://picsum.photos/seed/vegcutlet/400/300',
    cuisine: 'North Indian',
    prepTime: '20 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 medium Potato, boiled and mashed',
      '1/2 cup Mixed boiled vegetables (carrots, peas, beans), mashed/chopped',
      '1 tbsp Breadcrumbs (for binding, plus extra for coating)',
      '1/2 tsp Ginger-garlic paste',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Garam masala',
      '2 tbsp Chopped coriander leaves',
      'Oil for shallow frying',
      'Salt to taste'
    ],
    instructions: [
      'In a large bowl, combine mashed potato, mashed mixed vegetables, breadcrumbs (1 tbsp), ginger-garlic paste, turmeric powder, coriander powder, garam masala, chopped coriander leaves, and salt. Mix well to form a cohesive mixture.',
      'Divide the mixture into small portions and shape them into desired cutlet shapes (round, oval, or cylindrical).',
      'Spread remaining breadcrumbs on a plate. Roll each cutlet in the breadcrumbs to coat evenly.',
      'Heat oil in a pan over medium heat. Shallow fry the cutlets in batches until golden brown and crispy on both sides, and cooked through. Drain excess oil on paper towels.',
      'Serve hot with green chutney or ketchup.'
    ]
  },
  {
    id: '21',
    name: 'Puri Bhaji (Deep-fried Bread with Potato Curry)',
    description: 'A popular North Indian breakfast or meal featuring puffed deep-fried bread with a spiced potato curry.',
    image: 'https://picsum.photos/seed/puribhaji/400/300',
    cuisine: 'North Indian',
    prepTime: '20 mins',
    cookTime: '30 mins',
    ingredients: [
      'For Puri:',
      '1 cup Whole wheat flour (Atta)',
      '1/4 tsp Salt',
      '1/2 tsp Oil (for dough)',
      'Water to knead',
      'Oil for deep frying',
      'For Bhaji:',
      '2 medium Potatoes, boiled, peeled, and cubed',
      '1/4 medium Onion, sliced',
      '1 Green chili, slit',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Cumin seeds',
      '5-6 Curry leaves',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Amchur (dry mango powder) (optional)',
      '1 tbsp Oil',
      '1/2 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'For Puri: In a bowl, mix flour, salt, and 1/2 tsp oil. Gradually add water and knead into a firm dough. Cover and rest for 15 minutes. Divide dough into small balls and roll into thin circles. Heat oil for deep frying. Fry puris one by one until puffed and golden brown on both sides. Drain on paper towels.',
      'For Bhaji: Heat oil in a pan. Add mustard seeds and let them splutter. Add cumin seeds, slit green chili, and curry leaves. Sauté for 30 seconds. Add sliced onion and sauté until translucent. Add turmeric powder and coriander powder. Mix well.',
      'Add cubed boiled potatoes and salt. Mix gently. Add 1/2 cup water and amchur (if using). Bring to a simmer and cook for 5-7 minutes, gently mashing a few potato pieces to thicken the gravy. Garnish with fresh coriander. Serve hot with puris.'
    ]
  },
  {
    id: '22',
    name: 'Vegetable Dalia (Broken Wheat Upma)',
    description: 'A healthy and easy-to-make savory porridge with broken wheat and vegetables.',
    image: 'https://picsum.photos/seed/dalia/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1/2 cup Dalia (Broken wheat)',
      '1/2 cup Mixed vegetables (carrots, peas, beans), chopped',
      '1/4 medium Onion, finely chopped',
      '1/2 tsp Ginger, grated',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Cumin seeds',
      '5-6 Curry leaves (optional)',
      '1 Green chili, minced (optional)',
      '1/4 tsp Turmeric powder',
      '1 tbsp Oil/Ghee',
      '2 cups Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Dry roast dalia in a pan until light golden and fragrant (about 3-5 minutes). Set aside.',
      'Heat oil/ghee in the same pan. Add mustard seeds and let them splutter. Add cumin seeds, curry leaves (if using), and minced green chili (if using). Sauté for 30 seconds.',
      'Add finely chopped onion and grated ginger. Sauté until translucent. Add chopped mixed vegetables and sauté for 3-5 minutes.',
      'Add roasted dalia, turmeric powder, and salt. Mix well. Pour in 2 cups of water. Bring to a boil, then reduce heat to low, cover, and cook for 15-20 minutes, or until dalia is cooked and all water is absorbed.',
      'Turn off heat and let it rest for 5 minutes. Fluff with a fork. Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '23',
    name: 'Capsicum Masala (Bell Pepper Curry)',
    description: 'A vibrant and flavorful curry made with bell peppers.',
    image: 'https://picsum.photos/seed/capsicumm/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 medium Capsicum (Bell Pepper), diced',
      '1/4 medium Onion, chopped',
      '1 small Tomato, pureed',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1/2 tsp Garam masala',
      '1 tbsp Oil',
      '1/4 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan. Add cumin seeds and let them splutter. Add chopped onion and sauté until golden brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add tomato puree and cook until oil separates. Add turmeric powder, coriander powder, and red chili powder. Mix well.',
      'Add diced capsicum and sauté for 5-7 minutes. Add 1/4 cup water and salt to taste. Bring to a simmer, cover, and cook for 5-7 minutes until capsicum is tender-crisp.',
      'Stir in garam masala. Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '24',
    name: 'Arhar Dal / Toor Dal (Pigeon Pea Lentil)',
    description: 'A simple and nutritious everyday lentil curry.',
    image: 'https://picsum.photos/seed/arharsimpled/400/300',
    cuisine: 'North Indian',
    prepTime: '5 mins',
    cookTime: '25 mins',
    ingredients: [
      '1/2 cup Toor Dal (Arhar Dal), rinsed',
      '1/4 medium Onion, finely chopped (optional)',
      '1 small Tomato, finely chopped',
      '1/2 inch Ginger, grated',
      '1 clove Garlic, minced',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Cumin seeds',
      'A pinch of Asafoetida (hing)',
      '1 tbsp Ghee/Oil',
      '2 cups Water',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'In a pressure cooker, combine rinsed toor dal, chopped tomato, grated ginger, minced garlic, turmeric powder, and 2 cups of water. Add salt to taste. Pressure cook for 3-4 whistles until dal is tender. Let the pressure release naturally.',
      'For the tadka: In a small pan, heat ghee/oil. Add cumin seeds and let them splutter. Add asafoetida. If using, add chopped onion and sauté until translucent. ',
      'Pour the hot tadka over the cooked dal. Mix well. Garnish with fresh coriander leaves. Serve hot.'
    ]
  },
  {
    id: '25',
    name: 'Bhindi Masala (Okra Curry)',
    description: 'A delightful and easy-to-make dry curry with okra and spices.',
    image: 'https://picsum.photos/seed/bhindimasala/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '200g Okra (Bhindi), washed, dried, and sliced',
      '1/4 medium Onion, sliced',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1/2 tsp Amchur (dry mango powder) (optional)',
      '1 tbsp Oil',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a wide pan or kadai. Add cumin seeds and let them splutter. Add sliced onion and sauté until light golden.',
      'Add the sliced okra and sauté on medium-high heat for 8-10 minutes, stirring frequently, until the sliminess is gone and okra starts to become tender and slightly crisp.',
      'Reduce heat to low. Add turmeric powder, coriander powder, red chili powder, amchur (if using), and salt. Mix well and cook for another 5-7 minutes, stirring occasionally, until okra is fully cooked and well coated with spices.',
      'Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '26',
    name: 'Vegetable Upma (Savory Semolina Porridge)',
    description: 'A popular South Indian breakfast dish made with roasted semolina and vegetables.',
    image: 'https://picsum.photos/seed/upma/400/300',
    cuisine: 'South Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1/2 cup Rava (Semolina/Suji)',
      '1/2 cup Mixed vegetables (carrots, peas, beans), finely chopped',
      '1/4 medium Onion, finely chopped',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Urad dal (split black lentils)',
      '1/2 tsp Chana dal (split chickpeas)',
      '5-6 Curry leaves',
      '1 Green chili, minced (optional)',
      '1/2 inch Ginger, grated (optional)',
      '1 tbsp Oil/Ghee',
      '1.5 cups Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Dry roast rava in a pan on low heat until fragrant and slightly golden (about 5-7 minutes). Do not brown. Set aside.',
      'Heat oil/ghee in the same pan. Add mustard seeds and let them splutter. Add urad dal and chana dal. Sauté until light golden. Add curry leaves, minced green chili (if using), and grated ginger (if using). Sauté for 30 seconds.',
      'Add finely chopped onion and sauté until translucent. Add finely chopped mixed vegetables and sauté for 3-5 minutes.',
      'Add 1.5 cups of water and salt to taste. Bring the water to a rolling boil. Reduce heat to low. Gradually add the roasted rava in a thin stream, stirring continuously to prevent lumps.',
      'Mix well, cover, and cook for 5-7 minutes, or until all water is absorbed and upma is cooked. Turn off heat and let it rest for 2 minutes. Fluff with a fork. Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '27',
    name: 'Tomato Rice (South Indian Style)',
    description: 'A flavorful and tangy rice dish infused with tomato and spices.',
    image: 'https://picsum.photos/seed/tomatorice/400/300',
    cuisine: 'South Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 cup Cooked rice (preferably cooled leftover rice)',
      '1 medium Tomato, pureed or finely chopped',
      '1/4 medium Onion, thinly sliced',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Urad dal',
      '1/2 tsp Chana dal',
      '1 tbsp Peanuts (optional)',
      '5-6 Curry leaves',
      '1-2 Green chilies, slit (optional)',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Sambar powder (optional, for extra flavor)',
      '1 tbsp Oil',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan. Add mustard seeds and let them splutter. Add urad dal, chana dal, and peanuts (if using). Sauté until dals turn light golden. Add curry leaves and slit green chilies (if using). Sauté for 30 seconds.',
      'Add thinly sliced onion and sauté until translucent. Add pureed/chopped tomato and cook until soft and oil separates. Add turmeric powder and sambar powder (if using). Mix well.',
      'Add the cooked rice and salt to taste. Mix gently to combine, ensuring rice grains don\'t break. Cook for 2-3 minutes, stirring occasionally, until everything is heated through and flavors are well combined.',
      'Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '28',
    name: 'Rava Dosa (Crispy Semolina Crepes)',
    description: 'Thin and crispy dosas made from semolina, quick and easy to prepare.',
    image: 'https://picsum.photos/seed/ravadosa/400/300',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    ingredients: [
      '1/2 cup Rava (Semolina)',
      '1/4 cup Rice flour',
      '2 tbsp All-purpose flour (Maida) (optional, for crispiness)',
      '1/2 medium Onion, finely chopped',
      '1 Green chili, minced (optional)',
      '1/2 inch Ginger, grated (optional)',
      '5-6 Curry leaves, chopped',
      '1/2 tsp Cumin seeds',
      '1/2 tsp Whole black peppercorns (optional)',
      '1.5 cups Water (or as needed)',
      'Oil for cooking',
      'Salt to taste'
    ],
    instructions: [
      'In a bowl, combine rava, rice flour, all-purpose flour (if using), chopped onion, minced green chili (if using), grated ginger (if using), chopped curry leaves, cumin seeds, whole black peppercorns (if using), and salt.',
      'Gradually add water, whisking continuously to form a thin, watery batter. It should be thinner than regular dosa batter. Let it rest for 15 minutes.',
      'Heat a non-stick dosa tawa over medium-high heat. Grease lightly with oil. Stir the batter well before pouring each dosa, as the semolina tends to settle at the bottom.',
      'Pour a ladleful of batter from the outer edge towards the center to create a lacy pattern. Drizzle a little oil around the edges. Cook until the dosa turns golden brown and crispy (about 2-3 minutes).',
      'Carefully lift and serve hot. Do not flip. Repeat with the remaining batter. Serve with coconut chutney or sambar.'
    ]
  },
  {
    id: '29',
    name: 'Curd Rice (Thayir Sadam)',
    description: 'A comforting and cooling South Indian rice dish mixed with yogurt and tempered spices.',
    image: 'https://picsum.photos/seed/curdrice/400/300',
    cuisine: 'South Indian',
    prepTime: '5 mins',
    cookTime: '5 mins',
    ingredients: [
      '1 cup Cooked rice, cooled',
      '1 cup Plain yogurt (dahi)',
      '1/4 cup Milk (optional, to prevent curdling)',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Urad dal',
      '5-6 Curry leaves',
      '1 Green chili, slit (optional)',
      '1/2 inch Ginger, grated (optional)',
      'A pinch of Asafoetida (hing)',
      '1 tbsp Oil',
      'Pomegranate arils for garnish (optional)',
      'Salt to taste'
    ],
    instructions: [
      'In a bowl, mash the cooled cooked rice lightly with a spoon. Add yogurt, milk (if using), and salt. Mix well to combine.',
      'For the tempering: Heat oil in a small pan. Add mustard seeds and let them splutter. Add urad dal and sauté until light golden. Add curry leaves, slit green chili (if using), grated ginger (if using), and asafoetida. Sauté for 30 seconds.',
      'Pour the hot tempering over the curd rice mixture. Mix gently. Garnish with pomegranate arils if desired. Serve immediately or chill for a refreshing meal.'
    ]
  },
  {
    id: '30',
    name: 'Vegetable Sambar (Quick)',
    description: 'A simplified version of the flavorful South Indian lentil and vegetable stew.',
    image: 'https://picsum.photos/seed/sambars/400/300',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '30 mins',
    ingredients: [
      '1/2 cup Toor Dal, rinsed',
      '1 cup Mixed vegetables (carrots, drumsticks, pumpkin, beans), chopped',
      '1 small Onion, chopped (optional)',
      '1 medium Tomato, chopped',
      '1 tbsp Sambar powder',
      'Small piece of Tamarind (soaked in warm water and pulp extracted)',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Mustard seeds',
      'A pinch of Fenugreek seeds',
      '5-6 Curry leaves',
      '1 Red chili (dry, whole) (optional)',
      '1 tbsp Oil',
      '3 cups Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Pressure cook rinsed toor dal with 2 cups of water and turmeric powder for 3-4 whistles until tender. Let pressure release naturally.',
      'In a separate pot, heat oil. Add mustard seeds and let them splutter. Add fenugreek seeds, dry red chili (if using), and curry leaves. Sauté for 30 seconds. Add chopped onion (if using) and sauté until translucent. Add chopped tomato and cook until soft.',
      'Add chopped mixed vegetables and sauté for 5 minutes. Add 1 cup water, cover, and cook until vegetables are tender-crisp.',
      'Add the cooked dal to the vegetables. Add sambar powder, tamarind pulp, and salt. Mix well. Bring to a boil and simmer for 10-15 minutes, allowing flavors to meld.',
      'Garnish with fresh coriander. Serve hot with rice, idli, or dosa.'
    ]
  },
  {
    id: '31',
    name: 'Vegetable Avial (Mixed Vegetable Curry with Coconut)',
    description: 'A traditional Kerala dish with mixed vegetables cooked in a creamy coconut and yogurt gravy.',
    image: 'https://picsum.photos/seed/avial/400/300',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '25 mins',
    ingredients: [
      '2 cups Mixed vegetables (carrots, beans, raw banana, drumstick, pumpkin, snake gourd), chopped',
      '1/2 cup Grated coconut',
      '1/4 tsp Cumin seeds',
      '1-2 Green chilies',
      '1/4 cup Plain yogurt, whisked',
      '5-6 Curry leaves',
      '1 tbsp Coconut oil',
      'Salt to taste',
      'Water as needed'
    ],
    instructions: [
      'Cook the mixed vegetables in a pot with enough water and salt until tender but still holding their shape. Drain excess water, if any, leaving a little liquid.',
      'Grind grated coconut, cumin seeds, and green chilies with a little water to a smooth paste.',
      'Add the ground coconut paste to the cooked vegetables. Mix well and cook for 5-7 minutes on low heat, stirring occasionally, until the raw smell of the paste goes away.',
      'Turn off the heat and stir in the whisked yogurt. Do not boil after adding yogurt.',
      'For tempering: Heat coconut oil in a small pan. Add curry leaves and let them splutter. Pour the hot tempering over the avial. Serve hot with rice.'
    ]
  },
  {
    id: '32',
    name: 'Poriyal (South Indian Dry Vegetable Stir-fry)',
    description: 'A simple and healthy South Indian dry stir-fry made with various vegetables.',
    image: 'https://picsum.photos/seed/poriyal/400/300',
    cuisine: 'South Indian',
    prepTime: '10 mins',
    cookTime: '15 mins',
    ingredients: [
      '1.5 cups Green beans, finely chopped (or carrots, cabbage, potato)',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Urad dal',
      '5-6 Curry leaves',
      '1-2 Green chilies, slit (optional)',
      'A pinch of Asafoetida (hing)',
      '1 tbsp Oil',
      '2 tbsp Grated coconut (optional, for garnish)',
      'Salt to taste',
      'Water as needed'
    ],
    instructions: [
      'Heat oil in a pan. Add mustard seeds and let them splutter. Add urad dal and sauté until light golden. Add curry leaves, slit green chilies (if using), and asafoetida. Sauté for 30 seconds.',
      'Add the chopped green beans (or chosen vegetable) and salt. Sauté for 2-3 minutes. Add a splash of water, cover, and cook on low heat until vegetables are tender-crisp. (Adjust cooking time based on vegetable).',
      'Remove lid and cook for another 2-3 minutes to evaporate any excess moisture. Garnish with grated coconut (if using). Serve hot as a side dish.'
    ]
  },
  {
    id: '33',
    name: 'Bisi Bele Bhaat (Karnataka Style Lentil-Rice Dish)',
    description: 'A hearty and flavorful one-pot dish of rice, lentils, and vegetables, popular in Karnataka.',
    image: 'https://picsum.photos/seed/bisibelebhaat/400/300',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '35 mins',
    ingredients: [
      '1/2 cup Rice',
      '1/4 cup Toor Dal (Pigeon Pea Lentil)',
      '1 cup Mixed vegetables (carrots, beans, peas, potatoes, capsicum), chopped',
      '1 small Onion, chopped (optional)',
      '1 small Tomato, chopped',
      '1 tbsp Bisi Bele Bhaat powder',
      'Small piece of Tamarind (soaked in warm water and pulp extracted)',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Mustard seeds',
      '5-6 Curry leaves',
      'A pinch of Asafoetida (hing)',
      '1 tbsp Ghee/Oil',
      '4-5 cups Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Wash rice and dal together. In a pressure cooker, combine washed rice and dal, chopped mixed vegetables, chopped onion (if using), chopped tomato, turmeric powder, and salt. Add 3 cups of water. Pressure cook for 4-5 whistles, or until rice and dal are well cooked and mushy.',
      'In a small pan, heat ghee/oil. Add mustard seeds and let them splutter. Add curry leaves and asafoetida. Sauté for 30 seconds. Pour this tempering over the cooked rice and dal mixture.',
      'Add bisi bele bhaat powder and tamarind pulp to the mixture. Add 1-2 cups more water (or as needed to reach desired consistency). Mix well and simmer on low heat for 10-15 minutes, stirring occasionally, allowing flavors to combine. The consistency should be like a thick porridge.',
      'Garnish with fresh coriander. Serve hot with papad or raita.'
    ]
  },
  {
    id: '34',
    name: 'Pasta Aglio e Olio (Garlic and Oil Pasta)',
    description: 'A simple yet flavorful Italian pasta dish with garlic, olive oil, and chili flakes.',
    image: 'https://picsum.photos/seed/aglioeolio/400/300',
    cuisine: 'Italian',
    prepTime: '5 mins',
    cookTime: '15 mins',
    ingredients: [
      '100g Spaghetti or Linguine',
      '3-4 cloves Garlic, thinly sliced',
      '2 tbsp Olive oil',
      '1/4 tsp Red pepper flakes (Peperoncino), optional',
      '2 tbsp Fresh parsley, chopped',
      'Salt to taste',
      'Pasta cooking water'
    ],
    instructions: [
      'Cook pasta according to package directions in salted boiling water until al dente. Reserve about 1/2 cup of pasta cooking water before draining.',
      'While pasta is cooking, heat olive oil in a large skillet over medium-low heat. Add thinly sliced garlic and red pepper flakes (if using). Sauté gently until garlic is fragrant and lightly golden. Do not burn the garlic.',
      'Add the drained pasta to the skillet with the garlic and oil. Add a splash of the reserved pasta cooking water and chopped fresh parsley. Toss well to combine, allowing the sauce to coat the pasta. Add more pasta water if needed to create a light sauce.',
      'Season with salt to taste. Serve hot, optionally with a sprinkle of vegetarian Parmesan cheese.'
    ]
  },
  {
    id: '35',
    name: 'Caprese Salad (Simplified)',
    description: 'A refreshing Italian salad with fresh tomatoes, mozzarella, and basil.',
    image: 'https://picsum.photos/seed/capresesalad/400/300',
    cuisine: 'Italian',
    prepTime: '10 mins',
    cookTime: '0 mins',
    ingredients: [
      '1 large Tomato, sliced',
      '100g Fresh mozzarella cheese (bocconcini or sliced), ensure vegetarian',
      '8-10 Fresh basil leaves',
      '1 tbsp Extra virgin olive oil',
      '1 tsp Balsamic glaze (optional)',
      'Pinch of Salt',
      'Pinch of Black pepper'
    ],
    instructions: [
      'Arrange alternating slices of tomato and mozzarella cheese on a plate. Tuck fresh basil leaves in between the slices.',
      'Drizzle generously with extra virgin olive oil. Season with a pinch of salt and freshly ground black pepper.',
      'If using, drizzle with balsamic glaze. Serve immediately as a refreshing appetizer or light meal.'
    ]
  },
  {
    id: '36',
    name: 'Vegetable Minestrone Soup (Easy)',
    description: 'A hearty and wholesome Italian vegetable and pasta soup.',
    image: 'https://picsum.photos/seed/minestrone/400/300',
    cuisine: 'Italian',
    prepTime: '15 mins',
    cookTime: '30 mins',
    ingredients: [
      '1 tbsp Olive oil',
      '1/4 medium Onion, diced',
      '1 carrot, diced',
      '1 celery stalk, diced',
      '2 cloves Garlic, minced',
      '1/2 cup Small pasta (ditalini, elbow macaroni)',
      '1/2 cup Canned diced tomatoes',
      '3-4 cups Vegetable broth',
      '1/2 cup Canned cannellini beans, rinsed and drained',
      '1/2 cup Mixed vegetables (zucchini, spinach, green beans)',
      '1 tsp Dried Italian herbs (oregano, basil, thyme)',
      'Fresh parsley, chopped, for garnish',
      'Salt and Black pepper to taste',
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add diced onion, carrot, and celery. Sauté for 5-7 minutes until softened.',
      'Add minced garlic and dried Italian herbs. Sauté for 1 minute until fragrant. Add canned diced tomatoes and cook for 2-3 minutes, stirring occasionally.',
      'Pour in vegetable broth and bring to a simmer. Add small pasta and cannellini beans. Cook for 8-10 minutes, or until pasta is al dente.',
      'Add mixed vegetables (zucchini, green beans) and spinach. Cook for another 3-5 minutes, or until vegetables are tender-crisp and spinach is wilted. Season with salt and black pepper to taste.',
      'Garnish with fresh parsley before serving. Serve hot.'
    ]
  },
  {
    id: '37',
    name: 'Bruschetta al Pomodoro (Tomato Bruschetta)',
    description: 'Classic Italian appetizer with toasted bread topped with fresh tomatoes and basil.',
    image: 'https://picsum.photos/seed/bruschetta/400/300',
    cuisine: 'Italian',
    prepTime: '10 mins',
    cookTime: '5 mins',
    ingredients: [
      '2 slices rustic bread (sourdough or ciabatta)',
      '1 large ripe Tomato, finely diced',
      '4-5 Fresh basil leaves, thinly sliced (chiffonade)',
      '1 clove Garlic, minced',
      '1 tbsp Extra virgin olive oil',
      'Pinch of Salt',
      'Pinch of Black pepper'
    ],
    instructions: [
      'Toast bread slices until golden brown and crispy. You can use a toaster, oven, or pan-fry them.',
      'In a bowl, combine finely diced tomato, thinly sliced basil, minced garlic, extra virgin olive oil, salt, and black pepper. Mix gently.',
      'Spoon the tomato mixture generously over each toasted bread slice. Serve immediately.'
    ]
  },
  {
    id: '38',
    name: 'Vegetable Lasagna (Simplified)',
    description: 'A simplified, layered Italian dish with pasta, vegetables, and cheesy sauce.',
    image: 'https://picsum.photos/seed/veglasagna/400/300',
    cuisine: 'Italian',
    prepTime: '20 mins',
    cookTime: '40 mins',
    ingredients: [
      '3-4 Lasagna noodles (no-boil or pre-cooked)',
      '1 cup Mixed vegetables, finely diced (zucchini, bell peppers, spinach, mushrooms)',
      '1/4 medium Onion, finely chopped',
      '2 cloves Garlic, minced',
      '1/2 cup Marinara sauce (store-bought or homemade)',
      '1/2 cup Ricotta cheese (ensure vegetarian if needed)',
      '1/4 cup Shredded mozzarella cheese (ensure vegetarian if needed)',
      '2 tbsp Fresh parsley, chopped',
      '1 tbsp Olive oil',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'Preheat oven to 190°C (375°F).',
      'Heat olive oil in a pan. Add finely chopped onion and sauté until translucent. Add minced garlic and sauté for 1 minute. Add diced mixed vegetables and cook until tender-crisp (about 5-7 minutes). Season with salt and pepper.',
      'In a separate bowl, combine ricotta cheese, half of the chopped parsley, salt, and pepper. Mix well.',
      'Spread a thin layer of marinara sauce at the bottom of a small baking dish. Place one lasagna noodle over the sauce. Spread half of the ricotta mixture over the noodle, then layer with half of the sautéed vegetables. Top with another thin layer of marinara sauce and a sprinkle of mozzarella.',
      'Repeat the layers (noodle, ricotta, vegetables, marinara, mozzarella). For the final layer, top with a noodle, remaining marinara sauce, and a generous sprinkle of mozzarella cheese.',
      'Cover with foil and bake for 25 minutes. Remove foil and bake for another 10-15 minutes, or until cheese is melted and bubbly and edges are golden. Let it rest for 5 minutes before serving. Garnish with remaining fresh parsley.'
    ]
  },
  {
    id: '39',
    name: 'Vegetable Fritters (Italian Style)',
    description: 'Crispy vegetable fritters, a versatile and easy appetizer or side.',
    image: 'https://picsum.photos/seed/vegetablefritter/400/300',
    cuisine: 'Italian',
    prepTime: '15 mins',
    cookTime: '15 mins',
    ingredients: [
      '1 cup Grated zucchini or carrots (or a mix)',
      '1/4 cup All-purpose flour',
      '1/4 cup Parmesan cheese, grated (ensure vegetarian if needed)',
      '1/4 tsp Dried oregano',
      '1 clove Garlic, minced',
      '2 tbsp Fresh parsley, chopped',
      'Oil for frying',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'Squeeze out excess moisture from grated zucchini/carrots using a clean kitchen towel. This is crucial for crispy fritters.',
      'In a bowl, combine grated vegetables, all-purpose flour, grated Parmesan cheese, dried oregano, minced garlic, chopped parsley, salt, and black pepper. Mix well until just combined. Do not overmix.',
      'Heat about 1-2 inches of oil in a skillet over medium heat. Once hot, drop spoonfuls of the batter into the oil, flattening slightly with the back of a spoon.',
      'Fry for 3-4 minutes per side, or until golden brown and cooked through. Drain excess oil on paper towels.',
      'Serve hot with a side of marinara sauce or a squeeze of lemon.'
    ]
  },
  {
    id: '40',
    name: 'Pesto Pasta (Quick)',
    description: 'A simple and flavorful pasta dish tossed with vibrant basil pesto.',
    image: 'https://picsum.photos/seed/pestopasta/400/300',
    cuisine: 'Italian',
    prepTime: '5 mins',
    cookTime: '15 mins',
    ingredients: [
      '100g Pasta (penne, fusilli, or spaghetti)',
      '2-3 tbsp Store-bought pesto (ensure vegetarian, no Parmesan with animal rennet)',
      '1 tbsp Pine nuts or walnuts, toasted (optional)',
      'Cherry tomatoes, halved (optional, for garnish)',
      'Fresh basil leaves for garnish (optional)',
      'Salt to taste',
      'Pasta cooking water'
    ],
    instructions: [
      'Cook pasta according to package directions in salted boiling water until al dente. Reserve about 1/4 cup of pasta cooking water before draining.',
      'In a large bowl, combine the drained hot pasta with the pesto. Add a tablespoon or two of the reserved pasta cooking water to thin out the pesto and create a light sauce. Toss well to coat the pasta evenly.',
      'If using, stir in toasted pine nuts/walnuts and halved cherry tomatoes. Garnish with fresh basil leaves. Serve immediately.'
    ]
  },
  {
    id: '41',
    name: 'Creamy Tomato Soup (Italian Style)',
    description: 'A comforting and classic Italian-inspired tomato soup, made creamy without dairy.',
    image: 'https://picsum.photos/seed/tomatosoup/400/300',
    cuisine: 'Italian',
    prepTime: '10 mins',
    cookTime: '25 mins',
    ingredients: [
      '1 tbsp Olive oil',
      '1/4 medium Onion, chopped',
      '2 cloves Garlic, minced',
      '1 (400g) can crushed tomatoes',
      '2 cups Vegetable broth',
      '1/4 cup Cashews, soaked in hot water for 15 mins (for creaminess)',
      '1/2 tsp Dried oregano',
      '1/4 tsp Red pepper flakes (optional)',
      'Fresh basil leaves for garnish',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a pot over medium heat. Add chopped onion and sauté until softened (about 5 minutes). Add minced garlic, dried oregano, and red pepper flakes (if using). Sauté for 1 minute until fragrant.',
      'Add crushed tomatoes and vegetable broth. Bring to a simmer, then reduce heat to low, cover, and cook for 15-20 minutes to allow flavors to meld.',
      'Drain the soaked cashews and blend them with a little fresh water until completely smooth and creamy. Set aside.',
      'Using an immersion blender, blend the soup directly in the pot until smooth. Alternatively, carefully transfer to a regular blender and blend in batches. Return to the pot if using a regular blender.',
      'Stir in the cashew cream. Heat gently, but do not boil. Season with salt and black pepper to taste. Garnish with fresh basil leaves before serving.'
    ]
  },
  {
    id: '42',
    name: 'Easy Veggie Pizza (Homemade)',
    description: 'A simple and customizable homemade vegetarian pizza with your favorite toppings.',
    image: 'https://picsum.photos/seed/vegpizza/400/300',
    cuisine: 'Italian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 small pre-made pizza crust or flatbread',
      '1/4 cup Marinara sauce or pizza sauce',
      '1/2 cup Shredded mozzarella cheese (ensure vegetarian if needed)',
      '1/2 cup Assorted vegetables, thinly sliced (bell peppers, mushrooms, onions, olives)',
      '1/4 tsp Dried oregano',
      '1 tbsp Olive oil (for drizzling)',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'Preheat oven to the temperature recommended on your pizza crust package (usually 200-220°C or 400-425°F).',
      'Place the pizza crust on a baking sheet. Spread marinara sauce evenly over the crust, leaving a small border for the crust.',
      'Sprinkle half of the mozzarella cheese over the sauce. Arrange the thinly sliced assorted vegetables evenly over the cheese.',
      'Sprinkle the remaining mozzarella cheese and dried oregano. Drizzle lightly with olive oil. Season with a pinch of salt and black pepper.',
      'Bake for 12-18 minutes, or until the crust is golden brown and the cheese is melted and bubbly. Slice and serve hot.'
    ]
  },
  {
    id: '43',
    name: 'Garlic Bread (Homemade)',
    description: 'Crispy and fragrant garlic bread, perfect as a side for pasta or soup.',
    image: 'https://picsum.photos/seed/garlicbread/400/300',
    cuisine: 'Italian',
    prepTime: '5 mins',
    cookTime: '10 mins',
    ingredients: [
      '2 slices of Bread (baguette, ciabatta, or any crusty bread)',
      '1 tbsp Softened butter (dairy or non-dairy)',
      '1-2 cloves Garlic, minced',
      '1 tbsp Fresh parsley, chopped',
      'Pinch of Salt'
    ],
    instructions: [
      'Preheat oven to 200°C (400°F).',
      'In a small bowl, combine softened butter, minced garlic, chopped fresh parsley, and a pinch of salt. Mix well to form a garlic butter paste.',
      'Spread the garlic butter generously over one side of each bread slice.',
      'Place the bread slices butter-side up on a baking sheet. Bake for 8-12 minutes, or until golden brown and crispy. Keep an eye on it to prevent burning the garlic.',
      'Serve hot.'
    ]
  },
  {
    id: '44',
    name: 'Spinach and Ricotta Cannelloni (Simplified)',
    description: 'Pasta tubes filled with spinach and ricotta, baked in tomato sauce (simplified).',
    image: 'https://picsum.photos/seed/cannelloni/400/300',
    cuisine: 'Italian',
    prepTime: '20 mins',
    cookTime: '30 mins',
    ingredients: [
      '4-5 Cannelloni tubes (oven-ready or pre-cooked)',
      '1 cup Fresh spinach, blanched and finely chopped',
      '1/2 cup Ricotta cheese (ensure vegetarian if needed)',
      '1/4 cup Shredded mozzarella cheese (ensure vegetarian if needed)',
      '1/4 cup Marinara sauce or tomato passata',
      '1/4 tsp Nutmeg, grated (optional)',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'Preheat oven to 190°C (375°F).',
      'Blanch spinach, squeeze out all excess water, and finely chop. In a bowl, combine chopped spinach, ricotta cheese, half of the mozzarella cheese, grated nutmeg (if using), salt, and black pepper. Mix well.',
      'Carefully fill each cannelloni tube with the spinach-ricotta mixture using a spoon or a piping bag (if using oven-ready, no need to boil first).',
      'Spread a thin layer of marinara sauce at the bottom of a small baking dish. Arrange the filled cannelloni tubes in a single layer over the sauce. Top with the remaining marinara sauce and sprinkle with the rest of the mozzarella cheese.',
      'Cover with foil and bake for 20 minutes. Remove foil and bake for another 10-15 minutes, or until cheese is melted and bubbly and the cannelloni is tender. Let it rest for 5 minutes before serving.'
    ]
  },
  {
    id: '45',
    name: 'Vegetable Pakora (Indian Fritters)',
    description: 'Crispy and flavorful deep-fried fritters made with assorted vegetables and gram flour.',
    image: 'https://picsum.photos/seed/pakora/400/300',
    cuisine: 'North Indian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 cup Mixed vegetables, thinly sliced (onions, potatoes, spinach, bell peppers)',
      '1/2 cup Besan (Gram flour)',
      '2 tbsp Rice flour (for crispiness, optional)',
      '1/2 tsp Ginger-garlic paste (optional)',
      '1/2 tsp Red chili powder',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Ajwain (carom seeds) (optional)',
      '1/4 tsp Baking soda (optional, for softness)',
      'Water as needed for batter',
      'Oil for deep frying',
      'Salt to taste'
    ],
    instructions: [
      'In a large bowl, combine thinly sliced mixed vegetables, besan, rice flour (if using), ginger-garlic paste (if using), red chili powder, turmeric powder, coriander powder, ajwain (if using), baking soda (if using), and salt. Mix well.',
      'Gradually add water, a tablespoon at a time, mixing until you have a thick batter that coats the vegetables well but is not too watery. The vegetables should be lightly coated, not swimming in batter.',
      'Heat oil for deep frying in a kadai or deep pan over medium-high heat. Once hot, drop small spoonfuls of the vegetable mixture into the hot oil.',
      'Fry in batches, turning occasionally, until golden brown and crispy on all sides and cooked through. Drain excess oil on paper towels.',
      'Serve hot with green chutney or ketchup.'
    ]
  },
  {
    id: '46',
    name: 'Kadai Paneer (Dry Version)',
    description: 'A spicy and aromatic dry curry with paneer, bell peppers, and onions in a rich tomato-based gravy.',
    image: 'https://picsum.photos/seed/kadaipaneer/400/300',
    cuisine: 'North Indian',
    prepTime: '15 mins',
    cookTime: '25 mins',
    ingredients: [
      '100g Paneer, cubed',
      '1/2 medium Onion, diced into large pieces',
      '1/2 medium Bell pepper (any color), diced into large pieces',
      '1 medium Tomato, pureed',
      '1 tsp Ginger-garlic paste',
      'For Kadai Masala (dry roasted & ground):',
      '1 tsp Coriander seeds',
      '1/2 tsp Cumin seeds',
      '2-3 Dry red chilies (optional)',
      '1/4 tsp Fenugreek seeds (methi dana)',
      '2 Green cardamom pods',
      '1 tbsp Oil',
      '1/4 cup Water (if needed for gravy consistency)',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Dry roast coriander seeds, cumin seeds, dry red chilies (if using), fenugreek seeds, and green cardamom pods on low heat until fragrant. Cool and grind into a coarse powder (Kadai Masala).',
      'Heat oil in a kadai or large pan. Add diced onion and bell pepper. Sauté on high heat for 3-5 minutes until they are slightly softened but still retain their crunch. Remove and set aside.',
      'In the same kadai, add ginger-garlic paste and sauté for 1 minute. Add tomato puree and cook until oil separates. Add the freshly ground Kadai Masala, salt, and mix well.',
      'Add the sautéed onions, bell peppers, and paneer cubes to the masala. Mix gently to coat everything. Add a splash of water if you prefer a slightly gravy-like consistency. Cook for 5-7 minutes, stirring occasionally, until flavors are well combined.',
      'Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '47',
    name: 'Vegetable Fried Rice (Indian Style)',
    description: 'Quick and easy stir-fried rice with assorted vegetables and a touch of Indian spices.',
    image: 'https://picsum.photos/seed/friedrice/400/300',
    cuisine: 'Easy to Make',
    prepTime: '10 mins',
    cookTime: '15 mins',
    ingredients: [
      '1 cup Cooked rice, cooled (preferably leftover)',
      '1 cup Mixed vegetables, finely chopped (carrots, peas, beans, corn, bell peppers)',
      '1/4 medium Onion, finely chopped',
      '1 tsp Ginger-garlic paste',
      '1 tbsp Soy sauce (light)',
      '1/2 tsp Black pepper powder',
      '1 tbsp Oil',
      'Fresh spring onions or coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a large wok or pan over high heat. Add finely chopped onion and sauté for 1 minute. Add ginger-garlic paste and sauté for another minute.',
      'Add chopped mixed vegetables and stir-fry on high heat for 5-7 minutes until they are tender-crisp. Do not overcook.',
      'Add the cooled cooked rice, soy sauce, black pepper powder, and salt. Toss well to combine everything, breaking up any rice clumps. Stir-fry for 3-5 minutes until the rice is heated through and slightly dry.',
      'Garnish with fresh spring onions or coriander. Serve hot.'
    ]
  },
  {
    id: '48',
    name: 'Mac and Cheese (Indian Style / No-Bake)',
    description: 'A comforting and cheesy pasta dish with an Indian twist, made without baking.',
    image: 'https://picsum.photos/seed/macncheese/400/300',
    cuisine: 'Easy to Make',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 cup Elbow macaroni or other small pasta',
      '1 tbsp Butter/Oil',
      '1 tbsp All-purpose flour (Maida)',
      '1.5 cups Milk (dairy or non-dairy)',
      '1/2 cup Shredded cheddar cheese (ensure vegetarian if needed)',
      '1/4 tsp Turmeric powder (for color and mild flavor)',
      'Pinch of Red chili flakes (optional)',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'Cook macaroni according to package directions until al dente. Drain and set aside.',
      'In a saucepan, melt butter/oil over medium heat. Add all-purpose flour and whisk constantly for 1-2 minutes until a pale paste (roux) forms.',
      'Gradually whisk in milk, a little at a time, to create a smooth sauce. Continue whisking until the sauce thickens and comes to a gentle simmer. Do not boil vigorously.',
      'Reduce heat to low. Add shredded cheddar cheese, turmeric powder, and red chili flakes (if using). Stir until the cheese is completely melted and the sauce is smooth and creamy.',
      'Add the cooked macaroni to the cheese sauce. Stir to coat evenly. Season with salt and black pepper to taste. Serve hot.'
    ]
  },
  {
    id: '49',
    name: 'Paneer Bhurji (Scrambled Paneer)',
    description: 'A quick and easy North Indian dish of scrambled paneer with spices and vegetables.',
    image: 'https://picsum.photos/seed/paneerbhurji/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '15 mins',
    ingredients: [
      '150g Paneer, crumbled',
      '1/4 medium Onion, finely chopped',
      '1 small Tomato, finely chopped',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Coriander powder',
      '1/4 tsp Red chili powder',
      '1/4 tsp Garam masala',
      '1 tbsp Oil/Ghee',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil/ghee in a pan. Add cumin seeds and let them splutter. Add finely chopped onion and sauté until translucent. Add ginger-garlic paste and sauté for 1 minute.',
      'Add finely chopped tomato and cook until it softens and the oil separates. Add turmeric powder, coriander powder, and red chili powder. Mix well.',
      'Add the crumbled paneer and salt to taste. Mix gently, being careful not to mash the paneer too much. Cook for 5-7 minutes, stirring occasionally, until the paneer is heated through and the flavors are well combined.',
      'Stir in garam masala. Garnish with fresh coriander. Serve hot with roti, paratha, or bread.'
    ]
  },
  {
    id: '50',
    name: 'Aloo Matar (Potato and Peas Curry)',
    description: 'A comforting and classic North Indian curry with potatoes and green peas.',
    image: 'https://picsum.photos/seed/aloomatar/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 medium Potato, peeled and cubed',
      '1/2 cup Green peas (fresh or frozen)',
      '1/4 medium Onion, chopped',
      '1 small Tomato, pureed',
      '1 tsp Ginger-garlic paste',
      '1/2 tsp Cumin seeds',
      '1/4 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1/2 tsp Garam masala',
      '1 tbsp Oil',
      '1/2 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan. Add cumin seeds and let them splutter. Add chopped onion and sauté until translucent. Add ginger-garlic paste and sauté for 1 minute.',
      'Add tomato puree and cook until oil separates. Add turmeric powder, coriander powder, and red chili powder. Mix well.',
      'Add cubed potatoes and green peas. Sauté for 3-5 minutes. Add 1/2 cup water and salt to taste. Bring to a simmer, cover, and cook on low heat for 10-15 minutes, or until potatoes are tender.',
      'Stir in garam masala. Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '51',
    name: 'Vegetable Paniyaram (Savory Fritters)',
    description: 'Crispy and fluffy South Indian savory dumplings, excellent for breakfast or snack.',
    image: 'https://picsum.photos/seed/paniyaram/400/300',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    ingredients: [
      '1 cup Dosa/Idli batter',
      '1/4 medium Onion, finely chopped',
      '1 tbsp Grated carrot (optional)',
      '1 tbsp Finely chopped bell pepper (optional)',
      '1 Green chili, minced (optional)',
      '5-6 Curry leaves, chopped',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Urad dal',
      '1 tbsp Oil (for tempering and cooking)',
      'Salt to taste (if batter is unsalted)'
    ],
    instructions: [
      'If your dosa/idli batter is unsalted, add salt to taste. You can also add a pinch of baking soda for extra fluffiness if needed (optional).',
      'For tempering: Heat 1 tsp oil in a small pan. Add mustard seeds and let them splutter. Add urad dal and sauté until light golden. Add minced green chili (if using) and chopped curry leaves. Sauté for 30 seconds.',
      'Add the tempering mixture, finely chopped onion, grated carrot (if using), and chopped bell pepper (if using) to the dosa/idli batter. Mix well.',
      'Heat a paniyaram pan (appe pan) over medium heat. Add a few drops of oil in each mold. Pour spoonfuls of the batter into each mold.',
      'Cook until the bottoms are golden brown and crispy (about 3-4 minutes). Flip the paniyarams using a wooden stick or spoon and cook the other side until golden and cooked through (another 3-4 minutes).',
      'Repeat with remaining batter. Serve hot with coconut chutney or sambar.'
    ]
  },
  {
    id: '52',
    name: 'Adai (Mixed Lentil Dosa)',
    description: 'A nutritious and protein-rich South Indian crepe made from a blend of lentils and rice.',
    image: 'https://picsum.photos/seed/adai/400/300',
    cuisine: 'South Indian',
    prepTime: '4 hours (soaking) + 15 mins (grinding)',
    cookTime: '20 mins',
    ingredients: [
      '1/2 cup Raw rice',
      '1/4 cup Toor dal',
      '1/4 cup Chana dal',
      '2 tbsp Urad dal',
      '1-2 Dry red chilies (adjust to taste)',
      '1/2 tsp Cumin seeds',
      '1/4 inch Ginger, grated (optional)',
      '1/4 medium Onion, finely chopped (optional)',
      '5-6 Curry leaves, chopped (optional)',
      'Water for grinding',
      'Oil for cooking',
      'Salt to taste'
    ],
    instructions: [
      'Wash and soak raw rice, toor dal, chana dal, and urad dal together for at least 4 hours. Add dry red chilies to the soaking mixture for a spicier adai.',
      'Drain the soaked mixture and grind it in a wet grinder or powerful blender with a little water to a coarse batter. It should not be as smooth as dosa batter. Add cumin seeds and grated ginger (if using) during grinding. The batter does not need fermentation.',
      'In a bowl, mix the ground batter with finely chopped onion (if using), chopped curry leaves (if using), and salt to taste. The consistency should be thick enough to spread like a pancake.',
      'Heat a non-stick tawa or griddle over medium-high heat. Lightly grease it with oil. Pour a ladleful of batter onto the tawa and spread it into a thick circular pancake. Drizzle oil around the edges.',
      'Cook until the bottom is golden brown and crispy (about 3-4 minutes). Flip and cook the other side until golden brown (another 2-3 minutes).',
      'Repeat with the remaining batter. Serve hot with jaggery, avial, or chutney.'
    ]
  },
  {
    id: '53',
    name: 'Cabbage Poriyal (South Indian Stir-fry)',
    description: 'A simple, healthy, and quick South Indian stir-fry made with finely shredded cabbage.',
    image: 'https://picsum.photos/seed/cabbageporiyal/400/300',
    cuisine: 'South Indian',
    prepTime: '10 mins',
    cookTime: '15 mins',
    ingredients: [
      '2 cups Cabbage, finely shredded',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Urad dal',
      '5-6 Curry leaves',
      '1 Green chili, slit (optional)',
      'A pinch of Asafoetida (hing)',
      '1 tbsp Oil',
      '2 tbsp Grated coconut (optional, for garnish)',
      'Salt to taste',
      'Water as needed'
    ],
    instructions: [
      'Heat oil in a pan. Add mustard seeds and let them splutter. Add urad dal and sauté until light golden. Add curry leaves, slit green chili (if using), and asafoetida. Sauté for 30 seconds.',
      'Add the finely shredded cabbage and salt. Sauté for 2-3 minutes. Add a splash of water (about 2-3 tbsp), cover, and cook on low heat for 5-7 minutes, or until the cabbage is tender-crisp. Do not overcook, it should retain a slight crunch.',
      'Remove lid and cook for another 2-3 minutes to evaporate any excess moisture. Garnish with grated coconut (if using). Serve hot as a side dish.'
    ]
  },
  {
    id: '54',
    name: 'Vegetable Chettinad Curry (South Indian)',
    description: 'A spicy and aromatic mixed vegetable curry from the Chettinad region, known for its bold flavors.',
    image: 'https://picsum.photos/seed/chettinadveg/400/300',
    cuisine: 'South Indian',
    prepTime: '20 mins',
    cookTime: '35 mins',
    ingredients: [
      '1.5 cups Mixed vegetables (potatoes, carrots, beans, cauliflower, peas), diced',
      '1/4 medium Onion, sliced',
      '1 medium Tomato, chopped',
      '1 tbsp Ginger-garlic paste',
      'Small piece of Tamarind (soaked for pulp)',
      'For Chettinad Masala (dry roasted & ground):',
      '1 tbsp Coriander seeds',
      '1 tsp Cumin seeds',
      '1/2 tsp Fennel seeds',
      '2-3 Dry red chilies',
      '5-6 Black peppercorns',
      '2 Green cardamom pods',
      '1 inch Cinnamon stick',
      '2 Cloves',
      '1/4 tsp Turmeric powder',
      '1 tbsp Oil',
      '1/2 cup Coconut milk (optional, for richness)',
      '1 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Dry roast all Chettinad Masala ingredients (except turmeric) on low heat until fragrant. Cool and grind to a fine powder with turmeric. Set aside.',
      'Heat oil in a pot. Add sliced onion and sauté until golden brown. Add ginger-garlic paste and sauté for 1 minute.',
      'Add chopped tomato and cook until soft and oil separates. Add the freshly ground Chettinad Masala and sauté for 2-3 minutes until fragrant.',
      'Add diced mixed vegetables, tamarind pulp, and salt. Add 1 cup water. Bring to a boil, then reduce heat, cover, and simmer for 15-20 minutes until vegetables are tender.',
      'If using, stir in coconut milk and simmer for another 5 minutes (do not boil after adding coconut milk). Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '55',
    name: 'Pasta e Fagioli (Vegetarian)',
    description: 'A comforting Italian soup with pasta, beans, and vegetables.',
    image: 'https://picsum.photos/seed/pastaefagioli/400/300',
    cuisine: 'Italian',
    prepTime: '15 mins',
    cookTime: '30 mins',
    ingredients: [
      '1 tbsp Olive oil',
      '1/4 medium Onion, diced',
      '1 carrot, diced',
      '1 celery stalk, diced',
      '2 cloves Garlic, minced',
      '1/2 cup Small pasta (ditalini, elbow macaroni)',
      '1 (400g) can crushed tomatoes',
      '3-4 cups Vegetable broth',
      '1 (400g) can cannellini beans, rinsed and drained',
      '1/2 tsp Dried oregano',
      '1/4 cup Fresh parsley, chopped',
      'Salt and Black pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add diced onion, carrot, and celery. Sauté for 5-7 minutes until softened.',
      'Add minced garlic and dried oregano. Sauté for 1 minute until fragrant. Add crushed tomatoes and vegetable broth. Bring to a simmer.',
      'Add cannellini beans and small pasta. Cook for 8-10 minutes, or until pasta is al dente. If the soup becomes too thick, add a little more vegetable broth.',
      'Season with salt and black pepper to taste. Stir in chopped fresh parsley just before serving. Serve hot.'
    ]
  },
  {
    id: '56',
    name: 'Vegetable Stuffed Bell Peppers (Italian Style)',
    description: 'Bell peppers filled with a savory mixture of rice, vegetables, and herbs, baked until tender.',
    image: 'https://picsum.photos/seed/stuffedpeppers/400/300',
    cuisine: 'Italian',
    prepTime: '20 mins',
    cookTime: '35 mins',
    ingredients: [
      '1 large Bell pepper (any color), halved and deseeded',
      '1/2 cup Cooked rice',
      '1/4 cup Mixed vegetables, finely diced (zucchini, mushrooms, corn)',
      '1/4 medium Onion, finely chopped',
      '1 clove Garlic, minced',
      '1/4 cup Marinara sauce (for baking and topping)',
      '2 tbsp Parmesan cheese, grated (ensure vegetarian if needed)',
      '1 tbsp Fresh basil, chopped',
      '1 tbsp Olive oil',
      'Salt and Black pepper to taste',
      '1/4 cup Vegetable broth (for baking)'
    ],
    instructions: [
      'Preheat oven to 190°C (375°F). Lightly oil a baking dish.',
      'Heat olive oil in a pan. Add finely chopped onion and sauté until translucent. Add minced garlic and sauté for 1 minute. Add finely diced mixed vegetables and cook until tender-crisp (about 5-7 minutes).',
      'In a bowl, combine the cooked vegetables, cooked rice, half of the Parmesan cheese, chopped fresh basil, salt, and black pepper. Mix well.',
      'Spoon the filling mixture evenly into each bell pepper half. Place the stuffed bell peppers in the prepared baking dish. Pour 1/4 cup vegetable broth around the peppers in the dish.',
      'Spoon a tablespoon of marinara sauce over the top of each filled pepper. Cover the baking dish with foil and bake for 20 minutes.',
      'Remove foil, sprinkle remaining Parmesan cheese over the peppers, and bake uncovered for another 10-15 minutes, or until bell peppers are tender and the cheese is melted and bubbly. Serve hot.'
    ]
  },
  {
    id: '57',
    name: 'Easy Spinach and Mushroom Omelette (Egg-less)',
    description: 'A quick and healthy egg-less omelette packed with spinach and mushrooms.',
    image: 'https://picsum.photos/seed/egglessomelette/400/300',
    cuisine: 'Easy to Make',
    prepTime: '10 mins',
    cookTime: '10 mins',
    ingredients: [
      '1/2 cup Besan (Gram flour)',
      '1/4 cup Water (or as needed)',
      '1/4 cup Finely chopped spinach',
      '1/4 cup Sliced mushrooms',
      '1/4 medium Onion, finely chopped (optional)',
      '1/4 tsp Turmeric powder',
      '1/4 tsp Black pepper powder',
      '1/4 tsp Black salt (Kala Namak) (optional, for egg-like flavor)',
      '1 tbsp Oil/Ghee for cooking',
      'Salt to taste'
    ],
    instructions: [
      'In a bowl, whisk besan with water until you get a smooth, lump-free batter of medium consistency (not too thick, not too thin).',
      'Stir in finely chopped spinach, sliced mushrooms, finely chopped onion (if using), turmeric powder, black pepper powder, black salt (if using), and regular salt to taste. Mix well.',
      'Heat oil/ghee in a non-stick pan over medium heat. Pour a ladleful of the batter onto the hot pan and spread it gently to form an omelette shape.',
      'Cook for 3-4 minutes on one side until the edges start to crisp and the top looks set. Carefully flip the omelette and cook for another 2-3 minutes until golden brown and cooked through.',
      'Serve hot with toast or chutney.'
    ]
  },
  {
    id: '58',
    name: 'Quick Vegetable Curry (South Indian Style)',
    description: 'A versatile and easy-to-make mixed vegetable curry with a light South Indian flavor profile.',
    image: 'https://picsum.photos/seed/quickvegc/400/300',
    cuisine: 'South Indian',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: [
      '1.5 cups Mixed vegetables, chopped (potatoes, carrots, beans, peas)',
      '1/4 medium Onion, chopped',
      '1 small Tomato, chopped',
      '1/2 tsp Mustard seeds',
      '1/2 tsp Cumin seeds',
      '5-6 Curry leaves',
      '1 Green chili, slit (optional)',
      '1 tbsp Ginger-garlic paste',
      '1/2 tsp Turmeric powder',
      '1 tsp Coriander powder',
      '1/2 tsp Red chili powder',
      '1/4 cup Coconut milk (optional)',
      '1 tbsp Oil',
      '1 cup Water',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pot. Add mustard seeds and let them splutter. Add cumin seeds, curry leaves, and slit green chili (if using). Sauté for 30 seconds.',
      'Add chopped onion and sauté until translucent. Add ginger-garlic paste and sauté for 1 minute.',
      'Add chopped tomato and cook until soft. Add turmeric powder, coriander powder, red chili powder, and salt. Mix well.',
      'Add chopped mixed vegetables and sauté for 3-5 minutes. Add 1 cup water. Bring to a boil, then reduce heat, cover, and simmer for 10-15 minutes until vegetables are tender.',
      'If using, stir in coconut milk and simmer for another 5 minutes (do not boil after adding coconut milk). Garnish with fresh coriander. Serve hot.'
    ]
  },
  {
    id: '59',
    name: 'Spinach Dal (Palak Dal)',
    description: 'A healthy and nutritious lentil curry with fresh spinach.',
    image: 'https://picsum.photos/seed/spinachdal/400/300',
    cuisine: 'North Indian',
    prepTime: '10 mins',
    cookTime: '25 mins',
    ingredients: [
      '1/2 cup Masoor Dal (Red Lentils) or Toor Dal, rinsed',
      '1 cup Fresh spinach, roughly chopped',
      '1/4 medium Onion, finely chopped',
      '1 small Tomato, finely chopped',
      '1 tsp Ginger-garlic paste',
      '1/4 tsp Turmeric powder',
      '1/2 tsp Red chili powder (optional)',
      '1/2 tsp Coriander powder',
      '1/2 tsp Cumin seeds',
      'A pinch of Asafoetida (hing)',
      '1 tbsp Ghee/Oil',
      '2.5 cups Water',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'In a pressure cooker, combine rinsed dal, chopped onion, tomato, ginger-garlic paste, turmeric powder, red chili powder (if using), coriander powder, and 2.5 cups of water. Add salt to taste. Pressure cook for 3-4 whistles (or until dal is tender). Let the pressure release naturally.',
      'Open the cooker and add the chopped spinach. Mix well. Cook on low heat for 5-7 minutes, stirring occasionally, until spinach is wilted and cooked. Mash the dal slightly if you prefer a smoother consistency.',
      'For the tadka: In a small pan, heat ghee/oil. Add cumin seeds and let them splutter. Add asafoetida. Pour the hot tadka over the dal. Mix well. Garnish with fresh coriander leaves. Serve hot.'
    ]
  },
  {
    id: '60',
    name: 'Vegetable Chowmein (Indian Street Style)',
    description: 'Popular Indian street-style noodles stir-fried with vegetables and a spicy tangy sauce.',
    image: 'https://picsum.photos/seed/chowmein/400/300',
    cuisine: 'Easy to Make',
    prepTime: '10 mins',
    cookTime: '15 mins',
    ingredients: [
      '100g Noodles (hakka noodles or spaghetti)',
      '1 cup Mixed vegetables, julienned (cabbage, carrots, bell peppers, onions)',
      '1 tbsp Oil',
      '1 tsp Ginger-garlic paste',
      '1 tbsp Soy sauce (light)',
      '1 tsp Green chili sauce (or red chili sauce)',
      '1 tsp Vinegar',
      '1/2 tsp Black pepper powder',
      'Fresh spring onions for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Cook noodles according to package directions until al dente. Drain and rinse with cold water to prevent sticking. Toss with a little oil and set aside.',
      'Heat oil in a wok or large pan over high heat. Add ginger-garlic paste and sauté for 30 seconds. Add julienned onions, cabbage, carrots, and bell peppers. Stir-fry on high heat for 3-5 minutes until vegetables are tender-crisp. Do not overcook.',
      'Add the cooked noodles, soy sauce, green chili sauce, vinegar, black pepper powder, and salt. Toss vigorously to combine everything, ensuring the sauce coats the noodles and vegetables evenly. Continue stir-frying for 2-3 minutes until heated through.',
      'Garnish with fresh spring onions. Serve hot.'
    ]
  }
];

export const FREQUENT_PHRASES_TAIWAN: FrequentPhrase[] = [
  // --- Emergency Phrases (Highest Priority) ---
  { id: 'p21', english: 'Help!', mandarin: '救命！', pinyin: 'Jiùmìng!' },
  { id: 'p26', english: 'I need a doctor.', mandarin: '我需要醫生', pinyin: 'Wǒ xūyào yīshēng' },
  { id: 'p27', english: 'Can you help me?', mandarin: '你可以幫我嗎？', pinyin: 'Nǐ kěyǐ bāng wǒ ma?' },

  // --- Essential Communication / Navigation ---
  { id: 'p13', english: 'Do you speak English?', mandarin: '你會說英文嗎？', pinyin: 'Nǐ huì shuō Yīngwén ma?' },
  { id: 'p12', english: 'I don\'t understand.', mandarin: '我聽不懂', pinyin: 'Wǒ tīng bù dǒng' },
  { id: 'p25', english: 'Where is...?', mandarin: '...在哪裡？', pinyin: '... zài nǎlǐ?' },
  { id: 'p5', english: 'Where is the restroom?', mandarin: '洗手間在哪裡？', pinyin: 'Xǐshǒujiān zài nǎlǐ?' },
  { id: 'p19', english: 'I want this.', mandarin: '我要這個', pinyin: 'Wǒ yào zhège' },
  { id: 'p20', english: 'What is this?', mandarin: '這是什麼？', pinyin: 'Zhè shì shénme?' },
  { id: 'p6', english: 'I am vegetarian.', mandarin: '我吃素', pinyin: 'Wǒ chīsù' }, // Important for food safety
  { id: 'p16', english: 'Water', mandarin: '水', pinyin: 'Shuǐ' },
  { id: 'p17', english: 'Hot', mandarin: '熱', pinyin: 'Rè' },
  { id: 'p18', english: 'Cold', mandarin: '冷', pinyin: 'Lěng' },


  // --- Basic Etiquette & Transactions ---
  { id: 'p1', english: 'Hello', mandarin: '你好', pinyin: 'Nǐ hǎo' },
  { id: 'p2', english: 'Thank you', mandarin: '謝謝', pinyin: 'Xièxie' },
  { id: 'p3', english: 'Excuse me / Sorry', mandarin: '不好意思', pinyin: 'Bù hǎoyìsi' },
  { id: 'p11', english: 'Please', mandarin: '請', pinyin: 'Qǐng' },
  { id: 'p9', english: 'Yes', mandarin: '是', pinyin: 'Shì' },
  { id: 'p10', english: 'No', mandarin: '不是', pinyin: 'Bù shì' },
  { id: 'p4', english: 'How much is this?', mandarin: '這個多少錢？', pinyin: 'Zhège duōshǎo qián?' },
  { id: 'p14', english: 'Can I have the bill, please?', mandarin: '買單', pinyin: 'Mǎidān' },
  { id: 'p15', english: 'Too expensive!', mandarin: '太貴了！', pinyin: 'Tài guì le!' },

  // --- General / Social / Travel Phrases ---
  { id: 'p_darshan_best', english: 'Darshan You are the best', mandarin: '達爾山，你是最棒的', pinyin: 'Dá\'ěrshān, nǐ shì zuì bàng de' }, // New phrase
  { id: 'p22', english: 'Good morning', mandarin: '早安', pinyin: 'Zǎo ān' },
  { id: 'p23', english: 'Good night', mandarin: '晚安', pinyin: 'Wǎn ān' },
  { id: 'p8', english: 'Goodbye', mandarin: '再見', pinyin: 'Zàijiàn' },
  { id: 'p24', english: 'Nice to meet you', mandarin: '很高興認識你', pinyin: 'Hěn gāoxìng rènshì nǐ' },
  { id: 'p7', english: 'Delicious!', mandarin: '好吃！', pinyin: 'Hǎo chī!' },
  { id: 'p30', english: 'Slowly', mandarin: '慢慢來', pinyin: 'Mànmàn lái' },
  { id: 'p28', english: 'Cheers!', mandarin: '乾杯！', pinyin: 'Gānbēi!' },
  { id: 'p29', english: 'I love Taiwan!', mandarin: '我愛台灣！', pinyin: 'Wǒ ài Táiwān!' },
];

export const PREDEFINED_RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'Ooh Cha Cha (Gongguan)',
    cuisine: 'Vegan Cafe',
    address: 'No. 2號, Lane 12, Section 4, Roosevelt Rd, Zhongzheng District, Taipei City',
    notes: 'Known for smoothie bowls, burgers, and healthy vegan options. Close to NTNU.',
    image: 'https://picsum.photos/seed/oohchacha/400/300',
    link: 'https://maps.app.goo.gl/YyC7J1E6X9v2Z5jXA' // Closest match for Ooh Cha Cha Gongguan
  },
  {
    id: 'r2',
    name: 'Soul R. Vegan Cafe',
    cuisine: 'Vegan/Vegetarian',
    address: 'No. 12, Lane 283, Section 3, Roosevelt Rd, Da’an District, Taipei City',
    notes: 'Cozy spot with a variety of vegan dishes, often praised for its atmosphere.',
    image: 'https://picsum.photos/seed/soulr/400/300',
    link: 'https://maps.app.goo.gl/e7z2Z5c5Q3P9X9wN6' // Based on the provided address
  },
  {
    id: 'r3',
    name: 'Herban Kitchen & Bar',
    cuisine: 'Vegetarian/Vegan-friendly',
    address: 'No. 27, Lane 101, Section 4, Zhongxiao E Rd, Da’an District, Taipei City (a bit further, but good)',
    notes: 'More upscale, offers creative vegetarian and vegan dishes.',
    image: 'https://picsum.photos/seed/herban/400/300',
    link: 'https://maps.app.goo.gl/M4tG7W6K8J3R5Y5Q7' // Based on the provided address
  },
  {
    id: 'r4',
    name: 'Indian Cuisines near NTNU (General)',
    cuisine: 'Indian Vegetarian',
    address: 'Various locations in Gongguan area',
    notes: 'Ask Gemini for specific recommendations like "Mayur Indian Kitchen (MIK)" or "Sree Indian Palace" if they have vegetarian options near Gongguan.',
    image: 'https://picsum.photos/seed/indianfood/400/300',
    link: 'https://maps.app.goo.gl/R7C3F8P2X6V1T9Y4A' // General area link for Gongguan
  },
  {
    id: 'r5',
    name: '好想吃冰 かき氷 日式蔬食 台大公館店 (Haoxiangchibing Japanese Vegetarian)',
    cuisine: 'Japanese Vegetarian',
    address: 'Specific address not easily found, but it\'s a vegetarian restaurant in Gongguan, often mentioned for vegan meals.',
    notes: 'Often mentioned as a vegetarian/vegan-friendly Japanese restaurant. Look for "好想吃冰" in Gongguan.',
    image: 'https://picsum.photos/seed/haoxiangchibing/400/300',
    link: 'https://maps.app.goo.gl/x8y2X7d1F5G9H3K2L' // General search for "好想吃冰 公館"
  },
  {
    id: 'r6',
    name: 'Gongguan Vegan Spicy Stinky Tofu (公館VEGAN素食麻辣臭豆腐)',
    cuisine: 'Taiwanese Vegan (Stinky Tofu)',
    address: 'Likely a stall or small shop within Gongguan Night Market or nearby',
    notes: 'Specializes in vegan mala (spicy and numbing) stinky tofu soup. Great for an authentic local experience.',
    image: 'https://picsum.photos/seed/veganspicytofu/400/300',
    link: 'https://maps.app.goo.gl/F6E9K2L1P4M7N8Q5R' // Link to Gongguan Night Market, where it's likely found
  },
  {
    id: 'r7',
    name: 'Bao Su Zhai Vegetarian Snack Bar (寶素齋素食小吃店)',
    cuisine: 'Traditional Taiwanese Vegetarian',
    address: 'Likely a stall or small shop within Gongguan Night Market or nearby',
    notes: 'A meat-free food stall offering traditional Taiwanese noodle dishes and various sides. Look for the Buddhist swastika on the sign.',
    image: 'https://picsum.photos/seed/baosuzhai/400/300',
    link: 'https://maps.app.goo.gl/F6E9K2L1P4M7N8Q5R' // Link to Gongguan Night Market, where it's likely found
  },
  {
    id: 'r8',
    name: '全國素食自助餐 (National Vegetarian Buffet)',
    cuisine: 'Taiwanese Vegetarian Buffet',
    address: 'No. 118-8, Jinhua St, Da’an District, Taipei City (close to NTNU Main Campus II, short walk to Gongguan)',
    notes: 'A typical Taiwanese vegetarian buffet where you pay by weight. Offers a wide variety of dishes.',
    image: 'https://picsum.photos/seed/nationalveg/400/300',
    link: 'https://maps.app.goo.gl/D5B8G1J7L3N6H9P0Q' // Based on the provided address
  },
  {
    id: 'r9',
    name: 'Vege Creek (蔬河)',
    cuisine: 'Taiwanese Vegan Luwei',
    address: 'Multiple locations in Taipei, check for closest to Gongguan. One is in Taipei 101, but there might be closer ones.',
    notes: 'A popular chain of all-vegan "luwei" shops where you pick your ingredients to be braised in a flavorful broth. Very fresh and customizable.',
    image: 'https://picsum.photos/seed/vegecreek/400/300',
    link: 'https://maps.app.goo.gl/J2K5M8P1R4S7T0U3V' // General search for "Vege Creek Taipei", encouraging checking specific locations
  },
  {
    id: 'r10',
    name: 'Minder Vegetarian (明德素食園)',
    cuisine: 'Vegetarian Buffet Chain',
    address: 'Multiple locations in Taipei, check for closest to Gongguan. Often found in mall food courts.',
    notes: 'A well-known vegetarian buffet chain in Taiwan, generally considered clean and offering a good variety of dishes. Pay by weight.',
    image: 'https://picsum.photos/seed/minder/400/300',
    link: 'https://maps.app.goo.gl/L5N8Q1T4W7X0Y3Z6A' // General search for "Minder Vegetarian Taipei", encouraging checking specific locations
  }
];

export const GEMINI_API_KEY = process.env.API_KEY;

export const JEENU_SYSTEM_PROMPT_BASE = "You are a very polite and helpful AI assistant for Jeenu. She has beautiful eyes, a killer smile & a dimple on her cheek. keep flirting occasionally.";

export const GLOBAL_CHAT_SYSTEM_PROMPT = `${JEENU_SYSTEM_PROMPT_BASE} You are Jeenu's all-in-one assistant. You can help her with:
1.  **Vegetarian Restaurants:** Finding vegetarian restaurants near NTNU Gongguan, including Indian cuisine. Provide helpful suggestions and details. When providing an address for a specific restaurant, if you have its Google Maps URL, please include it as well.
2.  **Easy Recipes:** Providing simple single-pot recipes (North Indian, South Indian, Italian, etc.). Offer clear, step-by-step instructions, provide quantity of ingredients for  1 perosn and make cooking sound fun.
3.  **Language Help:** Translating phrases between English and Mandarin Chinese (Taiwanese Mandarin). 
    - Translate Onlt if the query contains the words 'translate', 'translation', 'translate to Mandarin', 'translate to English', 'Mandarin translation', or 'English translation'.
    - If English is provided, give the Mandarin translation and its Pinyin.
    - If Mandarin is provided, give the English translation.
    - For translations, please keep your response concise and focused on the translation itself, without extra conversational remarks. For example, if asked to translate 'Hello', respond with '你好 (Nǐ hǎo)'. If asked to translate '你好', respond with 'Hello'.

    IMPORTANT: Use HTML <b> tags for bold text in your responses, not Markdown **. 

Listen to Jeenu's request and respond helpfully based on these capabilities. If a request is outside these areas, Answer them accordingly.`;

// export const RESTAURANT_SYSTEM_PROMPT = `${JEENU_SYSTEM_PROMPT_BASE} Jeenu is looking for vegetarian restaurant recommendations, especially Indian cuisine, but also other types of vegetarian food near NTNU Gongguan. Provide helpful suggestions and details if you can find them.`;
// export const RECIPE_SYSTEM_PROMPT = `${JEENU_SYSTEM_PROMPT_BASE} Jeenu is interested in easy-to-make single-pot recipes (North Indian, South Indian, Italian, etc.). When she asks for a recipe, provide clear, step-by-step instructions. Make the cooking process sound fun and manageable.`;
// export const LANGUAGE_SYSTEM_PROMPT = `${JEENU_SYSTEM_PROMPT_BASE} Jeenu needs help with language, particularly translating phrases between English and Mandarin Chinese (Taiwanese Mandarin). 
// When she provides a phrase for translation:
// - If it's English, provide the Mandarin translation and its Pinyin.
// - If it's Mandarin, provide the English translation.
// IMPORTANT: Your response must ONLY contain the translated text (and Pinyin if applicable for Mandarin). Do not include any other words, explanations, or conversational phrases. 
// For example, if asked to translate 'Hello', respond with '你好 (Nǐ hǎo)' and nothing else.
// If asked to translate '你好', respond with 'Hello' and nothing else.
// If you cannot perform the translation for some reason, you may briefly state that, but still avoid conversational additions.`;

